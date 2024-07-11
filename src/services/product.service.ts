import { instance } from '../libs/axios.ts';

export const getProducts = () => {
  return instance.get('/products');
};

export const getProduct = (id: number) => {
  return instance.get(`/products/${id}`);
};

export const getCategories = () => {
  return instance.get('products/categories');
};

export const getProductsByCategory = (category: string) => {
  return instance.get(`/products/category/${category}`);
};
