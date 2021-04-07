import React from "react";
import { Button } from '@material-ui/core'
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Link, Logo } from "components/elements";
import THEME from "state/theme";
import { useCustomState } from "webapp/cmm/state/State";
import LoginIcon from "@material-ui/icons/DirectionsBus"
import LogoutIcon from "@material-ui/icons/PowerSettingsNew"

import { useDispatch, useSelector } from "react-redux";
import { logout } from "webapp/_actions";

export default ({ data = [] }) => {
  const actions = useCustomState()[1];
  const authorization = useSelector(state => state.accountReducer.authorization)
  const currentUser = useSelector(state => state.accountReducer.currentUser)
  const dispatch = useDispatch()
  const handleLogout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('accessToken')
    dispatch(logout())
  }


  const menu = data.map((item, index) => {
    if (!item.children) {
      if(item.auth&&item.auth!==authorization)
        return <></>
      return (
        <li key={index}>
          <Link url={item.url} hoverStyle={{ color: THEME.color }}>
            {item.name}
          </Link>
        </li>    
      );
    } else {                      //36~52 서브메뉴 드롭다운 (기능추가 할시에)
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
            }} variant="contained" size="large" startIcon={<LoginIcon />}>간편 로그인</Button>
          </Link> :
          <Button style={{
            borderRadius: 20,
            backgroundColor: "#FFD8D8",
            padding: "8px 16px",
            fontSize: "14px"
          }} onClick = {handleLogout} variant="contained" size="large" startIcon={<LogoutIcon />}>로그아웃</Button>}
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
