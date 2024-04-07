import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { Product } from './product.model';

export const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  path: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
  },
});

// Define associations
Product.hasMany(Image, { as: 'images', foreignKey: 'productId' });
Image.belongsTo(Product, { as: 'product', foreignKey: 'productId' });
