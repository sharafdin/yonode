import { body, validationResult } from "express-validator";

export const validateUserRegister = [
  [
    body("email").isEmail().withMessage("Invalid email").normalizeEmail(), // This takes care of converting the email to lowercase among other things
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateUserLogin = [
  [
    body("email").isEmail().withMessage("Invalid email").normalizeEmail(), // Normalizes the email to lowercase
    body("password").exists().withMessage("Password is required"),
  ],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
]
