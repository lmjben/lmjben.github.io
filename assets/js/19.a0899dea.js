(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{214:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-设备像素比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-设备像素比"}},[t._v("#")]),t._v(" CSS 设备像素比")]),t._v(" "),a("p",[t._v("这一章来探讨一下 CSS 设备像素比。")]),t._v(" "),a("ul",[a("li",[t._v("设备像素比")]),t._v(" "),a("li",[t._v("Viewport")]),t._v(" "),a("li",[t._v("移动端 1px 像素问题")])]),t._v(" "),a("h2",{attrs:{id:"设备像素比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备像素比"}},[t._v("#")]),t._v(" 设备像素比")]),t._v(" "),a("p",[t._v("设备像素比（devicePixelRatio）是设备上"),a("strong",[t._v("物理像素")]),t._v("和"),a("strong",[t._v("设备独立像素")]),t._v("的比例，即："),a("code",[t._v("设备像素比 = 物理像素 / 设备独立像素")]),t._v("。在浏览器中可以通过 window.devicePixelRatio 获取。")]),t._v(" "),a("p",[t._v("问题又来了，物理像素和设备独立像素又是什么？")]),t._v(" "),a("ul",[a("li",[t._v("物理像素")]),t._v(" "),a("li",[t._v("设备独立像素")])]),t._v(" "),a("h3",{attrs:{id:"物理像素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理像素"}},[t._v("#")]),t._v(" 物理像素")]),t._v(" "),a("p",[t._v("物理像素是指像素点的多少，而不是指具体的物理尺寸。显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像，屏幕从工厂出来那天起，它上面的物理像素点就固定不变了。")]),t._v(" "),a("p",[t._v("我们常说的分辨率指的就是物理像素，比如 iphone6s plus 的分辨率是 "),a("code",[t._v("1920x1080")]),t._v("，表示横向有 1920 个物理像素，竖向有 1080 个物理像素。")]),t._v(" "),a("h3",{attrs:{id:"设备独立像素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备独立像素"}},[t._v("#")]),t._v(" 设备独立像素")]),t._v(" "),a("p",[t._v("设备独立像素是一个虚拟的单位，独立于设备，是用于逻辑上衡量长度的单位，由底层系统的程序使用，会由相关系统转换为物理像素。")]),t._v(" "),a("p",[t._v("一种形象的说法，可以理解为在 css 中的 px。"),a("code",[t._v("设备独立像素 = 逻辑像素 = CSS 像素")])]),t._v(" "),a("p",[t._v("设备独立像素有什么用？")]),t._v(" "),a("p",[t._v("举个例子，iphone3 和 iphone4 的尺寸都是 3.5 寸，但 iphone3 的分辨率是 320x480，iphone4 的分辨率是 640x960，这也就是意味着同样长度的屏幕，iphone3 有 320 个物理像素，iphone4 有 640 个物理像素。")]),t._v(" "),a("p",[t._v("如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位（设备独立像素）。")]),t._v(" "),a("p",[t._v("我们统一 iphone3 和 iphone4 都是 320 个虚拟像素，只是在 iphone3 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone4 中，1 个虚拟像素最终换算成 2 个物理像素。")]),t._v(" "),a("p",[t._v("至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("iPhone6 分辨率 750 x 1334（物理像素），设备独立像素 375 x 667，设备像素比为 2。")]),t._v(" "),a("p",[t._v("iPhone6 plus 分辨率 1242 x 2208（物理像素），设备独立像素 414 x 736，设备像素比为 3。")])]),t._v(" "),a("h2",{attrs:{id:"viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" Viewport")]),t._v(" "),a("p",[t._v("Viewport 是用户网页的可视区域。当我们开始使用平板电脑和手机上网时，固定大小的网页太大而无法容纳视口。为了解决这个问题，这些设备上的浏览器可以按比例缩小整个网页以适应屏幕。")]),t._v(" "),a("p",[t._v("窄屏幕设备在渲染页面流程：")]),t._v(" "),a("ul",[a("li",[t._v("首先在一个虚拟视口中渲染页面，这个视口通常比屏幕宽（通常是 980px）。")]),t._v(" "),a("li",[t._v("然后缩小渲染的结果，以便在一屏内显示所有内容。")]),t._v(" "),a("li",[t._v("最后渲染完成，用户可以移动、缩放以查看页面的不同区域。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("案例")]),t._v(" "),a("p",[t._v("如果移动屏幕的宽度为 640px，则可能会用 980px 的虚拟视口渲染页面，然后缩小页面以适应 640px 的视口大小。")])]),t._v(" "),a("p",[t._v("这样做是因为许多页面没有做移动端优化，在小窗口渲染时会乱掉（或看起来乱）。所以，这种虚拟视口是一种让未做移动端优化的网站在窄屏设备上看起来更好的办法。")]),t._v(" "),a("h3",{attrs:{id:"自定义视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义视口"}},[t._v("#")]),t._v(" 自定义视口")]),t._v(" "),a("p",[t._v("一个典型的针对移动端优化的站点包含类似下面的内容：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1, user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("content 中可以指定以下内容：")]),t._v(" "),a("ul",[a("li",[t._v("width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。")]),t._v(" "),a("li",[t._v("height：和 width 相对应，指定高度。")]),t._v(" "),a("li",[t._v("initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。")]),t._v(" "),a("li",[t._v("maximum-scale：允许用户缩放到的最大比例。")]),t._v(" "),a("li",[t._v("minimum-scale：允许用户缩放到的最小比例。")]),t._v(" "),a("li",[t._v("user-scalable：用户是否可以手动缩放。")])]),t._v(" "),a("h2",{attrs:{id:"移动端-1px-像素问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端-1px-像素问题"}},[t._v("#")]),t._v(" 移动端 1px 像素问题")]),t._v(" "),a("p",[t._v("移动端 1px 像素问题是什么？")]),t._v(" "),a("p",[t._v("举个例子，iphone6 的屏幕宽度为 375px，设计师做的视觉稿一般是 750px，也就是 2x 图，这个时候设计师在设计稿上画了 1px 的边框，如果你在 css 中也写了"),a("code",[t._v("border-width: 1px")]),t._v("，那么问题就出现了。")]),t._v(" "),a("p",[t._v("根据上文介绍，iphone6 的设备像素比是 2，这里的物理像素是 1px（根据设计稿上 1px），由此我们可以计算出设备独立像素（css 像素）。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设备独立像素（css 像素）= 物理像素 / 设备像素比。")]),t._v("\n设备独立像素 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("px "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("根据计算出的设备独立像素（css 像素），我们在 css 中应该写"),a("code",[t._v("border-width: 0.5px")]),t._v("，但 css 并不支持直接写 0.5px，于是就出现了各种 hack 方法。")]),t._v(" "),a("p",[t._v("下面会介绍几种常用的编写 0.5px 的方式。")]),t._v(" "),a("ul",[a("li",[t._v("使用缩放")]),t._v(" "),a("li",[t._v("使用线性渐变")]),t._v(" "),a("li",[t._v("使用 boxshadow")]),t._v(" "),a("li",[t._v("使用 svg")]),t._v(" "),a("li",[t._v("使用 viewport")])]),t._v(" "),a("h3",{attrs:{id:"使用缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用缩放"}},[t._v("#")]),t._v(" 使用缩放")]),t._v(" "),a("p",[t._v("使用缩放可以很完美地兼容各种浏览器。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hr.scale-half")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* importrant */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50% 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1px + scaleY(0.5)"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hr scale-half"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("注意要加上这段代码："),a("code",[t._v("transform-origin: 50% 100%;")]),t._v("，不然会出现虚化效果。")])]),t._v(" "),a("h3",{attrs:{id:"使用线性渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用线性渐变"}},[t._v("#")]),t._v(" 使用线性渐变")]),t._v(" "),a("p",[t._v("linear-gradient(0deg, #fff, #000)的意思是：渐变的角度从下往上，从白色#fff 渐变到黑色#000，而且是线性的，在高清屏上，1px 的逻辑像素代表的物理像素有 2px，由于是线性渐变，所以第 1 个 px 只能是#fff，而剩下的那个像素只能是#000，这样就达到了画一半的目的。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hr.gradient")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("linear-gradient(0deg, #fff, #000)"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hr gradient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("经过测试，这种方法在各个流览器上面都不完美，效果都是虚的，和完美的 0.5px 还是有差距。这个效果和直接 scale 0.5 的差不多，都是通过虚化线，让人觉得变细了。")]),t._v(" "),a("h3",{attrs:{id:"使用-boxshadow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-boxshadow"}},[t._v("#")]),t._v(" 使用 boxshadow")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hr.boxshadow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0.5px 0 #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("box-shadow: 0 0.5px 0 #000"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hr boxshadow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("经过测试，这个方法在 chrome 和 firefox 都非常完美，但是 safari 不支持小于 1px 的 boxshadow，所以完全没显示出来了。")]),t._v(" "),a("h3",{attrs:{id:"使用-svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-svg"}},[t._v("#")]),t._v(" 使用 svg")]),t._v(" "),a("p",[t._v("使用 svg 的 line 元素画线，stroke 表示描边颜色，默认描边宽度 "),a("code",[t._v('stroke-width="1"')]),t._v("，由于 svg 的描边等属性的 1px 就是物理像素的 1px，所以就相当于高清屏的 0.5px。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hr.svg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 直接使用svg */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\"data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1px'><line x1='0' y1='0' x2='100%' y2='0' stroke='#000'></line></svg>\""),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 base64 格式的svg，解决 firefox 兼容性问题 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzFweCc+PGxpbmUgeDE9JzAnIHkxPScwJyB4Mj0nMTAwJScgeTI9JzAnIHN0cm9rZT0nIzAwMCc+PC9saW5lPjwvc3ZnPg=='"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("svg"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hr svg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v('经过测试，这个方案也是很完美，但是在 firefox 挂了，究其原因是因为 firefox 的 background-image 如果是 svg 的话只支持命名的颜色，如"black"、"red"等，如果把上面代码的 svg 里面的#000 改成 black 的话就可以显示出来，但是这样就很不灵活了。于是只能把 svg 转成 base64 的形式。')]),t._v(" "),a("p",[t._v("我们来看一下上面几种方法的兼容性对比图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-devicePixelRatio.png",alt:"各方案对比图"}})]),t._v(" "),a("h3",{attrs:{id:"使用-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-viewport"}},[t._v("#")]),t._v(" 使用 viewport")]),t._v(" "),a("p",[t._v("最后还有一个万能的方法，那就是通过控制 viewport。在 viewport 中 width=device-width 表示将 viewport 视窗的宽度调整为设备的宽度，这个宽度通常是指物理上宽度。默认的缩放比例为 1，如果知道设备像素比，就能计算出需要缩放的比例，实现 0.5px 的效果了。")]),t._v(" "),a("p",[t._v("在实际项目中，首先通过 js 获取 devicePixelRatio，然后动态修改 viewport 中的缩放比例。例如：devicePixelRatio = 2 的时候，控制 viewport 的 initial-scale 值为 0.5 进行缩放。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=0.5, user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("devicePixelRatio = 3 的时候：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=0.333333, user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("可以看到，使用 viewport 的方式简单粗暴，对业务代码没有侵入性，推荐大家使用。")]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/jawil/blog/issues/21",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Viewport"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5ab65f40f265da2384408a95",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎么画一条 0.5px 的边"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/26653449",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么叫物理像素值，什么叫设备独立像素值（dips）?"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);