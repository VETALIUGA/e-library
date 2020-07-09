import React from 'react';

const SectionArticle = (props) => (
  <h3 className={`article article--lg ${props.class ? `${props.class}__article` : ''}`}>{props.title}</h3>
);
export default SectionArticle;
