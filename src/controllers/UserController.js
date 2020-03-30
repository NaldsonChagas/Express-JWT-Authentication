const User = require('./../database/models/user');
const passwordUtil = require('./../utils/password');

module.exports = {
  async create(req, res) {
    const { username, password } = req.body;
    try {
      const user = await User.create({
        username,
        password: passwordUtil.setPassword(password)
      });

      res.json(user);
    } catch (error) {
      console.log(error);
      res.status()
        .json({ message: 'an error has occurred' });
    }
  },
  async list(req, res) {
    const users = await User.findAll();
    res.json(users);
  }
}