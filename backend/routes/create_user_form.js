const express = require('express');
const router = express.Router();

const createUserController = require('../controllers/create_user_form');

router.post('/', createUserController.create_user_post);

module.exports = router;
