import React, { useEffect, useState } from 'react'

import ReactStars from "react-rating-stars-component";
import Styles from '../styles/ReviewInput.module.scss'
import Axios from 'axios'
import moment from 'moment';
import { useSelector } from "react-redux";

export default ({contentid}) => {
    const [rate, setRate] = useState(0)
    const [textsection, setSection] = useState("")
    const [textlength, setLength] = useState(0)
    const nowtime = moment().format('YYYY.MM.DD.')
    const inputURL = process.env.REACT_APP_API_URL+'/review/save/'
    const authorization = useSelector(state => state.accountReducer.authorization)
    const currentName = useSelector(state => state.accountReducer.currentName)
    const currentNum = useSelector(state => state.accountReducer.currentNum)
    const textArray = ['진짜 별로에요...', '별로에요...', '그냥 그래요.', '좋아요!', '너무 좋아요!!']
    const ratingChanged = (newRating) => {
        setRate(newRating);
    };
    useEffect(() => { setLength(textsection.length) }, [textsection])

    const reviewSubmit = (e) => {
        e.preventDefault()
        if(authorization === 'public' ){
            const confirm = window.confirm('로그인을 해주세요.')
            if(confirm === true){
                console.log(confirm)
                return window.location.href='/login'
            }
        }else{
            if(textsection==="" || rate===0){
                alert('별점과 리뷰를 모두 작성해 주세요.')
            }else{
                Axios.post(inputURL, {
                    contentid: contentid,
                    revContent: textsection,
                    revDate: nowtime,
                    revName: `${currentName}`,
                    revStar: `${rate}`,
                    num: currentNum
                }).then((respone) => { 
                    alert('성공적으로 등록 하셨습니다.')
                    window.location.reload('/review/save')})
                    .catch((err) => { console.log(err) })}
            }
        }

    return <>
        <div className={Styles.kContent}>
            <div className={Styles.comment}>
                <div className={Styles.evaluation_place}>
                    <form className={Styles.commentUpdateForm}>
                        <fieldset className={Styles.fieldsetForm}>
                            <div className={Styles.grade_star}>
                                <span className={Styles.ico_star_inner_star} Style={{ width: "0%" ,height: "1%" }}></span>
                                <div className={Styles.starform}>
                                    <ReactStars
                                        classNames={Styles.rateStar}
                                        count={5} onChange={ratingChanged} size={40}
                                        emptyIcon activeColor="#1E90FF" />
                                </div>
                                <em className={Styles.num_rate}>
                                    <span className={Styles.txt_g}> {rate}/5 점 </span>
                                </em>
                                <span className={Styles.txt_word}> {rate === 0 ? '평가해주세요' : textArray[rate - 1]} </span>
                            </div>
                            <div className={Styles.write_review}>
                                <textarea placeholder="작성한 평가는 해당 장소에 공개되며, 다른 사용자가 볼 수 있습니다.&#13;&#10;또한, 수정하실 수 없습니다.&#13;&#10;글자수는 150자를 넘을 수 없습니다."
                                    id="text1"
                                    className={Styles.contents}
                                    maxlength="150"
                                    onChange={(e) => { setSection(e.target.value) }}>
                                </textarea>
                            </div>
                        </fieldset>
                    </form>
                    <div className={Styles.agree_review}>
                        <span className={Styles.num_letter_txt_len_warp}>
                            <span className={Styles.screen_out}>등록한 글자수:</span>
                            <span className={Styles.txt_len}>{textlength}</span>
                            <span className={Styles.num_total}>/ 150</span>
                        </span>
                        <button className={Styles.btn_enroll} onClick={reviewSubmit} >등록</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}