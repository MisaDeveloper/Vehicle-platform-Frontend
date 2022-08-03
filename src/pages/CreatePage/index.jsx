import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './CreatePage.module.css';

import Form from '../../components/Form';

import CreateAPI from '../../api/Create';

function CreatePage() {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [carYear, setCarYear] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await CreateAPI(
            user.userToken, 
            name, 
            brand, 
            carYear, 
            description, 
            price, 
            user.userData.id
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

export default CreatePage;