import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const BillModal = ({ show, handleShow, handleClose }) => {
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const paidAmount = e.target.paidAmount.value;
        if (phone.length < 11) {
            setPhoneError("error happend")
            console.log(phoneError);
        } else {
            setPhoneError("")
        }
        var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!reg.test(email)) {
            setEmailError("provide valid email")
        } else {
            setEmailError("")
        }
        if (phoneError || emailError) {
            return;
        }
    }
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Add new bill
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD A NEW BILL</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="name" placeholder="Name" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="email" placeholder="Email" required />
                                {emailError &&
                                    <Form.Text className="text-danger">
                                        {emailError}
                                    </Form.Text>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="number" name="phone" placeholder="Phone" required />
                                {phoneError &&
                                    <Form.Text className="text-danger">
                                        {phoneError}
                                    </Form.Text>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control name="paidAmount" type="number" placeholder="Paid Amount" required />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </>
        </div>
    );
};

export default BillModal;