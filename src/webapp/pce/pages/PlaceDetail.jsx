import React, {  useEffect, useState } from "react";
import styles from "../styles/PlaceDetail.module.scss";
import { Header } from "components/widgets";
import { useParams } from "react-router-dom";
import Layout from "components/layouts/Layout/Layout";
import ReviewList from "../../rev/pages/ReviewList"
import axios from "axios";
import ReviewInput from "webapp/rev/pages/ReviewInput";

export default () => {
  const { contentid } = useParams();
  const [place, setPlace] = useState({});
 const URL = 'http://localhost:8080'  


  useEffect(() => {
    axios.get(`${URL}/place/one/${contentid}`)
      .then((resp) => {
        setPlace(resp.data)
      })
      .catch((err) => {
        alert(err)
      })

  },[] )

  return (
    <>
      <Header img={place.firstimage}>{place.title}</Header>
      <Layout col="2" padding>
        <div>
          <figure
            className={styles.image}
            style={{ background: "url(" + place.firstimage + ") center/cover" }} />
        </div>
        <div className={styles.overview}>{place.overview}</div>

      </Layout>
      <ReviewInput contentid={contentid}></ReviewInput>
      <ReviewList contentid={contentid}></ReviewList>
    </>
  );
};

