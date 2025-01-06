import { DirectionButton, PageProgressBar, Input } from "../../shared/ui";
import { city, atsign, lock, user, smallEye } from "../../shared/assets";
import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../services/AuthService";
export const Auth2 = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const setEmail = (value) => {
    dispatch({ type: "SET_EMAIL", email: value });
  };
  const setPassword = (value) => {
    dispatch({ type: "SET_PASSWORD", password: value });
  };
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const setInfo = (value) => {
    dispatch({ type: "SET_INFO", info: value });
  };
  const registration = async (email, password) => {
    console.log("Попытка регистрации");
    try {
      const responce1 = await AuthService.registration(email, password);
      console.log(responce1);
      console.log(responce2);
      localStorage.setItem("token", responce.data.accessToken);
      setInfo(responce.data.user);
    } catch (e) {
      console.log(e.responce?.data?.message);
    }
  };

  const object = {
    values: ["Почта", "Пароль"],
    svgs: [atsign, lock, user, city],
    setStates: [setEmail, setPassword],
    states: [email, password],
    types: ["email", "password", "text"],
  };

  const [visible, setVisible] = useState(false);
  const swapstate = () => {
    setVisible(!visible);
  };
  const catchSubmit = (e) => {
    console.log("форма отправлена");
    try {
      registration(email, password);
      router("/auth-3");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  const router = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={2} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>
          <div className={styles.inputWrapper}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                catchSubmit();
              }}
              action=""
            >
              <img
                onClick={swapstate}
                className={styles.eye}
                src={smallEye}
              ></img>
              {[...new Array(2)].map((value, index) => {
                return (
                  <Input
                    setState={object.setStates[index]}
                    value={object.states[index]}
                    svg={object.svgs[index]}
                    key={index}
                    text={object.values[index]}
                    type={object.types[index]}
                    visible={visible}
                    setVisible={setVisible}
                  />
                );
              })}
              <button type="submit" className={styles.btn}>
                Зарегистрироваться
              </button>
            </form>
          </div>

          <div className={styles.groupButton}>
            <DirectionButton
              text={"Назад"}
              direction={0}
              onClick={() => {
                router("/auth-1");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
