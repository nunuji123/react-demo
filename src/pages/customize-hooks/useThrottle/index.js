/**
 * 获取dom节点的位置或是大小
 */



import UseMeasureDomHeight from '../../component/Hook/UseMeasureDomHeight';


export default function MeasureDom () {
    const [rect, ref] = UseMeasureDomHeight()
    return <>
        <h1 ref={ref}>Measure Ref</h1>
        {
            rect !== null && <h2>The above header is {Math.round(rect.height)} px Tall</h2>
        }
    </>
};
