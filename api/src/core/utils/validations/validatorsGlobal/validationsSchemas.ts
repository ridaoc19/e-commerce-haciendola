import * as Yup from 'yup';

const userSchemas: { [key: string]: Yup.Schema } = {
  user_id: Yup.string(),
  email: Yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
  newEmail: Yup.string()
    .email('El formato del correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
  tokenEmail: Yup.string()
    .required('Existe un problema en la validación del correo, solicita nuevamente el cambio de correo electrónico o después de 10 minutos de la solicitud se cancela el cambio de correo'),
  password: Yup.string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(15, 'La contraseña debe tener máximo 15 caracteres'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   'La contraseña debe contener al menos una letra, un número y un carácter especial (@$!%*?&)'
  // ),
  newPassword: Yup.string(),
  name: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'Ingrese al menos 2 caracteres para el nombre')
    .max(50, 'Ingrese máximo 50 caracteres para el nombre'),
  lastName: Yup.string()
    .required('El apellido es obligatorio')
    .min(2, 'Ingrese al menos 2 caracteres para el apellido')
    .max(50, 'Ingrese máximo 50 caracteres para el apellido'),
  phone: Yup.string()
    .required('El número telefónico es obligatorio')
    .min(7, 'Ingrese al menos 7 dígitos para el número telefónico')
    .max(15, 'Ingrese máximo 15 dígitos para el número telefónico')
    .matches(/^[0-9]+$/, 'Ingrese solo números para el número telefónico'),
  token: Yup.string()
    .required('Por favor inicie sesión nuevamente'),
  roles: Yup.string()
    .required('Debe seleccionar uno de los roles aceptados'),
}

const advertisingSchemas: { [key: string]: Yup.Schema } = {
  page: Yup.string()
    .required('Debe ingresar un page')
    .min(2, 'Ingrese al menos 2 caracteres para el page')
    .max(50, 'Ingrese máximo 50 caracteres para el page'),
  location: Yup.string()
    .required('Debe ingresar un location')
    .min(2, 'Ingrese al menos 2 caracteres para el location')
    .max(50, 'Ingrese máximo 50 caracteres para el location'),
  title: Yup.string()
    .required('Debe ingresar un title')
    .min(2, 'Ingrese al menos 2 caracteres para el title')
    .max(50, 'Ingrese máximo 50 caracteres para el title'),
  redirect: Yup.string()
    .required('Debe ingresar un redirect')
    .min(2, 'Ingrese al menos 2 caracteres para el redirect')
    .max(400, 'Ingrese máximo 400 caracteres para el redirect'),
  text: Yup.string()
    .required('Debe ingresar un text')
    .min(2, 'Ingrese al menos 2 caracteres para el text')
    .max(50, 'Ingrese máximo 50 caracteres para el text'),
  image_desktop: Yup.string()
    .required('Debe ingresar un image_desktop'),
  image_tablet: Yup.string(),
  image_phone: Yup.string(),
}

const productSchemas: { [key: string]: Yup.Schema } = {
  category: Yup.string()
  .required('Debe ingresar una categoría')
  .min(2, 'Ingrese al menos 2 caracteres para la categoría')
  .max(50, 'Ingrese máximo 50 caracteres para la categoría'),

product: Yup.string()
  .required('Debe ingresar un producto')
  .min(2, 'Ingrese al menos 2 caracteres para el producto')
  .max(80, 'Ingrese máximo 80 caracteres para el producto'),

description: Yup.string()
  .required('Debe ingresar una descripción')
  .min(20, 'Ingrese al menos 20 caracteres para la descripción'),

barcode: Yup.string()
  .required('Debe ingresar un código de barras')
  .min(2, 'Ingrese al menos 2 caracteres para el código de barras')
  .max(50, 'Ingrese máximo 50 caracteres para el código de barras'),

handle: Yup.string()
  .required('Debe ingresar un identificador')
  .min(2, 'Ingrese al menos 2 caracteres para el identificador')
  .max(50, 'Ingrese máximo 50 caracteres para el identificador'),

listPrice: Yup.number()
  .required('El precio total es obligatorio')
  .min(1, 'Ingrese al menos $1 para el precio total')
  .max(100000000, 'Ingrese máximo $100.000.000 para el precio total')
  .typeError('Ingrese un valor numérico para el precio total'),

price: Yup.number()
  .required('El precio es obligatorio')
  .min(10, 'Ingrese al menos $10 para el precio')
  .max(100000000, 'Ingrese máximo $100.000.000 para el precio')
  .typeError('Ingrese un valor numérico para el precio'),

grams: Yup.number()
  .required('Los gramos son obligatorios')
  .min(1, 'Ingrese al menos 1 gramos')
  .max(100000, 'Ingrese máximo 100000 gramos')
  .typeError('Ingrese un valor numérico para los gramos'),

stock: Yup.number()
  .required('El stock es obligatorio')
  .min(1, 'Ingrese al menos 1 para el stock')
  .max(5000, 'Ingrese máximo 5000 para el stock')
  .typeError('Ingrese un valor numérico para el stock'),

sku: Yup.string()
  .required('Debe ingresar un SKU')
  .min(2, 'Ingrese al menos 2 caracteres para el SKU')
  .max(50, 'Ingrese máximo 50 caracteres para el SKU'),

images: Yup.array()
}

const validationSchemas = { ...advertisingSchemas, ...userSchemas, ...productSchemas };

export { validationSchemas };
