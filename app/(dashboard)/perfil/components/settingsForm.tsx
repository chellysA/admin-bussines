import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import ProfileSettingsSchema from "@/data/validations/ProfilesettingsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const ProfleSettingsForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
    },
    resolver: yupResolver(ProfileSettingsSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await ProfileSettingsSchema.validate(data);
      console.log("Datos válidos:", data);
      router.push("/perfil");
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputController
          id="name"
          label="Nombre"
          control={control}
          error={errors.name?.message}
          isError={!!errors.name}
        />
        <InputController
          id="lastName"
          label="Apellido"
          control={control}
          error={errors.lastName?.message}
          isError={!!errors.lastName}
        />
        <InputController
          id="email"
          label="Email"
          control={control}
          error={errors.email?.message}
          isError={!!errors.email}
        />
        <InputController
          id="userName"
          label="Nombre de Usuario"
          control={control}
          error={errors.userName?.message}
          isError={!!errors.userName}
        />
        <InputController
          id="password"
          label="contraseña"
          control={control}
          error={errors.password?.message}
          isError={!!errors.password}
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button
          label="Aplicar Cambios"
          className="px-8"
          title="Aplicar cambios"
          type="submit"
        />
      </div>
    </form>
  );
};
export default ProfleSettingsForm;
