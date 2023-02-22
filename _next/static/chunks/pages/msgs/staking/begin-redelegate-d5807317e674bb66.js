(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{9967:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/msgs/staking/begin-redelegate",function(){return s(9753)}])},8177:function(e,n,s){"use strict";var a=s(5893),t=s(1163);n.Z={project:{link:"https://github.com/leapwallet/notifications-webhook-demo"},docsRepositoryBase:"https://github.com/leapwallet/notifications-webhook-demo/blob/main/docs/pages",logo:(0,a.jsx)("strong",{children:"Leap Alerts"}),useNextSeoProps(){let{asPath:e}=(0,t.useRouter)();if("/"!==e)return{titleTemplate:"%s - Leap Alerts"}},chat:{link:"https://twitter.com/leap_wallet",icon:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 248 204",children:(0,a.jsx)("path",{fill:"currentColor",d:"M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"})})},faviconGlyph:"\uD83D\uDD14"}},9753:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return r.Z}});var a=s(5893),t=s(8808),o=s(1235),i=s(8177);s(5513);var l=s(1151);s(5675);var r=s(2243);function d(e){let n=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",a:"a",strong:"strong",pre:"pre",span:"span"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:(0,a.jsx)(n.code,{children:"cosmos.staking.beginRedelegate"})}),"\n",(0,a.jsx)(n.p,{children:"A transaction where a delegator moved their delegation to a different validator."}),"\n",(0,a.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsxs)(n.p,{children:["| Field              | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |\n| ------------------ | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |\n| ",(0,a.jsx)(n.code,{children:"__type"}),"           |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | Always ",(0,a.jsx)(n.code,{children:'"cosmos.staking.beginRedelegate"'}),".                                                                                                                                                    | ",(0,a.jsx)(n.code,{children:'"cosmos.staking.beginRedelegate"'}),"                                   |\n| ",(0,a.jsx)(n.code,{children:"blockchain"}),"       |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | The blockchain this transaction was executed on. This field will have one of the ",(0,a.jsx)(n.a,{href:"../../blockchains.md",children:"values"})," in the ",(0,a.jsx)(n.strong,{children:"ID"})," column where the ",(0,a.jsx)(n.strong,{children:"Ecosystem"})," column's value is ",(0,a.jsx)(n.strong,{children:"Cosmos"}),". | ",(0,a.jsx)(n.code,{children:'"juno"'}),"                                                             |\n| ",(0,a.jsx)(n.code,{children:"txHash"}),"           |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | The transaction's hash.                                                                                                                                                                       | ",(0,a.jsx)(n.code,{children:'"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"'})," |\n| ",(0,a.jsx)(n.code,{children:"isSuccessful"}),"     |   Yes    | ",(0,a.jsx)(n.code,{children:"boolean"})," | Whether the transaction succeeded or failed.                                                                                                                                                  | ",(0,a.jsx)(n.code,{children:"true"}),"                                                               |\n| ",(0,a.jsx)(n.code,{children:"memo"}),"             |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | A note the user added while making the transaction. Maybe be empty (",(0,a.jsx)(n.code,{children:'""'}),").                                                                                                                    | ",(0,a.jsx)(n.code,{children:'"I owed you 1.5 ATOM since you paid for lunch."'}),"                    |\n| ",(0,a.jsx)(n.code,{children:"delegatorAddress"})," |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | Delegator's address                                                                                                                                                                           | ",(0,a.jsx)(n.code,{children:'"bitsong160rddm8k5yy2psshx65gwj26gzr8ww27skxe7m"'}),"                   |\n| ",(0,a.jsx)(n.code,{children:"fromValidator"}),"    |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | The address of the validator the delegation was previously for.                                                                                                                               | ",(0,a.jsx)(n.code,{children:'"bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2"'}),"            |\n| ",(0,a.jsx)(n.code,{children:"toValidator"}),"      |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | The address of the validator who is to receive the delegation.                                                                                                                                |                                                                      | ",(0,a.jsx)(n.code,{children:'"bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2"'})," |\n| ",(0,a.jsx)(n.code,{children:"denomination"}),"     |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | The denomination of the token undelegated.                                                                                                                                                    | ",(0,a.jsx)(n.code,{children:'"uatom"'}),"                                                            |\n| ",(0,a.jsx)(n.code,{children:"quantity"}),"         |   Yes    | ",(0,a.jsx)(n.code,{children:"string"}),"  | The quantity of ",(0,a.jsx)(n.code,{children:"denomination"})," undelegated.                                                                                                                                                   | ",(0,a.jsx)(n.code,{children:'"100"'}),"                                                              |"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{"data-language":"json","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"json","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"__type"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"cosmos.staking.beginRedelegate"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"blockchain"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"juno"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"txHash"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"isSuccessful"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"memo"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'""'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"delegatorAddress"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bitsong160rddm8k5yy2psshx65gwj26gzr8ww27skxe7m"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"fromValidator"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"toValidator"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"denomination"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"uatom"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"quantity"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"100"'})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}e=s.hmd(e),(0,t.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},nextraLayout:o.ZP,hot:e.hot,pageOpts:{filePath:"pages/msgs/staking/begin-redelegate.md",route:"/msgs/staking/begin-redelegate",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Introduction",messages:"Messages",blockchains:"Blockchains",msgs:"Messages",demo_link:{title:"Try Webhook Demo",href:"https://notifications-webhook-demo.leapwallet.io",type:"page",newWindow:!0}}},{kind:"MdxPage",name:"blockchains",route:"/blockchains"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"messages",route:"/messages"},{kind:"Folder",name:"msgs",route:"/msgs",children:[{kind:"Folder",name:"authz",route:"/msgs/authz",children:[{kind:"MdxPage",name:"exec",route:"/msgs/authz/exec"},{kind:"MdxPage",name:"grant",route:"/msgs/authz/grant"},{kind:"MdxPage",name:"revoke",route:"/msgs/authz/revoke"},{kind:"Meta",data:{exec:"Exec",grant:"Grant",revoke:"Revoke"}}]},{kind:"Folder",name:"bank",route:"/msgs/bank",children:[{kind:"MdxPage",name:"multi-send",route:"/msgs/bank/multi-send"},{kind:"MdxPage",name:"send",route:"/msgs/bank/send"},{kind:"Meta",data:{"multi-send":"Multi Send",send:"Send"}}]},{kind:"Folder",name:"fee-grant",route:"/msgs/fee-grant",children:[{kind:"MdxPage",name:"grant-allowance",route:"/msgs/fee-grant/grant-allowance"},{kind:"MdxPage",name:"revoke-allowance",route:"/msgs/fee-grant/revoke-allowance"},{kind:"Meta",data:{"grant-allowance":"Grant Allowance","revoke-allowance":"Revoke Allowance"}}]},{kind:"Folder",name:"gamm",route:"/msgs/gamm",children:[{kind:"MdxPage",name:"create",route:"/msgs/gamm/create"},{kind:"MdxPage",name:"exit-exact-and-swap",route:"/msgs/gamm/exit-exact-and-swap"},{kind:"MdxPage",name:"exit-max-and-swap",route:"/msgs/gamm/exit-max-and-swap"},{kind:"MdxPage",name:"exit",route:"/msgs/gamm/exit"},{kind:"MdxPage",name:"join",route:"/msgs/gamm/join"},{kind:"MdxPage",name:"swap-exact-and-join",route:"/msgs/gamm/swap-exact-and-join"},{kind:"MdxPage",name:"swap-exact",route:"/msgs/gamm/swap-exact"},{kind:"MdxPage",name:"swap-max-and-join",route:"/msgs/gamm/swap-max-and-join"},{kind:"MdxPage",name:"swap-max",route:"/msgs/gamm/swap-max"},{kind:"Meta",data:{create:"Create",exit:"Exit","exit-exact-and-swap":"Exit Exact and Swap","exit-max-and-swap":"Exit Max and Swap",join:"Join","swap-exact":"Swap Exact","swap-exact-and-join":"Swap Exact and Join","swap-max":"Swap Max","swap-max-and-join":"Swap Max and Join"}}]},{kind:"Folder",name:"gov",route:"/msgs/gov",children:[{kind:"MdxPage",name:"deposit",route:"/msgs/gov/deposit"},{kind:"MdxPage",name:"submit-proposal",route:"/msgs/gov/submit-proposal"},{kind:"MdxPage",name:"vote",route:"/msgs/gov/vote"},{kind:"Meta",data:{deposit:"Deposit","submit-proposal":"Submit Proposal",vote:"Vote"}}]},{kind:"Folder",name:"ibc",route:"/msgs/ibc",children:[{kind:"MdxPage",name:"receive",route:"/msgs/ibc/receive"},{kind:"MdxPage",name:"send",route:"/msgs/ibc/send"},{kind:"Meta",data:{receive:"Receive",send:"Send"}}]},{kind:"Folder",name:"lockup",route:"/msgs/lockup",children:[{kind:"MdxPage",name:"lock",route:"/msgs/lockup/lock"},{kind:"MdxPage",name:"unlock-all",route:"/msgs/lockup/unlock-all"},{kind:"MdxPage",name:"unlock",route:"/msgs/lockup/unlock"},{kind:"Meta",data:{lock:"Lock",unlock:"Unlock","unlock-all":"Unlock All"}}]},{kind:"Folder",name:"slashing",route:"/msgs/slashing",children:[{kind:"MdxPage",name:"unjail",route:"/msgs/slashing/unjail"},{kind:"Meta",data:{unjail:"Unjail"}}]},{kind:"Folder",name:"staking",route:"/msgs/staking",children:[{kind:"MdxPage",name:"begin-redelegate",route:"/msgs/staking/begin-redelegate"},{kind:"MdxPage",name:"create-validator",route:"/msgs/staking/create-validator"},{kind:"MdxPage",name:"delegate",route:"/msgs/staking/delegate"},{kind:"MdxPage",name:"edit-validator",route:"/msgs/staking/edit-validator"},{kind:"MdxPage",name:"undelegate",route:"/msgs/staking/undelegate"},{kind:"Meta",data:{"begin-redelegate":"Begin Redelegate","create-validator":"Create Validator",delegate:"Delegate","edit-validator":"Edit Validator",undelegate:"Undelegate"}}]},{kind:"Folder",name:"superfluid",route:"/msgs/superfluid",children:[{kind:"MdxPage",name:"delegate",route:"/msgs/superfluid/delegate"},{kind:"MdxPage",name:"lock-and-delegate",route:"/msgs/superfluid/lock-and-delegate"},{kind:"MdxPage",name:"undelegate",route:"/msgs/superfluid/undelegate"},{kind:"MdxPage",name:"unlock-and-undelegate",route:"/msgs/superfluid/unlock-and-undelegate"},{kind:"Meta",data:{delegate:"Delegate","lock-and-delegate":"Lock and Delegate",undelegate:"Undelegate","unlock-and-undelegate":"Unlock and Undelegate"}}]}]}],headings:[{depth:1,value:"cosmos.staking.beginRedelegate",id:"cosmosstakingbeginredelegate"},{depth:2,value:"Schema",id:"schema"},{depth:2,value:"Example",id:"example"}],flexsearch:{codeblocks:!0},title:"cosmos.staking.beginRedelegate"},themeConfig:i.Z,pageNextRoute:"/msgs/staking/begin-redelegate",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[774,478,888,179],function(){return e(e.s=9967)}),_N_E=e.O()}]);