import Emoji from "@packages/shared/utils/emoji.json"
import styles from "./index.module.scss"
const EmojiWhileHovering = () => {
    return (<>
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__header}>
                    <p className={styles.modal__header__item}>
                        Emoji
                    </p>

                    <p className={styles.modal__header__item}>
                        Stickers
                    </p>

                    <p className={styles.modal__header__item}>
                        GIFs
                    </p>
                </div>
            </div>
        </div>
    </>);
}

export default EmojiWhileHovering;