import '@telegram-apps/telegram-ui/dist/styles.css';
import { Button, FixedLayout, Input, List } from '@telegram-apps/telegram-ui';

import { useEffect, useState } from 'react';
import { ProductModel } from '../../models/product.model.ts';
import { getCategories, getProducts } from '../../services/product.service.ts';

import { useNavigate } from 'react-router';
import { Product } from '../../components/ProductList';

export function Main() {
  // const [categories, setCategories] = useState<string[]>([])
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductModel[]>([]);
  // const [isShowDialog, setIsShowDialog] = useState<boolean>(false)

  useEffect(() => {
    Promise.all([getProducts(), getCategories()]).then(([products]) => {
      // setCategories(categories.data)
      setProducts(products.data);
    });
  }, []);

  // function onCategoryClick(category: string) {
  //     setIsShowDialog(!isShowDialog)
  //     getProductsByCategory(category)
  //         .then(res => setProducts(res.data))
  // }

  return (
    <>
      <Input placeholder="Поиск" />

      <Product products={products} />

      <FixedLayout>
        <List
          style={{
            background: 'var(--tgui--secondary_bg_color)',
            padding: 10,
          }}
        >
          <Button onClick={() => navigate('/cart')} size="l" stretched>
            Корзина 1
          </Button>
        </List>
      </FixedLayout>
    </>
  );
}
