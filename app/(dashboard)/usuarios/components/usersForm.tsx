import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import Select from "@/components/select";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const UsersForm = (props: Props) => {
  const { isReadOnly = false, buttonLabel = "", buttonTitle } = props;
  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputField label="Nombre" disabled={isReadOnly && true} />
        <InputField label="Apellido" disabled={isReadOnly && true} />
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Cargo
          </p>
          <Select
            label="Administrador"
            options={[]}
            disabled={isReadOnly && true}
          />
        </div>
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Cede
          </p>
          <Select label="cede 1" options={[]} disabled={isReadOnly && true} />
        </div>
        <InputField label="Email" disabled={isReadOnly && true} />
        <InputField label="Nombre de Usuario" disabled={isReadOnly && true} />
        <InputField label="Contraseña" disabled={isReadOnly && true} />
        <InputField label="Fecha de Ingreso" disabled={isReadOnly && true} />
      </div>
      {!isReadOnly && (
        <div className="flex justify-end mt-8">
          <Button label={buttonLabel} className="px-8" title={buttonTitle} />
        </div>
      )}
    </form>
  );
};
export default UsersForm;
