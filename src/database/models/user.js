const connection = require('./../config');
const Sequelize = require('sequelize');

const User = connection.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.sync({ force: false }).then(result => `tabela user criada com sucesso`);

module.exports = User;