module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    underscored: true,
    timestamps: false,
  });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostsCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostsCategory,
    });
  }

  return PostsCategory;
}