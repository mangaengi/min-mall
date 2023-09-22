function getProducts(searchQuery) {
    return async(dispatch, getState) => {
        //let url = 'http://localhost:5000/products/'
        let url =  `https://my-json-server.typicode.com/mangaengi/min-mall/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type: "GET_PRODUCT_SUCESS", payload: {data}})
    }
}
export const productAction = {getProducts};