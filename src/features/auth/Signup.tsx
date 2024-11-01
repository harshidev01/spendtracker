import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
    const[step,setStep] = useState(1)
    function handleLoginClick(){
        navigate("/login")

    }
    function handleNextClick(){
         if(step === 1){
            setStep(2)
         }
         else if(step === 2){
            setStep(3)
         }

    }
    function handleBackClick(){
        setStep(step -1)


    }
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src="login.png" className="h-[30vh]" />
        <div className="w-full flex flex-col items-center gap-3">
            <div className="text-3xl">Welcome 👋</div>
            <div className="text-lg">You can Signup now</div>
        </div>
      </div>
      <div className="w-[80vw] h-[45vh] items-center border border-black mt-16 rounded-lg flex  flex-col ">
        <div className="flex flex-row w-full h-fit items-center text-white  bg-blue-500 rounded-t-lg ">
          <div className="p-4 ml-7 flex font-bold text-xl">Create Account</div>
          <VscAccount className="w-5 h-5" />
        </div>
        {
            step === 1?<div className="w-[90%] gap-3  mt-10 flex flex-col items-center">
            <Input
              placeholder="First Name"
              iconName="firstName"
              mandatory={true}
            />
            <Input placeholder="LastName" iconName="lastName" mandatory={false} />
          </div>: step === 2?<div className="w-[90%] gap-3  mt-10 flex flex-col items-center">
          <Input
            placeholder="Email id"
            iconName="emailId"
            mandatory={true}
          />
          <Input placeholder="Phone Number" iconName="phoneNumber" mandatory={true} />
        </div>: step === 3?<div className="w-[90%] gap-3  mt-10 flex flex-col items-center">
          <Input
            placeholder="Password"
            iconName="password"
            mandatory={true}
          />
          <Input placeholder="Re Enter Password" iconName="reEnterPassword" mandatory={true} />
        </div>: <div className="w-[90%] gap-3  mt-10 flex flex-col items-center">
          <Input
            placeholder="Enter OTP"
            iconName="enterOTP"
            mandatory={true}
          />
          
        </div>
        }
        <div className="w-full flex justify-between p-5 mt-5 gap-8">
          <Button className="w-full flex justify-center" disabled={step === 1?true : false} onClick={handleBackClick}>
            <IoMdArrowBack />
            Back
          </Button>
          <Button className="w-full flex justify-center" onClick={handleNextClick}>
           {step === 3?"Send OTP":step === 4? "Signup":"Next"} <IoArrowForwardOutline />
          </Button>
        </div>
        <div className="flex flex-row w-full items-center justify-center  ">
          <div className="text-[10px]">Already have an account?</div>
          <div>
            <Button className="text-blue-700 border-b-0" variant={"link"} onClick={handleLoginClick}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
