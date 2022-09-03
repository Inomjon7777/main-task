// MODULES.
import { Component } from "react";
import { toast } from "react-toastify";
import { object, string } from "yup";

// COMPONENTS.
import Input from "../components/common/input";

// Register class componentasi registratsiya page'ini yaratish uchun tuzildi.
class Register extends Component {
  state = {
    disabled: false,

    user: {
      username: "Inomjon",
      email: "ars@domain.com",
      password: "",
      confirmPassword: "",
    },

    errors: {},
  };

  // schema object'i form validatsiyani tekshiradi.
  schema = object({
    // username: string().emil().required().label("Username"),
    email: string().email().required().label("Email"),
    password: string().min(6).required().label("Password"),
    // confirmPassword: string().min(6).required().label("Confirm Password"),
  });

  // validate funksiyasi validatsiyani errorlarini console'da ko'rsatadi
  validate = () => {
    const errors = {};

    try {
      this.schema.validateSync(this.state.user, { abortEarly: false });
    } catch ({ inner }) {
      for (let { path, message } of inner) errors[path] = message;
      console.log("errors = ", errors);
    }

    return Object.values(errors).length ? errors : false;
  };

  // handleSubmit funksiyasi sayt refresh bo'lishini, toastify'ga "Exist error" yoki user ma'lumotlarini chiqaradi.
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ disabled: true });

    const errors = this.validate();

    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { username, email, password, confirmPassword } = this.state.user;

    setTimeout(() => {
      toast.success(
        `
        Username ${username},
        Email ${email}, 
        Password ${password},
        Confirm Password ${confirmPassword}
        `
      );

      this.setState({ disabled: false });
    }, 2000);
  };

  // validateField funksiyasi
  validateField = (value, name) => {
    const errors = { ...this.state.errors };

    try {
      this.schema
        .pick([name])
        .validateSync({ [name]: value }, { abortEarly: false });
      delete errors[name];
    } catch ({ inner }) {
      for (let { path, message } of inner) errors[path] = message;
      console.log("errors = ", errors);
    }

    return Object.values(errors).length ? errors : false;
  };

  // handleChange funksiyasi
  handleChange = (e) => {
    const { value, name } = e.target;

    const errors = this.validateField(value, name);

    const { user } = this.state;

    this.setState({ user: { ...user, [name]: value }, errors });
  };

  render() {
    const { disabled, user, errors } = this.state;

    return (
      <div className="register">
        <h1>Login Form</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            placeholder="Enter your username"
            type="text"
            value={user.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            onChange={this.handleChange}
            error={errors.email}
          />

          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <Input
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your confirm password"
            type="password"
            value={user.confirmPassword}
            onChange={this.handleChange}
            error={errors.confirmPassword}
          />

          <button className="btn btn-primary" disabled={disabled}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
