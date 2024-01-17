import { useEffect, useState } from "react"
import ItemList from "../ItemList/index"
import { getAllProducts } from "../API"
import { Spin } from "antd"


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
    
    if(loading){
        return <Spin className="Spin" spinning/>
    }        

    return(
            <ItemList items={items}/>
    )
}



export default ItemListContainer