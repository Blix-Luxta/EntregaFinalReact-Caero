import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { List, Image, Card } from "antd"

function Products() {
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=5`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <List 
        grid={{column:3}}
        renderItem={(product, index) => {
            return <Card title={product.title} 
            key={index} 
            cover={<Image className="itemCardImage" src={product.image} />}></Card>
        }} dataSource={items}></List>
    )

}

export default Products