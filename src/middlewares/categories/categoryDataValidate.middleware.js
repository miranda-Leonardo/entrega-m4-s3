const categoryDataValidateMiddleware = (schema) => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });

    req.validateBody = validated;

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export { categoryDataValidateMiddleware };
