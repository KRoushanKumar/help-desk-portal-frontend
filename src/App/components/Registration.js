import React from 'react'
import '../../Assets/css/style.css';
import signup from '../../Assets/images/signup-image.jpg'
import {
     FaUsers,FaUser,FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Axois from 'axios';
function registration() {

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
                                        <label mlFor="userName"><FaUser/></label>
                                        <input type="text"  id="userName" placeholder="userName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="firstName"><FaUsers/></label>
                                        <input type="text"  id="firstName" placeholder="first Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="lastName"><FaUsers/></label>
                                        <input type="text"  id="lastName" placeholder="last Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><MdEmail/></label>
                                        <input type="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password"><FaLock/></label>
                                        <input type="password"  id="password" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="re-pass"><FaUsers/></label>
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
                                <Link to="/login" class="signup-image-link">I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
            
        </>
    )
}

export default registration
