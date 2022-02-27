import React from 'react'
class Index extends React.Component {
	say() {
		console.log('my name is alien')
	}
	render() {
		return <div> hello,world </div>
	}
}

function HOC(Component) {
	return class wrapComponent extends React.Component {
		render() {
			return <Component {...this.props} {...this.state} />
		}
	}
}
const newIndex = HOC(Index)

export default newIndex
console.log('newIndex.say:', newIndex.say) // undefined
