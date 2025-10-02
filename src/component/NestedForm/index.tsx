import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { netstedFormSchema, NetstedFormValues } from "./nestedForm.schema";

interface NetstedFormProps {
  onSubmit: (formValues: NetstedFormValues) => void;
}

const NetstedForm: React.FC<NetstedFormProps> = (props) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NetstedFormValues>({
    resolver: yupResolver(netstedFormSchema),
  });

  const handleFormSubmit = (data: NetstedFormValues) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        Netsted Form
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Field 1
        </label>
        <input
          {...register("field1")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
          placeholder="Enter Field 1"
        />
        {errors.field1 && (
          <p className="text-sm text-red-500 mt-1">{errors.field1.message}</p>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Nested</h3>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Field 2
          </label>
          <input
            {...register("nested.field2")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
            placeholder="Enter Field 2"
          />
          {errors.nested?.field2 && (
            <p className="text-sm text-red-500 mt-1">
              {errors.nested.field2.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Field 3
          </label>
          <input
            {...register("nested.field3")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
            placeholder="Enter Field 3"
          />
          {errors.nested?.field3 && (
            <p className="text-sm text-red-500 mt-1">
              {errors.nested.field3.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg shadow-md transition"
      >
        {"Submit"}
      </button>
    </form>
  );
};

export default NetstedForm;
