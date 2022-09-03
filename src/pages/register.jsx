import { Component } from "react";
import { toast } from "react-toastify";
class Register extends Component {
  state = {
    disabled: false,
    data: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  };

  // handleSubmit funksiya'si Login button bosilganda toastify'ni chiqarib beradi
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
    const { email, password } = this.state;
    setTimeout(() => {
      toast.success(`Login, user ${email} password ${password}`);
      this.setState({ disabled: false });
    }, 2000);
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <h1 className="text-center">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              className="form-control"
              type="text"
              id="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="email">Email</label>
            <input
              ref={this.email}
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="password">Password</label>
            <input
              ref={this.password}
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              ref={this.password}
              className="form-control"
              type="password"
              id="confirmPassword"
              placeholder="Enter Confirm Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <button className="btn btn-primary" disabled={disabled}>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Register;
