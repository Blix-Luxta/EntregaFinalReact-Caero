import { Badge, Drawer, InputNumber, Table } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { getCart } from "../API"


function AddCart() {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        getCart().then(res => {
            setCartItems(res.products)
        })
    })

    return (
        <div key={"Carrito"}>
            <Badge onClick={() => setCartDrawerOpen(true)} count={7}>
                <ShoppingCartOutlined className="shopIcon" />
            </Badge>
            <Drawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} title="Tu carrito" contentWrapperStyle={{ width: 500 }}>
                <Table pagination={false} columns={[{
                    title: "title",
                    dataIndex: "title"
                },
                {
                    title: "price",
                    dataIndex: "price",
                    render: (value) => {
                        return <span>$ {value}</span>
                    }

                },
                {
                    title: "quantity",
                    dataIndex: "quantity",
                    // render: (value, record) => {
                    //     return <InputNumber min={0} defaultValue={value} onChange={(value) => {
                    //         setCartItems(pre => pre.map(cart => {
                    //             if (record.id === cart.id) {
                    //                cart.total = cart.price * value
                    //             }
                    //             return cart
                    //         }))
                    //     }}></InputNumber>
                    // }
                },
                {
                    title: "total",
                    dataIndex: "total",
                    render: (value) => {
                        return <span>$ {value}</span>
                    }
                }
                ]
                } dataSource={cartItems} summary={(data) => {
                    let total = data.reduce((pre, current) => {
                        return pre + current.total
                    }, 0)
                    return <span> Total: $ {total}</span>
                }} />
            </Drawer>
        </div>

    )
}

export default AddCart