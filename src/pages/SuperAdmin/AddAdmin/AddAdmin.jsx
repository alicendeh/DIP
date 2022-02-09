import React from "react";
import { SuperAdminLayout } from "../..";
import { Form, Button } from "react-bootstrap";
import styles from "./AddAdmin.module.css";
function AddAdmin() {
  return (
    <SuperAdminLayout>
      <h2 style={{ paddingLeft: "2em" }}> Add Admins </h2>
      <div className={`${styles.holdtake}`}>
        <div className={`${styles.takeform}`}>
          <h4 className="mb-4">Create Admin Credentials here</h4>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoComplete="off"
              />
              {/* <input placeholder="Enter Email" /> */}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Password :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password2" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="success" type="submit">
              Create Admin
            </Button>
          </Form>
        </div>
      </div>
    </SuperAdminLayout>
  );
}

export default AddAdmin;
