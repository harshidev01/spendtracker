/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { cn } from "@/lib/utils";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { FaAsterisk } from "react-icons/fa";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: string;
  mandatory?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconName, mandatory, ...props }, ref) => {
    function getIcon(): any {
      if (iconName === "emailId") {
        return <MdOutlineEmail className="w-4 h-4" />;
      } else if (iconName === "password") {
        return <IoKeyOutline className="w-4 h-4" />;
      }
    }

    return (
      <div className="flex flex-row w-fit h-9 items-center gap-1">
        <div className="h-9 flex items-center gap-2 border rounded-md w-fit px-2  focus-within:ring-1 focus-within:ring-ring ">
          <div> {iconName && getIcon()}</div>
          <div>
            <input
              type={type}
              className={cn("flex h-full  outline-none ", className)}
              ref={ref}
              {...props}
            />
          </div>
        </div>
        <div>{mandatory ? <FaAsterisk className="text-destructive h-2 w-2" /> : null}</div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
