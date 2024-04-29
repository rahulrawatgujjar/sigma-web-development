import React from 'react'
import Image from 'next/image'

const home = () => {
  return (
    <div className="container mx-auto relative bg-pink-400 my-3 size-80">
      <Image fill={true} className='mx-auto object-cover' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/html_image_slider.jpg" alt="" />
    </div>
  )
}

export default home
