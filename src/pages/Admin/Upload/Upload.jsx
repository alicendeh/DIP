import React, { useState, useEffect } from "react";
import { AdminLayout } from "../..";
import { Header } from "../../../components";
import { Form, Col, Button, Row, Modal } from "react-bootstrap";
import { _addABook } from "../../../Helpers/adminHelper";
import { Navigate } from "react-router-dom";
import {
  submitBookSPinner,
  currentlyAddedBook,
} from "../../../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

function Upload() {
  const dispatch = useDispatch();
  const adminState = useSelector((state) => state.admin);

  const [validated, setValidated] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
  });
  const [failureToSend, setfailureToSend] = useState(null);
  const [images, setimages] = useState();
  const [showSuccessModal, setshowSuccessModal] = useState(false);
  const [toggle, setToggle] = useState("free", "premium");
  const [toggle1, setToggle1] = useState(
    "courses",
    "systemfundamentals",
    "advancecertificationprogram",
    "DIPcoachingcertification",
    "DIPmentorcertificate",
    "customizedtraining",
    "DIPprokit",
    "buildingblocks"
  );
  const [item, setItem] = useState("video", "pdf");
  const { name, author } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePdfDocument = (e) => {
    let pdf = e.target.files[0];
    setimages(pdf);
  };

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };

  const handleSelectCategory = (e) => {
    setToggle1(e.target.value);
  };
  const handleSelectItem = (e) => {
    setItem(e.target.value);
  };

  const handleSelectFreeOrPremium = (e) => {
    setToggle(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(submitBookSPinner(true));

    const dataToSend = new FormData();
    dataToSend.append("images", images);
    dataToSend.append("images", selectedImage);
    dataToSend.append("name", formData.name);
    dataToSend.append("category", toggle1);
    dataToSend.append("dataType", item);
    dataToSend.append("author", formData.author);
    dataToSend.append("plan", toggle);

    console.log(dataToSend);
    _addABook(dataToSend).then((response) => {
      console.log(response);
      if (response.code === 400) {
        console.log("alice");
        dispatch(submitBookSPinner(false));
        setfailureToSend(response.data.message);
      } else {
        console.log("yaya");
        dispatch(currentlyAddedBook(response));
        setshowSuccessModal(true);
      }
    });
  };

  const handleClose = () => {
    setshowSuccessModal(false);
  };
  return (
    <AdminLayout>
      <Header title={"Upload A Book"} hidden />
      <SuccessModal show={showSuccessModal} handleClose={handleClose} />

      <div className="pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Name Of Book</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Name of book"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
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
                <Form.Group as={Col} md="6">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleSelectFreeOrPremium(e)}
                  >
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleSelectCategory(e)}
                  >
                    <option>Open this select menu</option>
                    <option value="courses">Courses</option>
                    <option value="systemfundamentals">
                      System Fundamentals
                    </option>
                    <option value="advancecertificationprogram">
                      Advanced Certification Program
                    </option>
                    <option value="DIPcoachingcertification">
                      DIP Coaching Certification
                    </option>
                    <option value="DIPmentorcertificate">
                      DIP Mentor Certificate
                    </option>
                    <option value="customizedtraining">
                      Customized Training
                    </option>
                    <option value="DIPprokit">DIP pro kit</option>
                    <option value="buildingblocks">Buildings Blocks</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6" className="mb-3">
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
                <Form.Group as={Col} md="6">
                  <Form.Label>Select Book Or Video</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleSelectItem(e)}
                  >
                    <option>Select file</option>
                    <option value="pdf">Book</option>
                    <option value="video">Video</option>
                  </Form.Select>

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className=" mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Upload Book</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="upload"
                    accept="application/pdf , application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain"
                    placeholder="Select A Book"
                    onChange={(e) => handlePdfDocument(e)}
                    disabled={item == "video" ? true : false}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Upload Video</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="upload"
                    accept=".mp4"
                    placeholder="Select A Video"
                    disabled={item == "pdf" ? true : false}
                    onChange={(e) => handlePdfDocument(e)}
                  />
                </Form.Group>
              </Row>
              <div class="col-12">
                {adminState.bookSPinner ? (
                  <div
                    className=" col-12 btn btn-primary "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="spinner"></div>
                  </div>
                ) : (
                  <Row className=" px-3">
                    <Button type="submit">Submit form</Button>
                  </Row>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Upload;

function SuccessModal({ title, show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Book Or Video Succesfully added</Modal.Body>
      </Modal>
    </>
  );
}
