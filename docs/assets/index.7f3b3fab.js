(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function h(){}function R(e){return e()}function z(){return Object.create(null)}function w(e){e.forEach(R)}function W(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function X(e){return Object.keys(e).length===0}function $(e,t){e.appendChild(t)}function m(e,t,o){e.insertBefore(t,o||null)}function d(e){e.parentNode.removeChild(e)}function Y(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function _(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function b(){return M(" ")}function Z(){return M("")}function F(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function p(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function K(e,t){e.value=t==null?"":t}function ne(e,t,{bubbles:o=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o,i,t),n}let v;function x(e){v=e}function oe(){if(!v)throw new Error("Function called outside component initialization");return v}function ie(){const e=oe();return(t,o,{cancelable:i=!1}={})=>{const n=e.$$.callbacks[t];if(n){const s=ne(t,o,{cancelable:i});return n.slice().forEach(r=>{r.call(e,s)}),!s.defaultPrevented}return!0}}const y=[],V=[],L=[],G=[],re=Promise.resolve();let P=!1;function le(){P||(P=!0,re.then(U))}function S(e){L.push(e)}const N=new Set;let E=0;function U(){const e=v;do{for(;E<y.length;){const t=y[E];E++,x(t),se(t.$$)}for(x(null),y.length=0,E=0;V.length;)V.pop()();for(let t=0;t<L.length;t+=1){const o=L[t];N.has(o)||(N.add(o),o())}L.length=0}while(y.length);for(;G.length;)G.pop()();P=!1,N.clear(),x(e)}function se(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const T=new Set;let ce;function A(e,t){e&&e.i&&(T.delete(e),e.i(t))}function O(e,t,o,i){if(e&&e.o){if(T.has(e))return;T.add(e),ce.c.push(()=>{T.delete(e),i&&(o&&e.d(1),i())}),e.o(t)}else i&&i()}function j(e){e&&e.c()}function k(e,t,o,i){const{fragment:n,on_mount:s,on_destroy:r,after_update:c}=e.$$;n&&n.m(t,o),i||S(()=>{const f=s.map(R).filter(W);r?r.push(...f):w(f),e.$$.on_mount=[]}),c.forEach(S)}function B(e,t){const o=e.$$;o.fragment!==null&&(w(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(y.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function C(e,t,o,i,n,s,r,c=[-1]){const f=v;x(e);const l=e.$$={fragment:null,ctx:null,props:s,update:h,not_equal:n,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:z(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};r&&r(l.root);let a=!1;if(l.ctx=o?o(e,t.props||{},(u,g,...H)=>{const q=H.length?H[0]:g;return l.ctx&&n(l.ctx[u],l.ctx[u]=q)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](q),a&&fe(e,u)),g}):[],l.update(),a=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);l.fragment&&l.fragment.l(u),u.forEach(d)}else l.fragment&&l.fragment.c();t.intro&&A(e.$$.fragment),k(e,t.target,t.anchor,t.customElement),U()}x(f)}class I{$destroy(){B(this,1),this.$destroy=h}$on(t,o){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!X(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t;return{c(){t=_("div"),t.innerHTML=`<h1>\uC624\uB298\uC758 \uD560\uC77C</h1> 
    
    <img src="~/assets/sorry-apple.png" alt="\uC0AC\uACFC"/>`,p(t,"class","hbox space-between h(80) bg(#E6F0EF) c(#4B3C2D) p(0/20) font(20) m(0/0/10)")},m(o,i){m(o,t,i)},p:h,i:h,o:h,d(o){o&&d(t)}}}class ae extends I{constructor(t){super(),C(this,t,null,ue,D,{})}}function de(e){let t,o,i,n,s;return{c(){t=_("input"),o=b(),i=_("i"),p(t,"type","text"),p(t,"class","w(100%) h(40) b(#A9C5B9) r(20) outline(0) p(0/20)"),p(t,"placeholder","\uC624\uB298\uC758 \uD560\uC77C\uC744 \uC801\uC5B4\uBD10!"),p(i,"class","fa-solid fa-plus absolute right(40) pointer font(20) c(#A9C5B9)")},m(r,c){m(r,t,c),K(t,e[0]),m(r,o,c),m(r,i,c),n||(s=[F(t,"input",e[2]),F(i,"click",e[1])],n=!0)},p(r,[c]){c&1&&t.value!==r[0]&&K(t,r[0])},i:h,o:h,d(r){r&&d(t),r&&d(o),r&&d(i),n=!1,w(s)}}}function me(e,t,o){const i=ie();let n="";const s=()=>{i("sayTodo",{text:n})};function r(){n=this.value,o(0,n)}return[n,s,r]}class pe extends I{constructor(t){super(),C(this,t,me,de,D,{})}}function J(e,t,o){const i=e.slice();return i[3]=t[o],i}function Q(e){let t,o,i=e[3].text+"",n,s,r,c,f,l;function a(){return e[2](e[3])}return{c(){t=_("div"),o=_("p"),n=M(i),s=b(),r=_("i"),c=b(),p(r,"class","fa-solid fa-circle-xmark c(#B6ABAB)"),p(t,"class","hbox space-between pointer")},m(u,g){m(u,t,g),$(t,o),$(o,n),$(t,s),$(t,r),$(t,c),f||(l=F(r,"click",a),f=!0)},p(u,g){e=u,g&1&&i!==(i=e[3].text+"")&&te(n,i)},d(u){u&&d(t),f=!1,l()}}}function he(e){let t,o=e[0],i=[];for(let n=0;n<o.length;n+=1)i[n]=Q(J(e,o,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=Z()},m(n,s){for(let r=0;r<i.length;r+=1)i[r].m(n,s);m(n,t,s)},p(n,[s]){if(s&3){o=n[0];let r;for(r=0;r<o.length;r+=1){const c=J(n,o,r);i[r]?i[r].p(c,s):(i[r]=Q(c),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}},i:h,o:h,d(n){Y(i,n),n&&d(t)}}}function _e(e,t,o){let{todoList:i}=t,{mainTodoDelete:n}=t;const s=r=>n(r.id);return e.$$set=r=>{"todoList"in r&&o(0,i=r.todoList),"mainTodoDelete"in r&&o(1,n=r.mainTodoDelete)},[i,n,s]}class ge extends I{constructor(t){super(),C(this,t,_e,he,D,{todoList:0,mainTodoDelete:1})}}function $e(e){let t,o,i,n,s,r,c,f;return t=new ae({}),n=new pe({}),n.$on("sayTodo",e[1]),c=new ge({props:{todoList:e[0],mainTodoDelete:e[2]}}),{c(){j(t.$$.fragment),o=b(),i=_("main"),j(n.$$.fragment),s=b(),r=_("div"),j(c.$$.fragment),p(i,"class","p(0/20) hbox"),p(r,"class","p(0/20) vbox m(10/0)")},m(l,a){k(t,l,a),m(l,o,a),m(l,i,a),k(n,i,null),m(l,s,a),m(l,r,a),k(c,r,null),f=!0},p(l,[a]){const u={};a&1&&(u.todoList=l[0]),c.$set(u)},i(l){f||(A(t.$$.fragment,l),A(n.$$.fragment,l),A(c.$$.fragment,l),f=!0)},o(l){O(t.$$.fragment,l),O(n.$$.fragment,l),O(c.$$.fragment,l),f=!1},d(l){B(t,l),l&&d(o),l&&d(i),B(n),l&&d(s),l&&d(r),B(c)}}}function ye(e,t,o){const i=r=>{let c=r.detail.text,f=n[n.length-1].id;if(c){const l={id:++f,text:c,completed:!1};o(0,n[n.length]=l,n),c=""}else alert("\uD560\uC77C\uC744 \uC801\uC5B4\uC8FC\uC138\uC694!")};let n=[{id:1,text:"\uC2A4\uBCA8\uD2B8 \uBE44\uD2B8\uB85C \uAC1C\uBC1C\uD658\uACBD \uAD6C\uCD95\uD558\uAE30",completed:!1}];return[n,i,r=>{o(0,n=n.filter(c=>c.id!==r))}]}class xe extends I{constructor(t){super(),C(this,t,ye,$e,D,{})}}new xe({target:document.getElementById("app")});