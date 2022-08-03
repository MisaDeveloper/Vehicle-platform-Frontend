import styles from './Form.module.css';

function Form(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={styles.divInput}>
                <label htmlFor="name">
                    Nome:
                </label>
                <input 
                    value={props.name}
                    onChange={(event) => props.setName(event.target.value)}
                    name='name' 
                    type="text" 
                />
            </div>

            <div className={styles.divInput}>
                <label htmlFor="brand">
                    Marca:
                </label>
                <input 
                    value={props.brand}
                    onChange={(event) => props.setBrand(event.target.value)}
                    name='brand' 
                    type="text" 
                />
            </div>

            <div className={styles.divInput}>
                <label htmlFor="carYear">
                    Ano:
                </label>
                <input 
                    value={props.carYear}
                    onChange={(event) => props.setCarYear(event.target.value)}
                    name='carYear' 
                    type="number" 
                />
            </div>

            <div className={styles.divInput}>
                <label htmlFor="description">
                    Descrição:
                </label>
                <textarea 
                    value={props.description}
                    onChange={(event) => props.setDescription(event.target.value)}
                    name='description'
                ></textarea>
            </div>

            <div className={styles.divInput}>
                <label htmlFor="price">
                    Preço:
                </label>
                <input 
                    value={props.price}
                    onChange={(event) => props.setPrice(event.target.value)}
                    name='price' 
                    type="number" 
                />
            </div>

            <div className={styles.divButton}>
                <button type='submit'>
                    Salvar
                </button>
            </div>
        </form>
    );
}

export default Form;