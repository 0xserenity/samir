import{_ as n}from"./HeadlessAppLayout.f6f40bed.js";import{o as l,c,w as a,a as t,t as s,g as i}from"./app.3fdc1f72.js";const r={class:"font-semibold text-xl text-gray-800 leading-tight dark:text-white text-center flex justify-between"},h=["href"],x=["href"],m=t("div",{class:"flex justify-center"},null,-1),g={class:"p-6 max-w-7xl mx-auto"},f={class:"gap-6 mb-8"},b={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},u={class:"p-4"},y={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},w={class:"text-green-500"},_={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},v={class:"p-4"},k={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},j={class:"text-red-500"},z={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},D={class:"p-4"},N={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},S={class:"text-white"},B={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},F={class:"p-4"},O={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},P={class:"text-green-500"},V={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},q={class:"p-4"},T={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},C={class:"text-red-500"},K={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},L={class:"p-4"},U={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},$={class:"text-green-500"},H={__name:"Show",props:{profit:Object,buy:Object,sell:Object,vnd:Number,duration:String},setup(e){const d=o=>o.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0});return(o,A)=>(l(),c(n,{title:"Dashboard"},{header:a(()=>[t("h2",r,[t("a",{href:o.route("profits.show",e.profit.id-1),class:"text-sm text-gray-700 underline"},"< bacK",8,h),t("span",null,"Profit #"+s(e.profit.id),1),t("a",{href:o.route("profits.show",e.profit.id+1),class:"text-sm text-gray-700 underline"},"Next >",8,x)]),m]),default:a(()=>[t("div",g,[t("div",f,[t("div",b,[t("div",u,[t("p",y,[i(" Buy "),t("span",w,s(d(e.buy.price*e.buy.qty*e.vnd)),1)])])]),t("div",_,[t("div",v,[t("p",k,[i(" Sell "),t("span",j,s(d(e.sell.price*e.sell.qty*e.vnd)),1)])])]),t("div",z,[t("div",D,[t("p",N,[i(" Duration "),t("span",S,s(e.duration),1)])])]),t("div",B,[t("div",F,[t("p",O,[i(" Profit "),t("span",P,s(d((e.buy.realized_pnl>0?e.buy.realized_pnl:e.sell.realized_pnl)*e.vnd)),1)])])]),t("div",V,[t("div",q,[t("p",T,[i(" Fee "),t("span",C,s(d((e.sell.commission+e.buy.commission)*e.vnd)),1)])])]),t("div",K,[t("div",L,[t("p",U,[i(" Net Profit "),t("span",$,s(d(((e.buy.realized_pnl>0?e.buy.realized_pnl:e.sell.realized_pnl)-(e.sell.commission+e.buy.commission))*e.vnd)),1)])])])])])]),_:1}))}};export{H as default};
