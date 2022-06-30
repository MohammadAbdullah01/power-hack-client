import React, { useState } from 'react';
import AddBill from '../AddBill/AddBill';
import Bills from '../Bills/Bills';
import Header from '../Header/Header';

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Header></Header>
            <AddBill
                show={show}
                setShow={setShow}
                handleShow={handleShow}
                handleClose={handleClose}
            ></AddBill>
            <Bills></Bills>

        </div>
    );
};

export default Home;