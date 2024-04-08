import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { OrderItem } from './order-item.model';
import { OrderStatus } from '../utils/types/order-status.type';

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
    defaultValue: OrderStatus.PENDING, // Default status for new orders
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

// Define the relationship between Order and OrderItem
Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
