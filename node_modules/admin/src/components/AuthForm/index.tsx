

import { adminRoutes } from '@packages/shared/src/routes/admin'
import styles from "./index.module.scss"
import { Link, useNavigate } from "react-router-dom";
import Telegram from "../../assets/telegram.png"
import Telephone from "../../assets/phone-call.png"
import globalStyles from "../../styles/index.module.scss"
import Country from "../../assets/world.png"
import User from "../../assets/user (2).png"
import { shopRoutes } from '@packages/shared/src/routes/shop'
import { TypePersonalData } from "@packages/shared/store/action-creators/AuthAcrtionCreator"

import { IsUnauthorizedAction } from "@packages/shared/store/action-creators/IsAuthorizedActionCreator"
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import AuthService, { personalApi } from "@packages/shared/API/auth"
import { useSelector } from 'react-redux';
import { authSelector } from "@packages/shared/store/selectors/auth.selector"

import { PersonalInformationByUsernameAction } from "@packages/shared/store/action-creators/PersonalInformationActionCreator"
interface Types {
    username: string,
    country: string,
    tel: string,
    password: string
}
const AuthForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const data = useSelector(authSelector)
    const [personalData, setPersonalData] = useState<Types>({
        username: "",
        country: "",
        tel: "",
        password: ""
    })
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPersonalData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    useEffect(() => {
        dispatch(TypePersonalData(personalData))
    }, [personalData])

    const handleAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        AuthService.login(personalData.username, personalData.country, personalData.tel).then(res => {
            localStorage.setItem("token", JSON.stringify({ "token": res.data.token }))
            if (res.status == 200) {
                localStorage.setItem("username", personalData.username)
                navigate(shopRoutes.chat)
                dispatch(IsUnauthorizedAction({ isUnauthorized: true }))
                dispatch(PersonalInformationByUsernameAction(personalData.username))

            }
        }
        )
    }
    const han = () => {
        AuthService.getAccessToken()
    }
    return (
        <div className={globalStyles.container}>
            <button onClick={han}> fff</button>
            <form action="" className={styles.auth__form__component}>
                <div className={styles.auth__image__container}>
                    <img className={styles.auth__image} src={Telegram} alt="logo" />
                </div>
                <h1 className={styles.auth__title}>
                    Sign in to Telegram
                </h1>
                <h2 className={styles.auth__about}>
                    Please confirm your country and
                    enter your phone number
                </h2>
                <div className={styles.auth__forms}>
                    <div className={styles.auth__form}>
                        <p className={styles.auth__form__title}>
                            Username
                        </p>
                        <div className={styles.auth__form__input__wrapper}>
                            <input placeholder="Username" type="text" className={styles.auth__form__input}
                                onChange={handleInput}
                                name="username"
                                required
                            />
                            <img className={styles.auth__form__icon} src={User} alt="icon" />
                        </div>
                    </div>
                    <div className={styles.auth__form}>
                        <p className={styles.auth__form__title}>
                            Country
                        </p>
                        <div className={styles.auth__form__input__wrapper}>
                            <input placeholder="Country" type="text" className={styles.auth__form__input}
                                name="country"
                                onChange={handleInput}
                                required
                            />
                            <img className={styles.auth__form__icon} src={Country} alt="icon" />
                        </div>
                    </div>
                    <div className={styles.auth__form}>
                        <p className={styles.auth__form__title}>
                            Phone number
                        </p>
                        <div className={styles.auth__form__input__wrapper}>
                            <input placeholder="+7" type="text" className={styles.auth__form__input}
                                name="tel"
                                onChange={handleInput}
                                required
                            />
                            <img className={styles.auth__form__icon} src={Telephone} alt="icon" />
                        </div>
                    </div>
                </div>
                <div className={styles.auth__check__block}>
                    <input type="checkbox" className={styles.auth__check__block__input} />
                    <p className={styles.auth__check__block__text}>
                        Keep me signed in
                    </p>
                </div>
                <div className={styles.auth__btn__container}>
                    <button className={styles.auth__btn}
                        onClick={handleAuth}
                    >

                        START MESSAGING  
                    </button>
                </div>

            </form>
        </div>
    );
}

export default AuthForm;


