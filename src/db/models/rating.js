module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'rater'
        }
      }
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        references: {
          model: 'Articles',
          key: 'id',
          as: 'ratedArticle'
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: { args: false }
    }
  });
  Rating.associate = models => {
    Rating.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'rater'
    });

    Rating.belongsTo(models.Article, {
      foreignKey: 'articleId',
      as: 'ratedArticle'
    });
  };
  return Rating;
};
