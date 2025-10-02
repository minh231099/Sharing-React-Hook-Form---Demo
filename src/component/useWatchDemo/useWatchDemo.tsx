import { useForm, useWatch } from "react-hook-form";

export default function UsingUseWatch() {
  const { register, control } = useForm({
    defaultValues: { input: "" },
  });

  console.log("Parent render");

  const value = useWatch({
    control,
    name: "input",
  });

  return (
    <div>
      <input {...register("input")} placeholder="Type something..." />
      <Preview value={value} />
    </div>
  );
}

function Preview({ value }: { value: any }) {
  console.log("Preview re-render");
  return <p>Preview: {value}</p>;
}
