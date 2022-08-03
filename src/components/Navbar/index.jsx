import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

import { useNavigate } from 'react-router-dom'

function Navbar(props) {

    const navigate = useNavigate()

    function Logout() {
        localStorage.removeItem('user');

        navigate('/login');
    }

    return(
        <nav>
            <div className={styles.divImage}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.divLinksList}>
                <input id="Checkbox" name="NavCheckbox" className={styles.NavCheckbox} type="checkbox" />
                <label htmlFor="Checkbox"><i className="fa-solid fa-bars"></i></label>
                <ul>
                    <li>
                        {
                            props.home ?
                            <a className={styles.activeNavLink} href="">Home</a>
                            :
                            <a href="/">Home</a>
                        }
                    </li>
                    <li>
                        {
                            props.myPublications ?
                            <a className={styles.activeNavLink} href="">Minhas Publicações</a>
                            :
                            <a href="/mypublications">Minhas Publicações</a>
                        }
                    </li>
                    <li>
                        <button onClick={() => Logout()}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;