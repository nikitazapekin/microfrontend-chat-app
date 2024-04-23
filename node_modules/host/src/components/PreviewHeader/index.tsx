
import Telegram from "../../../assets/telegram.png"
import  styles from "./styles.module.scss"
const PreviewHeader = () => {
  return (
    <header className={styles.preview__header}  >
      <div className={styles.preview__inner__content}>
      <img  src={Telegram} alt="logo" className={styles.preview__logo} />
      </div>
    </header>
  );
}

export default PreviewHeader;