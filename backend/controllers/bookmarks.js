const bookmark = require('../models/bookmarks')

let create_bookmark = async(req, res) => {
    let { url, nombre, descripcion } = req.body;
    try {
        let new_bookmark = await bookmark.create({ url, nombre, descripcion });
        res.send({ message: 'exitoso', data: new_bookmark })
    } catch (error) {
        res.send({ message: "error", error: error['errors'][0]['message'] });
    }

}
let get_bookmark = async(req, res) => {
    try {
        const bookmarks = await bookmark.findAll()
        res.send({ message: "exitoso", data: bookmarks });

    } catch (error) {
        res.send({ error: error, message: " hubo un error" });
    }
}
let get_bookmarks = async(req, res) => {
    try {
        let id = req.params.id;
        const book = await bookmark.findOne({ where: { id } });
        res.send({ data: book, message: "exitoso" })
    } catch (e) {
        res.send({ error: e, message: " error " });
    }
}
let delete_bookmark = async(req, res) => {
    try {
        let id = req.params.id;
        const rowDeleted = await bookmark.destroy({ where: { id } });
        let message = rowDeleted == 1 ? ' eliminado exitoso ' : ' id no encontrado '
        res.send({ data: rowDeleted, message: message })
    } catch (e) {
        res.send({ error: e, message: " error " })
    }
}
let update_bookmark = async(req, res) => {
    let id1 = req.params.id;
    let { url, nombre, descripcion } = req.body;
    try {
        let bookmarkUpdated = await bookmark.update({ url, nombre, descripcion }, { where: { id: id1 } });
        let message = bookmarkUpdated == 1 ? ' actualizado exitoso ' : ' id no encontrado '
        res.send({ message: message, row: bookmarkUpdated });
    } catch (e) {
        res.send({
            error: e,
            message: "hubo un erro "
        })
    }

}

module.exports = {
    create_bookmark,
    get_bookmark,
    get_bookmarks,
    delete_bookmark,
    update_bookmark

}