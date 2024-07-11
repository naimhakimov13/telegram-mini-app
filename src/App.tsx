import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Input, FixedLayout, Button, List} from '@telegram-apps/telegram-ui'

import {useEffect, useState} from "react";
import {getCategories, getProducts} from "./services/product.service.ts";
import {ProductList} from "./components/ProductList/ProductList.tsx";
import {ProductModel} from "./models/product.model.ts";

function App() {
    // const [categories, setCategories] = useState<string[]>([])
    const [products, setProducts] = useState<ProductModel[]>([])
    // const [isShowDialog, setIsShowDialog] = useState<boolean>(false)

    useEffect(() => {
        console.log(products)
    }, [products]);

    useEffect(() => {
        Promise.all([
            getProducts(),
            getCategories()
        ])
            .then(([products]) => {
                // setCategories(categories.data)
                setProducts(products.data)
            })
    }, [])

    // function onCategoryClick(category: string) {
    //     setIsShowDialog(!isShowDialog)
    //     getProductsByCategory(category)
    //         .then(res => setProducts(res.data))
    // }

    return (
        <>
            <AppRoot>
                <Input placeholder="Поиск"/>

                <ProductList products={products}/>

                <FixedLayout>
                    <List style={
                        {
                            background: 'var(--tgui--secondary_bg_color)',
                            padding: 10
                        }
                    }>
                        <Button size="l" stretched>
                            Корзина 1
                        </Button>
                    </List>
                </FixedLayout>
            </AppRoot>
        </>
    )
}

export default App
