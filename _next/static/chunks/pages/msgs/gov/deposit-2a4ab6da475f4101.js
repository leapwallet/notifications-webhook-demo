(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{1305:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/msgs/gov/deposit",function(){return n(440)}])},8177:function(e,s,n){"use strict";var t=n(5893),i=n(1163);s.Z={project:{link:"https://github.com/leapwallet/notifications-webhook-demo"},docsRepositoryBase:"https://github.com/leapwallet/notifications-webhook-demo/blob/main/docs/pages",logo:(0,t.jsx)("strong",{children:"Leap Alerts"}),useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();return"/"!==e?{titleTemplate:"%s - Leap Alerts",description:"Leap Alerts - A simple webhook service for you to receive transactions in the cosmos blockchain universe"}:{title:"Documentation - Leap Alerts",description:"Leap Alerts - A simple webhook service for you to receive transactions in the cosmos blockchain universe"}},chat:{link:"https://twitter.com/leap_wallet",icon:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 248 204",children:(0,t.jsx)("path",{fill:"currentColor",d:"M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"})})},faviconGlyph:"\uD83D\uDD14",footer:{text:(0,t.jsxs)("span",{children:["MIT ",new Date().getFullYear()," \xa9"," ",(0,t.jsx)("a",{href:"https://leapwallet.io",target:"_blank",rel:"noopener noreferrer",children:"LeapWallet"})]})}}},440:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l.Z}});var t=n(5893),i=n(8808),a=n(1235),o=n(8177);n(5513);var r=n(1151);n(5675);var l=n(2243);function d(e){let s=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",strong:"strong",h3:"h3",pre:"pre",span:"span"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:(0,t.jsx)(s.code,{children:"cosmos.gov.deposit"})}),"\n",(0,t.jsx)(s.p,{children:"A non-initial governance proposal deposit."}),"\n",(0,t.jsx)(s.h2,{id:"schema",children:"Schema"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{align:"center",children:"Required"}),(0,t.jsx)(s.th,{children:"Data type"}),(0,t.jsx)(s.th,{children:"Explanation"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"__type"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:["Always ",(0,t.jsx)(s.code,{children:'"cosmos.gov.deposit"'}),"."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"cosmos.gov.deposit"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"blockchain"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:["The blockchain this transaction was executed on. This field will have one of the ",(0,t.jsx)(s.a,{href:"../../blockchains.md",children:"values"})," in the ",(0,t.jsx)(s.strong,{children:"ID"})," column where the ",(0,t.jsx)(s.strong,{children:"Ecosystem"})," column's value is ",(0,t.jsx)(s.strong,{children:"Cosmos"}),"."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"juno"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"txHash"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"The transaction's hash."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"isSuccessful"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsx)(s.td,{children:"Whether the transaction succeeded or failed."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"memo"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:["A note the user added while making the transaction. Maybe be empty (",(0,t.jsx)(s.code,{children:'""'}),")."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"I owed you 1.5 ATOM since you paid for lunch."'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"proposalId"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Proposal ID"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"depositor"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Depositor's address"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"tokens"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"array"})," of ",(0,t.jsx)(s.a,{href:"#token",children:(0,t.jsx)(s.code,{children:"token"})}),"s"]}),(0,t.jsx)(s.td,{children:"Deposit"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"isStartOfVotingPeriod"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"true"})," if this transaction caused the governance proposal to enter the voting period. ",(0,t.jsx)(s.code,{children:"false"})," if either the proposal was already in the voting period or still isn't."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"token",children:(0,t.jsx)(s.code,{children:"token"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{align:"center",children:"Required"}),(0,t.jsx)(s.th,{children:"Data type"}),(0,t.jsx)(s.th,{children:"Explanation"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"denomination"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"uatom"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"quantity"})}),(0,t.jsx)(s.td,{align:"center",children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"100"'})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"__type"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"cosmos.gov.deposit"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"blockchain"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"juno"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"txHash"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"isSuccessful"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"memo"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'""'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"proposalId"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"depositor"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"tokens"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"denomination"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"uatom"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"quantity"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"100"'})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"isStartOfVotingPeriod"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}e=n.hmd(e),(0,i.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)},nextraLayout:a.ZP,hot:e.hot,pageOpts:{filePath:"pages/msgs/gov/deposit.md",route:"/msgs/gov/deposit",frontMatter:{},pageMap:[{kind:"Meta",data:{demo_link:{title:"Try Webhook Demo",href:"https://notifications-webhook-demo.leapwallet.io",type:"page",newWindow:!0},index:"Introduction",messages:"Messages",blockchains:"Blockchains",msgs:"Messages"}},{kind:"MdxPage",name:"blockchains",route:"/blockchains"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"messages",route:"/messages"},{kind:"Folder",name:"msgs",route:"/msgs",children:[{kind:"Folder",name:"authz",route:"/msgs/authz",children:[{kind:"MdxPage",name:"exec",route:"/msgs/authz/exec"},{kind:"MdxPage",name:"grant",route:"/msgs/authz/grant"},{kind:"MdxPage",name:"revoke",route:"/msgs/authz/revoke"},{kind:"Meta",data:{exec:"Exec",grant:"Grant",revoke:"Revoke"}}]},{kind:"Folder",name:"bank",route:"/msgs/bank",children:[{kind:"MdxPage",name:"multi-send",route:"/msgs/bank/multi-send"},{kind:"MdxPage",name:"send",route:"/msgs/bank/send"},{kind:"Meta",data:{"multi-send":"Multi Send",send:"Send"}}]},{kind:"Folder",name:"fee-grant",route:"/msgs/fee-grant",children:[{kind:"MdxPage",name:"grant-allowance",route:"/msgs/fee-grant/grant-allowance"},{kind:"MdxPage",name:"revoke-allowance",route:"/msgs/fee-grant/revoke-allowance"},{kind:"Meta",data:{"grant-allowance":"Grant Allowance","revoke-allowance":"Revoke Allowance"}}]},{kind:"Folder",name:"gamm",route:"/msgs/gamm",children:[{kind:"MdxPage",name:"create",route:"/msgs/gamm/create"},{kind:"MdxPage",name:"exit-exact-and-swap",route:"/msgs/gamm/exit-exact-and-swap"},{kind:"MdxPage",name:"exit-max-and-swap",route:"/msgs/gamm/exit-max-and-swap"},{kind:"MdxPage",name:"exit",route:"/msgs/gamm/exit"},{kind:"MdxPage",name:"join",route:"/msgs/gamm/join"},{kind:"MdxPage",name:"swap-exact-and-join",route:"/msgs/gamm/swap-exact-and-join"},{kind:"MdxPage",name:"swap-exact",route:"/msgs/gamm/swap-exact"},{kind:"MdxPage",name:"swap-max-and-join",route:"/msgs/gamm/swap-max-and-join"},{kind:"MdxPage",name:"swap-max",route:"/msgs/gamm/swap-max"},{kind:"Meta",data:{create:"Create",exit:"Exit","exit-exact-and-swap":"Exit Exact and Swap","exit-max-and-swap":"Exit Max and Swap",join:"Join","swap-exact":"Swap Exact","swap-exact-and-join":"Swap Exact and Join","swap-max":"Swap Max","swap-max-and-join":"Swap Max and Join"}}]},{kind:"Folder",name:"gov",route:"/msgs/gov",children:[{kind:"MdxPage",name:"deposit",route:"/msgs/gov/deposit"},{kind:"MdxPage",name:"submit-proposal",route:"/msgs/gov/submit-proposal"},{kind:"MdxPage",name:"vote",route:"/msgs/gov/vote"},{kind:"Meta",data:{deposit:"Deposit","submit-proposal":"Submit Proposal",vote:"Vote"}}]},{kind:"Folder",name:"ibc",route:"/msgs/ibc",children:[{kind:"MdxPage",name:"receive",route:"/msgs/ibc/receive"},{kind:"MdxPage",name:"send",route:"/msgs/ibc/send"},{kind:"Meta",data:{receive:"Receive",send:"Send"}}]},{kind:"Folder",name:"lockup",route:"/msgs/lockup",children:[{kind:"MdxPage",name:"lock",route:"/msgs/lockup/lock"},{kind:"MdxPage",name:"unlock-all",route:"/msgs/lockup/unlock-all"},{kind:"MdxPage",name:"unlock",route:"/msgs/lockup/unlock"},{kind:"Meta",data:{lock:"Lock",unlock:"Unlock","unlock-all":"Unlock All"}}]},{kind:"Folder",name:"slashing",route:"/msgs/slashing",children:[{kind:"MdxPage",name:"unjail",route:"/msgs/slashing/unjail"},{kind:"Meta",data:{unjail:"Unjail"}}]},{kind:"Folder",name:"staking",route:"/msgs/staking",children:[{kind:"MdxPage",name:"begin-redelegate",route:"/msgs/staking/begin-redelegate"},{kind:"MdxPage",name:"create-validator",route:"/msgs/staking/create-validator"},{kind:"MdxPage",name:"delegate",route:"/msgs/staking/delegate"},{kind:"MdxPage",name:"edit-validator",route:"/msgs/staking/edit-validator"},{kind:"MdxPage",name:"undelegate",route:"/msgs/staking/undelegate"},{kind:"Meta",data:{"begin-redelegate":"Begin Redelegate","create-validator":"Create Validator",delegate:"Delegate","edit-validator":"Edit Validator",undelegate:"Undelegate"}}]},{kind:"Folder",name:"superfluid",route:"/msgs/superfluid",children:[{kind:"MdxPage",name:"delegate",route:"/msgs/superfluid/delegate"},{kind:"MdxPage",name:"lock-and-delegate",route:"/msgs/superfluid/lock-and-delegate"},{kind:"MdxPage",name:"undelegate",route:"/msgs/superfluid/undelegate"},{kind:"MdxPage",name:"unlock-and-undelegate",route:"/msgs/superfluid/unlock-and-undelegate"},{kind:"Meta",data:{delegate:"Delegate","lock-and-delegate":"Lock and Delegate",undelegate:"Undelegate","unlock-and-undelegate":"Unlock and Undelegate"}}]}]}],headings:[{depth:1,value:"cosmos.gov.deposit",id:"cosmosgovdeposit"},{depth:2,value:"Schema",id:"schema"},{depth:3,value:"token",id:"token"},{depth:2,value:"Example",id:"example"}],flexsearch:{codeblocks:!0},title:"cosmos.gov.deposit"},themeConfig:o.Z,pageNextRoute:"/msgs/gov/deposit",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[774,478,888,179],function(){return e(e.s=1305)}),_N_E=e.O()}]);