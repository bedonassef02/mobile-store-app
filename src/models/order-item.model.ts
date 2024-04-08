import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { Product } from './product.model';

export const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orders', // This should match the table name of the Order model
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products', // This should match the table name of the Product model
      key: 'id',
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Define the relationship between Product and OrderItem
Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });
