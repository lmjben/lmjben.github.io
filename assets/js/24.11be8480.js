(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{215:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css-ifc-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-ifc-总结"}},[t._v("#")]),t._v(" CSS IFC 总结")]),t._v(" "),s("p",[t._v("最近在公司遇到一个问题，一个 div 的高度 auto，但总是比子元素的高度要高几 px，调试了很久，发现对 IFC 的概念还不是很深入，根据这篇文章再总结一下吧。")]),t._v(" "),s("ul",[s("li",[t._v("CSS 内联盒子模型")]),t._v(" "),s("li",[t._v("CSS line-height")]),t._v(" "),s("li",[t._v("CSS vertical-align")])]),t._v(" "),s("h2",{attrs:{id:"内联盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联盒子模型"}},[t._v("#")]),t._v(" 内联盒子模型")]),t._v(" "),s("p",[t._v("IFC(Inline Formatting Context) 直译为"),s("strong",[t._v("行内格式化上下文")]),t._v("。我们简单理解为每个盒子都有一个 FC 特性，不同的 FC 值代表一组盒子不同的排列方式。有的 FC 值表示盒子从上到下垂直排列，有的 FC 值表示盒子从左到右水平排列等等。而 IFC 则是表示盒子从左到右的水平排列方式。")]),t._v(" "),s("p",[t._v("CSS 内联盒子模型是用来渲染内容的，决定了页面中的文本，图片等内联元素如何显示。")]),t._v(" "),s("ul",[s("li",[t._v("内联盒子模型特点")]),t._v(" "),s("li",[t._v("内联盒子模型的分类")])]),t._v(" "),s("h3",{attrs:{id:"内联盒子模型特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联盒子模型特点"}},[t._v("#")]),t._v(" 内联盒子模型特点")]),t._v(" "),s("p",[t._v("IFC 则是表示盒子从左到右的水平排列方式。")]),t._v(" "),s("p",[t._v("案例 1、父子元素嵌套。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("display:inline-block元素"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" xp子元素的文字\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  xp父元素的文字\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("其他元素"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h4",{attrs:{id:"line-box-高度的计算方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-box-高度的计算方式"}},[t._v("#")]),t._v(" line box 高度的计算方式")]),t._v(" "),s("p",[t._v("1、根据规则，span.parent 所在行的 line box 的高度受 span.parent、span.child、span.inline-block 元素对应的 inline-level box 高度的影响。")]),t._v(" "),s("ul",[s("li",[t._v("span.parent 的高度为其 line-height 实际值。")]),t._v(" "),s("li",[t._v("span.child 的高度为其 line-height 实际值。")]),t._v(" "),s("li",[t._v("span.inline-block 的高度为其 margin box 的高度。")])]),t._v(" "),s("p",[t._v("2、根据 vertical-align 属性垂直对齐，造成各高度间并不以上边界或下边界对齐。")]),t._v(" "),s("p",[t._v('3、span.inline-block 红色的上边框(border top)到 span.child 蓝色的下边框(border bottom)的距离再减去 1px 即为 line box 的高度。(line box 的下界其实是 span.child 的 content box 的下限的，你看"其他元素"的上边框不是和 span.child 的下边框重叠了吗？如果那是 line box 的下界，那怎会出现重叠呢)')]),t._v(" "),s("h5",{attrs:{id:"就盒子模型而言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#就盒子模型而言"}},[t._v("#")]),t._v(" 就盒子模型而言")]),t._v(" "),s("ol",[s("li",[t._v("inline-level box 与 block-level box 结构一致;")]),t._v(" "),s("li",[t._v("content box 的高度仅能通过属性 font-size 来设置，content box 的宽度则自适应其内容而无法通过属性 width 设置。")]),t._v(" "),s("li",[t._v("当 inline-level box 的宽度大于 containing block，且达到内容换行条件时，会将 inline-level 拆散为多个 inline-level box 并分布到多行中，然后当属性 direction 为 ltr 时，margin/border/padding-left 将作用于第一个的 inline-level box，margin/border/padding-right 将作用于最后一个的 inline-level box;若属性 direction 为 rtl 时，margin/border/padding-right 将作用于第一个的 inline-level box，margin/border/padding-left 将作用于最后一个的 inline-level box。")])]),t._v(" "),s("h5",{attrs:{id:"垂直排版特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直排版特性"}},[t._v("#")]),t._v(" 垂直排版特性")]),t._v(" "),s("p",[t._v("inline-level box 排版单位不是其本身，而是 line box。重点在于 line box 高度的计算。")]),t._v(" "),s("ol",[s("li",[t._v("位于该行上的所有的 inline-level box 均参与该行 line box 高度的计算(注意：是所有 inline-level box，而不仅仅是子元素所生成的 inline-level box)")]),t._v(" "),s("li",[t._v("replaced elements, inline-block elements, and inline-table elements 将以其对应的 opaque inline-level box 的 margin box 高度参与 line box 高度的计算。而其他 inline-level box 则以 line-height 的实际值参与 line box 高度的计算。")]),t._v(" "),s("li",[t._v("各 inline-level box 根据 vertical-align 属性值相对各自的父容器作垂直方向对齐。")]),t._v(" "),s("li",[t._v("最上方的 box 的上边界到最下方的下边界则是 line box 的高度。")])]),t._v(" "),s("p",[t._v("（1） inline-block 元素盒子里，没有内容(流内内容)，是一个空的盒子时，baseline 位置就是该盒子 margin-bottom 的边界（没有 margin-bottom 值，就是盒子的边界值）。\n（2）inline-block 元素盒子里，有内容元素，并且 overflow 属性值为 visible 时(默认值)，那么该盒子的 baseline 位置就是里面最后一个内容元素的 baseline。如下图中间 div\n（3）inline-block 元素盒子里，有内容元素，并且 overflow 属性值为非 visible 时 (比如 overflow:hidden)，那么该盒子的 baseline 位置就是该盒子 margin-bottom 的边界。")]),t._v(" "),s("h3",{attrs:{id:"内联盒子模型下的子盒子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联盒子模型下的子盒子"}},[t._v("#")]),t._v(" 内联盒子模型下的子盒子")]),t._v(" "),s("p",[s("img",{attrs:{src:"css-ifc-box.jpg",alt:"css-ifc-box.jpg"}})]),t._v(" "),s("p",[t._v("css 中的内联盒子模型可以分为以下几个部分：")]),t._v(" "),s("p",[t._v("1、内容区域(content area)。内容区域指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制。我们可以把文本选中的背景色区域作为内容区域。")]),t._v(" "),s("p",[t._v("2、内联盒子(inline box)。内联盒子不会让内容成块显示，而是排成一行，这里的内联盒子实际指的就是元素的外在盒子，用来决定元素是内联还是块级。该盒子又可以细分为内联盒子和匿名内联盒子两类:")]),t._v(" "),s("ul",[s("li",[t._v("内联盒子。用"),s("code",[t._v("<span>")]),t._v("、"),s("code",[t._v("<a>")]),t._v("和"),s("code",[t._v("<em>")]),t._v("等标签包裹的盒子。")]),t._v(" "),s("li",[t._v("匿名内联盒子。直接写的文字部分。")])]),t._v(" "),s("p",[t._v("3、行框盒子(line box)。例如:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一行普通的文字，这里有个 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("em"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 标签。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("<p>")]),t._v(" 标签中的每一行就是一个行框盒子，每个行框盒子又是由一个一个内联盒子组成的。如果文字超长，会自动换行，新的一行，就会被创建成一个全新的行框盒子，每一行都是一个行框盒子。")]),t._v(" "),s("p",[t._v("4、包含块(containing block)。例如:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一行普通的文字，这里有个 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("em"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 标签。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("<p>")]),t._v("标签就是一个包含块，此盒子由一行一行的行框盒子组成。")]),t._v(" "),s("h3",{attrs:{id:"幽灵空白节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#幽灵空白节点"}},[t._v("#")]),t._v(" 幽灵空白节点")]),t._v(" "),s("p",[s("strong",[t._v("幽灵空白节点")]),t._v("是内联盒模型中非常重要的一个概念，具体指的是:在 HTML5 文档声明 中，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个“空白节点”一样。")]),t._v(" "),s("h2",{attrs:{id:"内联元素的基石-line-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联元素的基石-line-height"}},[t._v("#")]),t._v(" 内联元素的基石 line-height")]),t._v(" "),s("p",[t._v("先思考下面这个问题:默认空"),s("code",[t._v("<div>")]),t._v("高度是 0，但是一旦里面写上几个文字，"),s("code",[t._v("<div>")]),t._v("高度就有了，请问这个高度由何而来，或者说是由哪个 CSS 属性决定的?")]),t._v(" "),s("p",[t._v("如果仅仅通过表象来确认，估计不少人会认为"),s("code",[t._v("<div>")]),t._v("高度是由里面的文字撑开的，也就是"),s("code",[t._v("font-size")]),t._v("决定的，但本质上是由"),s("code",[t._v("line-height")]),t._v("属性全权决定的，尽管某些场景确实与"),s("code",[t._v("font-size")]),t._v("大小有关。")]),t._v(" "),s("p",[t._v("行距 = line-height - font-size")]),t._v(" "),s("p",[t._v("行距有分为上下两个部分，")]),t._v(" "),s("p",[t._v("em-box = font-size")]),t._v(" "),s("p",[t._v("内容区域高度受 font-family 和 font-size 双重影响")]),t._v(" "),s("p",[t._v("em-box 仅受 font-size 影响，通常内容区域高度要更高一些")]),t._v(" "),s("h3",{attrs:{id:"为什么-line-height-可以让内联元素垂直居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-line-height-可以让内联元素垂直居中"}},[t._v("#")]),t._v(" 为什么 line-height 可以让内联元素垂直居中")]),t._v(" "),s("p",[t._v("案例 2：使用 "),s("code",[t._v("line-height = height")]),t._v(" 的方式让文字近似垂直居中。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("说近似是因为文字字形的垂直中线位置普遍要比真正的"),s("code",[t._v("行框盒子")]),t._v("的垂直中线位置低。")]),t._v(" "),s("h3",{attrs:{id:"多行文本或替换元素的垂直居中的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多行文本或替换元素的垂直居中的方法"}},[t._v("#")]),t._v(" 多行文本或替换元素的垂直居中的方法")]),t._v(" "),s("p",[t._v("如果要居中多行文本或替换元素 则需要借助 "),s("code",[t._v("vertical-align")]),t._v(" 属性来帮助我们。")]),t._v(" "),s("p",[t._v("实现的原理大致如下。")]),t._v(" "),s("p",[t._v("1、多行文字使用一个标签包裹，然后设置 "),s("code",[t._v("display: inline-block")]),t._v("。好处在于既能重置外部的 "),s("code",[t._v("line-height")]),t._v(" 为正常的大小，又能保持内联元素特性，从而可以设置 "),s("code",[t._v("vertical-align")]),t._v(" 属性，以及产生一个非常关键的"),s("code",[t._v("行框盒子")]),t._v("。我们需要的其实并不是这个"),s("code",[t._v("行框盒子")]),t._v("，而是每个"),s("code",[t._v("行框盒子")]),t._v("都会附带的一个产物 —— "),s("strong",[t._v("幽灵空白节点")]),t._v("，即一个宽度为 0 表现如同普通字符的看不见的节点。有了这个"),s("strong",[t._v("幽灵空白节点")]),t._v("，我们的 "),s("code",[t._v("line-height:120px")]),t._v(" 就有了作用的对象，从而相当于在 .content 元素前面撑起了一个高度为 120px 的宽度为 0 的内联元素。")]),t._v(" "),s("p",[t._v("2、因为内联元素默认都是基线对齐的，所以我们通过对 .content 元素设置 "),s("code",[t._v("vertical-align:middle")]),t._v(" 来调整多行文本的垂直位置，从而实现我们想要的“垂直居中”效果。如果要借助 line-height 实现图片垂直居中效果，也是类似的原理和做法。")]),t._v(" "),s("p",[t._v("不垂直居中与 line-height 无关，而是 vertical-align 导致的")]),t._v(" "),s("p",[t._v("无论内联元素 line-height 如何设置，最终父级元素的高度都是由数值大的那个 line-height 决定的，我称之为"),s("strong",[t._v("内联元素 line-height 的大值特性")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"line-height-的好朋友-vertical-align"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-height-的好朋友-vertical-align"}},[t._v("#")]),t._v(" line-height 的好朋友 vertical-align")]),t._v(" "),s("p",[t._v("因为 vertical-align 起作用是有前提条件的，这个前提条件就是：只能应用于内联元素以及 display 值为 table-cell 的元素。")]),t._v(" "),s("p",[t._v("vertical-align 和 line-height 之间的关系很明确，即“朋友”关系。\n最明显的就是 vertical-align 的百分比值是相对于 line-height 计算的")])])}),[],!1,null,null,null);a.default=e.exports}}]);