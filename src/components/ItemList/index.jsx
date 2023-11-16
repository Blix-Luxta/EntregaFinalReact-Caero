
import { List, Image, Card, Typography, Rate} from "antd"


export default function ItemList({item}){

    return(
        <List 
        grid={{column:4}}
        renderItem={(product, index) => {
            return <Card className="itemCard" title={product.title} actions={[<Rate defaultValue={4}></Rate>, <AddToCardButton item={product}/>]}
            key={index} 
            cover={<Image className="itemCardImage" src={product.thumbnail} />}>
                <Card.Meta title={<Typography.Paragraph>Price: ${product.price}</Typography.Paragraph>} description={<Typography.Paragraph ellipsis={{rows:2, expandable:true, symbol:"more"}}>{product.description}</Typography.Paragraph> }></Card.Meta>
            </Card>
        }} dataSource={item}></List>
    )
}

