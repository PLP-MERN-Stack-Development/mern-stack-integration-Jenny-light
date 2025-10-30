const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { getAllCategories, createCategory } = require('../controllers/categoryController');
const { protect, admin } = require('../middleware/auth');
const validate = require('../middleware/validation');

const categoryValidation = [
  body('name').trim().notEmpty().withMessage('Category name is required')
];

router.get('/', getAllCategories);
router.post('/', protect, admin, categoryValidation, validate, createCategory);

module.exports = router;