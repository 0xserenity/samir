import{_ as n}from"./HeadlessAppLayout.2edd655d.js";import{o as r,c,w as d,a as t,t as s,g as i}from"./app.f23c7e9d.js";const l={class:"font-semibold text-xl text-gray-800 leading-tight dark:text-white text-center flex justify-between"},h=["href"],f=["href"],x=t("div",{class:"flex justify-center"},null,-1),g={class:"p-6 max-w-7xl mx-auto"},m={class:"gap-6 mb-8"},_={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},w={class:"p-4"},b={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},u={class:"text-green-500"},y={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},v={class:"p-4"},p={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},k={class:"text-red-500"},j={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},N={class:"p-4"},D={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},S={class:"text-green-500"},B={class:"mb-4 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},F={class:"p-4"},P={class:"flex justify-between text-md font-semibold text-gray-700 dark:text-gray-200"},V={class:"text-green-500"},C={__name:"Show",props:{profit:Object,vnd:Number,roi:String},setup(e){const a=o=>o.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0});return(o,O)=>(r(),c(n,{title:"Dashboard"},{header:d(()=>[t("h2",l,[t("a",{href:o.route("profits.show",e.profit.id-1),class:"text-sm text-gray-700 underline"},"< bacK",8,h),t("span",null,"Profit #"+s(e.profit.id),1),t("a",{href:o.route("profits.show",e.profit.id+1),class:"text-sm text-gray-700 underline"},"Next >",8,f)]),x]),default:d(()=>[t("div",g,[t("div",m,[t("div",_,[t("div",w,[t("p",b,[i(" Profit "),t("span",u,s(a(e.profit.realized_profit*e.vnd)),1)])])]),t("div",y,[t("div",v,[t("p",p,[i(" Fee "),t("span",k,s(a(e.profit.fee*e.vnd)),1)])])]),t("div",j,[t("div",N,[t("p",D,[i(" Net Profit "),t("span",S,s(a(e.profit.net_profit*e.vnd)),1)])])]),t("div",B,[t("div",F,[t("p",P,[i(" ROI "),t("span",V,s(e.roi),1)])])])])])]),_:1}))}};export{C as default};
