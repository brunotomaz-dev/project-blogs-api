module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamp: false,
  });

  // Category.associate = (models) => {
  //   Category.hasMany(models.PostsCategory, {
  //     as: 'postsCategory',
  //     foreingKey: 'category_id',
  //   })
  // }
  
  return Category;
}