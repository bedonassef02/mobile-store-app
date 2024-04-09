import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { User } from './user.model';
import { Product } from './product.model';

export const Wishlist = sequelize.define('Wishlist', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users.json', // This should match the table name of the User model
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
});

// Define associations
Wishlist.belongsTo(User, { as: 'user', foreignKey: 'userId' });
User.hasMany(Wishlist, { as: 'wishlists', foreignKey: 'userId' });

Wishlist.belongsTo(Product, { as: 'product', foreignKey: 'productId' });
Product.hasMany(Wishlist, { as: 'wishlists', foreignKey: 'productId' });
