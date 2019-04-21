const express = require('express');
const router = express.Router();
const categoryController = require('../app/api/controllers/category');

router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.post('/:categoryId', categoryController.updateById);
router.delete('/:categoryId', categoryController.deleteById);


module.exports = router;