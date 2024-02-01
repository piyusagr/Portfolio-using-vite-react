import React from "react";
import { GithubOutlined, MailFilled ,LinkedinOutlined, WhatsAppOutlined, TwitterOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <nav className="navbar  p-4 bg-dark border border-body bottom" data-bs-theme="dark">
            <div className="container-fluid ">
                <Link to="https://www.linkedin.com/in/piyush-agrawal-9859801b9/"><LinkedinOutlined className="bg-light p-1 border rounded mx-2" style={{width:25, height:25}}/></Link>
                <Link to="mailto:piyush31009@gmail.com"><MailFilled className="bg-light p-1 rounded mx-2" style={{width:25, height:25}}/></Link>
                <Link to="https://github.com/piyush31009"><GithubOutlined className="bg-light p-1 rounded mx-2" style={{width:25, height:25}}/></Link>
                <Link to="tel:+917543040562"><WhatsAppOutlined className="bg-light p-1  rounded mx-1" style={{width:25, height:25}}/></Link>\
                <Link to="https://github.com/piyush31009"><TwitterOutlined className="mx-2 bg-light p-1 rounded align-left" style={{width:25,marginLeft:-60, height:25}}/></Link>
            </div>

        </nav>
    )
}

export default Footer;
