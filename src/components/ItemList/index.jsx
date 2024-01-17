
import { List, Image, Card, Typography, Rate, Select } from "antd"
import AddToCardButton from "../AddToCartButton";
import { useState } from "react";



export default function ItemList({ items }) {
    const [ordenar, setOrdenar] = useState("az")
    const ordenarItems=()=>{
        const itemsOrdenados = [...items]
        itemsOrdenados.sort((a, b)=>{
            if(ordenar === "az"){
                return a.title > b.title ? 1 : a.title === b.title ? 0: -1
             }
             else if(ordenar === "za"){
                return a.title < b.title ? 1 : a.title === b.title ? 0: -1
             }
             else if(ordenar === "menormayor"){
                return a.price > b.price ? 1 : a.price === b.price ? 0: -1
             }
             else if(ordenar === "mayormenor"){
                return a.price < b.price ? 1 : a.price === b.price ? 0: -1
             }
        })
        return itemsOrdenados
    }

    return (
        <div className="productContainer">
            <div>
                <Typography.Text>Ordenar Productos: </Typography.Text>
                <Select onChange={(value)=>{
                    setOrdenar(value)
                }} defaultValue={"az"} options={[{
                    label: "Alfabeticamente a-z",
                    value: "az"
                },
                {
                    label: "Alfabeticamente z-a",
                    value: "za"
                },
                {
                    label: "Precio: Menor a mayor",
                    value: "menormayor"
                },
                {
                    label: "Precio: Mayor a menor",
                    value: "mayormenor"
                }
                ]}></Select>
            </div>
            <List
                grid={{ column: 4 }}
                renderItem={(product, index) => {
                    return <Card className="itemCard" title={product.title} actions={[<Rate defaultValue={4}></Rate>, <AddToCardButton item={product} />]}
                        key={index}
                        cover={<Image className="itemCardImage" src={product.thumbnail} />}>
                        <Card.Meta title={<Typography.Paragraph>Price: ${product.price}</Typography.Paragraph>} description={<Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>{product.description}</Typography.Paragraph>}></Card.Meta>
                    </Card>
                }} dataSource={ordenarItems(items)}></List>
        </div>

    )
}

