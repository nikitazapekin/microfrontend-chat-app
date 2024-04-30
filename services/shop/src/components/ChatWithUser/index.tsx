import styles from "./index.module.scss"
import Tick from  "../../assets/tick 2.png"
import ChatKeypad from "../ChatKeypad"
const ChatWithUser = () => {
    const messages = [
        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 


        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 


        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 



        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 

        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 
        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 



        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 1,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }, 


        {
            message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error impedit vel nostrum fugiat molestias accusamus facere ipsa eveniet perspiciatis, dolor perferendis maiores, quaerat dolores architecto assumenda sed consequuntur laudantium.",
            username: "Test",
            date: "12-09-2024",
            time: "12:00",
            isRead: false,
            id: 2,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s",
            isGroup: false
        }

    ]
    const isSelected = false
    return (
        <div className={styles.chat}>
         
         
         {/*
            <div className={styles.test}>
            ewwe
            </div>
    */}

    <ChatKeypad />
            <div className={styles.chat__inner}>
                {isSelected ? (
                    <div className={styles.chat__select__chat}>
                        Select any chat to start messageing
                    </div>
                ) : (
                    <div className={styles.messages}>
                        {messages.map((item, index) => (
                            <div key={index} className={styles.message}>
                                <img src={item.logo} alt="logo" className={styles.message__logo} />
                                <div className={styles.message__right}>
                                    <p className={styles.message__title}>
                                        {item.username}
                                    </p>
                                    <p className={styles.message__content}>
                                        {item.message}
                                    </p>
                                    <div className={styles.message__time__block}>
                                    <p className={styles.message__time}>
                                        {item.time}
                                    </p>
                                    <img src={Tick} alt="tick" className={styles.message__time__tick} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatWithUser;