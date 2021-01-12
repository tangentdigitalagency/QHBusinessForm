import React, { Component } from "react";
import { Form,  Button,Input} from "antd";
import CommonComponents from "./CommonComponents"; 

class S7BusinessProfessionAndYears extends Component {
  onFinish = (values) => {
    this.props.nextStep();
    this.props.setBusinessProfession(values.business_profession);
    this.props.setyear_business_founded(values.year_business_founded);
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
                business_profession: this.props.business_profession,
                year_business_founded: this.props.year_business_founded
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>One more thing...</h3>
              <br />
              <h5>What Is Your Business Profession?
</h5>
              <Form.Item
                name="business_profession"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Business Profession",
                  },
                  {
                      max:100, message:'Max Length Of Business Profession Is 100 Characters'
                  }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="Business Profession"
                />
              </Form.Item>
              <h5>
              What Year Was Your Business Founded?
              </h5>
              <Form.Item
                name="year_business_founded"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Year",
                  },
                  {
                    max:4, message:'Max Length Of year Is 4 Characters'
                }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="2019"
                  type="number"
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

export default S7BusinessProfessionAndYears;
