const productDataValidateMiddleware = (schema) => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });

    req.validateBody = validated;

    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export { productDataValidateMiddleware };
