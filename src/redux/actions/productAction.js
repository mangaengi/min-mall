function getProducts(searchQuery) {
    return async(dispatch, getState) => {
        let url =  `https://my-json-server.typicode.com/mangaengi/Giordano-mall/products/${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type: "GET_PRODUCT_SUCESS", payload: {data}})
    }
}
export const productAction = {getProducts};

