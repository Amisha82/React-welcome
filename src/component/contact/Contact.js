import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstname: "",
        lastname: "",
      },
    };
  }

  handlechange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };

  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstname: "",
        lastname: "",
      },
    });
  };
  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            thank you {this.state.formData.firstname},for submitting the form
          </p>
          <button onClick={this.resetForm}>Reset Form</button>
        </div>
      );
    }
    return (
      <div className="Coantact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              name="firstname"
              value={this.state.formData.firstname}
              onChange={this.handlechange}
            />
          </div>

          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              name="lastname"
              value={this.state.formData.lastname}
              onChange={this.handlechange}
            />
          </div>

          <button>Submit Form</button>
        </form>

        <div>
          {this.state.formData.firstname}
          <br />
          {this.state.formData.lastname}
        </div>
      </div>
    );
  }
}

export default Contact;
