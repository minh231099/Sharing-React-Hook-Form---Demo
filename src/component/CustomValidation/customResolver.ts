import { Resolver } from "react-hook-form";

export interface FormValues {
  fieldA: string;
  fieldB: string;
  fieldC: number;
  fieldD: {
    subField: string;
  };
}

export const customResolver: Resolver<FormValues> = async (values) => {
  const errors: any = {};

  if (!values.fieldA) {
    errors.fieldA = {
      type: "required",
      message: "Field A is required",
    };
  }

  if (!values.fieldB) {
    errors.fieldB = {
      type: "required",
      message: "Field B is required",
    };
  } else if (values.fieldB.length < 3) {
    errors.fieldB = {
      type: "minLength",
      message: "Field B must be at least 3 characters",
    };
  }

  if (!values.fieldC) {
    errors.fieldC = {
      type: "required",
      message: "Field C is required",
    };
  } else if (values.fieldC < 1) {
    errors.fieldC = {
      type: "min",
      message: "Field C must be greater than 0",
    };
  }

  if (!values.fieldD?.subField) {
    errors.fieldD = {
      subField: {
        type: "required",
        message: "Sub Field in Field D is required",
      },
    };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};
