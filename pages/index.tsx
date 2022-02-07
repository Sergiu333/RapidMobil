import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
import React from "react";


export default function Index(props) {

    return (
        <div style={{background: '#272727'}}>
            <div className="container">

                <div className="title">
                    <b><p>Rapid si Calitativ</p></b>


                </div>

                <style jsx>
                    {`
                  .container {
                    max-width: 1180px;
                    margin: 0px auto;
                    padding: 30px 0px;
                    margin-bottom: 600px;
                    


                  }
                  .columns {
                    float: left;
                    width: 33.3%;
                    padding: 8px;
                    margin-top: 30px;
                  }

                  .price {
                    list-style-type: none;
                    border: 1px solid #eee;
                    margin: 0;
                    padding: 0;
                    -webkit-transition: 0.3s;
                    transition: 0.3s;
                  }

                  .price:hover {
                    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
                  }

                  .price .header {
                    background-color: #d10000;
                    color: white;
                    font-size: 25px;
                  }

                  .price li {
                    border-bottom: 1px solid #eee;
                    padding: 20px;
                    text-align: center;
                  }

                  .price .grey {
                    background-color: #eee;
                    font-size: 20px;
                  }

                  .button {
                    background-color:  #f50000;
                    border: none;
                    color: white;
                    padding: 10px 25px;
                    text-align: center;
                    text-decoration: none;
                    font-size: 18px;
                  }

                  @media only screen and (max-width: 600px) {
                    .columns {
                      width: 100%;
                    }
                  }
                  .slider{
                    margin-top: 50px;
                  }
                  .title {
                    background: #d10000;
                    height: 55px;
                    text-align: center;
                    font-size: 25px;
                    color: white;
                    margin-top: 100px;
                  }
                `}
                </style>

                <div className="slider">
                    <Carousel>
                        <div>
                            <img src="/Home/1.png" style={{
                                width:'100%'
                            }}/>
                        </div>
                        <div>
                            <img src="/Home/2.png"  style={{
                                width:'100%'
                            }}/>
                        </div>
                        <div>
                            <img src="/Home/3.png" style={{
                                width:'100%'
                            }}/>
                        </div>
                        <div>
                            <img src="/Home/4.png" style={{
                                width:'100%'
                            }}/>
                        </div>
                    </Carousel>
                </div>


                <Link href="Bedrooms">
                    <div className="columns">
                        <ul className="price">
                            <li className="header">Dormitoare</li>
                            <Image src="/Home/dormitor.png" width="400px" height="260px"/>
                        </ul>
                    </div>
                </Link><Link href="Kitchens">
                <div className="columns">
                    <ul className="price">
                        <li className="header">Bucatarii</li>
                        <Image src="/Home/bucatarie.png" width="400px" height="260px"/>
                    </ul>
                </div>
            </Link><Link href="Livings_Halls">
                <div className="columns">
                    <ul className="price">
                        <li className="header"> Livinguri & Antreuri </li>
                        <Image src="/Home/antreuri_living.png" width="400px" height="260px"/>
                    </ul>
                </div>
            </Link><Link href="Wardrobes">
                <div className="columns">
                    <ul className="price">
                        <li className="header">Dulapuri</li>
                        <Image src="/Home/dulap.png" width="400px" height="260px"/>
                    </ul>
                </div>
            </Link>



                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>


    )
}

