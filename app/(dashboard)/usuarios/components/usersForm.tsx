"use client";
import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateUsersSchema from "@/data/validations/Create-users-schema";
import { useRouter } from "next/navigation";
import SelectController from "@/components/select/SelectController";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const UsersForm = (props: Props) => {
  const form = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      userName: "",
      password: "",
      sede: "",
      rol: "",
    },
    resolver: yupResolver(CreateUsersSchema),
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;
  const router = useRouter();
  const { isReadOnly = false, buttonLabel = "", buttonTitle } = props;

  const onSubmit = async (data: any) => {
    try {
      await CreateUsersSchema.validate(data);
      console.log("Datos válidos:", data);
      router.push("/usuarios");
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputController
          id="nombre"
          disabled={isReadOnly && true}
          label="Nombre"
          control={control}
          isError={!!errors.nombre}
          error={errors.nombre?.message}
        />
        <InputController
          id="apellido"
          disabled={isReadOnly && true}
          label="Apellido"
          control={control}
          isError={!!errors.apellido}
          error={errors.apellido?.message}
        />
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Cargo
          </p>
          <SelectController
            id="rol"
            label="Administrador"
            options={["1", "2"]}
            disabled={isReadOnly && true}
            control={control}
            isError={!!errors.rol}
            error={errors.rol?.message}
          />
        </div>
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Sede
          </p>
          <SelectController
            id="sede"
            label="Sede 1"
            options={["1", "2"]}
            disabled={isReadOnly && true}
            control={control}
            isError={!!errors.sede}
            error={errors.sede?.message}
          />
        </div>
        <InputController
          id="email"
          disabled={isReadOnly && true}
          label="Email"
          control={control}
          isError={!!errors.email}
          error={errors.email?.message}
        />
        <InputController
          id="userName"
          disabled={isReadOnly && true}
          label="Nombre de Usuario"
          control={control}
          isError={!!errors.userName}
          error={errors.userName?.message}
        />
        <InputController
          id="password"
          disabled={isReadOnly && true}
          label="Contraseña"
          control={control}
          isError={!!errors.password}
          error={errors.password?.message}
        />
        {/* Agregar input de calendario */}
        {/* <InputController
          id="admissionDate"
          disabled={isReadOnly && true}
          label="Fecha de ingreso"
          control={control}
          isError={!!errors.admissionDate}
          error={errors.admissionDate?.message}
        /> */}
      </div>
      {!isReadOnly && (
        <div className="flex justify-end mt-8">
          <Button
            label={buttonLabel}
            className="px-8"
            title={buttonTitle}
            type="submit"
          />
        </div>
      )}
    </form>
  );
};
export default UsersForm;
