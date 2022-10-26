module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    underscore: true,
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