import React from 'react'
import { leatherworking } from '../../data/data.js'
import AddItemToList from '../AddItemToList/AddItemToList.jsx'

import './styles.scss'

const ClassicLeatherworkingRecipes = ({setUserCraftListArray, userCraftList, setErrorMessage}) => {
	return (
		<div className="allClassicLeatherworkingRecipes">
			<div className="titleRow">
				<div className="nameTitle">
					Name
				</div>
				<div className="materialsTitle">
					Materials
				</div>
				<div className="sourceTitle">
					Source
				</div>
				<div className="specializationTitle">
					Specialization
				</div>
				<div className="skillTitle">
					Required Skill
				</div>
				<div className="addItemTitle">
					Add Item
				</div>
			</div>
			{
				leatherworking.map((craft, i) => {
					return (
						<div className="classicLeatherworkingCraftRow" key={`craft-${i}`}>
							<div className="craftName">
								{craft.name}
							</div>
							<div className="materials">
								{
									craft.mats.map((mat, i) => {
										return (
											<div className="singleMaterial" key={`material-${i}`}>
												{mat.name} x{mat.quantity}
											</div>
										)
									})
								}
							</div>
							<div className="craftSource">
								{craft.source}
							</div>
							{
								craft.specialization &&
								<div className="craftSpecialization">
									{craft.specialization}
								</div>
							}
							<div className="craftSkill">
								{craft.skill}
							</div>
							<div className="addItemToListColumn">
								<AddItemToList craft={craft} setUserCraftListArray={setUserCraftListArray} userCraftList={userCraftList} setErrorMessage={setErrorMessage} />
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default ClassicLeatherworkingRecipes
