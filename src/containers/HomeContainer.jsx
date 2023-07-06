import { connect } from 'react-redux';
import Home from '../Components/Home';
import { addtocart } from '../service/Actions/Actions';

const mapStateToProps = state =>({
    data: state.cartItem
})

const mapDispatchToProps = dispatch =>({
    addTocartHandler: data => dispatch(addtocart(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);