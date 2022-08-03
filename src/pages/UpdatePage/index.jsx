import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './UpdatePage.module.css';

import Form from '../../components/Form';

import { GetVehicleToUpdateAPI, UpdateAPI } from '../../api/Update';

function UpdatePage() {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [carYear, setCarYear] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const { vehicleId } = useParams();

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        
        async function getVehicle() {
            const response = await GetVehicleToUpdateAPI(user.userToken, vehicleId);

            if(response.authorized === false) {
                localStorage.setItem('message', JSON.stringify(response));

                navigate('/login');
            }
            else {
                setName(response[0].name);
                setBrand(response[0].brand);
                setCarYear(response[0].carYear);
                setDescription(response[0].description);
                setPrice(response[0].priceCents / 100);
            }
        }

        getVehicle();
        
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await UpdateAPI(
            user.userToken, 
            name, 
            brand, 
            carYear, 
            description, 
            price, 
            vehicleId
        );

        if(response.authorized === false) {
            navigate('/login');
        } 
        else {
            localStorage.setItem('message', JSON.stringify(response));

            navigate('/mypublications');
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.divForm}>
                <div className={styles.divBackIcon}>
                    <a href="/mypublications">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                </div>

                <Form 
                    name={name} setName={setName}
                    brand={brand} setBrand={setBrand}
                    carYear={carYear} setCarYear={setCarYear}
                    description={description} setDescription={setDescription}
                    price={price} setPrice={setPrice}

                    handleSubmit={handleSubmit}
                />

            </div>
        </div>
    );
}

export default UpdatePage;