import { useEffect, useState } from "react"
import ItemList from "../ItemList/index"
import { getAllProducts } from "../API"
import { List, Image, Card, Typography, Rate} from "antd"
import AddToCardButton from "../AddToCartButton";




function ItemListContainer(){
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        setLoading(true)
        getAllProducts()
        .then((res) => {
            setItems(res.products)
            console.log(res.products)
            setLoading(false)
        })
        .catch(err => console.error("lpm", err))
},[])
    
        
    return(
            <ItemList items={items}/>
    )
}



export default ItemListContainer