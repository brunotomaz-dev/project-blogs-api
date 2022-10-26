module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    underscore: true,
    timestamp: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'blogsPosts',
      foreingKey: 'user_id',
    })
  }
  
  return User;
}