import React from "react";
import { Button } from "reactstrap";
const Login =()=>
{
    return(
        <div>
        <div className="cover-page"  id = "sign-body">
        <div className="wrapped-page ">
            <div className="col col-md-5 offset-4">
                <form className="m-3">
                    <div className="col ">
                       <h1 className="mx-5">Pakistan Tourism</h1>
                        <h3 className="col-9 mb-5 text-center">Login</h3>
                        <div className="form-group">
                            <input type="text" placeholder="*Full Name" id="place" className="col-9 rounded mb-4 " required />
                            <input type="Password" placeholder="*Password" id="place" className="col-9 rounded mb-4" required />
                            <input type="submit" className="btn-primary col-9 rounded mb-4 " id="place" value="Log In" />
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
        

        {//     <div className="container"  id="login" >
        //     <div className="row" >
        //         <div className="col-md-4 offset-4 mt-5" >
        //             <form className="form bg-info rounded-3 mt-5" >
        //                 <div className="form-group d-grid col-9 py-3 mx-auto">
        //                     <h3 className="head">Please Login</h3>
        //                     <input type="text" className="mail mb-2 form-control-lg text-muted" placeholder="Email Address" />
        //                     <input type="password" className="pass mb-2 form-control-lg text-muted" placeholder="Password" />
        //                     <div className="form-check">
        //                     <input type="checkbox" className="form-check-input" id="cb" />
        //                     <label for="cb" className="form-check-label">Remember Me</label>
        //                     </div>
        //                 <Button outline color="warning" size="lg" block href="#login">Log In </Button>
        //                 </div>    
        //             </form>
        //         </div>
        //     </div>
        // </div>
    }
        </div>
    )
}
export default Login;