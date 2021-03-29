import React,{useState} from 'react'
import Styles from '../sytles/reviewList.module.scss'

export default () => {
const [reviewList, setReviewList] = useState([])

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
                    <strong className={Styles.screen_out}>평가 리스트</strong>
                </div>
                <ul className={Styles.reivew_form}>
                    <div className={Styles.star_info}>
                        <div className={Styles.grade_star_size_s}>
                            <span className={Styles.ico_star_star_rate}>
                                <span className={Styles.ico_star_inner_star} ></span>
                            </span>
                            <em className={Styles.num_rate}>
                                "1"
                                <span className={Styles.screen_out}>점</span>
                            </em>
                        </div>
                    </div>
                {/* {reviewList.map((reviewer) => {return<span>{reviewer}</span>})} */}
                    <div className={Styles.comment_info}>
                        <p className={Styles.txt_comment}>
                            <span>
                               {/* {reviewer.content} */}
                                블루보틀..커피 진짜 맛있는건 알겠는데ㅠㅠ가격이 사악함..삼청에서 방문했을때는 그래도 그만한 가치를 한다 생각했는데 여긴 전혀 아니예요..직원들 불친절하고 매장 위생 관리 전혀 안해요;;
                            </span>
                            <button className={Styles.btn_fold}></button>
                        </p>
                        <div className={Styles.append_item}>
                            <a className={Styles.link_like}>
                                <span className={Styles.ico_comm_ico_like}></span>
                                좋아요
                                <span className={Styles.num_g}></span>
                            </a>
                            <span className={Styles.bg_bar}></span>
                            <em className={Styles.screen_out}></em>
                            <a className={Styles.link_user}>하온</a>
                            <span className={Styles.bg_bar}></span>
                            <em className={Styles.screen_out}>작성일 : </em>
                            <span className={Styles.time_write}>2021.03.17.</span>
                            <span className={Styles.bg_bar}></span>
                            <a className={Styles.link_function}></a>



                        </div>
                    </div>



                </ul>
            </div>
        </div>
    </>
}