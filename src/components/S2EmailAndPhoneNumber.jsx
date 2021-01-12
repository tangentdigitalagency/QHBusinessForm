import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import CommonComponents from "./CommonComponents";

class S2EmailAndPhoneNumber extends Component {
  formRef = React.createRef();
  state = {};

  onFinish = (values) => {
    
    this.simplePhone(values.phone_home);
    this.props.setBusinessEmail(values.email_address);
    console.log("Success:", values);
    this.props.nextStep();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  simplePhone = (value) => {
    const reg = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
    value = value.replace(reg, "$1$2$3")
    if (reg.test(value)) {
      this.props.setBusinessPhone(value);
      console.log(value);
    };

  }


  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="d-flex" style={{ minHeight: "50vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
          >
            <Form
              name="basic"
              ref={this.formRef}
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                phone_home: this.props.phone_home,
                email_address: this.props.email_address
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Personal Info</h3>
              <br />
              <h5>Phone Number</h5>
              <Form.Item
                name="phone_home"
                hasFeedback
                rules={
                  [
                    { required: true, message: "Please Enter Phone Number " },
                    { max: 14, message: "Please Enter Valid Phone Number " },
                    { pattern: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/, message: "Please Enter Valid Phone Number " },
                  ]
                }
              >
                <Input
                  onChange={(e) => {
                    let value = e.target.value;
                    const reg = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
                    value = value.replace(reg, "($1) $2-$3")
                    if (reg.test(value)) {
                      this.formRef.current.setFieldsValue({
                        phone_home: value,
                      });
                      console.log(value);
                    }
                  }}
                  defaultValue={this.props.Primary_Phone}
                  type="text"
                  maxLength='14'
                  size="large"
                  placeholder="1234567890"
                />
              </Form.Item>
              <h5>Email</h5>
              <Form.Item
                value={this.props.Email}
                name="email_address"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Email Address!",
                  },
                  {
                    type: "email",
                    message: "Email Is Not Correct",
                  },
                ]}
              >
                <Input
                  defaultValue={this.props.Email}
                  size="large"
                  placeholder="abc@email.com"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Next
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default S2EmailAndPhoneNumber;
