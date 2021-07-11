import React from "react";

const Login =()=>
{
    return(
        <div>
            
            <div className="container"  >
            <div className="row" >
                <div className="col-md-4 offset-4" >
                    <form className="form bg-info rounded-3 mt-5" >
                        <div className="form-group d-grid gap-1 col-9 py-3 mx-auto">
                            <h3 className="head">Please Login</h3>
                            <input type="text" className="mail mb-2 form-control-lg text-muted" placeholder="Email Address" />
                            <input type="password" className="pass mb-2 form-control-lg text-muted" placeholder="Password" />
                            <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="cb" />
                            <label for="cb" className="form-check-label">Remember Me</label>
                            </div>
                            <input type="button" className="btn-info mt-2 mb-3 text-white"  name="btn" value="Login" />
                        </div>    
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login;