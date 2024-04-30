import styles from "./index.module.scss"

import Tick from "../../assets/tick 2.png"
const users = [
    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },
    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },
    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },
    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },

    { id: 1, username: "test", message: "руддщ", lastTimeOfBeingAtNetwork: "10:22", isRead: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaEHoW5QWjxpD2klNN6aeq8eKyMjLc-Dhxg&s" },


]
const ListOfUsers = () => {
    return (
        <div className={styles.list}>
            <div className={styles.list__users}>
                {users.map((item, index) => (
                    <div key={item.id} className={styles.user}>
                        <div className={styles.user__inner}>
                            <img className={styles.user__image} src={item.logo} alt="logo" />
                            <div className={styles.user__right}>
                                <div className={styles.user__right__header}>
                                    <p className={styles.user__right__title}>
                                        {item.username}
                                    </p>
                                    <div className={styles.user__right__header__info}>
                                        <img src={Tick} alt=" tick" className={styles.user__header__tick} />
                                        <p className={styles.user__right__time}>
                                            {item.lastTimeOfBeingAtNetwork}
                                        </p>
                                    </div>
                                </div>
                                <p className={styles.user__right__messsage}>
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
/*  <div className={styles.user}>
      <div className={styles.user__inner}>
          <img className={styles.user__logo__img} src={item.logo} alt="user" />
          <div className={styles.user__right}>

              <div className={styles.user__header}>
                  <p className={styles.user__header__title}>
                      {item.username}
                  </p>
                  <div className={styles.user__header__end}>

                  <img className={styles.user__header__arrows} src={Tick} alt="arrows" />
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
  </div> */