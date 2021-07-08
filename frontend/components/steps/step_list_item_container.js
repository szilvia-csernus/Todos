import { connect } from 'react-redux';

import { removeStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';


const mapDispatchToProps = dispatch => ({
    removeStep: (step) => dispatch(removeStep(step))
});

export default connect(null, mapDispatchToProps)(StepListItem);