import React from 'react'
import { Button } from '@material-ui/core'
export default () => {

    return <>
        
        <center>
            <a style={{ fontSize: "40px" }}><br />관리자 아이디로 로그인 해주세요.<br /></a>
            <br />
            <div>
                    <Button style={{ fontSize: "23px" }} color="primary" onClick={()=>{ window.location.href='/'}}>
                        돌아가기
                    </Button>
            </div>
        </center>
    </>
}