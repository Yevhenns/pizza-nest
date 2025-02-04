import { ProductCategory } from './createProduct.dto';

export const products = [
  {
    title: 'Піца 5 сирів',
    description: 'Смачна піца з 5 видами сиру',
    dimension: '30см',
    price: 300,
    photo:
      'https://res.cloudinary.com/dyka4vajb/image/upload/v1698576734/hatamagnata/pizzas/oc1fji52ggplw65qc4rh.png',
    category: 'Піца',
    promotion: false,
    promPrice: 280,
    vegan: false,
  },
  {
    title: 'Піца BBQ',
    description: 'Піца з соусом BBQ та м’ясом',
    dimension: '40см',
    price: 400,
    photo:
      'https://res.cloudinary.com/dyka4vajb/image/upload/v1698576734/hatamagnata/pizzas/oc1fji52ggplw65qc4rh.png',
    category: 'Піца',
    promotion: true,
    promPrice: 350,
    vegan: false,
  },
];

const {
  category,
  description,
  dimension,
  photo,
  price,
  promPrice,
  promotion,
  title,
  vegan,
} = products[0];

export const examples = {
  title: { example: title },
  description: { example: description },
  dimension: { example: dimension },
  price: { example: price },
  photo: { example: photo },
  category: { example: category, enum: ProductCategory },
  promotion: { example: promotion },
  promPrice: { example: promPrice },
  vegan: { example: vegan },
};
