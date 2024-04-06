import { handleValidationErrorsMiddleware } from "../../error-handling/validation-error";
import { validateEmailFormat, validatePasswordComplexity } from "./common";

exports.signInPipe = [validateEmailFormat, validatePasswordComplexity, handleValidationErrorsMiddleware];
