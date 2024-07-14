import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Cancellation and Refund PolicyTerms and Conditions",
  description: "This website is a crowdfunding platform for creators.",
};

const RefundPage = () => {




  return (
    <div className="container mx-auto px-3">
      <h1 className="text-3xl font-bold text-center mb-4 pt-5">Cancellation and Refund Policy</h1>
      <p>Last updated on Jul 12 2024</p>
      <p>RAHUL believes in helping its users as far as possible and has therefore a liberal cancellation policy. Under this policy:</p>
      <ul className="list-disc ml-5 pb-5">
        <li>Cancellations of support contributions will be considered only if the request is made within 2-3 days of making the contribution. However, the cancellation request may not be entertained if the funds have already been disbursed to the creator.</li>
        <li>RAHUL does not accept cancellation requests for contributions made to creators after the funds have been disbursed. However, refunds can be made if it is established that the creator has misrepresented the campaign.</li>
        <li>In case of disputes regarding contributions, please report the same to our Customer Service team. The request will, however, be entertained once the creator has checked and determined the same at their end. This should be reported within 2-3 days of making the contribution.</li>
        <li>In case you feel that the campaign did not meet your expectations, you must bring it to the notice of our customer service within 2-3 days of making the contribution. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
        <li>In case of complaints regarding campaigns, please refer the issue to the creator first. If unresolved, contact our customer service for further assistance.</li>
        <li>In case of any Refunds approved by RAHUL, it will take 3-4 days for the refund to be processed to the end customer.</li>
      </ul>
    </div>
  )
}

export default RefundPage
