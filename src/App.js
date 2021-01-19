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
import S10Media from "./components/S10Media";
class App extends Component {
  state = {
    postData: {
      //extra entries
      lp_campaign_id:"5fe10f48a0ba0",
      lp_campaign_key:"vfB6nWKXFx9L3jPyZc7t",
      Key: "rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
      TYPE: "38",
      Sub_ID: "12",
      Pub_ID: "13",
      TCPA_Consent: "Yes",
      TCPA_Language: "By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.",
      trusted_form_cert_id: "",
      jornaya_lead_id: "",
      Redirect_URL: "",
      SRC: "Internal_Business_Insurance",
      Landing_Page: "quotehound.com",
      IP_Address: "",
      //s1 form fields
      first_name: '',
      last_name: '',
      gclid: "", vvv
      //S2 form fields
      phone_home: '',
      email_address: '',
      //s3 form fields
      legal_business_name: '',
      business_website: '',
      //s4 form fields
      address: '',
      city: '',
      //s5 form fields
      state: '',
      zip_code: '',
      //s6 form fields
      business_structure: '',
      ein: '',
      EIN_Number: '',
      //s7 form fields
      business_profession: '',
      year_business_founded: '',
      // s8 form fields
      annual_revenue_over_next_12_months: '',
      number_of_employees: ''
    },
  };

  callMediaAlpha = () => {
    var tempArray = {
    email: this.state.email_address,
      phone: this.state.phone_home,
      address: this.state.address,
      zip: this.state.zip_code,
    };
    // window.MediaAlphaExchange = {
    //   placement_id: "4yclnD1Pz-JicFFmiW0DhV7a86VXHw",
    //   sub_1: "test sub id",
    //   type: "ad_unit",
    //   version: 17,
    //   data: tempArray,
    // };
    // window.MediaAlphaExchange__load("target");
    // console.log("hello")

    window.MediaAlphaExchange = {
      "data": {
         "zip": "90210"
      },
      "placement_id": "4yclnD1Pz-JicFFmiW0DhV7a86VXHw",
      "sub_1": "test sub id",
      "type": "ad_unit",
      "version": 17
   };
   window.MediaAlphaExchange__load("target");
   console.log("hello")
   
  }



  UNSAFE_componentWillUpdate  = () => {
    console.log(this.state);
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
              <Button type="primary" size="middle" icon={<PhoneOutlined rotate="90" />} href={"tel:+18554344762"} >
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
                  first_name={this.state.postData.first_name}
                  last_name={this.state.postData.last_name}
                  setFirstName={(v) => {
                  
                    console.log(document.getElementById('jornaya_lead_id').value)
                    console.log(document.getElementsByTagName('script')[0].src)
                    this.setState({ postData: { ...this.state.postData, jornaya_lead_id: document.getElementById('jornaya_lead_id').value, trusted_form_cert_id: document.getElementById('trusted_form_cert_id_0').value,   gclid: document.getElementById("gclid_field").value } })
                    console.log(document.getElementById('trusted_form_cert_id_0'));

                    this.setState({
                      postData: {
                        ...this.state.postData,
                        first_name: v
                      }
                    });
                  }}
                  setLastName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        last_name: v
                      }
                    });
                  }}

                />
                <S2EmailAndPhoneNumber
                  email_address={this.state.postData.email_address}
                  phone_home={this.state.postData.phone_home}
                  setBusinessEmail={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        email_address: v
                      }
                    });
                  }}
                  setBusinessPhone={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        phone_home: v
                      }
                    });
                  }}
                />
                <S3BusinessNameAndWebsite
                  legal_business_name={this.state.postData.legal_business_name}
                  business_website={this.state.postData.business_website}
                  setBusinessName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        legal_business_name: v
                      }
                    });
                  }}
                  setBusinessWebsite={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        business_website: v
                      }
                    });
                  }}
                />
                <S4AddressAndCity
                  address={this.state.postData.address}
                  city={this.state.postData.city}
                  setBusinessAddress={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        address: v
                      }
                    });
                  }}
                  setBusinessCity={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        city: v
                      }
                    });
                  }}
                />
                <S5StateAndZip
                  state={this.state.postData.state}
                  zip_code={this.state.postData.zip_code}
                  setBusinessState={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        state: v
                      }
                    });
                  }}
                  setBusinessZip={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        zip_code: v
                      }
                    });
                  }} />
                <S6BusinessTypeAndEIN
                  business_structure={this.state.postData.business_structure}
                  ein={this.state.postData.ein}
                  setBusinessType={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        business_structure: v
                      }
                    });
                  }}
                  setEIN={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        ein: v
                      }
                    });
                  }} />
                <S7BusinessProfessionAndYears
                  business_profession={this.state.postData.business_profession}
                  year_business_founded={this.state.postData.year_business_founded}
                  setBusinessProfession={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        business_profession: v
                      }
                    });
                  }}
                  setyear_business_founded={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        year_business_founded: v
                      }
                    });
                  }} />
                <S8BusinessRevenueAndNoOfEmployees
                  annual_revenue_over_next_12_months={this.state.postData.	annual_revenue_over_next_12_months}
                  number_of_employees={this.state.postData.number_of_employees}
                  callMediaAlpha={this.callMediaAlpha}
                  setRevenue={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        annual_revenue_over_next_12_months: v
                      }
                    });
                  }}
                  setNumberOfEmployees={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        number_of_employees: v

                      }
                    });
                  }}
                   
                  postData={this.state.postData}
                />   
                <S10Media  postData2={this.state.postData}/>
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
