import React, { useState } from 'react'

import ClassicLeatherworkingRecipes from '../ClassicLeatherworkingRecipes/ClassicLeatherworkingRecipes.jsx'
import ClassicLeatherworkingSkillLevelTabs from '../ClassicLeatherworkingSkillLevelTabs/ClassicLeatherworkingSkillLevelTabs.jsx'

import './styles.scss'

const ClassicLeatherworking = ({setUserCraftListArray, userCraftList, setErrorMessage}) => {
	const [showCrafts, setShowCrafts] = useState('hide')
	const [skillLevel, setSkillLevel] = useState('apprentice')

	const toggleCrafts = () => {
		if (showCrafts === 'hide') {
			setShowCrafts('show')
		} else {
			setShowCrafts('hide')
		}
	}

	return (
		<div className="classicLeatherworking">
			<div className="classicTitleRow">
				<div>
					Classic
				</div>
				<div>
					<button type="button" onClick={toggleCrafts}>+</button>
				</div>
			</div>
			{
				showCrafts === 'show' &&
				<div className="expandedClassicLeatherworkingRecipes">
					<ClassicLeatherworkingSkillLevelTabs setSkillLevel={setSkillLevel} />
					<ClassicLeatherworkingRecipes skillLevel={skillLevel} setUserCraftListArray={setUserCraftListArray} userCraftList={userCraftList} setErrorMessage={setErrorMessage} />
				</div>
			}
		</div>
	)
}

export default ClassicLeatherworking
