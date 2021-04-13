import { Button, SvgIcon } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router'
import styles from '../styles/RecomBox.module.scss'
import axios from 'axios'

const ResultCourse = ({ recom }) => {
    return <div className={styles.boxCourse}>
        <ul>
            <li style={{display:"inline-block"}}><img src="https://blog.kakaocdn.net/dn/nH7W6/btq2hJWcGQs/E2JTaem8tohYPLrJhoUTNk/img.png"/>
                <hr style={{marginTop: "10px", marginBottom: "24px",
                            width: "100px", backgroundColor: "#B0B0B0", height: "4px" }} />
            </li>
            {recom.map((item) => {
                return <li className={styles.li}>
                        <center>
                        <div style={{ width: "250px" }}>
                            <SvgIcon style={{ fontSize: "50px", color: "#1E90FF" }} viewBox={'0 0 30 50'}>
                                <path d="M17.23,0A17.22,17.22,0,0,0,0,17.23C0,24.46,10,38.49,14.74,44.8a3.12,3.12,0,0,0,5,0c4.77-6.31,14.74-20.34,14.74-27.57A17.23,17.23,0,0,0,17.23,0Zm2.16,26.43a9.45,9.45,0,1,1,7-7A9.46,9.46,0,0,1,19.39,26.43Z">
                                </path>
                            </SvgIcon>
                        </div>
                              
                         </center>
                            <hr style={{
                                marginTop: "10px", marginBottom: "10px",
                                width: "250px", backgroundColor: "#B0B0B0", height: "4px" }} />
                            <center>
                                <p style={{ fontSize:"13px", width: "300px" }} >{item.place.title}</p>
                            </center>
                        </li> })}
        </ul>
        <div style={{fontSize:'120px'}}><br/></div>
           </div>
}

export default ({recom, index})=>{
    const [score,setScore] = useState(0)
    const currentUser = useSelector(state=>state.accountReducer.currentUser)
    const history = useHistory()

    const handleDetail = (e)=>{
        e.preventDefault()
        if(currentUser==null){
            alert('로그인이 필요한 서비스입니다.')
        }else{
            history.push("/course/detail")
        }
    }
    const handleSave = (e)=>{
        e.preventDefault()
        if(currentUser==null){
            alert('로그인이 필요한 서비스입니다.')
        }else{
            axios.post(process.env.REACT_APP_API_URL+'/course/save',{
                crsName:`나만의 코스${Math.ceil(Math.random()*100)}`,
                places:Array.from(recom,v=>v.place.contentid),
                num:currentUser.num
            }).then(alert('성공적으로 저장 했습니다.'))
            .catch(err=>alert(err))
        }
    }
    console.log(recom)
    useEffect(()=>{
        for(let i=0;i<recom.length;i++){
            setScore(score=>score+recom[i].score)
        }
    },[])

    return <>
            <div className={styles.recomBox}>
                <div className={styles.boxInfo}>
                    <div className={styles.title}><span>추천코스{index + 1}</span></div>
                    <div className={styles.score}><span>추천도:{Math.ceil(score/80*100)}%</span></div>
                    <div className={styles.btn_box}><Button style={{fontSize:"13px"} }onClick={handleDetail}>상세보기</Button>
                                                    <Button style={{fontSize:"13px"} }onClick={handleSave}>저장하기</Button></div>
                </div>
                <ResultCourse recom={recom} />
            </div>
        </>
}