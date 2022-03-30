import {
  GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_ERROR,STORE_PRODUCT_LIST_SUCCESS,STORE_PRODUCT_LIST_ERROR,GET_PRODUCT_ON_BASIS_OF_ID_SUCCESS,UPDATE_PRODUCT_ON_BASIS_OF_ID_SUCCESS
} from "../actionTypes";
import _ from "lodash";

const INITIAL_STATE = {
  productList: [],
  productbyId:null
};
const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload,
      };
      case STORE_PRODUCT_LIST_ERROR:
        return {
          ...state,
          productList: action.payload,
        };
         
        case UPDATE_PRODUCT_ON_BASIS_OF_ID_SUCCESS:
           {
             
             let actionId = action.payload.id
            let _productList = _.cloneDeep(state.productList);
            let productIndex = _productList.findIndex(
              (_product) => _product.id === actionId
            );   
            if(productIndex !== -1){
              _productList[productIndex].name = action.payload.name
              _productList[productIndex].weight=action.payload.weight
              _productList[productIndex].availability=action.payload.availability
              _productList[productIndex].productUrl=action.payload.productUrl
              _productList[productIndex].pricingTier=action.payload.pricingTier
              _productList[productIndex].priceRange=action.payload.priceRange
              _productList[productIndex].isEditable=action.payload.isEditable
            } 
            else{
              console.log("hello g")
            }    
              return {
            ...state,
            productList: _productList,
          }
        };
        case GET_PRODUCT_ON_BASIS_OF_ID_SUCCESS
        :
        console.log(state.productList.filter((prod)=>prod.id==action.payload),state.productList,"action.payload")
          return {
            
            ...state,
             productbyId: state.productList.filter((prod)=>prod.id==action.payload)[0]
          };
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload.data,
      };
    case GET_PRODUCT_LIST_ERROR:
      return {
        ...state,
        productList: [],
      };
      ;

    default:
      return state
  }

}
export default products;