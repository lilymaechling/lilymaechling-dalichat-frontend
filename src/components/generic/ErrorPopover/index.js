import { connect } from 'react-redux';
import { clearCurrent } from '../../../store/actionCreators/requestActionCreators';
import ErrorPopover from './ErrorPopover';

const mapStateToProps = (state) => ({
  errorMessage: state.request.current,
});

export default connect(mapStateToProps, { clearCurrent })(ErrorPopover);
