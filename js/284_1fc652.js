(self.webpackChunkki_ui=self.webpackChunkki_ui||[]).push([[284],{4284:(s,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>D});var n=l(6252),t=(0,n.Wm)("h2",null,"Select 选择器",-1),e=(0,n.Wm)("p",null,"当选项过多时，使用下拉菜单展示并选择内容。",-1),m=(0,n.Wm)("h3",null,"基础用法",-1),p=(0,n.Wm)("p",null,"适用广泛的基础单选",-1),k=(0,n.Wm)("pre",null,[(0,n.Wm)("code",{class:"language-html"},[(0,n.Uk)("  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"v-model"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'select'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"style"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'width: 300px;'"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项1'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'1'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项2'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'2'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项3'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'3'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项4'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'4'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(">")]),(0,n.Uk)("\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"javascript"},[(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-keyword"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-keyword"},"default"),(0,n.Uk)(" {\n      "),(0,n.Wm)("span",{class:"hljs-function"},[(0,n.Wm)("span",{class:"hljs-title"},"data"),(0,n.Uk)("("),(0,n.Wm)("span",{class:"hljs-params"}),(0,n.Uk)(")")]),(0,n.Uk)(" {\n        "),(0,n.Wm)("span",{class:"hljs-keyword"},"return"),(0,n.Uk)(" {\n          "),(0,n.Wm)("span",{class:"hljs-attr"},"select"),(0,n.Uk)(": "),(0,n.Wm)("span",{class:"hljs-string"},"''"),(0,n.Uk)(",\n        };\n      },\n    };\n  ")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1),c=(0,n.Wm)("h3",null,"禁用 Option",-1),W=(0,n.Wm)("p",null,"禁用单独的 Option，在 Option 上指定 disabled 即可。",-1),h=(0,n.Wm)("pre",null,[(0,n.Wm)("code",{class:"language-html"},[(0,n.Uk)("  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"v-model"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'select'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"style"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'width: 300px;'"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项1'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'1'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项2'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'2'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"disabled"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项3'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'3'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项4'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'4'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"disabled"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(">")]),(0,n.Uk)("\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"javascript"},[(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-keyword"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-keyword"},"default"),(0,n.Uk)(" {\n      "),(0,n.Wm)("span",{class:"hljs-function"},[(0,n.Wm)("span",{class:"hljs-title"},"data"),(0,n.Uk)("("),(0,n.Wm)("span",{class:"hljs-params"}),(0,n.Uk)(")")]),(0,n.Uk)(" {\n        "),(0,n.Wm)("span",{class:"hljs-keyword"},"return"),(0,n.Uk)(" {\n          "),(0,n.Wm)("span",{class:"hljs-attr"},"select"),(0,n.Uk)(": "),(0,n.Wm)("span",{class:"hljs-string"},"''"),(0,n.Uk)(",\n        };\n      },\n    };\n  ")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1),U=(0,n.Wm)("h3",null,"禁用状态",-1),r=(0,n.Wm)("p",null,"Select 上指定 disabled 可以将其禁用",-1),j=(0,n.Wm)("pre",null,[(0,n.Wm)("code",{class:"language-html"},[(0,n.Uk)("  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"v-model"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'select'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"style"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'width: 300px;'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"disabled"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项1'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'1'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项2'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'2'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项3'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'3'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项4'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'4'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(">")]),(0,n.Uk)("\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"javascript"},[(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-keyword"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-keyword"},"default"),(0,n.Uk)(" {\n      "),(0,n.Wm)("span",{class:"hljs-function"},[(0,n.Wm)("span",{class:"hljs-title"},"data"),(0,n.Uk)("("),(0,n.Wm)("span",{class:"hljs-params"}),(0,n.Uk)(")")]),(0,n.Uk)(" {\n        "),(0,n.Wm)("span",{class:"hljs-keyword"},"return"),(0,n.Uk)(" {\n          "),(0,n.Wm)("span",{class:"hljs-attr"},"select"),(0,n.Uk)(": "),(0,n.Wm)("span",{class:"hljs-string"},"''"),(0,n.Uk)(",\n        };\n      },\n    };\n  ")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1),i=(0,n.Wm)("h3",null,"可清空",-1),o=(0,n.Wm)("p",null,"包含清空按钮，可将选择器清空为初始状态。",-1),u=(0,n.Wm)("div",null,[(0,n.Wm)("p",null,[(0,n.Uk)("传递 "),(0,n.Wm)("code",null,"clearable"),(0,n.Uk)(" 属性，它是一个 "),(0,n.Wm)("code",null,"Boolean"),(0,n.Uk)(" 值，点击后会清空 Select。")])],-1),d=(0,n.Wm)("pre",null,[(0,n.Wm)("code",{class:"language-html"},[(0,n.Uk)("  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"v-model"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'select'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"style"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'width: 300px;'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"clearable"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项1'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'1'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项2'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'2'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项3'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'3'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项4'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'4'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(">")]),(0,n.Uk)("\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"javascript"},[(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-keyword"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-keyword"},"default"),(0,n.Uk)(" {\n      "),(0,n.Wm)("span",{class:"hljs-function"},[(0,n.Wm)("span",{class:"hljs-title"},"data"),(0,n.Uk)("("),(0,n.Wm)("span",{class:"hljs-params"}),(0,n.Uk)(")")]),(0,n.Uk)(" {\n        "),(0,n.Wm)("span",{class:"hljs-keyword"},"return"),(0,n.Uk)(" {\n          "),(0,n.Wm)("span",{class:"hljs-attr"},"select"),(0,n.Uk)(": "),(0,n.Wm)("span",{class:"hljs-string"},"''"),(0,n.Uk)(",\n        };\n      },\n    };\n  ")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1),g=(0,n.Wm)("h3",null,"基础多选",-1),b=(0,n.Wm)("p",null,"选择多个选项，使用 Tag 展示已选项。",-1),v=(0,n.Wm)("div",null,[(0,n.Wm)("p",null,[(0,n.Uk)("传递 "),(0,n.Wm)("code",null,"multiple"),(0,n.Uk)(" 属性，开启多选。")])],-1),f=(0,n.Wm)("pre",null,[(0,n.Wm)("code",{class:"language-html"},[(0,n.Uk)("  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"v-model"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'select'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"style"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'width: 300px;'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"clearable"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"multiple"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项1'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'1'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项2'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'2'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项3'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'3'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'选项4'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'4'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(">")]),(0,n.Uk)("\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"javascript"},[(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-keyword"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-keyword"},"default"),(0,n.Uk)(" {\n      "),(0,n.Wm)("span",{class:"hljs-function"},[(0,n.Wm)("span",{class:"hljs-title"},"data"),(0,n.Uk)("("),(0,n.Wm)("span",{class:"hljs-params"}),(0,n.Uk)(")")]),(0,n.Uk)(" {\n        "),(0,n.Wm)("span",{class:"hljs-keyword"},"return"),(0,n.Uk)(" {\n          "),(0,n.Wm)("span",{class:"hljs-attr"},"select"),(0,n.Uk)(": [],\n        };\n      },\n    };\n  ")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1),w=(0,n.Wm)("h3",null,"分组展示",-1),y=(0,n.Wm)("p",null,"选项分组展示",-1),O=(0,n.Wm)("div",null,[(0,n.Wm)("p",null,[(0,n.Uk)("使用 "),(0,n.Wm)("code",null,"ki-option-group"),(0,n.Uk)(" 组件包裹 "),(0,n.Wm)("code",null,"ki-option"),(0,n.Uk)(" 分组展示数据。")])],-1),x=(0,n.Wm)("pre",null,[(0,n.Wm)("code",{class:"language-html"},[(0,n.Uk)("  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"v-model"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'select'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"style"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'width: 300px;'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"clearable"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"multiple"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option-group"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'热门城市'"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'北京'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'1'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'上海'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'2'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'广州'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'3'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'深圳'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'4'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option-group"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option-group"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'城市名'"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'海南'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'5'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'广州'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'6'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'济南'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'7'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n        "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"label"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'长沙'"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-attr"},"value"),(0,n.Uk)("="),(0,n.Wm)("span",{class:"hljs-string"},"'8'"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option"),(0,n.Uk)(">")]),(0,n.Uk)("\n      "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-option-group"),(0,n.Uk)(">")]),(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"ki-select"),(0,n.Uk)(">")]),(0,n.Uk)("\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"template"),(0,n.Uk)(">")]),(0,n.Uk)("\n\n  "),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Wm)("span",{class:"javascript"},[(0,n.Uk)("\n    "),(0,n.Wm)("span",{class:"hljs-keyword"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"hljs-keyword"},"default"),(0,n.Uk)(" {\n      "),(0,n.Wm)("span",{class:"hljs-function"},[(0,n.Wm)("span",{class:"hljs-title"},"data"),(0,n.Uk)("("),(0,n.Wm)("span",{class:"hljs-params"}),(0,n.Uk)(")")]),(0,n.Uk)(" {\n        "),(0,n.Wm)("span",{class:"hljs-keyword"},"return"),(0,n.Uk)(" {\n          "),(0,n.Wm)("span",{class:"hljs-attr"},"select"),(0,n.Uk)(": [],\n        };\n      },\n    };\n  ")]),(0,n.Wm)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n.Wm)("span",{class:"hljs-name"},"script"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1),V=(0,n.uE)("<h3>Select Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>select 绑定值，指定了 <code>multiple</code> 后必须为数组</td><td>string / number / array</td><td>—</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>clearable</td><td>是否可清除</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>placeholder</td><td>原生 placeholder</td><td>string</td><td>—</td><td>请选择</td></tr></tbody></table><h3>Select Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调函数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发</td><td>(value: string / number / (string / number)[]) =&gt; void</td></tr><tr><td>clear</td><td>清除后触发</td><td>() =&gt; void</td></tr></tbody></table><h3>Option Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>select 绑定值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>label</td><td>展示值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table><h3>OptionGroup Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>分组名称</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>",8);function _(s,a){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable}))),l.push.apply(l,n)}return l}function P(s){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?_(Object(l),!0).forEach((function(a){S(s,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):_(Object(l)).forEach((function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(l,a))}))}return s}function S(s,a,l){return a in s?Object.defineProperty(s,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[a]=l,s}l(7941),l(2526),l(7327),l(5003),l(4747),l(9337);const D={name:"component-doc",components:{"ki-demo0":P({render:function(s,a){var l=(0,n.up)("ki-option"),t=(0,n.up)("ki-select");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)(t,{modelValue:s.select,"onUpdate:modelValue":a[1]||(a[1]=function(a){return s.select=a}),style:{width:"300px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"选项1",value:"1"}),(0,n.Wm)(l,{label:"选项2",value:"2"}),(0,n.Wm)(l,{label:"选项3",value:"3"}),(0,n.Wm)(l,{label:"选项4",value:"4"})]})),_:1},8,["modelValue"])])}},{data:function(){return{select:""}}}),"ki-demo1":P({render:function(s,a){var l=(0,n.up)("ki-option"),t=(0,n.up)("ki-select");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)(t,{modelValue:s.select,"onUpdate:modelValue":a[1]||(a[1]=function(a){return s.select=a}),style:{width:"300px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"选项1",value:"1"}),(0,n.Wm)(l,{label:"选项2",value:"2",disabled:""}),(0,n.Wm)(l,{label:"选项3",value:"3"}),(0,n.Wm)(l,{label:"选项4",value:"4",disabled:""})]})),_:1},8,["modelValue"])])}},{data:function(){return{select:""}}}),"ki-demo2":P({render:function(s,a){var l=(0,n.up)("ki-option"),t=(0,n.up)("ki-select");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)(t,{modelValue:s.select,"onUpdate:modelValue":a[1]||(a[1]=function(a){return s.select=a}),style:{width:"300px"},disabled:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"选项1",value:"1"}),(0,n.Wm)(l,{label:"选项2",value:"2"}),(0,n.Wm)(l,{label:"选项3",value:"3"}),(0,n.Wm)(l,{label:"选项4",value:"4"})]})),_:1},8,["modelValue"])])}},{data:function(){return{select:""}}}),"ki-demo3":P({render:function(s,a){var l=(0,n.up)("ki-option"),t=(0,n.up)("ki-select");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)(t,{modelValue:s.select,"onUpdate:modelValue":a[1]||(a[1]=function(a){return s.select=a}),style:{width:"300px"},clearable:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"选项1",value:"1"}),(0,n.Wm)(l,{label:"选项2",value:"2"}),(0,n.Wm)(l,{label:"选项3",value:"3"}),(0,n.Wm)(l,{label:"选项4",value:"4"})]})),_:1},8,["modelValue"])])}},{data:function(){return{select:""}}}),"ki-demo4":P({render:function(s,a){var l=(0,n.up)("ki-option"),t=(0,n.up)("ki-select");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)(t,{modelValue:s.select,"onUpdate:modelValue":a[1]||(a[1]=function(a){return s.select=a}),style:{width:"300px"},clearable:"",multiple:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"选项1",value:"1"}),(0,n.Wm)(l,{label:"选项2",value:"2"}),(0,n.Wm)(l,{label:"选项3",value:"3"}),(0,n.Wm)(l,{label:"选项4",value:"4"})]})),_:1},8,["modelValue"])])}},{data:function(){return{select:[]}}}),"ki-demo5":P({render:function(s,a){var l=(0,n.up)("ki-option"),t=(0,n.up)("ki-option-group"),e=(0,n.up)("ki-select");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)(e,{modelValue:s.select,"onUpdate:modelValue":a[1]||(a[1]=function(a){return s.select=a}),style:{width:"300px"},clearable:"",multiple:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(t,{label:"热门城市"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"北京",value:"1"}),(0,n.Wm)(l,{label:"上海",value:"2"}),(0,n.Wm)(l,{label:"广州",value:"3"}),(0,n.Wm)(l,{label:"深圳",value:"4"})]})),_:1}),(0,n.Wm)(t,{label:"城市名"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{label:"海南",value:"5"}),(0,n.Wm)(l,{label:"广州",value:"6"}),(0,n.Wm)(l,{label:"济南",value:"7"}),(0,n.Wm)(l,{label:"长沙",value:"8"})]})),_:1})]})),_:1},8,["modelValue"])])}},{data:function(){return{select:[]}}})},render:function(s,a,l,_,P,S){var D=(0,n.up)("ki-demo0"),E=(0,n.up)("demo-block"),A=(0,n.up)("ki-demo1"),C=(0,n.up)("ki-demo2"),B=(0,n.up)("ki-demo3"),G=(0,n.up)("ki-demo4"),T=(0,n.up)("ki-demo5");return(0,n.wg)(),(0,n.j4)("section",null,[t,e,m,p,(0,n.Wm)(E,null,{source:(0,n.w5)((function(){return[(0,n.Wm)(D)]})),default:(0,n.w5)((function(){return[k]})),_:1}),c,W,(0,n.Wm)(E,null,{source:(0,n.w5)((function(){return[(0,n.Wm)(A)]})),default:(0,n.w5)((function(){return[h]})),_:1}),U,r,(0,n.Wm)(E,null,{source:(0,n.w5)((function(){return[(0,n.Wm)(C)]})),default:(0,n.w5)((function(){return[j]})),_:1}),i,o,(0,n.Wm)(E,null,{description:(0,n.w5)((function(){return[u]})),source:(0,n.w5)((function(){return[(0,n.Wm)(B)]})),default:(0,n.w5)((function(){return[d]})),_:1}),g,b,(0,n.Wm)(E,null,{description:(0,n.w5)((function(){return[v]})),source:(0,n.w5)((function(){return[(0,n.Wm)(G)]})),default:(0,n.w5)((function(){return[f]})),_:1}),w,y,(0,n.Wm)(E,null,{description:(0,n.w5)((function(){return[O]})),source:(0,n.w5)((function(){return[(0,n.Wm)(T)]})),default:(0,n.w5)((function(){return[x]})),_:1}),V])}}}}]);