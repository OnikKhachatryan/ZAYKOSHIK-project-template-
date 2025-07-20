import React, {useState} from 'react';
import LinksPages from "./LinksPages";
import ShopImage1 from '../images/shop_01.jpg'
import ShopImage2 from '../images/shop_02.jpg'
import ShopImage3 from '../images/shop_03.jpg'
import ShopImage4 from '../images/shop_04.jpg'
import ShopImage5 from '../images/shop_05.jpg'
import ShopImage6 from '../images/shop_06.jpg'
import ShopImage7 from '../images/shop_07.jpg'
import ShopImage8 from '../images/shop_08.jpg'
import ShopImage9 from '../images/shop_09.jpg'
import Carousel from "nuka-carousel";



function Shop(props) {
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)


    const  handleShow2=()=>{
        setShow2(!show2)
    }
    const  handleShow3=()=>{
        setShow3(!show3)
    }
    const handleShow1=()=>{
        setShow1(!show1)
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
            <div className={"shopPart1"}>
                <div className={"selectCategories"}>
                    <span style={{fontSize: "35px", marginLeft:"50px"}}>Categories</span><br/><br/>
                    <div className={"genderSpan"}> <span style={{fontSize: "20px", marginLeft:"50px"}}>GENDER</span>
                        <button onClick={handleShow1} className={"buttonArrow"}><i className="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                    </div>
                    {show1?(
                        <div className={"genderShow"}>
                            <span style={{fontSize: "20px", marginLeft:"50px"}}>Men</span>
                            <span style={{fontSize: "20px", marginLeft:"50px"}}>Women</span>
                        </div>
                        )
                    :null}


                    <div className={"saleSpan"}><span style={{fontSize: "20px", marginLeft:"50px"}}>Sale</span>
                        <button onClick={handleShow2} className={"buttonArrow"}><i className="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                    </div>
                    {show2?(
                            <div className={"genderShow"}>
                                <span style={{fontSize: "20px", marginLeft:"50px"}}>Sport</span>
                                <span style={{fontSize: "20px", marginLeft:"50px"}}>Luxury</span>
                            </div>
                        )
                        :null}
                    <div className={"productSpan"}><span style={{fontSize: "20px", marginLeft:"50px"}}>Product</span>
                        <button onClick={handleShow3} className={"buttonArrow"}><i className="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                    </div>
                    {show3?(
                            <div className={"genderShow"}>
                                <span style={{fontSize: "20px", marginLeft:"50px"}}>Bag</span>
                                <span style={{fontSize: "20px", marginLeft:"50px"}}>Sunglass</span>
                                <span style={{fontSize: "20px", marginLeft:"50px"}}>Sweather</span>
                            </div>
                        )
                        :null}
                </div>
                <div className={"shopProductsImages"}>
                    <div className={"ShopMenWomen"}>
                        <span style={{fontSize: "20px", marginLeft: "5px"}}><a href="#" id={"allPeople"}>ALL</a></span>
                        <span style={{fontSize: "20px", marginLeft: "5px"}}><a href="#"
                                                                               id={"allPeople"}>MEN's</a></span>
                        <span style={{fontSize: "20px", marginLeft: "5px"}}><a href="#"
                                                                               id={"allPeople"}>WOMEN's</a></span>
                        <div className={"ShopFeaturesSelect"}>
                            <select name="" id="selectFeature">
                                <option value="text">Featured</option>
                                <option value="text">A to Z</option>
                                <option value="text">Items</ option>
                            </select>
                        </div>
                    </div>
                    <div className={"PeopleProductImagesKubsRow1"}>
                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage1})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true" id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>

                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage2})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true"
                                                                    id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>
                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage3})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true"
                                                                    id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>
                    </div>
                    <div className={"PeopleProductImagesKubsRow2"}>
                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage4})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true" id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>

                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage5})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true"
                                                                    id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>
                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage6})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true"
                                                                    id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>
                    </div>
                    <div className={"PeopleProductImagesKubsRow3"}>
                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage7})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true" id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>

                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage8})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true"
                                                                    id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>
                        <div className={"PeopleProductImagesKubs"}>
                            <div className={"PeopleProductImages"} style={{backgroundImage: `url(${ShopImage9})`}}></div>
                            <div className={"PeopleProductImagesStars"}>
                                <span style={{fontSize: "20px"}}> Oupidatat non</span><br/>
                                <span style={{fontSize: "20px"}}> M/L/X/XL </span>
                                <span style={{fontSize: "20px"}}><i className="fa fa-star" aria-hidden="true"
                                                                    id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-half-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                                                <i className="fa fa-star-o" aria-hidden="true"
                                                                   id={"ShopStars"}></i>
                                </span>
                                <span style={{fontSize: "20px"}}> 250$ </span>
                            </div>
                        </div>
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
                              slidesToShow={4}
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

export default Shop;