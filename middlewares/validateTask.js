const Joi = require('joi');

const TASK = Joi.object({
  task: Joi.string().min(10).required()
    .messages({
      required: '"task" is required',
      pattern: '"task" length must be at least 10 characters long',
    }),
  status: Joi.string().min(5).required()
    .messages({
      required: '"status" is required',
      pattern: '"status" length must be at least 5 characters long',
    }),
});

const validateTask = (req, res, next) => {
  const { task, status } = req.body;

  const { error } = TASK.validate({ task, status });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = validateTask;