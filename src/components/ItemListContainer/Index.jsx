import { useEffect } from "react"
import ItemList from "../ItemList/index"


function ItemListContainer(){

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
            .then(json=>{
                setProducts(json)
                console.log(json)})
            .catch(err=>console.error(err))
    },[])
    return(
        <ItemList/>
    )
}

export default ItemListContainer