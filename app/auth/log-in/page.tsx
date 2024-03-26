"use client";
import { FC } from "react";
import Checkbox from "@/components/checkbox/Checkbox";
import Button from "@/components/button";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import InputController from "@/components/fields/InputController";
import { yupResolver } from "@hookform/resolvers/yup";
import LogInSchema from "@/data/validations/Log-in-schema";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

type Props = {};

const LogIn: FC<Props> = () => {
  const router = useRouter();
  const { login } = useAuth();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LogInSchema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = async (data: any) => {
    console.log(data);
    login(data, {
      onSuccess: async () => {
        toast.success("Bienvenido!");
        await new Promise((resolve) => setTimeout(resolve, 3000));
        router.push("/dashboard");
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Sign in section */}

        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Ingresa
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Ingresa tu email y contraseña para acceder!
        </p>

        {/* Email */}
        <InputController
          variant="auth"
          className="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          control={control}
          isError={!!errors.email}
          error={errors.email?.message}
        />

        {/* Password */}
        <InputController
          variant="auth"
          className="mb-3"
          label="Contraseña*"
          placeholder="Min. 8 caracteres"
          id="password"
          type="password"
          control={control}
          isError={!!errors.password}
          error={errors.password?.message}
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

        <Button label="Ingresar" variant="full" type="submit" />

        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            No estas registrado aún?
          </span>
          <Link
            href="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
          >
            Crea una cuenta
          </Link>
        </div>
      </form>
    </>
  );
};

export default LogIn;
