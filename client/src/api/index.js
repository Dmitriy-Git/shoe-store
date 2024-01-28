import { login, checkAuth, registration, updateUser } from './user'
import { getProductList, getProductDetail } from './product'
import { createOrder, getOrder, deleteOrder } from './order'
import { getProductRatingForUser, createProductRating, deleteProductRatingForUser } from './rating'
import { addProductToCart, getCart, deleteProductToCart, deleteProductsToCart } from './basket'

export { 
        login, 
        checkAuth, 
        registration, 
        updateUser, 
        getProductList, 
        getProductDetail, 
        getCart, 
        addProductToCart, 
        deleteProductToCart, 
        deleteProductsToCart,
        createOrder,  
        getOrder,
        deleteOrder,
        getProductRatingForUser,
        createProductRating,
        deleteProductRatingForUser,
}