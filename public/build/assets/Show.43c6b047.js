import{_ as d}from"./HeadlessAppLayout.eb307d38.js";import{o as s,c,w as o,a as t,e as a,i as _,F as l,t as r}from"./app.f637d407.js";const h=t("div",{class:"flex justify-center"},[t("h2",{class:"text-xl text-gray-800 leading-tight dark:text-white"}," Trading Profits \u{1F911} ")],-1),x={class:"p-6 max-w-7xl mx-auto"},f={class:"grid gap-6 mb-8"},p={class:"min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"},g={class:"p-4 flex justify-between"},m={class:"text-sm font-semibold text-gray-700 dark:text-gray-400"},u={class:"text-sm font-semibold text-gray-700 dark:text-green-300"},k=["href"],w={key:0,class:"text-green-700 dark:text-green-500"},y={key:1,class:"text-red-700 dark:text-red-500"},j={__name:"Show",props:{deals:Array},setup(i){return(n,b)=>(s(),c(d,{title:"Deals"},{header:o(()=>[h]),default:o(()=>[t("div",x,[t("div",f,[(s(!0),a(l,null,_(i.deals,e=>(s(),a("div",p,[t("div",g,[t("span",m," \u{1F389} "+r(e.readable_time),1),t("span",u,[t("a",{href:n.route("profits.show",e.id)},[parseInt(e.net_profit)>0?(s(),a("span",w," + "+r(e.net_profit)+" \u{1F4B0} ",1)):(s(),a("span",y,r(e.net_profit)+" \u{1F4B8} ",1))],8,k)])])]))),256))])])]),_:1}))}};export{j as default};