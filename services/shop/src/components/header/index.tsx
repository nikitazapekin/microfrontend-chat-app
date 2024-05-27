
import Sidebar from "../Sidebar";
import styles from "./index.module.scss";
import { sidebarSelector } from "@packages/shared/store/selectors/sidebar.selector";
import { SidebarAction } from "@packages/shared/store/action-creators/SidebarActionCreateor";
import { useAppDispatch } from '@/hooks/redux';
import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from "react";
import { SearchUserActionCreator } from "@packages/shared/store/action-creators/SearchUserActionCreator";
import _debounce from 'lodash/debounce';

import {selectedChatSelector} from "@packages/shared/store/selectors/selectedChat.selector"
const Header = () => {


    const isSelected = useSelector(selectedChatSelector)
    useEffect(()=> {
console.log("IS SELECTEDDDDDDDDDDDDDDDDDDDD" +JSON.stringify(isSelected))
    }, [isSelected])
    const data = useSelector(sidebarSelector);
    const dispatch = useAppDispatch();
    const handleDispatch = () => {
        dispatch(SidebarAction());
    }

    const [inputData, setInputData] = useState({
        inputData: ""
    });

    const handleDebounceFn = useCallback((inputValue: string) => {

        dispatch(SearchUserActionCreator({username: inputValue}));
    }, [dispatch]);

    const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), [handleDebounceFn]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {
        console.log("CHANGE" + inputData.inputData);
        debounceFn(inputData.inputData);
    }, [inputData.inputData, debounceFn]);

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
                    <input type="search"
                        onChange={handleInput}
                        className={styles.left__input}
                        placeholder="Search"
                        name="inputData" />
                </div>
                {isSelected.isSelected ? (
                    <div className={styles.right}>
                        <div className={styles.right__text}>
                            <p className={styles.right__text__title}>
                                <b>
                                {/*    Test
                                */}
                                {isSelected.user}
                                </b>
                            </p>
                            <p className={styles.right__text__last}>
                                Last seen 33 minutes ago
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
