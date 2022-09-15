"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1485],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(o),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6938:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(7462),a=(o(7294),o(4137));const r={slug:"fusion-build-a-connector",title:"\ud83d\udd0c Build A Connector Live!",authors:["julia"],tags:["30DaysOfFusion"],draft:!1},i=void 0,s={permalink:"/30daysof/blog/fusion-build-a-connector",source:"@site/blog/fusion/2022-09-14.md",title:"\ud83d\udd0c Build A Connector Live!",description:"Hello Day 3!",date:"2022-09-14T00:00:00.000Z",formattedDate:"September 14, 2022",tags:[{label:"30DaysOfFusion",permalink:"/30daysof/blog/tags/30-days-of-fusion"}],readingTime:3.145,hasTruncateMarker:!1,authors:[{name:"Julia Muiruri",title:"Cloud Advocate, Microsoft",url:"https://github.com/juliamuiruri4",imageURL:"https://github.com/juliamuiruri4.png",key:"julia"}],frontMatter:{slug:"fusion-build-a-connector",title:"\ud83d\udd0c Build A Connector Live!",authors:["julia"],tags:["30DaysOfFusion"],draft:!1},prevItem:{title:"\ud83d\udd0c Hello, 30DaysOf Fusion!",permalink:"/30daysof/blog/hello-fusion"},nextItem:{title:"\ud83d\udcc8 Hello, 30DaysOf Data Analytics!",permalink:"/30daysof/blog/hello-data-analytics"}},c={authorsImageUrls:[void 0]},l=[{value:"Hello Day 3!",id:"hello-day-3",level:2},{value:"Day 3: Summary",id:"day-3-summary",level:2},{value:"Connector Usecase",id:"connector-usecase",level:3},{value:"What we covered today",id:"what-we-covered-today",level:2},{value:"Step-by-step - Build a connector",id:"step-by-step---build-a-connector",level:3},{value:"Next Steps",id:"next-steps",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/30daysof/docs/roadmaps/fusion"}),(0,a.kt)("meta",{name:"twitter:title",content:"30DaysOfFusion Kick-Off"}),(0,a.kt)("meta",{name:"twitter:description",content:"Join us for #30DaysOfLearning initiatives that take you from fundamental concepts to functional code to cloud deployment!"}),(0,a.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/30daysof/assets/images/fusion-f731f3ccac8a8ee153416f249d058b46.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://aka.ms/TheConnectorHackathon"})),(0,a.kt)("h2",{id:"hello-day-3"},"Hello Day 3!"),(0,a.kt)("p",null,"Check out what we tackle today. But before that, here is what you have done so far ",(0,a.kt)("em",{parentName:"p"},"(You can catch up with the others if you are a step behind ...)")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Joined the ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/ConnectorSkillsChallenge"},"Cloud Skills Challenge")),(0,a.kt)("li",{parentName:"ol"},"Created a ",(0,a.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/educator-developer-blog/recap-of-day-2-onboarding-session-30days-of-learning-nigeria/ba-p/3490280?WT.mc_id=academic-0000-juliamuiruri"},"M365 & Power Apps Developer Account")),(0,a.kt)("li",{parentName:"ol"},"Talked to us on our ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/30daysof/discussions/16"},"Discussion Forum")," \ud83d\ude07")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Serverless September",src:o(3719).Z,width:"1600",height:"672"})),(0,a.kt)("h2",{id:"day-3-summary"},"Day 3: Summary"),(0,a.kt)("p",null,"We have just built a connector from scratch with you today and I'm sure you agree that it's a fun and easy process, right? ",(0,a.kt)("br",null),"\nBut why are we doing this? "),(0,a.kt)("h3",{id:"connector-usecase"},"Connector Usecase"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Team XYZ (a fusion team) comprises of a ",(0,a.kt)("strong",{parentName:"p"},"Business Manager")," (citizen developer building low code solutions on Power Platform), ",(0,a.kt)("strong",{parentName:"p"},"IT Admin"),", ",(0,a.kt)("strong",{parentName:"p"},"Researcher")," and ",(0,a.kt)("strong",{parentName:"p"},"Pro-Dev"),".\nThe ",(0,a.kt)("strong",{parentName:"p"},"Researcher")," has identified a new External Service (with a free & public API) that would greatly benefit their Business goals and they would like to access it directly from their system. However, the ",(0,a.kt)("strong",{parentName:"p"},"Business Manager"),", building the low code solutions lacks the coding background to use the API endpoints directly from his solution.\nThe ",(0,a.kt)("strong",{parentName:"p"},"Pro-Dev")," therefore steps up to fill in the gap by building a connector to wrap the API and publishes it to the organization's environment. The ",(0,a.kt)("strong",{parentName:"p"},"Business Manager")," then uses this connector to access the external service, helping the team hit their business goals and everyone is happy."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-we-covered-today"},"What we covered today"),(0,a.kt)("p",null,"Every person's role on the Power platform towards digital transformation.\n",(0,a.kt)("img",{alt:"Power Platform for Everyone",src:o(6764).Z,width:"1601",height:"899"})),(0,a.kt)("p",null,"What is a connector? ",(0,a.kt)("strong",{parentName:"p"},"Note: Connectors allow you to not only access Microsoft products, but also external services"),"\n",(0,a.kt)("img",{alt:"Connector definition",src:o(9948).Z,width:"1598",height:"903"})),(0,a.kt)("p",null,"Custom connectors are used to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add services not currently supported"),(0,a.kt)("li",{parentName:"ul"},"Expand an exisiting connector that doesn't have the trigger/action you want to use")),(0,a.kt)("h3",{id:"step-by-step---build-a-connector"},"Step-by-step - Build a connector"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," \ud83d\udcd6 Read the Docs/ know the API you want to build a connector for."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Start in one of the products (Power Apps, Power Automate or Logic Apps). You can choose one of the following options to start building your connector:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/connectors/custom-connectors/define-blank?WT.mc_id=academic-73999-juliamuiruri"},"Create one from blank"),". See example of the ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/CMCuNYVW4B0"},"SWAPI API (Star wars)")),(0,a.kt)("li",{parentName:"ol"},"Create from Azure Service ",(0,a.kt)("em",{parentName:"li"},"(Preview)")," - Super useful when using Azure API Management"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/connectors/custom-connectors/define-openapi-definition?WT.mc_id=academic-73999-juliamuiruri"},"Import an OpenAPI File")," (version 2)"),(0,a.kt)("li",{parentName:"ol"},"Import an OpenAPI from URL"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/connectors/custom-connectors/define-postman-collection?WT.mc_id=academic-73999-juliamuiruri"},"Import a Postman collection"),". Learn how to ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/connectors/custom-connectors/create-postman-collection?WT.mc_id=academic-73999-juliamuiruri"},"Create a Postman collection for a custom connector")),(0,a.kt)("li",{parentName:"ol"},"Import from GitHub")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," \ud83d\udd10 Set up the Authentication"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," \u26a1Define the operations (triggers/actions) for your connector. The action you want to create ",(0,a.kt)("strong",{parentName:"p"},"MUST")," be implemented by the API"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/connectors/custom-connectors/write-code?WT.mc_id=academic-73999-juliamuiruri"},"Add code if needed")," (for now C# code is supported)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," \u2705 Save and test your connector"),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("em",{parentName:"p"},"When you build your connector, ensure you hit ",(0,a.kt)("strong",{parentName:"em"},"save button")," to avoid loosing all your work"),"\n\ud83d\udcdd If you want your connector to be used across different environments, create it within a solution"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector types",src:o(5464).Z,width:"1602",height:"900"})),(0,a.kt)("p",null,"Finally. these tools will help you build connectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/connectors/custom-connectors/paconn-cli?WT.mc_id=academic-73999-juliamuiruri"},"Paconn CLI")," - Add ALM (",(0,a.kt)("em",{parentName:"li"},"Application Lifecycle Management"),") to your custom connector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/ppc-vscode"},"Power Platform Connectors VS Code extension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/powerplatformcli"},"Power Platform CLI"))),(0,a.kt)("h3",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Head over to ",(0,a.kt)("a",{parentName:"p",href:"https://make.powerautomate.com/"},"https://make.powerautomate.com/")," and start today!"),(0,a.kt)("p",null,"Explore resources shared on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/30daysof/discussions/16#discussioncomment-3650396"},"presentation deck")),(0,a.kt)("p",null,"Build your first connector, share on Social media and tag us to celebrate your learning!"),(0,a.kt)("admonition",{title:"READY? LET'S GO! \ud83c\udf89",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Day 4 (Thursday) >> Self paced learning & discussions on GitHub!"),(0,a.kt)("p",{parentName:"admonition"},"Day 5 (Friday) >> Join us for a part 2 Demo")))}p.isMDXComponent=!0},9948:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/connector-def-8d648ebb84629c97d73bd1d5bdd9fd4c.png"},5464:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/connector-types-2588c4fd53ad4fb260052d75c9f57e29.png"},6764:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/power-platform-12c307687449a1462097a429a82142ec.png"},3719:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/fusion-f731f3ccac8a8ee153416f249d058b46.png"}}]);