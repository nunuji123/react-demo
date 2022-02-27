# react-demo

本地启动项目

```
npm run start
```

[Created with CodeSandbox](https://codesandbox.io/s/github-react-demo-lw8mo)

## react hook

## 性能优化

### React.memo

包裹函数组件

### PureComponent

```
gcf  |    git config --list
```

### React 核心概念

### React 高级

### React 高阶组件

优点：

1. 强化组件、复用逻辑、提升渲染性能

#### 约定最大化可组合性

```javascript
// 不推荐如下写法...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... 建议编写组合工具函数
// compose(f, g, h) 等同于 (...args) => f(g(h(...args)))
const enhance = compose(
  // 这些都是单参数的 HOC
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```

#### 包装显示名称以便轻松调试

```javascript
function withSubscription (WrappedComponent) {
  class WithSubscription extends React.Component {
    /* ... */
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`
  return WithSubscription
}

function getDisplayName (WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
```
