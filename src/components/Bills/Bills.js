import React from 'react';
import Container from 'react-bootstrap/Container'


import Table from 'react-bootstrap/Table';
import BillsRow from '../BillsRow/BillsRow';

const Bills = ({ bills, setApiLoading, billShow, setBillShow, handleBillShow, handleBillClose, updateOrAdd, setupdateOrAdd }) => {
    // updateOrAdd={updateOrAdd}
    //             setupdateOrAdd={setupdateOrAdd}
    return (
        <div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map(bill => <BillsRow
                            key={bill._id}
                            bill={bill}
                            setApiLoading={setApiLoading}
                            billShow={billShow}
                            setBillShow={setBillShow}
                            handleBillShow={handleBillShow}
                            handleBillClose={handleBillClose}
                            updateOrAdd={updateOrAdd}
                            setupdateOrAdd={setupdateOrAdd}
                        ></BillsRow>)}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Bills;



