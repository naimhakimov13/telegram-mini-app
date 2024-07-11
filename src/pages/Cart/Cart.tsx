import { BackButton } from '@twa-dev/sdk/react';
import { Button, FixedLayout } from '@telegram-apps/telegram-ui';
import { useCartStore } from '../../store/cart.ts';

export function Cart() {
  const products = useCartStore((state) => state.products);
  // const remove = useCartStore((state) => state.remove);
  return (
    <div
      style={{
        height: 'calc(100vh - 42px)',
        background: 'var(--tgui--bg_color)',
        padding: 10,
      }}
    >
      <h1>Корзина</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <FixedLayout
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          padding: 10,
        }}
      >
        <Button
          style={{
            width: '100%',
          }}
        >
          Оформить заказ на 2500₽
        </Button>
      </FixedLayout>
      <BackButton />
    </div>
  );
}
