import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CourseList from 'webapp/crs/pages/CourseList'
import styles from '../styles/UserDetail.module.scss'

export default () => {
    const user = useSelector(state=>state.accountReducer.currentUser)
    // const [userList, setUserList] = useState([])
    // useEffect(() => {
    //     axios.get('')
    //         .then((response) => {
    //             setUserList(response.data)
    //         })
    //         .catch(err => { alert('오류입니다.')})
    // }, [])
    // {userList.map((user) => {
    return (
        <>
            <section className={styles.mypage_cont}>
                <section className={styles.n_section_block}>
                    <header className={styles.n_section_title_first_info_views_area}>
                        <h1 className={styles.tit}>
                            기본 회원정보
                        </h1>
                    </header>
                    <table className={styles.n_table_table_row_my_info_modify}>
                        <colgroup>
                            <col style={{ width: "190px" }} />
                        </colgroup>
                        <tbody > 
                            <tr> 
                                <th scope='row'>소셜 계정</th>
                                <td>
                                    <strong>
                                        {user.email}
                                    </strong>
                                </td>
                            </tr>
                            <tr> 
                                <th scope='row'>연결된 소셜</th>
                                <td>
                                    <strong>
                                        {user.provider}
                                    </strong>
                                </td>
                            </tr>
                            <tr > 
                                <th scope='row'>이름</th>
                                <td>
                                    <strong>
                                        {user.username}
                                    </strong>
                                </td>
                            </tr>
                           
                            <tr> 
                                <th scope='row'>성별</th>
                                <td>
                                    <strong>
                                        {user.gender}
                                    </strong>
                                </td>
                            </tr>
                            <tr> 
                                <th scope='row'>나이대</th>
                                <td>
                                    <strong>
                                        {user.age}
                                    </strong>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <header className={styles.n_section_title_first_info_views_area}>
                        <h1 className={styles.tit}>
                            나의 코스정보
                            
                        </h1>
                    </header>
                        <CourseList/>
                </section>
            </section>
        
        
        </>
    )
    // )})}       
}