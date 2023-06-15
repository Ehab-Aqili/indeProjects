import React from "react";
import { Link } from "react-router-dom";
import Facebook from "./facebook-svgrepo-com.svg";
import Twitter from "./twitter-round-svgrepo-com.svg";
import Instagram from "./instagram-f-svgrepo-com.svg";
import Linkedin from "./linkedin-round-svgrepo-com.svg";
import Homeimg from "./home-svgrepo-com.svg";
import Emailimg from "./email-1573-svgrepo-com.svg";
import Telephone from "./telephone-svgrepo-com.svg";
import Printer from "./printer-1599-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start" > 
        <section
          className="d-flex align-items-center justify-content-center justify-content-lg-between border-bottom pt-3 px-4"
          id="bg__page"
        >
          <div className="me-5 d-none d-lg-block">
            <h4>Get connected with us on social networks:</h4>
          </div>

          <div>
            <Link href="#" className="me-4 link-secondary">
              <img
                src={Facebook}
                className="fab fa-facebook-f"
                style={{ width: "50px" }}
                alt="#"
              />
            </Link>
            <Link href="#" className="me-4 link-secondary">
              <img
                src={Twitter}
                className="fab fa-twitter"
                style={{ width: "35px" }}
                alt="#"
              />
            </Link>
            <Link href="#" className="me-4 link-secondary">
              <img
                src={Instagram}
                alt="#"
                style={{ width: "35.5px" }}
                className="fab fa-instagram"
              />
            </Link>
            <Link href="#" className="me-4 link-secondary">
              <img
                src={Linkedin}
                alt="#"
                style={{ width: "35px" }}
                className="fab fa-linkedin"
              ></img>
            </Link>
          </div>
        </section>
        <div className="container-flued pt-4 px-4" id="bg__page">
          <div className="row">
            <div className="col-xl-4 mb-4 mb-md-0">
              <h5 className="text-uppercase" >About Us</h5>
              <p className="px-3">
                Welcome to NutriChif! We're passionate about nourishing your
                body with delicious, wholesome food. Join us on a flavorful
                journey as we empower you to achieve optimal nutrition and
                discover the joy of eating well.
              </p>
            </div>

            <div className="col-xl-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Category
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Help
                </Link>
              </p>
            </div>
            <div className="col-xl-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary">
                  <img src={Homeimg} style={{ width: "30px" }} alt="#" />
                </i>{" "}
                New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary">
                  <img alt="#" src={Emailimg} style={{ width: "30px" }} />
                </i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary">
                  <img alt="#" src={Telephone} style={{ width: "30px" }} />
                </i>{" "}
                + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3 text-secondary">
                  <img alt="#" src={Printer} style={{ width: "30px" }} />
                </i>{" "}
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pb-3" id="bg__footer">
          <hr />© 2020 Copyright  &nbsp; 
          <Link className="text-dark" to="#">
            NutriChef.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
