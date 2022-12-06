const express = require('express');

const router = express.Router();

router.put(
  '/signup',
  authController.signup
);

router.post('/login', ()=>{});

router.get('/status', ()=>{});

router.patch(
  '/status',
  ()=>{}
);

module.exports = router;
