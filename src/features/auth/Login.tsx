import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div>
      <div>
        <img src="login.png"  className="h-[30vh]" />
      </div>
      <div className="flex w-full justify-center font-semibold text-xl">
        Welcome Back 👋
      </div>
      <div className="flex w-full justify-center mt-2 ">
        Login To Your Account
      </div>
      <div className="w-[80vw] h-[40vh] border border-black ml-[11vw] mt-16 rounded-lg flex flex-col justify-center items-center gap-4">
        <div className="mb-7 text-lg">LOGIN HERE 👇</div>

        <div className="gap-3 flex flex-col">
          <Input placeholder="Email Id" iconName="emailId" mandatory={true} />
          <Input placeholder="Password" iconName="password" mandatory={true} />
          <div className="w-full h-full flex justify-center mt-7"><Button>Login</Button></div>
          <div className="flex flex-row w-full h-full items-center">
            <div className="text-[10px]">Don't have an account?</div>
            <div><Button className="text-blue-700 border-b-0" variant={"link"}>Sign Up</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
