import { connect } from 'react-redux';
import { togglePage } from '../service/Actions/Actions';
import Render from '../MainrenderComponent/Render';

const mapStateToProps = state =>({
    data: state.showRoute
})

const mapDispatchToProps = dispatch =>({
    toggleHandler: data => dispatch(togglePage(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Render);