import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa';

const ArticleCard = ({ article }) => {
  // Simple reading time estimate for preview (or use real one if available)
  const wordCount = article.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <div className="article-meta">
        <span><FaUser /> {article.author}</span>
        <span><FaClock /> {readTime} min read</span>
      </div>
      <p className="article-preview">
        {article.content.substring(0, 150)}...
      </p>
      <Link to={`/article/${article._id}`} className="read-more-btn">
        Read Article
      </Link>
    </div>
  );
};

export default ArticleCard;
