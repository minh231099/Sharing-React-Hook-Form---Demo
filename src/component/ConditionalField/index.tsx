import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  conditionalFormSchema,
  ConditionalFormValues,
} from "./conditional-form.schema";

export interface ConditionalFormProps {
  onSubmit: (formValues: ConditionalFormValues) => void;
}

const ConditionalForm: React.FC<ConditionalFormProps> = (props) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ConditionalFormValues>({
    resolver: yupResolver(conditionalFormSchema) as any,
  });

  const choice = watch("choice");

  const handleFormSubmit = (data: ConditionalFormValues) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-600 text-center">
        Conditional Form
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Field A</label>
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
        <p className="mb-1 font-semibold">Show Field B?</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              {...register("choice")}
              className="accent-indigo-600"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="no"
              {...register("choice")}
              className="accent-indigo-600"
            />
            No
          </label>
        </div>
        {errors.choice && (
          <p className="text-red-500 text-sm">{errors.choice.message}</p>
        )}
      </div>

      {choice === "yes" && (
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Field B</label>
          <input
            {...register("fieldB")}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter Field B"
          />
          {errors.fieldB && (
            <p className="text-red-500 text-sm">{errors.fieldB.message}</p>
          )}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ConditionalForm;
