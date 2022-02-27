import React, { useState } from 'react'

function classHOC(WrapComponent) {
	return class Idex extends React.Component {
		constructor() {
			super()
			this.state = {
				name: 'alien',
			}
		}
		changeName(name) {
			this.setState({ name })
		}
		render() {
			return (
				<WrapComponent
					{...this.props}
					{...this.state}
					changeName={this.changeName.bind(this)}
				/>
			)
		}
	}
}
function Index(props) {
	const [value, setValue] = useState(null)
	const { name, changeName } = props
	return (
		<div>
			<div> hello,world , my name is {name}</div>
			改变name{' '}
			<input
				type='text'
				className='rounded-sm border border-gray-200'
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				className='rounded-sm border-2 border-gray-200 text-gray-600 text-sm p-2 m-2 space-x-2'
				onClick={() => changeName(value)}
			>
				确定
			</button>
		</div>
	)
}

export default classHOC(Index)
