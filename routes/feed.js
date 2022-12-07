const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  () => {},
);

router.get('/post/:postId', ()=>{});

router.put(
  '/post/:postId',
  ()=>{}
);

router.delete('/post/:postId', ()=>{});

module.exports = router;
