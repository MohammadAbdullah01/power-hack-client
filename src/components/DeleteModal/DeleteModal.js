import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const DeleteModal = ({ show, handleClose, id, setApiLoading }) => {

    const handleDelete = () => {
        console.log("hi");
        fetch(`https://powerful-ridge-20266.herokuapp.com/delete-billing/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.result);
                setApiLoading(true)
                handleClose()
            })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Modal.Title className='mb-3'>Are your sure you want to delete?</Modal.Title>
                <div className='d-flex justify-content-end'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleDelete} className='ms-2' variant="primary">
                        Delete
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DeleteModal;