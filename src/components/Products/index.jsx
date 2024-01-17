import { useEffect, useState } from "react";
import { Spin } from "antd"
import { getProductsByCategory } from "../API";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList";

function Products() {
    const [loading, setLoading] = useState(false)
    const param = useParams()
    const [items, setItems] = useState([])


    useEffect(() => {
        setLoading(true)
        getProductsByCategory(param.categoryId).then((res) => {
            setItems(res.products)
            setLoading(false)
        })
            .catch(err => console.error(err))
    }, [param])

    if (loading) { return <Spin className="Spin" spinning /> }

    return (
        <ItemList items={items}/>
    )

}



export default Products