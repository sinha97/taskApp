import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    // on form submit...
    const handleFormSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("userName", JSON.stringify(name));
        localStorage.setItem("userEmail", JSON.stringify(email));
        localStorage.setItem("userPassword", JSON.stringify(password));
      
        history.push('/signin');
    };


    return (
        <div className="formbody">
            <div className="formContainer">
                <form onSubmit={handleFormSubmit} >
                    <h3 className="registerPage">SignUp</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} required/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} required/>
                    </div>


                    <button type="submit" className="btn btn-dark btn-lg btn-block">SignUp</button>
                    <p className=" text-right">
                        Already Account? <Link to='/signin'>SignIn</Link>
                    </p>

                </form>
            </div> 
        </div>
    )
}

export default Register;
