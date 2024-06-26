
import styles from "./index.module.scss"
import Logo from "../../assets/image 4.png"
import { sidebarSelector } from "@packages/shared/store/selectors/sidebar.selector"
import { SidebarAction } from "@packages/shared/store/action-creators/SidebarActionCreateor"
import { useAppDispatch } from '@/hooks/redux';
import { useSelector } from 'react-redux';
import { personalSelector } from "@packages/shared/store/selectors/personalInformation.selector"
const Sidebar = () => {
    const data = useSelector(sidebarSelector)
    const personalData = useSelector(personalSelector)
    const dispatch = useAppDispatch()
    const handleDispatch = () => {
        dispatch(SidebarAction())
    }

    return (
        <>
            <div className={styles.sidebar} style={{ transform: data.isOpen ? `translateX(0)` : `translateX(-100%)` }}>
                <div className={styles.sidebar__inner}>
                    <div className={styles.sidebar__header}>
                        <img src={Logo} alt="logo" className={styles.sidebar__header__logo} />
                        <p className={styles.sidebar__header__title}>
                           
                            {personalData.username}
                        </p>
                    </div>
                    <div className={styles.sidebar__main}>
                        <div className={styles.sidebar__item}>
                            <p className={styles.sidebar__item__title}>
                                New group
                            </p>
                        </div>
                        <div className={styles.sidebar__item}>
                            <p className={styles.sidebar__item__title}>
                                Settings
                            </p>
                        </div>
                        <div className={styles.sidebar__item}>
                            <p className={styles.sidebar__item__title}>
                                Night mode
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overlay} onClick={handleDispatch} style={{ display: data.isOpen ? `block` : `none` }}>

            </div>
        </>
    );
}

export default Sidebar;
