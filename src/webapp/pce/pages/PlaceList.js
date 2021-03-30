import React, { useState, useEffect, useCallback, Fragment } from "react";
import styles from "../styles/PlaceList.module.scss";
import { useCustomState } from "webapp/cmm/state/state";
import { useParams, useRouteMatch } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import {
  BlogPagination,
  BlogFeatured,
  BlogSearch,
} from "components/pages/Blog/components";

import  Header  from "webapp/cmm/widgets/Header/Header";
import BlogCard from "../BlogCard/BlogCard";
import axios from "axios";
import BlogCategories from "../BlogCategories/BlogCategories";
import Button from 'components/elements/Button/Button'

export default ({ sidebar = "left", layout = "grid", title = "title" }) => {
  const state = useCustomState()[0];
  const { category, author, posting_date, query } = useParams();
  const { url } = useRouteMatch();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useState(6)[0];
  const [placeArray,setPlaceArray] = useState([]);
  const [pageTitle, setPageTitle] = useState(title);

  

  useEffect(() => {
    if(category){
      axios.get(`/place/cat/${category}`)
      .then((data)=>{
        setPlaceArray(
          data.data.map((post, index) => {
            return (
              <BlogCard
                key={index}
                layout={layout}
                post={post}/>
            );
          })
        );
      })
    }else{
    axios.get('/place/list')
    .then(resp=>{
      console.log(resp.data)
      setPlaceArray(
        resp.data.map((post, index) => {
          return (
            <BlogCard
              key={index}
              layout={layout}
              post={post}/>
          );
        })
      );
    })
    .catch((err)=> {
    })
  } 
    setCurrentPage(1);
  }, [

  ]);

  return (
    <Fragment>
      <Header img="assets/placeholders/photo.jpg">{pageTitle}</Header>
      <section
        className={[
          styles.wrapper,
          sidebar === "left"
            ? styles.with_sidebar + " " + styles.left
            : sidebar === "right"
            ? styles.with_sidebar + " " + styles.right
            : null,
        ].join(" ")}
      >
        <aside className={styles.sidebar}>
          <BlogSearch />
          <BlogCategories data={state.data.categories} />
          <BlogFeatured data={state.data.posts} />
          <Button to={'/place/add'}>{"관광지 추가"}</Button>
        </aside>

        <article>
          <div
            className={
              layout === "grid"
                ? styles.grid
                : layout === "list"
                ? styles.list
                : null
            }
          >
            {placeArray.slice(
              (currentPage - 1) * postsPerPage,
              currentPage * postsPerPage
            )}
          </div>

          <BlogPagination
            amount={Math.ceil(placeArray.length / postsPerPage)}
            current={currentPage}
            next={() => {
              setCurrentPage((c) => c + 1);
              scroll.scrollToTop();
            }}
            prev={() => {
              setCurrentPage((c) => c - 1);
              scroll.scrollToTop();
            }}
            goto={(id) => {
              setCurrentPage(id);
              scroll.scrollToTop();
            }}
          />
        </article>
      </section>
    </Fragment>
  );
};