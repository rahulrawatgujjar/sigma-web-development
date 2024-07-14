import { Metadata } from 'next';
import Head from 'next/head'
import React from 'react'

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "This website is a crowdfunding platform for creators.",
};

const TermsPage = () => {
  return (
    <div className="container mx-auto px-3">
      <h1 className="text-3xl font-bold text-center mb-4 pt-5">Terms and Conditions</h1>
      <p>Last updated on Jul 12 2024</p>
      <p>
        For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean RAHUL, whose registered/operational office is Bawani Khera Bhiwani HARYANA 127032. "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to support a creator through our platform.
      </p>
      <p>Your use of the website and/or support to creators hosted on our platform are governed by following Terms and Conditions:</p>
      <ul className="list-disc ml-5 pb-5">
        <li>The content of the pages of this website is subject to change without notice.</li>
        <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
        <li>Your use of any information or materials on our website and/or support to creators is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any creators, services, or information available through our website meet your specific requirements.</li>
        <li>Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
        <li>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
        <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
        <li>From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
        <li>You may not create a link to our website from another website or document without RAHUL’s prior written consent.</li>
        <li>Any dispute arising out of use of our website and/or support to creators is subject to the laws of India.</li>
        <li>We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on account of the supporter having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
      </ul>
    </div>
  )
}

export default TermsPage
