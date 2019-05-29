import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
	onSubmit = (formProps) => {
		// formProps contains all the items a user inputs
		this.props.signup(formProps);
	};

	render() {
		// destructure the redux form handleSubmit from props
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field name="email" type="text" component="input" autoComplete="none" />
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field name="password" type="password" component="input" autoComplete="none" />
				</fieldset>
				<button>Sign Up!</button>
			</form>
		);
	}
}

export default compose(connect(null, actions), reduxForm({ form: 'signup' }))(Signup);

// we pass null as the first value because we have no state object to pass

// compose allows us to apply multiple HOCs to a component with good syntax
