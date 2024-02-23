import InputField from "@/components/fields/InputField";
import Select from "@/components/select";

const UsersForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
      <InputField label="Nombre" />
      <InputField label="Apellido" />
      <div>
        <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
          Cargo
        </p>
        <Select label="Administrador" options={[]} />
      </div>
      <div>
        <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
          Cede
        </p>
        <Select label="cede 1" options={[]} />
      </div>
      <InputField label="Email" />
      <InputField label="Nombre de Usuario" />
      <InputField label="Contraseña" />
      <InputField label="Fecha de Ingreso" />
    </div>
  );
};
export default UsersForm;
