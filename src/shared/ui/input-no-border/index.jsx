import styles from "./style.module.scss";
import { IconButton } from "..";
export const InputNoBorder = ({ onChange, value, onClick, icon, disabled }) => {
  return (
    <div className={styles.container}>
      <input
        disabled={disabled}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <IconButton icon={icon} onClick={onClick} />
    </div>
  );
};