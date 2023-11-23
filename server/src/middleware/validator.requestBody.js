export const validateSchemaRequest = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    const errorMessages = error.errors.map((e) => e.message);
    return res.status(400).json({ error: errorMessages });
  }
};
