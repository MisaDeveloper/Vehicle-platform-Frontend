import styles from './Footer.module.css';
import logo from '../../img/logo.png';

function Footer() {
    return(
        <div className={styles.containerFooter}>
            <div className={styles.divImage}>
                <img src={logo} />
            </div>
            <div className={styles.divRights}>
                All rights reserved ©2022 - Developer Misael P. Souza
            </div>
        </div>
    );
}

export default Footer;