import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { Category } from './category.model';

export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  coverImage: {
    type: DataTypes.STRING(255), // Increased length to accommodate more URLs
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // Ensure price is not negative
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories', // This should match the table name of the Category model
      key: 'id',
    },
  },
});

// Define associations
Product.belongsTo(Category, { as: 'category', foreignKey: 'categoryId' });
Category.hasMany(Product, { as: 'products', foreignKey: 'categoryId' });
