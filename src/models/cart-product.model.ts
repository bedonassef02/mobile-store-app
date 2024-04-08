import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';
import { Product } from './product.model';
import { Cart } from './cart.model';

export const CartProduct = sequelize.define('CartProduct', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'carts',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
  },
});

Cart.hasMany(CartProduct, { foreignKey: 'cartId' });
Product.hasMany(CartProduct, { foreignKey: 'productId' });
