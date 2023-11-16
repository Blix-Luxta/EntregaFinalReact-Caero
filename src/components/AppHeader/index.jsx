import { Menu } from "antd"
import {HomeFilled} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

function AppHeader (){
    const navigate = useNavigate()
    const onMenuClick=(item)=>{
        navigate(`/${item.key}`)
    }
    return (
    <div className="header">
        <Menu onClick={onMenuClick} mode="horizontal"
        items={[{
            label:<HomeFilled/>,
            key:"home"
        },
        {
            label:"Men",
            key:"men",
            children:[{
                label:"Remeras",
                key:"remeras"
            },
        {label:"Zapatillas",
    key:"zapatillas"}]
        },{
            label:"Women",
            key:"women",
            children:[{
                label:"Remeras",
                key:"remeras2"
            }]
        },
        {
            label:"Accesories",
            key:"accesories",
            children:[{
                label:"Relojes",
                key:"relojes"
            },
            {
                label:"Carteras",
                key:"carteras"
            }]
        }
        ]}/>
    </div>
    )
}

export default AppHeader