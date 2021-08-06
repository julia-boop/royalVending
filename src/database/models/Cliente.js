module.exports = function(sequelize, DataTypes){
    const alias = "Cliente"
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }
    const config = {
        tableName: "cliente",
        timestamps: false,
    }

    const Cliente = sequelize.define(alias, cols, config);
    
    return Cliente
}