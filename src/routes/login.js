const express = require('express');
const app = express();
const router = express.Router();

const LoginController = require('./../controllers/LoginController');

router.post('/', LoginController.login);
router.post('/logout', LoginController.logout);

module.exports = router;