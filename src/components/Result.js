import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';


const Result = (props) => {
	return (

		<CSSTransitionGroup 
			className="container result"
			component="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
			>
		
		<div className = "result">
			You prefer <strong>{props.quizResult}</strong>!
		</div>
		</CSSTransitionGroup>
		);
}

Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};

export default Result;

