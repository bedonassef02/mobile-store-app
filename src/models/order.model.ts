import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { OrderStatus } from '../utils/types/order-status.type';
import { User } from './user.model';

export const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // This should match the table name of the User model
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: Object.values(OrderStatus),
    allowNull: false,
    defaultValue: OrderStatus.PENDING, // Default status for new orders.json
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

// Define the relationship between User and Order
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });