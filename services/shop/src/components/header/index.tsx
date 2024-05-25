import Sidebar from "../Sidebar"
import styles from "./index.module.scss"
import { sidebarSelector } from "@packages/shared/store/selectors/sidebar.selector"
import { SidebarAction } from "@packages/shared/store/action-creators/SidebarActionCreateor"
import { useAppDispatch } from '@/hooks/redux';
import AuthService, { personalApi } from "@packages/shared/API/auth"
import { useSelector } from 'react-redux';
import { useEffect, useState , useCallback} from "react";
import { SearchUserActionCreator } from "@packages/shared/store/action-creators/SearchUserActionCreator";
import debounce from "debounce";

import _debounce from 'lodash/debounce';
const Header = () => {
    const isSelected = true
    const data = useSelector(sidebarSelector)
    const dispatch = useAppDispatch()
    const handleDispatch = () => {
        dispatch(SidebarAction())
    }
    const [inputData, setInputData] = useState({
        inputData: ""
    })





    function handleDebounceFn(inputValue: string) {
        console.log("deb")
    dispatch(SearchUserActionCreator({username: inputData.inputData}))
    }

    const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);
    /*
    const updateSuggestion = debounce((value: string) => {
        if (value.length > 0) {
            dispatch(SearchUserActionCreator({ username: inputData.inputData }))
            console.log("DEB"+value)
        }
    }, 1000) */
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    useEffect(() => {
        debounceFn(inputData.inputData)
       // updateSuggestion(inputData.inputData)
    }, [inputData])
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



import {useCallback, useState} from 'react';
import _debounce from 'lodash/debounce';
import axios from 'axios';

function Header() {
    const [value, setValue] = useState('');

    function handleDebounceFn(inputValue: string) {
        console.log("deb")
        axios.post('/endpoint', {
          value: inputValue,
        }).then((res) => {
          console.log(res.data);
        });
    }

    const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        debounceFn(event.target.value);
    };

    return <input value={value} onChange={handleChange} />
}

export default Header
*/
/*
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import debounce from "debounce";

const loadSugesstions = (value) => {
  console.log(value)
  return value
  }
  const updateSuggestion = debounce((value, setSuggestions)=> {
  if(value.length>0) {
    //loadSugesstions(value).then((result)=>{
      setSuggestions(value)
      console.log(value)
   // })
  } else {
    setSuggestions([])
  }
  }, 1000)
  
const App = () => {
const [value, setValue] = useState('')
const [suggestions, setSuggestions] = useState([])

const onChange = async (event) => {
  setValue(event.target.value)
  updateSuggestion(event.target.value, setSuggestions)
}
  return ( 
    <>
    <input onChange={(event)=>onChange(event)}/>
    </>
   );
}
 
export default App;

*/