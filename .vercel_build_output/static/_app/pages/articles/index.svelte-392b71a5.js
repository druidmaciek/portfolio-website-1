import{S as t,i as s,s as e,e as n,k as a,j as r,I as o,c,d as i,n as $,m as f,b as m,D as u,f as d,o as g,v as p,r as l,w as h,t as w,g as x}from"../../chunks/vendor-f00dec54.js";import{c as k,L as j,H as v}from"../../chunks/Heading-c69dc9df.js";import{L as A}from"../../chunks/List-6ba69167.js";import{N as b}from"../../chunks/Navbar-a6799cc7.js";function y(t){let s;return{c(){s=w("Growth Tips for Accountants")},l(t){s=x(t,"Growth Tips for Accountants")},m(t,e){d(t,s,e)},d(t){t&&i(s)}}}function G(t){let s,e,n,o;return s=new v({props:{$$slots:{default:[y]},$$scope:{ctx:t}}}),n=new A({props:{stories:t[0],featured:!1}}),{c(){r(s.$$.fragment),e=a(),r(n.$$.fragment)},l(t){f(s.$$.fragment,t),e=$(t),f(n.$$.fragment,t)},m(t,a){g(s,t,a),d(t,e,a),g(n,t,a),o=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const r={};1&e&&(r.stories=t[0]),n.$set(r)},i(t){o||(p(s.$$.fragment,t),p(n.$$.fragment,t),o=!0)},o(t){l(s.$$.fragment,t),l(n.$$.fragment,t),o=!1},d(t){h(s,t),t&&i(e),h(n,t)}}}function T(t){let s,e,w,x,k,v;return w=new b({}),k=new j({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){s=n("meta"),e=a(),r(w.$$.fragment),x=a(),r(k.$$.fragment),this.h()},l(t){const n=o('[data-svelte="svelte-1ogwnn3"]',document.head);s=c(n,"META",{name:!0,content:!0}),n.forEach(i),e=$(t),f(w.$$.fragment,t),x=$(t),f(k.$$.fragment,t),this.h()},h(){document.title="Growth Tips for Accountants",m(s,"name","description"),m(s,"content","SecrueGrowthDigital is Web Design and Online Marketing Agency, helping accountants get more clients")},m(t,n){u(document.head,s),d(t,e,n),g(w,t,n),d(t,x,n),g(k,t,n),v=!0},p(t,[s]){const e={};3&s&&(e.$$scope={dirty:s,ctx:t}),k.$set(e)},i(t){v||(p(w.$$.fragment,t),p(k.$$.fragment,t),v=!0)},o(t){l(w.$$.fragment,t),l(k.$$.fragment,t),v=!1},d(t){i(s),t&&i(e),h(w,t),t&&i(x),h(k,t)}}}async function D({page:t,fetch:s,session:e,context:n}){const a="cdn/stories/?starts_with=articles/",r=await k.get(a);return r.data.stories?(console.log(r.data.stories),{props:{stories:await r.data.stories}}):{status:r.status,error:new Error(`Could not load ${a}`)}}function E(t,s,e){let{stories:n}=s;return t.$$set=t=>{"stories"in t&&e(0,n=t.stories)},[n]}export default class extends t{constructor(t){super(),s(this,t,E,T,e,{stories:0})}}export{D as load};
