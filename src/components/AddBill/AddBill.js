import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import BillModal from '../BillModal/BillModal';


const AddBill = ({ billShow, setBillShow, handleBillShow, handleBillClose, updateOrAdd, setupdateOrAdd }) => {
    const handleModal = () => {
        handleBillShow()
        setupdateOrAdd("Add")
    }
    return (
        <div className='my-3'>
            <Container>
                <div className='d-flex justify-content-between p-2 align-items-center' style={{ backgroundColor: "rgb(145, 233, 204)" }}>
                    <div className='d-flex align-items-center'>
                        <p style={{ fontSize: "18px", fontWeight: "bold" }} className='inline m-0'>Billings</p>
                        <form className='inline ms-3'>
                            <input type="text" placeholder='search' />
                        </form>
                    </div>
                    <div>

                        <Button variant="primary" onClick={handleModal}>
                            ADD NEW BILL
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddBill;