import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const BillModal = ({ billShow, handleBillShow, handleBillClose, children, updateOrAdd }) => {
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const paidAmount = e.target.paidAmount.value;
        if (phone.length < 11) {
            setPhoneError("minimum 11 digit")
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
        else {
            const bill = {
                name: name,
                email: email,
                phone: phone,
                paidAmount: paidAmount
            }
            if (updateOrAdd === "Add") {
                fetch('https://powerful-ridge-20266.herokuapp.com/add-billing', {
                    method: 'POST',
                    body: JSON.stringify(bill),
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        handleBillClose()
                    })

            }
            const Update = updateOrAdd.slice(0, 6)
            if (Update) {
                console.log(updateOrAdd)
                const id = updateOrAdd.slice(7, updateOrAdd.length);
                console.log(id);
                fetch(`https://powerful-ridge-20266.herokuapp.com/update-billing/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(bill),
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        handleBillClose()
                    })
            }
            // handleBillClose()
        }

    }
    return (
        <div>
            <>


                <Modal show={billShow} onHide={handleBillClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please {updateOrAdd}</Modal.Title>
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