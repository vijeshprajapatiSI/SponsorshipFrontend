import React from 'react'

const SponsorCard = (props) => {
  return (
    <div className="card m-2" style={{ width: 18 + "rem" }}>
    <div className="card-body">
      <h5 className="card-title">Sponsor Name: {props.sponsor.sponsorName}</h5>
      <h6 className="card-title">Total Payments: ₹{props.sponsor.totalPayments}</h6>
      <span className="badge text-bg-secondary">Date: {props.sponsor.latestPaymentDate}</span>
      <span className="m-1 badge text-bg-primary">
        Number of payments: {props.sponsor.numberOfPayments}
      </span>
      <p className="card-text">Industry Type: {props.sponsor.industryType}</p>
      
    </div>
  </div>
  )
}

export default SponsorCard