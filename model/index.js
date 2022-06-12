const User = require('./User');
const Ortonwords = require('./ortonwords');

User.hasMany(Ortonwords, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Ortonwords.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,Ortonwords };
