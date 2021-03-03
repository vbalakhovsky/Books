module.exports = (sequelize, Sequelize) => {
    const Noun = sequelize.define('noun', {
        noun: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false
    });
    return Noun;
}