import { Link } from "react-router-dom";

const Footer = () => {
    const lists = ['개인정보처리방침', '법적고지', '이메일 무단수집 거부']
    const footerList = 
    lists.map(
      (lists,index) => 
      <li key={index +"_footer"}><Link to={`#section`}>{lists}</Link></li>
    )

    return (
        <footer id="footer">
          <div className="sInner">
            <p><span>©</span> 씨제이㈜. All Rights Reserved.</p>
            <ul>
            {footerList}
            </ul>
          </div>
        </footer>
    );
    };
    
    export default Footer;