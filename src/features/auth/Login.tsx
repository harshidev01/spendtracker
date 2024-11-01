import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  function handelSignupClick(){
    navigate("/signup")

  }
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src="login.png" className="h-[30vh]" />
      </div>
      <div className="flex w-full justify-center font-semibold text-3xl">
        Welcome Back 👋
      </div>
      <div
        className="flex w-full justify-center mt-2 text-lg"
      >
        Login To Your Account
      </div>
      <div className="w-[80vw] h-[40vh] border border-black  mt-16 rounded-lg flex flex-col items-center gap-4 justify-between pb-6">
        <div className=" text-lg rounded-t-lg w-full py-2 flex justify-center text-background font-semibold  bg-blue-500">
          LOGIN HERE 👇
        </div>

        <div className="gap-3 flex flex-col w-[90%]">
          <Input
            className="w-full "
            placeholder="Email Id"
            iconName="emailId"
            mandatory={true}
          />
          <Input
            className="w-full "
            placeholder="Password"
            iconName="password"
            mandatory={true}
          />
          <div className="w-full h-full flex justify-center mt-3">
            <Button className="w-[70%]">Login</Button>
          </div>
          <div className="flex flex-row w-full h-full justify-center items-center">
            <div className="text-[10px]">Don't have an account?</div>
            <div>
              <Button className="text-blue-700 border-b-0" variant={"link"} onClick={handelSignupClick}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
