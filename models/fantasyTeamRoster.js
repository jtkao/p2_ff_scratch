//var Sequelize = require("sequelize");
var season = require("./season.js");
var player = require("./player.js");
var fantasyTeam = require("./fantasyTeam.js");

module.exports = function(sequelize, DataTypes) {
    var FantasyTeamRoster = sequelize.define('tx_fantasy_team_roster', {
        season_id: DataTypes.INTEGER,
        week_id: DataTypes.INTEGER,
        player_id: DataTypes.INTEGER,
        fantasy_team_id: DataTypes.INTEGER,
        active: DataTypes.STRING,
        join_dt: DataTypes.DATE,
        left_dt: DataTypes.DATE
    // }, {
    //     // tableName: 'fantasyTeamRoster',
    //     classMethods: {
    //         associate: function(models) {
    //             //fantasyTeamRoster.season_id.belongsTo(models.t_season),
    //             fantasyTeamRoster.belongsTo(models.t_player, {
    //                 foreignKey: 'player_id'
    //             })
    //             //fantasyTeamRoster.fantasy_team_id.belongsToMany(fantasyTeam)
    //         }
    //     }
    });

    return FantasyTeamRoster;
};
