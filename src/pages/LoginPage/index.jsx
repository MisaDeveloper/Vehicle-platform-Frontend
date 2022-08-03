import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './LoginPage.module.css';
import logo from '../../img/logo.png';
import Message from '../../components/Message';

import LoginAPI from '../../api/Login';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [message, setMessage] = useState();

    useEffect(() => {
        const message = JSON.parse(localStorage.getItem('message'));

        if(message) {
            setMessage(message);
            localStorage.removeItem('message');
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await LoginAPI(email, password);

        if(response.auth) {

            localStorage.setItem('user', JSON.stringify({
                userData: response.user,
                userToken: response.token
            }));

            navigate('/');

        } else {
            setMessage(response);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.divLogin}>

                <div className={styles.logoImage}>
                    <img src={logo} />
                </div>

                <h2>
                    Login
                </h2>

                <div className={styles.containerForm}>
                    <form onSubmit={handleSubmit}>

                        <div className={styles.divInput}>
                            <input 
                                value={email || ''} 
                                onChange={(event) => setEmail(event.target.value)} 
                                name="email" 
                                placeholder="Email" 
                                type="email" 
                            />
                        </div>

                        <div className={styles.divInput}>
                            <input 
                                value={password || ''} 
                                onChange={(event) => setPassword(event.target.value)} 
                                name="password" 
                                placeholder="Password" 
                                type="password"
                            />
                        </div>

                        <div className={styles.divForgotPassword}>
                            <a href="#">
                                Forgot password?
                            </a>
                        </div>

                        <Message 
                            message={message}
                        />

                        <button className={styles.loginButton} type="submit">
                            Login
                        </button>

                        <div className={styles.areaSignup}>
                            <div>
                                Don't have an account?
                            </div>
                            <a href="/signup">
                                sign up
                            </a>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;