// modelo para sincronizar con la BD

const Sequelize = require('sequelize')
const sequelize = require('../services/database')

class Bookmarks extends Sequelize.Model {}

Bookmarks.init({

    url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    nombre: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
    },

}, {
    sequelize,
    modelName: 'bookmark',
    timestamps: false
})


sequelize.sync()
module.exports = Bookmarks;