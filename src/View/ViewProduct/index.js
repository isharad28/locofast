import ViewProduct from './ViewProduct';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {storeProductsList,getProductOnBasisOfId,updateProductOnBasisOfId} from '../../Store/action/products'

function mapStateToProps(state, props) {
    return {
        productList: state.products.productList,
        productbyId: state.products.productbyId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storeProductsList,
        getProductOnBasisOfId,
        updateProductOnBasisOfId
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewProduct);
