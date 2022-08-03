import styles from './Message.module.css';

function Message(props) {

    function setMessageColorAndBorder(type) {
        if(type === 'success') {
            return {
                color: 'rgb(0, 116, 0)',
                backgroundColor: 'rgb(207, 255, 207)',
                border: '3px solid rgb(0, 165, 0)'
            }
        }
        else if(type === 'error') {
            return {
                color: 'rgb(116, 0, 0)',
                backgroundColor: 'rgb(255, 207, 207)',
                border: '3px solid rgb(165, 0, 0)'
            }
        }
    }

    return(
        <>
            {
                props.message && 
                <div 
                    className={styles.divMessage}
                    style={setMessageColorAndBorder(props.message.type)}
                >
                    {props.message.message}
                </div>
            }
        </>
    );
}

export default Message;