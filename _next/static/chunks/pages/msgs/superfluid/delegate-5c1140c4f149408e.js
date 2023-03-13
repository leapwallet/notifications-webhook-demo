(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4390],{5968:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/msgs/superfluid/delegate",function(){return n(6462)}])},8177:function(e,s,n){"use strict";var a=n(5893),t=n(1163);s.Z={project:{link:"https://github.com/leapwallet/notifications-webhook-demo"},docsRepositoryBase:"https://github.com/leapwallet/notifications-webhook-demo/blob/main/docs/pages",logo:(0,a.jsx)("strong",{children:"Leap Alerts"}),useNextSeoProps(){let{asPath:e}=(0,t.useRouter)();return"/"!==e?{titleTemplate:"%s - Leap Alerts",description:"Leap Alerts - A simple webhook service for you to receive transactions in the cosmos blockchain universe"}:{title:"Documentation - Leap Alerts",description:"Leap Alerts - A simple webhook service for you to receive transactions in the cosmos blockchain universe"}},chat:{link:"https://twitter.com/leap_wallet",icon:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 248 204",children:(0,a.jsx)("path",{fill:"currentColor",d:"M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"})})},faviconGlyph:"\uD83D\uDD14",footer:{text:(0,a.jsxs)("span",{children:["MIT ",new Date().getFullYear()," \xa9"," ",(0,a.jsx)("a",{href:"https://leapwallet.io",target:"_blank",rel:"noopener noreferrer",children:"LeapWallet"})]})}}},6462:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return d.Z}});var a=n(5893),t=n(8808),i=n(1235),r=n(8177);n(5513);var l=n(1151);n(5675);var d=n(2243);function o(e){let s=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",strong:"strong",pre:"pre",span:"span"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:(0,a.jsx)(s.code,{children:"cosmos.superfluid.delegate"})}),"\n",(0,a.jsx)(s.p,{children:"An account delegated their OSMO tokens using a lock to a validator."}),"\n",(0,a.jsx)(s.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Field"}),(0,a.jsx)(s.th,{align:"center",children:"Required"}),(0,a.jsx)(s.th,{children:"Data type"}),(0,a.jsx)(s.th,{children:"Explanation"}),(0,a.jsx)(s.th,{children:"Example"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"__type"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsxs)(s.td,{children:["Always ",(0,a.jsx)(s.code,{children:'"cosmos.superfluid.delegate"'}),"."]}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'"cosmos.superfluid.delegate"'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"blockchain"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsxs)(s.td,{children:["The blockchain this transaction was executed on. This field will have one of the ",(0,a.jsx)(s.a,{href:"../../blockchains.md",children:"values"})," in the ",(0,a.jsx)(s.strong,{children:"ID"})," column where the ",(0,a.jsx)(s.strong,{children:"Ecosystem"})," column's value is ",(0,a.jsx)(s.strong,{children:"Cosmos"}),"."]}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'"juno"'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"txHash"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{children:"The transaction's hash."}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"isSuccessful"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"boolean"})}),(0,a.jsx)(s.td,{children:"Whether the transaction succeeded or failed."}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"true"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"memo"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsxs)(s.td,{children:["A note the user added while making the transaction. Maybe be empty (",(0,a.jsx)(s.code,{children:'""'}),")."]}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'"I owed you 1.5 ATOM since you paid for lunch."'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"sender"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{children:"Delegator's address"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"validatorAddress"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:"string`"}),(0,a.jsx)(s.td,{children:"Validator's address"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:'"osmovaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpf6t4agt"'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"lockId"})}),(0,a.jsx)(s.td,{align:"center",children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"number"})}),(0,a.jsx)(s.td,{children:"Lock's ID"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"1209600"})})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"__type"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"cosmos.superfluid.delegate"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"blockchain"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"juno"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"txHash"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"isSuccessful"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"memo"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'""'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"sender"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"validatorAddress"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"osmovaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpf6t4agt"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lockId"'}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1209600"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}e=n.hmd(e),(0,t.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)},nextraLayout:i.ZP,hot:e.hot,pageOpts:{filePath:"pages/msgs/superfluid/delegate.md",route:"/msgs/superfluid/delegate",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Introduction",messages:"Messages",blockchains:"Blockchains",msgs:"Messages"}},{kind:"MdxPage",name:"blockchains",route:"/blockchains"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"messages",route:"/messages"},{kind:"Folder",name:"msgs",route:"/msgs",children:[{kind:"Folder",name:"authz",route:"/msgs/authz",children:[{kind:"MdxPage",name:"exec",route:"/msgs/authz/exec"},{kind:"MdxPage",name:"grant",route:"/msgs/authz/grant"},{kind:"MdxPage",name:"revoke",route:"/msgs/authz/revoke"},{kind:"Meta",data:{exec:"Exec",grant:"Grant",revoke:"Revoke"}}]},{kind:"Folder",name:"bank",route:"/msgs/bank",children:[{kind:"MdxPage",name:"multi-send",route:"/msgs/bank/multi-send"},{kind:"MdxPage",name:"send",route:"/msgs/bank/send"},{kind:"Meta",data:{"multi-send":"Multi Send",send:"Send"}}]},{kind:"Folder",name:"fee-grant",route:"/msgs/fee-grant",children:[{kind:"MdxPage",name:"grant-allowance",route:"/msgs/fee-grant/grant-allowance"},{kind:"MdxPage",name:"revoke-allowance",route:"/msgs/fee-grant/revoke-allowance"},{kind:"Meta",data:{"grant-allowance":"Grant Allowance","revoke-allowance":"Revoke Allowance"}}]},{kind:"Folder",name:"gamm",route:"/msgs/gamm",children:[{kind:"MdxPage",name:"create",route:"/msgs/gamm/create"},{kind:"MdxPage",name:"exit-exact-and-swap",route:"/msgs/gamm/exit-exact-and-swap"},{kind:"MdxPage",name:"exit-max-and-swap",route:"/msgs/gamm/exit-max-and-swap"},{kind:"MdxPage",name:"exit",route:"/msgs/gamm/exit"},{kind:"MdxPage",name:"join",route:"/msgs/gamm/join"},{kind:"MdxPage",name:"swap-exact-and-join",route:"/msgs/gamm/swap-exact-and-join"},{kind:"MdxPage",name:"swap-exact",route:"/msgs/gamm/swap-exact"},{kind:"MdxPage",name:"swap-max-and-join",route:"/msgs/gamm/swap-max-and-join"},{kind:"MdxPage",name:"swap-max",route:"/msgs/gamm/swap-max"},{kind:"Meta",data:{create:"Create",exit:"Exit","exit-exact-and-swap":"Exit Exact and Swap","exit-max-and-swap":"Exit Max and Swap",join:"Join","swap-exact":"Swap Exact","swap-exact-and-join":"Swap Exact and Join","swap-max":"Swap Max","swap-max-and-join":"Swap Max and Join"}}]},{kind:"Folder",name:"gov",route:"/msgs/gov",children:[{kind:"MdxPage",name:"deposit",route:"/msgs/gov/deposit"},{kind:"MdxPage",name:"submit-proposal",route:"/msgs/gov/submit-proposal"},{kind:"MdxPage",name:"vote",route:"/msgs/gov/vote"},{kind:"Meta",data:{deposit:"Deposit","submit-proposal":"Submit Proposal",vote:"Vote"}}]},{kind:"Folder",name:"ibc",route:"/msgs/ibc",children:[{kind:"MdxPage",name:"receive",route:"/msgs/ibc/receive"},{kind:"MdxPage",name:"send",route:"/msgs/ibc/send"},{kind:"Meta",data:{receive:"Receive",send:"Send"}}]},{kind:"Folder",name:"lockup",route:"/msgs/lockup",children:[{kind:"MdxPage",name:"lock",route:"/msgs/lockup/lock"},{kind:"MdxPage",name:"unlock-all",route:"/msgs/lockup/unlock-all"},{kind:"MdxPage",name:"unlock",route:"/msgs/lockup/unlock"},{kind:"Meta",data:{lock:"Lock",unlock:"Unlock","unlock-all":"Unlock All"}}]},{kind:"Folder",name:"near",route:"/msgs/near",children:[{kind:"Folder",name:"social",route:"/msgs/near/social",children:[{kind:"MdxPage",name:"follow",route:"/msgs/near/social/follow"},{kind:"MdxPage",name:"set",route:"/msgs/near/social/set"},{kind:"Meta",data:{follow:"Follow",set:"Set"}}]},{kind:"Folder",name:"staking",route:"/msgs/near/staking",children:[{kind:"MdxPage",name:"stake",route:"/msgs/near/staking/stake"},{kind:"MdxPage",name:"unstake-all",route:"/msgs/near/staking/unstake-all"},{kind:"MdxPage",name:"unstake",route:"/msgs/near/staking/unstake"},{kind:"MdxPage",name:"withdraw-all",route:"/msgs/near/staking/withdraw-all"},{kind:"Meta",data:{stake:"Stake",unstake:"Unstake","unstake-all":"Unstake All","withdraw-all":"Withdraw All"}}]},{kind:"Folder",name:"transfer",route:"/msgs/near/transfer",children:[{kind:"MdxPage",name:"native",route:"/msgs/near/transfer/native"},{kind:"MdxPage",name:"non-native",route:"/msgs/near/transfer/non-native"},{kind:"Meta",data:{native:"Native","non-native":"Non Native"}}]}]},{kind:"Folder",name:"slashing",route:"/msgs/slashing",children:[{kind:"MdxPage",name:"unjail",route:"/msgs/slashing/unjail"},{kind:"Meta",data:{unjail:"Unjail"}}]},{kind:"Folder",name:"staking",route:"/msgs/staking",children:[{kind:"MdxPage",name:"begin-redelegate",route:"/msgs/staking/begin-redelegate"},{kind:"MdxPage",name:"create-validator",route:"/msgs/staking/create-validator"},{kind:"MdxPage",name:"delegate",route:"/msgs/staking/delegate"},{kind:"MdxPage",name:"edit-validator",route:"/msgs/staking/edit-validator"},{kind:"MdxPage",name:"undelegate",route:"/msgs/staking/undelegate"},{kind:"Meta",data:{"begin-redelegate":"Begin Redelegate","create-validator":"Create Validator",delegate:"Delegate","edit-validator":"Edit Validator",undelegate:"Undelegate"}}]},{kind:"Folder",name:"superfluid",route:"/msgs/superfluid",children:[{kind:"MdxPage",name:"delegate",route:"/msgs/superfluid/delegate"},{kind:"MdxPage",name:"lock-and-delegate",route:"/msgs/superfluid/lock-and-delegate"},{kind:"MdxPage",name:"undelegate",route:"/msgs/superfluid/undelegate"},{kind:"MdxPage",name:"unlock-and-undelegate",route:"/msgs/superfluid/unlock-and-undelegate"},{kind:"Meta",data:{delegate:"Delegate","lock-and-delegate":"Lock and Delegate",undelegate:"Undelegate","unlock-and-undelegate":"Unlock and Undelegate"}}]}]}],headings:[{depth:1,value:"cosmos.superfluid.delegate",id:"cosmossuperfluiddelegate"},{depth:2,value:"Schema",id:"schema"},{depth:2,value:"Example",id:"example"}],flexsearch:{codeblocks:!0},title:"cosmos.superfluid.delegate"},themeConfig:r.Z,pageNextRoute:"/msgs/superfluid/delegate",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[9774,1478,2888,179],function(){return e(e.s=5968)}),_N_E=e.O()}]);