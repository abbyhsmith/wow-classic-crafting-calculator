import React from 'react'

import './styles.scss'

const ErrorMessage = ({errorMessage}) => {
	return(
		<div className="errorMessage">
			{errorMessage}
		</div>
	)
}

export default ErrorMessage
