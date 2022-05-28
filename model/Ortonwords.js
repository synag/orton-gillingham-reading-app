const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Ortonwords extends Model {}

Ortonwords.init(
  {
    
    word_owner:{
      type: DataTypes.STRING,
      allowNull: true,

    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sight_word_level: {
      type: DataTypes.STRING,
    },
    mastered: {
      type: DataTypes.STRING,
    },
    orton_gilliamham_words: {
      type: DataTypes.STRING,
    },
    orton_part: {
      type: DataTypes.STRING,
    },
    phonetics: {
      type: DataTypes.STRING,
    },
    grade_level: {
      type: DataTypes.INTEGER,
    },
    current_school_list: {
      type: DataTypes.STRING,
    },
    user_voice: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ortonwords",
  }
);

module.exports = Ortonwords;
