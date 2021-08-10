import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Head from './components/Head/Head.jsx'
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx'
import ClassicLeatherworking from './components/ClassicLeatherworking/ClassicLeatherworking.jsx'
import UserCraftingList from './components/UserCraftingList/UserCraftingList.jsx'

import './scss/main.scss'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const App = () => {
	const [userCraftingListArray, setUserCraftingListArray] = useState([])
	const [errorMessage, setErrorMessage] = useState('')
	return (
		<div>
			<Head />
			{errorMessage.length > 0 && <ErrorMessage errorMessage={errorMessage} />}
			{userCraftingListArray.length > 0 && <UserCraftingList userCraftList={userCraftingListArray} />}
			<ClassicLeatherworking setUserCraftListArray={setUserCraftingListArray} userCraftList={userCraftingListArray} setErrorMessage={setErrorMessage} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
