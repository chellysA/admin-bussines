"use client";
import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateUsersSchema from "@/data/validations/Create-users-schema";
import { useRouter } from "next/navigation";
import SelectController from "@/components/select/SelectController";
import InputDocumentController from "@/components/fields/InputDocumentController";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const UsersForm = (props: Props) => {
  const form = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      sede: "",
      rol: "",
      document: "",
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
          disabled={isReadOnly}
          label="Nombre"
          control={control}
          isError={!!errors.name}
          error={errors.name?.message}
        />
        <InputController
          id="apellido"
          disabled={isReadOnly}
          label="Apellido"
          control={control}
          isError={!!errors.lastName}
          error={errors.lastName?.message}
        />
        <SelectController
          id="rol"
          placeholder="Selecciona un cargo"
          label="Cargo"
          options={["1", "2"]}
          disabled={isReadOnly}
          control={control}
          isError={!!errors.rol}
          error={errors.rol?.message}
        />
        <SelectController
          id="sede"
          placeholder="Selecciona una sede"
          label="Sede"
          options={["1", "2"]}
          disabled={isReadOnly}
          control={control}
          isError={!!errors.sede}
          error={errors.sede?.message}
        />
        <InputController
          id="email"
          disabled={isReadOnly}
          label="Email"
          control={control}
          isError={!!errors.email}
          error={errors.email?.message}
        />
        <InputController
          id="userName"
          disabled={isReadOnly}
          label="Nombre de Usuario"
          control={control}
          isError={!!errors.userName}
          error={errors.userName?.message}
        />
        <InputController
          id="password"
          disabled={isReadOnly}
          label="Contraseña"
          control={control}
          isError={!!errors.password}
          error={errors.password?.message}
        />
        <InputDocumentController
          id="document"
          label="Documento"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.document}
          error={errors.document?.message}
        />
        {/* Agregar input de calendario */}
        {/* <InputController
          id="admissionDate"
          disabled={isReadOnly}
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
