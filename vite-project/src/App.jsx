import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


function App() {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(3);

    // console.log(data);

    // if (data.username==="harry"){
    //   setError("blocked",{message: "harry is blocked user"})
    // }
    // if (data.password==="1234"){
    //   setError("myForm",{message: "credientials are wrong"})
    // }

    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    const resData = await response.text();
    console.log(data, resData);


  }

  return (
    <>
      <div className="container m-auto flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' action="">
          {isSubmitting && <div className="loading">Loading...</div>}
          <input className='border-2' {...register("username", { required: { value: true, message: "username is required" }, minLength: { value: 3, message: "min. length is 3" }, maxLength: { value: 10, message: "max. length is 10" } })} type="text" placeholder='username' />
          {errors.username && <div className='text-red-600'> {errors.username.message}</div>}
          <br />
          <input className='border-2' {...register("password", { required: { value: true, message: "password is required" }, minLength: { value: 3, message: "min. length is 3" } })} type="password" placeholder='password' />
          {errors.password && <div className='text-red-600'> {errors.password.message}</div>}
          <br />
          <input className=' border-2 rounded  cursor-pointer' disabled={isSubmitting} type="submit" value="Submit" />
          {errors.blocked && <div className='text-green-600'> {errors.blocked.message}</div>}
          {errors.myForm && <div className='text-green-600'> {errors.myForm.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
