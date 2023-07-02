import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
 name : string,
 email: string,
 subject: string,
 message: string,
};


function ContactMe() {
    const { register, 
         handleSubmit,  } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:emmanueltokula03@gmail.com?subject=${formData.subject}&body=Hi my name is${formData.name}.${formData.message}(${formData.message})  `
    }
  return (

    <div className="container p-3 px-6 mx-auto my-24 bg-black" >
    <section className="p-2 mb-32 text-white-800" >
      
      <div className="flex flex-wrap" >
      <div className="w-full px-3 mb-6 grow-0 shrink-0 basis-auto md:mb-0 md:w-6/12 lg:px-6">
          <h2 className="mb-6 text-3xl font-bold text-white">Contact us</h2>
          <p className="mb-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
          </p>
          <p className="mb-2 text-white">New York, 94126, United States</p>
          <p className="mb-2 text-white">+ 01 234 567 89</p>
          <p className="mb-2 text-white">info@gmail.com</p>
        </div>
       
       <div  className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:mb-0 md:w-6/12 lg:px-6" >
        
        <form onSubmit={handleSubmit(onSubmit)} className="" >
        <div className="mb-6 form-group" >

                <input {...register('name')} placeholder='Name'  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" />
              
        </div>

        <div className="mb-6 form-group" >
        <input {...register('email')} placeholder='Email'  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="email" />
        </div>

        <div className="mb-6 form-group" >
        <input {...register('subject')}   placeholder='Subject' className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" />

        </div>

         <div className="mb-6 form-group" >

              <textarea {...register('message')}  placeholder='Message' className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" /> 
                
           </div>

              
               <button className=" bg-[#F7AB0A]  hover:bg-[#ce9720] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button>              
        </form>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default ContactMe
