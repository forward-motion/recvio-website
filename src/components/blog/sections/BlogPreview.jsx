import React, { Component } from 'react';
import '../../../styles/blog/sections/BlogPreview.scss';

const BlogPreview = (props) => (
  <div className="component-blog-preview">
    <div className="blog-preview-inner">
      <div className="article-title-wrapper">
        <span className="article-title">{props.title}</span>
        <div className="article-title-seperator"></div>
      </div>

      <span className="date"> Date {props.date}</span>
      <div className="image-wrapper">
        <img className="img-responsive" src={props.image} />
      </div>
      <div className="article">{props.article}</div>
    </div>
    {/* When my other updated are merged link footer here */}
  </div>
);
export default BlogPreview;
