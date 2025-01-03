import Slider from "react-slick";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PostItem } from "../../../shared/ui";
import { settings, postItems } from "../model/index";
export const TekaWidget = ({
  imgs,
  names,
  style,
  clickHandler,
  label,
  disableInfo,
  ...props
}) => {
  return (
    <div style={style} className={styles.sliderContainer}>
      <h2 className={styles.h}>
        {label}
      </h2>
      <Slider {...settings}>
        {postItems.map((value, index) => {
          return (
            <PostItem
              img={imgs ? imgs[index] : null}
              text={names ? names[index] : null}
              clickHandler={clickHandler}
              disableInfo={disableInfo}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};
