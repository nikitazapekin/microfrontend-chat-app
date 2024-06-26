import styles from "./index.module.scss"

import Tick from "../../assets/tick 2.png"
import { searchUsersSelector } from "@packages/shared/store/selectors/searchUsers.selector"
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import {SelectedChaatActionCreator} from "@packages/shared/store/action-creators/SelectedChatActionCreator"
import { useAppDispatch } from '@/hooks/redux';
const ListOfUsers = () => {
    const users = useSelector(searchUsersSelector)
    const dispatch  = useAppDispatch()
const handleClick = (username: string) => {
    dispatch(SelectedChaatActionCreator({username}))
}
    return (
        <div className={styles.list}>
            <div className={styles.list__users}>
            {users.users.map((item, index) => (
                    <div key={index} className={styles.user} onClick={()=>handleClick(item.username)}>
                        <div className={styles.user__inner}>

                            
                            {item.avatar.url ? (
                                <>
                                    <img className={styles.user__image} src={item.avatar.url} alt="logo" />
                                </>
                            ) : (
                                <>
                                    <div style={{backgroundColor: item.avatar.color }} className={styles.avatar__background}>
                                        <p className={styles.avatar__text}>
                                            {item.avatar.text}
                                        </p>
                                    </div>
                                </>
                                )}

                            <div className={styles.user__right}>
                            <div className={styles.user__header}>
                                    <p className={styles.user__header__title}>
                                        {item.username}
                                    </p>
                                    <div className={styles.user__header__end}>
{/*
                                        <img className={styles.user__header__arrows} src={Tick} alt="arrows" />
                                        */}
                                        <p className={styles.user__header__last__time}>
                                            {item.lastTimeOfBeingAtNetwork}
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    {item.message}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                
                </div>
        </div>
    );
}

export default ListOfUsers;