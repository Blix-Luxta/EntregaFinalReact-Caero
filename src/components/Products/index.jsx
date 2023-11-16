import { useEffect, useState } from "react";
import { List, Image, Card, Typography, Rate, Spin} from "antd"
import { getProductsByCategory } from "../API";
import { useParams } from "react-router-dom";
import AddToCardButton from "../AddToCartButton";

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
    
    if(loading){<Spin spinning/>}

    return (
        <List 
        grid={{column:4}}
        renderItem={(product, index) => {
            return <Card className="itemCard" title={product.title} actions={[<Rate defaultValue={4}></Rate>, <AddToCardButton item={product}/>]}
            key={index} 
            cover={<Image className="itemCardImage" src={product.thumbnail} />}>
                <Card.Meta title={<Typography.Paragraph>Price: ${product.price}</Typography.Paragraph>} description={<Typography.Paragraph ellipsis={{rows:2, expandable:true, symbol:"more"}}>{product.description}</Typography.Paragraph> }></Card.Meta>
            </Card>
        }} dataSource={items}></List>
    )

}



export default Products