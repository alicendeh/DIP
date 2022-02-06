import React, { useState } from "react";
import styles from "./Profile.module.css";
import { AdminLayout } from "../../../pages";
import { Header } from "../../../components";
import { useSelector } from "react-redux";
import {
  Form,
  Col,
  Button,
  InputGroup,
  Row,
  FloatingLabel,
} from "react-bootstrap";
import Network from "../../../components/Network/Network";
function Profile() {
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [selectedImage, setSelectedImage] = useState();
  const { fname, lname, email, type, contact, bio, location, w_con, w_view } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };

  return (
    <AdminLayout>
      <Header title={"Profile"} hidden={true} />
      <div className=" pb-5 " style={{ paddingTop: "6em" }}>
        <Form>
          <Row>
            <div className="d-flex col-lg-4">
              <div className={`${styles.round}`}>
                <div className={`${styles.profilePic} `}>
                  <label for="img" className={`${styles.takephoto} `}>
                    <img
                      for="img"
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : "/defaultUserPic.webp"
                      }
                      className="img-fluid rounded border card"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <input
                      type="file"
                      id="img"
                      name="image"
                      accept="image/*"
                      className="d-none"
                      // required
                      onChange={(e) => handleImageChange(e)}
                    />
                  </label>
                </div>
                <p className="petit">Click the image to upload image</p>
              </div>
            </div>
            <div className="other-form col-lg-8">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    // name="name"
                    value={user.user.name}
                    // onChange={(e) => handleChange(e)}
                    placeholder="Name of book"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Author"
                    // name="author"
                    // value={author}
                    // onChange={(e) => handleChange(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label> Change Password</Form.Label>
                  <Form.Control required type="password" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control required type="password" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    // onChange={(e) => handleSelectFreeOrPremium(e)}
                  >
                    <option value="1">Admin</option>
                    {/* <option value="2">Premium</option> */}
                  </Form.Select>
                </Form.Group>
                <Row className=" pt-3">
                  <Button type="submit">Edit Profile</Button>
                </Row>
              </Row>
            </div>
          </Row>
        </Form>
      </div>
    </AdminLayout>
  );
}

export default Profile;
