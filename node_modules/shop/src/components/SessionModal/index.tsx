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
    return (
        <>
            <div className={styles.sidebar} style={{ transform: data.isOpen ? `translateX(0)` : `translateX(-100%)` }}>
                <div className={styles.sidebar__inner}>
                    <div className={styles.sidebar__header}>
                        <img src={Logo} alt="logo" className={styles.sidebar__header__logo} />
                        <p className={styles.sidebar__header__title}>
                            Nikita {JSON.stringify(isAuthorized.isUnauthorized)}
    */