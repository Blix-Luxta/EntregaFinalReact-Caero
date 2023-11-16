
import { List, Image, Card, Typography, Rate} from "antd"
import AddToCardButton from "../AddToCartButton";



export default function ItemList({items}){

    return(
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

