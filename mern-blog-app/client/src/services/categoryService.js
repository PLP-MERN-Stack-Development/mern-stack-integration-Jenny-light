import api from './api';

export const categoryService = {
  getAllCategories: () => api.get('/categories'),
  createCategory: (data) => api.post('/categories', data)
};