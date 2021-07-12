import React from "react";
import { Button } from "reactstrap";
const Signup =()=>
{
    return(
        
        <div className="container">
        <div className="row ">
            <div className="col col-md-6">
                <form className="m-3">
                    <div className="col ">
                    <img src="/iba.png" alt=""  className="col-6 offset-1 mb-4" />
                    <p className="col-9 offset-1 mb-5">Please provide the below details to get started</p>
                     </div>
                    <div className="form-group">
                    <input type="text" placeholder="*Full Name" id="place" className="col-9 rounded mb-4 " required />
                    
                    <input type="email" placeholder="*Email Address" id="place" className="col-9 rounded mb-4" required />
                    <input type="tel" placeholder="*Phone Number" id="place" className=" col-9 rounded mb-4" required />
                    <input type="text" placeholder="*Company Name" id="place" className="col-9 rounded mb-4" required />
                    <input type="submit" className="btn-primary col-9 rounded mb-4 " id="place" value="CREATE ACCOUNT" />
                </div>
                    <div className="col-11 small">
                    <input type="checkbox" className=" form-check-input"/>
                    <label className="">By Creating an account, you agree to our <a href=""><strong>Terms of Use</strong></a> and our <br /><a href=""><strong>Privacy Policy.</strong></a></label>
                    <p className="mt-4 text-center">Already have an account? <a href=""><strong>Sign in</strong></a></p>
                    </div>

                    <div className="slider-area">
                        <div id="carousel" className="carousel slide" >
                            <ul className="carousel-indicators">
                              <li type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                              <li type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></li>
                              <li type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></li> 
                            </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center p-4 mb-3">
                                <h6>Learn something about Everything, But Everything about<br/> something.</h6>
                            </div>

                            <div className="carousel-item text-center p-4 mb-3">
                                <h6>Learn something about Everything, But Everything about<br/> something.</h6>
                            </div>

                            <div className="carousel-item  text-center p-4 mb-3">
                                <h6>Learn something about Everything, But Everything about<br/> something.</h6>
                            </div>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel"  data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                
                              </button> 
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel"  data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                
                              </button>
                                
                        </div>
                    </div>
                </div>

                </form>
            </div>

            <div className="col col-md-6">
                <img src="./task6.png" alt="pic" width="590px" />
            </div>

            
        </div>
    </div>
 
        
    )
}
export default Signup;