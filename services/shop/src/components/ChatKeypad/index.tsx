
import styles from "./index.module.scss"
import Smiley from "../../assets/image 5.png"
import Send from "../../assets/image 6.png"
import Clip from "../../assets/image 4.png"
const ChatKeypad = () => {
    return (
        <div className={styles.keypad}>
            <div className={styles.keypad__inner}>
                <img src={Clip} alt="clip" className={styles.clip} />

                <div className={styles.keypad__input__block}>
                    <input type="text" className={styles.keypad__input} placeholder="Type message..." />
                </div>

                <img src={Smiley} alt="clip" className={styles.smiley} />
                <img src={Send} alt="clip" className={styles.send} />
            </div>
        </div>
    );
}

export default ChatKeypad;