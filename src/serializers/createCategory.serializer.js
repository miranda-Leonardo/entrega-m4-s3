import * as yup from "yup";

const createCategorySchema = yup.object().shape({
  name: yup.string().max(200).required(),
});

export { createCategorySchema };
