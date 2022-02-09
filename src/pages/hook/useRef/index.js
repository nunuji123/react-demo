/**
 * 
 */
import React, { useState, useEffect, useRef } from "react";
export default function UseRefHook () {
  /**
   * refContainer 是一个可变的ref对象， 其.current（refContainer.current） 属性被初始化为传入的参数(initialValue)
  */
  const inputEl = useRef(null)

  const onButtonClick = () => {
    // current 指向已挂载到dom的文本输入元素
    inputEl.current.focus()
  }
  return (
    <>
      {/* 当ref对象内容变更时，useRef并不会通知你 */}
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
