import React from "react"

export default function App() {
  return (
  <>
    <div className='mainContainer  h-[150vh]  bg-[#93CDDD]  flex  items-center'>
    <div className="bg-white  flex  h-[700px] w-[900px] rounded-md  relative left-[100px] bottom-[50px] ">
      <div className='LeftContainer m-11 mt-11 gap-11 '>
       <h1 className="font-semibold text-[#93CDDD] text-2xl">Travelling</h1><br></br>
       <div className="mx-11">
        <div className="flex gap-[150px]">
        <p className="mb-5 mt-11 font-medium text-xl">Login</p>
        <p className="mb-5 mt-11 font-bold text-[#93CDDD]">Daftar</p></div>
    
        <input type='text' placeholder='Email' className="mb-2 border border-gray-200 border-2 text-center h-[40px] w-[250px] rounded-md "></input>
       
        <input type='Password' placeholder='Password'className=" border border-gray-200 border-2 text-center rounded-md h-[40px] w-[250px]"></input>
      
        <br></br><br></br>
        <button type='Submit' className="bg-gray-300 w-[250px] h-10 rounded-md text-white">Login</button><br></br><br></br>
        <p>To know More? <span className="text-[#93CDDD]">Click Here</span></p><br></br>
        <div className="text-center">
  <div className="flex items-center">
    <div className="flex h-0.5 bg-gray-300 w-[60px]"></div>
    <p className="mx-4">Or Login With</p>
    <div className="flex w-[60px] h-0.5 bg-gray-300"></div>
  </div>
</div><br></br>


        <div className="gamil w-[250px] h-10 rounded-md mb-2 border border-gray-200 border-2 text-center p-1">Google  </div>
        <div className="gamil w-[250px] h-10 rounded-md  border border-gray-200 border-2 text-center p-1">Facebook</div>
        </div><br></br><br></br><br></br>
         <p className="text-sm mt-4 mb-3"> &copy; 2021 Travelling All Right Reserved</p>
        </div>
        <div className='RightContainer'>
        <img src="src\assets\image 1.jpg" className=" relative right-[10px] top-[10px] rounded-md h-[680px] w-[700px]"></img>
          {/* <img src={require('../images/logo.png').default} alt="" /><br></br><br></br> */}
        </div>
        </div>
        </div>
  </>
  )
}