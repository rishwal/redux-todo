import React from 'react';
import './Signup.css'
import Button from 'react-bootstrap/Button';


const SignUp = () => {
    return (
        <main id='body'>
            <div className="container">
                <div className="form-container">
                    <div className="select-container">
                        <Button className="button">SignIn</Button>
                        <Button className="button">Signup</Button>
                    </div>
                    <form action="">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" name="" id="" />
                        <Button className="button">Signup</Button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default SignUp;
