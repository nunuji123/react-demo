import { useState } from 'react'
import useDebounce from '../../../utils/customize-hooks/useDebounce'

export default function UseDebounceTester() {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	const debounceHandler = useDebounce(() => {
		console.log('a :>> ', a)
		setB(a)
	}, 2000)
	const changeIpt = (e) => {
		setA(e.target.value)
		debounceHandler()
	}
	return (
		<div>
			<input type='text' className='input' onChange={changeIpt} />
			<h3>a: {a}</h3>
			<h3>b: {b}</h3>
		</div>
	)
}
