import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import soldier_draft from '../../assets/soldier_draft.png'


const Landing = () => {
    return (
        <div>
            <div id={'login-section'} className={'section'}>
            
            <div className='top-box'> 
            <form className='top-form'>
                <div class="mb-3">               

                
                    <h1>LOGIN</h1>               
                                                            
                    <label for="exampleInputEmail1" class="form-label" >Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ENTER YOUR EMAIL'/>
                    <div></div> 
                    <label for="exampleInputPassword1" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="ENTER YOUR PASSWORD"/></div>     
                    
                    <button type="submit" class="btn btn-outline-dark">Submit</button> 

                    <button type="submit" class="btn btn-outline-dark" id='button2' >Forgot Password</button>                  
                     
                    <button type="submit" class="btn btn-outline-dark" id='button3'>New User</button>                      

                    <img className='top-picture' src={soldier_draft} />                 
                    
             </form>  
            
             </div>               
                </div>


             {/* <div id={'about-section'} className={'section'}>

            </div>


            <div id={'contact-section'} className={'section'}>

            </div>  */}
        </div>
    )
};

export default Landing;