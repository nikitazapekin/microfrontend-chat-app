import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss"
import { isUnauthorizedSelector } from "@packages/shared/store/selectors/isUnauthorized.selector"
import { adminRoutes } from '@packages/shared/src/routes/admin'

import { useSelector } from 'react-redux';
const SessionModal = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(adminRoutes.auth)
    }
    const isAuthorized = useSelector(isUnauthorizedSelector)
    return (
<>
{!isAuthorized.isUnauthorized && (

    <div className={styles.session__modal}>
            <div className={styles.session__inner}>
                <p className={styles.session__title}>
                    Your session is expired
                </p>
                <button className={styles.session__btn} onClick={handleNavigate}>
                    Sign in again
                </button>
            </div>
            <div className={styles.session__overlay}>

            </div>
        </div>
        )}
</>
    );
}

export default SessionModal;
 