import React, { useEffect, useState } from 'react';
import AddBill from '../AddBill/AddBill';
import BillModal from '../BillModal/BillModal';
import Bills from '../Bills/Bills';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [billShow, setBillShow] = useState(false);
    const [apiLoading, setApiLoading] = useState(false)
    const handleBillClose = () => setBillShow(false);
    const handleBillShow = () => setBillShow(true);
    const [bills, setBills] = useState([])
    const [updateOrAdd, setupdateOrAdd] = useState('')
    const [pages, setPages] = useState(0)
    const [activePage, setActivePage] = useState(0)
    useEffect(() => {
        fetch(`https://powerful-ridge-20266.herokuapp.com/billing-list/?page=${activePage}`)
            .then(res => res.json())
            .then(data => setBills(data))
    }, [apiLoading, activePage])
    useEffect(() => {
        fetch("https://powerful-ridge-20266.herokuapp.com/total-bills")
            .then(res => res.json())
            .then(data => {
                const billsCount = data.count;
                const pageAmount = Math.ceil(billsCount / 10)
                setPages(pageAmount)
            })
    }, [bills])
    const setActivePageEvent = (number) => {
        setActivePage(number)
        setApiLoading(true)
    }
    console.log(activePage);
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
                setApiLoading={setApiLoading}
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
                    [...Array(pages).keys()].map(number => <button
                        onClick={() => setActivePageEvent(number)}
                        className={`${number === activePage ? 'active-page' : 'page-btn'}`}>{number + 1}</button>)
                }
            </div>
            <BillModal
                billShow={billShow}
                setBillShow={setBillShow}
                handleBillShow={handleBillShow}
                handleBillClose={handleBillClose}
                updateOrAdd={updateOrAdd}
                setupdateOrAdd={setupdateOrAdd}
                setApiLoading={setApiLoading}
            >L</BillModal>
        </div>
    );
};

export default Home;