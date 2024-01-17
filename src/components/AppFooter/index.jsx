import { Typography } from "antd"

function AppFooter (){
    return (
    <div className="footer">
        <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>Terms and Conditions</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>Return Policy</Typography.Link>
        <Typography.Link href="tel:+987654321" target={"_blank"}>+987654321</Typography.Link>

    </div>
    )
}

export default AppFooter