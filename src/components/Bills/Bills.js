import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Table from 'react-bootstrap/Table';

const Bills = () => {
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
                        <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td className='d-flex'> <Button variant="primary" size="sm">
                                Update
                            </Button>
                                <Button className='ms-2' variant="danger" size="sm">
                                    Delete
                                </Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Bills;



