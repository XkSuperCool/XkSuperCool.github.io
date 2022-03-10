(self.webpackChunkki_ui=self.webpackChunkki_ui||[]).push([[675],{1675:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>L});var t=a(6252),l=(0,t._)("h2",null,"MessageBox 弹框",-1),e=(0,t._)("p",null,"模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。",-1),c=(0,t._)("h3",null,"消息提示",-1),r=(0,t._)("p",null,"当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。",-1),o=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.alert("),(0,t._)("span",{class:"hljs-string"},"'这里是内容区域..'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"confirmButtonText"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'知道了'"),(0,t.Uk)(",\n            "),(0,t._)("span",{class:"hljs-attr"},"callback"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-function"},[(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"},"action"),(0,t.Uk)(") =>")]),(0,t.Uk)(" {\n              "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success("),(0,t._)("span",{class:"hljs-string"},[(0,t.Uk)("`消息提示: "),(0,t._)("span",{class:"hljs-subst"},"${action}"),(0,t.Uk)("`")]),(0,t.Uk)(");\n            },\n          })\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),p=(0,t._)("h3",null,"确认消息",-1),i=(0,t._)("p",null,"提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。",-1),d=(0,t._)("div",null,[(0,t._)("p",null,[(0,t._)("code",null,"confirm"),(0,t.Uk)(" 模拟了系统的 "),(0,t._)("code",null,"confirm"),(0,t.Uk)(", 它有一个 "),(0,t._)("code",null,"iconType"),(0,t.Uk)(" 属性，可以展示 "),(0,t._)("code",null,"confirm"),(0,t.Uk)(" 的不同状态，同时示例中还使用 "),(0,t._)("code",null,"Promise"),(0,t.Uk)(" 来处理用户的确认和取消。")])],-1),k=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.confirm("),(0,t._)("span",{class:"hljs-string"},"'此操作将永久删除该文件, 是否继续?'"),(0,t.Uk)(", "),(0,t._)("span",{class:"hljs-string"},"'提示信息'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"iconType"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'warning'"),(0,t.Uk)(",\n          }).then("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success("),(0,t._)("span",{class:"hljs-string"},"'ok'"),(0,t.Uk)(");\n          }).catch("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.warning("),(0,t._)("span",{class:"hljs-string"},"'cancel'"),(0,t.Uk)(");\n          });\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),h=(0,t._)("h3",null,"提交内容",-1),_=(0,t._)("p",null,"当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。",-1),u=(0,t._)("div",null,[(0,t._)("p",null,[(0,t._)("code",null,"prompt"),(0,t.Uk)(" 模拟了系统的 "),(0,t._)("code",null,"prompt"),(0,t.Uk)(", 它可以接收到用户输入的内容，同时还可以通过 "),(0,t._)("code",null,"inputPattern"),(0,t.Uk)(" 属性对内容进行校验。")])],-1),U=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.prompt("),(0,t._)("span",{class:"hljs-string"},"'请输入邮箱'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"inputPattern"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-regexp"},"/[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/"),(0,t.Uk)(",\n            inputErrorMessage: "),(0,t._)("span",{class:"hljs-string"},"'请输入正确的邮箱号'"),(0,t.Uk)(",\n            "),(0,t._)("span",{class:"hljs-attr"},"inputPlaceholder"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'请输入邮箱'"),(0,t.Uk)(",\n          }).then("),(0,t._)("span",{class:"hljs-function"},[(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"},"value"),(0,t.Uk)(") =>")]),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success("),(0,t._)("span",{class:"hljs-string"},[(0,t.Uk)("`您的邮箱是: "),(0,t._)("span",{class:"hljs-subst"},"${value}"),(0,t.Uk)("`")]),(0,t.Uk)(");\n          }).catch("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.warning("),(0,t._)("span",{class:"hljs-string"},"'cancel'"),(0,t.Uk)(");\n          });\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),j=(0,t._)("h3",null,"局中布局",-1),g=(0,t._)("p",null,"内容支持居中布局",-1),m=(0,t._)("div",null,[(0,t._)("p",null,[(0,t.Uk)("设置 "),(0,t._)("code",null,"center"),(0,t.Uk)(" 属性可以使内容局中。")])],-1),f=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.confirm("),(0,t._)("span",{class:"hljs-string"},"'此操作将永久删除该文件, 是否继续?'"),(0,t.Uk)(", "),(0,t._)("span",{class:"hljs-string"},"'提示信息'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"iconType"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'warning'"),(0,t.Uk)(",\n            "),(0,t._)("span",{class:"hljs-attr"},"center"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-literal"},"true"),(0,t.Uk)(",\n            "),(0,t._)("span",{class:"hljs-attr"},"mask"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-literal"},"false"),(0,t.Uk)(",\n          }).then("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success("),(0,t._)("span",{class:"hljs-string"},"'ok'"),(0,t.Uk)(");\n          }).catch("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.warning("),(0,t._)("span",{class:"hljs-string"},"'cancel'"),(0,t.Uk)(");\n          });\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),w=(0,t._)("h3",null,"HTML 片段",-1),b=(0,t._)("p",null,"message 属性支持传入 HTML 片段。",-1),x=(0,t._)("div",null,[(0,t._)("p",null,[(0,t.Uk)("设置 "),(0,t._)("code",null,"dangerouslyUseHTMLString"),(0,t.Uk)(" 属性后 "),(0,t._)("code",null,"message"),(0,t.Uk)(" 属性就可以传递 "),(0,t._)("code",null,"HTML"),(0,t.Uk)(" 片段。")])],-1),y=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.alert("),(0,t._)("span",{class:"hljs-string"},"'<i>这是一个 <span style=\"color: orange;\">HTML</span> 片段</i>'"),(0,t.Uk)(", "),(0,t._)("span",{class:"hljs-string"},"'HTML 片段'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"dangerouslyUseHTMLString"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-literal"},"true"),(0,t.Uk)(",\n          }).then("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success("),(0,t._)("span",{class:"hljs-string"},"'ok'"),(0,t.Uk)(");\n          }).catch("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.warning("),(0,t._)("span",{class:"hljs-string"},"'cancel'"),(0,t.Uk)(");\n          });\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),B=(0,t._)("h3",null,"区分取消与关闭",-1),$=(0,t._)("p",null,"有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。",-1),v=(0,t._)("div",null,[(0,t._)("p",null,[(0,t.Uk)("设置 "),(0,t._)("code",null,"distinguishCancelAndClose"),(0,t.Uk)(" 可以区分点击的是取消按钮还是关闭按钮。")])],-1),M=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.confirm("),(0,t._)("span",{class:"hljs-string"},"'检测到未保存的内容，是否在离开页面前保存修改？'"),(0,t.Uk)(", "),(0,t._)("span",{class:"hljs-string"},"'确认信息'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"iconType"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'warning'"),(0,t.Uk)(",\n            "),(0,t._)("span",{class:"hljs-attr"},"distinguishCancelAndClose"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-literal"},"true"),(0,t.Uk)(",\n          }).then("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success({\n              "),(0,t._)("span",{class:"hljs-attr"},"content"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'保存修改'"),(0,t.Uk)(",\n            });\n          }).catch("),(0,t._)("span",{class:"hljs-function"},[(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"},"action"),(0,t.Uk)(") =>")]),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.info(action === "),(0,t._)("span",{class:"hljs-string"},"'cancel'"),(0,t.Uk)(" ? "),(0,t._)("span",{class:"hljs-string"},"'放弃保存并离开页面'"),(0,t.Uk)(" : "),(0,t._)("span",{class:"hljs-string"},"'停留在当前页面'"),(0,t.Uk)(");\n          });\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),T=(0,t._)("h3",null,"关闭前的回调",-1),C=(0,t._)("p",null,[(0,t.Uk)("指定 "),(0,t._)("code",null,"beforeClose"),(0,t.Uk)(" 后可以手动关闭 "),(0,t._)("code",null,"message box"),(0,t.Uk)("，它接受一个 "),(0,t._)("code",null,"callback"),(0,t.Uk)(" 调用后即可关闭, 如果点击的是确认按钮还会有一个 "),(0,t._)("code",null,"loading"),(0,t.Uk)(" 效果。")],-1),E=(0,t._)("pre",null,[(0,t._)("code",{class:"language-html"},[(0,t.Uk)("  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(" @"),(0,t._)("span",{class:"hljs-attr"},"click"),(0,t.Uk)("="),(0,t._)("span",{class:"hljs-string"},"'open'"),(0,t.Uk)(">")]),(0,t.Uk)("点击打开 Message Box"),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"a"),(0,t.Uk)(">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"template"),(0,t.Uk)(">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("<"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t._)("span",{class:"javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"hljs-keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"hljs-keyword"},"default"),(0,t.Uk)(" {\n      "),(0,t._)("span",{class:"hljs-attr"},"methods"),(0,t.Uk)(": {\n        "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"open"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"}),(0,t.Uk)(")")]),(0,t.Uk)(" {\n          "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$messageBox.confirm("),(0,t._)("span",{class:"hljs-string"},"'此操作将永久删除该文件, 是否继续?'"),(0,t.Uk)(", "),(0,t._)("span",{class:"hljs-string"},"'提示信息'"),(0,t.Uk)(", {\n            "),(0,t._)("span",{class:"hljs-attr"},"iconType"),(0,t.Uk)(": "),(0,t._)("span",{class:"hljs-string"},"'warning'"),(0,t.Uk)(",\n            "),(0,t._)("span",{class:"hljs-function"},[(0,t._)("span",{class:"hljs-title"},"beforeClose"),(0,t.Uk)("("),(0,t._)("span",{class:"hljs-params"},"done, action"),(0,t.Uk)(")")]),(0,t.Uk)(" {\n              "),(0,t._)("span",{class:"hljs-keyword"},"if"),(0,t.Uk)(" (action === "),(0,t._)("span",{class:"hljs-string"},"'confirm'"),(0,t.Uk)(") {\n                "),(0,t._)("span",{class:"hljs-built_in"},"setTimeout"),(0,t.Uk)("(done, "),(0,t._)("span",{class:"hljs-number"},"2000"),(0,t.Uk)(");\n              } "),(0,t._)("span",{class:"hljs-keyword"},"else"),(0,t.Uk)(" {\n                done();\n              }\n            },\n          }).then("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.success("),(0,t._)("span",{class:"hljs-string"},"'文件删除成功！'"),(0,t.Uk)(");\n          }).catch("),(0,t._)("span",{class:"hljs-function"},"() =>"),(0,t.Uk)(" {\n            "),(0,t._)("span",{class:"hljs-built_in"},"this"),(0,t.Uk)(".$message.warning("),(0,t._)("span",{class:"hljs-string"},"'取消删除文件！'"),(0,t.Uk)(");\n          });\n        },\n      },\n    };\n  ")]),(0,t._)("span",{class:"hljs-tag"},[(0,t.Uk)("</"),(0,t._)("span",{class:"hljs-name"},"script"),(0,t.Uk)(">")]),(0,t.Uk)("\n")])],-1),O=(0,t.uE)("<h3>MessageBox 方法</h3><p>MessageBox 会在 Vue.prototype 上添加四个方法：$messageBox、$messageBox.alert、$messageBox.confirm、$messageBox.prompt，它们的调用参数为：</p><ul><li><code>$messageBox(options)</code></li><li><code>$messageBox.alert(message, title, [,options])</code></li><li><code>$messageBox.confirm(message, title, [,options])</code></li><li><code>$messageBox.prompt(message, title, [,options])</code></li></ul><h3>Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>弹框类型</td><td>string</td><td>alert / confirm / prompt</td><td>—</td></tr><tr><td>title</td><td>提示标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>提示内容信息</td><td>string</td><td>—</td><td>—</td></tr><tr><td>center</td><td>是否局中布局</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>iconType</td><td>icon 类型</td><td>string</td><td>success / info / error / warning</td><td>—</td></tr><tr><td>mask</td><td>是否显示遮罩层</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>lockScroll</td><td>是否在 MessageBox 出现时将 body 滚动锁定</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>inputPattern</td><td>prompt 输入框的校验正则</td><td>RegExp</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>校验失败的提示信息</td><td>string</td><td>—</td><td>输入的数据不合法！</td></tr><tr><td>inputPlaceholder</td><td>输入框的 placeholder</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>prompt 使用的 input 类型</td><td>string</td><td>text / password / textarea</td><td>text</td></tr><tr><td>inputValue</td><td>prompt 使用的 input 初始值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>点击遮罩层是否可以关闭 MessageBox</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>showCancelButton</td><td>是否显示 cancel 按钮</td><td>boolean</td><td>true / false</td><td>默认在 type 不是 alert 时为 true</td></tr><tr><td>showConfirmButton</td><td>是否显示 confirm 按钮</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>cancelButtonText</td><td>取消按钮文字</td><td>string</td><td>—</td><td>取消</td></tr><tr><td>confirmButtonText</td><td>确定按钮文字</td><td>string</td><td>—</td><td>确定</td></tr><tr><td>closeOnHashChange</td><td>是否在 hashchange 时关闭 MessageBox</td><td>boolean</td><td>true / false</td><td>默认在 type 不是 alert 时为 true</td></tr><tr><td>dangerouslyUseHTMLString</td><td>message 是否支持 HTML 片段</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>distinguishCancelAndClose</td><td>是否区分取消触发和关闭触发</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>callback</td><td>点击按钮的回调</td><td>(action: Action, value: string) =&gt; void</td><td>—</td><td>—</td></tr><tr><td>beforeClose</td><td>关闭 MessageBox 前的回调(需要手动调用 done 函数)</td><td>(done: () =&gt; void, action: Action) =&gt; void</td><td>—</td><td>—</td></tr></tbody></table><h3>Action 类型</h3><ul><li><code>confirm</code> 点击确认按钮</li><li><code>cancel</code> 点击取消按钮</li><li><code>close</code> 点击关闭按钮，也就是右上角的叉叉（只有在 <code>distinguishCancelAndClose = true</code> 才会出现 <code>close</code>）</li></ul>",7);function P(s,n){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable}))),a.push.apply(a,t)}return a}function W(s){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?P(Object(a),!0).forEach((function(n){H(s,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(a,n))}))}return s}function H(s,n,a){return n in s?Object.defineProperty(s,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[n]=a,s}a(7941),a(2526),a(7327),a(5003),a(4747),a(9337);const L={name:"component-doc",components:{"ki-demo0":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.alert("这里是内容区域..",{confirmButtonText:"知道了",callback:function(n){s.$message.success("消息提示: ".concat(n))}})}}}),"ki-demo1":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.confirm("此操作将永久删除该文件, 是否继续?","提示信息",{iconType:"warning"}).then((function(){s.$message.success("ok")})).catch((function(){s.$message.warning("cancel")}))}}}),"ki-demo2":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.prompt("请输入邮箱",{inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"请输入正确的邮箱号",inputPlaceholder:"请输入邮箱"}).then((function(n){s.$message.success("您的邮箱是: ".concat(n))})).catch((function(){s.$message.warning("cancel")}))}}}),"ki-demo3":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.confirm("此操作将永久删除该文件, 是否继续?","提示信息",{iconType:"warning",center:!0,mask:!1}).then((function(){s.$message.success("ok")})).catch((function(){s.$message.warning("cancel")}))}}}),"ki-demo4":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.alert('<i>这是一个 <span style="color: orange;">HTML</span> 片段</i>',"HTML 片段",{dangerouslyUseHTMLString:!0}).then((function(){s.$message.success("ok")})).catch((function(){s.$message.warning("cancel")}))}}}),"ki-demo5":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.confirm("检测到未保存的内容，是否在离开页面前保存修改？","确认信息",{iconType:"warning",distinguishCancelAndClose:!0}).then((function(){s.$message.success({content:"保存修改"})})).catch((function(n){s.$message.info("cancel"===n?"放弃保存并离开页面":"停留在当前页面")}))}}}),"ki-demo6":W({render:function(s,n){return(0,t.wg)(),_createElementBlock("div",null,[_createElementVNode("a",{onClick:n[0]||(n[0]=function(){return s.open&&s.open.apply(s,arguments)})},"点击打开 Message Box")])}},{methods:{open:function(){var s=this;this.$messageBox.confirm("此操作将永久删除该文件, 是否继续?","提示信息",{iconType:"warning",beforeClose:function(s,n){"confirm"===n?setTimeout(s,2e3):s()}}).then((function(){s.$message.success("文件删除成功！")})).catch((function(){s.$message.warning("取消删除文件！")}))}}})},render:function(s,n,a,P,W,H){var L=(0,t.up)("ki-demo0"),V=(0,t.up)("demo-block"),A=(0,t.up)("ki-demo1"),N=(0,t.up)("ki-demo2"),S=(0,t.up)("ki-demo3"),D=(0,t.up)("ki-demo4"),R=(0,t.up)("ki-demo5"),q=(0,t.up)("ki-demo6");return(0,t.wg)(),(0,t.iD)("section",null,[l,e,c,r,(0,t.Wm)(V,null,{source:(0,t.w5)((function(){return[(0,t.Wm)(L)]})),default:(0,t.w5)((function(){return[o]})),_:1}),p,i,(0,t.Wm)(V,null,{description:(0,t.w5)((function(){return[d]})),source:(0,t.w5)((function(){return[(0,t.Wm)(A)]})),default:(0,t.w5)((function(){return[k]})),_:1}),h,_,(0,t.Wm)(V,null,{description:(0,t.w5)((function(){return[u]})),source:(0,t.w5)((function(){return[(0,t.Wm)(N)]})),default:(0,t.w5)((function(){return[U]})),_:1}),j,g,(0,t.Wm)(V,null,{description:(0,t.w5)((function(){return[m]})),source:(0,t.w5)((function(){return[(0,t.Wm)(S)]})),default:(0,t.w5)((function(){return[f]})),_:1}),w,b,(0,t.Wm)(V,null,{description:(0,t.w5)((function(){return[x]})),source:(0,t.w5)((function(){return[(0,t.Wm)(D)]})),default:(0,t.w5)((function(){return[y]})),_:1}),B,$,(0,t.Wm)(V,null,{description:(0,t.w5)((function(){return[v]})),source:(0,t.w5)((function(){return[(0,t.Wm)(R)]})),default:(0,t.w5)((function(){return[M]})),_:1}),T,C,(0,t.Wm)(V,null,{source:(0,t.w5)((function(){return[(0,t.Wm)(q)]})),default:(0,t.w5)((function(){return[E]})),_:1}),O])}}}}]);