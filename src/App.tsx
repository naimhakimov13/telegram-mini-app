import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Button, Cell, Input, Modal, Tappable} from '@telegram-apps/telegram-ui'

import SearchIcon from './assets/icons/seacrh.svg'
import {CategoryList} from "./components/CategoryList/CategoryList.tsx";
import {useEffect, useState} from "react";
import {getCategories, getProducts, getProductsByCategory} from "./services/product.service.ts";

function App() {
    const [categories, setCategories] = useState<string[]>([])
    const [products, setProducts] = useState<any[]>([])
    const [isShowDialog, setIsShowDialog] = useState<boolean>(false)

    useEffect(() => {
        console.log(products)
    }, [products]);

    useEffect(() => {
        Promise.all([
            getProducts(),
            getCategories()
        ])
            .then(([products, categories]) => {
                setCategories(categories.data)
            })
    }, [])

    function onCategoryClick(category: string) {
        setIsShowDialog(!isShowDialog)
        getProductsByCategory(category)
            .then(res => setProducts(res.data))
    }

    return (
        <>
            <AppRoot>
                <Button
                    onClick={() => setIsShowDialog(!isShowDialog)}
                    mode="filled"
                    size="s"
                >
                    Action
                </Button>
                <Modal
                    dismissible={false}
                    open={isShowDialog}
                    header={<Cell>Список категорий</Cell>}
                >
                    <>
                        <CategoryList onSelect={onCategoryClick} categories={categories}/>
                    </>
                </Modal>
                <Input placeholder="Я ищу" before={<Tappable Component='div' style={{display: 'flex'}}>
                    <img width={20} height={20} src={SearchIcon} alt=""/>
                </Tappable>}/>
            </AppRoot>
        </>
    )
}

export default App
