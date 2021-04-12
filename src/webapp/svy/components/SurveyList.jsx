import { SvgIcon, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Pagination from 'webapp/cmm/elements/Pagination/Pagination'
import Card from 'webapp/cmm/layouts/Card/Card'

export default ()=>{
    const URL = process.env.REACT_APP_API_URL
    
    const arr = ['설문번호','성별','나이대','목적지','상세보기','삭제하기']
    const [surveyList,setSurveyList] = useState([]);
    const [surveyCount,setSurveyCount] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const pageSize = 10
    const blockSize = 10

    const deleteSurvey = (item)=>{
        console.log(item)
        if(window.confirm('정말 설문조사 정보를 삭제하시겠습니까??')){
            axios.delete(`${URL}/survey/delete`,{
                data:item
            })
            .then(
                alert('성공적으로 삭제하셨습니다.'),
                window.location.reload()
            ).catch((err) => {
                alert('에러입니다.')
              })
        }
    }

    useEffect(()=>{
        axios.get(`${URL}/survey/count`)
        .then(res=>{setSurveyCount(res.data)})
        axios.get(`${URL}/survey/list?page=${currentPage-1}&size=${pageSize}`)
        .then(res=>{setSurveyList(res.data.content)})
    },[currentPage])

    const title = <center><h2>설문 조사 데이터</h2></center>
    const content = <Table>
        <TableHead>
            <TableRow>
                {arr.map((item)=>{
                    return <TableCell>{item}</TableCell>
                })}
            </TableRow>
        </TableHead>
        <TableBody>
            {surveyList.map((item,key)=>{
                return(
                    <TableRow key={key}>
                        <TableCell>{item.svyNum}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.age}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell><SvgIcon><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></SvgIcon></TableCell>
                        <TableCell onClick={()=>{deleteSurvey(item)}}><SvgIcon><path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></SvgIcon></TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
        <TableFooter>
            <TableRow>
                <td colSpan='6'>
                <Pagination
                    pageCount={Math.ceil(surveyCount/pageSize)}
                    pageNum={currentPage}
                    setPage={setCurrentPage}
                    blockSize={blockSize}
                /></td>
            </TableRow>
        </TableFooter>
    </Table>

    return <>
    <Card header={title} body={content}/>
    </>
}