const express = require('express');
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
