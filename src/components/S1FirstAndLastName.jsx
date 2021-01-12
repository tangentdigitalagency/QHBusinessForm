import React, { Component } from "react";
import {Form, Button, Input} from "antd";
import CommonComponents from "./CommonComponents"; 

class S1FirstAndLastName extends Component {
  onFinish = (values) => {
    this.props.nextStep();
    this.props.setFirstName(values.first_name);
    this.props.setLastName(values.last_name);
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop:"0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                first_name: this.props.first_name,
                last_name: this.props.last_name
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> Start Saving. Lets Start With your Name</h3>
              <br />
              <h5>First Name</h5>
              <Form.Item
                name="first_name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your First Name",
                  },
                  {
                      max:100, message:'Max Length Of First Name Is 100 Characters'
                  }
                ]}
              >
                <Input  
                  
                  size="large"
                  placeholder="First Name"
                />
              </Form.Item>
              <h5>Last Name</h5>
              <Form.Item
                name="last_name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Last Name",
                  },
                  {
                    max:100, message:'Max Length Of Last Name Is 100 Characters'
                }
                ]}
              >
                <Input 
                   
                  size="large"
                  placeholder="Last Name"
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

export default S1FirstAndLastName;
