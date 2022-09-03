import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";
import { object, string } from "yup";

class Login extends Component {
  schema = object({
    email: string().email().required().label("Email"),
    password: string().min(6).required().label("Password"),
  });

  state = {
    disabled: false,
    user: {
      email: "ars@domain.com",
      password: "",
    },
    errors: {},
  };

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const errors = this.validate();

    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { email, password } = this.state.user;
    setTimeout(() => {
      toast.success(`Login, user ${email} password ${password}`);
      this.setState({ disabled: false });
    }, 2000);
  };

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

  handleChange = (e) => {
    const { value, name } = e.target;

    const errors = this.validateField(value, name);

    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value }, errors });
  };

  render() {
    const { disabled, user, errors } = this.state;

    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='email'
            label='Email'
            placeholder='Enter your email'
            type='email'
            value={user.email}
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name='password'
            label='Password'
            placeholder='Enter your password'
            type='password'
            value={user.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className='btn btn-primary' disabled={disabled}>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
