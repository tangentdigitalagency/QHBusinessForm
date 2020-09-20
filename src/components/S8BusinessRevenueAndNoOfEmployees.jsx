import React, { Component } from "react";
import { Form,  Button,Input} from "antd";
import CommonComponents from "./CommonComponents"; 
import Axios from "axios";  

class S8BusinessRevenueAndNoOfEmployees extends Component {
  onFinish = (values) => { 
    this.props.setRevenue(values.Revenue);
    this.props.setNumberOfEmployees(values.Number_Of_Employees);
    console.log("Success:", values);
    this.PostDataOfBusinessInsurance(this.props.postData);
    
  };

  PostDataOfBusinessInsurance = (postData) => {
    console.log(postData);
    Axios.post("https://leads.quotehound.com/genericPostlead.php", null, {
      params: postData,
    })
      .then((res) => {  
        console.log(res.data);
        if(res.data==='Matched'){
          this.props.lastStep();
        }
        this.props.lastStep();
      })
      .catch((err) => {
        if (err) throw err;
      });
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
                Revenue: this.props.Revenue,
                Number_Of_Employees: this.props.Number_Of_Employees
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>One more thing...</h3>
              <br />
              <h5>What Is Your Annual Revenue Over The Next 12 Months</h5>
              <Form.Item
                name="Revenue"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Revenue ",
                  }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="Revenue"
                  type="number"
                />
              </Form.Item>
              <h5>Number Of Employees
              </h5>
              <Form.Item
                name="Number_Of_Employees"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Number Of Employees",
                  }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="Number Of Employees"
                  type="number"
                />
              </Form.Item>
              <Form.Item>
                <p
                  className="text-justify"
                  style={{ color: "#777777", fontSize: "12px" }}
                >
                  By clicking "Get My Quote" I provide my electronic signature
                  and express written consent to telemarketing calls, text
                  messages, emails, and postal mail from this Web site our
                  marketing and re-marketing network, and up to eight insurance
                  companies or their affiliates or representatives at the phone
                  number (including wireless number), email address, and postal
                  address provided by me. I consent to calls and text messages
                  transmitting insurance quotes, or seeking related additional
                  information from me, using an Automatic Telephone Dialing
                  System or prerecorded or artificial voices. I consent that my
                  signature is not a condition of purchasing any property,
                  goods, or services and that I may revoke my consent at any
                  time.
                </p>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                Get My Quote
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default S8BusinessRevenueAndNoOfEmployees;
