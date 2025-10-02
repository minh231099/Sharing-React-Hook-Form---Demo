import * as yup from "yup";

export const formArraySchema = yup.object({
  items: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required("Name is required"),
      })
    )
    .max(5, "Maximum 5 items allowed"),
});

export type FormArrayValues = yup.InferType<typeof formArraySchema>;
