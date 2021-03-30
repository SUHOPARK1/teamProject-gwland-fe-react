import React, { useEffect, useState } from 'react'
import Styles from '../sytles/reviewList.module.scss'
import { Container, Typography } from "@material-ui/core"
import StarIcon from '@material-ui/icons/Star'
import axios from 'axios'

export default () => {
    const [reviewList, setReviewList] = useState([])
    const listURL = '/review/all'
    const deleteURL = '/review/delete'

    useEffect(() => {
        axios.get(listURL,)
            .then((response) => {
                console.log(response.data)
                setReviewList(response.data)

            })
            .catch(err => { alert(err) })
    }, [])

    // const deleteUser = ((user) => {
    //     const deleteConfirm = window.confirm('정말 유저정보를 삭제하시겠습니까?')
    //     if (deleteConfirm == true) {
    //       axios.delete(deleteURL, {
    //         data: { num: user.num } })
    //         .then((response) => {
    //           console.log(response.data)
    //           alert(`${user.username}고객님 정보를 삭제하셨습니다.`)
    //           window.location.reload(deleteURL)
    //         })
    //         .catch(err => { alert(err) })
    //     } else {
    //       alert('삭제를 취소하셨습니다.')
    //       window.location.reload(deleteURL)}
    //   })

    return <>

        <div className={Styles.kContent}>
            <div className={Styles.comment}>
                <div className={Styles.ahead_info}>
                    <strong className={Styles.screen_out}>평가 요약</strong>
                    <div className={Styles.grade_star}>
                        <em className={Styles.num_rate}>평점 3.3
                          <span className={Styles.txt_score}></span>
                        </em>

                    </div>
                </div>
                <div className={Styles.evaluation_review}>
                    <strong className={Styles.screen_out}></strong>
                </div>
                <ul className={Styles.reivew_form}>
                    
                            {reviewList.map((reviewer) => {
                                
                                return (
                                    <li className={Styles.liStyle}> 
                                    <div className={Styles.star_info}>
                                    <em className={Styles.num_rate}>
                                        <StarIcon fontSize='small'/>
                                        &nbsp;{reviewer.revStar}/5
                                        <span className={Styles.screen_out}>점</span>
                                    </em>
                                    </div>
                                <div className={Styles.comment_info}>
                                    <p className={Styles.txt_comment}>
                                        <span>
                                            {reviewer.revContent}
                                        </span>
                                    </p>
                                    <div className={Styles.append_item}>
                                        <a className={Styles.bg_bar}></a>
                                        <span className={Styles.link_user}>
                                            {/* 작성자이름 들어갈 곳 */}
                                            유저닉네임
                                        </span>
                                        <a className={Styles.bg_bar}></a>
                                        <span className={Styles.time_write}>{reviewer.revDate}</span>
                                        <a className={Styles.bg_bar}></a>
                                        <span  className={Styles.delete}>삭제</span>
                                        {/* onClick={() => deleteUser(reviewer)} */}
                                        <a className={Styles.link_function}></a>
                                    </div>
                                </div>
                                </li>
                                )})}
                       
                    
                        
                </ul>
            </div>
        </div>
    </>
}