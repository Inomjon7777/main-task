import Form from "../../components/common/form";
import * as yup from "yup";
import { register } from "../../services";
import { toast } from "react-toastify";

import cls from "./register.module.scss";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = yup.object({
    name: yup.string().required().label("Username"),
    email: yup.string().email().required().label("Email"),
    password: yup.string().min(6).required().label("Password"),
  });

  doSubmit = async () => {
    try {
      await register(this.state.data);
      toast.success(" Your profile is registered 👍🏻");
      this.props.history.replace("/login");
    } catch (err) {}
  };

  render() {
    return (
      <div className={cls.background}>
        <div className={cls.container}>
          <div className={cls.registerLa}>
            <h1>Register Form</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Username")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
