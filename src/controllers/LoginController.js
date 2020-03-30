const jwt = require("jsonwebtoken");

const passwordUtil = require('./../utils/password');
const User = require('./../database/models/user');

module.exports = {
  async login(req, res) {
    const { username, password } = req.body;
    const user = await User
      .findOne({
        where: {
          username,
        }
      });

    if (passwordUtil.comparePassword(password, user.password)) {
      const token = jwt.sign({ user }, "secret", {
        expiresIn: "10h"
      });

      res.json({
        username: user.username,
        id: user.id,
        token
      });
    } else {
      res.status(401).json({ message: 'invalid username or password' });
    }
  },
  async logout() {

  }
}