const express = require('express');
const likePost = require('../controllers/post.controller');
const router = express.Router();

router.post('/:postId/like', likePost);

module.exports = router;
