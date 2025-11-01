import express from 'express';
import { body } from 'express-validator';
import { getAllCategories, createCategory } from '../controllers/categoryController.js';
import { protect, admin } from '../middleware/auth.js';
import validate from '../middleware/validation.js';

const router = express.Router();

const categoryValidation = [
  body('name').trim().notEmpty().withMessage('Category name is required')
];

router.get('/', getAllCategories);
router.post('/', protect, admin, categoryValidation, validate, createCategory);

export default router;