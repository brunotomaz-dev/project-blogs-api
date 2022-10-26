module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    underscored: true,
    timestamps: false,
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