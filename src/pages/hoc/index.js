/**
 * 高阶组件
 */

import React from 'react'
import Demo1Page from './demo1'
import Demo2Page from './demo2'
import Demo3Page from './demo3'
import HocProps from './hoc_props'
import { Link } from 'react-router-dom'

function logProps(WrappedComponent) {
	return class extends React.Component {
		componentDidUpdate(prevProps) {
			console.log('Current props: ', this.props)
			console.log('Previous props: ', prevProps)
		}
		render() {
			// 将 input 组件包装在容器中，而不对其进行修改。Good!
			return <WrappedComponent {...this.props} />
		}
	}
}

function withSubscription(WrappedComponent) {
	class WithSubscription extends React.Component {
		render() {
			return <div>111</div>
		}
	}
	WithSubscription.displayName = `WithSubscription(${getDisplayName(
		WrappedComponent
	)})`
	return WithSubscription
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function pureDivElement() {
	return <div>pureDivElement</div>
}

export default function HocPage() {
	const ele = withSubscription(pureDivElement)
	return (
		<React.Fragment>
			<h1>高阶组件</h1>
			<ul>
				<li>Hoc 是纯函数 没有副作用</li>
				<li>
					不要试图在 HOC 中修改组件原型（或以其他方式改变它）,而应该使用组合
				</li>
			</ul>
			<div className='demos'>
				<ul>
					<li>
						<Link
							to={'/hoc/demo1'}
							className='text-blue-500 hover:text-blue-800'
						>
							<div className='demo'>
								<h3>demo1</h3>
								<Demo1Page></Demo1Page>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to={'/hoc/demo2'}
							className='text-blue-500 hover:text-blue-800'
						>
							<div className='demo'>
								<h3>demo2</h3>
								<Demo2Page></Demo2Page>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to={'/hoc/demo3'}
							className='text-blue-500 hover:text-blue-800'
						>
							<div className='demo'>
								<h3>demo3</h3>
								<Demo3Page></Demo3Page>
							</div>
						</Link>
					</li>
					<li>
						<div className='demo text-purple-700 text-opacity-75'>
							<h3>混入props：承接上层的props,在混入自己的props，来强化组件</h3>
							<HocProps></HocProps>
						</div>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}
