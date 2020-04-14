const expres = require('express')
const router = expres.Router()


let controller = require('../controllers/bookmarks')

router.post('/', controller.create_bookmark)


router.get('/', controller.get_bookmark);

router.get('/:id', controller.get_bookmarks);

router.delete('/:id', controller.delete_bookmark)
router.put('/:id', controller.update_bookmark)

module.exports = router