/**
 * 测量Dom节点的高度
 */

import { useState, useCallback } from 'react';
export default function UseMeasureDomRect () {
    const [rect, setRect] = useState(null)
    const ref = useCallback((node) => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
        }
    }, [])
    return [rect, ref]
};
