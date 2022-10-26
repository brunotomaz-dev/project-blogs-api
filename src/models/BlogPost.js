module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    underscored: true,
    timestamp: false,
  });

  // BlogPost.associate = (models) => {
  //   BlogPost.hasMany(models.PostsCategory, {
  //     as: 'postsCategory',
  //     foreingKey: 'post_id',
  //   })
  // }

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreingKey: 'user_id',
    })
  }
  
  return BlogPost;
}