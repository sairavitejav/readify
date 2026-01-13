import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaCalendar } from 'react-icons/fa';
import ReadingProgressBar from '../components/ReadingProgressBar';
import ReadingTimeEstimator from '../components/ReadingTimeEstimator';
import ScrollToTop from '../components/ScrollToTop';
import CopyToClipboard from '../components/CopyToClipboard';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/articles/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch article');
                }
                const data = await response.json();
                setArticle(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return <div className="loading">Loading article...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!article) return <div className="error">Article not found</div>;

    const currentUrl = window.location.href;

    return (
        <div className="article-detail-page">
            <ReadingProgressBar />
            
            <div className="article-detail">
                <Link to="/" className="back-link">← Back to Articles</Link>
                
                <header className="article-header">
                    {article.image && (
                        <div className="article-image-container" style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    <h1>{article.title}</h1>
                    <div className="article-meta" style={{ marginBottom: '20px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <span><FaUser /> {article.author}</span>
                            <span><FaCalendar /> {new Date(article.createdAt).toLocaleDateString()}</span>
                        </div>
                        <ReadingTimeEstimator content={article.content} />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '20px' }}>
                         <CopyToClipboard text={currentUrl} isLink={true} />
                    </div>
                </header>

                <div className="article-content">
                    {article.content.split('\n').map((paragraph, index) => {
                        const trimmed = paragraph.trim();
                        if (!trimmed) return null;
                        return (
                            <p key={index} style={{ marginBottom: '1.5em', fontSize: '1.1em', lineHeight: '1.8' }}>
                                {trimmed}
                            </p>
                        );
                    })}
                </div>
            </div>

            <ScrollToTop />
        </div>
    );
};

export default ArticleDetail;
