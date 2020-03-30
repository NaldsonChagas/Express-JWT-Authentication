const express = require('express');
const router = express.Router();
const { withJWTAuthMiddleware } = require("express-kun");

const UserController = require('./../controllers/UserController');

const protectedRouter = withJWTAuthMiddleware(router, "secret");

protectedRouter.get('/', UserController.list);
router.post('/', UserController.create);

module.exports = router;