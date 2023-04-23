import React from 'react'
import '../assets/css/style.css';
import signup from '../assets/images/signup-image.jpg'
import signin from '../assets/images/signin-image.jpg'
import b from '../assets/bootstrap-icons-1.10.4/facebook.svg'
import userIcon from '../assets/bootstrap-icons-1.10.4/person.svg'
import { Link } from 'react-router-dom';
import Axois from 'axios';
function body() {

    function input()
    {
        console.log('registation ');
        var userName = document.getElementById("userName").value;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        //var id=1;
        console.log(userName+" "+firstName+" "+lastName+" "+email+" "+password);

        //Axois.post('http://localhost:8080/api/show')


        Axois.post('http://localhost:8080/api/registration',{userName:userName,password:password,firstName:firstName,lastName:lastName,email:email})
        .then(()=>{
            alert('registation successful')
        }).catch((error) => { console.log(error) });

    }

    return (
        <>
            <div class="main">

               {/* Sing up  Form  */}
                <div class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <div  class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label mlFor="userName"><img src={userIcon} alt="Bootstrap" width="15" height="15"></img></label>
                                        <input type="text"  id="userName" placeholder="userName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="firstName"><img src={userIcon} alt="Bootstrap" width="15" height="15"></img></label>
                                        <input type="text"  id="firstName" placeholder="first Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="lastName"><img src={userIcon} alt="Bootstrap" width="15" height="15"></img></label>
                                        <input type="text"  id="lastName" placeholder="last Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><img src={userIcon} alt="Bootstrap" width="15" height="15"></img></label>
                                        <input type="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password"><img src={userIcon} alt="Bootstrap" width="15" height="15"></img></label>
                                        <input type="password"  id="password" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="re-pass"><img src={userIcon} alt="Bootstrap" width="15" height="15"></img></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" class="term-service">Terms of service</Link></label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit"  id="signup" className="form-submit" value="submit" onClick={()=>(input())} />
                                    </div>
                                </div>
                            </div>
                            <div class="signup-image">
                                <figure><img src={signup} alt="sing up"></img></figure>
                                <Link to="#" class="signup-image-link">I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sing in  Form  */}
                <div class="sign-in">
                    <div class="container">
                        <div class="signin-content">
                            <div class="signin-image">
                                <figure><img src={signin} alt="sing up "></img></figure>
                                <Link to="#" class="signup-image-link">Create an account</Link>
                            </div>

                            <div class="signin-form">
                                <h2 class="form-title">Sign up</h2>
                                <div  class="register-form" id="login-form">
                                    <div class="form-group">
                                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                                    </div>
                                </div>
                                <div class="social-login">
                                    <span class="social-label">Or login with</span>
                                    <ul class="socials">
                                        <li><Link  to="/facebook"><img src={b} alt="Bootstrap" width="32" height="32"></img> </Link></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default body
