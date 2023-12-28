
export const SERVER_PATH = 'http://localhost:3000/'

export const getProductList = () => 
        fetch(`${SERVER_PATH}api/product?page=1&offset=9`)
        .then((res) => res.json())