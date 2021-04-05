import React, { useState, useEffect} from "react";
import { Button } from '@material-ui/core'
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Link, Logo } from "components/elements";
import THEME from "state/theme";
import { useCustomState } from "webapp/cmm/state/State";
import Icon from "@material-ui/icons/DirectionsBus"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "webapp/_actions";

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];
  const currentUser = useSelector(state=>state.accountReducer.currentUser)
  const dispatch = useDispatch()

  const handleResize = () => {
    setSticky(window.pageYOffset > 200 ? true : false);
  };
  const handleLogout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('accessToken')
    dispatch(logout())
  }

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
          {currentUser==null ? 
          <Link url="/login">
            <Button style={{
              borderRadius: 20,
              backgroundColor: "#f7f3e9",
              padding: "8px 16px",
              fontSize: "14px"
            }} variant="contained" size="large" startIcon={<Icon />}>간편 로그인</Button>
          </Link> :
          <Button style={{
            borderRadius: 20,
            backgroundColor: "#f7f3e9",
            padding: "8px 16px",
            fontSize: "14px"
          }} onClick = {handleLogout} variant="contained" size="large" startIcon={<Icon />}>로그아웃</Button>}
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
    <>
      <div className={styles.wrapper}>{header}</div>
    </>
  );
};
