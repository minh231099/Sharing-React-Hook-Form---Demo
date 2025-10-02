import * as yup from "yup";

export const conditionalFormSchema = yup.object({
  fieldA: yup.string().required("Field A is required"),

  choice: yup.string().required("You must choose Yes or No"),

  fieldB: yup.string().when("choice", {
    is: "yes",
    then: (schema) => schema.required("Field B is required"),
    otherwise: (schema) => schema.optional(),
  }),
});

export type ConditionalFormValues = yup.InferType<typeof conditionalFormSchema>;
