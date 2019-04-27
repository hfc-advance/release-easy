
# 主要做哪些事情

1、语义化版本</br>
2、自动生成`changelog`</br>
3、自动发包</br>

# 怎么使用

```javascript
const release = require('release-easy')

release(options)
```

# options

类型: Object

参数 | 类型 | 默认值 | 是否必须 | 说明
---|---|---|---|---
semVerCallback|Function&#124;String|--|否|语义化版本之后要做的事情，可以传递回调函数引用，或者一个`npm scripts`指令
npmRegistry|String|https://registry.npmjs.org/|否|要发布npm的源

# 例子

```javascript
const release = require('release-easy')

release({
  semVerCallback: 'build' // npm run build
  npmRegistry: 'http://nexus.qutoutiao.net/repository/qtt/'
})
```
