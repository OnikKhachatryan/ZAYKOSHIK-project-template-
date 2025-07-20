import React, {useState} from 'react';
import LinksPages from "./LinksPages";
import {ReactComponent as ZayShop} from "../images/about-hero(ZAYshop).svg";
import Carousel from "nuka-carousel";

function About(props) {
    const [color1,setColor1]=useState("green")
    const [color2,setColor2]=useState("green")
    const [color3,setColor3]=useState("green")
    const [color4,setColor4]=useState("green")


    const handleShow1=()=>{
        setColor1("white")
    }
    const handleClose1=()=>{
        setColor1("green")
    }

    const handleShow2=()=>{
        setColor2("white")
    }

    const handleClose2=()=>{
        setColor2("green")
    }
    const handleShow3=()=>{
        setColor3("white")
    }

    const handleClose3=()=>{
        setColor3("green")
    }
    const handleShow4=()=>{
        setColor4("white")
    }

    const handleClose4=()=>{
        setColor4("green")
    }
        // Custom NextButton component with a ">" symbol
        const CustomNextButton = ({ nextSlide, ...props }) => (
            <button onClick={nextSlide} {...props} style={{fontSize:"40px", border:"none", height:"50px", width:"50px",color:"#59AB6EFF", opacity:"0.5", fontWeight:"1000"}}>
                {">"}
            </button>
        );

// Custom PrevButton component with a "<" symbol
        const CustomPrevButton = ({ previousSlide, ...props }) => (
            <button onClick={previousSlide} {...props} style={{fontSize:"40px", border:"none", height:"50px", width:"50px",color:"#59AB6EFF", opacity:"0.5", fontWeight:"1000"}}>
                {"<"}
            </button>
        );

    return (
        <div>
            <LinksPages/>
            <div className={"AboutPart1"}>
                <div className={"AboutPart1Text"}>
                    <span style={{fontSize: "35px", color: "#FFFFFFFF", letterSpacing: "1px"}}>About Us</span>
                    <br/><br/>
                    <span style={{fontSize: "16px", color: "#FFFFFFFF", letterSpacing: "1px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/></span>
                    <span style={{fontSize: "16px", color: "#FFFFFFFF", letterSpacing: "1px"}}>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br/></span>
                    <span style={{fontSize: "16px", color: "#FFFFFFFF", letterSpacing: "1px"}}>commodo consequat. </span>

                </div>
                <div className={"AboutPart1Img"}>
                    <ZayShop/>
                </div>
            </div>
            <div className={"AboutPart2"}>
                <div className={"AboutPart2Text"}>
                    <span style={{fontSize: "45px",}}>Our Services</span><br/><br/>
                    <span style={{fontSize: "16px",}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem <br/>
                                                     ipsum dolor sit amet.
                    </span>
                </div>
                <div className={"OurServicesSquares"}>
                    <div className={"kubs"} onMouseOver={handleShow1} onMouseOut={handleClose1}>
                        <i className="fa fa-truck" aria-hidden="true" id={"AboutPart2Icon1"} style={{color:`${color1}`}}></i><br/>
                        <span style={{fontSize: "25px"}}>Delivery Services</span>
                    </div>
                    <div className={"kubs"} onMouseOver={handleShow2} onMouseOut={handleClose2}>
                        <i className="fa fa-exchange" aria-hidden="true" id={"AboutPart2Icon2"} style={{color:`${color2}`}}></i>
                        <span style={{fontSize: "25px"}}>Shipping & Return</span>
                    </div>
                    <div className={"kubs"} onMouseOver={handleShow3} onMouseOut={handleClose3}>
                        <i className="fa fa-percent" aria-hidden="true" id={"AboutPart2Icon2"} style={{color:`${color3}`}}> </i>
                        <span style={{fontSize: "25px"}}>Promotion</span>
                    </div>
                    <div className={"kubs"} onMouseOver={handleShow4} onMouseOut={handleClose4}>
                        <i className="fa fa-user" aria-hidden="true" id={"AboutPart2Icon1"} style={{color:`${color4}`}}></i>
                        <span style={{fontSize: "25px"}}>24 Hours Service</span>

                    </div>
                </div>
            </div>
            <div className={"AboutPart3"}>
                <div className={"AboutPart3Text"}>
                    <span style={{fontSize: "45px",}}>Our Brands</span><br/><br/>
                    <span style={{fontSize: "16px",}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem <br/>
                                                     ipsum dolor sit amet.
                    </span>
                </div>
                <div className={"AboutPart3Brands"}>
                    <Carousel wrapAround={true}
                              slidesToShow={1}
                              autoplay={true}
                              autoplayInterval={3000}
                              renderCenterLeftControls={({ previousSlide }) => (
                                  <CustomPrevButton previousSlide={previousSlide} />
                              )}
                              renderCenterRightControls={({ nextSlide }) => (
                                  <CustomNextButton nextSlide={nextSlide} />
                              )}>
                        <div className={"imgBrand1"} style={{backgroundImage: `url("../images/brand_01.png")`}}></div>
                        <div className={"imgBrand2"} style={{backgroundImage: `url("../images/brand_02.png")`}}></div>
                        <div className={"imgBrand3"} style={{backgroundImage: `url("../images/brand_03.png")`}}></div>
                        <div className={"imgBrand4"} style={{backgroundImage: `url("../images/brand_04.png")`}}></div>
                    </Carousel>
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

export default About;