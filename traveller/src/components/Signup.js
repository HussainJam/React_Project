import React from "react";
import { Button } from "reactstrap";
const Signup =()=>
{
    return(
        
        <div className="cover-page"  id = "sign-body">
        <div className="wrapped-page ">
            <div className="col col-md-5 offset-4">
                <form className="m-3">
                    <div className="col ">
                       <h1 className="mx-5">Pakistan Tourism</h1>
                        <h3 className="col-9 mb-5 text-center">Sign Up</h3>
                        <div className="form-group">
                            <input type="text" placeholder="*Full Name" id="place" className="col-9 rounded mb-4 " required />
                            <input type="Password" placeholder="*Create Password" id="place" className="col-9 rounded mb-4" required />
                            <input type="email" placeholder="*Email Address" id="place" className="col-9 rounded mb-4" required />
                            <input type="tel" placeholder="*Phone Number" id="place" className=" col-9 rounded mb-4" required />
                            <input type="submit" className="btn-primary col-9 rounded mb-4 " id="place" value="CREATE ACCOUNT" />
                        </div>
                        <div className="col-11 small">
                            <input type="checkbox" className=" form-check-input"/>
                            <label className="">By Creating an account, you agree to our <a href=""><strong>Terms of Use</strong></a> and our <br /><a href=""><strong>Privacy Policy.</strong></a></label>
                            <p className="mt-3 ">Already have an account? <a href="./Login"><strong>Sign in</strong></a></p>
                        </div>
                </div>
                </form>
            </div>          
        </div>
    </div>
 
        
    )
}
export default Signup;