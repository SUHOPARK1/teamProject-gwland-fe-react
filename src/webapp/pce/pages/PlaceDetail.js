import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PlaceDetail.module.scss";
import { Header } from "components/widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "state/state";
import Layout from "components/layouts/Layout/Layout";
import THEME from "state/theme";
import ReviewList from "../../rev/pages/ReviewList"
import axios from "axios";
import ReviewInput from "webapp/rev/pages/ReviewInput";

export default () => {
  const state = useCustomState()[0];
  const { contentid } = useParams();
  const [place, setPlace] = useState({});
  const [category, setCategory] = useState("")

  
  useEffect(()=> {
    axios.get(`/place/dtl/${contentid}`)
    .then((resp)=>{
      console.log(resp.data)
      setPlace(resp.data[0])})
    .catch((err)=>{
      alert(err)
    })
    
  },[])

  return (
    <Fragment>
      <Header img={place.firstimage}>{place.title}</Header>

      <Layout col="1">
        <div className={styles.breadcrumbs} style={{ color: THEME.color }}>
          <Link to="/blog-grid-left-sidebar">Blog</Link>
          <i className="las la-long-arrow-alt-right" />
          <Link to={"/blog/cats/" + place.contenttypeid}>{category}</Link>
          <i className="las la-long-arrow-alt-right" />
          <span>{place.title}</span>
        </div>
      </Layout>

      <Layout col="2" padding>
        <div>
          <figure
            className={styles.image}
            style={{ background: "url(" + place.firstimage + ") center/cover" }}
          /></div>
        <div>콘텐츠 설명</div>
        
      </Layout>
      <ReviewInput contentid={contentid}></ReviewInput>
      <ReviewList contentid={contentid}></ReviewList>

      
 
    </Fragment>
  );
};
