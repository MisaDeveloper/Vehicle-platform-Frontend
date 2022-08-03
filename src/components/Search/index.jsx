import styles from './Search.module.css';

function Search(props) {
    return(
        <div className={styles.searchContainer}>
            <div className={styles.divSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                    value={props.textSearch}
                    onChange={(event) => props.setTextSearch(event.target.value)}
                    placeholder='Pesquisa' 
                    type="text" 
                />
            </div>
        </div>
    );
}

export default Search;