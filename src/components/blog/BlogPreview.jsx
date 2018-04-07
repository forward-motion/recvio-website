import React, { Component } from 'react';
import '../../styles/blog/BlogPreview.scss';

const BlogPreview = (props) => (
  <div className="blog-preview">
    <h2>{props.title}</h2>
    <span>{props.date}</span>
    <div style={{background:"url(http://via.placeholder.com/350x150)", height:150, width:350}}></div>
    <div>{props.article}</div>
  </div>
);
export default BlogPreview;