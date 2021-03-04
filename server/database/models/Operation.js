module.exports = (sequelize, dataTypes) => {

    let alias = "Operations"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    }

    let config = {
        tableName: "operations",
        timestamps: false,
        underscored:true
    }

    const Operation = sequelize.define(alias,cols,config)

    Operation.associate = function(models){
        Operation.belongsTo(models.Users,{
            as:"user",
            foreignKey:"user_id"
        }),
        Operation.belongsTo(models.Categories,{
            as:"Categories",
            foreignKey:"category_id"
        })
    }
    return Operation
}