import React, { useState } from "react";
import styles from "./Upload.module.css";
import { AdminLayout } from "../..";
import { Header } from "../../../components";
import {
  Form,
  Col,
  Button,
  InputGroup,
  Row,
  FloatingLabel,
} from "react-bootstrap";
function Upload() {
  const [validated, setValidated] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [formData, setFormData] = useState({
    bookname: "",
    author: "",
    email: "",
    description: "",
  });
  const [selectedPdf, setSelectedPdf] = useState();
  const [toggle, setToggle] = useState("free", "premium");
  const { bookname, author, description } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePdfDocument = (e) => {
    let pdf = e.target.files[0];
    setSelectedPdf(pdf);
  };

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };
  const handleSelectFreeOrPremium = (e) => {
    setToggle(e.target.value);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <AdminLayout>
      <Header title={"Upload A Book"} hidden />
      <div className="pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Name Of Book</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="bookname"
                    value={bookname}
                    onChange={(e) => handleChange(e)}
                    placeholder="Name of book"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Author Of Book</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={author}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="  Book Description"
                  className="mb-3 "
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Describe the book"
                    name="description"
                    value={description}
                    onChange={(e) => handleChange(e)}
                    style={{ height: "200px" }}
                  />
                </FloatingLabel>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleSelectFreeOrPremium(e)}
                  >
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Upload Book</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="upload"
                    accept="application/pdf , application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain"
                    placeholder="Select A Book"
                    onChange={(e) => handlePdfDocument(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom02"
                  className="mb-3"
                >
                  <Form.Label>Upload Cover Page</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    id="img"
                    name="image"
                    accept="image/*"
                    placeholder="Select A Book"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className=" px-3">
                <Button type="submit">Submit form</Button>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Upload;
