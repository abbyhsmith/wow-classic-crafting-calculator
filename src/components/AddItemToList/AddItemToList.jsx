import React, { useState } from 'react'

import './styles.scss'

const AddItemToList = ({craft, setUserCraftListArray, userCraftList, setErrorMessage}) => {
	const [craftQuantity, setCraftQuantity] = useState(1)

	const handleClick = () => {
		if (craftQuantity > 0 && craftQuantity%1 === 0) {
			craft.user_list_quantity = craftQuantity
			setUserCraftListArray([...userCraftList, craft])
			setErrorMessage('')
		} else {
			setErrorMessage('Please enter a positive whole number')
		}
	}

	return(
		<div className="addItemToList">
			<div className="setCraftQuantity">
				<input type="number" val={craftQuantity} onChange={e => setCraftQuantity(e.target.value)}></input>
			</div>
			<div className="addCraftToListButton">
				<button type="button" onClick={handleClick}>+</button>
			</div>
		</div>
	)
}

export default AddItemToList
