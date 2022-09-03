import Form from "../components/common/form";
import * as yup from "yup";

export class bankAnAccount extends Form {
  state = {
    data: {
      beneficiary: "",
      iban: "",
      swiftCode: "",
      swift: "",
      bankCurrency: "",
    },
    errors: {},
  };

  schema = yup.object({
    beneficiary: yup.string().required().label("Username"),
    iban: yup.string().email().required().label("Email"),
    swiftCode: yup.string().min(6).required().label("Swift Code"),
    swift: yup.string().min(6).required().label("Swift"),
    bankCurrency: yup.string().min(6).required().label("Bank currency"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("beneficiary", "Beneficiary")}
          {this.renderInput("iban", "IBAN")}
          {this.renderInput(
            "swiftCode",
            "Enter your SWIFT code, and other data will be load:"
          )}
          {this.renderInput("swift", "")}
          {this.renderInput("bankCurrency", "Bank currency")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}
