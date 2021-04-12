import React, { useState, useEffect } from "react";
import styles from "../styles/PlaceList.module.scss";
import { useCustomState } from "webapp/cmm/state/State";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";


import {
  BlogPagination,
  BlogSearch
} from "components/pages/Blog/components";

import BlogCard from "webapp/pce/components/BlogCard/BlogCard";
import axios from "axios";
import BlogCategories from "webapp/pce/components/BlogCategories/BlogCategories";
import Button from 'components/elements/Button/Button'

export default ({ sidebar = "left", layout = "grid", title = "title" }) => {
  const state = useCustomState()[0];
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useState(6)[0];
  const [placeArray, setPlaceArray] = useState([]);
  const URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    if (category) {
      axios.get(`${URL}/place/cat/${category}`)
        .then((data) => {
          setPlaceArray(
            data.data.map((post, index) => {
              return (
                <BlogCard
                  key={index}
                  layout={layout}
                  post={post} />
              );
            })
          );
        }).catch((err) => {
          alert(err)
        })
    } else {
      axios.get(`${URL}/place/list`)
        .then(resp => {
          setPlaceArray(
            resp.data.map((post, index) => {
              return (
                <BlogCard
                  key={index}
                  layout={layout}
                  post={post} />
              );
            })
          );
        })
        .catch((err) => {
        })
    }
    setCurrentPage(1);
  }, []);

  return (
    <>
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
          <Button to={`${URL}/place/add`}>{"관광지 추가"}</Button>
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
    </>
  );
};