import o from"./HealthPointBar.d38277a8.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{E as l,o as i,e as c,a as t,t as s,b as d,D as r}from"./app.9358c4df.js";const p={components:{HealthPointBar:o},props:{champion:{type:Object,required:!0},background:{type:String,required:!0}}},h={class:"stats left flex-1 p-4 bg-gray-200 bg-opacity-50 text-sm"},_={class:"flex justify-between"},u=t("span",{class:"py-2"},"\u{1F464}",-1),m={class:"inline-block bg-purple-800 text-white px-4 py-2 rounded-full shadow"},f={class:"flex justify-between mt-4"},b=t("span",null,"\u2764\uFE0F",-1),x={class:"flex justify-between mt-1"},y=t("span",{class:"py-2"},"\u{1F382}",-1),g={class:"whitespace-nowrap text-xs md:text-sm inline-block bg-gray-700 text-white px-4 py-2 rounded-full shadow"},w={class:"name flex-1 p-4 text-center relative"},k=t("div",{class:"absolute inset-0 bg-black opacity-40"},null,-1),v={class:"inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},j={class:"stats right flex-1 p-4 bg-gray-300 bg-opacity-50 text-sm"},B={class:"flex justify-between"},S=t("span",{class:"py-2"},"\u{1F4BC}",-1),P={class:"inline-block bg-green-600 text-white px-4 py-2 rounded-full shadow"},H={class:"flex justify-between mt-4"},q=t("span",{class:"py-2"},"\u{1F4AA}",-1),z={class:"inline-block bg-indigo-800 text-white px-4 py-2 rounded-full shadow"},D={class:"flex justify-between mt-4"},E=t("span",{class:"py-2"},"\u{1F3FA}",-1),N={class:"inline-block bg-amber-800 text-white px-4 py-2 rounded-full shadow"};function V(C,I,e,O,R,A){const n=l("HealthPointBar");return i(),c("div",{class:"champion-details flex h-screen",style:r({backgroundImage:"url("+e.background+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"})},[t("div",h,[t("ul",null,[t("li",_,[u,t("span",m,s(e.champion.archetype),1)]),t("li",f,[b,d(n,{"remaining-h-p":e.champion.remain_capital,"full-h-p":e.champion.capital},null,8,["remaining-h-p","full-h-p"])]),t("li",x,[y,t("span",g,s(e.champion.age),1)])])]),t("div",w,[k,t("h1",v,s(e.champion.name),1)]),t("div",j,[t("ul",null,[t("li",B,[S,t("span",P,"$"+s(e.champion.onduty),1)]),t("li",H,[q,t("span",z,s(e.champion.roi),1)]),t("li",D,[E,t("span",N,"$"+s(e.champion.profit),1)])])])],4)}const K=a(p,[["render",V]]);export{K as default};
