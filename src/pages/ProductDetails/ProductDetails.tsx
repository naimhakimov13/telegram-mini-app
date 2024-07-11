import { BackButton } from '@twa-dev/sdk/react';
import {
  Button,
  Cell,
  FixedLayout,
  Skeleton,
} from '@telegram-apps/telegram-ui';
import { useParams } from 'react-router';
import Slider, { Settings } from 'react-slick';
import { useEffect, useState } from 'react';

import { ProductModel } from '../../models/product.model.ts';
import { getProduct } from '../../services/product.service.ts';

function SimpleSlider({ image }: { image: string }) {
  const settings: Settings = {
    infinite: true,
    dots: true,
    dotsClass: 'slick-dots',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <img src={image} alt="..." />
      <img src={image} alt="..." />
      <img src={image} alt="..." />
      <img src={image} alt="..." />
    </Slider>
  );
}

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductModel | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    getProduct(+id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <Skeleton visible withoutAnimation>
          <Cell subtitle="That's live">Hello!!!!</Cell>
        </Skeleton>
      </div>
    );
  }

  return (
    <>
      {product && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--tgui--bg_color)',
            paddingBottom: 62,
            height: '100%',
          }}
        >
          <BackButton />
          <SimpleSlider image={product.image} />

          <div
            style={{
              padding: 10,
              flex: 1,
              marginTop: 30,
            }}
          >
            <h2>{product.title}</h2> <br />
            <p>{product.description}</p>
          </div>

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
              Добавить в корзину
            </Button>
          </FixedLayout>
        </div>
      )}
    </>
  );
}
