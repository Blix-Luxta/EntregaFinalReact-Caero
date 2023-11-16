import { Menu } from "antd"
import { HomeFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

function AppHeader() {
    const navigate = useNavigate()
    const onMenuClick = (item) => {
        navigate(`/${item.key}`)
    }
    return (
        <div className="header">
            <Menu onClick={onMenuClick} mode="horizontal"
                items={[{
                    label: <HomeFilled />,
                    key: "home"
                },
                {
                    label: "Men",
                    key: "men",
                    children: [{
                        label: "Mens-Shoes",
                        key: "mens-shoes"
                    },
                    {
                        label: "Mens-Shirts",
                        key: "mens-shirts"
                    },
                    {
                        label: "Mens-Watches",
                        key: "mens-watches"
                    }
                ]
                }, {
                    label: "Women",
                    key: "women",
                    children: [{
                        label: "Womens-Dresses",
                        key: "womens-dresses"
                    }, {
                        label: "Womens-Shoes",
                        key: "womens-shoes"
                    }, {
                        label: "Womens-Watches",
                        key: "womens-watches"
                    }]
                },
                {
                    label: "Accesories",
                    key: "accesories",
                    children: [{
                        label: "Sunglasses",
                        key: "sunglasses"
                    },
                    {
                        label: "Womens-Jewellery",
                        key: "womens-jewellery"
                    }]
                }
                ]} />
        </div>
    )
}

export default AppHeader