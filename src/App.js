import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Logo from "./Assets/logo.png";
import { Button, Typography } from "antd";
import S1FirstAndLastName from "./components/S1FirstAndLastName";
import S2EmailAndPhoneNumber from "./components/S2EmailAndPhoneNumber";
import S3BusinessNameAndWebsite from './components/S3BusinessNameAndWebsite';
import StepWizard from "react-step-wizard";
import { PhoneOutlined } from "@ant-design/icons"
import S4AddressAndCity from "./components/S4AddressAndCity";
import S5StateAndZip from "./components/S5StateAndZip";
import S6BusinessTypeAndEIN from "./components/S6BusinessTypeAndEIN";
import S7BusinessProfessionAndYears from "./components/S7BusinessProfessionAndYears";
import S8BusinessRevenueAndNoOfEmployees from "./components/S8BusinessRevenueAndNoOfEmployees";
import S9Final from "./components/S9Final.jsx";
class App extends Component {
  state = {
    postData: {
      //extra entries
      Key: "rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
      TYPE: "38",
      Sub_ID: "12",
      Pub_ID: "13",
      TCPA_Consent: "Yes",
      TCPA_Language: "By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.",
      Trusted_Form_URL: "",
      LeadiD_Token: "",
      Redirect_URL: "",
      SRC: "Internal_Business_Insurance",
      Landing_Page: "quotehound.com",
      IP_Address: "",
      //s1 form fields
      First_Name: 'as',
      Last_Name: 'as',
      //S2 form fields
      Business_Phone: '',
      Business_Email: 'test@gmail.com',
      //s3 form fields
      Business_Name: 'test',
      Business_Website: 'test.com',
      //s4 form fields
      Business_Address: 'ldsakjf',
      Business_City: 'asdf',
      //s5 form fields
      Business_State: 'AK',
      Business_Zip: '60610',
      //s6 form fields
      Business_Type: '',
      EIN: '',
      EIN_Number: '',
      //s7 form fields
      Business_Profession: 'asd',
      Founded: '2012',
      // s8 form fields
      Revenue: '12121',
      Number_Of_Employees: '11'
    },
  };

  UNSAFE_componentWillUpdate  = () => {
    console.log(this.state.postData);
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          overflow: "hidden",
        }}
      >
        <nav className="navbar navbar-light "><div className="container">
          <ul className="nav  nav-fill mx-2 w-sm-100">
            <li className="nav-item">
              <img src={Logo} className="mx-2 my-4" width="150px" alt="" />
            </li>
          </ul>
          <ul className="nav nav-fill mx-2 w-sm-100">
            <li className="nav-item">
              <Button type="primary" size="middle" icon={<PhoneOutlined rotate="90" />} >
                (855) 434-4762
              </Button>
            </li>
          </ul>
        </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <StepWizard initialStep={1}>
                <S1FirstAndLastName
                  First_Name={this.state.postData.First_Name}
                  Last_Name={this.state.postData.Last_Name}
                  setFirstName={(v) => {

                    console.log(document.getElementById('leadid_token').value)
                    console.log(document.getElementsByTagName('script')[0].src)
                    this.setState({ postData: { ...this.state.postData, LeadiD_Token: document.getElementById('leadid_token').value, Trusted_Form_URL: document.getElementById('Trusted_Form_URL_0').value } })
                    console.log(document.getElementById('Trusted_Form_URL_0'));

                    this.setState({
                      postData: {
                        ...this.state.postData,
                        First_Name: v
                      }
                    });
                  }}
                  setLastName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Last_Name: v
                      }
                    });
                  }}

                />
                <S2EmailAndPhoneNumber
                  Business_Email={this.state.postData.Business_Email}
                  Business_Phone={this.state.postData.Business_Phone}
                  setBusinessEmail={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Email: v
                      }
                    });
                  }}
                  setBusinessPhone={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Phone: v
                      }
                    });
                  }}
                />
                <S3BusinessNameAndWebsite
                  Business_Name={this.state.postData.Business_Name}
                  Business_Website={this.state.postData.Business_Website}
                  setBusinessName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Name: v
                      }
                    });
                  }}
                  setBusinessWebsite={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Website: v
                      }
                    });
                  }}
                />
                <S4AddressAndCity
                  Business_Address={this.state.postData.Business_Address}
                  Business_City={this.state.postData.Business_City}
                  setBusinessAddress={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Address: v
                      }
                    });
                  }}
                  setBusinessCity={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_City: v
                      }
                    });
                  }}
                />
                <S5StateAndZip
                  Business_State={this.state.postData.Business_State}
                  Business_Zip={this.state.postData.Business_Zip}
                  setBusinessState={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_State: v
                      }
                    });
                  }}
                  setBusinessZip={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Zip: v
                      }
                    });
                  }} />
                <S6BusinessTypeAndEIN
                  Business_Type={this.state.postData.Business_Type}
                  EIN={this.state.postData.EIN}
                  setBusinessType={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Type: v
                      }
                    });
                  }}
                  setEIN={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        EIN: v
                      }
                    });
                  }} />
                <S7BusinessProfessionAndYears
                  Business_Profession={this.state.postData.Business_Profession}
                  Founded={this.state.postData.Founded}
                  setBusinessProfession={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Business_Profession: v
                      }
                    });
                  }}
                  setFounded={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Founded: v
                      }
                    });
                  }} />
                <S8BusinessRevenueAndNoOfEmployees
                  Revenue={this.state.postData.Revenue}
                  Number_Of_Employees={this.state.postData.Number_Of_Employees}
                  setRevenue={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Revenue: v
                      }
                    });
                  }}
                  setNumberOfEmployees={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        Number_Of_Employees: v

                      }
                    });
                  }}
                  postData={this.state.postData}
                />
                <S9Final postData2={this.state.postData}/>
              </StepWizard>
            </div>
          </div>
        </div>

        <Grid
          container
          xs={12}
          align="center"
          style={{ justifyContent: "center" }}
        >
          <Grid container xs={8} style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: 700, lineHeight: 1.5 }}>
                Providers Include:
              </Typography>
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/1.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/2.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/3.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "0rem" }}>
              <img
                width="80%"
                height="auto"
                alt="missing"
                src={require("./Assets/4.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/5.png")}
              />
            </Grid>
          </Grid>
          <Grid
            container
            xs={10}
            style={{ paddingBottom: "1rem", marginTop: "1rem" }}
          >
            <Grid item lg={3} xs={12} style={{ alignSelf: "flex-end" }}>
              <Typography
                style={{ fontSize: "15px", color: "rgb(166, 166, 166)" }}
              >
                @ 2020 Quotehound
              </Typography>
            </Grid>
            <Grid item lg={6} xs={false} />
            <Grid container lg={3} xs={12}>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quotehound.com/"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Visit Us
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{ fontSize: "15px", color: "rgb(166, 166, 166)" }}
                >
                  <a
                    href="https://quotehound.com/privacy-policy"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Privacy Policy
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quotehound.com/terms-conditions"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Terms & Conditions
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
