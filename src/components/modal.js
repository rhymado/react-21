import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";

class ModalInput extends Component {
  //   const [show, setShow] = useState(false);
  state = {
    show: false,
    name: "",
    price: "",
    desc: "",
    qty: 0,
    category: 1,
  };
  handleClose = () =>
    this.setState({
      show: false,
    });
  handleShow = () =>
    this.setState({
      show: true,
    });
  handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, desc, price, category, qty } = this.state;
    const body = {
      product_name: name,
      product_description: desc,
      product_price: Number(price),
      category_id: Number(category),
      product_qty: Number(qty),
    };
    // console.log(body);
    // const config = {
    //     headers: {
    //         "origin"
    //     }
    // }
    axios
      .post("http://localhost:8000/product", body)
      .then((result) => {
        console.log(result);
        this.setState({
          name: "",
          price: "",
          desc: "",
          qty: 0,
          category: 1,
        });
      })
      .catch((err) => console.error(err));
  };
  render() {
    // console.log(this.state);
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Product</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter product name"
                    onChange={this.handleChange}
                    name="name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="price"
                    placeholder="Price"
                    onChange={this.handleChange}
                    name="price"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Produk ini merupakan...."
                  as="textarea"
                  onChange={this.handleChange}
                  name="desc"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    placeholder="Insert Quantity..."
                    onChange={this.handleChange}
                    name="qty"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    onChange={this.handleChange}
                    name="category"
                  >
                    <option value={1}>Kaos</option>
                    <option value={2}>Celana</option>
                    <option value={3}>Sepatu</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalInput;
