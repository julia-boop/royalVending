module.exports = function(sequelize, DataTypes){
    const alias = "Equipo"
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
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        dato1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dato2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        dato3: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        dato4: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        dato5: {
            type: DataTypes.TEXT,
            allowNull: true
        }, 
        ficha_tecnica: {
            type: DataTypes.STRING(100),
            allowNull: false
        }, 
        categoria_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }

    }
    const config = {
        tableName: "equipo",
        timestamps: false,
    }
    const Equipo = sequelize.define(alias, cols, config);

    Equipo.associate = (models) => {

        Equipo.belongsTo(models.Categoria, {
            as: 'categoria', 
            foreignKey: 'categoria_id'
        })

    }


    return Equipo
}