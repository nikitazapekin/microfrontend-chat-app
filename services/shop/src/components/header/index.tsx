
import Sidebar from "../Sidebar"
import styles from "./index.module.scss"
import { sidebarSelector } from "@packages/shared/store/selectors/sidebar.selector"
import { SidebarAction } from "@packages/shared/store/action-creators/SidebarActionCreateor"





import { useAppDispatch } from '@/hooks/redux';
import AuthService, { personalApi } from "@packages/shared/API/auth"
import { useSelector } from 'react-redux';





const Header = () => {
    const isSelected = true
    const data = useSelector(sidebarSelector)
    const dispatch = useAppDispatch()
    const handleDispatch = () => {
        dispatch(SidebarAction())
    }
    return (
        <div className={styles.header}>

            <Sidebar />
            <div className={styles.header__content}>
                <div className={styles.left}>
                    <div className={styles.left__burger} onClick={handleDispatch}>
                        <div className={styles.left__burger__item}></div>
                        <div className={styles.left__burger__item}></div>
                        <div className={styles.left__burger__item}></div>
                    </div>
                    <input type="search" className={styles.left__input} placeholder="Search" />
                </div>
                {isSelected ? (
                    <div className={styles.right}>
                        <div className={styles.right__text}>
                            <p className={styles.right__text__title}>
                                <b>
                                    Test
                                </b>
                            </p>
                            <p className={styles.right__text__last}>
                                Last seen 33 minutes age
                            </p>
                        </div>
                        <div className={styles.right__dots}>
                            <div className={styles.right__dot}></div>
                            <div className={styles.right__dot}></div>
                            <div className={styles.right__dot}></div>
                        </div>
                    </div>
                ) : (
                    <>

                    </>
                )}
            </div>
        </div>
    );
}

export default Header;









/*



import styles from "./index.module.scss"
import Logo from "../../assets/image 4.png"

import { sidebarSelector } from "@packages/shared/store/selectors/sidebar.selector"
import { SidebarAction } from "@packages/shared/store/action-creators/SidebarActionCreateor"
import { useAppDispatch } from '@/hooks/redux';
import AuthService, { personalApi } from "@packages/shared/API/auth"
import { useSelector } from 'react-redux';
import { authSelector } from "@packages/shared/store/selectors/auth.selector"

import { isUnauthorizedSelector } from "@packages/shared/store/selectors/isUnauthorized.selector"
const Sidebar = () => {


    const data = useSelector(sidebarSelector)
    const isAuthorized = useSelector(isUnauthorizedSelector)
    const dispatch = useAppDispatch()
    const handleDispatch = () => {
        dispatch(SidebarAction())
    }


    */