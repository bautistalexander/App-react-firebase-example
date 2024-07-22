function OT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function LT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Iy={exports:{}},Ul={},Sy={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),VT=Symbol.for("react.portal"),MT=Symbol.for("react.fragment"),UT=Symbol.for("react.strict_mode"),FT=Symbol.for("react.profiler"),bT=Symbol.for("react.provider"),$T=Symbol.for("react.context"),jT=Symbol.for("react.forward_ref"),BT=Symbol.for("react.suspense"),zT=Symbol.for("react.memo"),HT=Symbol.for("react.lazy"),Np=Symbol.iterator;function qT(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var Ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ay=Object.assign,Py={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||Ry}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cy(){}Cy.prototype=Fi.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||Ry}var dd=hd.prototype=new Cy;dd.constructor=hd;Ay(dd,Fi.prototype);dd.isPureReactComponent=!0;var Dp=Array.isArray,ky=Object.prototype.hasOwnProperty,fd={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Dy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ky.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vo,type:t,key:s,ref:o,props:i,_owner:fd.current}}function WT(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function KT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xp=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KT(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case VT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$u(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(xp,"$&/")+"/"),Ta(i,e,n,"",function(u){return u})):i!=null&&(pd(i)&&(i=WT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$u(s,a);o+=Ta(s,e,n,l,i)}else if(l=qT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$u(s,a++),o+=Ta(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},Ia={transition:null},QT={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:fd};function xy(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Fi;H.Fragment=MT;H.Profiler=FT;H.PureComponent=hd;H.StrictMode=UT;H.Suspense=BT;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT;H.act=xy;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ay({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ky.call(e,l)&&!Ny.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:vo,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:$T,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bT,_context:t},t.Consumer=t};H.createElement=Dy;H.createFactory=function(t){var e=Dy.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:jT,render:t}};H.isValidElement=pd;H.lazy=function(t){return{$$typeof:HT,_payload:{_status:-1,_result:t},_init:GT}};H.memo=function(t,e){return{$$typeof:zT,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};H.unstable_act=xy;H.useCallback=function(t,e){return tt.current.useCallback(t,e)};H.useContext=function(t){return tt.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};H.useEffect=function(t,e){return tt.current.useEffect(t,e)};H.useId=function(){return tt.current.useId()};H.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return tt.current.useMemo(t,e)};H.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};H.useRef=function(t){return tt.current.useRef(t)};H.useState=function(t){return tt.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return tt.current.useTransition()};H.version="18.3.1";Sy.exports=H;var S=Sy.exports;const XT=LT(S),YT=OT({__proto__:null,default:XT},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT=S,ZT=Symbol.for("react.element"),eI=Symbol.for("react.fragment"),tI=Object.prototype.hasOwnProperty,nI=JT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rI={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tI.call(e,r)&&!rI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZT,type:t,key:s,ref:o,props:i,_owner:nI.current}}Ul.Fragment=eI;Ul.jsx=Oy;Ul.jsxs=Oy;Iy.exports=Ul;var A=Iy.exports,Lc={},Ly={exports:{}},mt={},Vy={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var z=D.length;D.push(j);e:for(;0<z;){var pe=z-1>>>1,Se=D[pe];if(0<i(Se,j))D[pe]=j,D[z]=Se,z=pe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],z=D.pop();if(z!==j){D[0]=z;e:for(var pe=0,Se=D.length,qo=Se>>>1;pe<qo;){var ur=2*(pe+1)-1,bu=D[ur],cr=ur+1,Wo=D[cr];if(0>i(bu,z))cr<Se&&0>i(Wo,bu)?(D[pe]=Wo,D[cr]=z,pe=cr):(D[pe]=bu,D[ur]=z,pe=ur);else if(cr<Se&&0>i(Wo,z))D[pe]=Wo,D[cr]=z,pe=cr;else break e}}return j}function i(D,j){var z=D.sortIndex-j.sortIndex;return z!==0?z:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=D)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function v(D){if(_=!1,p(D),!y)if(n(l)!==null)y=!0,Uu(R);else{var j=n(u);j!==null&&Fu(v,j.startTime-D)}}function R(D,j){y=!1,_&&(_=!1,m(L),L=-1),g=!0;var z=d;try{for(p(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!Rt());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var Se=pe(h.expirationTime<=j);j=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),p(j)}else r(l);h=n(l)}if(h!==null)var qo=!0;else{var ur=n(u);ur!==null&&Fu(v,ur.startTime-j),qo=!1}return qo}finally{h=null,d=z,g=!1}}var P=!1,k=null,L=-1,J=5,B=-1;function Rt(){return!(t.unstable_now()-B<J)}function Ji(){if(k!==null){var D=t.unstable_now();B=D;var j=!0;try{j=k(!0,D)}finally{j?Zi():(P=!1,k=null)}}else P=!1}var Zi;if(typeof f=="function")Zi=function(){f(Ji)};else if(typeof MessageChannel<"u"){var kp=new MessageChannel,xT=kp.port2;kp.port1.onmessage=Ji,Zi=function(){xT.postMessage(null)}}else Zi=function(){w(Ji,0)};function Uu(D){k=D,P||(P=!0,Zi())}function Fu(D,j){L=w(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Uu(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var z=d;d=j;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return j()}finally{d=z}},t.unstable_scheduleCallback=function(D,j,z){var pe=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?pe+z:pe):z=pe,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,D={id:c++,callback:j,priorityLevel:D,startTime:z,expirationTime:Se,sortIndex:-1},z>pe?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(_?(m(L),L=-1):_=!0,Fu(v,z-pe))):(D.sortIndex=Se,e(l,D),y||g||(y=!0,Uu(R))),D},t.unstable_shouldYield=Rt,t.unstable_wrapCallback=function(D){var j=d;return function(){var z=d;d=j;try{return D.apply(this,arguments)}finally{d=z}}}})(My);Vy.exports=My;var iI=Vy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI=S,ft=iI;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uy=new Set,Us={};function Fr(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(Us[t]=e,t=0;t<e.length;t++)Uy.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,oI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Lp={};function aI(t){return Vc.call(Lp,t)?!0:Vc.call(Op,t)?!1:oI.test(t)?Lp[t]=!0:(Op[t]=!0,!1)}function lI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uI(t,e,n,r){if(e===null||typeof e>"u"||lI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Fe[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yd(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uI(e,n,i,r)&&(n=null),r||i===null?aI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),by=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function es(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,ju;function ds(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var Bu=!1;function zu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function cI(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Yr:return"Portal";case Mc:return"Profiler";case _d:return"StrictMode";case Uc:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case by:return(t.displayName||"Context")+".Consumer";case Fy:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wd:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function hI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dI(t){var e=jy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=dI(t))}function By(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zy(t,e){e=e.checked,e!=null&&yd(t,"checked",e,!1)}function jc(t,e){zy(t,e);var n=Yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,Yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(fs(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yn(n)}}function Hy(t,e){var n=Yn(e.value),r=Yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,Wy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fI=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(t){fI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Es[e]=Es[t]})});function Ky(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Es.hasOwnProperty(t)&&Es[t]?(""+e).trim():e+"px"}function Gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ky(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pI=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(t,e){if(e){if(pI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function Ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gc=null,hi=null,di=null;function $p(t){if(t=To(t)){if(typeof Gc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Bl(e),Gc(t.stateNode,t.type,e))}}function Qy(t){hi?di?di.push(t):di=[t]:hi=t}function Xy(){if(hi){var t=hi,e=di;if(di=hi=null,$p(t),e)for(t=0;t<e.length;t++)$p(e[t])}}function Yy(t,e){return t(e)}function Jy(){}var Hu=!1;function Zy(t,e,n){if(Hu)return t(e,n);Hu=!0;try{return Yy(t,e,n)}finally{Hu=!1,(hi!==null||di!==null)&&(Jy(),Xy())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Qc=!1;if(fn)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Qc=!1}function mI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ts=!1,Ha=null,qa=!1,Xc=null,gI={onError:function(t){Ts=!0,Ha=t}};function yI(t,e,n,r,i,s,o,a,l){Ts=!1,Ha=null,mI.apply(gI,arguments)}function _I(t,e,n,r,i,s,o,a,l){if(yI.apply(this,arguments),Ts){if(Ts){var u=Ha;Ts=!1,Ha=null}else throw Error(I(198));qa||(qa=!0,Xc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jp(t){if(br(t)!==t)throw Error(I(188))}function vI(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jp(i),t;if(s===r)return jp(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function t_(t){return t=vI(t),t!==null?n_(t):null}function n_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n_(t);if(e!==null)return e;t=t.sibling}return null}var r_=ft.unstable_scheduleCallback,Bp=ft.unstable_cancelCallback,wI=ft.unstable_shouldYield,EI=ft.unstable_requestPaint,me=ft.unstable_now,TI=ft.unstable_getCurrentPriorityLevel,Td=ft.unstable_ImmediatePriority,i_=ft.unstable_UserBlockingPriority,Wa=ft.unstable_NormalPriority,II=ft.unstable_LowPriority,s_=ft.unstable_IdlePriority,Fl=null,qt=null;function SI(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:PI,RI=Math.log,AI=Math.LN2;function PI(t){return t>>>=0,t===0?32:31-(RI(t)/AI|0)|0}var Yo=64,Jo=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ps(a):(s&=o,s!==0&&(r=ps(s)))}else o=n&~i,o!==0?r=ps(o):s!==0&&(r=ps(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function CI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=CI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o_(){var t=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function NI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function a_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l_,Sd,u_,c_,h_,Jc=!1,Zo=[],bn=null,$n=null,jn=null,$s=new Map,js=new Map,kn=[],DI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":$s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=To(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return bn=ns(bn,t,e,n,r,i),!0;case"dragenter":return $n=ns($n,t,e,n,r,i),!0;case"mouseover":return jn=ns(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $s.set(s,ns($s.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,js.set(s,ns(js.get(s)||null,t,e,n,r,i)),!0}return!1}function d_(t){var e=pr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=e_(n),e!==null){t.blockedOn=e,h_(t.priority,function(){u_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return e=To(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Sa(t)&&n.delete(e)}function OI(){Jc=!1,bn!==null&&Sa(bn)&&(bn=null),$n!==null&&Sa($n)&&($n=null),jn!==null&&Sa(jn)&&(jn=null),$s.forEach(Hp),js.forEach(Hp)}function rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Jc||(Jc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,OI)))}function Bs(t){function e(i){return rs(i,t)}if(0<Zo.length){rs(Zo[0],t);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&rs(bn,t),$n!==null&&rs($n,t),jn!==null&&rs(jn,t),$s.forEach(e),js.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)d_(n),n.blockedOn===null&&kn.shift()}var fi=Tn.ReactCurrentBatchConfig,Ga=!0;function LI(t,e,n,r){var i=X,s=fi.transition;fi.transition=null;try{X=1,Rd(t,e,n,r)}finally{X=i,fi.transition=s}}function VI(t,e,n,r){var i=X,s=fi.transition;fi.transition=null;try{X=4,Rd(t,e,n,r)}finally{X=i,fi.transition=s}}function Rd(t,e,n,r){if(Ga){var i=Zc(t,e,n,r);if(i===null)tc(t,e,r,Qa,n),zp(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<DI.indexOf(t)){for(;i!==null;){var s=To(i);if(s!==null&&l_(s),s=Zc(t,e,n,r),s===null&&tc(t,e,r,Qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tc(t,e,r,null,n)}}var Qa=null;function Zc(t,e,n,r){if(Qa=null,t=Ed(r),t=pr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function f_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TI()){case Td:return 1;case i_:return 4;case Wa:case II:return 16;case s_:return 536870912;default:return 16}default:return 16}}var Vn=null,Ad=null,Ra=null;function p_(){if(Ra)return Ra;var t,e=Ad,n=e.length,r,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ra=i.slice(t,1<r?1-r:void 0)}function Aa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function qp(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:qp,this.isPropagationStopped=qp,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=gt(bi),Eo=le({},bi,{view:0,detail:0}),MI=gt(Eo),Wu,Ku,is,bl=le({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==is&&(is&&t.type==="mousemove"?(Wu=t.screenX-is.screenX,Ku=t.screenY-is.screenY):Ku=Wu=0,is=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),Wp=gt(bl),UI=le({},bl,{dataTransfer:0}),FI=gt(UI),bI=le({},Eo,{relatedTarget:0}),Gu=gt(bI),$I=le({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),jI=gt($I),BI=le({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zI=gt(BI),HI=le({},bi,{data:0}),Kp=gt(HI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KI[t])?!!e[t]:!1}function Cd(){return GI}var QI=le({},Eo,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Aa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?Aa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Aa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=gt(QI),YI=le({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=gt(YI),JI=le({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),ZI=gt(JI),e1=le({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=gt(e1),n1=le({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=gt(n1),i1=[9,13,27,32],kd=fn&&"CompositionEvent"in window,Is=null;fn&&"documentMode"in document&&(Is=document.documentMode);var s1=fn&&"TextEvent"in window&&!Is,m_=fn&&(!kd||Is&&8<Is&&11>=Is),Qp=" ",Xp=!1;function g_(t,e){switch(t){case"keyup":return i1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function o1(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(Xp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Xp?null:t;default:return null}}function a1(t,e){if(Zr)return t==="compositionend"||!kd&&g_(t,e)?(t=p_(),Ra=Ad=Vn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m_&&e.locale!=="ko"?null:e.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l1[t.type]:e==="textarea"}function __(t,e,n,r){Qy(r),e=Xa(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ss=null,zs=null;function u1(t){k_(t,0)}function $l(t){var e=ni(t);if(By(e))return t}function c1(t,e){if(t==="change")return e}var v_=!1;if(fn){var Qu;if(fn){var Xu="oninput"in document;if(!Xu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Xu=typeof Jp.oninput=="function"}Qu=Xu}else Qu=!1;v_=Qu&&(!document.documentMode||9<document.documentMode)}function Zp(){Ss&&(Ss.detachEvent("onpropertychange",w_),zs=Ss=null)}function w_(t){if(t.propertyName==="value"&&$l(zs)){var e=[];__(e,zs,t,Ed(t)),Zy(u1,e)}}function h1(t,e,n){t==="focusin"?(Zp(),Ss=e,zs=n,Ss.attachEvent("onpropertychange",w_)):t==="focusout"&&Zp()}function d1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(zs)}function f1(t,e){if(t==="click")return $l(e)}function p1(t,e){if(t==="input"||t==="change")return $l(e)}function m1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vt=typeof Object.is=="function"?Object.is:m1;function Hs(t,e){if(Vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!Vt(t[i],e[i]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function E_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var t=window,e=za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=za(t.document)}return e}function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g1(t){var e=T_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E_(n.ownerDocument.documentElement,n)){if(r!==null&&Nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tm(n,s);var o=tm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y1=fn&&"documentMode"in document&&11>=document.documentMode,ei=null,eh=null,Rs=null,th=!1;function nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;th||ei==null||ei!==za(r)||(r=ei,"selectionStart"in r&&Nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&Hs(Rs,r)||(Rs=r,r=Xa(eh,"onSelect"),0<r.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Yu={},I_={};fn&&(I_=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function jl(t){if(Yu[t])return Yu[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I_)return Yu[t]=e[n];return t}var S_=jl("animationend"),R_=jl("animationiteration"),A_=jl("animationstart"),P_=jl("transitionend"),C_=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){C_.set(t,e),Fr(e,[t])}for(var Ju=0;Ju<rm.length;Ju++){var Zu=rm[Ju],_1=Zu.toLowerCase(),v1=Zu[0].toUpperCase()+Zu.slice(1);rr(_1,"on"+v1)}rr(S_,"onAnimationEnd");rr(R_,"onAnimationIteration");rr(A_,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(P_,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function im(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_I(r,e,void 0,t),t.currentTarget=null}function k_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;im(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;im(i,a,u),s=l}}}if(qa)throw t=Xc,qa=!1,Xc=null,t}function te(t,e){var n=e[oh];n===void 0&&(n=e[oh]=new Set);var r=t+"__bubble";n.has(r)||(N_(e,t,2,!1),n.add(r))}function ec(t,e,n){var r=0;e&&(r|=4),N_(n,t,r,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[na]){t[na]=!0,Uy.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,ec("selectionchange",!1,e))}}function N_(t,e,n,r){switch(f_(e)){case 1:var i=LI;break;case 4:i=VI;break;default:i=Rd}n=i.bind(null,e,n,t),i=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zy(function(){var u=s,c=Ed(n),h=[];e:{var d=C_.get(t);if(d!==void 0){var g=Pd,y=t;switch(t){case"keypress":if(Aa(n)===0)break e;case"keydown":case"keyup":g=XI;break;case"focusin":y="focus",g=Gu;break;case"focusout":y="blur",g=Gu;break;case"beforeblur":case"afterblur":g=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=FI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ZI;break;case S_:case R_:case A_:g=jI;break;case P_:g=t1;break;case"scroll":g=MI;break;case"wheel":g=r1;break;case"copy":case"cut":case"paste":g=zI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gp}var _=(e&4)!==0,w=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,p;f!==null;){p=f;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,m!==null&&(v=bs(f,m),v!=null&&_.push(Ws(f,v,p)))),w)break;f=f.return}0<_.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Kc&&(y=n.relatedTarget||n.fromElement)&&(pr(y)||y[pn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?pr(y):null,y!==null&&(w=br(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Wp,v="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Gp,v="onPointerLeave",m="onPointerEnter",f="pointer"),w=g==null?d:ni(g),p=y==null?d:ni(y),d=new _(v,f+"leave",g,n,c),d.target=w,d.relatedTarget=p,v=null,pr(c)===u&&(_=new _(m,f+"enter",y,n,c),_.target=p,_.relatedTarget=w,v=_),w=v,g&&y)t:{for(_=g,m=y,f=0,p=_;p;p=Wr(p))f++;for(p=0,v=m;v;v=Wr(v))p++;for(;0<f-p;)_=Wr(_),f--;for(;0<p-f;)m=Wr(m),p--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=Wr(_),m=Wr(m)}_=null}else _=null;g!==null&&sm(h,d,g,_,!1),y!==null&&w!==null&&sm(h,w,y,_,!0)}}e:{if(d=u?ni(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var R=c1;else if(Yp(d))if(v_)R=p1;else{R=d1;var P=h1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=f1);if(R&&(R=R(t,u))){__(h,R,n,c);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&Bc(d,"number",d.value)}switch(P=u?ni(u):window,t){case"focusin":(Yp(P)||P.contentEditable==="true")&&(ei=P,eh=u,Rs=null);break;case"focusout":Rs=eh=ei=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,nm(h,n,c);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":nm(h,n,c)}var k;if(kd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Zr?g_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(m_&&n.locale!=="ko"&&(Zr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Zr&&(k=p_()):(Vn=c,Ad="value"in Vn?Vn.value:Vn.textContent,Zr=!0)),P=Xa(u,L),0<P.length&&(L=new Kp(L,t,null,n,c),h.push({event:L,listeners:P}),k?L.data=k:(k=y_(n),k!==null&&(L.data=k)))),(k=s1?o1(t,n):a1(t,n))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(c=new Kp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}k_(h,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=bs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bs(n,s),l!=null&&o.unshift(Ws(n,l,a))):i||(l=bs(n,s),l!=null&&o.push(Ws(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(E1,`
`).replace(T1,"")}function ra(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(I(425))}function Ya(){}var nh=null,rh=null;function ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(R1)}:sh;function R1(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bs(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),$t="__reactFiber$"+$i,Ks="__reactProps$"+$i,pn="__reactContainer$"+$i,oh="__reactEvents$"+$i,A1="__reactListeners$"+$i,P1="__reactHandles$"+$i;function pr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[$t])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[$t]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Bl(t){return t[Ks]||null}var ah=[],ri=-1;function ir(t){return{current:t}}function ie(t){0>ri||(t.current=ah[ri],ah[ri]=null,ri--)}function Z(t,e){ri++,ah[ri]=t.current,t.current=e}var Jn={},Qe=ir(Jn),st=ir(!1),Ar=Jn;function Ii(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function Ja(){ie(st),ie(Qe)}function um(t,e,n){if(Qe.current!==Jn)throw Error(I(168));Z(Qe,e),Z(st,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,hI(t)||"Unknown",i));return le({},n,r)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Ar=Qe.current,Z(Qe,t),Z(st,st.current),!0}function cm(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=D_(t,e,Ar),r.__reactInternalMemoizedMergedChildContext=t,ie(st),ie(Qe),Z(Qe,t)):ie(st),Z(st,n)}var tn=null,zl=!1,rc=!1;function x_(t){tn===null?tn=[t]:tn.push(t)}function C1(t){zl=!0,x_(t)}function sr(){if(!rc&&tn!==null){rc=!0;var t=0,e=X;try{var n=tn;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,zl=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),r_(Td,sr),i}finally{X=e,rc=!1}}return null}var ii=[],si=0,el=null,tl=0,yt=[],_t=0,Pr=null,rn=1,sn="";function hr(t,e){ii[si++]=tl,ii[si++]=el,el=t,tl=e}function O_(t,e,n){yt[_t++]=rn,yt[_t++]=sn,yt[_t++]=Pr,Pr=t;var r=rn;t=sn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Dt(e)+i|n<<i|r,sn=s+t}else rn=1<<s|n<<i|r,sn=t}function Dd(t){t.return!==null&&(hr(t,1),O_(t,1,0))}function xd(t){for(;t===el;)el=ii[--si],ii[si]=null,tl=ii[--si],ii[si]=null;for(;t===Pr;)Pr=yt[--_t],yt[_t]=null,sn=yt[--_t],yt[_t]=null,rn=yt[--_t],yt[_t]=null}var dt=null,ct=null,se=!1,kt=null;function L_(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dt=t,ct=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dt=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dt=t,ct=null,!0):!1;default:return!1}}function lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(se){var e=ct;if(e){var n=e;if(!hm(t,e)){if(lh(t))throw Error(I(418));e=Bn(n.nextSibling);var r=dt;e&&hm(t,e)?L_(r,n):(t.flags=t.flags&-4097|2,se=!1,dt=t)}}else{if(lh(t))throw Error(I(418));t.flags=t.flags&-4097|2,se=!1,dt=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dt=t}function ia(t){if(t!==dt)return!1;if(!se)return dm(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ih(t.type,t.memoizedProps)),e&&(e=ct)){if(lh(t))throw V_(),Error(I(418));for(;e;)L_(t,e),e=Bn(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=dt?Bn(t.stateNode.nextSibling):null;return!0}function V_(){for(var t=ct;t;)t=Bn(t.nextSibling)}function Si(){ct=dt=null,se=!1}function Od(t){kt===null?kt=[t]:kt.push(t)}var k1=Tn.ReactCurrentBatchConfig;function ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function M_(t){function e(m,f){if(t){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Wn(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,p,v){return f===null||f.tag!==6?(f=cc(p,m.mode,v),f.return=m,f):(f=i(f,p),f.return=m,f)}function l(m,f,p,v){var R=p.type;return R===Jr?c(m,f,p.props.children,v,p.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pn&&fm(R)===f.type)?(v=i(f,p.props),v.ref=ss(m,f,p),v.return=m,v):(v=Oa(p.type,p.key,p.props,null,m.mode,v),v.ref=ss(m,f,p),v.return=m,v)}function u(m,f,p,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=hc(p,m.mode,v),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function c(m,f,p,v,R){return f===null||f.tag!==7?(f=Tr(p,m.mode,v,R),f.return=m,f):(f=i(f,p),f.return=m,f)}function h(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=cc(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Go:return p=Oa(f.type,f.key,f.props,null,m.mode,p),p.ref=ss(m,null,f),p.return=m,p;case Yr:return f=hc(f,m.mode,p),f.return=m,f;case Pn:var v=f._init;return h(m,v(f._payload),p)}if(fs(f)||es(f))return f=Tr(f,m.mode,p,null),f.return=m,f;sa(m,f)}return null}function d(m,f,p,v){var R=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return R!==null?null:a(m,f,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Go:return p.key===R?l(m,f,p,v):null;case Yr:return p.key===R?u(m,f,p,v):null;case Pn:return R=p._init,d(m,f,R(p._payload),v)}if(fs(p)||es(p))return R!==null?null:c(m,f,p,v,null);sa(m,p)}return null}function g(m,f,p,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(p)||null,a(f,m,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Go:return m=m.get(v.key===null?p:v.key)||null,l(f,m,v,R);case Yr:return m=m.get(v.key===null?p:v.key)||null,u(f,m,v,R);case Pn:var P=v._init;return g(m,f,p,P(v._payload),R)}if(fs(v)||es(v))return m=m.get(p)||null,c(f,m,v,R,null);sa(f,v)}return null}function y(m,f,p,v){for(var R=null,P=null,k=f,L=f=0,J=null;k!==null&&L<p.length;L++){k.index>L?(J=k,k=null):J=k.sibling;var B=d(m,k,p[L],v);if(B===null){k===null&&(k=J);break}t&&k&&B.alternate===null&&e(m,k),f=s(B,f,L),P===null?R=B:P.sibling=B,P=B,k=J}if(L===p.length)return n(m,k),se&&hr(m,L),R;if(k===null){for(;L<p.length;L++)k=h(m,p[L],v),k!==null&&(f=s(k,f,L),P===null?R=k:P.sibling=k,P=k);return se&&hr(m,L),R}for(k=r(m,k);L<p.length;L++)J=g(k,m,L,p[L],v),J!==null&&(t&&J.alternate!==null&&k.delete(J.key===null?L:J.key),f=s(J,f,L),P===null?R=J:P.sibling=J,P=J);return t&&k.forEach(function(Rt){return e(m,Rt)}),se&&hr(m,L),R}function _(m,f,p,v){var R=es(p);if(typeof R!="function")throw Error(I(150));if(p=R.call(p),p==null)throw Error(I(151));for(var P=R=null,k=f,L=f=0,J=null,B=p.next();k!==null&&!B.done;L++,B=p.next()){k.index>L?(J=k,k=null):J=k.sibling;var Rt=d(m,k,B.value,v);if(Rt===null){k===null&&(k=J);break}t&&k&&Rt.alternate===null&&e(m,k),f=s(Rt,f,L),P===null?R=Rt:P.sibling=Rt,P=Rt,k=J}if(B.done)return n(m,k),se&&hr(m,L),R;if(k===null){for(;!B.done;L++,B=p.next())B=h(m,B.value,v),B!==null&&(f=s(B,f,L),P===null?R=B:P.sibling=B,P=B);return se&&hr(m,L),R}for(k=r(m,k);!B.done;L++,B=p.next())B=g(k,m,L,B.value,v),B!==null&&(t&&B.alternate!==null&&k.delete(B.key===null?L:B.key),f=s(B,f,L),P===null?R=B:P.sibling=B,P=B);return t&&k.forEach(function(Ji){return e(m,Ji)}),se&&hr(m,L),R}function w(m,f,p,v){if(typeof p=="object"&&p!==null&&p.type===Jr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Go:e:{for(var R=p.key,P=f;P!==null;){if(P.key===R){if(R=p.type,R===Jr){if(P.tag===7){n(m,P.sibling),f=i(P,p.props.children),f.return=m,m=f;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pn&&fm(R)===P.type){n(m,P.sibling),f=i(P,p.props),f.ref=ss(m,P,p),f.return=m,m=f;break e}n(m,P);break}else e(m,P);P=P.sibling}p.type===Jr?(f=Tr(p.props.children,m.mode,v,p.key),f.return=m,m=f):(v=Oa(p.type,p.key,p.props,null,m.mode,v),v.ref=ss(m,f,p),v.return=m,m=v)}return o(m);case Yr:e:{for(P=p.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=hc(p,m.mode,v),f.return=m,m=f}return o(m);case Pn:return P=p._init,w(m,f,P(p._payload),v)}if(fs(p))return y(m,f,p,v);if(es(p))return _(m,f,p,v);sa(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=cc(p,m.mode,v),f.return=m,m=f),o(m)):n(m,f)}return w}var Ri=M_(!0),U_=M_(!1),nl=ir(null),rl=null,oi=null,Ld=null;function Vd(){Ld=oi=rl=null}function Md(t){var e=nl.current;ie(nl),t._currentValue=e}function ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){rl=t,Ld=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(it=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(rl===null)throw Error(I(308));oi=t,rl.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var mr=null;function Ud(t){mr===null?mr=[t]:mr.push(t)}function F_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}function pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=le({},h,d);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=h}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Io={},Wt=ir(Io),Gs=ir(Io),Qs=ir(Io);function gr(t){if(t===Io)throw Error(I(174));return t}function bd(t,e){switch(Z(Qs,e),Z(Gs,t),Z(Wt,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hc(e,t)}ie(Wt),Z(Wt,e)}function Ai(){ie(Wt),ie(Gs),ie(Qs)}function $_(t){gr(Qs.current);var e=gr(Wt.current),n=Hc(e,t.type);e!==n&&(Z(Gs,t),Z(Wt,n))}function $d(t){Gs.current===t&&(ie(Wt),ie(Gs))}var oe=ir(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function jd(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var Ca=Tn.ReactCurrentDispatcher,sc=Tn.ReactCurrentBatchConfig,Cr=0,ae=null,Ee=null,Ae=null,ol=!1,As=!1,Xs=0,N1=0;function je(){throw Error(I(321))}function Bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vt(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(Cr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ca.current=t===null||t.memoizedState===null?L1:V1,t=n(r,i),As){s=0;do{if(As=!1,Xs=0,25<=s)throw Error(I(301));s+=1,Ae=Ee=null,e.updateQueue=null,Ca.current=M1,t=n(r,i)}while(As)}if(Ca.current=al,e=Ee!==null&&Ee.next!==null,Cr=0,Ae=Ee=ae=null,ol=!1,e)throw Error(I(300));return t}function Hd(){var t=Xs!==0;return Xs=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ae.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function St(){if(Ee===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Ae===null?ae.memoizedState:Ae.next;if(e!==null)Ae=e,Ee=t;else{if(t===null)throw Error(I(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ae===null?ae.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function Ys(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=St(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Cr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,kr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Vt(r,e.memoizedState)||(it=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=St(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vt(s,e.memoizedState)||(it=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function j_(){}function B_(t,e){var n=ae,r=St(),i=e(),s=!Vt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,qd(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Js(9,H_.bind(null,n,r,i,e),void 0,null),Pe===null)throw Error(I(349));Cr&30||z_(n,e,i)}return i}function z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,W_(e)&&K_(t)}function q_(t,e,n){return n(function(){W_(e)&&K_(t)})}function W_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vt(t,n)}catch{return!0}}function K_(t){var e=mn(t,1);e!==null&&xt(e,t,1,-1)}function gm(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:t},e.queue=t,t=t.dispatch=O1.bind(null,ae,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G_(){return St().memoizedState}function ka(t,e,n,r){var i=bt();ae.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&Bd(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function ym(t,e){return ka(8390656,8,t,e)}function qd(t,e){return Hl(2048,8,t,e)}function Q_(t,e){return Hl(4,2,t,e)}function X_(t,e){return Hl(4,4,t,e)}function Y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,Y_.bind(null,e,t),n)}function Wd(){}function Z_(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ev(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tv(t,e,n){return Cr&21?(Vt(n,e)||(n=o_(),ae.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n)}function D1(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=sc.transition;sc.transition={};try{t(!1),e()}finally{X=n,sc.transition=r}}function nv(){return St().memoizedState}function x1(t,e,n){var r=qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rv(t))iv(e,n);else if(n=F_(t,e,n,r),n!==null){var i=et();xt(n,t,r,i),sv(n,e,r)}}function O1(t,e,n){var r=qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rv(t))iv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ud(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=F_(t,e,i,r),n!==null&&(i=et(),xt(n,t,r,i),sv(n,e,r))}}function rv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function iv(t,e){As=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}var al={readContext:It,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},L1={readContext:It,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,Y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=x1.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:Wd,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=D1.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=bt();if(se){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Pe===null)throw Error(I(349));Cr&30||z_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ym(q_.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,H_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Pe.identifierPrefix;if(se){var n=sn,r=rn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=N1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V1={readContext:It,useCallback:Z_,useContext:It,useEffect:qd,useImperativeHandle:J_,useInsertionEffect:Q_,useLayoutEffect:X_,useMemo:ev,useReducer:oc,useRef:G_,useState:function(){return oc(Ys)},useDebugValue:Wd,useDeferredValue:function(t){var e=St();return tv(e,Ee.memoizedState,t)},useTransition:function(){var t=oc(Ys)[0],e=St().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:B_,useId:nv,unstable_isNewReconciler:!1},M1={readContext:It,useCallback:Z_,useContext:It,useEffect:qd,useImperativeHandle:J_,useInsertionEffect:Q_,useLayoutEffect:X_,useMemo:ev,useReducer:ac,useRef:G_,useState:function(){return ac(Ys)},useDebugValue:Wd,useDeferredValue:function(t){var e=St();return Ee===null?e.memoizedState=t:tv(e,Ee.memoizedState,t)},useTransition:function(){var t=ac(Ys)[0],e=St().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:B_,useId:nv,unstable_isNewReconciler:!1};function Pt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=qn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(xt(e,t,i,r),Pa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=qn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(xt(e,t,i,r),Pa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=qn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(xt(e,t,r,n),Pa(e,t,r))}};function _m(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function ov(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=ot(e)?Ar:Qe.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=ot(e)?Ar:Qe.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ql.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=cI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function av(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ul||(ul=!0,Ih=r),fh(t,e)},n}function lv(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new U1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Y1.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var F1=Tn.ReactCurrentOwner,it=!1;function Je(t,e,n,r){e.child=t===null?U_(e,null,n,r):Ri(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return pi(e,i),r=zd(t,e,n,r,s,i),n=Hd(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(se&&n&&Dd(e),e.flags|=1,Je(t,e,r,i),e.child)}function Sm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,uv(t,e,s,r,i)):(t=Oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function uv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(it=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(it=!0);else return e.lanes=t.lanes,gn(t,e,i)}return ph(t,e,n,r,i)}function cv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(li,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(li,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(li,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(li,ut),ut|=r;return Je(t,e,i,n),e.child}function hv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ph(t,e,n,r,i){var s=ot(n)?Ar:Qe.current;return s=Ii(e,s),pi(e,i),n=zd(t,e,n,r,s,i),r=Hd(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(se&&r&&Dd(e),e.flags|=1,Je(t,e,n,i),e.child)}function Rm(t,e,n,r,i){if(ot(n)){var s=!0;Za(e)}else s=!1;if(pi(e,i),e.stateNode===null)Na(t,e),ov(e,n,r),dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ot(n)?Ar:Qe.current,u=Ii(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vm(e,o,r,u),Cn=!1;var d=e.memoizedState;o.state=d,il(e,r,o,i),l=e.memoizedState,a!==r||d!==l||st.current||Cn?(typeof c=="function"&&(hh(e,n,c,r),l=e.memoizedState),(a=Cn||_m(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,b_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=ot(n)?Ar:Qe.current,l=Ii(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vm(e,o,r,l),Cn=!1,d=e.memoizedState,o.state=d,il(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||st.current||Cn?(typeof g=="function"&&(hh(e,n,g,r),y=e.memoizedState),(u=Cn||_m(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return mh(t,e,n,r,s,i)}function mh(t,e,n,r,i,s){hv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cm(e,n,!1),gn(t,e,s);r=e.stateNode,F1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ri(e,t.child,null,s),e.child=Ri(e,null,a,s)):Je(t,e,a,s),e.memoizedState=r.state,i&&cm(e,n,!0),e.child}function dv(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),bd(t,e.containerInfo)}function Am(t,e,n,r,i){return Si(),Od(i),e.flags|=256,Je(t,e,n,r),e.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function fv(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,r,0,null),t=Tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yh(n),e.memoizedState=gh,t):Kd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return b1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gh,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kd(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,r){return r!==null&&Od(r),Ri(e,t.child,null,n),t=Kd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lc(Error(I(422))),oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gl({mode:"visible",children:r.children},i,0,null),s=Tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ri(e,t.child,null,o),e.child.memoizedState=yh(o),e.memoizedState=gh,s);if(!(e.mode&1))return oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=lc(s,r,void 0),oa(t,e,o,r)}if(a=(o&t.childLanes)!==0,it||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),xt(r,t,i,-1))}return Zd(),r=lc(Error(I(421))),oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=J1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=Bn(i.nextSibling),dt=e,se=!0,kt=null,t!==null&&(yt[_t++]=rn,yt[_t++]=sn,yt[_t++]=Pr,rn=t.id,sn=t.overflow,Pr=e),e=Kd(e,r.children),e.flags|=4096,e)}function Pm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ch(t.return,e,n)}function uc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,n,e);else if(t.tag===19)Pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uc(e,!0,n,null,s);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $1(t,e,n){switch(e.tag){case 3:dv(e),Si();break;case 5:$_(e);break;case 1:ot(e.type)&&Za(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?fv(t,e,n):(Z(oe,oe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,n)}return gn(t,e,n)}var mv,_h,gv,yv;mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};gv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gr(Wt.current);var s=null;switch(n){case"input":i=$c(t,i),r=$c(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=zc(t,i),r=zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ya)}qc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,r){n!==r&&(e.flags|=4)};function os(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function j1(t,e,n){var r=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return ot(e.type)&&Ja(),Be(e),null;case 3:return r=e.stateNode,Ai(),ie(st),ie(Qe),jd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(Ah(kt),kt=null))),_h(t,e),Be(e),null;case 5:$d(e);var i=gr(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)gv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Be(e),null}if(t=gr(Wt.current),ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<ms.length;i++)te(ms[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Mp(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Fp(r,s),te("invalid",r)}qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,a,t),i=["children",""+a]):Us.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Qo(r),Up(r,s,!0);break;case"textarea":Qo(r),bp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ya)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[Ks]=r,mv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<ms.length;i++)te(ms[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Mp(t,r),i=$c(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":Fp(t,r),i=zc(t,r),te("invalid",t);break;default:i=r}qc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fs(t,l):typeof l=="number"&&Fs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Us.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&yd(t,s,l,o))}switch(n){case"input":Qo(t),Up(t,r,!1);break;case"textarea":Qo(t),bp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=gr(Qs.current),gr(Wt.current),ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=dt,t!==null))switch(t.tag){case 3:ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return Be(e),null;case 13:if(ie(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&ct!==null&&e.mode&1&&!(e.flags&128))V_(),Si(),e.flags|=98560,s=!1;else if(s=ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[$t]=e}else Si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else kt!==null&&(Ah(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Te===0&&(Te=3):Zd())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return Ai(),_h(t,e),t===null&&qs(e.stateNode.containerInfo),Be(e),null;case 10:return Md(e.type._context),Be(e),null;case 17:return ot(e.type)&&Ja(),Be(e),null;case 19:if(ie(oe),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)os(s,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,os(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>Ci&&(e.flags|=128,r=!0,os(s,!1),e.lanes=4194304)}else{if(!r)if(t=sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Be(e),null}else 2*me()-s.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function B1(t,e){switch(xd(e),e.tag){case 1:return ot(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),ie(st),ie(Qe),jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(ie(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(oe),null;case 4:return Ai(),null;case 10:return Md(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var aa=!1,qe=!1,z1=typeof WeakSet=="function"?WeakSet:Set,N=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function vh(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Cm=!1;function H1(t,e){if(nh=Ga,t=T_(),Nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},Ga=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Pt(e.type,_),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){ce(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Cm,Cm=!1,y}function Ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vh(e,n,s)}i=i.next}while(i!==r)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _v(t){var e=t.alternate;e!==null&&(t.alternate=null,_v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[Ks],delete e[oh],delete e[A1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ya));else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var De=null,Ct=!1;function Sn(t,e,n){for(n=n.child;n!==null;)wv(t,e,n),n=n.sibling}function wv(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:qe||ai(n,e);case 6:var r=De,i=Ct;De=null,Sn(t,e,n),De=r,Ct=i,De!==null&&(Ct?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Ct?(t=De,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),Bs(t)):nc(De,n.stateNode));break;case 4:r=De,i=Ct,De=n.stateNode.containerInfo,Ct=!0,Sn(t,e,n),De=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vh(n,e,o),i=i.next}while(i!==r)}Sn(t,e,n);break;case 1:if(!qe&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}Sn(t,e,n);break;case 21:Sn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Sn(t,e,n),qe=r):Sn(t,e,n);break;default:Sn(t,e,n)}}function Nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new z1),e.forEach(function(r){var i=Z1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Ct=!1;break e;case 3:De=a.stateNode.containerInfo,Ct=!0;break e;case 4:De=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(De===null)throw Error(I(160));wv(s,o,i),De=null,Ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ev(e,t),e=e.sibling}function Ev(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(At(e,t),Ft(t),r&4){try{Ps(3,t,t.return),Wl(3,t)}catch(_){ce(t,t.return,_)}try{Ps(5,t,t.return)}catch(_){ce(t,t.return,_)}}break;case 1:At(e,t),Ft(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(At(e,t),Ft(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{Fs(i,"")}catch(_){ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zy(i,s),Wc(a,o);var u=Wc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Gy(i,h):c==="dangerouslySetInnerHTML"?Wy(i,h):c==="children"?Fs(i,h):yd(i,c,h,u)}switch(a){case"input":jc(i,s);break;case"textarea":Hy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ci(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(_){ce(t,t.return,_)}}break;case 6:if(At(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ce(t,t.return,_)}}break;case 3:if(At(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bs(e.containerInfo)}catch(_){ce(t,t.return,_)}break;case 4:At(e,t),Ft(t);break;case 13:At(e,t),Ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xd=me())),r&4&&Nm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,At(e,t),qe=u):At(e,t),Ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ps(4,d,d.return);break;case 1:ai(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ce(r,n,_)}}break;case 5:ai(d,d.return);break;case 22:if(d.memoizedState!==null){xm(h);continue}}g!==null?(g.return=d,N=g):xm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ky("display",o))}catch(_){ce(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ce(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:At(e,t),Ft(t),r&4&&Nm(t);break;case 21:break;default:At(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=km(t);Th(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=km(t);Eh(t,a,o);break;default:throw Error(I(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q1(t,e,n){N=t,Tv(t)}function Tv(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||aa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=aa;var u=qe;if(aa=o,(qe=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Om(i):l!==null?(l.return=o,N=l):Om(i);for(;s!==null;)N=s,Tv(s),s=s.sibling;N=i,aa=a,qe=u}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Dm(t)}}function Dm(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||Wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Bs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}qe||e.flags&512&&wh(e)}catch(d){ce(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function xm(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Om(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{wh(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{wh(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var W1=Math.ceil,ll=Tn.ReactCurrentDispatcher,Gd=Tn.ReactCurrentOwner,Tt=Tn.ReactCurrentBatchConfig,G=0,Pe=null,_e=null,Ve=0,ut=0,li=ir(0),Te=0,Zs=null,kr=0,Kl=0,Qd=0,Cs=null,rt=null,Xd=0,Ci=1/0,en=null,ul=!1,Ih=null,Hn=null,la=!1,Mn=null,cl=0,ks=0,Sh=null,Da=-1,xa=0;function et(){return G&6?me():Da!==-1?Da:Da=me()}function qn(t){return t.mode&1?G&2&&Ve!==0?Ve&-Ve:k1.transition!==null?(xa===0&&(xa=o_()),xa):(t=X,t!==0||(t=window.event,t=t===void 0?16:f_(t.type)),t):1}function xt(t,e,n,r){if(50<ks)throw ks=0,Sh=null,Error(I(185));wo(t,n,r),(!(G&2)||t!==Pe)&&(t===Pe&&(!(G&2)&&(Kl|=n),Te===4&&Nn(t,Ve)),at(t,r),n===1&&G===0&&!(e.mode&1)&&(Ci=me()+500,zl&&sr()))}function at(t,e){var n=t.callbackNode;kI(t,e);var r=Ka(t,t===Pe?Ve:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?C1(Lm.bind(null,t)):x_(Lm.bind(null,t)),S1(function(){!(G&6)&&sr()}),n=null;else{switch(a_(r)){case 1:n=Td;break;case 4:n=i_;break;case 16:n=Wa;break;case 536870912:n=s_;break;default:n=Wa}n=Nv(n,Iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iv(t,e){if(Da=-1,xa=0,G&6)throw Error(I(327));var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var r=Ka(t,t===Pe?Ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hl(t,r);else{e=r;var i=G;G|=2;var s=Rv();(Pe!==t||Ve!==e)&&(en=null,Ci=me()+500,Er(t,e));do try{Q1();break}catch(a){Sv(t,a)}while(!0);Vd(),ll.current=s,G=i,_e!==null?e=0:(Pe=null,Ve=0,e=Te)}if(e!==0){if(e===2&&(i=Yc(t),i!==0&&(r=i,e=Rh(t,i))),e===1)throw n=Zs,Er(t,0),Nn(t,r),at(t,me()),n;if(e===6)Nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!K1(i)&&(e=hl(t,r),e===2&&(s=Yc(t),s!==0&&(r=s,e=Rh(t,s))),e===1))throw n=Zs,Er(t,0),Nn(t,r),at(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:dr(t,rt,en);break;case 3:if(Nn(t,r),(r&130023424)===r&&(e=Xd+500-me(),10<e)){if(Ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sh(dr.bind(null,t,rt,en),e);break}dr(t,rt,en);break;case 4:if(Nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){t.timeoutHandle=sh(dr.bind(null,t,rt,en),r);break}dr(t,rt,en);break;case 5:dr(t,rt,en);break;default:throw Error(I(329))}}}return at(t,me()),t.callbackNode===n?Iv.bind(null,t):null}function Rh(t,e){var n=Cs;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=hl(t,e),t!==2&&(e=rt,rt=n,e!==null&&Ah(e)),t}function Ah(t){rt===null?rt=t:rt.push.apply(rt,t)}function K1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nn(t,e){for(e&=~Qd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(G&6)throw Error(I(327));mi();var e=Ka(t,0);if(!(e&1))return at(t,me()),null;var n=hl(t,e);if(t.tag!==0&&n===2){var r=Yc(t);r!==0&&(e=r,n=Rh(t,r))}if(n===1)throw n=Zs,Er(t,0),Nn(t,e),at(t,me()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,rt,en),at(t,me()),null}function Yd(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Ci=me()+500,zl&&sr())}}function Nr(t){Mn!==null&&Mn.tag===0&&!(G&6)&&mi();var e=G;G|=1;var n=Tt.transition,r=X;try{if(Tt.transition=null,X=1,t)return t()}finally{X=r,Tt.transition=n,G=e,!(G&6)&&sr()}}function Jd(){ut=li.current,ie(li)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,I1(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(xd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:Ai(),ie(st),ie(Qe),jd();break;case 5:$d(r);break;case 4:Ai();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:Md(r.type._context);break;case 22:case 23:Jd()}n=n.return}if(Pe=t,_e=t=Wn(t.current,null),Ve=ut=e,Te=0,Zs=null,Qd=Kl=kr=0,rt=Cs=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mr=null}return t}function Sv(t,e){do{var n=_e;try{if(Vd(),Ca.current=al,ol){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Cr=0,Ae=Ee=ae=null,As=!1,Xs=0,Gd.current=null,n===null||n.return===null){Te=1,Zs=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Em(o);if(g!==null){g.flags&=-257,Tm(g,o,a,s,e),g.mode&1&&wm(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){wm(s,u,e),Zd();break e}l=Error(I(426))}}else if(se&&a.mode&1){var w=Em(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Tm(w,o,a,s,e),Od(Pi(l,a));break e}}s=l=Pi(l,a),Te!==4&&(Te=2),Cs===null?Cs=[s]:Cs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=av(s,l,e);pm(s,m);break e;case 1:a=l;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Hn===null||!Hn.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=lv(s,a,e);pm(s,v);break e}}s=s.return}while(s!==null)}Pv(n)}catch(R){e=R,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Rv(){var t=ll.current;return ll.current=al,t===null?al:t}function Zd(){(Te===0||Te===3||Te===2)&&(Te=4),Pe===null||!(kr&268435455)&&!(Kl&268435455)||Nn(Pe,Ve)}function hl(t,e){var n=G;G|=2;var r=Rv();(Pe!==t||Ve!==e)&&(en=null,Er(t,e));do try{G1();break}catch(i){Sv(t,i)}while(!0);if(Vd(),G=n,ll.current=r,_e!==null)throw Error(I(261));return Pe=null,Ve=0,Te}function G1(){for(;_e!==null;)Av(_e)}function Q1(){for(;_e!==null&&!wI();)Av(_e)}function Av(t){var e=kv(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?Pv(t):_e=e,Gd.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=B1(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,_e=null;return}}else if(n=j1(n,e,ut),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Te===0&&(Te=5)}function dr(t,e,n){var r=X,i=Tt.transition;try{Tt.transition=null,X=1,X1(t,e,n,r)}finally{Tt.transition=i,X=r}return null}function X1(t,e,n,r){do mi();while(Mn!==null);if(G&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NI(t,s),t===Pe&&(_e=Pe=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,Nv(Wa,function(){return mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tt.transition,Tt.transition=null;var o=X;X=1;var a=G;G|=4,Gd.current=null,H1(t,n),Ev(n,t),g1(rh),Ga=!!nh,rh=nh=null,t.current=n,q1(n),EI(),G=a,X=o,Tt.transition=s}else t.current=n;if(la&&(la=!1,Mn=t,cl=i),s=t.pendingLanes,s===0&&(Hn=null),SI(n.stateNode),at(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,t=Ih,Ih=null,t;return cl&1&&t.tag!==0&&mi(),s=t.pendingLanes,s&1?t===Sh?ks++:(ks=0,Sh=t):ks=0,sr(),null}function mi(){if(Mn!==null){var t=a_(cl),e=Tt.transition,n=X;try{if(Tt.transition=null,X=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,cl=0,G&6)throw Error(I(331));var i=G;for(G|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Ps(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,g=c.return;if(_v(c),c===u){N=null;break}if(d!==null){d.return=g,N=d;break}N=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ps(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wl(9,a)}}catch(R){ce(a,a.return,R)}if(a===o){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(G=i,sr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Fl,t)}catch{}r=!0}return r}finally{X=n,Tt.transition=e}}return!1}function Vm(t,e,n){e=Pi(n,e),e=av(t,e,1),t=zn(t,e,1),e=et(),t!==null&&(wo(t,1,e),at(t,e))}function ce(t,e,n){if(t.tag===3)Vm(t,t,n);else for(;e!==null;){if(e.tag===3){Vm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Pi(n,t),t=lv(e,t,1),e=zn(e,t,1),t=et(),e!==null&&(wo(e,1,t),at(e,t));break}}e=e.return}}function Y1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,Pe===t&&(Ve&n)===n&&(Te===4||Te===3&&(Ve&130023424)===Ve&&500>me()-Xd?Er(t,0):Qd|=n),at(t,e)}function Cv(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=et();t=mn(t,e),t!==null&&(wo(t,e,n),at(t,n))}function J1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cv(t,n)}function Z1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Cv(t,n)}var kv;kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)it=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return it=!1,$1(t,e,n);it=!!(t.flags&131072)}else it=!1,se&&e.flags&1048576&&O_(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Na(t,e),t=e.pendingProps;var i=Ii(e,Qe.current);pi(e,n),i=zd(null,e,r,t,i,n);var s=Hd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,Za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(e),i.updater=ql,e.stateNode=i,i._reactInternals=e,dh(e,r,t,n),e=mh(null,e,r,!0,s,n)):(e.tag=0,se&&s&&Dd(e),Je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tS(r),t=Pt(r,t),i){case 0:e=ph(null,e,r,t,n);break e;case 1:e=Rm(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Sm(null,e,r,Pt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ph(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Rm(t,e,r,i,n);case 3:e:{if(dv(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,b_(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(I(423)),e),e=Am(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(I(424)),e),e=Am(t,e,r,n,i);break e}else for(ct=Bn(e.stateNode.containerInfo.firstChild),dt=e,se=!0,kt=null,n=U_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=gn(t,e,n);break e}Je(t,e,r,n)}e=e.child}return e;case 5:return $_(e),t===null&&uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ih(r,i)?o=null:s!==null&&ih(r,s)&&(e.flags|=32),hv(t,e),Je(t,e,o,n),e.child;case 6:return t===null&&uh(e),null;case 13:return fv(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ri(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Im(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(nl,r._currentValue),r._currentValue=o,s!==null)if(Vt(s.value,o)){if(s.children===i.children&&!st.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ch(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pi(e,n),i=It(i),r=r(i),e.flags|=1,Je(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),Sm(t,e,r,i,n);case 15:return uv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Na(t,e),e.tag=1,ot(r)?(t=!0,Za(e)):t=!1,pi(e,n),ov(e,r,i),dh(e,r,i,n),mh(null,e,r,!0,t,n);case 19:return pv(t,e,n);case 22:return cv(t,e,n)}throw Error(I(156,e.tag))};function Nv(t,e){return r_(t,e)}function eS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new eS(t,e,n,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tS(t){if(typeof t=="function")return ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===wd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return Tr(n.children,i,s,e);case _d:o=8,i|=8;break;case Mc:return t=Et(12,n,e,i|2),t.elementType=Mc,t.lanes=s,t;case Uc:return t=Et(13,n,e,i),t.elementType=Uc,t.lanes=s,t;case Fc:return t=Et(19,n,e,i),t.elementType=Fc,t.lanes=s,t;case $y:return Gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fy:o=10;break e;case by:o=9;break e;case vd:o=11;break e;case wd:o=14;break e;case Pn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Tr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=Et(22,t,r,e),t.elementType=$y,t.lanes=n,t.stateNode={isHidden:!1},t}function cc(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function hc(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(t,e,n,r,i,s,o,a,l){return t=new nS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function rS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dv(t){if(!t)return Jn;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(ot(n))return D_(t,n,e)}return e}function xv(t,e,n,r,i,s,o,a,l){return t=tf(n,r,!0,t,i,s,o,a,l),t.context=Dv(null),n=t.current,r=et(),i=qn(n),s=hn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,wo(t,i,r),at(t,r),t}function Ql(t,e,n,r){var i=e.current,s=et(),o=qn(i);return n=Dv(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(xt(t,i,o,s),Pa(t,i,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function iS(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function rf(t){this._internalRoot=t}Xl.prototype.render=rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ql(t,e,null,null)};Xl.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Ql(null,t,null,null)}),e[pn]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=c_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&d_(t)}};function sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function sS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=dl(o);s.call(u)}}var o=xv(e,r,t,0,null,!1,!1,"",Um);return t._reactRootContainer=o,t[pn]=o.current,qs(t.nodeType===8?t.parentNode:t),Nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=dl(l);a.call(u)}}var l=tf(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=l,t[pn]=l.current,qs(t.nodeType===8?t.parentNode:t),Nr(function(){Ql(e,l,n,r)}),l}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=dl(o);a.call(l)}}Ql(e,o,t,i)}else o=sS(n,e,t,i,r);return dl(o)}l_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(Id(e,n|1),at(e,me()),!(G&6)&&(Ci=me()+500,sr()))}break;case 13:Nr(function(){var r=mn(t,1);if(r!==null){var i=et();xt(r,t,1,i)}}),nf(t,1)}};Sd=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=et();xt(e,t,134217728,n)}nf(t,134217728)}};u_=function(t){if(t.tag===13){var e=qn(t),n=mn(t,e);if(n!==null){var r=et();xt(n,t,e,r)}nf(t,e)}};c_=function(){return X};h_=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};Gc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bl(r);if(!i)throw Error(I(90));By(r),jc(r,i)}}}break;case"textarea":Hy(t,n);break;case"select":e=n.value,e!=null&&ci(t,!!n.multiple,e,!1)}};Yy=Yd;Jy=Nr;var oS={usingClientEntryPoint:!1,Events:[To,ni,Bl,Qy,Xy,Yd]},as={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aS={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t_(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Fl=ua.inject(aS),qt=ua}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(e))throw Error(I(200));return rS(t,e,null,n)};mt.createRoot=function(t,e){if(!sf(t))throw Error(I(299));var n=!1,r="",i=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tf(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,qs(t.nodeType===8?t.parentNode:t),new rf(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=t_(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Nr(t)};mt.hydrate=function(t,e,n){if(!Yl(e))throw Error(I(200));return Jl(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!sf(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xv(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xl(e)};mt.render=function(t,e,n){if(!Yl(e))throw Error(I(200));return Jl(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(I(40));return t._reactRootContainer?(Nr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};mt.unstable_batchedUpdates=Yd;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Jl(t,e,n,!1,r)};mt.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),Ly.exports=mt;var lS=Ly.exports,Fm=lS;Lc.createRoot=Fm.createRoot,Lc.hydrateRoot=Fm.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eo.apply(this,arguments)}var Un;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Un||(Un={}));const bm="popstate";function uS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ph("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fl(i)}return hS(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cS(){return Math.random().toString(36).substr(2,8)}function $m(t,e){return{usr:t.state,key:t.key,idx:e}}function Ph(t,e,n,r){return n===void 0&&(n=null),eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ji(e):e,{state:n,key:e&&e.key||r||cS()})}function fl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Un.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(eo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Un.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:m})}function d(w,m){a=Un.Push;let f=Ph(_.location,w,m);u=c()+1;let p=$m(f,u),v=_.createHref(f);try{o.pushState(p,"",v)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(v)}s&&l&&l({action:a,location:_.location,delta:1})}function g(w,m){a=Un.Replace;let f=Ph(_.location,w,m);u=c();let p=$m(f,u),v=_.createHref(f);o.replaceState(p,"",v),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:fl(w);return f=f.replace(/ $/,"%20"),we(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bm,h),l=w,()=>{i.removeEventListener(bm,h),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let m=y(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(w){return o.go(w)}};return _}var jm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jm||(jm={}));function dS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ji(e):e,i=of(r.pathname||"/",n);if(i==null)return null;let s=Mv(t);fS(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=RS(i);o=TS(s[a],l)}return o}function Mv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:wS(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Uv(s.path))i(s,o,l)}),e}function Uv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Uv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ES(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pS=/^:[\w-]+$/,mS=3,gS=2,yS=1,_S=10,vS=-2,Bm=t=>t==="*";function wS(t,e){let n=t.split("/"),r=n.length;return n.some(Bm)&&(r+=vS),e&&(r+=gS),n.filter(i=>!Bm(i)).reduce((i,s)=>i+(pS.test(s)?mS:s===""?yS:_S),r)}function ES(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=IS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:kS(Kn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function IS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:g}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[h];return g&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function SS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function of(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function AS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ji(t):t;return{pathname:n?n.startsWith("/")?n:PS(n,e):e,search:NS(r),hash:DS(i)}}function PS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fv(t,e){let n=CS(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ji(t):(i=eo({},t),we(!i.pathname||!i.pathname.includes("?"),dc("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),dc("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),dc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=AS(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),kS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $v=["post","put","patch","delete"];new Set($v);const OS=["get",...$v];new Set(OS);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},to.apply(this,arguments)}const af=S.createContext(null),LS=S.createContext(null),$r=S.createContext(null),Zl=S.createContext(null),or=S.createContext({outlet:null,matches:[],isDataRoute:!1}),jv=S.createContext(null);function VS(t,e){let{relative:n}=e===void 0?{}:e;So()||we(!1);let{basename:r,navigator:i}=S.useContext($r),{hash:s,pathname:o,search:a}=zv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function So(){return S.useContext(Zl)!=null}function eu(){return So()||we(!1),S.useContext(Zl).location}function Bv(t){S.useContext($r).static||S.useLayoutEffect(t)}function Bi(){let{isDataRoute:t}=S.useContext(or);return t?QS():MS()}function MS(){So()||we(!1);let t=S.useContext(af),{basename:e,future:n,navigator:r}=S.useContext($r),{matches:i}=S.useContext(or),{pathname:s}=eu(),o=JSON.stringify(Fv(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Bv(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=bv(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Kn([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function US(){let{matches:t}=S.useContext(or),e=t[t.length-1];return e?e.params:{}}function zv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext($r),{matches:i}=S.useContext(or),{pathname:s}=eu(),o=JSON.stringify(Fv(i,r.v7_relativeSplatPath));return S.useMemo(()=>bv(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function FS(t,e){return bS(t,e)}function bS(t,e,n,r){So()||we(!1);let{navigator:i}=S.useContext($r),{matches:s}=S.useContext(or),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=eu(),c;if(e){var h;let w=typeof e=="string"?ji(e):e;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||we(!1),c=w}else c=u;let d=c.pathname||"/",g=d;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=dS(t,{pathname:g}),_=HS(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Kn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Kn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?S.createElement(Zl.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Un.Pop}},_):_}function $S(){let t=GS(),e=xS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const jS=S.createElement($S,null);class BS extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(or.Provider,{value:this.props.routeContext},S.createElement(jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zS(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(af);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(or.Provider,{value:e},r)}function HS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);c>=0||we(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:g}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let g,y=!1,_=null,w=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||jS,l&&(u<0&&d===0?(y=!0,w=null):u===d&&(y=!0,w=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),f=()=>{let p;return g?p=_:y?p=w:h.route.Component?p=S.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=c,S.createElement(zS,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?S.createElement(BS,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Hv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hv||{}),pl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pl||{});function qS(t){let e=S.useContext(af);return e||we(!1),e}function WS(t){let e=S.useContext(LS);return e||we(!1),e}function KS(t){let e=S.useContext(or);return e||we(!1),e}function qv(t){let e=KS(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function GS(){var t;let e=S.useContext(jv),n=WS(pl.UseRouteError),r=qv(pl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function QS(){let{router:t}=qS(Hv.UseNavigateStable),e=qv(pl.UseNavigateStable),n=S.useRef(!1);return Bv(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,to({fromRouteId:e},s)))},[t,e])}function An(t){we(!1)}function XS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Un.Pop,navigator:s,static:o=!1,future:a}=t;So()&&we(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:to({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ji(r));let{pathname:c="/",search:h="",hash:d="",state:g=null,key:y="default"}=r,_=S.useMemo(()=>{let w=of(c,l);return w==null?null:{location:{pathname:w,search:h,hash:d,state:g,key:y},navigationType:i}},[l,c,h,d,g,y,i]);return _==null?null:S.createElement($r.Provider,{value:u},S.createElement(Zl.Provider,{children:n,value:_}))}function YS(t){let{children:e,location:n}=t;return FS(Ch(e),n)}new Promise(()=>{});function Ch(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Ch(r.props.children,s));return}r.type!==An&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ch(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kh(){return kh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kh.apply(this,arguments)}function JS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function eR(t,e){return t.button===0&&(!e||e==="_self")&&!ZS(t)}const tR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nR="6";try{window.__reactRouterVersion=nR}catch{}const rR="startTransition",zm=YT[rR];function iR(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=uS({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(h=>{u&&zm?zm(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(XS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const sR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,La=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=JS(e,tR),{basename:g}=S.useContext($r),y,_=!1;if(typeof u=="string"&&oR.test(u)&&(y=u,sR))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),R=of(v.pathname,g);v.origin===p.origin&&R!=null?u=R+v.search+v.hash:_=!0}catch{}let w=VS(u,{relative:i}),m=aR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function f(p){r&&r(p),p.defaultPrevented||m(p)}return S.createElement("a",kh({},d,{href:y||w,onClick:_||s?r:f,ref:n,target:l}))});var Hm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hm||(Hm={}));var qm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qm||(qm={}));function aR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Bi(),u=eu(),c=zv(t,{relative:o});return S.useCallback(h=>{if(eR(h,n)){h.preventDefault();let d=r!==void 0?r:fl(u)===fl(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new uR;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cR=function(t){const e=Wv(t);return Kv.encodeByteArray(e,!0)},ml=function(t){return cR(t).replace(/\./g,"")},Gv=function(t){try{return Kv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=()=>hR().__FIREBASE_DEFAULTS__,fR=()=>{if(typeof process>"u"||typeof Wm>"u")return;const t=Wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gv(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return dR()||fR()||pR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qv=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xv=t=>{const e=Qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yv=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config},Jv=t=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function yR(){var t;const e=(t=tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _R(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wR(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ER(){return!yR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TR(){try{return typeof indexedDB=="object"}catch{return!1}}function IR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SR,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,r)}}function RR(t,e){return t.replace(AR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AR=/\{\$([^}]+)}/g;function PR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Km(s)&&Km(o)){if(!gl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function CR(t,e){const n=new kR(t,e);return n.subscribe.bind(n)}class kR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OR(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xR(t){return t===fr?void 0:t}function OR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const VR={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},MR=W.INFO,UR={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},FR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lf{constructor(e){this.name=e,this._logLevel=MR,this._logHandler=FR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const bR=(t,e)=>e.some(n=>t instanceof n);let Gm,Qm;function $R(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jR(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,Nh=new WeakMap,t0=new WeakMap,pc=new WeakMap,uf=new WeakMap;function BR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e0.set(n,t)}).catch(()=>{}),uf.set(e,t),e}function zR(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HR(t){Dh=t(Dh)}function qR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return t0.set(r,e.sort?e.sort():[e]),Gn(r)}:jR().includes(t)?function(...e){return t.apply(mc(this),e),Gn(e0.get(this))}:function(...e){return Gn(t.apply(mc(this),e))}}function WR(t){return typeof t=="function"?qR(t):(t instanceof IDBTransaction&&zR(t),bR(t,$R())?new Proxy(t,Dh):t)}function Gn(t){if(t instanceof IDBRequest)return BR(t);if(pc.has(t))return pc.get(t);const e=WR(t);return e!==t&&(pc.set(t,e),uf.set(e,t)),e}const mc=t=>uf.get(t);function KR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GR=["get","getKey","getAll","getAllKeys","count"],QR=["put","add","delete","clear"],gc=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return gc.set(e,s),s}HR(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",Ym="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new lf("@firebase/app"),JR="@firebase/app-compat",ZR="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",iA="@firebase/auth-compat",sA="@firebase/database",oA="@firebase/database-compat",aA="@firebase/functions",lA="@firebase/functions-compat",uA="@firebase/installations",cA="@firebase/installations-compat",hA="@firebase/messaging",dA="@firebase/messaging-compat",fA="@firebase/performance",pA="@firebase/performance-compat",mA="@firebase/remote-config",gA="@firebase/remote-config-compat",yA="@firebase/storage",_A="@firebase/storage-compat",vA="@firebase/firestore",wA="@firebase/firestore-compat",EA="firebase",TA="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",IA={[xh]:"fire-core",[JR]:"fire-core-compat",[eA]:"fire-analytics",[ZR]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[iA]:"fire-auth-compat",[sA]:"fire-rtdb",[oA]:"fire-rtdb-compat",[aA]:"fire-fn",[lA]:"fire-fn-compat",[uA]:"fire-iid",[cA]:"fire-iid-compat",[hA]:"fire-fcm",[dA]:"fire-fcm-compat",[fA]:"fire-perf",[pA]:"fire-perf-compat",[mA]:"fire-rc",[gA]:"fire-rc-compat",[yA]:"fire-gcs",[_A]:"fire-gcs-compat",[vA]:"fire-fst",[wA]:"fire-fst-compat","fire-js":"fire-js",[EA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map,SA=new Map,Lh=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(Lh.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of yl.values())Jm(n,t);for(const n of SA.values())Jm(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ro("app","Firebase",RA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=TA;function n0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=Yv()),!n)throw Qn.create("no-options");const s=yl.get(i);if(s){if(gl(n,s.options)&&gl(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new LR(i);for(const l of Lh.values())o.addComponent(l);const a=new AA(n,r,o);return yl.set(i,a),a}function cf(t=Oh){const e=yl.get(t);if(!e&&t===Oh&&Yv())return n0();if(!e)throw Qn.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=IA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(a.join(" "));return}xr(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firebase-heartbeat-database",CA=1,no="firebase-heartbeat-store";let yc=null;function r0(){return yc||(yc=KR(PA,CA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),yc}async function kA(t){try{const n=(await r0()).transaction(no),r=await n.objectStore(no).get(i0(t));return await n.done,r}catch(e){if(e instanceof Zt)Dr.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function Zm(t,e){try{const r=(await r0()).transaction(no,"readwrite");await r.objectStore(no).put(e,i0(t)),await r.done}catch(n){if(n instanceof Zt)Dr.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(r.message)}}}function i0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=1024,DA=30*24*60*60*1e3;class xA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:i}=OA(this._heartbeatsCache.heartbeats),s=ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function eg(){return new Date().toISOString().substring(0,10)}function OA(t,e=NA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TR()?IR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tg(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){xr(new Zn("platform-logger",e=>new XR(e),"PRIVATE")),xr(new Zn("heartbeat",e=>new xA(e),"PRIVATE")),Kt(xh,Ym,t),Kt(xh,Ym,"esm2017"),Kt("fire-js","")}VA("");function hf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function s0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MA=s0,o0=new Ro("auth","Firebase",s0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new lf("@firebase/auth");function UA(t,...e){_l.logLevel<=W.WARN&&_l.warn(`Auth (${jr}): ${t}`,...e)}function Va(t,...e){_l.logLevel<=W.ERROR&&_l.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw ff(t,...e)}function Ot(t,...e){return ff(t,...e)}function df(t,e,n){const r=Object.assign(Object.assign({},MA()),{[e]:n});return new Ro("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return df(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),df(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ff(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o0.create(t,...e)}function M(t,e,...n){if(!t)throw ff(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function yn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bA(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bA()||_R()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=gR()||vR()}get(){return $A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Po(3e4,6e4);function mf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zi(t,e,n,r,i={}){return l0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),a0.fetch()(u0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function l0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BA),e);try{const i=new qA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ca(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw df(t,c,u);Yt(t,c)}}catch(i){if(i instanceof Zt)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function HA(t,e,n,r,i={}){const s=await zi(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function u0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pf(t.config,i):`${t.config.apiScheme}://${i}`}class qA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),zA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){return zi(t,"POST","/v1/accounts:delete",e)}async function c0(t,e){return zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KA(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=gf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ns(_c(i.auth_time)),issuedAtTime:Ns(_c(i.iat)),expirationTime:Ns(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gv(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rg(t){const e=gf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&GA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ro(t,c0(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h0(s.providerUserInfo):[],a=YA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function XA(t){const e=$e(t);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h0(t){return t.map(e=>{var{providerId:n}=e,r=hf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){const n=await l0(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=u0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",a0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZA(t,e){return zi(t,"POST","/v2/accounts:revokeToken",mf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gi;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KA(this,e)}reload(){return XA(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await ro(this,WA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:v,isAnonymous:R,providerData:P,stsTokenManager:k}=n;M(p&&k,e,"internal-error");const L=gi.fromJSON(this.name,k);M(typeof p=="string",e,"internal-error"),Rn(h,e.name),Rn(d,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof R=="boolean",e,"internal-error"),Rn(g,e.name),Rn(y,e.name),Rn(_,e.name),Rn(w,e.name),Rn(m,e.name),Rn(f,e.name);const J=new ln({uid:p,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:R,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:L,createdAt:m,lastLoginAt:f});return P&&Array.isArray(P)&&(J.providerData=P.map(B=>Object.assign({},B))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new gi;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?h0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new gi;a.updateFromIdToken(r);const l=new ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;function un(t){yn(t instanceof Function,"Expected a class definition");let e=ig.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ig.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d0.type="NONE";const sg=d0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ma(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ma("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yi(un(sg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(sg);const o=Ma(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ln._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new yi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new yi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y0(e))return"Blackberry";if(_0(e))return"Webos";if(yf(e))return"Safari";if((e.includes("chrome/")||p0(e))&&!e.includes("edge/"))return"Chrome";if(g0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f0(t=be()){return/firefox\//i.test(t)}function yf(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p0(t=be()){return/crios\//i.test(t)}function m0(t=be()){return/iemobile/i.test(t)}function g0(t=be()){return/android/i.test(t)}function y0(t=be()){return/blackberry/i.test(t)}function _0(t=be()){return/webos/i.test(t)}function ru(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eP(t=be()){var e;return ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tP(){return wR()&&document.documentMode===10}function v0(t=be()){return ru(t)||g0(t)||_0(t)||y0(t)||/windows phone/i.test(t)||m0(t)}function nP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e=[]){let n;switch(t){case"Browser":n=og(be());break;case"Worker":n=`${og(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e={}){return zi(t,"GET","/v2/passwordPolicy",mf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=6;class oP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new rP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await c0(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Ir(this));const n=e?$e(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iP(this),n=new oP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function iu(t){return $e(t)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=CR(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lP(t){_f=t}function uP(t){return _f.loadJS(t)}function cP(){return _f.gapiScript}function hP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t,e){const n=nu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gl(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function fP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pP(t,e,n){const r=iu(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=E0(e),{host:o,port:a}=mP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),gP()}function E0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mP(t){const e=E0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lg(o)}}}function lg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return HA(t,"POST","/v1/accounts:signInWithIdp",mf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="http://localhost";class Or extends T0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:yP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Co{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Co{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Co{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=ug(r);return new ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ug(r);return new ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wl(e,n,r,i)}}function I0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(t,s,e,r):s})}async function _P(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const s=await ro(t,I0(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=gf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e,n=!1){if(on(t.app))return Promise.reject(Ir(t));const r="signIn",i=await I0(t,r,e),s=await ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function EP(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function TP(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function IP(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}const El="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){const t=be();return yf(t)||ru(t)}const RP=1e3,AP=10;class R0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SP()&&nP(),this.fallbackToPolling=v0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R0.type="LOCAL";const PP=R0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A0.type="SESSION";const P0=A0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await CP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function NP(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function DP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OP(){return C0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firebaseLocalStorageDb",LP=1,Tl="firebaseLocalStorage",N0="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ou(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function VP(){const t=indexedDB.deleteDatabase(k0);return new ko(t).toPromise()}function Uh(){const t=indexedDB.open(k0,LP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:N0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await VP(),e(await Uh()))})})}async function cg(t,e,n){const r=ou(t,!0).put({[N0]:e,value:n});return new ko(r).toPromise()}async function MP(t,e){const n=ou(t,!1).get(e),r=await new ko(n).toPromise();return r===void 0?null:r.value}function hg(t,e){const n=ou(t,!0).delete(e);return new ko(n).toPromise()}const UP=800,FP=3;class D0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(OP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DP(),!this.activeServiceWorker)return;this.sender=new kP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await cg(e,El,"1"),await hg(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ou(i,!1).getAll();return new ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D0.type="LOCAL";const bP=D0;new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e){return e?un(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends T0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $P(t){return wP(t.auth,new Ef(t),t.bypassAuthState)}function jP(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),vP(n,new Ef(t),t.bypassAuthState)}async function BP(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),_P(n,new Ef(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $P;case"linkViaPopup":case"linkViaRedirect":return BP;case"reauthViaPopup":case"reauthViaRedirect":return jP;default:Yt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new Po(2e3,1e4);async function HP(t,e,n){if(on(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const r=iu(t);FA(t,e,vf);const i=x0(r,n);return new yr(r,"signInViaPopup",e,i).executeNotNull()}class yr extends O0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="pendingRedirect",Ua=new Map;class WP extends O0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await KP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KP(t,e){const n=XP(e),r=QP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GP(t,e){Ua.set(t._key(),e)}function QP(t){return un(t._redirectPersistence)}function XP(t){return Ma(qP,t.config.apiKey,t.name)}async function YP(t,e,n=!1){if(on(t.app))return Promise.reject(Ir(t));const r=iu(t),i=x0(r,e),o=await new WP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=10*60*1e3;class ZP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!L0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JP&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e={}){return zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rC=/^https?/;async function iC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tC(t);for(const n of e)try{if(sC(n))return}catch{}Yt(t,"unauthorized-domain")}function sC(t){const e=Vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rC.test(n))return!1;if(nC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new Po(3e4,6e4);function fg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aC(t){return new Promise((e,n)=>{var r,i,s;function o(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),n(Ot(t,"network-request-failed"))},timeout:oC.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const a=hP("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},uP(`${cP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function lC(t){return Fa=Fa||aC(t),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Po(5e3,15e3),cC="__/auth/iframe",hC="emulator/auth/iframe",dC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pC(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pf(e,hC):`https://${t.config.authDomain}/${cC}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=fC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function mC(t){const e=await lC(t),n=Gt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:pC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(o)},uC.get());function l(){Gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yC=500,_C=600,vC="_blank",wC="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EC(t,e,n,r=yC,i=_C){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=be().toLowerCase();n&&(a=p0(u)?vC:n),f0(u)&&(e=e||wC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(eP(u)&&a!=="_self")return TC(e||"",a),new pg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new pg(h)}function TC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="__/auth/handler",SC="emulator/auth/handler",RC=encodeURIComponent("fac");async function mg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof vf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof Co){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${RC}=${encodeURIComponent(l)}`:"";return`${AC(t)}?${Ao(a).slice(1)}${u}`}function AC({config:t}){return t.emulator?pf(t,SC):`https://${t.authDomain}/${IC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="webStorageSupport";class PC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P0,this._completeRedirectFn=YP,this._overrideRedirectResult=GP}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mg(e,n,r,Vh(),i);return EC(e,o,wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mg(e,n,r,Vh(),i);return NP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mC(e),r=new ZP(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v0()||yf()||ru()}}const CC=PC;var gg="@firebase/auth",yg="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DC(t){xr(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w0(t)},u=new aP(r,i,s,l);return fP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new Zn("auth-internal",e=>{const n=iu(e.getProvider("auth").getImmediate());return(r=>new kC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(gg,yg,NC(t)),Kt(gg,yg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=5*60,OC=Jv("authIdTokenMaxAge")||xC;let _g=null;const LC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OC)return;const i=n==null?void 0:n.token;_g!==i&&(_g=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VC(t=cf()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dP(t,{popupRedirectResolver:CC,persistence:[bP,PP,P0]}),r=Jv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LC(s.toString());TP(n,o,()=>o(n.currentUser)),EP(n,a=>o(a))}}const i=Qv("auth");return i&&pP(n,`http://${i}`),n}function MC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DC("Browser");var UC="firebase",FC="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(UC,FC,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="firebasestorage.googleapis.com",M0="storageBucket",bC=2*60*1e3,$C=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Zt{constructor(e,n,r=0){super(wc(e),`Firebase Storage: ${n} (${wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var he;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(he||(he={}));function wc(t){return"storage/"+t}function Tf(){const t="An unknown error occurred, please check the error payload for server response.";return new fe(he.UNKNOWN,t)}function jC(t){return new fe(he.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function BC(t){return new fe(he.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(he.UNAUTHENTICATED,t)}function HC(){return new fe(he.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qC(t){return new fe(he.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WC(){return new fe(he.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function KC(){return new fe(he.CANCELED,"User canceled the upload/download.")}function GC(t){return new fe(he.INVALID_URL,"Invalid URL '"+t+"'.")}function QC(t){return new fe(he.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function XC(){return new fe(he.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+M0+"' property when initializing the app?")}function YC(){return new fe(he.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JC(){return new fe(he.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZC(t){return new fe(he.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fh(t){return new fe(he.INVALID_ARGUMENT,t)}function U0(){return new fe(he.APP_DELETED,"The Firebase app was deleted.")}function ek(t){return new fe(he.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ds(t,e){return new fe(he.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ls(t){throw new fe(he.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(r.path==="")return r;throw QC(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===V0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${w}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<p.length;v++){const R=p[v],P=R.regex.exec(e);if(P){const k=P[R.indices.bucket];let L=P[R.indices.path];L||(L=""),r=new ht(k,L),R.postModify(r);break}}if(r==null)throw GC(e);return r}}class tk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(g,l())},w)}function d(){s&&clearTimeout(s)}function g(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let p;a===1?(a=2,p=0):p=(r+Math.random())*1e3,h(p)}let y=!1;function _(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function rk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){return t!==void 0}function sk(t){return typeof t=="object"&&!Array.isArray(t)}function If(t){return typeof t=="string"||t instanceof String}function vg(t){return Sf()&&t instanceof Blob}function Sf(){return typeof Blob<"u"}function wg(t,e,n,r){if(r<e)throw Fh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Sr||(Sr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ha(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Sr.NO_ERROR,l=s.getStatus();if(!a||ok(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Sr.ABORT;r(!1,new ha(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ha(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ik(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Tf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?U0():KC();o(l)}else{const l=WC();o(l)}};this.canceled_?n(!1,new ha(!1,null,!0)):this.backoffId_=nk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ha{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function lk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function uk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ck(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dk(t,e,n,r,i,s,o=!0){const a=F0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return ck(u,e),lk(u,n),uk(u,s),hk(u,r),new ak(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pk(...t){const e=fk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sf())return new Blob(t);throw new fe(he.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){if(typeof atob>"u")throw ZC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ec{constructor(e,n){this.data=e,this.contentType=n||null}}function yk(t,e){switch(t){case Bt.RAW:return new Ec(b0(e));case Bt.BASE64:case Bt.BASE64URL:return new Ec($0(t,e));case Bt.DATA_URL:return new Ec(vk(e),wk(e))}throw Tf()}function b0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _k(t){let e;try{e=decodeURIComponent(t)}catch{throw Ds(Bt.DATA_URL,"Malformed data URL.")}return b0(e)}function $0(t,e){switch(t){case Bt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ds(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ds(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gk(e)}catch(i){throw i.message.includes("polyfill")?i:Ds(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class j0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ds(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Ek(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vk(t){const e=new j0(t);return e.base64?$0(Bt.BASE64,e.rest):_k(e.rest)}function wk(t){return new j0(t).contentType}function Ek(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){let r=0,i="";vg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(vg(this.data_)){const r=this.data_,i=mk(r,e,n);return i===null?null:new Ln(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(Sf()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(pk.apply(null,n))}else{const n=e.map(o=>If(o)?yk(Bt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ln(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){let e;try{e=JSON.parse(t)}catch{return null}return sk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ik(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function z0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t,e){return e}class Ye{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Sk}}let da=null;function Rk(t){return!If(t)||t.length<2?t:z0(t)}function H0(){if(da)return da;const t=[];t.push(new Ye("bucket")),t.push(new Ye("generation")),t.push(new Ye("metageneration")),t.push(new Ye("name","fullPath",!0));function e(s,o){return Rk(o)}const n=new Ye("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ye("size");return i.xform=r,t.push(i),t.push(new Ye("timeCreated")),t.push(new Ye("updated")),t.push(new Ye("md5Hash",null,!0)),t.push(new Ye("cacheControl",null,!0)),t.push(new Ye("contentDisposition",null,!0)),t.push(new Ye("contentEncoding",null,!0)),t.push(new Ye("contentLanguage",null,!0)),t.push(new Ye("contentType",null,!0)),t.push(new Ye("metadata","customMetadata",!0)),da=t,da}function Ak(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ht(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Pk(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Ak(r,t),r}function q0(t,e,n){const r=B0(e);return r===null?null:Pk(t,r,n)}function Ck(t,e,n,r){const i=B0(e);if(i===null||!If(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=Rf(d,n,r),y=F0({alt:"media",token:u});return g+y})[0]}function kk(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class W0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){if(!t)throw Tf()}function Nk(t,e){function n(r,i){const s=q0(t,i,e);return K0(s!==null),s}return n}function Dk(t,e){function n(r,i){const s=q0(t,i,e);return K0(s!==null),Ck(s,i,t.host,t._protocol)}return n}function G0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=HC():i=zC():n.getStatus()===402?i=BC(t.bucket):n.getStatus()===403?i=qC(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function xk(t){const e=G0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=jC(t.path)),s.serverResponse=i.serverResponse,s}return n}function Ok(t,e,n){const r=e.fullServerUrl(),i=Rf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new W0(i,s,Dk(t,n),o);return a.errorHandler=xk(e),a}function Lk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Vk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Lk(null,e)),r}function Mk(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let p="";for(let v=0;v<2;v++)p=p+Math.random().toString().slice(2);return p}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Vk(e,r,i),c=kk(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",g=Ln.getBlob(h,r,d);if(g===null)throw YC();const y={name:u.fullPath},_=Rf(s,t.host,t._protocol),w="POST",m=t.maxUploadRetryTime,f=new W0(_,w,Nk(t,n),m);return f.urlParams=y,f.headers=o,f.body=g.uploadData(),f.errorHandler=G0(e),f}class Uk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Sr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Sr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ls("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Fk extends Uk{initXhr(){this.xhr_.responseType="text"}}function Q0(){return new Fk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lr(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z0(this._location.path)}get storage(){return this._service}get parent(){const e=Tk(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new Lr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ek(e)}}function bk(t,e,n){t._throwIfRoot("uploadBytes");const r=Mk(t.storage,t._location,H0(),new Ln(e,!0),n);return t.storage.makeRequestWithTokens(r,Q0).then(i=>({metadata:i,ref:t}))}function $k(t){t._throwIfRoot("getDownloadURL");const e=Ok(t.storage,t._location,H0());return t.storage.makeRequestWithTokens(e,Q0).then(n=>{if(n===null)throw JC();return n})}function jk(t,e){const n=Ik(t._location.path,e),r=new ht(t._location.bucket,n);return new Lr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){return/^[A-Za-z]+:\/\//.test(t)}function zk(t,e){return new Lr(t,e)}function X0(t,e){if(t instanceof Af){const n=t;if(n._bucket==null)throw XC();const r=new Lr(n,n._bucket);return e!=null?X0(r,e):r}else return e!==void 0?jk(t,e):t}function Hk(t,e){if(e&&Bk(e)){if(t instanceof Af)return zk(t,e);throw Fh("To use ref(service, url), the first argument must be a Storage instance.")}else return X0(t,e)}function Eg(t,e){const n=e==null?void 0:e[M0];return n==null?null:ht.makeFromBucketSpec(n,t)}function qk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Zv(i,t.app.options.projectId))}class Af{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=V0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bC,this._maxUploadRetryTime=$C,this._requests=new Set,i!=null?this._bucket=ht.makeFromBucketSpec(i,this._host):this._bucket=Eg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=Eg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new tk(U0());{const o=dk(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Tg="@firebase/storage",Ig="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="storage";function Wk(t,e,n){return t=$e(t),bk(t,e,n)}function Kk(t){return t=$e(t),$k(t)}function J0(t,e){return t=$e(t),Hk(t,e)}function Gk(t=cf(),e){t=$e(t);const r=nu(t,Y0).getImmediate({identifier:e}),i=Xv("storage");return i&&Qk(r,...i),r}function Qk(t,e,n,r={}){qk(t,e,n,r)}function Xk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Af(n,r,i,e,jr)}function Yk(){xr(new Zn(Y0,Xk,"PUBLIC").setMultipleInstances(!0)),Kt(Tg,Ig,""),Kt(Tg,Ig,"esm2017")}Yk();var Jk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Pf=Pf||{},F=Jk||self;function au(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Zk(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++eN)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),eN=0;function tN(t,e,n){return t.call.apply(t.bind,arguments)}function nN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=tN:Ke=nN,Ke.apply(null,arguments)}function fa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var rN=0;ar.prototype.s=!1;ar.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rN!=0)&&Zk(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Z0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Sg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(au(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var iN=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};F.addEventListener("test",n,e),F.removeEventListener("test",n,e)}catch{}return t}();function io(t){return/^[\s\xa0]*$/.test(t)}function uu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return uu().indexOf(t)!=-1}function kf(t){return kf[" "](t),t}kf[" "]=function(){};function sN(t,e){var n=JN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oN=jt("Opera"),Ni=jt("Trident")||jt("MSIE"),ew=jt("Edge"),bh=ew||Ni,tw=jt("Gecko")&&!(uu().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),aN=uu().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function nw(){var t=F.document;return t?t.documentMode:void 0}var $h;e:{var Ic="",Sc=function(){var t=uu();if(tw)return/rv:([^\);]+)(\)|;)/.exec(t);if(ew)return/Edge\/([\d\.]+)/.exec(t);if(Ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aN)return/WebKit\/(\S+)/.exec(t);if(oN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sc&&(Ic=Sc?Sc[1]:""),Ni){var Rc=nw();if(Rc!=null&&Rc>parseFloat(Ic)){$h=String(Rc);break e}}$h=Ic}var jh;if(F.document&&Ni){var Rg=nw();jh=Rg||parseInt($h,10)||void 0}else jh=void 0;var lN=jh;function so(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tw){e:{try{kf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&so.$.h.call(this)}}ke(so,Ge);var uN={2:"touch",3:"pen",4:"mouse"};so.prototype.h=function(){so.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cu="closure_listenable_"+(1e6*Math.random()|0),cN=0;function hN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++cN,this.fa=this.ia=!1}function hu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Nf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function rw(t){const e={};for(const n in t)e[n]=t[n];return e}const Ag="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ag.length;s++)n=Ag[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function du(t){this.src=t,this.g={},this.h=0}du.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Z0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(hu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Df="closure_lm_"+(1e6*Math.random()|0),Ac={};function sw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)sw(t,e[s],n,r,i);return null}return n=lw(n),t&&t[cu]?t.O(e,n,lu(r)?!!r.capture:!!r,i):fN(t,e,n,!1,r,i)}function fN(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lu(i)?!!i.capture:!!i,a=Of(t);if(a||(t[Df]=a=new du(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(aw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pN(){function t(n){return e.call(t.src,t.listener,n)}const e=mN;return t}function ow(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ow(t,e[s],n,r,i);else r=lu(r)?!!r.capture:!!r,n=lw(n),t&&t[cu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zh(s,n,r,i),-1<n&&(hu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Of(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zh(e,n,r,i)),(n=-1<t?e[t]:null)&&xf(n))}function xf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[cu])Bh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(aw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Of(e))?(Bh(n,t),n.h==0&&(n.src=null,e[Df]=null)):hu(t)}}}function aw(t){return t in Ac?Ac[t]:Ac[t]="on"+t}function mN(t,e){if(t.fa)t=!0;else{e=new so(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xf(t),t=n.call(r,e)}return t}function Of(t){return t=t[Df],t instanceof du?t:null}var Pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function lw(t){return typeof t=="function"?t:(t[Pc]||(t[Pc]=function(e){return t.handleEvent(e)}),t[Pc])}function Ce(){ar.call(this),this.i=new du(this),this.S=this,this.J=null}ke(Ce,ar);Ce.prototype[cu]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){ow(this,t,e,n,r)};function Me(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var i=e;e=new Ge(r,t),iw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pa(o,r,!0,e)&&i}if(o=e.g=t,i=pa(o,r,!0,e)&&i,i=pa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pa(o,r,!1,e)&&i}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hu(n[r]);delete t.g[e],t.h--}}this.J=null};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lf=F.JSON.stringify;class gN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function yN(){var t=Vf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _N{constructor(){this.h=this.g=null}add(e,n){const r=uw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uw=new gN(()=>new vN,t=>t.reset());class vN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function EN(t){F.setTimeout(()=>{throw t},0)}let oo,ao=!1,Vf=new _N,cw=()=>{const t=F.Promise.resolve(void 0);oo=()=>{t.then(TN)}};var TN=()=>{for(var t;t=yN();){try{t.h.call(t.g)}catch(n){EN(n)}var e=uw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ao=!1};function fu(t,e){Ce.call(this),this.h=t||1,this.g=e||F,this.j=Ke(this.qb,this),this.l=Date.now()}ke(fu,Ce);C=fu.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(Mf(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){fu.$.N.call(this),Mf(this),delete this.g};function Uf(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function hw(t){t.g=Uf(()=>{t.g=null,t.i&&(t.i=!1,hw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IN extends ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hw(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lo(t){ar.call(this),this.h=t,this.g={}}ke(lo,ar);var Pg=[];function dw(t,e,n,r){Array.isArray(n)||(n&&(Pg[0]=n.toString()),n=Pg);for(var i=0;i<n.length;i++){var s=sw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fw(t){Nf(t.g,function(e,n){this.g.hasOwnProperty(n)&&xf(e)},t),t.g={}}lo.prototype.N=function(){lo.$.N.call(this),fw(this)};lo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pu(){this.g=!0}pu.prototype.Ea=function(){this.g=!1};function SN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ui(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PN(t,n)+(r?" "+r:"")})}function AN(t,e){t.info(function(){return"TIMEOUT: "+e})}pu.prototype.info=function(){};function PN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lf(n)}catch{return e}}var Br={},Cg=null;function mu(){return Cg=Cg||new Ce}Br.Ta="serverreachability";function pw(t){Ge.call(this,Br.Ta,t)}ke(pw,Ge);function uo(t){const e=mu();Me(e,new pw(e))}Br.STAT_EVENT="statevent";function mw(t,e){Ge.call(this,Br.STAT_EVENT,t),this.stat=e}ke(mw,Ge);function Ze(t){const e=mu();Me(e,new mw(e,t))}Br.Ua="timingevent";function gw(t,e){Ge.call(this,Br.Ua,t),this.size=e}ke(gw,Ge);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var gu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ff(){}Ff.prototype.h=null;function kg(t){return t.h||(t.h=t.i())}function _w(){}var Do={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bf(){Ge.call(this,"d")}ke(bf,Ge);function $f(){Ge.call(this,"c")}ke($f,Ge);var Hh;function yu(){}ke(yu,Ff);yu.prototype.g=function(){return new XMLHttpRequest};yu.prototype.i=function(){return{}};Hh=new yu;function xo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new lo(this),this.P=CN,t=bh?125:void 0,this.V=new fu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vw}function vw(){this.i=null,this.g="",this.h=!1}var CN=45e3,ww={},qh={};C=xo.prototype;C.setTimeout=function(t){this.P=t};function Wh(t,e,n){t.L=1,t.A=vu(_n(e)),t.u=n,t.S=!0,Ew(t,null)}function Ew(t,e){t.G=Date.now(),Oo(t),t.B=_n(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),kw(n.i,"t",r),t.o=0,n=t.l.J,t.h=new vw,t.g=Xw(t.l,n?e:null,!t.u),0<t.O&&(t.M=new IN(Ke(t.Pa,t,t.g),t.O)),dw(t.U,t.g,"readystatechange",t.nb),e=t.I?rw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),uo(),SN(t.j,t.v,t.B,t.m,t.W,t.u)}C.nb=function(t){t=t.target;const e=this.M;e&&zt(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)e:{const c=zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||bh||this.g&&(this.h.h||this.g.ja()||Og(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?uo(3):uo(2)),_u(this);var n=this.g.da();this.ca=n;t:if(Tw(this)){var r=Og(this.g);t="";var i=r.length,s=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),xs(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!io(a)){var u=a;break t}}u=null}if(n=u)ui(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kh(this,n);else{this.i=!1,this.s=3,Ze(12),_r(this),xs(this);break e}}this.S?(Iw(this,c,o),bh&&this.i&&c==3&&(dw(this.U,this.V,"tick",this.mb),this.V.start())):(ui(this.j,this.m,o,null),Kh(this,o)),c==4&&_r(this),this.i&&!this.J&&(c==4?Ww(this.l,this):(this.i=!1,Oo(this)))}else QN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),_r(this),xs(this)}}}catch{}finally{}};function Tw(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Iw(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=kN(t,n),i==qh){e==4&&(t.s=4,Ze(14),r=!1),ui(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ww){t.s=4,Ze(15),ui(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ui(t.j,t.m,i,null),Kh(t,i);Tw(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wf(e),e.M=!0,Ze(11))):(ui(t.j,t.m,n,"[Invalid Chunked Response]"),_r(t),xs(t))}C.mb=function(){if(this.g){var t=zt(this.g),e=this.g.ja();this.o<e.length&&(_u(this),Iw(this,t,e),this.i&&t!=4&&Oo(this))}};function kN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?qh:(n=Number(e.substring(n,r)),isNaN(n)?ww:(r+=1,r+n>e.length?qh:(e=e.slice(r,r+n),t.o=r+n,e)))}C.cancel=function(){this.J=!0,_r(this)};function Oo(t){t.Y=Date.now()+t.P,Sw(t,t.P)}function Sw(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=No(Ke(t.lb,t),e)}function _u(t){t.C&&(F.clearTimeout(t.C),t.C=null)}C.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(AN(this.j,this.B),this.L!=2&&(uo(),Ze(17)),_r(this),this.s=2,xs(this)):Sw(this,this.Y-t)};function xs(t){t.l.H==0||t.J||Ww(t.l,t)}function _r(t){_u(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Mf(t.V),fw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Kh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Gh(n.i,t))){if(!t.K&&Gh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Rl(n),Tu(n);else break e;qf(n),Ze(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=No(Ke(n.ib,n),6e3));if(1>=xw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vr(n,11)}else if((t.K||n.g==t)&&Rl(n),!io(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jf(s,s.h),s.h=null))}if(r.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ne(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Qw(r,r.J?r.pa:null,r.Y),o.K){Ow(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(_u(a),Oo(a)),r.g=o}else Hw(r);0<n.j.length&&Iu(n)}else u[0]!="stop"&&u[0]!="close"||vr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vr(n,7):Hf(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}uo(4)}catch{}}function NN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(au(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function DN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(au(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Rw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(au(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=DN(t),r=NN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Aw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Rr){this.h=t.h,Il(this,t.j),this.s=t.s,this.g=t.g,Sl(this,t.m),this.l=t.l;var e=t.i,n=new co;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ng(this,n),this.o=t.o}else t&&(e=String(t).match(Aw))?(this.h=!1,Il(this,e[1]||"",!0),this.s=gs(e[2]||""),this.g=gs(e[3]||"",!0),Sl(this,e[4]),this.l=gs(e[5]||"",!0),Ng(this,e[6]||"",!0),this.o=gs(e[7]||"")):(this.h=!1,this.i=new co(null,this.h))}Rr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ys(e,Dg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ys(e,Dg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ys(n,n.charAt(0)=="/"?VN:LN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ys(n,UN)),t.join("")};function _n(t){return new Rr(t)}function Il(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Sl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ng(t,e,n){e instanceof co?(t.i=e,FN(t.i,t.h)):(n||(e=ys(e,MN)),t.i=new co(e,t.h))}function ne(t,e,n){t.i.set(e,n)}function vu(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ON),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ON(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Dg=/[#\/\?@]/g,LN=/[#\?:]/g,VN=/[#\?]/g,MN=/[#\?@]/g,UN=/#/g;function co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Map,t.h=0,t.i&&xN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=co.prototype;C.add=function(t,e){lr(this),this.i=null,t=Hi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pw(t,e){lr(t),e=Hi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cw(t,e){return lr(t),e=Hi(t,e),t.g.has(e)}C.forEach=function(t,e){lr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};C.ta=function(){lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};C.Z=function(t){lr(this);let e=[];if(typeof t=="string")Cw(this,t)&&(e=e.concat(this.g.get(Hi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return lr(this),this.i=null,t=Hi(this,t),Cw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function kw(t,e,n){Pw(t,e),0<n.length&&(t.i=null,t.g.set(Hi(t,e),Cf(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Hi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function FN(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Pw(this,r),kw(this,i,n))},t)),t.j=e}var bN=class{constructor(t,e){this.g=t,this.map=e}};function Nw(t){this.l=t||$N,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $N=10;function Dw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xw(t){return t.h?1:t.g?t.g.size:0}function Gh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jf(t,e){t.g?t.g.add(e):t.h=e}function Ow(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nw.prototype.cancel=function(){if(this.i=Lw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cf(t.i)}var jN=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function BN(){this.g=new jN}function zN(t,e,n){const r=n||"";try{Rw(t,function(i,s){let o=i;lu(i)&&(o=Lf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function HN(t,e){const n=new pu;if(F.Image){const r=new Image;r.onload=fa(ma,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fa(ma,n,r,"TestLoadImage: error",!1,e),r.onabort=fa(ma,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fa(ma,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ma(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lo(t){this.l=t.ec||null,this.j=t.ob||!1}ke(Lo,Ff);Lo.prototype.g=function(){return new wu(this.l,this.j)};Lo.prototype.i=function(t){return function(){return t}}({});function wu(t,e){Ce.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(wu,Ce);var Bf=0;C=wu.prototype;C.open=function(t,e){if(this.readyState!=Bf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ho(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=Bf};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Vw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vo(this):ho(this),this.readyState==3&&Vw(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,Vo(this))};C.Ya=function(t){this.g&&(this.response=t,Vo(this))};C.ka=function(){this.g&&Vo(this)};function Vo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ho(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ho(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qN=F.JSON.parse;function de(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Mw,this.L=this.M=!1}ke(de,Ce);var Mw="",WN=/^https?$/i,KN=["POST","PUT"];C=de.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hh.g(),this.C=this.u?kg(this.u):kg(Hh),this.g.onreadystatechange=Ke(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){xg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=Z0(KN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bw(this),0<this.B&&((this.L=GN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.ua,this)):this.A=Uf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){xg(this,s)}};function GN(t){return Ni&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof Pf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function xg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Uw(t),Eu(t)}function Uw(t){t.F||(t.F=!0,Me(t,"complete"),Me(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Eu(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eu(this,!0)),de.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?Fw(this):this.kb())};C.kb=function(){Fw(this)};function Fw(t){if(t.h&&typeof Pf<"u"&&(!t.C[1]||zt(t)!=4||t.da()!=2)){if(t.v&&zt(t)==4)Uf(t.La,0,t);else if(Me(t,"readystatechange"),zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Aw)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!WN.test(i?i.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var s=2<zt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Uw(t)}}finally{Eu(t)}}}}function Eu(t,e){if(t.g){bw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function bw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}C.isActive=function(){return!!this.g};function zt(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qN(e)}};function Og(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Mw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function QN(t){const e={};t=(t.g&&2<=zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(io(t[r]))continue;var n=wN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}dN(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $w(t){let e="";return Nf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$w(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ne(t,e,n))}function us(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jw(t){this.Ga=0,this.j=[],this.l=new pu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=us("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=us("baseRetryDelayMs",5e3,t),this.hb=us("retryDelaySeedMs",1e4,t),this.eb=us("forwardChannelMaxRetries",2,t),this.xa=us("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Nw(t&&t.concurrentRequestLimit),this.Ja=new BN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=jw.prototype;C.ra=8;C.H=1;function Hf(t){if(Bw(t),t.H==3){var e=t.W++,n=_n(t.I);if(ne(n,"SID",t.K),ne(n,"RID",e),ne(n,"TYPE","terminate"),Mo(t,n),e=new xo(t,t.l,e),e.L=2,e.A=vu(_n(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.A,n=!0),n||(e.g=Xw(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Oo(e)}Gw(t)}function Tu(t){t.g&&(Wf(t),t.g.cancel(),t.g=null)}function Bw(t){Tu(t),t.u&&(F.clearTimeout(t.u),t.u=null),Rl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Iu(t){if(!Dw(t.i)&&!t.m){t.m=!0;var e=t.Na;oo||cw(),ao||(oo(),ao=!0),Vf.add(e,t),t.C=0}}function XN(t,e){return xw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=No(Ke(t.Na,t,e),Kw(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=rw(s),iw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zw(this,i,e),n=_n(this.I),ne(n,"RID",t),ne(n,"CVER",22),this.F&&ne(n,"X-HTTP-Session-Id",this.F),Mo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($w(s)))+"&"+e:this.o&&zf(n,this.o,s)),jf(this.i,i),this.bb&&ne(n,"TYPE","init"),this.P?(ne(n,"$req",e),ne(n,"SID","null"),i.aa=!0,Wh(i,n,null)):Wh(i,n,e),this.H=2}}else this.H==3&&(t?Lg(this,t):this.j.length==0||Dw(this.i)||Lg(this))};function Lg(t,e){var n;e?n=e.m:n=t.W++;const r=_n(t.I);ne(r,"SID",t.K),ne(r,"RID",n),ne(r,"AID",t.V),Mo(t,r),t.o&&t.s&&zf(r,t.o,t.s),n=new xo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=zw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jf(t.i,n),Wh(n,r,e)}function Mo(t,e){t.na&&Nf(t.na,function(n,r){ne(e,r,n)}),t.h&&Rw({},function(n,r){ne(e,r,n)})}function zw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ke(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{zN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Hw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oo||cw(),ao||(oo(),ao=!0),Vf.add(e,t),t.A=0}}function qf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=No(Ke(t.Ma,t),Kw(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,qw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=No(Ke(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ze(10),Tu(this),qw(this))};function Wf(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function qw(t){t.g=new xo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);ne(e,"RID","rpc"),ne(e,"SID",t.K),ne(e,"AID",t.V),ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ne(e,"TO",t.qa),ne(e,"TYPE","xmlhttp"),Mo(t,e),t.o&&t.s&&zf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=vu(_n(e)),n.u=null,n.S=!0,Ew(n,t)}C.ib=function(){this.v!=null&&(this.v=null,Tu(this),qf(this),Ze(19))};function Rl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function Ww(t,e){var n=null;if(t.g==e){Rl(t),Wf(t),t.g=null;var r=2}else if(Gh(t.i,e))n=e.F,Ow(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=mu(),Me(r,new gw(r,n)),Iu(t)}else Hw(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&XN(t,e)||r==2&&qf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function Kw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ke(t.pb,t);n||(n=new Rr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Il(n,"https"),vu(n)),HN(n.toString(),r)}else Ze(2);t.H=0,t.h&&t.h.za(e),Gw(t),Bw(t)}C.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ze(2)):(this.l.info("Failed to ping google.com"),Ze(1))};function Gw(t){if(t.H=0,t.ma=[],t.h){const e=Lw(t.i);(e.length!=0||t.j.length!=0)&&(Sg(t.ma,e),Sg(t.ma,t.j),t.i.i.length=0,Cf(t.j),t.j.length=0),t.h.ya()}}function Qw(t,e,n){var r=n instanceof Rr?_n(n):new Rr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Sl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Rr(null);r&&Il(s,r),e&&(s.g=e),i&&Sl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ne(r,n,e),ne(r,"VER",t.ra),Mo(t,r),r}function Xw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new de(new Lo({ob:n})):new de(t.va),e.Oa(t.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yw(){}C=Yw.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function Al(){if(Ni&&!(10<=Number(lN)))throw Error("Environmental error: no available transport.")}Al.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Ce.call(this),this.g=new jw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!io(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!io(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qi(this)}ke(pt,Ce);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Qw(t,null,t.Y),Iu(t)};pt.prototype.close=function(){Hf(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lf(t),t=n);e.j.push(new bN(e.fb++,t)),e.H==3&&Iu(e)};pt.prototype.N=function(){this.g.h=null,delete this.j,Hf(this.g),delete this.g,pt.$.N.call(this)};function Jw(t){bf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(Jw,bf);function Zw(){$f.call(this),this.status=1}ke(Zw,$f);function qi(t){this.g=t}ke(qi,Yw);qi.prototype.Ba=function(){Me(this.g,"a")};qi.prototype.Aa=function(t){Me(this.g,new Jw(t))};qi.prototype.za=function(t){Me(this.g,new Zw)};qi.prototype.ya=function(){Me(this.g,"b")};function YN(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ke(Mt,YN);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Cc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Cc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Cc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Cc(this,r),i=0;break}}this.h=i,this.i+=e};Mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Y(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var JN={};function Kf(t){return-128<=t&&128>t?sN(t,function(e){return new Y([e|0],0>e?-1:0)}):new Y([t|0],0>t?-1:0)}function Ht(t){if(isNaN(t)||!isFinite(t))return vi;if(0>t)return Oe(Ht(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Qh;return new Y(e,0)}function eE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Oe(eE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ht(Math.pow(e,8)),r=vi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ht(Math.pow(e,s)),r=r.R(s).add(Ht(o))):(r=r.R(n),r=r.add(Ht(o)))}return r}var Qh=4294967296,vi=Kf(0),Xh=Kf(1),Vg=Kf(16777216);C=Y.prototype;C.ea=function(){if(vt(this))return-Oe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Qh+r)*e,e*=Qh}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(vt(this))return"-"+Oe(this).toString(t);for(var e=Ht(Math.pow(t,6)),n=this,r="";;){var i=Cl(n,e).g;n=Pl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}C.X=function(t){return t=Pl(this,t),vt(t)?-1:cn(t)?0:1};function Oe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Y(n,~t.h).add(Xh)}C.abs=function(){return vt(this)?Oe(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Y(n,n[n.length-1]&-2147483648?-1:0)};function Pl(t,e){return t.add(Oe(e))}C.R=function(t){if(cn(this)||cn(t))return vi;if(vt(this))return vt(t)?Oe(this).R(Oe(t)):Oe(Oe(this).R(t));if(vt(t))return Oe(this.R(Oe(t)));if(0>this.X(Vg)&&0>t.X(Vg))return Ht(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ga(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ga(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ga(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ga(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Y(n,0)};function ga(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function cs(t,e){this.g=t,this.h=e}function Cl(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new cs(vi,vi);if(vt(t))return e=Cl(Oe(t),e),new cs(Oe(e.g),Oe(e.h));if(vt(e))return e=Cl(t,Oe(e)),new cs(Oe(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xh,r=e;0>=r.X(t);)n=Mg(n),r=Mg(r);var i=Kr(n,1),s=Kr(r,1);for(r=Kr(r,2),n=Kr(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Kr(r,1),n=Kr(n,1)}return e=Pl(t,i.R(e)),new cs(i,e)}for(i=vi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ht(n),o=s.R(e);vt(o)||0<o.X(t);)n-=r,s=Ht(n),o=s.R(e);cn(s)&&(s=Xh),i=i.add(s),t=Pl(t,o)}return new cs(i,t)}C.gb=function(t){return Cl(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Y(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Y(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Y(n,this.h^t.h)};function Mg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Y(n,t.h)}function Kr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Y(i,t.h)}Al.prototype.createWebChannel=Al.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;gu.NO_ERROR=0;gu.TIMEOUT=8;gu.HTTP_ERROR=6;yw.COMPLETE="complete";_w.EventType=Do;Do.OPEN="a";Do.CLOSE="b";Do.ERROR="c";Do.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=Ht;Y.fromString=eE;var ZN=function(){return new Al},eD=function(){return mu()},kc=gu,tD=yw,nD=Br,Ug={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rD=Lo,ya=_w,iD=de,sD=Mt,wi=Y;const Fg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new lf("@firebase/firestore");function hs(){return Vr.logLevel}function O(t,...e){if(Vr.logLevel<=W.DEBUG){const n=e.map(Gf);Vr.debug(`Firestore (${Wi}): ${t}`,...n)}}function vn(t,...e){if(Vr.logLevel<=W.ERROR){const n=e.map(Gf);Vr.error(`Firestore (${Wi}): ${t}`,...n)}}function Di(t,...e){if(Vr.logLevel<=W.WARN){const n=e.map(Gf);Vr.warn(`Firestore (${Wi}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function ee(t,e){t||U()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class aD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lD{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new tE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new He(e)}}class uD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.R=n.token,new hD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new Ie(0,0))}static max(){return new b(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends fo{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const pD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends fo{construct(e,n,r){return new Le(e,n,r)}static isValidIdentifier(e){return pD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(re.fromString(e))}static fromName(e){return new V(re.fromString(e).popFirst(5))}static empty(){return new V(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new re(e.slice()))}}function mD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new er(i,V.empty(),e)}function gD(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(b.min(),V.empty(),-1)}static max(){return new er(b.max(),V.empty(),-1)}}function yD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==_D)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qf.oe=-1;function Su(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function ED(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??xe.EMPTY,this.right=s??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $g(this.data.getIterator())}getIteratorFrom(e){return new $g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class $g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ue(Le.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iE("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(ee(!!t),typeof t=="string"){let e=0;const n=TD.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yf(t){const e=t.mapValue.fields.__previous_value__;return Xf(e)?Yf(e):e}function po(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xf(t)?4:SD(t)?9007199254740991:10:U()}function Jt(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return po(t).isEqual(po(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=tr(i.timestampValue),a=tr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ye(i.doubleValue),a=ye(s.doubleValue);return o===a?kl(o)===kl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bg(o)!==bg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jt(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function go(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Oi(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ye(s.integerValue||s.doubleValue),l=ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return jg(t.timestampValue,e.timestampValue);case 4:return jg(po(t),po(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mr(s),l=Mr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(ye(s.latitude),ye(o.latitude));return a!==0?a:Q(ye(s.longitude),ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Oi(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===va.mapValue&&o===va.mapValue)return 0;if(s===va.mapValue)return 1;if(o===va.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const g=Oi(a[l[h]],u[c[h]]);if(g!==0)return g}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function jg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=tr(t),r=tr(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Li(t){return Yh(t)}function Yh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Yh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Yh(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function Bg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jh(t){return!!t&&"integerValue"in t}function Jf(t){return!!t&&"arrayValue"in t}function zg(t){return!!t&&"nullValue"in t}function Hg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ba(t){return!!t&&"mapValue"in t}function Os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(n)}setAll(e){let n=Le.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Os(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Os(this.value))}}function sE(t){const e=[];return Ki(t.fields,(n,r)=>{const i=new Le([n]);if(ba(r)){const s=sE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new We(e,0,b.min(),b.min(),b.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new We(e,1,n,b.min(),r,i,0)}static newNoDocument(e,n){return new We(e,2,n,b.min(),b.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,b.min(),b.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function qg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Oi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function RD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{}class ve extends oE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PD(e,n,r):n==="array-contains"?new ND(e,r):n==="in"?new DD(e,r):n==="not-in"?new xD(e,r):n==="array-contains-any"?new OD(e,r):new ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CD(e,r):new kD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Oi(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends oE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ut(e,n)}matches(e){return aE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aE(t){return t.op==="and"}function lE(t){return AD(t)&&aE(t)}function AD(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Zh(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+Li(t.value);if(lE(t))return t.filters.map(e=>Zh(e)).join(",");{const e=t.filters.map(n=>Zh(n)).join(",");return`${t.op}(${e})`}}function uE(t,e){return t instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.field.isEqual(i.field)&&Jt(r.value,i.value)}(t,e):t instanceof Ut?function(r,i){return i instanceof Ut&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&uE(o,i.filters[a]),!0):!1}(t,e):void U()}function cE(t){return t instanceof ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Li(n.value)}`}(t):t instanceof Ut?function(n){return n.op.toString()+" {"+n.getFilters().map(cE).join(" ,")+"}"}(t):"Filter"}class PD extends ve{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class CD extends ve{constructor(e,n){super(e,"in",n),this.keys=hE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kD extends ve{constructor(e,n){super(e,"not-in",n),this.keys=hE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class ND extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jf(n)&&go(n.arrayValue,this.value)}}class DD extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class xD extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!go(this.value.arrayValue,n)}}class OD extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>go(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LD(t,e,n,r,i,s,o)}function Zf(t){const e=$(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Li(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Li(r)).join(",")),e.ue=n}return e.ue}function ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wg(t.startAt,e.startAt)&&Wg(t.endAt,e.endAt)}function ed(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VD(t,e,n,r,i,s,o,a){return new bo(t,e,n,r,i,s,o,a)}function tp(t){return new bo(t)}function Gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dE(t){return t.collectionGroup!==null}function Ls(t){const e=$(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ue(Le.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Dl(s,r))}),n.has(Le.keyField().canonicalString())||e.ce.push(new Dl(Le.keyField(),r))}return e.ce}function Qt(t){const e=$(t);return e.le||(e.le=MD(e,Ls(t))),e.le}function MD(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Dl(i.field,s)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function td(t,e){const n=t.filters.concat([e]);return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nd(t,e,n){return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ru(t,e){return ep(Qt(t),Qt(e))&&t.limitType===e.limitType}function fE(t){return`${Zf(Qt(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cE(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Li(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Li(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=qg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,a,l){const u=qg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ls(r),i))}(t,e)}function UD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pE(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=FD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FD(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Oi(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=new ue(V.comparator);function wn(){return bD}const mE=new ue(V.comparator);function _s(...t){let e=mE;for(const n of t)e=e.insert(n.key,n);return e}function gE(t){let e=mE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return Vs()}function yE(){return Vs()}function Vs(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const $D=new ue(V.comparator),jD=new Ue(V.comparator);function q(...t){let e=jD;for(const n of t)e=e.add(n);return e}const BD=new Ue(Q);function zD(){return BD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function vE(t){return{integerValue:""+t}}function HD(t,e){return ED(e)?vE(e):_E(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this._=void 0}}function qD(t,e,n){return t instanceof xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xf(s)&&(s=Yf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof yo?EE(t,e):t instanceof _o?TE(t,e):function(i,s){const o=wE(i,s),a=Qg(o)+Qg(i.Pe);return Jh(o)&&Jh(i.Pe)?vE(a):_E(i.serializer,a)}(t,e)}function WD(t,e,n){return t instanceof yo?EE(t,e):t instanceof _o?TE(t,e):n}function wE(t,e){return t instanceof Ol?function(r){return Jh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xl extends Pu{}class yo extends Pu{constructor(e){super(),this.elements=e}}function EE(t,e){const n=IE(e);for(const r of t.elements)n.some(i=>Jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends Pu{constructor(e){super(),this.elements=e}}function TE(t,e){let n=IE(e);for(const r of t.elements)n=n.filter(i=>!Jt(i,r));return{arrayValue:{values:n}}}class Ol extends Pu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Qg(t){return ye(t.integerValue||t.doubleValue)}function IE(t){return Jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yo&&i instanceof yo||r instanceof _o&&i instanceof _o?xi(r.elements,i.elements,Jt):r instanceof Ol&&i instanceof Ol?Jt(r.Pe,i.Pe):r instanceof xl&&i instanceof xl}(t.transform,e.transform)}class GD{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cu{}function SE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new np(t.key,Lt.none()):new $o(t.key,t.data,Lt.none());{const n=t.data,r=wt.empty();let i=new Ue(Le.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Nt(i.toArray()),Lt.none())}}function QD(t,e,n){t instanceof $o?function(i,s,o){const a=i.value.clone(),l=Yg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!$a(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Yg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(RE(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ms(t,e,n,r){return t instanceof $o?function(s,o,a,l){if(!$a(s.precondition,o))return a;const u=s.value.clone(),c=Jg(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,a,l){if(!$a(s.precondition,o))return a;const u=Jg(s.fieldTransforms,l,o),c=o.data;return c.setAll(RE(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return $a(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wE(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function Xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>KD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $o extends Cu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Cu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yg(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WD(o,a,n[i]))}return r}function Jg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qD(s,o,e))}return r}class np extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YD extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ms(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ms(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>Xg(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>Xg(n,r))}}class rp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=function(){return $D}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,K;function tx(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function AE(t){if(t===void 0)return vn("GRPC error has no .code"),E.UNKNOWN;switch(t){case ge.OK:return E.OK;case ge.CANCELLED:return E.CANCELLED;case ge.UNKNOWN:return E.UNKNOWN;case ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ge.INTERNAL:return E.INTERNAL;case ge.UNAVAILABLE:return E.UNAVAILABLE;case ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ge.NOT_FOUND:return E.NOT_FOUND;case ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ge.ABORTED:return E.ABORTED;case ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ge.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(K=ge||(ge={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new wi([4294967295,4294967295],0);function Zg(t){const e=nx().encode(t),n=new sD;return n.update(e),new Uint8Array(n.digest())}function ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new wi([n,r],0),new wi([i,s],0)]}class ip{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vs(`Invalid padding: ${n}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(wi.fromNumber(r)));return i.compare(rx)===1&&(i=new wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ip(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ku(b.min(),i,new ue(Q),wn(),q())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PE{constructor(e,n){this.targetId=e,this.me=n}}class CE{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ty{constructor(){this.fe=0,this.ge=ry(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=q(),n=q(),r=q();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new jo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ix{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=ny(),this.Qe=new ue(Q)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ed(s))if(r===0){const o=new V(s.path);this.Ue(n,o,We.newNoDocument(o,b.min()))}else ee(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Mr(r).toUint8Array()}catch(l){if(l instanceof iE)return Di("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ip(o,i,s)}catch(l){return Di(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ed(a.target)){const l=new V(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,We.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=q();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ku(e,n,this.Qe,this.ke,r);return this.ke=wn(),this.qe=ny(),this.Qe=new ue(Q),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ty,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ue(Q),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ty),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ny(){return new ue(V.comparator)}function ry(){return new ue(V.comparator)}const sx={asc:"ASCENDING",desc:"DESCENDING"},ox={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ax={and:"AND",or:"OR"};class lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rd(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ux(t,e){return Ll(t,e.toTimestamp())}function Xt(t){return ee(!!t),b.fromTimestamp(function(n){const r=tr(n);return new Ie(r.seconds,r.nanos)}(t))}function sp(t,e){return id(t,e).canonicalString()}function id(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NE(t){const e=re.fromString(t);return ee(VE(e)),e}function sd(t,e){return sp(t.databaseId,e.path)}function Nc(t,e){const n=NE(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(xE(n))}function DE(t,e){return sp(t.databaseId,e)}function cx(t){const e=NE(t);return e.length===4?re.emptyPath():xE(e)}function od(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xE(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iy(t,e,n){return{name:sd(t,e),fields:n.value.mapValue.fields}}function hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ee(c===void 0||typeof c=="string"),Xe.fromBase64String(c||"")):(ee(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Xe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:AE(u.code);return new x(c,u.message||"")}(o);n=new CE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nc(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):b.min(),a=new wt({mapValue:{fields:r.document.fields}}),l=We.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ja(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nc(t,r.document),s=r.readTime?Xt(r.readTime):b.min(),o=We.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ja([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nc(t,r.document),s=r.removedTargetIds||[];n=new ja([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ex(i,s),a=r.targetId;n=new PE(a,o)}}return n}function dx(t,e){let n;if(e instanceof $o)n={update:iy(t,e.key,e.value)};else if(e instanceof np)n={delete:sd(t,e.key)};else if(e instanceof zr)n={update:iy(t,e.key,e.data),updateMask:Ex(e.fieldMask)};else{if(!(e instanceof YD))return U();n={verify:sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ux(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function fx(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xt(i.updateTime):Xt(s);return o.isEqual(b.min())&&(o=Xt(s)),new GD(o,i.transformResults||[])}(n,e))):[]}function px(t,e){return{documents:[DE(t,e.path)]}}function mx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DE(t,i);const s=function(u){if(u.length!==0)return LE(Ut.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Qr(d.field),direction:_x(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=rd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function gx(t){let e=cx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=OE(h);return d instanceof Ut&&lE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Dl(Xr(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Su(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new Nl(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,g=h.values||[];return new Nl(g,d)}(n.endAt)),VD(e,i,o,s,a,"F",l,u)}function yx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xr(n.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xr(n.unaryFilter.field);return ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return ve.create(Xr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ut.create(n.compositeFilter.filters.map(r=>OE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function _x(t){return sx[t]}function vx(t){return ox[t]}function wx(t){return ax[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return Le.fromServerFormat(t.fieldPath)}function LE(t){return t instanceof ve?function(n){if(n.op==="=="){if(Hg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(zg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(zg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:vx(n.op),value:n.value}}}(t):t instanceof Ut?function(n){const r=n.getFilters().map(i=>LE(i));return r.length===1?r[0]:{compositeFilter:{op:wx(n.op),filters:r}}}(t):U()}function Ex(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r,i,s=b.min(),o=b.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.ut=e}}function Ix(t){const e=gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.on=new Rx}addToCollectionParentIndex(e,n){return this.on.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(er.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class Rx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Vi(0)}static Nn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ms(r.mutation,i,Nt.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_s();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wn();const o=Vs(),a=function(){return Vs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof zr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ms(c.mutation,u,c.mutation.getFieldMask(),Ie.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Px(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Vs();let i=new ue((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Nt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=yE();c.forEach(d=>{if(!s.has(d)){const g=SE(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(wr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:gE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=_s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,s).next(a=>T.forEach(a,l=>{const u=function(h,d){return new bo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,We.newInvalidDocument(c)))});let a=_s();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ms(c.mutation,u,Nt.empty(),Ie.now()),Au(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return T.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Ix(i.bundledQuery),readTime:Xt(i.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.overlays=new ue(V.comparator),this.lr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=wr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=wr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZD(n,r));let s=this.lr.get(n);s===void 0&&(s=q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.hr=new Ue(Re.Pr),this.Ir=new Ue(Re.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Re(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Re(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new re([])),r=new Re(n,e),i=new Re(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new re([])),r=new Re(n,e),i=new Re(n,e+1);let s=q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Re(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||Q(e.gr,n.gr)}static Tr(e,n){return Q(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ue(Re.Pr)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Re(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),i=new Re(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(Q);return n.forEach(i=>{const s=new Re(i,0),o=new Re(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),T.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Re(new V(s),0);let a=new Ue(Q);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),T.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return T.forEach(n.mutations,i=>{const s=new Re(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Re(n,0),i=this.yr.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.Cr=e,this.docs=function(){return new ue(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yD(gD(c),r)<=0||(i.has(c.key)||Au(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ox(this)}getSize(e){return T.resolve(this.size)}}class Ox extends Ax{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.persistence=e,this.Fr=new Gi(n=>Zf(n),ep),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Mr=0,this.Or=new op,this.targetCount=0,this.Nr=Vi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),T.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.kn(n),T.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.Lr={},this.overlays={},this.Br=new Qf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Lx(this),this.indexManager=new Sx,this.remoteDocumentCache=function(i){return new xx(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Tx(n),this.Kr=new kx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Dx(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new Mx(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return T.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Mx extends vD{constructor(e){super(),this.currentSequenceNumber=e}}class ap{constructor(e){this.persistence=e,this.Gr=new op,this.zr=null}static jr(e){return new ap(e)}get Hr(){if(this.zr)return this.zr;throw U()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),T.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return T.or([()=>T.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return ER()?8:wD(be())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ux;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(hs()<=W.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),T.resolve()):(hs()<=W.DEBUG&&O("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(hs()<=W.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):T.resolve())}zi(e,n){if(Gg(n))return T.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nd(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,nd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Gg(n)||i.isEqual(b.min())?T.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?T.resolve(null):(hs()<=W.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gr(n)),this.Xi(e,o,n,mD(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ue(pE(e));return n.forEach((i,s)=>{Au(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return hs()<=W.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.Gi.getDocumentsMatchingQuery(e,n,er.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ue(Q),this.ns=new Gi(s=>Zf(s),ep),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cx(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function $x(t,e,n,r){return new bx(t,e,n,r)}async function ME(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function jx(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let g=T.resolve();return d.forEach(y=>{g=g.next(()=>c.getEntry(l,y)).next(_=>{const w=u.docVersions.get(y);ee(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UE(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Bx(t,e){const n=$(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(_,w,m){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,g,c)&&a.push(n.qr.updateTargetData(s,g))});let l=wn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zx(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(b.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function zx(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(b.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function Hx(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qx(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function ad(t,e,n){const r=$(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function sy(t,e,n){const r=$(t);let i=b.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=$(l),d=h.ns.get(c);return d!==void 0?T.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,Qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?s:q())).next(a=>(Wx(r,UD(e),a),{documents:a,ls:s})))}function Wx(t,e,n){let r=t.rs.get(e)||b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class oy{constructor(){this.activeTargetIds=zD()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kx{constructor(){this.eo=new oy,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa=null;function Dc(){return wa===null?wa=function(){return 268435456+Math.round(2147483648*Math.random())}():wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class Yx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(n,r,i,s,o){const a=Dc(),l=this.Co(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(u,s,o),this.Fo(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Di("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Mo(n,r,i,s,o,a){return this.Do(n,r,i,s,o)}vo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Co(n,r){const i=Qx[n];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,i){const s=Dc();return new Promise((o,a)=>{const l=new iD;l.setWithCredentials(!0),l.listenOnce(tD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case kc.NO_ERROR:const c=l.getResponseJson();O(ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case kc.TIMEOUT:O(ze,`RPC '${e}' ${s} timed out`),a(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const h=l.getStatus();if(O(ze,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const y=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(g.status);a(new x(y,g.message))}else a(new x(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(ze,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(ze,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}xo(e,n,r){const i=Dc(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZN(),a=eD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new rD({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const y=new Xx({co:w=>{g?O(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(O(ze,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(ze,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),_=(w,m,f)=>{w.listen(m,p=>{try{f(p)}catch(v){setTimeout(()=>{throw v},0)}})};return _(h,ya.EventType.OPEN,()=>{g||(O(ze,`RPC '${e}' stream ${i} transport opened.`),y.Vo())}),_(h,ya.EventType.CLOSE,()=>{g||(g=!0,O(ze,`RPC '${e}' stream ${i} transport closed`),y.fo())}),_(h,ya.EventType.ERROR,w=>{g||(g=!0,Di(ze,`RPC '${e}' stream ${i} transport errored:`,w),y.fo(new x(E.UNAVAILABLE,"The operation could not be completed")))}),_(h,ya.EventType.MESSAGE,w=>{var m;if(!g){const f=w.data[0];ee(!!f);const p=f,v=p.error||((m=p[0])===null||m===void 0?void 0:m.error);if(v){O(ze,`RPC '${e}' stream ${i} received error:`,v);const R=v.status;let P=function(J){const B=ge[J];if(B!==void 0)return AE(B)}(R),k=v.message;P===void 0&&(P=E.INTERNAL,k="Unknown error status: "+R+" with message "+v.message),g=!0,y.fo(new x(P,k)),h.close()}else O(ze,`RPC '${e}' stream ${i} received:`,f),y.po(f)}}),_(a,nD.STAT_EVENT,w=>{w.stat===Ug.PROXY?O(ze,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Ug.NOPROXY&&O(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.mo()},0),y}}function xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new lx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new FE(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===n&&this.a_(r,i)},r=>{e(()=>{const i=new x(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jx extends bE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=hx(this.serializer,e),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?Xt(o.readTime):b.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=od(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=ed(l)?{documents:px(s,l)}:{query:mx(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kE(s,o.resumeToken);const u=rd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Ll(s,o.snapshotVersion.toTimestamp());const u=rd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=yx(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=od(this.serializer),n.removeTarget=e,this.r_(n)}}class Zx extends bE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=fx(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.d_(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=od(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dx(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(e,id(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(E.UNKNOWN,s.toString())})}Mo(e,n,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,id(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(E.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class tO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(vn(n),this.y_=!1):O("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Hr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=$(l);u.M_.add(4),await Bo(u),u.N_.set("Unknown"),u.M_.delete(4),await Du(u)}(this))})}),this.N_=new tO(r,i)}}async function Du(t){if(Hr(t))for(const e of t.x_)await e(!0)}async function Bo(t){for(const e of t.x_)await e(!1)}function $E(t,e){const n=$(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),dp(n)?hp(n):Qi(n).Zo()&&cp(n,e))}function up(t,e){const n=$(t),r=Qi(n);n.F_.delete(e),r.Zo()&&jE(n,e),n.F_.size===0&&(r.Zo()?r.t_():Hr(n)&&n.N_.set("Unknown"))}function cp(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qi(t).h_(e)}function jE(t,e){t.L_.xe(e),Qi(t).P_(e)}function hp(t){t.L_=new ix({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qi(t).start(),t.N_.w_()}function dp(t){return Hr(t)&&!Qi(t).Yo()&&t.F_.size>0}function Hr(t){return $(t).M_.size===0}function BE(t){t.L_=void 0}async function rO(t){t.N_.set("Online")}async function iO(t){t.F_.forEach((e,n)=>{cp(t,e)})}async function sO(t,e){BE(t),dp(t)?(t.N_.D_(e),hp(t)):t.N_.set("Unknown")}async function oO(t,e,n){if(t.N_.set("Online"),e instanceof CE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof ja?t.L_.Ke(e):e instanceof PE?t.L_.He(e):t.L_.We(e),!n.isEqual(b.min()))try{const r=await UE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),jE(s,l);const h=new Fn(c.target,l,u,c.sequenceNumber);cp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!Fo(e))throw e;t.M_.add(1),await Bo(t),t.N_.set("Offline"),n||(n=()=>UE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Du(t)})}function zE(t,e){return e().catch(n=>Vl(t,n,e))}async function xu(t){const e=$(t),n=nr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;aO(e);)try{const i=await Hx(e.localStore,r);if(i===null){e.v_.length===0&&n.t_();break}r=i.batchId,lO(e,i)}catch(i){await Vl(e,i)}HE(e)&&qE(e)}function aO(t){return Hr(t)&&t.v_.length<10}function lO(t,e){t.v_.push(e);const n=nr(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function HE(t){return Hr(t)&&!nr(t).Yo()&&t.v_.length>0}function qE(t){nr(t).start()}async function uO(t){nr(t).R_()}async function cO(t){const e=nr(t);for(const n of t.v_)e.E_(n.mutations)}async function hO(t,e,n){const r=t.v_.shift(),i=rp.from(r,e,n);await zE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xu(t)}async function dO(t,e){e&&nr(t).T_&&await async function(r,i){if(function(o){return tx(o)&&o!==E.ABORTED}(i.code)){const s=r.v_.shift();nr(r).e_(),await zE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xu(r)}}(t,e),HE(t)&&qE(t)}async function ly(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Hr(n);n.M_.add(3),await Bo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Du(n)}async function fO(t,e){const n=$(t);e?(n.M_.delete(2),await Du(n)):e||(n.M_.add(2),await Bo(n),n.N_.set("Unknown"))}function Qi(t){return t.B_||(t.B_=function(n,r,i){const s=$(n);return s.m_(),new Jx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:rO.bind(null,t),Io:iO.bind(null,t),Eo:sO.bind(null,t),l_:oO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),dp(t)?hp(t):t.N_.set("Unknown")):(await t.B_.stop(),BE(t))})),t.B_}function nr(t){return t.k_||(t.k_=function(n,r,i){const s=$(n);return s.m_(),new Zx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:uO.bind(null,t),Eo:dO.bind(null,t),A_:cO.bind(null,t),d_:hO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await xu(t)):(await t.k_.stop(),t.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new fp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Fo(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=_s(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.q_=new ue(V.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):U():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mi(e,n,Ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class mO{constructor(){this.queries=new Gi(e=>fE(e),Ru),this.onlineState="Unknown",this.z_=new Set}}async function WE(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new pO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=pp(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&mp(n)}async function KE(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gO(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&mp(n)}function yO(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function mp(t){t.z_.forEach(e=>{e.next()})}var ld,cy;(cy=ld||(ld={})).J_="default",cy.Cache="cache";class GE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ld.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.key=e}}class XE{constructor(e){this.key=e}}class _O{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=q(),this.mutatedKeys=q(),this.Ia=pE(e),this.Ta=new Ei(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new uy,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Au(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?y!==_&&(r.track({type:3,doc:g}),w=!0):this.Ra(d,g)||(r.track({type:2,doc:g}),w=!0,(l&&this.Ia(g,l)>0||u&&this.Ia(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),w=!0):d&&!g&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((c,h)=>function(g,y){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return _(g)-_(y)}(c.type,h.type)||this.Ia(c.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Mi(this.query,e.Ta,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new uy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=q(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new XE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new QE(r))}),n}pa(e){this.la=e.ls,this.Pa=q();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Mi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class vO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wO{constructor(e){this.key=e,this.wa=!1}}class EO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Gi(a=>fE(a),Ru),this.Da=new Map,this.Ca=new Set,this.va=new ue(V.comparator),this.Fa=new Map,this.Ma=new op,this.xa={},this.Oa=new Map,this.Na=Vi.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function TO(t,e,n=!0){const r=nT(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await YE(r,e,n,!0),i}async function IO(t,e){const n=nT(t);await YE(n,e,!0,!1)}async function YE(t,e,n,r){const i=await qx(t.localStore,Qt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await SO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&$E(t.remoteStore,i),a}async function SO(t,e,n,r,i){t.Ba=(h,d,g)=>async function(_,w,m,f){let p=w.view.da(m);p.Zi&&(p=await sy(_.localStore,w.query,!1).then(({documents:k})=>w.view.da(k,p)));const v=f&&f.targetChanges.get(w.targetId),R=f&&f.targetMismatches.get(w.targetId)!=null,P=w.view.applyChanges(p,_.isPrimaryClient,v,R);return dy(_,w.targetId,P.fa),P.snapshot}(t,h,d,g);const s=await sy(t.localStore,e,!0),o=new _O(e,s.ls),a=o.da(s.documents),l=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dy(t,n,u.fa);const c=new vO(e,n,o);return t.ba.set(e,c),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function RO(t,e,n){const r=$(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Ru(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ad(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&up(r.remoteStore,i.targetId),ud(r,i.targetId)}).catch(Uo)):(ud(r,i.targetId),await ad(r.localStore,i.targetId,!0))}async function AO(t,e){const n=$(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),up(n.remoteStore,r.targetId))}async function PO(t,e,n){const r=LO(t);try{const i=await function(o,a){const l=$(o),u=Ie.now(),c=a.reduce((g,y)=>g.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=wn(),_=q();return l.ss.getEntries(g,c).next(w=>{y=w,y.forEach((m,f)=>{f.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,y)).next(w=>{h=w;const m=[];for(const f of a){const p=XD(f,h.get(f.key).overlayedDocument);p!=null&&m.push(new zr(f.key,p,sE(p.value.mapValue),Lt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(g,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:gE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ue(Q)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await zo(r,i.changes),await xu(r.remoteStore)}catch(i){const s=pp(i,"Failed to persist write");n.reject(s)}}async function JE(t,e){const n=$(t);try{const r=await Bx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ee(o.wa):i.removedDocuments.size>0&&(ee(o.wa),o.wa=!1))}),await zo(n,r,e)}catch(r){await Uo(r)}}function hy(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.U_)d.j_(a)&&(u=!0)}),u&&mp(l)}(r.eventManager,e),i.length&&r.Sa.l_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CO(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ue(V.comparator);o=o.insert(s,We.newNoDocument(s,b.min()));const a=q().add(s),l=new ku(b.min(),new Map,new ue(Q),o,a);await JE(r,l),r.va=r.va.remove(s),r.Fa.delete(e),gp(r)}else await ad(r.localStore,e,!1).then(()=>ud(r,e,n)).catch(Uo)}async function kO(t,e){const n=$(t),r=e.batch.batchId;try{const i=await jx(n.localStore,e);eT(n,r,null),ZE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await Uo(i)}}async function NO(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ee(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);eT(r,e,n),ZE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await Uo(i)}}function ZE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function eT(t,e,n){const r=$(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||tT(t,r)})}function tT(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(up(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),gp(t))}function dy(t,e,n){for(const r of n)r instanceof QE?(t.Ma.addReference(r.key,e),DO(t,r)):r instanceof XE?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||tT(t,r.key)):U()}function DO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(O("SyncEngine","New document in limbo: "+n),t.Ca.add(r),gp(t))}function gp(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new V(re.fromString(e)),r=t.Na.next();t.Fa.set(r,new wO(n)),t.va=t.va.insert(n,r),$E(t.remoteStore,new Fn(Qt(tp(n.path)),r,"TargetPurposeLimboResolution",Qf.oe))}}async function zo(t,e,n){const r=$(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=lp.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(l,u){const c=$(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(u,d=>T.forEach(d.ki,g=>c.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>T.forEach(d.qi,g=>c.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Fo(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const g=c.ts.get(d),y=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(d,_)}}}(r.localStore,s))}async function xO(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await ME(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new x(E.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r._s)}}function OO(t,e){const n=$(t),r=n.Fa.get(e);if(r&&r.wa)return q().add(r.key);{let i=q();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function nT(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CO.bind(null,e),e.Sa.l_=gO.bind(null,e.eventManager),e.Sa.ka=yO.bind(null,e.eventManager),e}function LO(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NO.bind(null,e),e}class fy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $x(this.persistence,new Fx,e.initialUser,this.serializer)}createPersistence(e){return new Vx(ap.jr,this.serializer)}createSharedClientState(e){return new Kx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xO.bind(null,this.syncEngine),await fO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mO}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(s){return new Yx(s)}(e.databaseInfo);return function(s,o,a,l){return new eO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new nO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>hy(this.syncEngine,n,0),function(){return ay.D()?new ay:new Gx}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new EO(i,s,o,a,l,u);return c&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=$(r);O("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Bo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=nE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ME(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FO(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ly(e.remoteStore,i)),t._onlineComponents=e}function UO(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function FO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!UO(n))throw n;Di("Error using user provided cache. Falling back to memory cache: "+n),await Oc(t,new fy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Oc(t,new fy);return t._offlineComponents}async function iT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await py(t,new VO))),t._onlineComponents}function bO(t){return iT(t).then(e=>e.syncEngine)}async function sT(t){const e=await iT(t),n=e.eventManager;return n.onListen=TO.bind(null,e.syncEngine),n.onUnlisten=RO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AO.bind(null,e.syncEngine),n}function $O(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new rT({next:d=>{o.enqueueAndForget(()=>KE(s,h));const g=d.docs.has(a);!g&&d.fromCache?u.reject(new x(E.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&l&&l.source==="server"?u.reject(new x(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new GE(tp(a.path),c,{includeMetadataChanges:!0,ra:!0});return WE(s,h)}(await sT(t),t.asyncQueue,e,n,r)),r.promise}function jO(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new rT({next:d=>{o.enqueueAndForget(()=>KE(s,h)),d.fromCache&&l.source==="server"?u.reject(new x(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new GE(a,c,{includeMetadataChanges:!0,ra:!0});return WE(s,h)}(await sT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BO(t,e,n,r){if(e===!0&&r===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!V.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yy(t){if(V.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ou(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _y({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _y(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oD;switch(r.type){case"firstParty":return new cD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=my.get(n);r&&(O("ComponentProvider","Removing Datastore"),my.delete(n),r.terminate())}(this),Promise.resolve()}}function zO(t,e,n,r={}){var i;const s=(t=En(t,Lu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=He.MOCK_USER;else{a=Zv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new He(u)}t._authCredentials=new aD(new tE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xi(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Xn extends Xi{constructor(e,n,r){super(e,n,tp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new V(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function Ho(t,e,...n){if(t=$e(t),aT("collection","path",e),t instanceof Lu){const r=re.fromString(e,...n);return yy(r),new Xn(t,null,r)}{if(!(t instanceof lt||t instanceof Xn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return yy(r),new Xn(t.firestore,null,r)}}function qr(t,e,...n){if(t=$e(t),arguments.length===1&&(e=nE.newId()),aT("doc","path",e),t instanceof Lu){const r=re.fromString(e,...n);return gy(r),new lt(t,null,new V(r))}{if(!(t instanceof lt||t instanceof Xn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return gy(r),new lt(t.firestore,t instanceof Xn?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new FE(this,"async_queue_retry"),this.hu=()=>{const n=xc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new dn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Fo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=fp.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&U()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Yi extends Lu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new HO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lT(this),this._firestoreClient.terminate()}}function qO(t,e){const n=typeof t=="object"?t:cf(),r=typeof t=="string"?t:"(default)",i=nu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xv("firestore");s&&zO(i,...s)}return i}function yp(t){return t._firestoreClient||lT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new ID(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,oT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new MO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ui(Xe.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ui(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=/^__.*__$/;class KO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new $o(e,this.data,n,this.fieldTransforms)}}function cT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class wp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new wp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ml(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(cT(this.fu)&&WO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class GO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Fu(e,n,r,i=!1){return new wp({fu:e,methodName:n,vu:r,path:Le.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ep(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new GO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hT(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);pT("Data must be an object, but it was:",o,r);const a=dT(r,o);let l,u;if(s.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=XO(e,h,n);if(!o.contains(d))throw new x(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);JO(c,d)||c.push(d)}l=new Nt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new KO(new wt(a),l,u)}function QO(t,e,n,r=!1){return Tp(n,t.Fu(r?4:3,e))}function Tp(t,e){if(fT(t=$e(t)))return pT("Unsupported field value:",e,t),dT(t,e);if(t instanceof uT)return function(r,i){if(!cT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Tp(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:Ll(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(i.serializer,s)}}if(r instanceof vp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ui)return{bytesValue:kE(i.serializer,r._byteString)};if(r instanceof lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ou(r)}`)}(t,e)}function dT(t,e){const n={};return rE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,i)=>{const s=Tp(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof vp||t instanceof Ui||t instanceof lt||t instanceof uT)}function pT(t,e,n){if(!fT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ou(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function XO(t,e,n){if((e=$e(e))instanceof _p)return e._internalPath;if(typeof e=="string")return mT(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const YO=new RegExp("[~\\*/\\[\\]]");function mT(t,e,n){if(e.search(YO)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _p(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(E.INVALID_ARGUMENT,a+t+l)}function JO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ip("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZO extends gT{data(){return super.data()}}function Ip(t,e){return typeof e=="string"?mT(t,e):e instanceof _p?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sp{}class t2 extends Sp{}function yT(t,e,...n){let r=[];e instanceof Sp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Rp).length,a=s.filter(l=>l instanceof Vu).length;if(o>1||o>0&&a>0)throw new x(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Vu extends t2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Vu(e,n,r)}_apply(e){const n=this._parse(e);return vT(e._query,n),new Xi(e.firestore,e.converter,td(e._query,n))}_parse(e){const n=Ep(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){wy(h,c);const g=[];for(const y of h)g.push(vy(l,s,y));d={arrayValue:{values:g}}}else d=vy(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||wy(h,c),d=QO(a,o,h,c==="in"||c==="not-in");return ve.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _T(t,e,n){const r=e,i=Ip("where",t);return Vu._create(i,r,n)}class Rp extends Sp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ut.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)vT(o,l),o=td(o,l)}(e._query,n),new Xi(e.firestore,e.converter,td(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vy(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new x(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dE(e)&&n.indexOf("/")!==-1)throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!V.isDocumentKey(r))throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bg(t,new V(r))}if(n instanceof lt)return Bg(t,n._key);throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ou(n)}.`)}function wy(t,e){if(!Array.isArray(t)||t.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class n2{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new vp(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(po(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);ee(VE(r));const i=new mo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ET extends gT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ip("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ba extends ET{data(e={}){return super.data(e)}}class r2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ws(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ba(this._firestore,this._userDataWriter,r.key,r,new ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ws(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ws(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:i2(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function i2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){t=En(t,lt);const e=En(t.firestore,Yi);return $O(yp(e),t._key).then(n=>a2(e,t,n))}class IT extends n2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function ST(t){t=En(t,Xi);const e=En(t.firestore,Yi),n=yp(e),r=new IT(e);return e2(t._query),jO(n,t._query).then(i=>new r2(e,r,t,i))}function Ap(t,e,n){t=En(t,lt);const r=En(t.firestore,Yi),i=wT(t.converter,e);return Pp(r,[hT(Ep(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function s2(t){return Pp(En(t.firestore,Yi),[new np(t._key,Lt.none())])}function o2(t,e){const n=En(t.firestore,Yi),r=qr(t),i=wT(t.converter,e);return Pp(n,[hT(Ep(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Pp(t,e){return function(r,i){const s=new dn;return r.asyncQueue.enqueueAndForget(async()=>PO(await bO(r),i,s)),s.promise}(yp(t),e)}function a2(t,e,n){const r=n.docs.get(e._key),i=new IT(t);return new ET(t,i,e._key,r,new ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Wi=i})(jr),xr(new Zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Yi(new lD(r.getProvider("auth-internal")),new dD(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Kt(Fg,"4.6.1",e),Kt(Fg,"4.6.1","esm2017")})();const l2={apiKey:"AIzaSyBfQu8s_p3HxS48ZGGHxbz8EGSORJ3fjcg",authDomain:"app-react-firebase-example.firebaseapp.com",projectId:"app-react-firebase-example",storageBucket:"app-react-firebase-example.appspot.com",messagingSenderId:"424459388067",appId:"1:424459388067:web:d397f82cde312615c4eb16"},Cp=n0(l2),RT=VC(Cp),In=qO(Cp),AT=Gk(Cp),u2=async t=>{const e=qr(In,"users",t);return(await TT(e)).exists()},PT=async t=>{const e=[],n=Ho(In,"users"),r=yT(n,_T("username","==",t));return(await ST(r)).forEach(s=>{e.push(s.data())}),e.length>0?e[0].uid:null},c2=async t=>{try{const e=Ho(In,"users"),n=qr(e,t.uid);await Ap(n,t)}catch(e){console.log(e)}},CT=async t=>{try{const e=Ho(In,"users"),n=qr(e,t.uid);await Ap(n,t)}catch(e){console.log(e)}},kT=async t=>{try{const e=qr(In,"users",t);return(await TT(e)).data()}catch(e){console.log(e)}},h2=async t=>{try{const e=Ho(In,"links");return await o2(e,t)}catch(e){console.log(e)}},NT=async t=>{const e=[];try{const n=Ho(In,"links"),r=yT(n,_T("uid","==",t));return(await ST(r)).forEach(s=>{const o={...s.data()};o.docId=s.id,e.push(o)}),e}catch(n){console.log(n)}},d2=async(t,e)=>{try{const n=qr(In,"links",t);return await Ap(n,e)}catch(n){console.log(n)}},f2=async t=>{try{const e=qr(In,"links",t);await s2(e)}catch(e){console.log(e)}},p2=async(t,e)=>{try{const n=J0(AT,`images/${t}`);return await Wk(n,e)}catch(n){console.log(n)}},cd=async t=>{try{const e=J0(AT,t);return await Kk(e)}catch(e){console.log(e)}},m2=async t=>{try{const e=await kT(t),n=await NT(t);return{profileInfo:e,linksInfo:n}}catch(e){console.log(e)}},Mu=({children:t,onUserLoggedIn:e,onUserNotLoggedIn:n,onUserNotRegistered:r})=>{const i=Bi();return S.useEffect(()=>{IP(RT,async s=>{if(s)if(await u2(s.uid)){const a=await kT(s.uid);a.processCompleted?e(a):r(a)}else await c2({uid:s.uid,displayName:s.displayName,profilePicture:"",username:"",processCompleted:!1}),r(s);else n()})},[i,e,n,r]),A.jsx("div",{children:t})},Ey=()=>{const t=Bi(),[e,n]=S.useState(0),r=async()=>{const a=async u=>{try{const c=await HP(RT,u);console.log(c)}catch(c){console.error(c)}},l=new nn;await a(l)},i=a=>{t("/dashboard")},s=a=>{t("/choose-username")},o=()=>{n(4)};return e===4?A.jsx("button",{onClick:r,children:"Registrarse con Google"}):A.jsx(Mu,{onUserLoggedIn:i,onUserNotRegistered:s,onUserNotLoggedIn:o,children:A.jsx("div",{children:"Cargando..."})})};let Ea;const g2=new Uint8Array(16);function y2(){if(!Ea&&(Ea=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ea))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ea(g2)}const Ne=[];for(let t=0;t<256;++t)Ne.push((t+256).toString(16).slice(1));function _2(t,e=0){return Ne[t[e+0]]+Ne[t[e+1]]+Ne[t[e+2]]+Ne[t[e+3]]+"-"+Ne[t[e+4]]+Ne[t[e+5]]+"-"+Ne[t[e+6]]+Ne[t[e+7]]+"-"+Ne[t[e+8]]+Ne[t[e+9]]+"-"+Ne[t[e+10]]+Ne[t[e+11]]+Ne[t[e+12]]+Ne[t[e+13]]+Ne[t[e+14]]+Ne[t[e+15]]}const v2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ty={randomUUID:v2};function w2(t,e,n){if(Ty.randomUUID&&!e&&!t)return Ty.randomUUID();t=t||{};const r=t.random||(t.rng||y2)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,_2(r)}const DT=({children:t})=>A.jsxs("div",{children:[A.jsxs("nav",{children:[A.jsx("div",{children:"Logotipo"}),A.jsx(La,{to:"/dashboard",children:"Links"}),A.jsx(La,{to:"/dashboard/profile",children:"Perfil"}),A.jsx(La,{to:"/signout",children:"Cerrar Sesión"})]}),A.jsx("div",{children:t})]}),E2=({docId:t,title:e,url:n,onDelete:r,onUpdate:i})=>{const[s,o]=S.useState(e),[a,l]=S.useState(n),[u,c]=S.useState(!1),[h,d]=S.useState(!1),g=S.useRef(null),y=S.useRef(null);S.useEffect(()=>{g.current&&g.current.focus()},[u]),S.useEffect(()=>{y.current&&y.current.focus()},[h]);const _=()=>{c(!0)},w=()=>{d(!0)},m=P=>{o(P.target.value)},f=P=>{l(P.target.value)},p=P=>{c(!1),i(t,s,a)},v=P=>{d(!1),i(t,s,a)},R=()=>{r(t)};return A.jsxs("div",{children:[A.jsxs("div",{children:[A.jsx("div",{children:u?A.jsx(A.Fragment,{children:A.jsx("input",{ref:g,value:s,onChange:m,onBlur:p})}):A.jsxs(A.Fragment,{children:[A.jsx("button",{onClick:_,children:"Editar"}),s]})}),A.jsx("div",{children:h?A.jsx(A.Fragment,{children:A.jsx("input",{ref:y,value:a,onChange:f,onBlur:v})}):A.jsxs(A.Fragment,{children:[A.jsx("button",{onClick:w,children:"Editar"}),a]})})]}),A.jsx("div",{children:A.jsx("button",{onClick:R,children:"Eliminar"})})]},t)},T2=()=>{const t=Bi(),[e,n]=S.useState({});S.useState("");const[r,i]=S.useState(0),[s,o]=S.useState(""),[a,l]=S.useState(""),[u,c]=S.useState([]),h=async p=>{n(p),i(2);const v=await NT(p.uid);c([...v])},d=p=>{t("/login")},g=()=>{t("/login")};if(r===0)return A.jsx(Mu,{onUserLoggedIn:h,onUserNotRegistered:d,onUserNotLoggedIn:g,children:"Loading"});const y=p=>{p.preventDefault(),_()},_=()=>{if(s!==""&&a!==""){const p={id:w2(),title:s,url:a,uid:e.uid},v=h2(p);p.docId=v.id,o(""),l(""),c([...u,p])}},w=p=>{const v=p.target.value;p.target.name==="title"&&o(v),p.target.name==="url"&&l(v)},m=async p=>{await f2(p);const v=u.filter(R=>R.docId!==p);c([...v])},f=async(p,v,R)=>{const P=u.find(k=>k.docId===p);P.title=v,P.url=R,await d2(p,P)};return A.jsx(DT,{children:A.jsxs("div",{children:[A.jsx("h1",{children:"Dashboard"}),A.jsxs("form",{onSubmit:y,children:[A.jsx("label",{htmlFor:"title",children:"Título"}),A.jsx("input",{type:"text",name:"title",onChange:w}),A.jsx("label",{htmlFor:"url",children:"Url"}),A.jsx("input",{type:"text",name:"url",onChange:w}),A.jsx("input",{type:"submit",value:"Crear nuevo Link"})]}),A.jsx("div",{children:u.map(p=>A.jsx(E2,{docId:p.docId,url:p.url,title:p.title,onDelete:m,onUpdate:f},p.id))})]})})},I2=()=>{const t=Bi(),[e,n]=S.useState({}),[r,i]=S.useState(0),[s,o]=S.useState(null),a=S.useRef(),l=async g=>{n(g);const y=await cd(g.profilePicture);o(y),i(2)},u=g=>{t("/login")},c=()=>{t("/login")},h=()=>{a.current&&a.current.click()},d=g=>{const y=g.target.files,_=new FileReader;_&&y&&y.length>0&&(_.readAsArrayBuffer(y[0]),_.onload=async()=>{const w=_.result,m=await p2(e.uid,w);if(m){const f={...e};f.profilePicture=m.metadata.fullPath,await CT(f),n({...f});const p=await cd(e.profilePicture);o(p)}})};return r!==2?A.jsx(Mu,{onUserLoggedIn:l,onUserNotLoggedIn:c,onUserNotRegistered:u}):A.jsx(DT,{children:A.jsxs("div",{children:[A.jsx("h2",{children:"Editar Información de Perfil"}),A.jsx("div",{children:A.jsx("img",{src:s,alt:"",width:100})}),A.jsxs("div",{children:[A.jsx("button",{onClick:h,children:"Seleeciona una nueva imagen"}),A.jsx("input",{ref:a,type:"file",style:{display:"none"},onChange:d})]})]})})},S2=()=>A.jsx("div",{children:"Cerrar Sesión"}),R2=({url:t,title:e})=>A.jsx("div",{children:A.jsx("a",{href:t,children:e})}),A2=()=>{const t=US(),[e,n]=S.useState(null),[r,i]=S.useState(""),[s,o]=S.useState(0);return S.useEffect(()=>{(async()=>{const l=t.username;try{const u=await PT(l);if(u){const c=await m2(u);n(c);const h=await cd(c.profileInfo.profilePicture);i(h)}else o(7)}catch(u){console.log(u)}})()},[t]),s===7?A.jsx("div",{children:"El nombre de usuario no existe"}):A.jsxs("div",{children:[A.jsx("div",{children:A.jsx("img",{src:r,alt:""})}),A.jsx("h2",{children:e==null?void 0:e.profileInfo.username}),A.jsx("h3",{children:e==null?void 0:e.profileInfo.displayName}),A.jsx("div",{children:e==null?void 0:e.linksInfo.map(a=>A.jsx(R2,{url:a.url,title:a.title},a.docId))})]})},P2=()=>{const t=Bi(),[e,n]=S.useState({}),[r,i]=S.useState(""),[s,o]=S.useState(0),a=d=>{t("/dashboard")},l=d=>{n(d),o(3)},u=()=>{t("/login")},c=d=>{i(d.target.value)},h=async()=>{if(r!=="")if(await PT(r))o(5);else{const g={...e};g.username=r,g.processCompleted=!0,await CT(g),o(6)}};return s===3||s===5?A.jsxs("div",{children:[A.jsxs("h1",{children:["Bienvenido ",e.displayName]}),A.jsx("p",{children:"Para terminar el proceso elige un nombre de usuario"}),s===5?A.jsx("p",{children:"El nombre de usuario ya existe, escoge otro"}):"",A.jsx("div",{children:A.jsx("input",{type:"text",onChange:c})}),A.jsx("div",{onClick:h,children:A.jsx("button",{children:"Continue"})})]}):s===6?A.jsxs("div",{children:[A.jsx("h1",{children:"Felicidades ya puedes ir al Dashboard a crear tus links"}),A.jsx(La,{to:"/dashboard",children:"Continuar"})]}):A.jsx(Mu,{onUserLoggedIn:a,onUserNotRegistered:l,onUserNotLoggedIn:u,children:A.jsx("div",{children:"Loading..."})})};Lc.createRoot(document.getElementById("root")).render(A.jsx(iR,{children:A.jsxs(YS,{children:[A.jsx(An,{path:"/",element:A.jsx(Ey,{})}),A.jsx(An,{path:"/login",element:A.jsx(Ey,{})}),A.jsx(An,{path:"/dashboard",element:A.jsx(T2,{})}),A.jsx(An,{path:"/dashboard/profile",element:A.jsx(I2,{})}),A.jsx(An,{path:"/signout",element:A.jsx(S2,{})}),A.jsx(An,{path:"u/:username",element:A.jsx(A2,{})}),A.jsx(An,{path:"/choose-username",element:A.jsx(P2,{})})]})}));
