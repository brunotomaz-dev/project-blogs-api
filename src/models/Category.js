module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });

  // Category.associate = (models) => {
  //   Category.hasMany(models.PostsCategory, {
  //     as: 'postsCategory',
  //     foreingKey: 'category_id',
  //   })
  // }
  
  return Category;
}