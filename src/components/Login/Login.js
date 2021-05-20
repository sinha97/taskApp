import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const history = useHistory();


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('userPassword').replace(/"/g, "");
        let mail = localStorage.getItem('userEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if ((passwordlog !== pass) || (emaillog !== mail)) {
            alert('please enter correct crendentials');
        } else {
            history.push('/home');
        }
    }
    return (
        <div className="loginbody">
            <div className="loginContainer">
                <form onSubmit={handleLogin}>
                    <h3 className="loginPage">SignIn</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} required />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                        <p className='my-1'>
                        Don't have an account? <Link to='/signup'>Sign Up</Link>
                    </p>
                </form> 
               
            </div>
        </div>
    )
};

export default Login;
