import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { Product } from './product.model';
export const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // Assuming you have a User model and each cart is associated with a user
    references: {
      model: 'users', // This should match the table name of the User model
      key: 'id',
    },
  },
});

// Define the many-to-many relationship between Cart and Product
Cart.belongsToMany(Product, {
  through: 'CartProducts', // This is the name of the join table
  foreignKey: 'cartId',
  otherKey: 'productId',
  as: 'products', // Alias for the association
});

Product.belongsToMany(Cart, {
  through: 'CartProducts',
  foreignKey: 'productId',
  otherKey: 'cartId',
  as: 'carts', // Alias for the association
});
