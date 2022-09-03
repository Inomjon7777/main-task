import Form from "./../components/common/form";
import * as yup from "yup";

export class Details extends Form {
  state = {
    data: {
      brandName: "",
      website: "",
      category: "",
      brandColor: "",
    },
    errors: {},
  };

  schema = yup.object({
    brandName: yup.string().required().label("Brand name (in English)"),
    website: yup.string().email().required().label("Website (URL)"),
    category: yup.string().min(6).required().label("Category"),
    brandColor: yup.string().min(6).required().label("Brand color (HEX model)"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("brandName", "Brand name (in English)")}
          {this.renderInput("website", "Website (URL)")}
          {this.renderInput("category", "Category")}
          {this.renderInput("brandColor", "Brand color (HEX model)")}

          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}
