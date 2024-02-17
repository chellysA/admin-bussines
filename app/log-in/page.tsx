import { FC } from "react";
import InputField from "@/components/fields/InputField";
import Checkbox from "@/components/checkbox";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";

type Props = {};

const LogIn: FC<Props> = () => {
  return (
    <>
      <div className="flex justify-center items-center !bg-lightPrimary dark:!bg-navy-900">
        <FixedPlugin />
        <div className="my-16 flex rounded-xl items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start shadow-xl bg-white dark:bg-navy-700">
          {/* Sign in section */}
          <div className="m-12  mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Ingresa
            </h4>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Ingresa tu email y contraseña para acceder!
            </p>

            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Contraseña*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
            />

            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center">
                <Checkbox id="remember-me" />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm font-medium text-navy-700 dark:text-white"
                >
                  Mantener sesion abierta
                </label>
              </div>
              <a
                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=""
              >
                Olvidaste tu contraseña?
              </a>
            </div>

            <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Ingresar
            </button>

            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <a
                href=" "
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
