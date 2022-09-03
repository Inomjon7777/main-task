import Form from "../components/common/form";
import * as yup from "yup";

export class Owner extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      yourRole: "",
    },
    errors: {},
  };

  schema = yup.object({
    firstName: yup.string().required().label("First Name"),
    lastName: yup.string().required().label("Last Name"),
    email: yup.string().email().required().label("Email"),
    yourRole: yup.string().min(6).required().label("Your Role"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("email", "Email")}
          <select name="" id="">
            <option value="uzb">Uzbeksitan</option>
            <option value="rus">Russian</option>
            <option value="usa">United</option>
          </select>
          {this.renderInput("yourRole", "Your Role")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}
