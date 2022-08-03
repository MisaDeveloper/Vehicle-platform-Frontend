import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './MyPublicationsPage.module.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import CreateButton from '../../components/CreateButton';
import Message from '../../components/Message';

import { GetUserVehiclesAPI, DeleteVehicleAPI } from '../../api/MyPublications';

function MyPublications() {

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [vehicles, setVehicles] = useState([]);

    const [message, setMessage] = useState();

    useEffect(() => {

        const message = JSON.parse(localStorage.getItem('message'));

        if(message) {
            setMessage(message);
            localStorage.removeItem('message');
        }

        async function fetchPromisse() {
            const response = await GetUserVehiclesAPI(user.userToken, user.userData.id);

            if(response.authorized === false) {
                localStorage.setItem('message', JSON.stringify(response));

                navigate('/login');
            } else {
                setVehicles(response);
            }
        }

        fetchPromisse();
    }, []);

    async function handleDelete(vehicleId) {
        const response = await DeleteVehicleAPI(user.userToken, vehicleId);

        localStorage.setItem('message', JSON.stringify(response));

        window.location.reload();
    }

    return(
        <div className={styles.container}>
            <Navbar 
                myPublications={true}
            />
            <div className={styles.contentContainer}>

                <div className={styles.divUserName}>
                    Olá, { user.userData.firstName }
                </div>

                <h3>
                    Meus anúncios
                </h3>

                <Message 
                    message={message}
                />

                <div className={styles.divGrid}>

                    <CreateButton />
                    
                    {
                        vehicles.map((vehicle) => {
                            return(
                                <Card 
                                    key={vehicle.id}
                                    id={vehicle.id}
                                    name={vehicle.name}
                                    brand={vehicle.brand}
                                    carYear={vehicle.carYear}
                                    description={vehicle.description}
                                    price={vehicle.priceCents / 100}
                                    editAndDelete={true}
                                    handleDelete={handleDelete}
                                />
                            );
                        })
                    }

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default MyPublications;