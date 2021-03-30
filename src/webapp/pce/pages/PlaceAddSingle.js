import React, { Fragment, useState } from "react";
import { Header } from "components/widgets";
import { useCustomState } from "state/state";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default () => {
  const state = useCustomState()[0];
  const classes = useStyles();

  const [addr1, setAddr1] = useState('')
  const [addr2, setAddr2] = useState('')
  const [areacode, setAreacode] = useState('')
  const [cat1, setCat1] = useState('')
  const [cat2, setCat2] = useState('')
  const [cat3, setCat3] = useState('')
  const [contentid, setContentid] = useState('')
  const [contenttypeid, setContenttypeid] = useState('')
  const [createdtime, setCreatedtime] = useState('')
  const [firstimage, setFirstimage] = useState('')
  const [firstimage2, setFirstimage2] = useState('')
  const [mapx, setMapx] = useState('')
  const [mapy, setMapy] = useState('')
  const [mlevel, setMlevel] = useState('')
  const [modifiedtime, setModifiedtime] = useState('')
  const [sigungucode, setSigungucode] = useState('')
  const [tel, setTel] = useState('')
  const [title, setTitle] = useState('')
  const [zipcode, setZipcode] = useState('')

  const save = e => {
    e.preventDefault()
    axios.post(`/place/save`, {
      addr1, addr2, areacode, cat1, cat2, cat3, contentid, contenttypeid, createdtime, firstimage,
      firstimage2, mapx, mapy, mlevel, modifiedtime, sigungucode, tel, title, zipcode,
      proxy: {
        host: 'localhost',
        port: 8080,
        protocol: 'http'
      }
    })
    .then(resp => {
      alert('저장 성공')
    })
    .catch(err => {
      alert('저장 실패')
    })
  }

  return (
    <Fragment>
      <Header img={state.data.header_bgs.contacts}>관광지 개별입력</Header>
      <div>  
      <form className={classes.root} noValidate autoComplete="off">
      <TextField name="addr1" style={{ fontSize: '60px' }} label="addr1" placeholder="addr1" onChange = { e => { setAddr1(`${e.target.value}`) }}/>
      <TextField name="addr2" label="addr2" placeholder="addr2" onChange = { e => { setAddr2(`${e.target.value}`) }}/>
      <TextField name="areacode"label="areacode" placeholder="areacode" onChange = { e => { setAreacode(`${e.target.value}`) }}/>
      <TextField name="cat1"label="cat1" placeholder="cat1" onChange = { e => { setCat1(`${e.target.value}`) }}/>
      <TextField name="cat2"label="cat2" placeholder="cat2" onChange = { e => { setCat2(`${e.target.value}`) }}/>
      <TextField name="cat3"label="cat3" placeholder="cat3" onChange = { e => { setCat3(`${e.target.value}`) }}/>
      <TextField name="contentid" label="contentid" placeholder="contentid" onChange = { e => { setContentid(`${e.target.value}`) }}/>
      <TextField name="contenttypeid"label="contenttypeid" placeholder="contenttypeid" onChange = { e => { setContenttypeid(`${e.target.value}`) }}/>
      <TextField name="createdtime"label="createdtime" placeholder="createdtime" onChange = { e => { setCreatedtime(`${e.target.value}`) }}/>
      <TextField name="firstimage"label="firstimage" placeholder="firstimage" onChange = { e => { setFirstimage(`${e.target.value}`) }}/>
      <TextField name="firstimage2" label="firstimage2" placeholder="firstimage2" onChange = { e => { setFirstimage2(`${e.target.value}`) }}/>
      <TextField name="mapx" label="mapx" placeholder="mapx" onChange = { e => { setMapx(`${e.target.value}`) }}/>
      <TextField name="mapy" label="mapy" placeholder="mapy" onChange = { e => { setMapy(`${e.target.value}`) }}/>
      <TextField name="mlevel" label="mlevel" placeholder="mlevel" onChange = { e => { setMlevel(`${e.target.value}`) }}/>
      <TextField name="modifiedtime" label="modifiedtime" placeholder="modifiedtime" onChange = { e => { setModifiedtime(`${e.target.value}`) }}/>
      <TextField name="sigungucode" label="sigungucode" placeholder="sigungucode" onChange = { e => { setSigungucode(`${e.target.value}`) }}/>
      <TextField name="tel" label="tel" placeholder="tel" onChange = { e => { setTel(`${e.target.value}`) }}/>
      <TextField name="title" label="title" placeholder="title" onChange = { e => { setTitle(`${e.target.value}`) }}/>
      <TextField name="zipcode" label="zipcode" placeholder="zipcode" onChange = { e => { setZipcode(`${e.target.value}`) }}/>
      </form>
      </div>
      <Button variant="outlined" color="primary" type="submit" onClick={save}>
        저장
      </Button>
      <Button variant="outlined" color="primary" type="button" href='/place/list'>
        취소
      </Button>
    </Fragment>
  );
};
