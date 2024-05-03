import React from 'react'

const page = ({ params }) => {

  // throw new Error("error hai")

  console.log(params)

  let languages = ["python", "c++", "js", "java", "c#"]

  if (languages.includes(params.slug)) {
    return (
      <div>
        My post: {params.slug}
      </div>
    ) 
  } else {
    return (
      <div>
        post not found
      </div>
    )
  }

}

export default page
