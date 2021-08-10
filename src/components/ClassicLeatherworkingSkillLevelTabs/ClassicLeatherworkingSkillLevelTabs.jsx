import React from 'react'

import './styles.scss'

const ClassicLeatherworkingSkillLevelTabs = ({setSkillLevel}) => {
	return(
		<div className="classicLeatherworkingSkillLevelTabs">
			<button className="classicLeatherworkingApprentice" onClick={setSkillLevel('apprentice')}>
				1-75
			</button>
			<button className="classicLeatherworkingJourneyman" onClick={setSkillLevel('journeyman')}>
				76-150
			</button>
			<button className="classicLeatherworkingExpert" onClick={setSkillLevel('expert')}>
				151-225
			</button>
			<button className="classicLeatherworkingArtisan" onClick={setSkillLevel('artisan')}>
				226-299
			</button>
			<button className="classicLeatherworkingMaxLevel" onClick={setSkillLevel('max')}>
				300
			</button>
			<button className="classicLeatherworkingAll" onClick={setSkillLevel('all')}>
				All
			</button>
		</div>
	)
}

export default ClassicLeatherworkingSkillLevelTabs
