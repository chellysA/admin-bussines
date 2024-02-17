import { FC } from "react";
import InputField from "@/components/fields/InputField";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";

type Props = {};

const SignUp: FC<Props> = () => {
  return (
    <>
      <div className="flex justify-center items-center !bg-lightPrimary dark:!bg-navy-900">
        <FixedPlugin />
        {/* Sign up section */}
        <div className="my-16 flex rounded-xl items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start shadow-xl bg-white dark:bg-navy-700">
          <div className="m-12  mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign up now !
            </h4>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your name, email and password to start!
            </p>
            {/* Name */}
            <InputField
              id="name"
              variant="auth"
              extra="mb-3"
              label="Name"
              placeholder="Enter your Name"
              type="text"
            />

            {/* Email */}
            <InputField
              id="email"
              variant="auth"
              label="Email Address"
              placeholder="mail@simmmple.com"
              type="text"
              extra="mb-3"
            />

            {/* Password */}
            <InputField
              id="password"
              variant="auth"
              extra="mb-3"
              label="Password"
              placeholder="Min. 8 characters"
              type="password"
            />

            <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Sign Up
            </button>

            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Already have an account?
              </span>
              <a
                href=""
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
