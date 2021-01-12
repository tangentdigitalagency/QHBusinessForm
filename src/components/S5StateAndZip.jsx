import React, { Component } from "react";
import { Form, Button, Input,Select } from "antd";
import CommonComponents from "./CommonComponents";
const {Option} = Select;

class S5StateAndZip extends Component {
  onFinish = (values) => {
    this.props.nextStep();
    this.props.setBusinessState(values.state);
    this.props.setBusinessZip(values.zip_code);
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
            style={{ paddingTop: "0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                state: this.props.state,
                zip_code: this.props.zip_code
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Where’s your business located?</h3>
              <br />
              <h5>State</h5>
              <Form.Item
                name="state"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your State Name",
                  },
                  {
                    max: 2, message: 'Max Length Of State Name Is 2 Characters'
                  }
                ]}
              >
                <Select size="large" name="state" >
                  <Option disabled="" selected="" value=""> -- select a state -- </Option>
                  <Option value="AL">AL</Option>
                  <Option value="AK">AK</Option>
                  <Option value="AR">AR</Option>
                  <Option value="AZ">AZ</Option>
                  <Option value="CA">CA</Option>
                  <Option value="CO">CO</Option>
                  <Option value="CT">CT</Option>
                  <Option value="DC">DC</Option>
                  <Option value="DE">DE</Option>
                  <Option value="FL">FL</Option>
                  <Option value="GA">GA</Option>
                  <Option value="HI">HI</Option>
                  <Option value="IA">IA</Option>
                  <Option value="ID">ID</Option>
                  <Option value="IL">IL</Option>
                  <Option value="IN">IN</Option>
                  <Option value="KS">KS</Option>
                  <Option value="KY">KY</Option>
                  <Option value="LA">LA</Option>
                  <Option value="MA">MA</Option>
                  <Option value="MD">MD</Option>
                  <Option value="ME">ME</Option>
                  <Option value="MI">MI</Option>
                  <Option value="MN">MN</Option>
                  <Option value="MO">MO</Option>
                  <Option value="MS">MS</Option>
                  <Option value="MT">MT</Option>
                  <Option value="NC">NC</Option>
                  <Option value="NE">NE</Option>
                  <Option value="NH">NH</Option>
                  <Option value="NJ">NJ</Option>
                  <Option value="NM">NM</Option>
                  <Option value="NV">NV</Option>
                  <Option value="NY">NY</Option>
                  <Option value="ND">ND</Option>
                  <Option value="OH">OH</Option>
                  <Option value="OK">OK</Option>
                  <Option value="OR">OR</Option>
                  <Option value="PA">PA</Option>
                  <Option value="RI">RI</Option>
                  <Option value="SC">SC</Option>
                  <Option value="SD">SD</Option>
                  <Option value="TN">TN</Option>
                  <Option value="TX">TX</Option>
                  <Option value="UT">UT</Option>
                  <Option value="VT">VT</Option>
                  <Option value="VA">VA</Option>
                  <Option value="WA">WA</Option>
                  <Option value="WI">WI</Option>
                  <Option value="WV">WV</Option>
                  <Option value="WY">WY</Option>
                </Select>
              </Form.Item>
              <h5>Zip
              </h5>
              <Form.Item
                name="zip_code"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your zip code",
                  },
                  {
                    max: 5, message: 'Max Length Of zip code Is 5 Characters'
                  },
                  
                ]}
              >
                <Input
                  size="large"
                  placeholder="Zip code"
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

export default S5StateAndZip;
