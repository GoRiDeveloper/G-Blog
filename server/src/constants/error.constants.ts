export const ERROR_STATUS = Object.freeze({
  FAIL: "fail",
  ERROR: "error",
  ERRORS: "errors",
  UNAUTHORIZED: "UNAUTHORIZED",
});

export const ERROR_MESSAGES = Object.freeze({
  DB_GENERIC: "Ocurrio un error con la base de datos.",
  DB_INVALID_TYPE: "El Tipo De Dato En La Base De Datos Es Invalido.",
  SERVER_FAIL: "Ocurrio un error en el servidor.",
  SERVER_GENERIC: "Algo salio mal :(.",
  NOT_FOUND_GENERIC: "No se encontró el recurso :(.",
  PATH_NOT_FOUND: "Esta ruta no se encontró.",
  EXCEDED_LENGTH: "La Longitud Fue Excedida.",
  VALUE_EXISTS: "El Valor Del Campo Ya Existe.",
  TOKEN_UNGENERATED: "El token no se genero.",
  INVALID_TOKEN: "Token Invalido O Manipulado.",
  TOKEN_EXPIRED: "El Token Expiro, ¡Inicia Sesión Nuevamente!.",
  UNDECODED: "No se pudo decodificar.",
  SEQUELIZE_SAVE: "Hubo Un Error Al Guardar En La Base De Datos.",
  TYPEORM_DUPLICATE: "Valor Duplicado:",
  KEY_VALUE_INVALID: "Clave/Valor invalido:",
  NAME_REQUIRED: "El nombre es requerido.",
  NAME_WRONG_FORMAT: "El nombre debe estar en fórmato de texto.",
  NAME_MIN_LENGTH: "El nombre completo debe tener un mínimo de 7 caracteres.",
  NAME_FORMAT: "El nombre debe contener solo letras y espacios.",
  EMAIL_REQUIRED: "El email es requerido.",
  EMAIL_STRING_FORMAT: "El email debe estar en fórmato de texto.",
  EMAIL_INVALID: "El email esta en un formato invalido.",
  DESC_REQUIRED: "La descripción es requerida.",
  DESC_WRONG_FORMAT: "La descripción debe estar en fórmato de texto.",
  DESC_MIN_LENGTH: "La descripción debe tener un mínimo de 20 caracteres.",
  PASS_REQUIRED: "La contraseña es requerida.",
  PASS_STRING_FORMAT: "La contraseña debe estar en fórmato de texto.",
  STRONG_PASS:
    "La contraseña debe tener un mínimo de 10 caracteres y debe estar contruida de la siguiente manera: Una mayúscula, una minúscula, un número y un caracter especial.",
  WRONG_PASS: "Contraseña incorrecta.",
  PROFILE_IMG_URL_STRING_FORMAT:
    "La imagen de pefil debe estar en fórmato de texto.",
  PROFILE_IMG_URL_FORMAT: "La imagén de pefil debe ser una URL válida.",
  USER_NOT_EXISTS: "El usuario no se encontro.",
});

export const ERROR_TYPES = Object.freeze({
  exceededLength: "22001",
  invalidTypeData: "22P02",
  duplicateValue: "2305",
  typeORMDuplicate: "23505",
  tokenExpired: "TokenExpiredError",
  invalidToken: "JsonWebTokenEror",
  sequelizeValidation: "SequelizeValidationError",
  sequelizeDatabase: "SequelizeDatabaseError",
});