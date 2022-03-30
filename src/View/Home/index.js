import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {storeProductsList} from '../../Store/action/products'

function mapStateToProps(state, props) {
    return {
        productList: state.products.productList,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storeProductsList
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
