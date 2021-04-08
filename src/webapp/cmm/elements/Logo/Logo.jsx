import React from "react";
import styles from "./Logo.module.scss";
import THEME from "state/theme";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
    <img src="https://blog.kakaocdn.net/dn/ckTINS/btq0kDlizZg/3xft3jiNGglAg0jZEnuKAk/img.png"/>
  </figure>
);
