import{S as s,i as a,s as t,e,t as r,k as c,c as l,a as o,g as n,d as i,n as f,b as h,f as p,D as u,E as x,F as v,j as d,m,o as $,G as g,v as y,r as w,w as E}from"../chunks/vendor-e504a1a9.js";import{c as b,d as A}from"../chunks/storyblokClient-2e97f886.js";function D(s){let a,t,v,d,m,$,g,y,w,E,b,A,D;return{c(){a=e("footer"),t=e("div"),v=e("nav"),d=e("div"),m=e("a"),$=r("Growth Tips"),g=c(),y=e("div"),w=e("a"),E=r("Contact Me"),b=c(),A=e("p"),D=r("© 2021 Secure Growth Digital All rights reserved."),this.h()},l(s){a=l(s,"FOOTER",{class:!0});var e=o(a);t=l(e,"DIV",{class:!0});var r=o(t);v=l(r,"NAV",{class:!0,"aria-label":!0});var c=o(v);d=l(c,"DIV",{class:!0});var h=o(d);m=l(h,"A",{href:!0,class:!0});var p=o(m);$=n(p,"Growth Tips"),p.forEach(i),h.forEach(i),g=f(c),y=l(c,"DIV",{class:!0});var u=o(y);w=l(u,"A",{href:!0,class:!0});var x=o(w);E=n(x,"Contact Me"),x.forEach(i),u.forEach(i),c.forEach(i),b=f(r),A=l(r,"P",{class:!0});var G=o(A);D=n(G,"© 2021 Secure Growth Digital All rights reserved."),G.forEach(i),r.forEach(i),e.forEach(i),this.h()},h(){h(m,"href","/tips"),h(m,"class","text-base text-gray-500 hover:text-gray-900"),h(d,"class","px-5 py-2"),h(w,"href","#contact"),h(w,"class","text-base text-gray-500 hover:text-gray-900"),h(y,"class","px-5 py-2"),h(v,"class","-mx-5 -my-2 flex flex-wrap justify-center"),h(v,"aria-label","Footer"),h(A,"class","mt-8 text-center text-base text-gray-400"),h(t,"class","max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"),h(a,"class","bg-white")},m(s,e){p(s,a,e),u(a,t),u(t,v),u(v,d),u(d,m),u(m,$),u(v,g),u(v,y),u(y,w),u(w,E),u(t,b),u(t,A),u(A,D)},p:x,i:x,o:x,d(s){s&&i(a)}}}class G extends s{constructor(s){super(),a(this,s,null,D,t,{})}}function j(s){let a,t,e;const r=s[1].default,l=v(r,s,s[0],null);return t=new G({}),{c(){l&&l.c(),a=c(),d(t.$$.fragment)},l(s){l&&l.l(s),a=f(s),m(t.$$.fragment,s)},m(s,r){l&&l.m(s,r),p(s,a,r),$(t,s,r),e=!0},p(s,[a]){l&&l.p&&(!e||1&a)&&g(l,r,s,s[0],a,null,null)},i(s){e||(y(l,s),y(t.$$.fragment,s),e=!0)},o(s){w(l,s),w(t.$$.fragment,s),e=!1},d(s){l&&l.d(s),s&&i(a),E(t,s)}}}async function k(s,a){return{stories:await b.getAll("cdn//articles/",A)||[]}}function V(s,a,t){let{$$slots:e={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,e]}export default class extends s{constructor(s){super(),a(this,s,V,j,t,{})}}export{k as preload};