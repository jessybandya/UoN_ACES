import React, {useState,useEffect} from 'react'
import Header from "../grid/LoginNavbar";
import "./styles.css"
import {auth,db} from './../firebase';
import { useHistory, Link } from 'react-router-dom';
import FormSelect from './../forms/FormSelect';
import FormInput from './../forms/Forminput';
import { Grid, makeStyles } from "@material-ui/core";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Test() {
    const history = useHistory("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setMiddleName] = useState("");
    const [reg, setReg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [birthday, setBirthday] = useState([]);
    const [year, setYear] = useState("");
    const [cat, setCat] = useState("");
    const [others, setOthers] = useState("");
    const [member, setMember] = useState("");
    const [gender, setGender] = useState('');
    const [loading,setLoading] = useState(false)



    const register = (event) => {
        event.preventDefault();
        // if (birthday[2] >= 2010) {
        //     return alert("You are not eligible to register to Facebook!")
        // }
        let errors = {};


            if (!firstName.trim()) {
                errors.firstName = alert('First name is required');
              } else if (!/^[A-Za-z]+/.test(firstName.trim())) {
                  errors.firstName = alert('Enter a valid first name');
              }else if(!lastName.trim()){
                errors.lastName = alert('Last name is required');
            } else if (!/^[A-Za-z]+/.test(lastName.trim())) {
                errors.lastName = alert('Enter a valid last name');
            }else if(!username.trim()){
                errors.username = alert('Username is required');
            } else if (!/^[a-z0-9]+/.test(username.trim())) {
                errors.username = alert('Username should contain lower case letters with no space and some numbers(Optional)');
            }else if(!reg.trim()){
                errors.reg = alert('Registration number is required');
            }else if (!/^[F16]||[f16]+/.test(reg)) {
                errors.reg = alert("Your Registration number shows you don't belong to civil engineering department");
                 }else if(!birthday[0]){
                errors.birthday = alert('Birth day is required');
            }else if(!birthday[1]){
                errors.birthday = alert('Birth month is required');
            }
                else if(!birthday[2]){
                    errors.birthday = alert('Birth year is required');
            }else if(!year.trim()){
                errors.year = alert('Year of study is required');
            } else if (!/^[0-9]+/.test(year.trim())) {
                errors.year = alert('Enter a valid academic Year');
            
            }else if(!member.trim()){
                errors.member = alert('Membership field is required');
            } else if (!/^[A-Za-z]+/.test(member.trim())) {
                errors.member = alert('Enter a valid name');
            }else if(!cat.trim()){
                errors.cat = alert('Category is required');
            } else if (!/^[A-Za-z]+/.test(cat.trim())) {
                errors.cat = alert('Enter a valid category name');
            }else if(!gender.trim()){
                errors.gender = alert('Gender is required');
            } else if (!/^[A-Za-z]+/.test(gender.trim())) {
                errors.gender = alert('Enter a valid gender name');
            } else  if (!email) {
                errors.email = alert('Email required');
               }else if (!/\S+@[students]+\.[uonbi]+\.[ac]+\.[ke]+/.test(email)) {
                errors.email = alert('Student Email address is invalid\nFormat (...@students.uonbi.ac.ke)');
                 }
                  else if (!password) {
                 errors.password = alert('Password is required');
              } else if (password.length < 8) {
                 errors.password = alert('Password needs to be 8 characters or more');
              }  else if (!password1) {
                 errors.password1 = alert('Confirm Password is required');
               } else if (password1 !== password) {
                errors.password1 = alert('Passwords do not match');
              }else{

                db.collection('users').where("username", "==", username).get().then(
                    snap => {
                        if(snap.docs.length > 0){
                            alert("The username you entered is taken!")
                        }else{

                            db.collection('users').where("email", "==", email).get().then((resultSnapShot) => {
            
                                // resultSnapShot is an array of docs where "email" === "user_mail"
                        
                                if (resultSnapShot.size == 0) {
                                    //Proceed
                        
                                    auth
                                    .createUserWithEmailAndPassword(email, password)
                                    .then((auth) => {
                                        if (auth.user) {
                                            auth.user.updateProfile({
                                                displayName: username,
                                                photoURL: "www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg"
                                            }).then((s) => {
                                                db.collection('users').doc(auth.user.uid).set({
                                                    uid: auth.user.uid,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    username: username,
                                                    reg: reg,
                                                    email: auth.user.email,
                                                    photoURL: "www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg",
                                                    birthday,
                                                    year:year,
                                                    gender,
                                                    bio: "",
                                                    read: true,
                                                    category: cat,
                                                    others: others,
                                                    post: member,
                                                    timestamp: Date.now()
                                                })
                                                    .then((r) => {
                                                        alert("Succesfully created an account.")
                                                        history.push(`/`)
                                                    })
                                            })
                                        }
                                    })
                                    .catch((e) => {
                                        if (
                                            e.message ===
                                            alert(e.message)
                                        ) {
                                            alert("Please check your credentials again");
                                        } else if (
                                            e.message ===
                                            alert(e.message)
                                        ) {
                                            history.push("/register");
                                            window.scrollTo({
                                                top: document.body.scrollHeight,
                                                left: 0,
                                                behavior: "smooth",
                                            });
                                        }
                                    });
                        
                                } else {
                                    //Already registered
                                    alert("The email you enterd already in use")
                                }
                        
                            })
                        }
                    }
                )
                

                
                
              }


        
    };

    return (
        <>
        <Header />
        <div style={{marginTop:40}} class="container-fluid" id="grad1">
            <div  class="row justify-content-center mt-0">
                <div  class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div  class="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2><strong>Create UoN_ACES account</strong></h2>
                        <p>Fill all form field to go to next step</p>
                        <div  class="row">
                            <div  class="col-md-12 mx-0">
                                <form  id="msform">
                                    <ul id="progressbar">
                                        <li class="active" id="account"><strong>Step</strong></li>
                                        <li id="personal"><strong>Step</strong></li>
                                        <li id="payment"><strong>Step</strong></li>
                                        <li id="confirm"><strong>Step</strong></li>
                                    </ul> 
                                    <fieldset>
                                        <div  class="form-card" style={{border: "1px solid #3f51b5",borderRadius:10}}>
                                            <h2 class="fs-title">Account Information</h2> 
                                            <div class="d-flex flex-column" style={{marginBottom:0}}> 
                <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}} for="text">First Name</label> 
                <input  type="text" onChange={(e) => {
                                setFirstName(e.target.value);
                            }} name="name1" id="emailId" class="border-bottom border-primary" required/> 
                            </div>
                    <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}}  for="text">Last Name</label> <input  onChange={(e) => {
                                setLastName(e.target.value);
                            }} type="text" name="name2" id="pwd" class="border-bottom border-primary" required/> 
                            </div>
                    <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}}  for="text">Username</label> 
                    <input  type="text" onChange={(e) => {
                                setMiddleName(e.target.value)
                            }} name="name3"  id="pwd" class="border-bottom border-primary" required/> 
                            </div>
                                        </div> 
                                        <input type="button" name="next" style={{backgroundColor: "#3f51b5"}} class="next action-button"  value="Next Step" />
                                    </fieldset>
                                    <fieldset>
                                    <div  class="form-card" style={{border: "1px solid #3f51b5",borderRadius:10}}>
                                            <h2 class="fs-title">Personal Information</h2> 
                                            <div style={{display: "flex",color: "#3f51b5"}}>
                    <FormSelect style={{color: ""}}
                        
                        
             label="Year"
              
              options={[{
                value: "",
                name: ""
              },
              {
                value: "1",
                name: "1"
              }, {
                value: "2",
                name: "2"
              }, {
                value: "3",
                name: "3"
              }, {
                value: "4",
                name: "4"
              }, {
                value: "5",
                name: "5"
              }]} 
              required=""             onChange={(e) => setYear(e.target.value)} type="text" 
            />
                        <FormSelect
                        style={{color: ""}}
              label="Category"
              
              options={[{
                value: "",
                name: ""
              },
 {
                value: "Mentee",
                name: "Mentee"
              }]}              onChange={(e) => setCat(e.target.value)} type="text" 
            />
            <FormSelect
            style={{color: ""}}
              label="Membership"
              
              options={[{
                value: "",
                name: ""
              },
              {
                value: "Member",
                name: "Member"
              }
            ]}              onChange={(e) => setMember(e.target.value)} type="text" 
            />
                    </div>


                    <h5 style={{marginLeft: "0%",color: "#3f51b5"}} className="register__date">Date Of Birth</h5>
                    <div className="row1">
                        <select style={{color: "#3f51b5",fontSize:15,fontWeight:"900"}} className="register__date2"  onChange={(e) => setBirthday([...birthday, e.target.value])}>
                            <option value="Day" style={{marginLeft: "0%",color: "#3f51b5",fontSize:15,fontWeight:"500"}}>Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>

                        <select style={{color: "#3f51b5",fontSize:15,fontWeight:"900"}} className="register__date3" onChange={(e) => setBirthday([...birthday, e.target.value])}>
                            <option value="Day" style={{marginLeft: "0%",color: "#3f51b5",fontSize:15,fontWeight:"500"}}>Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>

                        <select style={{color: "#3f51b5",fontSize:15,fontWeight:"900"}} className="register__date3" onChange={(e) => setBirthday([...birthday, e.target.value])}>
                        
                        <option style={{marginLeft: "0%",color: "#3f51b5",fontSize:15,fontWeight:"500"}} value="year">Year</option>

                        <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                        </select>
                    </div>



                    <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}} for="text">Reg No.</label> <input  onChange={(e) => {
                                setReg(e.target.value)
                            }} type="text" name="email" id="emailId" class="border-bottom border-primary"/> </div>



                                        </div> 
                                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
                                        <input type="button" style={{backgroundColor: "#3f51b5"}} name="next" class="next action-button" value="Next Step" />
                                    </fieldset>
                                    <fieldset>
                                    <div  class="form-card" style={{border: "1px solid #3f51b5",borderRadius:10}}>
                                            <h2 class="fs-title">Personal Information</h2> 
                    <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}} for="email">School Email</label> <input  onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email" name="email" id="emailId" class="border-bottom border-primary"/> </div>
                    <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}} for="password"> Set Password</label> <input  type="password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} name="passwrd" id="pwd" class="border-bottom border-primary"/> </div>
                            <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600"}} for="password">Confirm Password</label> <input  type="password" onChange={(e) => {
                                setPassword1(e.target.value)
                            }} name="passwrd" id="pwd" class="border-bottom border-primary"/> </div>


                                        </div> 
                                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
                                        <input type="button" name="next" style={{backgroundColor: "#3f51b5"}} class="next action-button" value="Next Step" />
                                    </fieldset>
                                    <fieldset>
                                    <div  class="form-card" style={{border: "1px solid #3f51b5",borderRadius:10}}>
                                        <h2 class="fs-title">Personal Information</h2> 

                                            <div className="" style={{marginTop:50}}>
                    <h5 style={{background: "white",color:"#3f51b5",fontWeight: "600"}} >Gender</h5>
                  
                    <div  className="register__radiocontainer">
                        <div className="wrapper">
                            <label style={{marginLeft: "0%",color: "#3f51b5"}}>Female</label>
                            <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="Female" />
                        </div>

                        <div style={{marginLeft: "0%",color: "#3f51b5"}} className="wrapper">
                            <label style={{marginLeft: "0%",color: "#3f51b5"}}>Male</label>
                            <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="Male" />
                        </div>
                        

                    </div>
                    </div>

                    <div class="d-flex jusity-content-end pb-4">
                    <div class="d-flex flex-column pb-3"> <label style={{background: "white",color:"#3f51b5",fontWeight: "600",marginTop:10}} for="password">Other Profession(s)</label> <input  type="text" onChange={(e) => {
                                setOthers(e.target.value)
                            }} name="passwrd" id="pwd" class="border-bottom border-primary"/> </div>
                            
                        {/* <div class="ml-auto"> <a href="#" class="text-danger text-decoration-none">Forgot password?</a> </div> */}
                    </div>

                                        </div> 
                                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
                                        <input type="button" name="make_payment" style={{backgroundColor: "#3f51b5"}} class="next action-button" onClick={register} value="Submit" />
                                    </fieldset>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Test
