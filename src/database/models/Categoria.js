module.exports = function(sequelize, DataTypes){
    const alias = "Categoria"
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
        descripcion: {
            type: DataTypes.TEXT,
            allowNull:false
          }
    }
    const config = {
        tableName: "categoria",
        timestamps: false,
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = (models) => {

        Categoria.hasMany(models.Equipo, {
            as: 'equipos', 
            foreignKey: 'categoria_id'
        })

    }

    return Categoria
}