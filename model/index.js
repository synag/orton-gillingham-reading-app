const User = require('./User');
const Ortonwords = require('./Ortonwords');

User.hasMany(Ortonwords, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

orton-gilliamham0words.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,Ortonwords };
