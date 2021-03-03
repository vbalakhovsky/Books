module.exports = (sequelize, Sequelize) => {
    const Adjective = sequelize.define('adjective', {
        adjective: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false
    });
    return Adjective;
}