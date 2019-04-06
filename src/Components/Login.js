import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    }
    handleOnchange = event => this.setState({ [event.target.name]: event.target.value });

    handleLogin = () => {
        const { email, password } = this.state;
        if (this.isFormValid(this.state)) {
            this.props.usersData.filter((val) => {
                if (val.email === email && val.password === password) {
                    this.props.history.push("/dashboard");
                    localStorage.setItem("usersdata", JSON.stringify(val));
                    window.location.reload();
                }
                else {
                    this.setState({ error: "Please enter valid email or password" });
                }
            })
        }
    }
    isFormValid = ({ email, password }) => {
        if (!email.length || !password.length) {
            this.setState({ error: "Please enter email and password" })
        }
        else {
            return true
        }
    }
    render() {
        const { email, password, error } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="box">
                            <h3>Login</h3>
                            <div className="input-box">
                                <input type="email"
                                    onChange={this.handleOnchange}
                                    name="email"
                                    value={email}
                                    required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input type="password"
                                    name="password"
                                    onChange={this.handleOnchange}
                                    value={password}
                                    required />
                                <label>Password</label>
                            </div>
                            <p className="text-center text-danger">{error}</p>
                            <div>
                                <button
                                    className="btn btn-outline-primary btn-block"
                                    value="Submit"
                                    onClick={this.handleLogin} >Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    usersData: state.usersData
})

export default connect(mapStateToProps)(Login);
