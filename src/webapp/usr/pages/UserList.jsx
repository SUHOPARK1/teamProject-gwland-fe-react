import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/UserList.module.scss'
import DeleteIcon from '@material-ui/icons/Delete'
import Pagination from 'webapp/cmm/elements/Pagination/Pagination'
import Card from 'webapp/cmm/layouts/Card/Card'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@material-ui/core'

export default () => {
  const usr = ['번호', '권한', '가입 플랫폼', '소셜 ID', '고객성함', '이메일주소', '연령대', '성별', '가입날짜', '회원탈퇴']
  const [userList, setUserList] = useState([])
  const [userCount, setUserCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const blockSize = 10
  const countURL = process.env.REACT_APP_API_URL+'/user/count'
  const deleteURL = process.env.REACT_APP_API_URL+'/user/delete'

  useEffect(() => {
    axios.get(countURL)
      .then(respone => { setUserCount(respone.data) })
    axios.get(`${process.env.REACT_APP_API_URL}/user/list?page=${currentPage - 1}&size=${pageSize}`)
      .then((response) => { setUserList(response.data.content) })
      .catch(err => { alert(err) })
  }, [currentPage])

  const deleteUser = ((user) => {
    const deleteConfirm = window.confirm('정말 유저정보를 삭제하시겠습니까?')
    if (deleteConfirm === true) {
      axios.delete(deleteURL, {
        data: { num: user.num }
      })
        .then((response) => {
          console.log(response.data)
          alert(`${user.username}고객님 정보를 삭제하셨습니다.`)
          window.location.reload()
        })
        .catch(err => { alert(err) })
    } else {
      alert('유저정보 삭제를 취소하셨습니다.')
      window.location.reload()
    }
  })
  const title = <center><h2> 고객 정보 데이터</h2><h3>※ 구글은 성별과 연령대를 저장할 수 없습니다. (구글 정책사항)</h3> </center>
  const content =
    <Table>
      <TableHead >
        <TableRow>
          {usr.map((user) => {
            return <TableCell>{user}</TableCell>
          })}
        </TableRow>
      </TableHead>
      <TableBody className={styles.body}>
        {userList.map((user, key) => {
          return (
            <TableRow key={key}>
              <TableCell>{user.num}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.provider}</TableCell>
              <TableCell>{user.providerId}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.createDate}</TableCell>
              <TableCell onClick={() => deleteUser(user)}>
                <div className={styles.svg}><DeleteIcon /></div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>

      <TableFooter>
        <TableRow>
          <td  colSpan='10'>
            <div style={{margin:0}}>
          <Pagination
            pageCount={Math.ceil(userCount / pageSize)}
            pageNum={currentPage}
            setPage={setCurrentPage}
            blockSize={blockSize}/>
            </div>
          </td>
        </TableRow>
      </TableFooter>
    </Table>

  return <>
    <Card header={title} body={content} />
  </>


}