const express = require('express');
const router = express.Router();
const {
    getArticles,
    getArticleById,
    createArticle,
} = require('../controllers/articleController');

router.route('/').get(getArticles).post(createArticle);
router.route('/:id').get(getArticleById);

module.exports = router;
