import { useEffect, useState } from 'react';
import styles from './SignupPage.module.css';
import logo from '../../img/logo.png';
import Message from '../../components/Message';

import SignupUserAPI from '../../api/Signup';

function SignupPage() {

    const [firstName, setFirstName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [message, setMessage] = useState();

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await SignupUserAPI(firstName, lastName, email, password);

        setMessage(response);
    }

    return(
        <div className={styles.container}>
            <div className={styles.divSignup}>

                <div className={styles.logoImage}>
                    <img src={logo} />
                </div>

                <h2>
                    Sign up
                </h2>

                <div className={styles.containerForm}>
                    <form onSubmit={handleSubmit}>

                        <div className={styles.divInput}>
                            <label>
                                First name:
                            </label>
                            <div>
                                <input onChange={(event) => setFirstName(event.target.value)} name="fistName" type="text" />
                            </div>
                        </div>

                        <div className={styles.divInput}>
                            <label>
                                Last name:
                            </label>
                            <div>
                                <input onChange={(event) => setlastName(event.target.value)} name="lastName" type="text" />
                            </div>
                        </div>

                        <div className={styles.divInput}>
                            <label>
                                Email:
                            </label>
                            <div>
                                <input onChange={(event) => setEmail(event.target.value)} name="email" type="email" />
                            </div>
                        </div>

                        <div className={styles.divInput}>
                            <label>
                                Password:
                            </label>
                            <div>
                                <input onChange={(event) => setPassword(event.target.value)} name="password" type="password" />
                            </div>
                        </div>

                        <Message 
                            message={message}
                        />

                        <button className={styles.loginButton} type="submit">
                            Sign up
                        </button>

                        <div className={styles.divMakeLogin}>
                            <div>
                                Already have an account?
                            </div>
                            <a href="/login">
                                Login
                            </a>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignupPage;