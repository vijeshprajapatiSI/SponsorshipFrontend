import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import { getmatchesWithPayments } from '../services/sponsorAPIService';

const GetmatchesWithPayments = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getmatchesWithPaymentsHandler();
  }, []);

  async function getmatchesWithPaymentsHandler() {
    let data = await getmatchesWithPayments();
    if (data != null) {
      setMatches(data);
    }
    console.log(matches);
  }
  return (
    <div>
      <Navbar/>
      <h4 className='text-success m-5 '>Details of matches and the Total amount paid</h4>
      <div className='row'>
      {matches.map((match) => (
             <div key={match.matchID} className="card m-2 row" style={{ width: 18 + "rem",display:'flex' }}>
             <div className="card-body">
               <h6 className="card-title">Match Name: <span><h5 className='text-primary'>{match.matchName}</h5></span></h6>
               <h6 className="card-title">Match Date : <span><h5 className='text-primary'>{match.matchDate}</h5></span></h6>
               <span className="badge text-bg-secondary">Total Payments $: {match.totalAmountPaid}</span>
               
               <p className="card-text">Location: {match.location}</p>
               
             </div>
           </div>
          ))}
        </div>
    </div>
  )
}

export default GetmatchesWithPayments