import { FC } from "react";
import InputField from "@/components/fields/InputField";
import Checkbox from "@/components/checkbox";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";
import Button from "@/components/button";

type Props = {};

const LogIn: FC<Props> = () => {
  return (
    <>
      {/* Sign in section */}

      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
        Ingresa
      </h4>
      <p className="mb-9 ml-1 text-base text-gray-600">
        Ingresa tu email y contraseña para acceder!
      </p>

      {/* Email */}
      <InputField
        variant="auth"
        className="mb-3"
        label="Email*"
        placeholder="mail@simmmple.com"
        id="email"
        type="text"
      />

      {/* Password */}
      <InputField
        variant="auth"
        className="mb-3"
        label="Contraseña*"
        placeholder="Min. 8 caracteres"
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
      </div>
      <a
        className="block mt-6 text-sm text-center font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
        href=""
      >
        Olvidaste tu contraseña?
      </a>
      <Button label="Ingresar" variant="full" />

      <div className="mt-4">
        <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
          No estas registrado aún?
        </span>
        <a
          href=" "
          className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Crea una cuenta
        </a>
      </div>
    </>
  );
};

export default LogIn;
