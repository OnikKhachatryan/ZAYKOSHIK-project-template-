import React from 'react';
import {Link} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'

function LinksPages(props) {
    return (
       <>
           <div className={'darkgray'}>
                    <span className={'mail'}><i className="fa fa-envelope-o" aria-hidden="true"> info@company.com </i>
                       <span className={'phone'}><i className="fa fa-phone" aria-hidden="true"></i>+374-99-111-601
                       </span>
                    </span>
                   <span className={'fbin'}>
                        <i id={'icons'} className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i id={'icons'} className="fa fa-instagram" aria-hidden="true"></i>
                        <i id={'icons'} className="fa fa-twitter" aria-hidden="true"></i>
                        <i id={'icons'} className="fa fa-linkedin-square" aria-hidden="true"></i>
                   </span>
           </div>

           <div className="menu">
               <ul>
                   <li className={'zay'}>ZAY</li>
                   <li><Link className="Links" to="/">Home</Link></li>
                   <li><Link className="Links" to="/About">About</Link></li>
                   <li><Link className="Links" to="/Shop">Shop</Link></li>
                   <li><Link className="Links" to="/Contact">Contact</Link></li>
                   <li className={"MagazineSearch"}>
                       <i className="fa fa-search" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                   </li>
                   <li className={"MagazineSearch"}>
                       <i className="fa fa-shopping-cart" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                   </li>
                   <li className={"MagazineSearch"}>
                       <i className="fa fa-users" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                   </li>

               </ul>
           </div>
       </>
    );
}

export default LinksPages;