import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database/sequelize.config';

export const Category = sequelize.define('Category', {
 id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
 },
 name: {
    type: DataTypes.STRING(128),
    allowNull: false,
 },
 parentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id',
    },
 },
});

// Define associations
Category.belongsTo(Category, { as: 'parent', foreignKey: 'parentId' });
Category.hasMany(Category, { as: 'children', foreignKey: 'parentId' });