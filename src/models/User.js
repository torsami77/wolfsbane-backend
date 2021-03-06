export default (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  User.associate = (models) => {
    User.hasMany(models.Requests, { as: 'userRequests', foreignKey: 'userId' });
    User.hasMany(models.Reaction, { as: 'userReactions', foreignKey: 'userId'});
  };
  return User;
};
