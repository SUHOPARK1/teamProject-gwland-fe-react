import { Collapse, List, ListItem, ListItemText, SvgIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Sidebar.module.scss'

export default ()=>{
    const [nest,setNest] = useState(false)

    return <>
    <div className={styles.sidebar}>
        <div className={styles.wrapper}>
            <List>
                <Link to="/manage/userList">
                    <ListItem button>
                        <SvgIcon><path fill="currentColor" d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" /></SvgIcon>
                        <ListItemText className={styles.itemText} primary="유저관리" disableTypography={true}/>
                    </ListItem>
                </Link>
                <ListItem button onClick={()=>{setNest(!nest)}}>
                    <SvgIcon><path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3H19C20.11,3 21,3.89 21,5V13.03C20.5,12.23 19.81,11.54 19,11V5H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H12.03C11.23,11.5 10.54,12.19 10,13H7V11M7,15H9.17C9.06,15.5 9,16 9,16.5V17H7V15Z" /></SvgIcon>
                    <ListItemText className={styles.itemText} primary="설문관리" disableTypography={true}/>
                    {nest?<ExpandLess/>:<ExpandMore/>}
                </ListItem>
                <Collapse in={nest}>
                    <Link to="/manage/survey">
                        <ListItem button>
                            <SvgIcon></SvgIcon>
                            <ListItemText className={styles.itemText} primary="설문리스트"/>
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <SvgIcon></SvgIcon>
                        <ListItemText className={styles.itemText} primary="설문통계"/>
                    </ListItem>
                </Collapse>
                <Link to="/manage/place/add">
                    <ListItem button>
                        <SvgIcon><path fill="currentColor" d="M10,2V4.26L12,5.59V4H22V19H17V21H24V2H10M7.5,5L0,10V21H15V10L7.5,5M14,6V6.93L15.61,8H16V6H14M18,6V8H20V6H18M7.5,7.5L13,11V19H10V13H5V19H2V11L7.5,7.5M18,10V12H20V10H18M18,14V16H20V14H18Z" /></SvgIcon>
                        <ListItemText className={styles.itemText} primary="장소관리" disableTypography={true}/>
                    </ListItem>
                </Link>
                <Link>
                    <ListItem button>
                        <SvgIcon><path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.2 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19.5,2A0.5,0.5 0 0,1 20,2.5V11.81C19.42,11.26 18.75,10.81 18,10.5V4.7L15,5.86V10C14.3,10.07 13.62,10.24 13,10.5V5.87L9,4.47V16.13H9V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2.03L19.5,2M4,5.46V17.31L7,16.15V4.45L4,5.46Z" /></SvgIcon>
                        <ListItemText className={styles.itemText} primary="코스관리" disableTypography={true}/>
                    </ListItem>
                </Link>
                <Link>
                    <ListItem button>
                        <SvgIcon><path fill="currentColor" d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10" /></SvgIcon>
                        <ListItemText className={styles.itemText} primary="관리자추가" disableTypography={true}/>
                    </ListItem>
                </Link>
            </List>
        </div>
    </div>
    </>
}