# handsontable
## 简介:
这个是一个 handsontable.js 的免费版本使用范例
- 范例中包含有我使用到的一些功能的实作.
- 以及在 vue 的框架下如何去使用 handsontable 的一些 api
希望会对有需要的人提供到帮助
- 其中需要特别注意的一点,官网的范例所使用的 css 需要单独放置到实例所在的目录,并不能直接按官网所写的执行.
- 并且官网范例中貌似没有强调的一点是,我们需要给所谓的 key.
- licenseKey="non-commercial-and-evaluation" 将其放在<hot-table>中即可,或者放置在 settings 中
## 实现功能
- 通过修改 main.js 中的 Vue.prototype.$api，得到后端的资料，将资料呈现在网页上
- 实现了分页切换的操作，单页呈现33笔资料
- 使用者可以输入公式，通过前端解析后，由后端 SQL 执行，并将结果由前端呈现（需要后端程式码），公式可直接 enter 执行
- 实现了资料由表格到热力图的切换（通过公式边上的button）
- 修改了右键菜单（包含）：
    - sort: 由右键选单点选执行 SQL 端的排序，并将结果及时呈现到前端（handsontable 的局部排序代码也有在 code 中）
    - delete: 由右键选单点选执行删除栏位的操作，直接反应到 SQL 端，并将结果及时呈现到前端
- 代码说明均在都在 code 的备注中。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

##　结果截图
![](https://i.imgur.com/ZmcBPzL.png)
![](https://i.imgur.com/QP2IhP7.png)
![](https://i.imgur.com/Ja5MjqH.png)
![](https://i.imgur.com/ZvfHlva.png)
