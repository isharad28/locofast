import {
  API_INVOCATION,
  GET_PRODUCT_LIST,
  STORE_PRODUCT_LIST,
  STORE_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_ON_BASIS_OF_ID_SUCCESS,
  UPDATE_PRODUCT_ON_BASIS_OF_ID_SUCCESS
} from "../../actionTypes";
import * as constdata from "../../../utils/constants";
import * as consturl from "../../../utils/url";
import { getToken } from "../../../utils/token";

export const storeProductsList = (payload, resolve, reject) => {
  
  return { type: STORE_PRODUCT_LIST_SUCCESS, payload };
}
export const getProductOnBasisOfId = (payload, resolve, reject) => {
  
  return { type: GET_PRODUCT_ON_BASIS_OF_ID_SUCCESS, payload };
}
export const updateProductOnBasisOfId = (payload, resolve, reject) => {
  
  return { type: UPDATE_PRODUCT_ON_BASIS_OF_ID_SUCCESS, payload };
}
