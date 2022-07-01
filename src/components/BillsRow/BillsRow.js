import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import BillModal from '../BillModal/BillModal';
import DeleteModal from '../DeleteModal/DeleteModal';


const BillsRow = ({ bill, setApiLoading, billShow, setBillShow, handleBillClose, handleBillShow, setupdateOrAdd }) => {
    // updateOrAdd={updateOrAdd}
    //             setupdateOrAdd={setupdateOrAdd}
    const { _id, name, email, phone, paidAmount } = bill;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleBillModal = () => {
        handleBillShow()
        setupdateOrAdd(`Update ${_id}`)

    }
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{paidAmount}</td>
            <td className='d-flex'>
                <Button
                    onClick={handleBillModal}
                >
                    Update
                </Button>
                <Button className='ms-2' variant="danger" size="sm">
                    <>
                        <Button variant="danger" onClick={handleShow}>
                            Delete
                        </Button>
                        <DeleteModal
                            id={_id}
                            show={show}
                            handleClose={handleClose}
                            setApiLoading={setApiLoading}
                        >
                        </DeleteModal>
                    </>
                </Button></td>
        </tr>
    );
};

export default BillsRow;