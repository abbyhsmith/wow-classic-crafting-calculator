import React from 'react'

import './styles.scss'

const UserCraftingList = ({userCraftList}) => {
	const materialTotalsList = {}

	userCraftList.forEach((item) => {
		const mats = item.mats
		mats.forEach((mat) => {
			const name = mat.name
			const quantity = mat.quantity * item.user_list_quantity
			if(materialTotalsList[name]) {
				materialTotalsList[name] += quantity
			} else {
				materialTotalsList[name] = quantity
			}
		})
	})

	const totalsList = Object.entries(materialTotalsList)
		.sort()

	return(
		<div className="userCraftingListDiv">
			<div className="userCraftingList">
				{
					userCraftList.map((userCraft, i) => {
						return(
							<div className="userCraftItem" key={`craft-item-${i}`}>
								<div className="userCraftItemName">
									{userCraft.name} <span className="userItemQuantityNumber">({userCraft.user_list_quantity})</span>
								</div>
								<div className="userCraftItemMaterials">
									{
										userCraft.mats.map((material, i) => {
											return(
												<div className="userCraftItemSingleMaterial" key={`craft-item-material-${i}`}>
													{material.name} <span className="itemMaterialQuantityNumber">
														x
														{
															material.new_quantity = material.quantity * userCraft.user_list_quantity
														}
													</span>
												</div>
											)})
									}
								</div>
							</div>
						)})
				}
				<div className="materialTotals">
					<div className="totalMaterialsTitle">
						Total Materials:
					</div>
					<div className="totalMaterialsList">
						{
							totalsList.map((material, i) => {
								return(
									<div className="totalMaterialSingleItem" key={`material-total-${i}`}>
										{material[0]} <span className="itemMaterialQuantityNumber">x{material[1]}</span>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserCraftingList
