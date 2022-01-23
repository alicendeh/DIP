import React, { useState } from "react";
import styles from "./Profile.module.css";
import { AdminLayout } from "../../../pages";
import { Header } from "../../../components";
import {
  Form,
  Col,
  Button,
  InputGroup,
  Row,
  FloatingLabel,
} from "react-bootstrap";
function Profile() {
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
      <Header title={"Profile"} hidden />
      <div className="pt-5 pb-5">
        <Form>
          <Row>
            <div className="d-flex">
              <div className={`${styles.round}`}>
                <div className={`${styles.profilePic} col-4`}>
                  <label for="img" className="take-photo">
                    <img
                      for="img"
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : "/1.png"
                      }
                      className="img-fluid rounded border card"
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
                <p className="petit">Click the camera to upload image</p>
              </div>
            </div>
          </Row>
        </Form>
      </div>
    </AdminLayout>
  );
}

export default Profile;
