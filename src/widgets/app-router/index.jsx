import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/index";
import AuthService from "../../services/AuthService";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const setInfo = (value) => {
    dispatch({ type: "SET_INFO", info: value });
  };
  const checkAuth = async () => {
    try {
      const response = await AuthService.checkAuth();
      setAuth(true);
      setInfo(response.data.user);
    } catch (e) {
      console.log(e.responce?.data?.message);
    }
  };

  useEffect(() => {
    // поверяем авторизован ли пользователь при запуске сайта
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <Routes>
      {auth
        ? privateRoutes.map(
            // роутинг для авторизированного пользователя
            (route, index) => (
              <Route
                key={index}
                element={route.component}
                path={route.path}
                exact={route.exact}
              />
            )
          )
        : publicRoutes.map(
            // роутинг для не авторизированного пользователя
            (route, index) => (
              <Route
                key={index}
                element={route.component}
                path={route.path}
                exact={route.exact}
              />
            )
          )}
      {auth ? (
        <Route path="*" element={<Navigate to={"/profile"} />} />
      ) : (
        <Route path="*" element={<Navigate to={"/auth-1"} />} />
      )}
    </Routes>
  );
  // Route path='*' - будет переносить нас на базовую страницу
};
