const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/database.config');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(32),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(16),
  },
  image: {
    type: Sequelize.STRING(128),
    defaultValue: 'default.png',
  },
});

module.exports = { User };
