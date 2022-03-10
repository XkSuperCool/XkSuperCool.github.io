(self.webpackChunkki_ui=self.webpackChunkki_ui||[]).push([[531],{4531:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>L});var l=n(6252),t=(0,l._)("h2",null,"Table 表格",-1),r=(0,l._)("p",null,"用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。",-1),e=(0,l._)("h3",null,"基础用法",-1),c=(0,l._)("p",null,"基础的表格展示用法。",-1),k=(0,l._)("pre",null,[(0,l._)("code",{class:"language-html"},[(0,l.Uk)("  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"ki-table"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":columns"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'columns'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":data"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'data'"),(0,l.Uk)(" />")]),(0,l.Uk)("\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l._)("span",{class:"javascript"},[(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-keyword"},"export"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-keyword"},"default"),(0,l.Uk)(" {\n      "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"data"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"}),(0,l.Uk)(")")]),(0,l.Uk)(" {\n        "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" {\n          "),(0,l._)("span",{class:"hljs-attr"},"data"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"1"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoMing'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"18"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"2"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoZhang'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"20"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"3"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLi'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"21"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"4"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLiu'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"22"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n          ],\n          "),(0,l._)("span",{class:"hljs-attr"},"columns"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'name'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'名称'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'age'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'年龄'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"150"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'address'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'地址'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'操作'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"render"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"},"h"),(0,l.Uk)(")")]),(0,l.Uk)(" {\n                "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" [\n                  h("),(0,l._)("span",{class:"hljs-string"},"'a'"),(0,l.Uk)(", "),(0,l._)("span",{class:"hljs-string"},"'查看'"),(0,l.Uk)("),\n                  h("),(0,l._)("span",{class:"hljs-string"},"'a'"),(0,l.Uk)(", { "),(0,l._)("span",{class:"hljs-attr"},"style"),(0,l.Uk)(": { "),(0,l._)("span",{class:"hljs-attr"},"marginLeft"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'10px'"),(0,l.Uk)(", "),(0,l._)("span",{class:"hljs-attr"},"color"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'red'"),(0,l.Uk)(" } }, "),(0,l._)("span",{class:"hljs-string"},"'删除'"),(0,l.Uk)(")\n                ];\n              },\n            },\n          ],\n        };\n      },\n    };\n  ")]),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l.Uk)("\n")])],-1),p=(0,l._)("h3",null,"带斑马纹表格",-1),h=(0,l._)("p",null,"使用带斑马纹的表格，可以更容易区分出不同行的数据。",-1),_=(0,l._)("div",null,[(0,l._)("p",null,[(0,l._)("code",null,"stripe"),(0,l.Uk)(" 展示一个带有斑马纹的表格，他是一个 "),(0,l._)("code",null,"Boolean"),(0,l.Uk)(" 值。")])],-1),i=(0,l._)("pre",null,[(0,l._)("code",{class:"language-html"},[(0,l.Uk)("  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"ki-table"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":columns"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'columns'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":data"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'data'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},"stripe"),(0,l.Uk)(" />")]),(0,l.Uk)("\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l._)("span",{class:"javascript"},[(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-keyword"},"export"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-keyword"},"default"),(0,l.Uk)(" {\n      "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"data"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"}),(0,l.Uk)(")")]),(0,l.Uk)(" {\n        "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" {\n          "),(0,l._)("span",{class:"hljs-attr"},"data"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"1"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoMing'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"18"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"2"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoZhang'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"20"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"3"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLi'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"21"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"4"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLiu'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"22"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n          ],\n          "),(0,l._)("span",{class:"hljs-attr"},"columns"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'name'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'名称'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'age'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'年龄'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"150"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'address'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'地址'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'操作'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"align"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'center'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"render"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"},"h"),(0,l.Uk)(")")]),(0,l.Uk)(" {\n                "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" [\n                  h("),(0,l._)("span",{class:"hljs-string"},"'a'"),(0,l.Uk)(", "),(0,l._)("span",{class:"hljs-string"},"'查看'"),(0,l.Uk)("),\n                  h("),(0,l._)("span",{class:"hljs-string"},"'a'"),(0,l.Uk)(", { "),(0,l._)("span",{class:"hljs-attr"},"style"),(0,l.Uk)(": { "),(0,l._)("span",{class:"hljs-attr"},"color"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'#ff0f0f'"),(0,l.Uk)(", "),(0,l._)("span",{class:"hljs-attr"},"marginLeft"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'10px'"),(0,l.Uk)(" }, }, "),(0,l._)("span",{class:"hljs-string"},"'删除'"),(0,l.Uk)("),\n                ];\n              },\n            },\n          ],\n        };\n      },\n    };\n  ")]),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l.Uk)("\n")])],-1),U=(0,l._)("h3",null,"带表框的表格",-1),j=(0,l._)("p",null,"基础的表格展示用法。",-1),d=(0,l._)("pre",null,[(0,l._)("code",{class:"language-html"},[(0,l.Uk)("  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"ki-table"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":columns"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'columns'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":data"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'data'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},"border"),(0,l.Uk)(" />")]),(0,l.Uk)("\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l._)("span",{class:"javascript"},[(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-keyword"},"export"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-keyword"},"default"),(0,l.Uk)(" {\n      "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"data"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"}),(0,l.Uk)(")")]),(0,l.Uk)(" {\n        "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" {\n          "),(0,l._)("span",{class:"hljs-attr"},"data"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"1"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoMing'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"18"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"2"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoZhang'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"20"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n              {\n                "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"3"),(0,l.Uk)(",\n                "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLi'"),(0,l.Uk)(",\n                "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"21"),(0,l.Uk)(",\n                "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n              },\n              {\n                "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"4"),(0,l.Uk)(",\n                "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLiu'"),(0,l.Uk)(",\n                "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"22"),(0,l.Uk)(",\n                "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n              },\n          ],\n          "),(0,l._)("span",{class:"hljs-attr"},"columns"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'name'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'名称'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'age'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'年龄'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'address'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'地址'"),(0,l.Uk)(",\n            },\n          ],\n        };\n      },\n    };\n  ")]),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l.Uk)("\n")])],-1),u=(0,l._)("h3",null,"带状态表格",-1),o=(0,l._)("p",null,"可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。",-1),m=(0,l._)("div",null,[(0,l._)("p",null,[(0,l._)("code",null,"rowClassName"),(0,l.Uk)(" 属性是一个函数，它接收两个参数 "),(0,l._)("code",null,"row"),(0,l.Uk)("、"),(0,l._)("code",null,"index"),(0,l.Uk)(", 你可以根据需求返回一个 "),(0,l._)("code",null,"css class"),(0,l.Uk)("。")])],-1),g=(0,l._)("pre",null,[(0,l._)("code",{class:"language-html"},[(0,l.Uk)("  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"ki-table"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":columns"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'columns'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":data"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'data'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},"border"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":rowClassName"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'rowClassName'"),(0,l.Uk)(" />")]),(0,l.Uk)("\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l._)("span",{class:"javascript"},[(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-keyword"},"export"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-keyword"},"default"),(0,l.Uk)(" {\n      "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"data"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"}),(0,l.Uk)(")")]),(0,l.Uk)(" {\n        "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" {\n          "),(0,l._)("span",{class:"hljs-attr"},"data"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"1"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoMing'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"18"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"2"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoZhang'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"20"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"3"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLi'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"21"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"4"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoLiu'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"22"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n            },\n          ],\n          "),(0,l._)("span",{class:"hljs-attr"},"columns"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'name'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'名称'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'age'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'年龄'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'address'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'地址'"),(0,l.Uk)(",\n            },\n          ],\n        };\n      },\n      "),(0,l._)("span",{class:"hljs-attr"},"methods"),(0,l.Uk)(": {\n        "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"rowClassName"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"},"row, index"),(0,l.Uk)(")")]),(0,l.Uk)(" {\n          "),(0,l._)("span",{class:"hljs-keyword"},"if"),(0,l.Uk)(" (index === "),(0,l._)("span",{class:"hljs-number"},"1"),(0,l.Uk)(") {\n            "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-string"},"'warning-row'"),(0,l.Uk)(";\n          }\n          "),(0,l._)("span",{class:"hljs-keyword"},"if"),(0,l.Uk)(" (index === "),(0,l._)("span",{class:"hljs-number"},"3"),(0,l.Uk)(") {\n            "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-string"},"'success-row'"),(0,l.Uk)(";\n          }\n        },\n      },\n    };\n  ")]),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l.Uk)("\n")])],-1),w=(0,l._)("h3",null,"固定表头",-1),b=(0,l._)("p",null,"纵向内容过多时，可选择固定表头。",-1),f=(0,l._)("div",null,[(0,l._)("p",null,[(0,l.Uk)("指定 "),(0,l._)("code",null,"height"),(0,l.Uk)(" 属性后即可实现固定表头，无需额外代码。")])],-1),y=(0,l._)("pre",null,[(0,l._)("code",{class:"language-html"},[(0,l.Uk)("  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"ki-table"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":columns"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'columns'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":data"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'data'"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},"border"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-attr"},":height"),(0,l.Uk)("="),(0,l._)("span",{class:"hljs-string"},"'300'"),(0,l.Uk)(" />")]),(0,l.Uk)("\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"template"),(0,l.Uk)(">")]),(0,l.Uk)("\n\n  "),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("<"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l._)("span",{class:"javascript"},[(0,l.Uk)("\n    "),(0,l._)("span",{class:"hljs-keyword"},"export"),(0,l.Uk)(),(0,l._)("span",{class:"hljs-keyword"},"default"),(0,l.Uk)(" {\n      "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"data"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"}),(0,l.Uk)(")")]),(0,l.Uk)(" {\n        "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" {\n          "),(0,l._)("span",{class:"hljs-attr"},"data"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-built_in"},"Array"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-number"},"10"),(0,l.Uk)(").fill("),(0,l._)("span",{class:"hljs-number"},"0"),(0,l.Uk)(").map("),(0,l._)("span",{class:"hljs-function"},[(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"},"_, index"),(0,l.Uk)(") =>")]),(0,l.Uk)(" ({\n            "),(0,l._)("span",{class:"hljs-attr"},"id"),(0,l.Uk)(": index,\n            "),(0,l._)("span",{class:"hljs-attr"},"name"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'XiaoMing'"),(0,l.Uk)(",\n            "),(0,l._)("span",{class:"hljs-attr"},"age"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"18"),(0,l.Uk)(",\n            "),(0,l._)("span",{class:"hljs-attr"},"address"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'Jinan'"),(0,l.Uk)(",\n          })),\n          "),(0,l._)("span",{class:"hljs-attr"},"columns"),(0,l.Uk)(": [\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'name'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'名称'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'age'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'年龄'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"key"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'address'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'地址'"),(0,l.Uk)(",\n            },\n            {\n              "),(0,l._)("span",{class:"hljs-attr"},"title"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'操作'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"align"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'center'"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-attr"},"width"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-number"},"200"),(0,l.Uk)(",\n              "),(0,l._)("span",{class:"hljs-function"},[(0,l._)("span",{class:"hljs-title"},"render"),(0,l.Uk)("("),(0,l._)("span",{class:"hljs-params"},"h"),(0,l.Uk)(")")]),(0,l.Uk)(" {\n                "),(0,l._)("span",{class:"hljs-keyword"},"return"),(0,l.Uk)(" [\n                  h("),(0,l._)("span",{class:"hljs-string"},"'a'"),(0,l.Uk)(", "),(0,l._)("span",{class:"hljs-string"},"'查看'"),(0,l.Uk)("),\n                  h("),(0,l._)("span",{class:"hljs-string"},"'a'"),(0,l.Uk)(", { "),(0,l._)("span",{class:"hljs-attr"},"style"),(0,l.Uk)(": { "),(0,l._)("span",{class:"hljs-attr"},"marginLeft"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'10px'"),(0,l.Uk)(", "),(0,l._)("span",{class:"hljs-attr"},"color"),(0,l.Uk)(": "),(0,l._)("span",{class:"hljs-string"},"'red'"),(0,l.Uk)(" } }, "),(0,l._)("span",{class:"hljs-string"},"'删除'"),(0,l.Uk)(")\n                ];\n              },\n            },\n          ],\n        };\n      },\n    };\n  ")]),(0,l._)("span",{class:"hljs-tag"},[(0,l.Uk)("</"),(0,l._)("span",{class:"hljs-name"},"script"),(0,l.Uk)(">")]),(0,l.Uk)("\n")])],-1);function J(s,a){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable}))),n.push.apply(n,l)}return n}function X(s){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?J(Object(n),!0).forEach((function(a){v(s,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(n,a))}))}return s}function v(s,a,n){return a in s?Object.defineProperty(s,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[a]=n,s}n(1249),n(3290),n(7941),n(2526),n(7327),n(5003),n(4747),n(9337);const L={name:"component-doc",components:{"ki-demo0":X({render:function(s,a){var n=(0,l.up)("ki-table");return(0,l.wg)(),_createElementBlock("div",null,[(0,l.Wm)(n,{columns:s.columns,data:s.data},null,8,["columns","data"])])}},{data:function(){return{data:[{id:1,name:"XiaoMing",age:18,address:"Jinan"},{id:2,name:"XiaoZhang",age:20,address:"Jinan"},{id:3,name:"XiaoLi",age:21,address:"Jinan"},{id:4,name:"XiaoLiu",age:22,address:"Jinan"}],columns:[{key:"name",title:"名称",width:200},{key:"age",title:"年龄",width:150},{key:"address",title:"地址"},{title:"操作",render:function(s){return[s("a","查看"),s("a",{style:{marginLeft:"10px",color:"red"}},"删除")]}}]}}}),"ki-demo1":X({render:function(s,a){var n=(0,l.up)("ki-table");return(0,l.wg)(),_createElementBlock("div",null,[(0,l.Wm)(n,{columns:s.columns,data:s.data,stripe:""},null,8,["columns","data"])])}},{data:function(){return{data:[{id:1,name:"XiaoMing",age:18,address:"Jinan"},{id:2,name:"XiaoZhang",age:20,address:"Jinan"},{id:3,name:"XiaoLi",age:21,address:"Jinan"},{id:4,name:"XiaoLiu",age:22,address:"Jinan"}],columns:[{key:"name",title:"名称",width:200},{key:"age",title:"年龄",width:150},{key:"address",title:"地址"},{title:"操作",width:200,align:"center",render:function(s){return[s("a","查看"),s("a",{style:{color:"#ff0f0f",marginLeft:"10px"}},"删除")]}}]}}}),"ki-demo2":X({render:function(s,a){var n=(0,l.up)("ki-table");return(0,l.wg)(),_createElementBlock("div",null,[(0,l.Wm)(n,{columns:s.columns,data:s.data,border:""},null,8,["columns","data"])])}},{data:function(){return{data:[{id:1,name:"XiaoMing",age:18,address:"Jinan"},{id:2,name:"XiaoZhang",age:20,address:"Jinan"},{id:3,name:"XiaoLi",age:21,address:"Jinan"},{id:4,name:"XiaoLiu",age:22,address:"Jinan"}],columns:[{key:"name",title:"名称",width:200},{key:"age",title:"年龄",width:200},{key:"address",title:"地址"}]}}}),"ki-demo3":X({render:function(s,a){var n=(0,l.up)("ki-table");return(0,l.wg)(),_createElementBlock("div",null,[(0,l.Wm)(n,{columns:s.columns,data:s.data,border:"",rowClassName:s.rowClassName},null,8,["columns","data","rowClassName"])])}},{data:function(){return{data:[{id:1,name:"XiaoMing",age:18,address:"Jinan"},{id:2,name:"XiaoZhang",age:20,address:"Jinan"},{id:3,name:"XiaoLi",age:21,address:"Jinan"},{id:4,name:"XiaoLiu",age:22,address:"Jinan"}],columns:[{key:"name",title:"名称",width:200},{key:"age",title:"年龄",width:200},{key:"address",title:"地址"}]}},methods:{rowClassName:function(s,a){return 1===a?"warning-row":3===a?"success-row":void 0}}}),"ki-demo4":X({render:function(s,a){var n=(0,l.up)("ki-table");return(0,l.wg)(),_createElementBlock("div",null,[(0,l.Wm)(n,{columns:s.columns,data:s.data,border:"",height:300},null,8,["columns","data"])])}},{data:function(){return{data:Array(10).fill(0).map((function(s,a){return{id:a,name:"XiaoMing",age:18,address:"Jinan"}})),columns:[{key:"name",title:"名称",width:200},{key:"age",title:"年龄",width:200},{key:"address",title:"地址"},{title:"操作",align:"center",width:200,render:function(s){return[s("a","查看"),s("a",{style:{marginLeft:"10px",color:"red"}},"删除")]}}]}}})},render:function(s,a,n,J,X,v){var L=(0,l.up)("ki-demo0"),O=(0,l.up)("demo-block"),x=(0,l.up)("ki-demo1"),W=(0,l.up)("ki-demo2"),C=(0,l.up)("ki-demo3"),M=(0,l.up)("ki-demo4");return(0,l.wg)(),(0,l.iD)("section",null,[t,r,e,c,(0,l.Wm)(O,null,{source:(0,l.w5)((function(){return[(0,l.Wm)(L)]})),default:(0,l.w5)((function(){return[k]})),_:1}),p,h,(0,l.Wm)(O,null,{description:(0,l.w5)((function(){return[_]})),source:(0,l.w5)((function(){return[(0,l.Wm)(x)]})),default:(0,l.w5)((function(){return[i]})),_:1}),U,j,(0,l.Wm)(O,null,{source:(0,l.w5)((function(){return[(0,l.Wm)(W)]})),default:(0,l.w5)((function(){return[d]})),_:1}),u,o,(0,l.Wm)(O,null,{description:(0,l.w5)((function(){return[m]})),source:(0,l.w5)((function(){return[(0,l.Wm)(C)]})),default:(0,l.w5)((function(){return[g]})),_:1}),w,b,(0,l.Wm)(O,null,{description:(0,l.w5)((function(){return[f]})),source:(0,l.w5)((function(){return[(0,l.Wm)(M)]})),default:(0,l.w5)((function(){return[y]})),_:1})])}}}}]);