export const ERROR_STATUS = Object.freeze({
  FAIL: "fail",
  ERROR: "error",
  ERRORS: "errors",
  UNAUTHORIZED: "UNAUTHORIZED",
});

export const ERROR_MESSAGES = Object.freeze({
  DB_GENERIC: "Ocurrio un error con la base de datos.",
  DB_INVALID_TYPE: "El tipo de dato en la base de datos es invalido.",
  SERVER_FAIL: "Ocurrio un error en el servidor.",
  SERVER_GENERIC: "Algo salio mal :(.",
  NOT_FOUND_GENERIC: "No se encontró el recurso :(.",
  PATH_NOT_FOUND: "Esta ruta no se encontró.",
  EXCEDED_LENGTH: "La longitud fue excedida.",
  VALUE_EXISTS: "El valor del campo ya existe.",
  TOKEN_UNGENERATED: "El token no se genero.",
  INVALID_TOKEN: "Token invalido o manipulado.",
  TOKEN_EXPIRED: "El token expiró, ¡Inicia sesión nuevamente!.",
  UNDECODED: "No se pudo decodificar.",
  SEQUELIZE_SAVE: "Hubo un error al guardar en La base de datos.",
  TYPEORM_DUPLICATE: "Valor duplicado:",
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
    "La contraseña debe tener un mínimo de 10 caracteres y debe estar construida de la siguiente manera: Una mayúscula, una minúscula, un número y un caracter especial.",
  WRONG_PASS: "Contraseña incorrecta.",
  PROFILE_IMG_URL_STRING_FORMAT:
    "La imagen de pefil debe estar en fórmato de texto.",
  PROFILE_IMG_URL_FORMAT: "La imagén de pefil debe ser una URL válida.",
  USER_NOT_EXISTS: "El usuario no se encontro.",
  BCRYPT_ARGS_REQUIRED:
    "Los argumentos para comprobar las contraseñas estan incompletos.",
  ID_TYPE_MISMATCH: "El id debe ser un número.",
  SESSION_NOT_STARTED: "No has iniciado sesión, ¡Por favor inicia sesión!.",
  SESSION_USER_NOT_EXISTS: "El usuario en sesión no existe.",
  USER_PASSWORD_CHANGE: "El usuario cambio recientemente su contraseña.",
  DENIED_ACTION: "Acción denegada. ¡No tienes permisos!",
  ACCOUNT_NOT_YOURS:
    "Esta acción esta protegida para la cuenta propietaria del contenido.",
  CURRENT_PASS_REQUIRED: "La contraseña actual es requerida.",
  CURRENT_PASS_STRING_FORMAT: "La contraseña actual debe ser un texto.",
  NEW_PASS_REQUIRED: "La nueva contraseña es requerida.",
  NEW_PASS_STRING_FORMAT: "La nueva contraseña debe ser un texto.",
  POST_TITLE_REQUIRED: "El título de tu publicación es requerido.",
  POST_TITLE_STRING_FORMAT: "El título de tu publicación debe ser un texto.",
  POST_TITLE_MIN:
    "El título de tu publicación debe ser mínimo de 10 caracteres.",
  POST_CONTENT_REQUIRED: "El contenido de tu publicación es requerido.",
  POST_CONTENT_STRING_FORMAT:
    "El contenido de tu publicación debe ser un texto.",
  POST_CONTENT_MIN:
    "El contenido de tu publicación debe ser mínimo de 50 caracteres.",
  MULTER_EXCEEDED_LIMIT: "El límite de imágenes en tu publicación, es de 5",
  POST_NOT_FOUND: "La publicación que intentas buscar, no existe.",
  COMMENT_REQUIRED: "El comentario es requerido.",
  COMMENT_STRING_FORMAT: "El comentario debe ser un texto.",
  COMMENT_NOT_FOUND: "El comentario no se encontro.",
  FIREBASE_UNAUTHORIZED: "No se pudo cargar el/los fichero/s.",
  IMG_OPTIMIZED_ERROR: "No se pudo optimizar correctamente la imagén debido a un error interno."
});

export const ERROR_TYPES = Object.freeze({
  exceededLength: "22001",
  invalidTypeData: "22P02",
  duplicateValue: "2305",
  typeORMDuplicate: "23505",
  typeORMNullValue: "23502",
  tokenExpired: "TokenExpiredError",
  invalidToken: "JsonWebTokenError",
  sequelizeValidation: "SequelizeValidationError",
  sequelizeDatabase: "SequelizeDatabaseError",
  bcryptArgsRequired: "data and hash arguments required",
  multerExceededLimit: "LIMIT_UNEXPECTED_FILE",
  firestoreUnauthorized: "storage/unauthorized"
});
