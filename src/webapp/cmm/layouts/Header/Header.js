import React, { useState, useEffect, Fragment } from "react";
import { Button } from '@material-ui/core'
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Link, Logo } from "components/elements";
import THEME from "state/theme";
import { useCustomState } from "webapp/cmm/state/state";
import Icon from "@material-ui/icons/DirectionsBus"
import ButtonColor from '@material-ui/core/colors/yellow';

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];

  const handleResize = () => {
    setSticky(window.pageYOffset > 200 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const menu = data.map((item, index) => {
    if (!item.children) {
      return (
        <li key={index}>
          <Link url={item.url} hoverStyle={{ color: THEME.color }}>
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <span>
            <Link url={item.url} hoverStyle={{ color: THEME.color }}>
              {item.name}
            </Link>
          </span>
          <ul>
            {item.children.map((subitem, subindex) => (
              <li key={subindex}>
                <a href={subitem.url}>{subitem.name}</a>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  });

  const header = (
    <Layout>
      <div className={styles.header}>
        <Link url="/">
          <Logo dark />
        </Link>

        <ul className={styles.menu}>{menu}</ul>

        <div className={styles.btn_desktop}>
          <Link url="/login">
            <Button style={{
              borderRadius: 20,
              backgroundColor: "#FFF59D",
              padding: "8px 16px",
              fontSize: "14px"
            }} variant="contained" size="large" startIcon={<Icon />}>간편 로그인</Button>
          </Link>
        </div>

        <div
          className={styles.btn_mobile}
          onClick={() => actions.toogleSidebar()}
        >
          <Button
            after="&#xf0c9;"
            type="solid-white-tb"
            hoverType="solid-gray-tb"
          />
        </div>
      </div>
    </Layout>
  );

  return (
    <Fragment>
      <div className={styles.wrapper}>{header}</div>
    </Fragment>
  );
};
