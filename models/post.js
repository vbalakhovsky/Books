module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
  caption: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
favoriteBook  : {
  type: DataTypes.STRING,
  allowNull: false,
  }, 

  cars: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },

    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

      message: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  ,{
    timestamps: false
  });

  return Post
    };
