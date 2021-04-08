import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './Pagination.module.scss'

export default ({ pageCount, pageNum, setPage, blockSize }) => {
    const [currentBlock, setCurrentBlock] = useState(1)
    const blockCount = Math.ceil(pageCount / blockSize)
    const arr = []

    for (let i = (currentBlock - 1) * blockSize + 1; i <= currentBlock * blockSize; i++) {
        if (i > pageCount) break
        arr.push(
            <li className={i === pageNum ? styles.active : "false"} key={i}>
                <Button className={styles.page} onClick={() => { setPage(i) }}>{i}</Button>
            </li> )}
    return <>
        <div className={styles.paging}>
            {currentBlock !== 1 && <Button
                className={styles.block}
                onClick={() => {
                    setCurrentBlock(b => b - 1)
                    setPage((currentBlock - 1) * blockSize)
                }}
            >이전</Button>}
            <ul>
                {arr}
            </ul>
            {currentBlock !== blockCount && <Button
                className={styles.block}
                onClick={() => {
                    setCurrentBlock(b => b + 1)
                    setPage((currentBlock) * blockSize + 1)
                }}
            >다음</Button>}
        </div>
           </>}