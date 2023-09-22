function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        //let url='http://localhost:5000/products'
        let url=`https://my-json-server.typicode.com/mangaengi/min-mall/products/${searchQuery}`
        let reponse = await fetch(url)
        let data= await reponse.json()
        console.log(data)
        dispatch({type:"GET_PRODUCT_SUCCESS", payload: {data}})
    }
}

export const productAction = {getProducts}
