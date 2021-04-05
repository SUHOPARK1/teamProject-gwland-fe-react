import React from "react";
import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";
import { Button } from "components/elements";
import CardImage from "../CardImage/CardImage";

export default ({ post, layout = "grid" }) => {
  return (
    <CardImage image={post.firstimage} layout={layout}>
      <div className={styles.card}>
        <h3>
          <Link to={"/place/detail/" + post.contentid}>{post.title}</Link>
        </h3>
        <h6>
          <Link to={"/blog/" + post.contentid}>{post.addr1}</Link><br/>
          <Link to={"/blog/" + post.contentid}>{post.tel}</Link>
        </h6>  
        <div className={styles.extra}>
        </div>
        <p>{post.short}</p>

        <div className={styles.btn}>
          <Button 
          to={"/place/detail/" + post.contentid} hoverType="solid-gray-tb">
            더보기
          </Button>
        </div>
      </div>
    </CardImage>
  );
};
