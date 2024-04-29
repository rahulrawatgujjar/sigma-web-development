import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {` alert("Welcome to Contact Page.") `}
      </Script>
      I am contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Facebook - Contact",
  description: "This is the contact page of facebook.",
};
