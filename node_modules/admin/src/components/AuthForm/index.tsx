/*import styles from "./index.module.scss"
import Telegram from "../../assets/telegram.png"
const AuthForm = () => {
    return (
        <form className={styles.auth__form}>
            <div className={styles.auth__form__logo}>
                <img src={Telegram} alt="logo" className={styles.auth__form__logo__image} />
            </div>
            <h1 className={styles.auth__form__title}>
                Sign in to Telegram
            </h1>
            <h2 className={styles.auth__form__subtitle}>
                Please confirm your country and
                enter your phone number
            </h2>
            <div className={styles.auth__form__forms}>


                <div className={styles.auth__form__item}>
                    <p className={styles.auth__form__item__title}>
                        Username
                    </p>
                    <input type="text" className={styles.auth__form__item__select} placeholder="Username" required />

                </div>




                <div className={styles.auth__form__item}>
                    <p className={styles.auth__form__item__title}>
                        Country
                    </p>
                    <select className={styles.auth__form__item__select} value="">
                        <option value="Russia">Russia</option>
                        <option value="England">England</option>
                    </select>
                </div>


                <div className={styles.auth__form__item}>
                    <p className={styles.auth__form__item__title}>
                        Phone number
                    </p>
                    <input type="text" className={styles.auth__form__item__select} placeholder="+7" required />

                </div>



            </div>


            <div className={styles.auth__form__check}>
                <input type="checkbox" className={styles.auth__form__check__input} />
                <p className={styles.auth__form__check__title}>
                    Keep me signed in
                </p>
            </div>

            <button className={styles.auth__form__submit}>
                SIGN IN
            </button>
        </form>
    );
}

export default AuthForm;
*/


import { adminRoutes } from '@packages/shared/src/routes/admin'
import styles from "./index.module.scss"
import { Link } from "react-router-dom";
import Telegram from "../../assets/telegram.png"
import Telephone from "../../assets/phone-call.png"
import globalStyles from "../../styles/index.module.scss"
import Country from "../../assets/world.png"
import User from "../../assets/user (2).png"
//import { useDispatch } from 'react-redux';
import { shopRoutes } from '@packages/shared/src/routes/shop'
import { TypePersonalData } from "@packages/shared/store/action-creators/AuthAcrtionCreator"
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
//import {} from "../../"
//import {} from "../../hooks/redux"
interface Types {
    username: string,
    country: string,
    tel: string

}
const AuthForm = () => {
    const dispatch = useAppDispatch()
    const [personalData, setPersonalData] = useState<Types>({
        username: "",
        country: "",
        tel: ""

    })
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPersonalData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {
        console.log("ddddddd" + JSON.stringify(personalData))
        dispatch(TypePersonalData(personalData))
    }, [personalData])
    return (
        <div className={globalStyles.container}>
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
                    <button className={styles.auth__btn}>
                        <Link to={shopRoutes.chat}>
                            START MESSAGING
                        </Link>
                    </button>
                </div>

            </form>
        </div>
    );
}

export default AuthForm;



/*


import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";
import { PersistGate } from 'redux-persist/integration/react';
import {Provider, useDispatch} from "react-redux"; 
import { persistor, store } from "@packages/shared/store/store"
 
import { setLoading } from "@packages/shared/store/slices/AppSlice";
const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const SomeComponent = () => {
  const dispatch = useDispatch();  

  
  dispatch(setLoading(true));  
  
  return (
    <div>
     
    </div>
  );
}

container.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <SomeComponent /> 
    </PersistGate>
  </Provider>
)



*/