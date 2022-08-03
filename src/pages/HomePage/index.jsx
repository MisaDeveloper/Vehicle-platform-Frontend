import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './HomePage.module.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Card from '../../components/Card';

import { GetAllVehiclesAPI, SearchVehiclesAPI } from '../../api/Home';

function HomePage() {

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [vehicles, setVehicles] = useState([]);
    
    const [textSearch, setTextSearch] = useState('');

    async function fetchPromisse() {
        const response = await GetAllVehiclesAPI(user.userToken);

        if(response.authorized === false) {
            localStorage.setItem('message', JSON.stringify(response));

            navigate('/login');
        } else {
            setVehicles(response);
        }
    }

    useEffect(() => {
        
        async function Search() {
            if(textSearch !== '') {
                const response = await SearchVehiclesAPI(textSearch);
                setVehicles(response);
            } else {
                fetchPromisse()
            }
        }

        Search();
        
    }, [textSearch]);

    return(
        <div className={styles.container}>
            <Navbar 
                home={true}
            />
            <div className={styles.contentContainer}>

                <Search 
                    setTextSearch={setTextSearch}
                    textSearch={textSearch}
                />

                <h3>
                    Anúncios
                </h3>

                <div className={styles.divGrid}>
                    
                    {
                        vehicles.map((vehicle) => {
                            return(
                                <Card 
                                    key={vehicle.id}
                                    name={vehicle.name}
                                    brand={vehicle.brand}
                                    carYear={vehicle.carYear}
                                    description={vehicle.description}
                                    price={vehicle.priceCents / 100}
                                    editAndDelete={false}
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

export default HomePage;