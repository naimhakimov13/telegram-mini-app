import {Button, Card, List} from "@telegram-apps/telegram-ui";
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import {ProductModel} from "../../models/product.model.ts";

export function ProductList({products}: { products: ProductModel[] }) {
    if (products.length === 0) {
        return <List>Загрузка...</List>
    }
    return <List
        style={{
            background: 'var(--tgui--secondary_bg_color)',
            padding: 10,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 70
        }}
    >
        {products.map(product =>
            <Card
                style={{margin: 0}}
                key={product.id}>
                <img
                    alt={product.title}
                    src={product.image}
                    style={{
                        display: 'block',
                        height: '200px',
                        objectFit: 'cover',
                        width: '100%'
                    }}
                />
                <CardCell
                    readOnly
                    subtitle={`${product.price} $`}
                >
                    {product.title}
                </CardCell>

                <Button mode='plain' style={{width: '100%'}}>Добавить корзину</Button>
            </Card>
        )}
    </List>

}
