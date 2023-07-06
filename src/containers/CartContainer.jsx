import { connect } from 'react-redux';
import Cart from '../Components/Cart';
import { addtocart, removefromcart } from '../service/Actions/Actions';

const mapStateToProps = state =>({
    data: state.cartItem
})

const mapDispatchToProps = dispatch =>({
    removefromcartHandler: data => dispatch(removefromcart(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);