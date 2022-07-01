import React, { useEffect, useState } from 'react';
import AddBill from '../AddBill/AddBill';
import BillModal from '../BillModal/BillModal';
import Bills from '../Bills/Bills';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [billShow, setBillShow] = useState(false);
    const [apiLoading, setApiLoading] = useState(false)
    const handleBillClose = () => setBillShow(false);
    const handleBillShow = () => setBillShow(true);
    const [bills, setBills] = useState([])
    const [updateOrAdd, setupdateOrAdd] = useState('')
    const [pages, setPages] = useState(0)
    useEffect(() => {
        fetch("https://powerful-ridge-20266.herokuapp.com/billing-list")
            .then(res => res.json())
            .then(data => setBills(data))
    }, [apiLoading])
    useEffect(() => {
        fetch("http://localhost:5000/total-bills")
            .then(res => res.json())
            .then(data => {
                const billsCount = data.count;
                const pageAmount = Math.ceil(billsCount / 10)
                setPages(pageAmount)
            })
    })
    console.log(pages);
    return (
        <div>
            <Header></Header>
            <AddBill
                billShow={billShow}
                setBillShow={setBillShow}
                handleBillShow={handleBillShow}
                handleBillClose={handleBillClose}
                updateOrAdd={updateOrAdd}
                setupdateOrAdd={setupdateOrAdd}
            ></AddBill>
            <Bills
                bills={bills}
                setApiLoading={setApiLoading}
                billShow={billShow}
                setBillShow={setBillShow}
                handleBillShow={handleBillShow}
                handleBillClose={handleBillClose}
                updateOrAdd={updateOrAdd}
                setupdateOrAdd={setupdateOrAdd}
            ></Bills>
            <div className='pagination-container mx-auto text-center mb-5'>
                {pages &&
                    [...Array(pages).keys()].map(number => <button className='page-btn'>{number + 1}</button>)
                }
            </div>
            <BillModal
                billShow={billShow}
                setBillShow={setBillShow}
                handleBillShow={handleBillShow}
                handleBillClose={handleBillClose}
                updateOrAdd={updateOrAdd}
                setupdateOrAdd={setupdateOrAdd}
            >L</BillModal>
        </div>
    );
};

export default Home;