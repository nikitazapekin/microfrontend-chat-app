import { useAppDispatch } from "../../../../../packages/shared/src/hooks/redux";
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";
import { adminRoutes } from '@packages/shared/src/routes/admin'
const WelcomeBlock = () => {
    return (
        <section className={styles.welcome__block}>
            <div className={styles.welcome__inner__content}>
                <h1 className={styles.welcome__title}>
                    Telegram
                </h1>
            </div>
            <h2 className={styles.welcome__about}>
                Welcome to official telegram app.
                It’s fast and secure
            </h2>
          
            <div className={`${styles.flex__container}`}>
                <Link to={adminRoutes.auth}>
                    <button
                        className={`${styles.flex__item} ${styles.welcome__btn}`}
                    >
                        START MESSAGING
                    </button>
                </Link>
            </div>
        </section>

    );
}

export default WelcomeBlock;
