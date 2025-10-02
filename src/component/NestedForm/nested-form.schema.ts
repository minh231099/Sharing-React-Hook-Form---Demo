import * as yup from "yup";

export const netstedFormSchema = yup.object({
  field1: yup.string().required("Field 1 is required"),

  nested: yup.object({
    field2: yup.string().required("Field 2 is required"),
    field3: yup.string().required("Field 3 is required"),
  }),
});

export type NetstedFormValues = yup.InferType<typeof netstedFormSchema>;
