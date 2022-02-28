import React, { useState, useEffect } from 'react'

const renderQueue = []
let isFirstrender = false

const tryRender = () => {
	const render = renderQueue.shift()
	console.log('tryRender : render ', render)
	if (!render) return
	setTimeout(() => {
		render() /* 执行下一段渲染 */
	}, 3000)
}

/* HOC */
function renderHOC(WrapComponent) {
	console.log(`renderHOC`, WrapComponent)
	return function Index(props) {
		console.log(`props`, props)
		const [isRender, setRender] = useState(false)
		console.log(`isRender`, isRender)
		useEffect(() => {
			renderQueue.push(() => {
				/* 放入待渲染队列中 */
				setRender(true)
			})
			console.log('renderQueue : ', renderQueue, 'isFirstrender', isFirstrender)
			if (!isFirstrender) {
				console.log(`非第一次render`)
				tryRender() /**/
				isFirstrender = true
			}
		}, [])
		return isRender ? (
			<WrapComponent tryRender={tryRender} {...props} />
		) : (
			<div className='box'>loading</div>
		)
	}
}
/* 业务组件 */
class RenderImg extends React.Component {
	componentDidMount() {
		const { name, tryRender } = this.props
		/* 上一部分渲染完毕，进行下一部分渲染 */
		tryRender()
		console.log(name + '渲染')
	}
	render() {
		return (
			<div className='w-24 m-2'>
				<img
					className='rounded-lg'
					src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&amp;fm=26&amp;gp=0.jpg'
				/>
			</div>
		)
	}
}
/* 高阶组件包裹 */
const RenderImgComponent = renderHOC(RenderImg)
console.log('RenderImgComponent :>> ', RenderImgComponent)

export default () => {
	return (
		<React.Fragment>
			<RenderImgComponent name='组件一' />
			<RenderImgComponent name='组件二' />
			<RenderImgComponent name='组件三' />
		</React.Fragment>
	)
}
