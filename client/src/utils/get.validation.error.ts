import type { TypeWithKey } from "@/models";

export const getValidationError = (err: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Error de conexión",
    "El usuario no se encontro.": "El usuario no se encontro.",
    "Ocurrio un error con la base de datos.":
      "Ocurrio un error con la base de datos.",
    "El tipo de dato en la base de datos es invalido.":
      "El tipo de dato en la base de datos es invalido.",
    "Ocurrio un error en el servidor.": "Ocurrio un error en el servidor.",
    "Algo salio mal :(.": "Algo salio mal :(.",
    "No se encontró el recurso :(.": "No se encontró el recurso :(.",
    "Esta ruta no se encontró.": "Esta ruta no se encontró.",
    "La longitud fue excedida.": "",
    "El valor del campo ya existe.": "Esta ruta no se encontró.",
    "El token no se genero.": "El token no se genero.",
    "Token invalido o manipulado.": "Token invalido o manipulado.",
    "El token expiró, ¡Inicia sesión nuevamente!.":
      "El token expiró, ¡Inicia sesión nuevamente!.",
    "No se pudo decodificar.": "No se pudo decodificar.",
    "Hubo un error al guardar en La base de datos.":
      "Hubo un error al guardar en La base de datos.",
    "Valor duplicado:": "Valor duplicado",
    "Clave/Valor invalido:": "Clave/Valor invalido",
    "El nombre es requerido.": "El nombre es requerido.",
    "El nombre debe estar en fórmato de texto.":
      "El nombre debe estar en fórmato de texto.",
    "El nombre completo debe tener un mínimo de 7 caracteres.":
      "El nombre completo debe tener un mínimo de 7 caracteres.",
    "El nombre debe contener solo letras y espacios.":
      "El nombre debe contener solo letras y espacios.",
    "El email es requerido.": "El email es requerido.",
    "El email debe estar en fórmato de texto.":
      "El email debe estar en fórmato de texto.",
    "El email esta en un formato invalido.":
      "El email esta en un formato invalido.",
    "La descripción es requerida.": "La descripción es requerida.",
    "La descripción debe estar en fórmato de texto.":
      "La descripción debe estar en fórmato de texto.",
    "La descripción debe tener un mínimo de 20 caracteres.":
      "La descripción debe tener un mínimo de 20 caracteres.",
    "La contraseña es requerida.": "La contraseña es requerida.",
    "La contraseña debe estar en fórmato de texto.":
      "La contraseña debe estar en fórmato de texto.",
    "La contraseña debe tener un mínimo de 10 caracteres y debe estar construida de la siguiente manera: Una mayúscula, una minúscula, un número y un caracter especial.":
      "La contraseña debe tener un mínimo de 10 caracteres y debe estar construida de la siguiente manera: Una mayúscula, una minúscula, un número y un caracter especial.",
    "Contraseña incorrecta.": "Contraseña incorrecta.",
    "La imagen de pefil debe estar en fórmato de texto.":
      "La imagen de pefil debe estar en fórmato de texto.",
    "La imagén de pefil debe ser una URL válida.":
      "La imagén de pefil debe ser una URL válida.",
    "Los argumentos para comprobar las contraseñas estan incompletos.":
      "Los argumentos para comprobar las contraseñas estan incompletos.",
    "El id debe ser un número.": "El id debe ser un número.",
    "No has iniciado sesión, ¡Por favor inicia sesión!.":
      "No has iniciado sesión, ¡Por favor inicia sesión!.",
    "El usuario en sesión no existe.": "El usuario en sesión no existe.",
    "El usuario cambio recientemente su contraseña.":
      "El usuario cambio recientemente su contraseña.",
    "Acción denegada. ¡No tienes permisos!":
      "Acción denegada. ¡No tienes permisos!",
    "Esta acción esta protegida para la cuenta propietaria del contenido.":
      "Esta acción esta protegida para la cuenta propietaria del contenido.",
    "La contraseña actual es requerida.": "La contraseña actual es requerida.",
    "La contraseña actual debe ser un texto.":
      "La contraseña actual debe ser un texto.",
    "La nueva contraseña es requerida.": "La nueva contraseña es requerida.",
    "La nueva contraseña debe ser un texto.":
      "La nueva contraseña debe ser un texto.",
    "El título de tu publicación es requerido.":
      "El título de tu publicación es requerido.",
    "El título de tu publicación debe ser un texto.":
      "El título de tu publicación debe ser un texto.",
    "El título de tu publicación debe ser mínimo de 10 caracteres.":
      "El título de tu publicación debe ser mínimo de 10 caracteres.",
    "El contenido de tu publicación es requerido.":
      "El contenido de tu publicación es requerido.",
    "El contenido de tu publicación debe ser un texto.":
      "El contenido de tu publicación debe ser un texto.",
    "El contenido de tu publicación debe ser mínimo de 50 caracteres.":
      "El contenido de tu publicación debe ser mínimo de 50 caracteres.",
    "El límite de imágenes en tu publicación, es de 5":
      "El límite de imágenes en tu publicación, es de 5",
    "La publicación que intentas buscar, no existe.":
      "La publicación que intentas buscar, no existe.",
    "El comentario es requerido.": "El comentario es requerido.",
    "El comentario debe ser un texto.": "El comentario debe ser un texto.",
    "El comentario no se encontro.": "El comentario no se encontro.",
    "No se pudo cargar el/los fichero/s.": "No se pudo cargar el/los fichero/s."
  };
  return codeMatcher[err];
};
