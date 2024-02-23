import { FC } from "react";
import InputField from "@/components/fields/InputField";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";
import Link from "next/link";

type Props = {};

const SignUp: FC<Props> = () => {
  return (
    <>
      {/* Sign up section */}
      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
        Registrate ahora!
      </h4>
      <p className="mb-9 ml-1 text-base text-gray-600">
        Ingresa tus datos para iniciar!
      </p>
      {/* Name */}
      <InputField
        id="name"
        variant="auth"
        className="mb-3"
        label="Nombre"
        placeholder="Ingresa tu nombre"
        type="text"
      />

      {/* Email */}
      <InputField
        id="email"
        variant="auth"
        label="Email Address"
        placeholder="mail@simmmple.com"
        type="text"
        className="mb-3"
      />

      {/* Password */}
      <InputField
        id="password"
        variant="auth"
        className="mb-3"
        label="Contraseña"
        placeholder="Min. 8 characters"
        type="password"
      />
      <InputField
        id="confirm-password"
        variant="auth"
        className="mb-3"
        label="Confirma contraseña"
        placeholder="Min. 8 caracteres"
        type="password"
      />

      <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Registrar
      </button>

      <div className="mt-4">
        <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
          Ya tienes una cuenta?
        </span>
        <Link
          href="/auth/log-in"
          className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Ingresar
        </Link>
      </div>
    </>
  );
};

export default SignUp;
