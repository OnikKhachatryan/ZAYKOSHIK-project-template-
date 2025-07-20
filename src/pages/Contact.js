import React from 'react';
import LinksPages from "./LinksPages";
import Carousel from "nuka-carousel";

function Contact(props) {
    return (
        <div>
            <LinksPages />
            <div className={"ContactPart1"}>
                <div className={"AboutPart3ForContact"} id={{backgroungColor:"#E9EEF5FF"}}>
                    <div className={"AboutPart3Text"}>
                        <span style={{fontSize: "45px",}}>Contact Us</span><br/><br/>
                        <span style={{fontSize: "16px",}}>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum <br/> dolor sit amet.
                                                         ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className={"qartez"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12185.95929172734!2d44.49437098725176!3d40.22041019312235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97ff0271e8c7%3A0xd1713e3679e31351!2z1LXWgNaH1aHVtiDVjdWr1anVqw!5e0!3m2!1shy!2sam!4v1706115502489!5m2!1shy!2sam"
                                width="100%"
                                height="100%"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>
            <div className="contactPart2">
                <div className="contactPart2Row1">
                    <label className="contactLabel">Name</label>
                    <div className="contactInputContainer">
                        <input type="text" placeholder="First Name" className="contactInput" />
                        <input type="text" placeholder="Last Name" className="contactInput" />
                    </div>

                    <label className="contactLabel">Email</label>
                    <div className="contactInputContainer">
                        <input type="email" placeholder="Your Email" className="contactInput" />
                    </div>
                </div>

                <div>
                    <label className="contactLabel">Subject</label>
                    <input type="text" placeholder="Subject" className="contactInputSubject" />
                </div>

                <div>
                    <label className="contactLabel">Message</label>
                    <textarea placeholder="Your message..." className="contactInputMessage" />
                </div>
            </div>
            <div className={"infoPart4"}>
                <div className={"details"}>
                    <div className={"ZayShopDetails"}>
                        <br/><br/>
                        <span style={{color: "limegreen", fontSize: "35px", fontWeight: "bold"}}>Zay Shop</span>
                        <hr style={{width: "300px", border: "none", borderBottom: "0.3px solid white", height: "5px"}}/>

                        <br/>
                        <span style={{fontSize: "20px"}}><i className="fa fa-map-marker" aria-hidden="true"></i>  123 Consectetur at ligula 10660</span>
                        <br/>
                        <span style={{fontSize: "20px"}}><i className="fa fa-phone"
                                                            aria-hidden="true">  010-020-0340</i></span>
                        <br/>
                        <span style={{fontSize: "20px"}}><i className="fa fa-envelope"
                                                            aria-hidden="true">  info@company.com</i></span>
                    </div>
                    <div className={"Products"}>
                        <br/><br/>
                        <span style={{color: "white", fontSize: "35px", fontWeight: "bold"}}>Products</span>
                        <hr style={{width: "300px", border: "none", borderBottom: "0.3px solid white", height: "5px"}}/>

                        <br/>
                        <span style={{fontSize: "20px",}}>  Luxury</span>
                        <br/>
                        <span style={{fontSize: "20px",}}>  Sport Wear</span>
                        <br/>
                        <span style={{fontSize: "20px",}}>  Men's Shoes</span>
                        <br/>
                        <span style={{fontSize: "20px",}}>  Women's Shoes</span>
                        <br/>
                        <span style={{fontSize: "20px",}}>  Popular Dress</span>
                        <br/>
                        <span style={{fontSize: "20px",}}>  Gym Accessories</span>
                        <br/>
                        <span style={{fontSize: "20px",}}>  Sport Shoes</span>
                    </div>
                    <div className={"FurtherInfo"}>
                        <br/><br/>
                        <span style={{color: "white", fontSize: "35px", fontWeight: "bold"}}>Further Info</span>
                        <hr style={{width: "300px", border: "none", borderBottom: "0.3px solid white", height: "5px"}}/>

                        <br/>
                        <span style={{fontSize: "20px"}}>  Home</span>
                        <br/>
                        <span style={{fontSize: "20px"}}>  About Us</span>
                        <br/>
                        <span style={{fontSize: "20px"}}>  Shop Locations</span>
                        <br/>
                        <span style={{fontSize: "20px"}}>  FAQs</span>
                        <br/>
                        <span style={{fontSize: "20px"}}>  Contact</span>
                    </div>
                </div>
                <div className={"InfoEmailInput"}>

                    <hr style={{width: "90%", border: "none", borderBottom: "0.3px solid white", height: "5px"}}/>
                    <br/>
                    <div className={"CircliesIcos"}>
                        <div className={"KlorIcons"}><i className="fa fa-facebook" aria-hidden="true"></i></div>
                        <div className={"KlorIcons"}><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        <div className={"KlorIcons"}><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div className={"KlorIcons"}><i className="fa fa-linkedin-square" aria-hidden="true"></i></div>
                        <div className={"Subscribe"}>
                            <input className={"SubscribeInput"} type="email" placeholder={"  Email Address ..."}/>
                            <button className={"SubscribeButton"}>Subscribe</button>
                        </div>

                    </div>
                    <div className={"LastOne"}>
                        <span style={{fontSize: "16px", letterSpacing: "0.5px", color: "#BEC4CEFF"}}>Copyright © 2021 Company Name | Designed by <a
                            href="#" className={"TheLastWord"}> TemplateMo</a></span>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Contact;