module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    favoriteBook: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    clubName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      onDelete: 'cascade',
    });
  };

  return User;
};
