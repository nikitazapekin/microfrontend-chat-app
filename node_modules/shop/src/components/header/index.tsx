
import Sidebar from "../Sidebar"
import styles from "./index.module.scss"
import {sidebarSelector}  from "@packages/shared/store/selectors/sidebar.selector"
import {SidebarAction} from "@packages/shared/store/action-creators/SidebarActionCreateor"
const Header = () => {
    const isSelected =true
console.log("SIDE"+sidebarSelector)
    return (
        <div className={styles.header}>
           
            <Sidebar />
            <div className={styles.header__content}>
                <div className={styles.left}>
                    <div className={styles.left__burger}>
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