import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formArraySchema, FormArrayValues } from "./form-array.schema";

interface FormArrayProps {
  onSubmit: (data: FormArrayValues) => void;
}

const FormArray: React.FC<FormArrayProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormArrayValues>({
    defaultValues: { items: [{ name: "" }] },
    resolver: yupResolver(formArraySchema) as any,
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const handleAdd = () => {
    if (fields.length < 5) append({ name: "" });
  };

  const handleRemove = (index: number) => {
    if (fields.length > 1) remove(index);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg min-w-[350px]"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-600 text-center">
        Form Array
      </h2>

      {fields.map((field, index) => (
        <div className="mb-4">
          <div key={field.id} className="flex items-center">
            <input
              {...register(`items.${index}.name` as const)}
              placeholder={`Item ${index + 1}`}
              className="flex-1 border px-3 py-2 rounded"
            />
            <button
              type="button"
              disabled={fields.length <= 1}
              onClick={() => handleRemove(index)}
              className="text-red-500 bg-transparent px-3 py-1 rounded text-[20px] text-center disabled:hidden"
            >
              x
            </button>
          </div>
          {errors.items?.[index]?.name && (
            <p className="text-red-500 text-sm">
              {errors.items[index]?.name?.message}
            </p>
          )}
        </div>
      ))}

      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={handleAdd}
          disabled={fields.length >= 5}
          className=" text-green-500 px-4 py-2 bg-transparent rounded disabled:opacity-50 font-bold"
        >
          + Add Item
        </button>
      </div>

      {typeof errors.items?.message === "string" && (
        <p className="text-red-500 text-sm mb-2">{errors.items.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FormArray;
