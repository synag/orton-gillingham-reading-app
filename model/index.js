const User = require('./User');
const ortonGilliamhamwords = require('./orton-gilliamham-words');

User.hasMany(ortonGilliamhamwords, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

orton-gilliamham0words.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,ortonGilliamhamwords };
