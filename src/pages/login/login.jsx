import Form from "../../components/common/form";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { login } from "../../services";

import cls from "./login.module.scss";
import { Link } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = object({
    email: string().email().required().label("Email"),
    password: string().min(6).required().label("Password"),
  });

  doSubmit = async () => {
    try {
      const { data: jwt } = await login(this.state.data);
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, jwt);

      toast.success(`Success logged in`);
      this.props.onLogin();
    } catch (err) {}
  };

  render() {
    return (
      <div className={cls.background}>
        <div className={cls.container}>
          <div className={cls.loginLayout}>
            <i class="fa-solid fa-arrow-left"></i>
            <h1 className="text-center">Login</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
              <p>
                Don't have an account? <Link to={"/register"}>Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
