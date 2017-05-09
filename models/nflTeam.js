var gameStats = require("./gameStats.js");

module.exports = function(sequelize, DataTypes) {
    var nflTeam = sequelize.define('t_nfl_team', {
        description: DataTypes.STRING,
        city: DataTypes.STRING,
        division: DataTypes.STRING
    // }, {
    //     tableName: 'fantasyTeam',
    //     classMethods: {
    //         associate: function(models) {
    //             nflTeam.hasMany(gameStats.player_id);
    //         }
    //     }
    });

    return nflTeam;
};
