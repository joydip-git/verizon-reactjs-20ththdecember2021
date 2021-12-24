import Home from "../components/common/home/Home";
import PageNotFound from "../components/common/page-not-found/PageNotFound";
import AddProduct from "../components/products/add-product/AddProduct";
import ProductList from "../components/products/product-list/ProductList";
import UpdateProduct from "../components/products/update-product/UpdateProduct";
import ViewProduct from "../components/products/view-product/ViewProduct";

export const appRoutes = [
    {
        id: 1,
        path: '/',
        component: Home
    },
    {
        id: 2,
        path: 'home',
        component: Home
    },
    {
        id: 3,
        path: 'products',
        component: ProductList
    },
    {
        id: 4,
        path: 'product/:id',
        component: ViewProduct
    },
    {
        id: 5,
        path: 'product/update/:id',
        component: UpdateProduct
    },
    {
        id: 6,
        path: 'product/add',
        component: AddProduct
    },
    {
        id: 7,
        path: '*',
        component: PageNotFound
    }
]