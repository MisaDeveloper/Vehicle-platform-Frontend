import styles from './CreateButton.module.css';

function Button(props) {
    return(
        <div className={styles.buttonContainer}>
            <a href="/create">
                <div className={styles.divIcon}>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </a>
        </div>
    );
}

export default Button;