import React from 'react';
import LinksPages from "./LinksPages";
import Carousel from "nuka-carousel";
import BannerImage01 from "../images/banner_img_01.jpg";
import BannerImage02 from "../images/banner_img_02.jpg";
import BannerImage03 from "../images/banner_img_03.jpg";
import CategoryImage1 from "../images/category_img_01.jpg";
import CategoryImage2 from "../images/category_img_02.jpg";
import CategoryImage3 from "../images/category_img_03.jpg";
import FeatureImage1 from "../images/feature_prod_01.jpg"
import FeatureImage2 from "../images/feature_prod_02.jpg"
import FeatureImage3 from "../images/feature_prod_03.jpg"

function Home(props) {
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
        <div >
            <LinksPages />
            <div className={'homeContent'}>

                <Carousel
                    wrapAround={true}
                    slidesToShow={1}
                    autoplay={true}
                    autoplayInterval={3000}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <CustomPrevButton previousSlide={previousSlide} />
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <CustomNextButton nextSlide={nextSlide} />
                    )}
                >
                    <div className={"carousel1"}>
                        <div className={"text1"}><span style={{ fontSize:"40px", color: "limegreen" }}><span style={{fontWeight:"bolder", fontFamily:" cursive"}}>Zay</span> eCommerce</span><br/>
                                                 <span style={{fontSize:"30px", fontWeight:"bold"}}>Tiny and Perfect eCommerce Template</span><br/>
                                                 <span style={{fontSize:"17px"}}>Zay Shop is an eCommerce HTML5 CSS template with latest version of <br/>Bootstrap 5 (beta 1). This template is 100% free provided by <a
                                                     href="#" style={{color:"limegreen"}}>TemplateMo</a><br/>website. Image credits go to<a
                                                     href="#" style={{color:"limegreen"}}>Freepik Stories, Unsplash</a>and<a
                                                     href="#" style={{color:"limegreen"}}>Icons 8.</a></span>
                        </div>
                        <div style={{ backgroundImage: `url(${BannerImage01})` }} className={"img1"}></div>
                    </div>
                    <div className={"carousel2"}>
                        <div className={"text2"}><span style={{fontSize:"35px"}}>Proident occaecat</span><br/>
                                                 <span style={{fontSize:"30px", fontWeight:"bold"}}>Aliquip ex ea commodo consequat</span><br/>
                                                 <span style={{fontSize:"17px"}}>You are permitted to use this Zay CSS template for your commercial <br/> websites. You are <span style={{fontSize:"17px", fontWeight:"bold"}}>not permitted</span> to re-distribute the template ZIP file in any <br/> kind of template collection websites.</span>
                        </div>
                        <div style={{ backgroundImage: `url(${BannerImage02})`}} className={"img2"}></div>
                    </div>
                    <div className={"carousel3"}>
                        <div className={"text3"}><span style={{fontSize:"35px"}}>Repr in voluptate</span><br/>
                                                 <span style={{fontSize:"30px", fontWeight:"bold"}}>Ullamco laboris nisi ut</span><br/>
                                                 <span style={{fontSize:"17px"}}>We bring you 100% free CSS templates for your websites. If you wish to <br/> support TemplateMo, please make a small contribution via PayPal or tell <br/> your friends about our website. Thank you.</span>
                        </div>
                        <div style={{ backgroundImage: `url(${BannerImage03})`}} className={"img3"}></div>
                    </div>
                </Carousel>
                <div className={"homePart2"}>
                    <div className={"categoriesTextCenter"}><span style={{fontSize:"35px"}}>Categories of The Month</span><br/>
                                                            <span style={{fontSize:"20px", letterSpacing:"2px"}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br/>
                                                                                                                 mollit anim id est laborum.</span>
                    </div>
                    <div className={"circlies"}>
                        <div className={"circly1"}>
                            <div className={"klorner"} style={{backgroundImage:`url(${CategoryImage1})`}}></div>
                            <div className={"buttons"}>
                                <span style={{fontSize:"30px",marginBottom:"80px"}}>Watches</span>
                                <button className={"button"}>Go Shop</button>
                            </div>

                        </div>
                        <div className={"circly2"}>
                            <div className={"klorner"} style={{backgroundImage:`url(${CategoryImage2})`}}></div>
                            <div className={"buttons"}>
                                <span style={{fontSize:"30px",marginBottom:"80px"}}>Shoes</span>
                                <button className={"button"}>Go Shop</button>
                            </div>
                        </div>
                        <div className={"circly3"}>
                            <div className={"klorner"} style={{backgroundImage:`url(${CategoryImage3})`}}></div>
                            <div className={"buttons"}>
                                <span style={{fontSize:"30px",marginBottom:"80px"}}>Accessories</span>
                                <button className={"button"}>Go Shop</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"homePart3"}>
                    <div className={"categoriesTextCenter"}><span style={{fontSize:"35px"}}>Featured Product</span><br/>
                        <span style={{fontSize:"20px", letterSpacing:"2px"}}>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                                                                             Excepteur sint occaecat cupidatat non proident.
                        </span>
                    </div>
                    <div className={"squaresPart"}>
                        <div className={"square1"}>
                            <div className={"squares"} style={{backgroundImage:`url(${FeatureImage1})`}}></div>
                            <div className={"starsPrice"}>
                                <div className={"stars"}>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star-o" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star-o" aria-hidden="true"></i>
                                    <span style={{fontSize:"30px"}}>240$</span>
                                </div>
                                <div className={"starsCaption"}>
                                    <span style={{fontSize:"30px", fontWeight:"bold"}}>Gym Weight</span><br/>
                                    <span style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing <br/>
                                                                    elit. Sunt in culpa qui officia deserunt.</span><br/><br/>
                                    <span style={{color:"darkgray"}}>Reviews (24)</span>
                                </div>
                            </div>
                        </div>
                        <div className={"square2"}>
                            <div className={"squares"} style={{backgroundImage:`url(${FeatureImage2})`}}></div>
                            <div className={"starsPrice"}>
                                <div className={"stars"}>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star-o" aria-hidden="true"></i>
                                    <span style={{fontSize:"30px"}}>480$</span>
                                </div>
                                <div className={"starsCaption"}>
                                    <span style={{fontSize:"30px", fontWeight:"bold"}}>Cloud Nike Shoes</span><br/>
                                    <span style={{fontSize:"15px"}}>Aenean gravida dignissim finibus. Nullam ipsum <br/>
                                                                    diam, posuere vitae pharetra sed, commodo <br/>
                                                                    ullamcorper.</span><br/><br/>
                                    <span style={{color:"darkgray"}}>Reviews (55)</span>
                                </div>
                            </div>
                        </div>
                        <div className={"square3"}>
                            <div className={"squares"} style={{backgroundImage:`url(${FeatureImage3})`}}></div>
                            <div className={"starsPrice"}>
                                <div className={"stars"}>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star" aria-hidden="true"></i>
                                    <i style={{color:"limegreen"}} className="fa fa-star-half-o" aria-hidden="true"></i>

                                    <span style={{fontSize:"30px"}}>360$</span>
                                </div>
                                <div className={"starsCaption"}>
                                    <span style={{fontSize:"30px", fontWeight:"bold"}}>Summer Addides Shoes</span><br/>
                                    <span style={{fontSize:"15px"}}>Curabitur ac mi sit amet diam luctus porta. <br/>
                                                                    Phasellus pulvinar sagittis diam, et scelerisque <br/>
                                                                    ipsum lobortis nec.</span><br/><br/>
                                    <span style={{color:"darkgray"}}>Reviews (89)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"infoPart4"}>
                    <div className={"details"}>
                        <div className={"ZayShopDetails"}>
                            <br/><br/>
                            <span style={{color:"limegreen", fontSize:"35px", fontWeight:"bold"}}>Zay Shop</span>
                            <hr style={{width: "300px", border: "none", borderBottom: "0.3px solid white", height: "5px" }}/>

                            <br/>
                            <span style={{fontSize:"20px"}}><i className="fa fa-map-marker" aria-hidden="true"></i>  123 Consectetur at ligula 10660</span>
                            <br/>
                            <span style={{fontSize:"20px"}}><i className="fa fa-phone" aria-hidden="true">  010-020-0340</i></span>
                            <br/>
                            <span style={{fontSize:"20px"}}><i className="fa fa-envelope" aria-hidden="true">  info@company.com</i></span>
                        </div>
                        <div className={"Products"}>
                            <br/><br/>
                            <span style={{color:"white", fontSize:"35px", fontWeight:"bold"}}>Products</span>
                            <hr style={{width: "300px", border: "none", borderBottom: "0.3px solid white", height: "5px" }}/>

                            <br/>
                            <span style={{fontSize:"20px", }}>  Luxury</span>
                            <br/>
                            <span style={{fontSize:"20px", }}>  Sport Wear</span>
                            <br/>
                            <span style={{fontSize:"20px", }}>  Men's Shoes</span>
                            <br/>
                            <span style={{fontSize:"20px", }}>  Women's Shoes</span>
                            <br/>
                            <span style={{fontSize:"20px",}}>  Popular Dress</span>
                            <br/>
                            <span style={{fontSize:"20px",}}>  Gym Accessories</span>
                            <br/>
                            <span style={{fontSize:"20px", }}>  Sport Shoes</span>
                        </div>
                        <div className={"FurtherInfo"}>
                            <br/><br/>
                            <span style={{color:"white", fontSize:"35px", fontWeight:"bold"}}>Further Info</span>
                            <hr style={{width: "300px", border: "none", borderBottom: "0.3px solid white", height: "5px" }}/>

                            <br/>
                            <span style={{fontSize:"20px"}}>  Home</span>
                            <br/>
                            <span style={{fontSize:"20px"}}>  About Us</span>
                            <br/>
                            <span style={{fontSize:"20px"}}>  Shop Locations</span>
                            <br/>
                            <span style={{fontSize:"20px"}}>  FAQs</span>
                            <br/>
                            <span style={{fontSize:"20px"}}>  Contact</span>
                        </div>
                    </div>
                    <div className={"InfoEmailInput"}>

                        <hr style={{width: "90%", border: "none", borderBottom: "0.3px solid white", height: "5px" }}/>
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
                        <span style={{fontSize:"16px", letterSpacing:"0.5px", color:"#BEC4CEFF"}}>Copyright © 2021 Company Name | Designed by <a href="#" className={"TheLastWord"}> TemplateMo</a></span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;