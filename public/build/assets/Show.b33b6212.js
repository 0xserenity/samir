import o from"./HealthPointBar.20d61f6d.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{E as i,o as a,e as c,a as e,t as s,b as d,D as p}from"./app.1da6735a.js";const h={components:{HealthPointBar:o},props:{champion:{type:Object,required:!0},background:{type:String,required:!0}}},r={class:"stats left flex-1 p-4 bg-gray-200 bg-opacity-50 text-sm"},_={class:"flex justify-between"},u=e("span",{class:"inline-block bg-purple-800 text-white px-4 py-2 rounded-full shadow py-2"},"\u{1F464}",-1),b={class:"inline-block bg-purple-800 text-white px-4 py-2 rounded-full shadow"},x={class:"flex justify-between mt-4"},f=e("span",{class:"inline-block bg-green-600 text-white px-4 py-2 rounded-full shadow py-2"},"\u{1F4BC}",-1),m={class:"inline-block bg-green-600 text-white px-4 py-2 rounded-full shadow"},y={class:"flex justify-between mt-4"},g=e("span",{class:"inline-block bg-gray-700 text-white px-4 py-2 rounded-full shadow py-2"},"\u{1F382}",-1),w={class:"flex items-center whitespace-nowrap text-xs md:text-sm inline-block bg-gray-700 text-white px-4 py-2 rounded-full shadow"},k={class:"flex justify-between mt-4"},j=e("span",{class:"inline-block bg-teal-600 text-white px-4 py-2 rounded-full shadow py-2"},"\u{1F4C8}",-1),v={class:"flex items-center whitespace-nowrap text-xs md:text-sm inline-block bg-teal-600 text-white px-4 py-2 rounded-full shadow"},B={class:"name flex-1 p-4 text-center relative"},S=e("div",{class:"absolute inset-0 bg-black opacity-40"},null,-1),P={class:"inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},H={class:"stats right flex-1 p-4 bg-gray-300 bg-opacity-50 text-sm"},q={class:"mt-2 mb-4"},z={class:"flex justify-between mt-4"},D=e("span",{class:"inline-block bg-indigo-800 text-white px-4 py-2 rounded-full shadow py-2"},"\u{1F4AA}",-1),E={class:"inline-block bg-indigo-800 text-white px-4 py-2 rounded-full shadow"},N={class:"flex justify-between mt-4"},V=e("span",{class:"py-2 inline-block bg-amber-800 text-white px-4 py-2 rounded-full shadow"},"\u{1F3FA}",-1),C={class:"inline-block bg-amber-800 text-white px-4 py-2 rounded-full shadow"},I={class:"flex justify-between mt-4"},O=e("span",{class:"py-2 inline-block bg-green-500 text-white px-4 py-2 rounded-full shadow"},"\u{1F4B0}",-1),R={class:"inline-block bg-green-500 text-white px-4 py-2 rounded-full shadow"},A={class:"flex justify-between mt-4"},F=e("span",{class:"py-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-full shadow"},"\u{1F4B8}",-1),G={class:"inline-block bg-blue-500 text-white px-4 py-2 rounded-full shadow"};function J(K,L,t,M,Q,T){const n=i("HealthPointBar");return a(),c("div",{class:"champion-details flex h-screen",style:p({backgroundImage:"url("+t.background+")",backgroundPosition:"top center",backgroundSize:"cover",backgroundRepeat:"no-repeat"})},[e("div",r,[e("ul",null,[e("li",_,[u,e("span",b,s(t.champion.archetype),1)]),e("li",x,[f,e("span",m,"$"+s(t.champion.current_capital),1)]),e("li",y,[g,e("span",w,s(t.champion.age),1)]),e("li",k,[j,e("span",v,s(t.champion.apy)+"%",1)])])]),e("div",B,[S,e("h1",P,s(t.champion.name),1)]),e("div",H,[e("ul",null,[e("li",q,[d(n,{"remaining-h-p":t.champion.remain_capital,"full-h-p":t.champion.capital},null,8,["remaining-h-p","full-h-p"])]),e("li",z,[D,e("span",E,s(t.champion.grind),1)]),e("li",N,[V,e("span",C,"$"+s(t.champion.profit),1)]),e("li",I,[O,e("span",R,"$"+s(t.champion.income),1)]),e("li",A,[F,e("span",G,"$"+s(t.champion.fee),1)])])])],4)}const Y=l(h,[["render",J]]);export{Y as default};
