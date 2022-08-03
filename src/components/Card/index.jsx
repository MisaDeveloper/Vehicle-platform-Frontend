import styles from './Cart.module.css';

function Card(props) {
    return(
        <div className={styles.cartContainer}>
            <div>
                {
                    props.editAndDelete && 
                    <div className={styles.divIcons}>
                        <a href={`/update/${props.id}`}><i className="fa-regular fa-pen-to-square"></i></a>
                        <i onClick={() => props.handleDelete(props.id)} className="fa-regular fa-trash-can"></i>
                    </div>
                }
                <h3>
                    { props.name || '' }
                </h3>
                <div>
                    Marca: { props.brand || '' }
                </div>
                <div>
                    Ano: { props.carYear || '' }
                </div>
                <div>
                    Descrição: { props.description || '' }
                </div>
                <div>
                    Preço: { props.price || '' }
                </div>
            </div>
        </div>
    );
}

export default Card;