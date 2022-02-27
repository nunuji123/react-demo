import React, { useEffect } from 'react'

function classHOC(WrapComponent) {
	return class Idex extends React.Component {
		state = {
			name: 'alien',
		}
		componentDidMount() {
			console.log('HOC')
		}
		render() {
			return <WrapComponent {...this.props} {...this.state} />
		}
	}
}

function Index(props) {
	const { name } = props
	useEffect(() => {
		console.log('index')
	}, [])
	return <div>hello,world , my name is {name}</div>
}

export default classHOC(Index)
