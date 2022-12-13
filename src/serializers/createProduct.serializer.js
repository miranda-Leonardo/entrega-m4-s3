import * as yup from "yup";

const createProductSerializer = yup.object().shape({
  name: yup.string().max(200).required(),
  price: yup.number().required(),
  category_id: yup.number().required(),
});

export { createProductSerializer };
