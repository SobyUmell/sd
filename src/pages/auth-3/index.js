import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import styles from "./style.module.scss";

export const Auth3 = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={3} />
        <div className={styles.content}>
          <h2 className={styles.header}>Почти готово....</h2>
          <p className={styles.paragraph}>
          Пожалуйста, подтвердите свою личность через письмо
            
          </p>
          <div className={styles.groupButton}>
            <DirectionButton text={"Назад"} direction={0} />
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
