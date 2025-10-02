import React from "react";
import { useForm } from "react-hook-form";
import { customResolver, FormValues } from "./customResolver";

interface CustomFormProps {
  onSubmit: (data: FormValues) => void;
}

const CustomForm: React.FC<CustomFormProps> = (props) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: customResolver,
  });

  const handleSubmitForm = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Custom Form</h2>

      <div className="mb-4">
        <label className="block font-semibold">Field A</label>
        <input
          {...register("fieldA")}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter Field A"
        />
        {errors.fieldA && (
          <p className="text-red-500 text-sm">{errors.fieldA.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Field B</label>
        <input
          {...register("fieldB")}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter Field B"
        />
        {errors.fieldB && (
          <p className="text-red-500 text-sm">{errors.fieldB.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Field C</label>
        <input
          {...register("fieldC", { valueAsNumber: true })}
          type="number"
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter Field C"
        />
        {errors.fieldC && (
          <p className="text-red-500 text-sm">{errors.fieldC.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Field D: Sub Field</label>
        <input
          {...register("fieldD.subField")}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter Sub Field"
        />
        {errors.fieldD?.subField && (
          <p className="text-red-500 text-sm">
            {errors.fieldD.subField.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
