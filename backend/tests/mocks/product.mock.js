const NAME_MOCK = 'name test'
const BRAND_MOCK = 'brand test'
const MODEL_MOCK = 'model test'
const PRICE_MOCK = 1000
const COLOR_MOCK = 'color test'
const ID_MOCK = 1

const NAME2_MOCK = 'name2 test'
const BRAND2_MOCK = 'brand2 test'
const MODEL2_MOCK = 'model2 test'
const PRICE2_MOCK = 2000
const COLOR2_MOCK = 'color2 test'
const ID2_MOCK = 2

const PRODUCTS_FROM_DB_MOCK = [
  {
    id: ID_MOCK,
    name: NAME_MOCK,
    brand: BRAND_MOCK,
    model: MODEL_MOCK,
    price: PRICE_MOCK,
    color: COLOR_MOCK
  },
  {
    id: ID2_MOCK,
    name: NAME2_MOCK,
    brand: BRAND2_MOCK,
    model: MODEL2_MOCK,
    price: PRICE2_MOCK,
    color: COLOR2_MOCK
  }
]

const PRODUCT_FROM_DB_MOCK = {
  id: ID_MOCK,
  name: NAME_MOCK,
  brand: BRAND_MOCK,
  model: MODEL_MOCK,
  price: PRICE_MOCK,
  color: COLOR_MOCK
}

const PRODUCT_INVALID_FORM_STRUCTURE_1_MOCK = {
  brand: BRAND_MOCK,
  model: MODEL_MOCK,
  price: PRICE_MOCK,
  color: COLOR_MOCK
};

const PRODUCT_UPDATE_INVALID_FORM_MOCK = {
  id: ID_MOCK,
  brand: BRAND_MOCK,
  model: MODEL_MOCK,
  price: PRICE_MOCK,
  color: COLOR_MOCK
}

const PRODUCT_FORM_STRUCTURE_1_MOCK = {
  name: NAME_MOCK,
  brand: BRAND_MOCK,
  model: MODEL_MOCK,
  price: PRICE_MOCK,
  color: COLOR_MOCK
};

const PRODUCT_FORM_STRUCTURE_2_MOCK = {
  name: NAME_MOCK,
  price: PRICE_MOCK,
  details: {
    brand: BRAND_MOCK,
    model: MODEL_MOCK,
    color: COLOR_MOCK
  }
};

const PRODUCT_FORM_STRUCTURE_3_MOCK = [
  {
    name: NAME_MOCK,
    brand: BRAND_MOCK,
    model: MODEL_MOCK,
    data: [
      {
        price: PRICE_MOCK,
        color: COLOR_MOCK
      }
    ]
  },
];

const PRODUCT_INVALID_FORM_STRUCTURE_3_MOCK = [
  {
    brand: BRAND_MOCK,
    model: MODEL_MOCK,
    data: [
      {
        price: PRICE_MOCK,
        color: COLOR_MOCK
      }
    ]
  },
];

const RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK = {
  id: ID_MOCK,
  name: NAME_MOCK,
  price: PRICE_MOCK,
  model: MODEL_MOCK,
  brand: BRAND_MOCK,
  color: COLOR_MOCK,
  userId: ID_MOCK,
}

const RETURN_PRODUCT_CREATE_STRUCTURE_1_OTHER_VALUES_MOCK = {
  id: ID2_MOCK,
  name: NAME2_MOCK,
  price: PRICE2_MOCK,
  model: MODEL2_MOCK,
  brand: BRAND2_MOCK,
  color: COLOR2_MOCK,
  userId: ID_MOCK,
}

const RETURN_PRODUCT_UPDATE_MOCK = {
  id: ID_MOCK,
  name: NAME_MOCK,
  price: PRICE_MOCK,
  model: MODEL_MOCK,
  brand: BRAND_MOCK,
  color: COLOR_MOCK,
}

const RETURN_PRODUCT_CREATE_STRUCTURE_3_MOCK = [
  RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK,
]

const SUCCESS_CREATE_PRODUCT_STRUCTURE_1 = {
  status: 201,
  data: RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK
}

const SUCCESS_CREATE_PRODUCT_STRUCTURE_2 = {
  status: 201,
  data: RETURN_PRODUCT_CREATE_STRUCTURE_3_MOCK
}

const SUCCESS_CREATE_PRODUCT_STRUCTURE_3 = {
  status: 201,
  data: RETURN_PRODUCT_CREATE_STRUCTURE_3_MOCK
}

const SUCCESS_UPDATE_PRODUCT_STRUCTURE_1 = {
  status: 200,
  data: RETURN_PRODUCT_UPDATE_MOCK
}

const SUCCESS_GET_ALL_PRODUCTS = {
  status: 200,
  data: PRODUCTS_FROM_DB_MOCK
}

const SUCCESS_DELETE_PRODUCT_MOCK = {
  status: 204,
  data: {},
}

const GET_ALL_PRODUCTS_ERROR_NOT_TOKEN = {
  status: 401,
  data: {
    error: 'Unauthorized',
    message: 'Token not found',
  }
}

const GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN = {
  status: 401,
  data: {
    error: 'Unauthorized',
    message: 'Expired or invalid token',
  }
}

const DATA_VALIDATION_MOCK = {
  status: 400,
  data: {
    error: 'Data validation',
    message: '"name" is required',
  }
}

const DATA_VALIDATION_STRUCTURE_3_MOCK = {
  status: 400,
  data: {
    error: 'Data validation',
    message: '"[0].name" is required',
  }
}

module.exports = {
  PRODUCT_FROM_DB_MOCK,
  PRODUCT_FORM_STRUCTURE_1_MOCK,
  PRODUCTS_FROM_DB_MOCK,
  RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK,
  SUCCESS_GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR_NOT_TOKEN,
  GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN,
  SUCCESS_CREATE_PRODUCT_STRUCTURE_1,
  SUCCESS_CREATE_PRODUCT_STRUCTURE_2,
  PRODUCT_FORM_STRUCTURE_2_MOCK,
  PRODUCT_FORM_STRUCTURE_3_MOCK,
  RETURN_PRODUCT_CREATE_STRUCTURE_3_MOCK,
  RETURN_PRODUCT_CREATE_STRUCTURE_1_OTHER_VALUES_MOCK,
  SUCCESS_UPDATE_PRODUCT_STRUCTURE_1,
  SUCCESS_DELETE_PRODUCT_MOCK,
  PRODUCT_INVALID_FORM_STRUCTURE_1_MOCK,
  DATA_VALIDATION_MOCK,
  PRODUCT_INVALID_FORM_STRUCTURE_3_MOCK,
  DATA_VALIDATION_STRUCTURE_3_MOCK,
  SUCCESS_CREATE_PRODUCT_STRUCTURE_3,
  PRODUCT_UPDATE_INVALID_FORM_MOCK
}