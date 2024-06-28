
import styles from "./index.module.scss"
import Smiley from "../../assets/image 5.png"
import Send from "../../assets/image 6.png"
import Clip from "../../assets/image 4.png"
import EmojiWhileHovering from "../EmojiWhileHovering";
interface ChatKeypadProps {
    handleSendMessage: () => void;
    handleSetMessage: (message: string) => void;
}
const ChatKeypad = ({ handleSendMessage, handleSetMessage }: ChatKeypadProps) => {
    return (
        <div className={styles.keypad}>
            <div className={styles.keypad__inner}>
                <img src={Clip} alt="clip" className={styles.clip} />
                <div className={styles.keypad__input__block}>
                    <input type="text"
                        onChange={(e) => handleSetMessage(e.target.value)}
                        className={styles.keypad__input} placeholder="Type message..." />
                </div>
                <img src={Smiley} alt="clip" className={styles.smiley} />
                <img src={Send} alt="send" className={styles.send} onClick={handleSendMessage} />
            </div>
        </div>
    );
}

export default ChatKeypad;