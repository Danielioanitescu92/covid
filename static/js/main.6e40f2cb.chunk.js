(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],[,,function(e,t,n){e.exports={container:"Card_container__3aCWJ",confirmed:"Card_confirmed__2DvjW",recovered:"Card_recovered__3PgOE",deaths:"Card_deaths__2FirC"}},function(e,t,n){e.exports={container:"Nav_container__3nSxT",first:"Nav_first__18u04",second:"Nav_second__3Xk4-",two:"Nav_two__3j09B",three:"Nav_three__8foHG"}},,,function(e,t,n){e.exports={container:"NewCases_container__3p6Tf",cards:"NewCases_cards__2FUCI"}},function(e,t,n){e.exports={container:"TotalCases_container__R19m1",cards:"TotalCases_cards__2boPD"}},function(e,t,n){e.exports={container:"Main_container__11qI9"}},,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.c524e325.png"},function(e,t,n){e.exports={container:"Sidebar_container__vU3MA"}},function(e,t,n){e.exports={container:"PickCountry_container__1M1dO"}},function(e,t,n){e.exports={container:"TopCountries_container__3FM4r"}},function(e,t,n){e.exports={container:"Top_container__2B91l"}},function(e,t,n){e.exports={container:"Article_container__17C1m"}},function(e,t,n){},,,function(e,t,n){e.exports={container:"TopCountries_container__H21hT"}},function(e,t,n){e.exports={container:"Top_container__3_8Gw"}},function(e,t,n){e.exports=n(59)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=(n(35),n(4)),s=(n(36),n(5)),l=n.n(s),u=n(19),m=n.n(u),d=n(3),f=n.n(d),E=function(e){var t=e.nav,n=e.dayone;return r.a.createElement("div",{className:f.a.container},r.a.createElement("img",{src:m.a,alt:"covid"}),r.a.createElement("div",{className:f.a.first},r.a.createElement("h4",null,t||"GLOBAL"),r.a.createElement("div",{className:f.a.second},r.a.createElement("div",{className:f.a.one}," ",r.a.createElement("h5",null,"Day One:")," "),r.a.createElement("div",{className:f.a.two}),r.a.createElement("div",{className:f.a.three}," ",r.a.createElement("p",null,n)," "))))},_=n(20),v=n.n(_),h=n(21),y=n.n(h),C=function(e){var t=e.countries,n=e.handlePickCountry;return r.a.createElement("div",{className:y.a.container},r.a.createElement("h4",null,"Choose a country"),r.a.createElement("select",{onChange:function(e){return n(e.target.value)}},r.a.createElement("option",{value:""},"Global"),t.map((function(e,t){return r.a.createElement("option",{key:e.CountryCode,value:t}," ",e.Country," ")}))))},p=n(22),N=n.n(p),b=n(23),w=n.n(b),O=function(e){var t=e.country,n=e.newcases;return r.a.createElement("div",{className:w.a.container},r.a.createElement("h5",null,t),r.a.createElement("h6",null,n))},T=function(e){var t=e.countries,n=[].concat(t);return n.sort((function(e,t){return e.NewConfirmed>t.NewConfirmed?-1:1})),r.a.createElement("div",{className:N.a.container},r.a.createElement("h4",null,"Today's most confirmed"),n.slice(0,5).map((function(e,t){return r.a.createElement("li",{key:t}," ",r.a.createElement(O,{country:e.Country,newcases:e.NewConfirmed})," ")})))},j=function(e){var t=e.countries,n=e.handlePickCountry;return r.a.createElement("div",{className:v.a.container},r.a.createElement(C,{countries:t,handlePickCountry:n}),r.a.createElement(T,{countries:t}))},x=n(24),k=n.n(x),g=n(6),D=n.n(g),P=n(2),S=n.n(P),G=n(25),A=n.n(G),B=n(26),L=n.n(B),R=function(e){var t=e.country;return t?r.a.createElement("div",{className:A.a.container},r.a.createElement(L.a,{start:0,end:t,duration:1.5,separator:","})):"0"},M=n(27),F=n.n(M),I=function(e){var t=e.country,n=e.thisname,a=e.border;return r.a.createElement("div",{className:F()(S.a.container,a)},r.a.createElement("h5",null,n),r.a.createElement("h2",null," ",r.a.createElement(R,{country:t})," "),r.a.createElement("h6",null,(new Date).toDateString()))},J=function(e){var t=e.country,n=t.NewConfirmed,a=t.NewRecovered,c=t.NewDeaths;return r.a.createElement("div",{className:D.a.container},r.a.createElement("h4",null,"New Cases"),r.a.createElement("div",{className:D.a.cards},r.a.createElement(I,{border:S.a.confirmed,country:n,thisname:"New Confirmed"}),r.a.createElement(I,{border:S.a.recovered,country:a,thisname:"New Recovered"}),r.a.createElement(I,{border:S.a.deaths,country:c,thisname:"New Deaths"})))},U=n(7),H=n.n(U),W=function(e){var t=e.country,n=t.TotalConfirmed,a=t.TotalRecovered,c=t.TotalDeaths;return r.a.createElement("div",{className:H.a.container},r.a.createElement("h4",null,"Total Cases"),r.a.createElement("div",{className:H.a.cards},r.a.createElement(I,{border:S.a.confirmed,country:n,thisname:"Total Confirmed"}),r.a.createElement(I,{border:S.a.recovered,country:a,thisname:"Total Recovered"}),r.a.createElement(I,{border:S.a.deaths,country:c,thisname:"Total Deaths"})))},q=function(e){var t=e.country;return r.a.createElement("div",{className:k.a.container},r.a.createElement(J,{country:t}),r.a.createElement(W,{country:t}))},X=n(8),z=n.n(X),K=n(28),Q=n.n(K),V=n(29),Y=n.n(V),Z=function(e){var t=e.country,n=e.newcases;return r.a.createElement("div",{className:Y.a.container},r.a.createElement("h5",null,t),r.a.createElement("h6",null,n))},$=function(e){var t=e.countries,n=[].concat(t);return n.sort((function(e,t){return e.NewConfirmed>t.NewConfirmed?-1:1})),r.a.createElement("div",{className:Q.a.container},r.a.createElement("h4",null,"Today's most confirmed"),n.slice(0,5).map((function(e,t){return r.a.createElement("li",{key:t}," ",r.a.createElement(Z,{country:e.Country,newcases:e.NewConfirmed})," ")})))},ee=function(e){var t=e.country,n=e.countries,a=e.handlePickCountry;return r.a.createElement("div",{className:z.a.container},r.a.createElement(j,{countries:n,handlePickCountry:a}),r.a.createElement(q,{country:t}),r.a.createElement($,{countries:n,className:z.a.topcountries}))};var te=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(a.useState)([]),f=Object(i.a)(d,2),_=f[0],v=f[1],h=Object(a.useState)(""),y=Object(i.a)(h,2),C=y[0],p=y[1],N=Object(a.useState)("china"),b=Object(i.a)(N,2),w=b[0],O=b[1],T=Object(a.useState)(""),j=Object(i.a)(T,2),x=j[0],k=j[1];return Object(a.useEffect)((function(){l.a.get("https://api.covid19api.com/summary").then((function(e){c(e.data.Global),v(e.data.Global),m(e.data.Countries)}))}),[]),Object(a.useEffect)((function(){l.a.get("https://api.covid19api.com/dayone/country/".concat(w)).then((function(e){k(e.data[0].Date.slice(0,10))}))}),[C]),r.a.createElement("div",{className:"App"},r.a.createElement(E,{nav:C.toUpperCase(),dayone:x}),r.a.createElement(ee,{country:_,countries:u,handlePickCountry:function(e){""===e?(v(n),p("GLOBAL"),O("china")):(v(u[e]),p(u[e].Country),O(u[e].Country.toLowerCase()))}}))};o.a.render(r.a.createElement(te,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.6e40f2cb.chunk.js.map