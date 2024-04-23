/*
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin'
const WelcomeBlock = () => {
    return (
      

        <div className={styles.welcome__block__container}>
            <h1 className={styles.welcome__title}>
                Telegram
            </h1>
            <h2 className={styles.welcome__subtitle}>
                Welcome to official telegram app.
                It’s fast and secure
            </h2>
            <Link
            to={adminRoutes.auth}
            >
 <div className={styles.welcome__btn}>
<a href="#">
START MESSAGING 
</a>
 </div>
 
            </Link>
        </div>
 
    );
}

export default WelcomeBlock;
//import {adminRoutes} from '@packages/shared/src/routes/admin'
//  <Link to={adminRoutes.about}>ABOUT</Link>

*/


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
{/*
            <button className={`${styles.welcome__btn} ${styles.flex_item}`}>
            START MESSAGING
            </button>
    */}


            <div className={`${styles.flex__container}`}>
                <Link   to={adminRoutes.auth}>
                <button // className={`${styles.welcome__btn} ${styles.flex_item}`}
                 //   className={`${styles.flex__item} ${styles.one}`}
                 className={`${styles.flex__item} ${styles.welcome__btn}`}
                >
                    
                    START MESSAGING
                </button>
                    </Link>

            </div>
{/*
            <div className={`${styles.flex__container}`}>
            
            <button className={`${styles.flex__item} ${styles.one}`}>Первый</button>
            </div>
    */}

        </section>

    );
}

export default WelcomeBlock;
//import {adminRoutes} from '@packages/shared/src/routes/admin'
//  <Link to={adminRoutes.about}>ABOUT</Link>


/*

<button className={`${styles.welcome__btn} ${styles.test}`}>
    START MESSAGING
</button>


*/