import React from 'react'

//第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref
const FancyButton = React.forwardRef((props, ref) => (
	<button ref={ref} className='FancyButton'>
		{props.children}
	</button>
))

export default function RefsDom() {
	const ref = React.createRef()

	return (
		<>
			<FancyButton ref={ref}>Fancy Button of Click me !</FancyButton>
		</>
	)
}
