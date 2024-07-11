import { Button, Card, List } from '@telegram-apps/telegram-ui';
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';

import { ProductModel } from '../../models/product.model.ts';
import { useNavigate } from 'react-router';

export interface ProductListProps {
  products: ProductModel[];
}

export default function ProductList({ products }: ProductListProps) {
  const navigate = useNavigate();

  function navigateToProduct(productId: number): void {
    navigate(`/product/${productId}`);
  }

  if (products.length === 0) {
    return <List>Загрузка...</List>;
  }
  return (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: 10,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        marginBottom: 70,
      }}
    >
      {products.map((product) => (
        <Card
          onClick={() => navigateToProduct(product.id)}
          style={{ margin: 0 }}
        >
          <img
            alt={product.title}
            src={product.image}
            style={{
              display: 'block',
              height: '200px',
              objectFit: 'cover',
              width: '100%',
            }}
          />
          <CardCell readOnly subtitle={`${product.price} $`}>
            {product.title}
          </CardCell>

          <Button mode="plain" style={{ width: '100%' }}>
            Посмотреть
          </Button>
        </Card>
      ))}
    </List>
  );
}
