import{a as St,c as Wr}from"./chunk-X7OUW33W.js";import{a as Yr}from"./chunk-32FXURDG.js";import{a as qr,b as xi}from"./chunk-57MH5O6V.js";import{a as hi,b as hr,c as gr}from"./chunk-VK5R55IX.js";import{a as Gr,b as ce}from"./chunk-UKNR5BP6.js";import{a as Or,b as Lr,c as Fr,f as Xr}from"./chunk-OW2T35ZA.js";import{a as vt}from"./chunk-XGWJJEET.js";import{C as Nr,D as yi,I as ze,J as zr,K as Br,L as Be,M as jr,N as Hr,R as Vr,T as je,W as Zr,_ as Ur,l as Ir,r as Dr,s as Pr,v as Rr,x as Ar,z as $i}from"./chunk-RNJQV7U6.js";import{A as yr,D as Ki,F as Fe,G as xr,L as kr,N as wr,R as gi,T as fi,U as _i,X as Cr,c as nr,ca as Er,da as ye,e as Oe,f as rr,fa as Tt,g as or,ga as Tr,h as ar,ha as Mr,i as ui,ia as Sr,j as sr,ja as bi,k as cr,ka as vi,m as lr,ma as Mt,n as mr,na as Ne,o as qt,p as Gt,q as dr,r as pr,s as Le,t as ur,v as fr,w as _r,x as br,z as vr}from"./chunk-FTLCFMAF.js";import{$ as Nn,$b as mi,Aa as Vn,Ab as bt,Ba as Zn,Bb as it,C as In,Ca as ai,Cb as nt,Db as ge,E as Ce,Ea as kt,F as Dn,Fa as Un,Fb as Zt,Gb as Ut,H as Pn,Hb as Z,Hc as er,Ib as m,Ic as Ae,Jb as d,K as Rn,Ka as Xn,Kb as q,L as An,Lb as fe,Lc as ir,Mb as Me,Mc as $t,N as On,Nb as We,Pc as Xt,Qc as Qi,Rb as wt,Sb as $n,U as ri,V as Wi,Vb as X,W as Ge,Wb as Jn,Xa as Te,Xb as O,Y as Ln,Yb as Se,Z as Fn,Za as b,Zb as Nt,_b as Ie,a as Gi,aa as re,ac as Ct,b as En,bb as qn,bc as Et,cb as Gn,da as xt,db as si,e as ke,eb as Wn,f as Tn,fa as p,fb as ae,fc as zt,ga as zn,gb as Yn,gc as Yi,hb as ci,hc as ft,ib as li,ic as di,j as we,jc as _,ka as ct,kc as mt,la as lt,lc as Bt,ma as oi,mb as V,na as Bn,nc as _e,oa as oe,ob as gt,oc as be,pa as ue,pc as ve,q as qe,qb as he,qc as se,r as Mn,rb as Vt,rc as De,sa as Kt,sb as Qn,sc as Ye,ta as Ft,tc as tr,u as Sn,wa as jn,wb as Kn,wc as Pe,xa as Ee,xc as Re,ya as Hn,zc as pi}from"./chunk-7ZAWAAP6.js";var Oo=Object.defineProperty,Lo=Object.defineProperties,Fo=Object.getOwnPropertyDescriptors,Qr=Object.getOwnPropertySymbols,No=Object.prototype.hasOwnProperty,zo=Object.prototype.propertyIsEnumerable,en=(i,r,t)=>r in i?Oo(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,Kr=(i,r)=>{for(var t in r||(r={}))No.call(r,t)&&en(i,t,r[t]);if(Qr)for(var t of Qr(r))zo.call(r,t)&&en(i,t,r[t]);return i},Bo=(i,r)=>Lo(i,Fo(r)),A=(i,r,t)=>(en(i,typeof r!="symbol"?r+"":r,t),t),Wt=globalThis;function It(i){return(Wt.__Zone_symbol_prefix||"__zone_symbol__")+i}function jo(){let i=Wt.performance;function r(Y){i&&i.mark&&i.mark(Y)}function t(Y,c){i&&i.measure&&i.measure(Y,c)}r("Zone");let e=class nn{constructor(c,s){A(this,"_parent"),A(this,"_name"),A(this,"_properties"),A(this,"_zoneDelegate"),this._parent=c,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,s)}static assertZonePatched(){if(Wt.Promise!==R.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let c=nn.current;for(;c.parent;)c=c.parent;return c}static get current(){return S.zone}static get currentTask(){return ht}static __load_patch(c,s,a=!1){if(R.hasOwnProperty(c)){let M=Wt[It("forceDuplicateZoneCheck")]===!0;if(!a&&M)throw Error("Already loaded patch: "+c)}else if(!Wt["__Zone_disable_"+c]){let M="Zone:"+c;r(M),R[c]=s(Wt,nn,H),t(M,M)}}get parent(){return this._parent}get name(){return this._name}get(c){let s=this.getZoneWith(c);if(s)return s._properties[c]}getZoneWith(c){let s=this;for(;s;){if(s._properties.hasOwnProperty(c))return s;s=s._parent}return null}fork(c){if(!c)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,c)}wrap(c,s){if(typeof c!="function")throw new Error("Expecting function got: "+c);let a=this._zoneDelegate.intercept(this,c,s),M=this;return function(){return M.runGuarded(a,this,arguments,s)}}run(c,s,a,M){S={parent:S,zone:this};try{return this._zoneDelegate.invoke(this,c,s,a,M)}finally{S=S.parent}}runGuarded(c,s=null,a,M){S={parent:S,zone:this};try{try{return this._zoneDelegate.invoke(this,c,s,a,M)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{S=S.parent}}runTask(c,s,a){if(c.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(c.zone||dt).name+"; Execution: "+this.name+")");let M=c,{type:Q,data:{isPeriodic:U=!1,isRefreshable:Rt=!1}={}}=c;if(c.state===T&&(Q===F||Q===at))return;let Yt=c.state!=G;Yt&&M._transitionTo(G,K);let Qt=ht;ht=M,S={parent:S,zone:this};try{Q==at&&c.data&&!U&&!Rt&&(c.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,M,s,a)}catch(At){if(this._zoneDelegate.handleError(this,At))throw At}}finally{let At=c.state;if(At!==T&&At!==$)if(Q==F||U||Rt&&At===y)Yt&&M._transitionTo(K,G,y);else{let g=M._zoneDelegates;this._updateTaskCount(M,-1),Yt&&M._transitionTo(T,G,T),Rt&&(M._zoneDelegates=g)}S=S.parent,ht=Qt}}scheduleTask(c){if(c.zone&&c.zone!==this){let a=this;for(;a;){if(a===c.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);a=a.parent}}c._transitionTo(y,T);let s=[];c._zoneDelegates=s,c._zone=this;try{c=this._zoneDelegate.scheduleTask(this,c)}catch(a){throw c._transitionTo($,y,T),this._zoneDelegate.handleError(this,a),a}return c._zoneDelegates===s&&this._updateTaskCount(c,1),c.state==y&&c._transitionTo(K,y),c}scheduleMicroTask(c,s,a,M){return this.scheduleTask(new v(C,c,s,a,M,void 0))}scheduleMacroTask(c,s,a,M,Q){return this.scheduleTask(new v(at,c,s,a,M,Q))}scheduleEventTask(c,s,a,M,Q){return this.scheduleTask(new v(F,c,s,a,M,Q))}cancelTask(c){if(c.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(c.zone||dt).name+"; Execution: "+this.name+")");if(!(c.state!==K&&c.state!==G)){c._transitionTo(rt,K,G);try{this._zoneDelegate.cancelTask(this,c)}catch(s){throw c._transitionTo($,rt),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(c,-1),c._transitionTo(T,rt),c.runCount=-1,c}}_updateTaskCount(c,s){let a=c._zoneDelegates;s==-1&&(c._zoneDelegates=null);for(let M=0;M<a.length;M++)a[M]._updateTaskCount(c.type,s)}};A(e,"__symbol__",It);let n=e,o={name:"",onHasTask:(Y,c,s,a)=>Y.hasTask(s,a),onScheduleTask:(Y,c,s,a)=>Y.scheduleTask(s,a),onInvokeTask:(Y,c,s,a,M,Q)=>Y.invokeTask(s,a,M,Q),onCancelTask:(Y,c,s,a)=>Y.cancelTask(s,a)};class u{constructor(c,s,a){A(this,"_zone"),A(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),A(this,"_parentDelegate"),A(this,"_forkDlgt"),A(this,"_forkZS"),A(this,"_forkCurrZone"),A(this,"_interceptDlgt"),A(this,"_interceptZS"),A(this,"_interceptCurrZone"),A(this,"_invokeDlgt"),A(this,"_invokeZS"),A(this,"_invokeCurrZone"),A(this,"_handleErrorDlgt"),A(this,"_handleErrorZS"),A(this,"_handleErrorCurrZone"),A(this,"_scheduleTaskDlgt"),A(this,"_scheduleTaskZS"),A(this,"_scheduleTaskCurrZone"),A(this,"_invokeTaskDlgt"),A(this,"_invokeTaskZS"),A(this,"_invokeTaskCurrZone"),A(this,"_cancelTaskDlgt"),A(this,"_cancelTaskZS"),A(this,"_cancelTaskCurrZone"),A(this,"_hasTaskDlgt"),A(this,"_hasTaskDlgtOwner"),A(this,"_hasTaskZS"),A(this,"_hasTaskCurrZone"),this._zone=c,this._parentDelegate=s,this._forkZS=a&&(a&&a.onFork?a:s._forkZS),this._forkDlgt=a&&(a.onFork?s:s._forkDlgt),this._forkCurrZone=a&&(a.onFork?this._zone:s._forkCurrZone),this._interceptZS=a&&(a.onIntercept?a:s._interceptZS),this._interceptDlgt=a&&(a.onIntercept?s:s._interceptDlgt),this._interceptCurrZone=a&&(a.onIntercept?this._zone:s._interceptCurrZone),this._invokeZS=a&&(a.onInvoke?a:s._invokeZS),this._invokeDlgt=a&&(a.onInvoke?s:s._invokeDlgt),this._invokeCurrZone=a&&(a.onInvoke?this._zone:s._invokeCurrZone),this._handleErrorZS=a&&(a.onHandleError?a:s._handleErrorZS),this._handleErrorDlgt=a&&(a.onHandleError?s:s._handleErrorDlgt),this._handleErrorCurrZone=a&&(a.onHandleError?this._zone:s._handleErrorCurrZone),this._scheduleTaskZS=a&&(a.onScheduleTask?a:s._scheduleTaskZS),this._scheduleTaskDlgt=a&&(a.onScheduleTask?s:s._scheduleTaskDlgt),this._scheduleTaskCurrZone=a&&(a.onScheduleTask?this._zone:s._scheduleTaskCurrZone),this._invokeTaskZS=a&&(a.onInvokeTask?a:s._invokeTaskZS),this._invokeTaskDlgt=a&&(a.onInvokeTask?s:s._invokeTaskDlgt),this._invokeTaskCurrZone=a&&(a.onInvokeTask?this._zone:s._invokeTaskCurrZone),this._cancelTaskZS=a&&(a.onCancelTask?a:s._cancelTaskZS),this._cancelTaskDlgt=a&&(a.onCancelTask?s:s._cancelTaskDlgt),this._cancelTaskCurrZone=a&&(a.onCancelTask?this._zone:s._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let M=a&&a.onHasTask,Q=s&&s._hasTaskZS;(M||Q)&&(this._hasTaskZS=M?a:o,this._hasTaskDlgt=s,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,a.onScheduleTask||(this._scheduleTaskZS=o,this._scheduleTaskDlgt=s,this._scheduleTaskCurrZone=this._zone),a.onInvokeTask||(this._invokeTaskZS=o,this._invokeTaskDlgt=s,this._invokeTaskCurrZone=this._zone),a.onCancelTask||(this._cancelTaskZS=o,this._cancelTaskDlgt=s,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(c,s){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,c,s):new n(c,s)}intercept(c,s,a){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,c,s,a):s}invoke(c,s,a,M,Q){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,c,s,a,M,Q):s.apply(a,M)}handleError(c,s){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,c,s):!0}scheduleTask(c,s){let a=s;if(this._scheduleTaskZS)this._hasTaskZS&&a._zoneDelegates.push(this._hasTaskDlgtOwner),a=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,c,s),a||(a=s);else if(s.scheduleFn)s.scheduleFn(s);else if(s.type==C)ot(s);else throw new Error("Task is missing scheduleFn.");return a}invokeTask(c,s,a,M){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,c,s,a,M):s.callback.apply(a,M)}cancelTask(c,s){let a;if(this._cancelTaskZS)a=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,c,s);else{if(!s.cancelFn)throw Error("Task is not cancelable");a=s.cancelFn(s)}return a}hasTask(c,s){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,c,s)}catch(a){this.handleError(c,a)}}_updateTaskCount(c,s){let a=this._taskCounts,M=a[c],Q=a[c]=M+s;if(Q<0)throw new Error("More tasks executed then were scheduled.");if(M==0||Q==0){let U={microTask:a.microTask>0,macroTask:a.macroTask>0,eventTask:a.eventTask>0,change:c};this.hasTask(this._zone,U)}}}class v{constructor(c,s,a,M,Q,U){if(A(this,"type"),A(this,"source"),A(this,"invoke"),A(this,"callback"),A(this,"data"),A(this,"scheduleFn"),A(this,"cancelFn"),A(this,"_zone",null),A(this,"runCount",0),A(this,"_zoneDelegates",null),A(this,"_state","notScheduled"),this.type=c,this.source=s,this.data=M,this.scheduleFn=Q,this.cancelFn=U,!a)throw new Error("callback is not defined");this.callback=a;let Rt=this;c===F&&M&&M.useG?this.invoke=v.invokeTask:this.invoke=function(){return v.invokeTask.call(Wt,Rt,this,arguments)}}static invokeTask(c,s,a){c||(c=this),yt++;try{return c.runCount++,c.zone.runTask(c,s,a)}finally{yt==1&&_t(),yt--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(T,y)}_transitionTo(c,s,a){if(this._state===s||this._state===a)this._state=c,c==T&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${c}', expecting state '${s}'${a?" or '"+a+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let w=It("setTimeout"),D=It("Promise"),x=It("then"),I=[],L=!1,j;function ut(Y){if(j||Wt[D]&&(j=Wt[D].resolve(0)),j){let c=j[x];c||(c=j.then),c.call(j,Y)}else Wt[w](Y,0)}function ot(Y){yt===0&&I.length===0&&ut(_t),Y&&I.push(Y)}function _t(){if(!L){for(L=!0;I.length;){let Y=I;I=[];for(let c=0;c<Y.length;c++){let s=Y[c];try{s.zone.runTask(s,null,null)}catch(a){H.onUnhandledError(a)}}}H.microtaskDrainDone(),L=!1}}let dt={name:"NO ZONE"},T="notScheduled",y="scheduling",K="scheduled",G="running",rt="canceling",$="unknown",C="microTask",at="macroTask",F="eventTask",R={},H={symbol:It,currentZoneFrame:()=>S,onUnhandledError:J,microtaskDrainDone:J,scheduleMicroTask:ot,showUncaughtError:()=>!n[It("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:J,patchMethod:()=>J,bindArguments:()=>[],patchThen:()=>J,patchMacroTask:()=>J,patchEventPrototype:()=>J,getGlobalObjects:()=>{},ObjectDefineProperty:()=>J,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>J,wrapWithCurrentZone:()=>J,filterProperties:()=>[],attachOriginToPatched:()=>J,_redefineProperty:()=>J,patchCallbacks:()=>J,nativeScheduleMicroTask:ut},S={parent:null,zone:new n(null,null)},ht=null,yt=0;function J(){}return t("Zone","Zone"),n}function Ho(){var i;let r=globalThis,t=r[It("forceDuplicateZoneCheck")]===!0;if(r.Zone&&(t||typeof r.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(i=r.Zone)!=null||(r.Zone=jo()),r.Zone}var Ke=Object.getOwnPropertyDescriptor,on=Object.defineProperty,an=Object.getPrototypeOf,Vo=Object.create,Zo=Array.prototype.slice,sn="addEventListener",cn="removeEventListener",Ji=It(sn),tn=It(cn),Jt="true",te="false",$e=It("");function ln(i,r){return Zone.current.wrap(i,r)}function mn(i,r,t,e,n){return Zone.current.scheduleMacroTask(i,r,t,e,n)}var W=It,Ci=typeof window<"u",Ei=Ci?window:void 0,pt=Ci&&Ei||globalThis,Uo="removeAttribute";function dn(i,r){for(let t=i.length-1;t>=0;t--)typeof i[t]=="function"&&(i[t]=ln(i[t],r+"_"+t));return i}function Xo(i,r){let t=i.constructor.name;for(let e=0;e<r.length;e++){let n=r[e],o=i[n];if(o){let u=Ke(i,n);if(!no(u))continue;i[n]=(v=>{let w=function(){return v.apply(this,dn(arguments,t+"."+n))};return ie(w,v),w})(o)}}}function no(i){return i?i.writable===!1?!1:!(typeof i.get=="function"&&typeof i.set>"u"):!0}var ro=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ti=!("nw"in pt)&&typeof pt.process<"u"&&pt.process.toString()==="[object process]",pn=!Ti&&!ro&&!!(Ci&&Ei.HTMLElement),oo=typeof pt.process<"u"&&pt.process.toString()==="[object process]"&&!ro&&!!(Ci&&Ei.HTMLElement),wi={},qo=W("enable_beforeunload"),$r=function(i){if(i=i||pt.event,!i)return;let r=wi[i.type];r||(r=wi[i.type]=W("ON_PROPERTY"+i.type));let t=this||i.target||pt,e=t[r],n;if(pn&&t===Ei&&i.type==="error"){let o=i;n=e&&e.call(this,o.message,o.filename,o.lineno,o.colno,o.error),n===!0&&i.preventDefault()}else n=e&&e.apply(this,arguments),i.type==="beforeunload"&&pt[qo]&&typeof n=="string"?i.returnValue=n:n!=null&&!n&&i.preventDefault();return n};function Jr(i,r,t){let e=Ke(i,r);if(!e&&t&&Ke(t,r)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let n=W("on"+r+"patched");if(i.hasOwnProperty(n)&&i[n])return;delete e.writable,delete e.value;let o=e.get,u=e.set,v=r.slice(2),w=wi[v];w||(w=wi[v]=W("ON_PROPERTY"+v)),e.set=function(D){let x=this;if(!x&&i===pt&&(x=pt),!x)return;typeof x[w]=="function"&&x.removeEventListener(v,$r),u?.call(x,null),x[w]=D,typeof D=="function"&&x.addEventListener(v,$r,!1)},e.get=function(){let D=this;if(!D&&i===pt&&(D=pt),!D)return null;let x=D[w];if(x)return x;if(o){let I=o.call(this);if(I)return e.set.call(this,I),typeof D[Uo]=="function"&&D.removeAttribute(r),I}return null},on(i,r,e),i[n]=!0}function ao(i,r,t){if(r)for(let e=0;e<r.length;e++)Jr(i,"on"+r[e],t);else{let e=[];for(let n in i)n.slice(0,2)=="on"&&e.push(n);for(let n=0;n<e.length;n++)Jr(i,e[n],t)}}var jt=W("originalInstance");function Qe(i){let r=pt[i];if(!r)return;pt[W(i)]=r,pt[i]=function(){let n=dn(arguments,i);switch(n.length){case 0:this[jt]=new r;break;case 1:this[jt]=new r(n[0]);break;case 2:this[jt]=new r(n[0],n[1]);break;case 3:this[jt]=new r(n[0],n[1],n[2]);break;case 4:this[jt]=new r(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},ie(pt[i],r);let t=new r(function(){}),e;for(e in t)i==="XMLHttpRequest"&&e==="responseBlob"||(function(n){typeof t[n]=="function"?pt[i].prototype[n]=function(){return this[jt][n].apply(this[jt],arguments)}:on(pt[i].prototype,n,{set:function(o){typeof o=="function"?(this[jt][n]=ln(o,i+"."+n),ie(this[jt][n],o)):this[jt][n]=o},get:function(){return this[jt][n]}})})(e);for(e in r)e!=="prototype"&&r.hasOwnProperty(e)&&(pt[i][e]=r[e])}function Go(i,r){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(r,e,{get:function(){return i[e]},set:function(o){n&&(!n.writable||typeof n.set!="function")||(i[e]=o)},enumerable:n?n.enumerable:!0,configurable:n?n.configurable:!0})})}var Wo=!1;function ee(i,r,t){let e=i;for(;e&&!e.hasOwnProperty(r);)e=an(e);!e&&i[r]&&(e=i);let n=W(r),o=null;if(e&&(!(o=e[n])||!e.hasOwnProperty(n))){o=e[n]=e[r];let u=e&&Ke(e,r);if(no(u)){let v=t(o,n,r);e[r]=function(){return v(this,arguments)},ie(e[r],o),Wo&&Go(o,e[r])}}return o}function Yo(i,r,t){let e=null;function n(o){let u=o.data;return u.args[u.cbIdx]=function(){o.invoke.apply(this,arguments)},e.apply(u.target,u.args),o}e=ee(i,r,o=>function(u,v){let w=t(u,v);return w.cbIdx>=0&&typeof v[w.cbIdx]=="function"?mn(w.name,v[w.cbIdx],w,n):o.apply(u,v)})}function ie(i,r){i[W("OriginalDelegate")]=r}function to(i){return typeof i=="function"}function eo(i){return typeof i=="number"}var Qo={useG:!0},Dt={},so={},co=new RegExp("^"+$e+"(\\w+)(true|false)$"),lo=W("propagationStopped");function mo(i,r){let t=(r?r(i):i)+te,e=(r?r(i):i)+Jt,n=$e+t,o=$e+e;Dt[i]={},Dt[i][te]=n,Dt[i][Jt]=o}function Ko(i,r,t,e){let n=e&&e.add||sn,o=e&&e.rm||cn,u=e&&e.listeners||"eventListeners",v=e&&e.rmAll||"removeAllListeners",w=W(n),D="."+n+":",x="prependListener",I="."+x+":",L=function(T,y,K){if(T.isRemoved)return;let G=T.callback;typeof G=="object"&&G.handleEvent&&(T.callback=C=>G.handleEvent(C),T.originalDelegate=G);let rt;try{T.invoke(T,y,[K])}catch(C){rt=C}let $=T.options;if($&&typeof $=="object"&&$.once){let C=T.originalDelegate?T.originalDelegate:T.callback;y[o].call(y,K.type,C,$)}return rt};function j(T,y,K){if(y=y||i.event,!y)return;let G=T||y.target||i,rt=G[Dt[y.type][K?Jt:te]];if(rt){let $=[];if(rt.length===1){let C=L(rt[0],G,y);C&&$.push(C)}else{let C=rt.slice();for(let at=0;at<C.length&&!(y&&y[lo]===!0);at++){let F=L(C[at],G,y);F&&$.push(F)}}if($.length===1)throw $[0];for(let C=0;C<$.length;C++){let at=$[C];r.nativeScheduleMicroTask(()=>{throw at})}}}let ut=function(T){return j(this,T,!1)},ot=function(T){return j(this,T,!0)};function _t(T,y){if(!T)return!1;let K=!0;y&&y.useG!==void 0&&(K=y.useG);let G=y&&y.vh,rt=!0;y&&y.chkDup!==void 0&&(rt=y.chkDup);let $=!1;y&&y.rt!==void 0&&($=y.rt);let C=T;for(;C&&!C.hasOwnProperty(n);)C=an(C);if(!C&&T[n]&&(C=T),!C||C[w])return!1;let at=y&&y.eventNameToString,F={},R=C[w]=C[n],H=C[W(o)]=C[o],S=C[W(u)]=C[u],ht=C[W(v)]=C[v],yt;y&&y.prepend&&(yt=C[W(y.prepend)]=C[y.prepend]);function J(l,f){return f?typeof l=="boolean"?{capture:l,passive:!0}:l?typeof l=="object"&&l.passive!==!1?Bo(Kr({},l),{passive:!0}):l:{passive:!0}:l}let Y=function(l){if(!F.isExisting)return R.call(F.target,F.eventName,F.capture?ot:ut,F.options)},c=function(l){if(!l.isRemoved){let f=Dt[l.eventName],E;f&&(E=f[l.capture?Jt:te]);let P=E&&l.target[E];if(P){for(let k=0;k<P.length;k++)if(P[k]===l){P.splice(k,1),l.isRemoved=!0,l.removeAbortListener&&(l.removeAbortListener(),l.removeAbortListener=null),P.length===0&&(l.allRemoved=!0,l.target[E]=null);break}}}if(l.allRemoved)return H.call(l.target,l.eventName,l.capture?ot:ut,l.options)},s=function(l){return R.call(F.target,F.eventName,l.invoke,F.options)},a=function(l){return yt.call(F.target,F.eventName,l.invoke,F.options)},M=function(l){return H.call(l.target,l.eventName,l.invoke,l.options)},Q=K?Y:s,U=K?c:M,Rt=function(l,f){let E=typeof f;return E==="function"&&l.callback===f||E==="object"&&l.originalDelegate===f},Yt=y?.diff||Rt,Qt=Zone[W("UNPATCHED_EVENTS")],At=i[W("PASSIVE_EVENTS")];function g(l){if(typeof l=="object"&&l!==null){let f=Kr({},l);return l.signal&&(f.signal=l.signal),f}return l}let h=function(l,f,E,P,k=!1,N=!1){return function(){let z=this||i,B=arguments[0];y&&y.transferEventName&&(B=y.transferEventName(B));let tt=arguments[1];if(!tt)return l.apply(this,arguments);if(Ti&&B==="uncaughtException")return l.apply(this,arguments);let et=!1;if(typeof tt!="function"){if(!tt.handleEvent)return l.apply(this,arguments);et=!0}if(G&&!G(l,tt,z,arguments))return;let ne=!!At&&At.indexOf(B)!==-1,Ot=g(J(arguments[2],ne)),pe=Ot?.signal;if(pe?.aborted)return;if(Qt){for(let Ht=0;Ht<Qt.length;Ht++)if(B===Qt[Ht])return ne?l.call(z,B,tt,Ot):l.apply(this,arguments)}let Xi=Ot?typeof Ot=="boolean"?!0:Ot.capture:!1,yn=Ot&&typeof Ot=="object"?Ot.once:!1,Ao=Zone.current,qi=Dt[B];qi||(mo(B,at),qi=Dt[B]);let xn=qi[Xi?Jt:te],xe=z[xn],kn=!1;if(xe){if(kn=!0,rt){for(let Ht=0;Ht<xe.length;Ht++)if(Yt(xe[Ht],tt))return}}else xe=z[xn]=[];let ni,wn=z.constructor.name,Cn=so[wn];Cn&&(ni=Cn[B]),ni||(ni=wn+f+(at?at(B):B)),F.options=Ot,yn&&(F.options.once=!1),F.target=z,F.capture=Xi,F.eventName=B,F.isExisting=kn;let Xe=K?Qo:void 0;Xe&&(Xe.taskData=F),pe&&(F.options.signal=void 0);let Lt=Ao.scheduleEventTask(ni,tt,Xe,E,P);if(pe){F.options.signal=pe;let Ht=()=>Lt.zone.cancelTask(Lt);l.call(pe,"abort",Ht,{once:!0}),Lt.removeAbortListener=()=>pe.removeEventListener("abort",Ht)}if(F.target=null,Xe&&(Xe.taskData=null),yn&&(F.options.once=!0),typeof Lt.options!="boolean"&&(Lt.options=Ot),Lt.target=z,Lt.capture=Xi,Lt.eventName=B,et&&(Lt.originalDelegate=tt),N?xe.unshift(Lt):xe.push(Lt),k)return z}};return C[n]=h(R,D,Q,U,$),yt&&(C[x]=h(yt,I,a,U,$,!0)),C[o]=function(){let l=this||i,f=arguments[0];y&&y.transferEventName&&(f=y.transferEventName(f));let E=arguments[2],P=E?typeof E=="boolean"?!0:E.capture:!1,k=arguments[1];if(!k)return H.apply(this,arguments);if(G&&!G(H,k,l,arguments))return;let N=Dt[f],z;N&&(z=N[P?Jt:te]);let B=z&&l[z];if(B)for(let tt=0;tt<B.length;tt++){let et=B[tt];if(Yt(et,k)){if(B.splice(tt,1),et.isRemoved=!0,B.length===0&&(et.allRemoved=!0,l[z]=null,!P&&typeof f=="string")){let ne=$e+"ON_PROPERTY"+f;l[ne]=null}return et.zone.cancelTask(et),$?l:void 0}}return H.apply(this,arguments)},C[u]=function(){let l=this||i,f=arguments[0];y&&y.transferEventName&&(f=y.transferEventName(f));let E=[],P=po(l,at?at(f):f);for(let k=0;k<P.length;k++){let N=P[k],z=N.originalDelegate?N.originalDelegate:N.callback;E.push(z)}return E},C[v]=function(){let l=this||i,f=arguments[0];if(f){y&&y.transferEventName&&(f=y.transferEventName(f));let E=Dt[f];if(E){let P=E[te],k=E[Jt],N=l[P],z=l[k];if(N){let B=N.slice();for(let tt=0;tt<B.length;tt++){let et=B[tt],ne=et.originalDelegate?et.originalDelegate:et.callback;this[o].call(this,f,ne,et.options)}}if(z){let B=z.slice();for(let tt=0;tt<B.length;tt++){let et=B[tt],ne=et.originalDelegate?et.originalDelegate:et.callback;this[o].call(this,f,ne,et.options)}}}}else{let E=Object.keys(l);for(let P=0;P<E.length;P++){let k=E[P],N=co.exec(k),z=N&&N[1];z&&z!=="removeListener"&&this[v].call(this,z)}this[v].call(this,"removeListener")}if($)return this},ie(C[n],R),ie(C[o],H),ht&&ie(C[v],ht),S&&ie(C[u],S),!0}let dt=[];for(let T=0;T<t.length;T++)dt[T]=_t(t[T],e);return dt}function po(i,r){if(!r){let o=[];for(let u in i){let v=co.exec(u),w=v&&v[1];if(w&&(!r||w===r)){let D=i[u];if(D)for(let x=0;x<D.length;x++)o.push(D[x])}}return o}let t=Dt[r];t||(mo(r),t=Dt[r]);let e=i[t[te]],n=i[t[Jt]];return e?n?e.concat(n):e.slice():n?n.slice():[]}function $o(i,r){let t=i.Event;t&&t.prototype&&r.patchMethod(t.prototype,"stopImmediatePropagation",e=>function(n,o){n[lo]=!0,e&&e.apply(n,o)})}function Jo(i,r){r.patchMethod(i,"queueMicrotask",t=>function(e,n){Zone.current.scheduleMicroTask("queueMicrotask",n[0])})}var ki=W("zoneTask");function He(i,r,t,e){let n=null,o=null;r+=e,t+=e;let u={};function v(D){let x=D.data;x.args[0]=function(){return D.invoke.apply(this,arguments)};let I=n.apply(i,x.args);return eo(I)?x.handleId=I:(x.handle=I,x.isRefreshable=to(I.refresh)),D}function w(D){let{handle:x,handleId:I}=D.data;return o.call(i,x??I)}n=ee(i,r,D=>function(x,I){var L;if(to(I[0])){let j={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?I[1]||0:void 0,args:I},ut=I[0];I[0]=function(){try{return ut.apply(this,arguments)}finally{let{handle:G,handleId:rt,isPeriodic:$,isRefreshable:C}=j;!$&&!C&&(rt?delete u[rt]:G&&(G[ki]=null))}};let ot=mn(r,I[0],j,v,w);if(!ot)return ot;let{handleId:_t,handle:dt,isRefreshable:T,isPeriodic:y}=ot.data;if(_t)u[_t]=ot;else if(dt&&(dt[ki]=ot,T&&!y)){let K=dt.refresh;dt.refresh=function(){let{zone:G,state:rt}=ot;return rt==="notScheduled"?(ot._state="scheduled",G._updateTaskCount(ot,1)):rt==="running"&&(ot._state="scheduling"),K.call(this)}}return(L=dt??_t)!=null?L:ot}else return D.apply(i,I)}),o=ee(i,t,D=>function(x,I){let L=I[0],j;eo(L)?(j=u[L],delete u[L]):(j=L?.[ki],j?L[ki]=null:j=L),j?.type?j.cancelFn&&j.zone.cancelTask(j):D.apply(i,I)})}function ta(i,r){let{isBrowser:t,isMix:e}=r.getGlobalObjects();if(!t&&!e||!i.customElements||!("customElements"in i))return;let n=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,i.customElements,"customElements","define",n)}function ea(i,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:t,zoneSymbolEventNames:e,TRUE_STR:n,FALSE_STR:o,ZONE_SYMBOL_PREFIX:u}=r.getGlobalObjects();for(let w=0;w<t.length;w++){let D=t[w],x=D+o,I=D+n,L=u+x,j=u+I;e[D]={},e[D][o]=L,e[D][n]=j}let v=i.EventTarget;if(!(!v||!v.prototype))return r.patchEventTarget(i,r,[v&&v.prototype]),!0}function ia(i,r){r.patchEventPrototype(i,r)}function uo(i,r,t){if(!t||t.length===0)return r;let e=t.filter(o=>o.target===i);if(e.length===0)return r;let n=e[0].ignoreProperties;return r.filter(o=>n.indexOf(o)===-1)}function io(i,r,t,e){if(!i)return;let n=uo(i,r,t);ao(i,n,e)}function rn(i){return Object.getOwnPropertyNames(i).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function na(i,r){if(Ti&&!oo||Zone[i.symbol("patchEvents")])return;let t=r.__Zone_ignore_on_properties,e=[];if(pn){let n=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),io(n,rn(n),t,an(n))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let n=0;n<e.length;n++){let o=r[e[n]];o?.prototype&&io(o.prototype,rn(o.prototype),t)}}function ra(i){i.__load_patch("timers",r=>{let e="clear";He(r,"set",e,"Timeout"),He(r,"set",e,"Interval"),He(r,"set",e,"Immediate")}),i.__load_patch("requestAnimationFrame",r=>{He(r,"request","cancel","AnimationFrame"),He(r,"mozRequest","mozCancel","AnimationFrame"),He(r,"webkitRequest","webkitCancel","AnimationFrame")}),i.__load_patch("blocking",(r,t)=>{let e=["alert","prompt","confirm"];for(let n=0;n<e.length;n++){let o=e[n];ee(r,o,(u,v,w)=>function(D,x){return t.current.run(u,r,x,w)})}}),i.__load_patch("EventTarget",(r,t,e)=>{ia(r,e),ea(r,e);let n=r.XMLHttpRequestEventTarget;n&&n.prototype&&e.patchEventTarget(r,e,[n.prototype])}),i.__load_patch("MutationObserver",(r,t,e)=>{Qe("MutationObserver"),Qe("WebKitMutationObserver")}),i.__load_patch("IntersectionObserver",(r,t,e)=>{Qe("IntersectionObserver")}),i.__load_patch("FileReader",(r,t,e)=>{Qe("FileReader")}),i.__load_patch("on_property",(r,t,e)=>{na(e,r)}),i.__load_patch("customElements",(r,t,e)=>{ta(r,e)}),i.__load_patch("XHR",(r,t)=>{D(r);let e=W("xhrTask"),n=W("xhrSync"),o=W("xhrListener"),u=W("xhrScheduled"),v=W("xhrURL"),w=W("xhrErrorBeforeScheduled");function D(x){let I=x.XMLHttpRequest;if(!I)return;let L=I.prototype;function j(R){return R[e]}let ut=L[Ji],ot=L[tn];if(!ut){let R=x.XMLHttpRequestEventTarget;if(R){let H=R.prototype;ut=H[Ji],ot=H[tn]}}let _t="readystatechange",dt="scheduled";function T(R){let H=R.data,S=H.target;S[u]=!1,S[w]=!1;let ht=S[o];ut||(ut=S[Ji],ot=S[tn]),ht&&ot.call(S,_t,ht);let yt=S[o]=()=>{if(S.readyState===S.DONE)if(!H.aborted&&S[u]&&R.state===dt){let Y=S[t.__symbol__("loadfalse")];if(S.status!==0&&Y&&Y.length>0){let c=R.invoke;R.invoke=function(){let s=S[t.__symbol__("loadfalse")];for(let a=0;a<s.length;a++)s[a]===R&&s.splice(a,1);!H.aborted&&R.state===dt&&c.call(R)},Y.push(R)}else R.invoke()}else!H.aborted&&S[u]===!1&&(S[w]=!0)};return ut.call(S,_t,yt),S[e]||(S[e]=R),at.apply(S,H.args),S[u]=!0,R}function y(){}function K(R){let H=R.data;return H.aborted=!0,F.apply(H.target,H.args)}let G=ee(L,"open",()=>function(R,H){return R[n]=H[2]==!1,R[v]=H[1],G.apply(R,H)}),rt="XMLHttpRequest.send",$=W("fetchTaskAborting"),C=W("fetchTaskScheduling"),at=ee(L,"send",()=>function(R,H){if(t.current[C]===!0||R[n])return at.apply(R,H);{let S={target:R,url:R[v],isPeriodic:!1,args:H,aborted:!1},ht=mn(rt,y,S,T,K);R&&R[w]===!0&&!S.aborted&&ht.state===dt&&ht.invoke()}}),F=ee(L,"abort",()=>function(R,H){let S=j(R);if(S&&typeof S.type=="string"){if(S.cancelFn==null||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(t.current[$]===!0)return F.apply(R,H)})}}),i.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&Xo(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),i.__load_patch("PromiseRejectionEvent",(r,t)=>{function e(n){return function(o){po(r,n).forEach(v=>{let w=r.PromiseRejectionEvent;if(w){let D=new w(n,{promise:o.promise,reason:o.rejection});v.invoke(D)}})}}r.PromiseRejectionEvent&&(t[W("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),t[W("rejectionHandledHandler")]=e("rejectionhandled"))}),i.__load_patch("queueMicrotask",(r,t,e)=>{Jo(r,e)})}function oa(i){i.__load_patch("ZoneAwarePromise",(r,t,e)=>{let n=Object.getOwnPropertyDescriptor,o=Object.defineProperty;function u(g){if(g&&g.toString===Object.prototype.toString){let h=g.constructor&&g.constructor.name;return(h||"")+": "+JSON.stringify(g)}return g?g.toString():Object.prototype.toString.call(g)}let v=e.symbol,w=[],D=r[v("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,x=v("Promise"),I=v("then"),L="__creationTrace__";e.onUnhandledError=g=>{if(e.showUncaughtError()){let h=g&&g.rejection;h?console.error("Unhandled Promise rejection:",h instanceof Error?h.message:h,"; Zone:",g.zone.name,"; Task:",g.task&&g.task.source,"; Value:",h,h instanceof Error?h.stack:void 0):console.error(g)}},e.microtaskDrainDone=()=>{for(;w.length;){let g=w.shift();try{g.zone.runGuarded(()=>{throw g.throwOriginal?g.rejection:g})}catch(h){ut(h)}}};let j=v("unhandledPromiseRejectionHandler");function ut(g){e.onUnhandledError(g);try{let h=t[j];typeof h=="function"&&h.call(this,g)}catch{}}function ot(g){return g&&typeof g.then=="function"}function _t(g){return g}function dt(g){return U.reject(g)}let T=v("state"),y=v("value"),K=v("finally"),G=v("parentPromiseValue"),rt=v("parentPromiseState"),$="Promise.then",C=null,at=!0,F=!1,R=0;function H(g,h){return l=>{try{J(g,h,l)}catch(f){J(g,!1,f)}}}let S=function(){let g=!1;return function(l){return function(){g||(g=!0,l.apply(null,arguments))}}},ht="Promise resolved with itself",yt=v("currentTaskTrace");function J(g,h,l){let f=S();if(g===l)throw new TypeError(ht);if(g[T]===C){let E=null;try{(typeof l=="object"||typeof l=="function")&&(E=l&&l.then)}catch(P){return f(()=>{J(g,!1,P)})(),g}if(h!==F&&l instanceof U&&l.hasOwnProperty(T)&&l.hasOwnProperty(y)&&l[T]!==C)c(l),J(g,l[T],l[y]);else if(h!==F&&typeof E=="function")try{E.call(l,f(H(g,h)),f(H(g,!1)))}catch(P){f(()=>{J(g,!1,P)})()}else{g[T]=h;let P=g[y];if(g[y]=l,g[K]===K&&h===at&&(g[T]=g[rt],g[y]=g[G]),h===F&&l instanceof Error){let k=t.currentTask&&t.currentTask.data&&t.currentTask.data[L];k&&o(l,yt,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<P.length;)s(g,P[k++],P[k++],P[k++],P[k++]);if(P.length==0&&h==F){g[T]=R;let k=l;try{throw new Error("Uncaught (in promise): "+u(l)+(l&&l.stack?`
`+l.stack:""))}catch(N){k=N}D&&(k.throwOriginal=!0),k.rejection=l,k.promise=g,k.zone=t.current,k.task=t.currentTask,w.push(k),e.scheduleMicroTask()}}}return g}let Y=v("rejectionHandledHandler");function c(g){if(g[T]===R){try{let h=t[Y];h&&typeof h=="function"&&h.call(this,{rejection:g[y],promise:g})}catch{}g[T]=F;for(let h=0;h<w.length;h++)g===w[h].promise&&w.splice(h,1)}}function s(g,h,l,f,E){c(g);let P=g[T],k=P?typeof f=="function"?f:_t:typeof E=="function"?E:dt;h.scheduleMicroTask($,()=>{try{let N=g[y],z=!!l&&K===l[K];z&&(l[G]=N,l[rt]=P);let B=h.run(k,void 0,z&&k!==dt&&k!==_t?[]:[N]);J(l,!0,B)}catch(N){J(l,!1,N)}},l)}let a="function ZoneAwarePromise() { [native code] }",M=function(){},Q=r.AggregateError;class U{static toString(){return a}static resolve(h){return h instanceof U?h:J(new this(null),at,h)}static reject(h){return J(new this(null),F,h)}static withResolvers(){let h={};return h.promise=new U((l,f)=>{h.resolve=l,h.reject=f}),h}static any(h){if(!h||typeof h[Symbol.iterator]!="function")return Promise.reject(new Q([],"All promises were rejected"));let l=[],f=0;try{for(let k of h)f++,l.push(U.resolve(k))}catch{return Promise.reject(new Q([],"All promises were rejected"))}if(f===0)return Promise.reject(new Q([],"All promises were rejected"));let E=!1,P=[];return new U((k,N)=>{for(let z=0;z<l.length;z++)l[z].then(B=>{E||(E=!0,k(B))},B=>{P.push(B),f--,f===0&&(E=!0,N(new Q(P,"All promises were rejected")))})})}static race(h){let l,f,E=new this((N,z)=>{l=N,f=z});function P(N){l(N)}function k(N){f(N)}for(let N of h)ot(N)||(N=this.resolve(N)),N.then(P,k);return E}static all(h){return U.allWithCallback(h)}static allSettled(h){return(this&&this.prototype instanceof U?this:U).allWithCallback(h,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(h,l){let f,E,P=new this((B,tt)=>{f=B,E=tt}),k=2,N=0,z=[];for(let B of h){ot(B)||(B=this.resolve(B));let tt=N;try{B.then(et=>{z[tt]=l?l.thenCallback(et):et,k--,k===0&&f(z)},et=>{l?(z[tt]=l.errorCallback(et),k--,k===0&&f(z)):E(et)})}catch(et){E(et)}k++,N++}return k-=2,k===0&&f(z),P}constructor(h){let l=this;if(!(l instanceof U))throw new Error("Must be an instanceof Promise.");l[T]=C,l[y]=[];try{let f=S();h&&h(f(H(l,at)),f(H(l,F)))}catch(f){J(l,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return U}then(h,l){var f;let E=(f=this.constructor)==null?void 0:f[Symbol.species];(!E||typeof E!="function")&&(E=this.constructor||U);let P=new E(M),k=t.current;return this[T]==C?this[y].push(k,P,h,l):s(this,k,P,h,l),P}catch(h){return this.then(null,h)}finally(h){var l;let f=(l=this.constructor)==null?void 0:l[Symbol.species];(!f||typeof f!="function")&&(f=U);let E=new f(M);E[K]=K;let P=t.current;return this[T]==C?this[y].push(P,E,h,h):s(this,P,E,h,h),E}}U.resolve=U.resolve,U.reject=U.reject,U.race=U.race,U.all=U.all;let Rt=r[x]=r.Promise;r.Promise=U;let Yt=v("thenPatched");function Qt(g){let h=g.prototype,l=n(h,"then");if(l&&(l.writable===!1||!l.configurable))return;let f=h.then;h[I]=f,g.prototype.then=function(E,P){return new U((N,z)=>{f.call(this,N,z)}).then(E,P)},g[Yt]=!0}e.patchThen=Qt;function At(g){return function(h,l){let f=g.apply(h,l);if(f instanceof U)return f;let E=f.constructor;return E[Yt]||Qt(E),f}}if(Rt){Qt(Rt);let g=Rt.try;g&&typeof g=="function"&&(U.try=g),ee(r,"fetch",h=>At(h))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=w,U})}function aa(i){i.__load_patch("toString",r=>{let t=Function.prototype.toString,e=W("OriginalDelegate"),n=W("Promise"),o=W("Error"),u=function(){if(typeof this=="function"){let x=this[e];if(x)return typeof x=="function"?t.call(x):Object.prototype.toString.call(x);if(this===Promise){let I=r[n];if(I)return t.call(I)}if(this===Error){let I=r[o];if(I)return t.call(I)}}return t.call(this)};u[e]=t,Function.prototype.toString=u;let v=Object.prototype.toString,w="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?w:v.call(this)}})}function sa(i,r,t,e,n){let o=Zone.__symbol__(e);if(r[o])return;let u=r[o]=r[e];r[e]=function(v,w,D){return w&&w.prototype&&n.forEach(function(x){let I=`${t}.${e}::`+x,L=w.prototype;try{if(L.hasOwnProperty(x)){let j=i.ObjectGetOwnPropertyDescriptor(L,x);j&&j.value?(j.value=i.wrapWithCurrentZone(j.value,I),i._redefineProperty(w.prototype,x,j)):L[x]&&(L[x]=i.wrapWithCurrentZone(L[x],I))}else L[x]&&(L[x]=i.wrapWithCurrentZone(L[x],I))}catch{}}),u.call(r,v,w,D)},i.attachOriginToPatched(r[e],u)}function ca(i){i.__load_patch("util",(r,t,e)=>{let n=rn(r);e.patchOnProperties=ao,e.patchMethod=ee,e.bindArguments=dn,e.patchMacroTask=Yo;let o=t.__symbol__("BLACK_LISTED_EVENTS"),u=t.__symbol__("UNPATCHED_EVENTS");r[u]&&(r[o]=r[u]),r[o]&&(t[o]=t[u]=r[o]),e.patchEventPrototype=$o,e.patchEventTarget=Ko,e.ObjectDefineProperty=on,e.ObjectGetOwnPropertyDescriptor=Ke,e.ObjectCreate=Vo,e.ArraySlice=Zo,e.patchClass=Qe,e.wrapWithCurrentZone=ln,e.filterProperties=uo,e.attachOriginToPatched=ie,e._redefineProperty=Object.defineProperty,e.patchCallbacks=sa,e.getGlobalObjects=()=>({globalSources:so,zoneSymbolEventNames:Dt,eventNames:n,isBrowser:pn,isMix:oo,isNode:Ti,TRUE_STR:Jt,FALSE_STR:te,ZONE_SYMBOL_PREFIX:$e,ADD_EVENT_LISTENER_STR:sn,REMOVE_EVENT_LISTENER_STR:cn})})}function la(i){oa(i),aa(i),ca(i)}var ho=Ho();la(ho);ra(ho);var Mi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"max-w-screen-2xl","mx-auto","px-4","mt-32"],[1,"flex","flex-col","items-center","py-16","justify-center","mt-20","rounded-2xl","shadow-xl","relative"],["src","../images/hero1.jpg","alt","ski resort image",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-2xl"],[1,"flex","flex-col","p-8","rounded-2xl","items-center","relative"],[1,"my-6","font-extrabold","text-white","text-6xl"],["routerLink","/shop",1,"bg-linear-to-r","from-blue-600","to-cyan-500","font-semibold","text-2xl","text-white","rounded-2xl","px-8","py-4","border-2","border-transparent","mt-8","cursor-pointer"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1),q(2,"img",2),m(3,"div",3)(4,"h1",4),_(5,"Welcome to SkiNet!"),d(),m(6,"button",5),_(7," Go to shop "),d()()()())},dependencies:[Gt],encapsulation:2})};var le=class i{baseUrl=Le.apiUrl;http=p(ui);types=[];brands=[];getProducts(r){let t=new ar;return r.brands.length>0&&(t=t.append("brands",r.brands.join(","))),r.types.length>0&&(t=t.append("types",r.types.join(","))),r.sort&&(t=t.append("sort",r.sort)),r.search&&(t=t.append("search",r.search)),t=t.append("pageSize",r.pageSize),t=t.append("pageIndex",r.pageNumber),this.http.get(this.baseUrl+"products",{params:t})}getProduct(r){return this.http.get(this.baseUrl+"products/"+r)}getBrands(){return this.brands.length>0?this.brands:this.http.get(this.baseUrl+"products/brands").subscribe({next:r=>this.brands=r})}getTypes(){return this.types.length>0?this.types:this.http.get(this.baseUrl+"products/types").subscribe({next:r=>this.types=r})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=re({token:i,factory:i.\u0275fac,providedIn:"root"})};function ma(i,r){if(i&1){let t=wt();m(0,"mat-card",0),q(1,"img",1),m(2,"mat-card-content",2)(3,"h2",3),_(4),d(),m(5,"p",4),_(6),Pe(7,"currency"),d()(),m(8,"mat-card-actions",5),X("click",function(n){return n.stopPropagation()}),m(9,"button",6),X("click",function(){ct(t);let n=O();return lt(n.cartService.addItemToCart(n.product))}),m(10,"mat-icon"),_(11,"add_shopping_cart"),d(),_(12," Add to cart "),d()()()}if(i&2){let t=O();Z("routerLink",De("/shop/",t.product.id)),b(),Z("src",se(t.product.pictureUrl),Te)("alt",De("image of ",t.product.name)),b(3),mt(t.product.name),b(2),mt(Re(7,8,t.product.price))}}var Si=class i{product;cartService=p(St);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card",3,"routerLink"],[1,"rounded-t-lg",3,"src","alt"],[1,"mt-2"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"]],template:function(t,e){t&1&&it(0,ma,13,10,"mat-card",0),t&2&&nt(e.product?0:-1)},dependencies:[hi,hr,gr,Ne,vt,Gt,Oe],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0003;cursor:pointer}"]})};var Ve=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=Tt(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=Tt(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(bt("aria-orientation",n.vertical?"vertical":"horizontal"),ft("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})();var pa=["*"],ua=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,ha=["unscopedContent"];var ga=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],fa=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function _a(i,r){i&1&&Nt(0,4)}function ba(i,r){if(i&1&&(m(0,"div",11),q(1,"input",12),m(2,"div",13),oi(),m(3,"svg",14),q(4,"path",15),d(),Bn(),q(5,"div",16),d()()),i&2){let t=O();ft("mdc-checkbox--disabled",t.disabled),b(),Z("checked",t.selected)("disabled",t.disabled)}}function va(i,r){if(i&1&&(m(0,"div",17),q(1,"input",18),m(2,"div",19),q(3,"div",20)(4,"div",21),d()()),i&2){let t=O();ft("mdc-radio--disabled",t.disabled),b(),Z("checked",t.selected)("disabled",t.disabled)}}function ya(i,r){}function xa(i,r){if(i&1&&(m(0,"span",4),Vt(1,ya,0,0,"ng-template",6),d()),i&2){O();let t=zt(3);b(),Z("ngTemplateOutlet",t)}}function ka(i,r){}function wa(i,r){if(i&1&&(m(0,"span",5),Vt(1,ka,0,0,"ng-template",6),d()),i&2){O();let t=zt(5);b(),Z("ngTemplateOutlet",t)}}function Ca(i,r){}function Ea(i,r){if(i&1&&Vt(0,Ca,0,0,"ng-template",6),i&2){O();let t=zt(1);Z("ngTemplateOutlet",t)}}function Ta(i,r){}function Ma(i,r){if(i&1&&(m(0,"span",9),Vt(1,Ta,0,0,"ng-template",6),d()),i&2){O();let t=zt(3);b(),Z("ngTemplateOutlet",t)}}function Sa(i,r){}function Ia(i,r){if(i&1&&(m(0,"span",9),Vt(1,Sa,0,0,"ng-template",6),d()),i&2){O();let t=zt(5);b(),Z("ngTemplateOutlet",t)}}function Da(i,r){}function Pa(i,r){if(i&1&&Vt(0,Da,0,0,"ng-template",6),i&2){O();let t=zt(1);Z("ngTemplateOutlet",t)}}var fo=new xt("ListOption"),Ra=(()=>{class i{_elementRef=p(kt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Aa=(()=>{class i{_elementRef=p(kt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})();var _o=(()=>{class i{_listOption=p(fo,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,hostVars:4,hostBindings:function(e,n){e&2&&ft("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Oa=(()=>{class i extends _o{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ai(i)))(n||i)}})();static \u0275dir=gt({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[he]})}return i})(),La=(()=>{class i extends _o{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ai(i)))(n||i)}})();static \u0275dir=gt({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[he]})}return i})(),Fa=new xt("MAT_LIST_CONFIG"),un=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Tt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Tt(t))}_disabled=Ee(!1);_defaultOptions=p(Fa,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,hostVars:1,hostBindings:function(e,n){e&2&&bt("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),go=(()=>{class i{_elementRef=p(kt);_ngZone=p(Ft);_listBase=p(un,{optional:!0});_platform=p(vr);_hostElement;_isButtonElement;_noopAnimations=ye();_avatars;_icons;set lines(t){this._explicitLines=yr(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Tt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Tt(t))}_disabled=Ee(!1);_subscriptions=new ke;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p(Fe).load(bi);let t=p(Mr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Tr(this,this._ngZone,this._hostElement,this._platform,p(oe)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ce(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,contentQueries:function(e,n,o){if(e&1&&Ie(o,Oa,4)(o,La,4),e&2){let u;Ct(u=Et())&&(n._avatars=u),Ct(u=Et())&&(n._icons=u)}},hostVars:4,hostBindings:function(e,n){e&2&&(bt("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),ft("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var bo=new xt("SelectionList"),Je=(()=>{class i extends go{_selectionList=p(bo);_changeDetectorRef=p($t);_lines;_titles;_unscopedContent;selectedChange=new Kt;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(t){this.togglePosition=t}get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=Tt(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(n=>t.compareWith(this._value,n))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected("icons",t)||this._hasProjected("avatars",t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute("tabindex",t+"")}_hasBothLeadingAndTrailing(){let t=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),e=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return t&&e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ai(i)))(n||i)}})();static \u0275cmp=V({type:i,selectors:[["mat-list-option"]],contentQueries:function(e,n,o){if(e&1&&Ie(o,Aa,5)(o,Ra,5),e&2){let u;Ct(u=Et())&&(n._lines=u),Ct(u=Et())&&(n._titles=u)}},viewQuery:function(e,n){if(e&1&&mi(ha,5),e&2){let o;Ct(o=Et())&&(n._unscopedContent=o.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(e,n){e&1&&X("blur",function(){return n._handleBlur()})("click",function(){return n._toggleOnInteraction()}),e&2&&(bt("aria-selected",n.selected),ft("mdc-list-item--selected",n.selected&&!n._selectionList.multiple&&n._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",n._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",n._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",n._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",n._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",n._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",n._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",n._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",n._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("mat-accent",n.color!=="primary"&&n.color!=="warn")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[Ye([{provide:go,useExisting:i},{provide:fo,useExisting:i}]),he],ngContentSelectors:fa,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(e,n){e&1&&(Se(ga),Vt(0,_a,1,0,"ng-template",null,0,pi)(2,ba,6,4,"ng-template",null,1,pi)(4,va,5,4,"ng-template",null,2,pi),it(6,xa,2,1,"span",4)(7,wa,2,1,"span",5),it(8,Ea,1,1,null,6),m(9,"span",7),Nt(10),Nt(11,1),m(12,"span",8,3),X("cdkObserveContent",function(){return n._updateItemLines(!0)}),Nt(14,2),d()(),it(15,Ma,2,1,"span",9)(16,Ia,2,1,"span",9),it(17,Pa,1,1,null,6),Nt(18,3),q(19,"div",10)),e&2&&(b(6),nt(n._hasCheckboxAt("before")?6:n._hasRadioAt("before")?7:-1),b(2),nt(n._hasIconsOrAvatarsAt("before")?8:-1),b(7),nt(n._hasCheckboxAt("after")?15:n._hasRadioAt("after")?16:-1),b(2),nt(n._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[nr,kr],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Na={provide:Nr,useExisting:Nn(()=>ti),multi:!0},hn=class{source;options;constructor(r,t){this.source=r,this.options=t}},ti=(()=>{class i extends un{_element=p(kt);_ngZone=p(Ft);_renderer=p(ae);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new we;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new Kt;color="accent";compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=Tt(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new $i(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=Tt(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new $i(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=p($t);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,n=t.disableRipple,o=t.hideSingleSelectionIndicator;(n&&!n.firstChange||e&&!e.firstChange||o&&!o.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new hn(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(Tt(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=Ee(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Ge(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let n=this.options.find(o=>o.selected?!1:this.compareWith(o.value,e));n&&n._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let n=[];return this.options.forEach(o=>{(!e||!o.disabled)&&o._setSelected(t)&&n.push(o)}),n.length&&this._reportValueChange(),n}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&gi(t,"ctrlKey","metaKey")){let n=this.options.some(o=>!o.disabled&&!o.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(n,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{if(this.disabled)return;let e=this._items.toArray().findIndex(n=>n._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new fi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(Ge(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,n)=>e._setTabindex(n===t?0:-1)),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=br();return t&&this._element.nativeElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-selection-list"]],contentQueries:function(e,n,o){if(e&1&&Ie(o,Je,5),e&2){let u;Ct(u=Et())&&(n._items=u)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(e,n){e&1&&X("keydown",function(u){return n._handleKeydown(u)}),e&2&&bt("aria-multiselectable",n.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[Ye([Na,{provide:un,useExisting:i},{provide:bo,useExisting:i}]),he,Zn],ngContentSelectors:pa,decls:1,vars:0,template:function(e,n){e&1&&(Se(),Nt(0))},styles:[ua],encapsulation:2,changeDetection:0})}return i})();function za(i,r){if(i&1&&(m(0,"mat-list-option",5),_(1),d()),i&2){let t=r.$implicit;Z("value",t),b(),mt(t)}}function Ba(i,r){if(i&1&&(m(0,"mat-list-option",5),_(1),d()),i&2){let t=r.$implicit;Z("value",t),b(),mt(t)}}var Pi=class i{shopService=p(le);dialogRef=p(Or);data=p(Lr);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({selectedBrands:this.selectedBrands,selectedTypes:this.selectedTypes})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-filters-dialog"]],decls:20,vars:4,consts:[[1,"text-3xl","text-center","pt-6","mb-3"],[1,"flex","p-4"],[1,"w-1/2"],[1,"font-semibold","text-xl","text-primary"],[3,"ngModelChange","ngModel","multiple"],[3,"value"],[1,"flex","justify-end","p-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&(m(0,"div")(1,"h3",0),_(2,"Filters"),d(),q(3,"mat-divider"),m(4,"div",1)(5,"div",2)(6,"h4",3),_(7,"Brands"),d(),m(8,"mat-selection-list",4),ve("ngModelChange",function(o){return be(e.selectedBrands,o)||(e.selectedBrands=o),o}),Zt(9,za,2,2,"mat-list-option",5,ge),d()(),m(11,"div",2)(12,"h4",3),_(13,"Types"),d(),m(14,"mat-selection-list",4),ve("ngModelChange",function(o){return be(e.selectedTypes,o)||(e.selectedTypes=o),o}),Zt(15,Ba,2,2,"mat-list-option",5,ge),d()()(),m(17,"div",6)(18,"button",7),X("click",function(){return e.applyFilters()}),_(19,"Apply Filters"),d()()()),t&2&&(b(8),_e("ngModel",e.selectedBrands),Z("multiple",!0),b(),Ut(e.shopService.brands),b(5),_e("ngModel",e.selectedTypes),Z("multiple",!0),b(),Ut(e.shopService.types))},dependencies:[Ve,ti,Je,Mt,je,ze,Be],encapsulation:2})};var Za=["mat-menu-item",""],Ua=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Xa=["mat-icon, [matMenuItemIcon]","*"];function qa(i,r){i&1&&(oi(),m(0,"svg",2),q(1,"polygon",3),d())}var Ga=["*"];function Wa(i,r){if(i&1){let t=wt();fe(0,"div",0),Jn("click",function(){ct(t);let n=O();return lt(n.closed.emit("click"))})("animationstart",function(n){ct(t);let o=O();return lt(o._onAnimationStart(n.animationName))})("animationend",function(n){ct(t);let o=O();return lt(o._onAnimationDone(n.animationName))})("animationcancel",function(n){ct(t);let o=O();return lt(o._onAnimationDone(n.animationName))}),fe(1,"div",1),Nt(2),Me()()}if(i&2){let t=O();di(t._classList),ft("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),$n("id",t.panelId),bt("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var bn=new xt("MAT_MENU_PANEL"),ei=(()=>{class i{_elementRef=p(kt);_document=p(ue);_focusMonitor=p(Ki);_parentMenu=p(bn,{optional:!0});_changeDetectorRef=p($t);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new we;_focused=new we;_highlighted=!1;_triggersSubmenu=!1;constructor(){p(Fe).load(bi),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,n){e&1&&X("click",function(u){return n._checkDisabled(u)})("mouseenter",function(){return n._handleMouseEnter()}),e&2&&(bt("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),ft("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Xt],disableRipple:[2,"disableRipple","disableRipple",Xt]},exportAs:["matMenuItem"],attrs:Za,ngContentSelectors:Xa,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){e&1&&(Se(Ua),Nt(0),m(1,"span",0),Nt(2,1),d(),q(3,"div",1),it(4,qa,2,0,":svg:svg",2)),e&2&&(b(3),Z("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),b(),nt(n._triggersSubmenu?4:-1))},dependencies:[Sr],encapsulation:2,changeDetection:0})}return i})();var Ya=new xt("MatMenuContent");var Qa=new xt("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),_n="_mat-menu-enter",Ri="_mat-menu-exit",me=(()=>{class i{_elementRef=p(kt);_changeDetectorRef=p($t);_injector=p(oe);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ye();_allItems;_directDescendantItems=new Un;_classList={};_panelAnimationState="void";_animationDone=new we;_isAnimating=Ee(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,n=Gi({},this._classList);e&&e.length&&e.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Kt;close=this.closed;panelId=p(_i).getId("mat-menu-panel-");constructor(){let t=p(Qa);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new fi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ri(this._directDescendantItems),Wi(t=>Ce(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let n=t.toArray(),o=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[o]&&!n[o].disabled?e.setActiveItem(o):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ri(this._directDescendantItems),Wi(e=>Ce(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:gi(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Gn(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=En(Gi({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Ri;(e||t===_n)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===_n||t===Ri)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ri),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?_n:Ri)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ri(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-menu"]],contentQueries:function(e,n,o){if(e&1&&Ie(o,Ya,5)(o,ei,5)(o,ei,4),e&2){let u;Ct(u=Et())&&(n.lazyContent=u.first),Ct(u=Et())&&(n._allItems=u),Ct(u=Et())&&(n.items=u)}},viewQuery:function(e,n){if(e&1&&mi(si,5),e&2){let o;Ct(o=Et())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(e,n){e&2&&bt("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Xt],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Xt(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ye([{provide:bn,useExisting:i}])],ngContentSelectors:Ga,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,n){e&1&&(Se(),Qn(0,Wa,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Ka=new xt("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=p(oe);return()=>Dr(i)}});var Ze=new WeakMap,$a=(()=>{class i{_canHaveBackdrop;_element=p(kt);_viewContainerRef=p(li);_menuItemInstance=p(ei,{optional:!0,self:!0});_dir=p(ur,{optional:!0});_focusMonitor=p(Ki);_ngZone=p(Ft);_injector=p(oe);_scrollStrategy=p(Ka);_changeDetectorRef=p($t);_animationsDisabled=ye();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ke.EMPTY;_menuCloseSubscription=ke.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=p(bn,{optional:!0});this._parentMaterialMenu=e instanceof me?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Ze.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=Ze.get(e);Ze.set(e,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(e),u=o.getConfig(),v=u.positionStrategy;this._setPosition(e,v),this._canHaveBackdrop?u.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:u.hasBackdrop=e.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof me&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Ge(e.close)).subscribe(()=>{v.withLockedPosition(!1).reapplyLastPosition(),v.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof me&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Rn(1)).subscribe(()=>{e.detach(),Ze.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Ze.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Ar(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof me&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Pr({positionStrategy:Rr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",u=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(o,u)})})}_setPosition(t,e){let[n,o]=t.xPosition==="before"?["end","start"]:["start","end"],[u,v]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[w,D]=[u,v],[x,I]=[n,o],L=0;if(this._triggersSubmenu()){if(I=n=t.xPosition==="before"?"start":"end",o=x=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let j=this._parentMaterialMenu.items.first;this._parentInnerPadding=j?j._getHostElement().offsetTop:0}L=u==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(w=u==="top"?"bottom":"top",D=v==="top"?"bottom":"top");e.withPositions([{originX:n,originY:w,overlayX:x,overlayY:u,offsetY:L},{originX:o,originY:w,overlayX:I,overlayY:u,offsetY:L},{originX:n,originY:D,overlayX:x,overlayY:v,offsetY:-L},{originX:o,originY:D,overlayX:I,overlayY:v,offsetY:-L}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:qe(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Dn(u=>this._menuOpen&&u!==this._menuItemInstance)):qe();return Ce(t,n,o,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Ir(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Ze.get(t)===this}_triggerIsAriaDisabled(){return Xt(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){ci()};static \u0275dir=gt({type:i})}return i})(),Ai=(()=>{class i extends $a{_cleanupTouchstart;_hoverSubscription=ke.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Kt;onMenuOpen=this.menuOpened;menuClosed=new Kt;onMenuClose=this.menuClosed;constructor(){super(!0);let t=p(ae);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{_r(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){fr(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,n){e&1&&X("click",function(u){return n._handleClick(u)})("mousedown",function(u){return n._handleMousedown(u)})("keydown",function(u){return n._handleKeydown(u)}),e&2&&bt("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[he]})}return i})();var ii=class{brands=[];types=[];sort="name";pageNumber=1;pageSize=10;search=""};var de=class i{loading=!1;busyRequestCount=0;busy(){this.busyRequestCount++,this.loading=!0}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading=!1)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=re({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ja(i,r){if(i&1){let t=wt();m(0,"div",0)(1,"div",1)(2,"mat-icon",2),_(3),d(),m(4,"p",3),_(5),d(),m(6,"button",4),X("click",function(){ct(t);let n=O();return lt(n.onAction())}),_(7),d()()()}if(i&2){let t=O();b(3),mt(t.icon()),b(2),mt(t.message()),b(2),mt(t.actionText())}}var Ue=class i{busyService=p(de);message=Ae.required();icon=Ae.required();actionText=Ae.required();action=er();onAction(){this.action.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-empty-state"]],inputs:{message:[1,"message"],icon:[1,"icon"],actionText:[1,"actionText"]},outputs:{action:"action"},decls:1,vars:1,consts:[[1,"max-w-7xl","mx-auto","mt-32","px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","py-12","w-full"],[1,"icon-display","mb-8"],[1,"text-gray-600","text-lg","font-semibold","mb-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&it(0,Ja,8,3,"div",0),t&2&&nt(e.busyService.busyRequestCount===0?0:-1)},dependencies:[vt,Mt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var ts=(i,r)=>r.id;function es(i,r){if(i&1&&q(0,"app-product-item",13),i&2){let t=r.$implicit;Z("product",t)}}function is(i,r){if(i&1&&(m(0,"mat-list-option",15),_(1),d()),i&2){let t=r.$implicit,e=O(2);Z("value",t.value)("selected",e.shopParams.sort===t.value),b(),Bt(" ",t.name," ")}}function ns(i,r){if(i&1){let t=wt();m(0,"div",3)(1,"div",4)(2,"mat-paginator",5),X("page",function(n){ct(t);let o=O();return lt(o.handlePageEvent(n))}),d(),m(3,"form",6,0),X("ngSubmit",function(){ct(t);let n=O();return lt(n.onSearchChange())}),m(5,"input",7),ve("ngModelChange",function(n){ct(t);let o=O();return be(o.shopParams.search,n)||(o.shopParams.search=n),lt(n)}),d(),m(6,"button",8)(7,"mat-icon"),_(8,"search"),d()()(),m(9,"div",9)(10,"button",10),X("click",function(){ct(t);let n=O();return lt(n.openFiltersDialog())}),m(11,"mat-icon"),_(12,"filter_list"),d(),_(13," Filters "),d(),m(14,"button",11)(15,"mat-icon"),_(16,"swap_vert"),d(),_(17," Sort "),d()()(),m(18,"div",12),Zt(19,es,1,1,"app-product-item",13,ts),d()(),m(21,"mat-menu",null,1)(23,"mat-selection-list",14),X("selectionChange",function(n){ct(t);let o=O();return lt(o.onSortChange(n))}),Zt(24,is,2,3,"mat-list-option",15,ge),d()()}if(i&2){let t=zt(22),e=O();b(2),Z("length",e.products.count)("pageSize",e.shopParams.pageSize)("showFirstLastButtons",!0)("pageSizeOptions",e.pageSizeOptions)("pageIndex",e.shopParams.pageNumber-1),b(3),_e("ngModel",e.shopParams.search),b(9),Z("matMenuTriggerFor",t),b(5),Ut(e.products.data),b(4),Z("multiple",!1),b(),Ut(e.sortOptions)}}function rs(i,r){if(i&1){let t=wt();m(0,"app-empty-state",16),X("action",function(){ct(t);let n=O();return lt(n.resetFilters())}),d()}}var Oi=class i{shopService=p(le);dialogService=p(Fr);products;sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low-High",value:"priceAsc"},{name:"Price: High-Low",value:"priceDesc"}];shopParams=new ii;pageSizeOptions=[5,10,15,20];ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}resetFilters(){this.shopParams=new ii,this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:r=>this.products=r,error:r=>console.log(r)})}onSearchChange(){this.shopParams.pageNumber=1,this.getProducts()}handlePageEvent(r){this.shopParams.pageNumber=r.pageIndex+1,this.shopParams.pageSize=r.pageSize,this.getProducts()}onSortChange(r){let t=r.options[0];t&&(this.shopParams.sort=t.value,this.shopParams.pageNumber=1,this.getProducts())}openFiltersDialog(){this.dialogService.open(Pi,{minWidth:"500px",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:t=>{t&&(this.shopParams.brands=t.selectedBrands,this.shopParams.types=t.selectedTypes,this.shopParams.pageNumber=1,this.getProducts())}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-shop"]],decls:2,vars:1,consts:[["searchForm","ngForm"],["sortMenu","matMenu"],["message","No products match this filter","icon","filter_alt_off","actionText","Reset filters"],[1,"flex","flex-col","gap-3"],[1,"flex","justify-between"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex"],[1,"relative","flex","items-center","w-full","max-w-md","mx-4",3,"ngSubmit"],["type","search","placeholder","Search","name","search",1,"block","w-full","p-4","text-sm","text-gray-900","border-gray-300","rounded-lg",3,"ngModelChange","ngModel"],["mat-icon-button","","type","submit",1,"absolute","inset-y-0","right-8","top-2","flex","items-center","pl-3"],[1,"flex","gap-3"],["mat-stroked-button","",1,"match-input-height",3,"click"],["mat-stroked-button","",1,"match-input-height",3,"matMenuTriggerFor"],[1,"grid","grid-cols-5","gap-4"],[3,"product"],[3,"selectionChange","multiple"],[3,"value","selected"],["message","No products match this filter","icon","filter_alt_off","actionText","Reset filters",3,"action"]],template:function(t,e){t&1&&it(0,ns,26,8)(1,rs,1,0,"app-empty-state",2),t&2&&nt(e.products&&e.products.count>0?0:1)},dependencies:[Si,Mt,vt,me,ti,Je,Ai,Xr,je,jr,yi,ze,zr,Be,Br,vi,Ue],encapsulation:2})};function os(i,r){if(i&1){let t=wt();m(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),q(4,"img",4),d(),m(5,"div")(6,"h1",5),_(7),d(),m(8,"p"),_(9),d(),m(10,"div",6)(11,"p",7),_(12),Pe(13,"currency"),d()(),m(14,"div",8)(15,"button",9),X("click",function(){ct(t);let n=O();return lt(n.updateCart())}),m(16,"mat-icon"),_(17,"shopping_cart"),d(),_(18),d(),m(19,"mat-form-field",10)(20,"mat-label"),_(21,"Quantity"),d(),m(22,"input",11),ve("ngModelChange",function(n){ct(t);let o=O();return be(o.quantity,n)||(o.quantity=n),lt(n)}),d()()(),q(23,"mat-divider"),m(24,"p",12),_(25),d()()()()()}if(i&2){let t=O();b(4),Z("src",se(t.product.pictureUrl),Te),b(3),mt(t.product.name),b(2),Bt("You have ",t.quantityInCart," of this item in your cart"),b(3),Bt(" ",Re(13,9,t.product.price)," "),b(3),Z("disabled",t.quantity==t.quantityInCart),b(3),Bt(" ",t.getButtonText()," "),b(4),_e("ngModel",t.quantity),b(3),Bt(" ",t.product.description," ")}}var Li=class i{shopService=p(le);activatedRoute=p(lr);cartService=p(St);product;quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let r=this.activatedRoute.snapshot.paramMap.get("id");r&&this.shopService.getProduct(+r).subscribe({next:t=>{this.product=t,this.updateQuantityInCart()},error:t=>console.log(t)})}updateCart(){if(this.product)if(this.quantity>this.quantityInCart){let r=this.quantity-this.quantityInCart;this.quantityInCart+=r,this.cartService.addItemToCart(this.product,r)}else{let r=this.quantityInCart-this.quantity;this.quantityInCart-=r,this.cartService.removeItemFromCart(this.product.id,r)}}updateQuantityInCart(){this.quantityInCart=this.cartService.cart()?.items.find(r=>r.productId===this.product?.id)?.quantity||0,this.quantity=this.quantityInCart||1}getButtonText(){return this.quantityInCart>0?"Update cart":"Add to cart"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-screen-2xl","px-4","mx-auto"],[1,"grid","grid-cols-2","gap-8"],[1,"max-w-xl","mx-auto"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","gap-4","mt-6"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"],["appearance","outline",1,"flex"],["matInput","","min","0","type","number",3,"ngModelChange","ngModel"],[1,"mt-6","text-gray-500"]],template:function(t,e){t&1&&it(0,os,26,11,"section",0),t&2&&nt(e.product?0:-1)},dependencies:[Ne,vt,Ur,Zr,Ve,qr,je,yi,Hr,ze,Vr,Be,Oe],encapsulation:2})};function as(i,r){if(i&1&&(m(0,"li",4),_(1),d()),i&2){let t=r.$implicit;b(),mt(t)}}function ss(i,r){if(i&1&&(m(0,"div",2)(1,"ul",3),Zt(2,as,2,1,"li",4,ge),d()()),i&2){let t=O();b(2),Ut(t.validationErrors)}}var Fi=class i{baseUrl=Le.apiUrl;http=p(ui);validationErrors;get404Error(){this.http.get(this.baseUrl+"buggy/notfound").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get401Error(){this.http.get(this.baseUrl+"buggy/unauthorized").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get500Error(){this.http.get(this.baseUrl+"buggy/internalerror").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400ValidationError(){this.http.post(this.baseUrl+"buggy/validationerror",{}).subscribe({next:r=>console.log(r),error:r=>this.validationErrors=r})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-test-error"]],decls:12,vars:1,consts:[[1,"mt-5","flex","justify-center","gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","max-w-lg","mt-5","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"button",1),X("click",function(){return e.get500Error()}),_(2,"Test 500 error"),d(),m(3,"button",1),X("click",function(){return e.get404Error()}),_(4,"Test 404 error"),d(),m(5,"button",1),X("click",function(){return e.get400Error()}),_(6,"Test 400 error"),d(),m(7,"button",1),X("click",function(){return e.get401Error()}),_(8,"Test 401 error"),d(),m(9,"button",1),X("click",function(){return e.get400ValidationError()}),_(10,"Test validation error"),d()(),it(11,ss,4,0,"div",2)),t&2&&(b(11),nt(e.validationErrors?11:-1))},dependencies:[Mt],encapsulation:2})};var Ni=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","items-center","justify-center","min-h-96","bg-gray-100"],[1,"text-center"],[1,"text-purple-700!","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-4"],[1,"text-lg","text-gray-600","mt-2"],["routerLink","/shop","mat-flat-button","",1,"mt-4"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1)(2,"mat-icon",2),_(3,"error_outline"),d(),m(4,"h1",3),_(5,"404"),d(),m(6,"p",4),_(7,"Page not found"),d(),m(8,"button",5),_(9,"Back to shop"),d()()())},dependencies:[vt,Gt,Ne],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};function cs(i,r){if(i&1&&(m(0,"h5",2),_(1),d(),m(2,"p",3),_(3,"This error comes from the server, not Angular"),d(),m(4,"p",4),_(5,"What to do next?"),d(),m(6,"ol",5)(7,"li",6),_(8,"Check the network tab in chrome dev tools"),d(),m(9,"li",6),_(10," Reproduce the error in postman. If same error, don't waste time troubleshooting angular code "),d()(),m(11,"h5",7),_(12,"Stack trace"),d(),m(13,"mat-card",8)(14,"code",9),_(15),d()()),i&2){let t=O();b(),Bt("Error: ",t.error.message),b(14),mt(t.error.details)}}var zi=class i{constructor(r){this.router=r;let t=this.router.currentNavigation();this.error=t?.extras.state?.error}error;static \u0275fac=function(t){return new(t||i)(Yn(qt))};static \u0275cmp=V({type:i,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"container","mt-5","p-4","bg-gray-100","rounded","shadow-lg"],[1,"text-2xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold","mb-2"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"h1",1),_(2,"Internal server error"),d(),it(3,cs,16,2),d()),t&2&&(b(3),nt(e.error?3:-1))},dependencies:[hi],encapsulation:2})};var Bi=class i{item=Ae.required();cartService=p(St);incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-cart-item"]],inputs:{item:[1,"item"]},decls:26,vars:11,consts:[[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","items-center","justify-between","gap-6"],[1,"shrink","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20",3,"src"],[1,"flex","items-center","justify-between","order-3"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","order-4","w-32"],[1,"font-bold","text-xl"],[1,"w-full","flex","flex-col","items-start","flex-1","space-y-4","order-2","max-w-md"],[1,"font-medium",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!",3,"click"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1)(2,"a",2),q(3,"img",3),d(),m(4,"div",4)(5,"div",5)(6,"button",6),X("click",function(){return e.decrementQuantity()}),m(7,"mat-icon",7),_(8,"remove"),d()(),m(9,"div",8),_(10),d(),m(11,"button",6),X("click",function(){return e.incrementQuantity()}),m(12,"mat-icon",9),_(13,"add"),d()()(),m(14,"div",10)(15,"p",11),_(16),Pe(17,"currency"),d()()(),m(18,"div",12)(19,"a",13),_(20),d(),m(21,"div",14)(22,"button",15),X("click",function(){return e.removeItemFromCart()}),m(23,"mat-icon"),_(24,"delete"),d(),_(25," Delete "),d()()()()()),t&2&&(b(2),Z("routerLink",De("/shop/",e.item().productId)),b(),Z("src",se(e.item().pictureUrl),Te),b(7),mt(e.item().quantity),b(6),mt(Re(17,9,e.item().price)),b(3),Z("routerLink",De("/shop/",e.item().productId)),b(),Bt(" ",e.item().productName," "))},dependencies:[Gt,Mt,vt,vi,Oe],encapsulation:2})};var ls=(i,r)=>r.productId;function ms(i,r){if(i&1&&q(0,"app-cart-item",3),i&2){let t=r.$implicit;Z("item",t)}}function ds(i,r){if(i&1&&(m(0,"div",0)(1,"div",2),Zt(2,ms,1,1,"app-cart-item",3,ls),d(),m(4,"div",4),q(5,"app-order-summary"),d()()),i&2){let t,e=O();b(2),Ut((t=e.cartService.cart())==null?null:t.items)}}function ps(i,r){if(i&1){let t=wt();m(0,"app-empty-state",5),X("action",function(){ct(t);let n=O();return lt(n.onAction())}),d()}}var ji=class i{router=p(qt);cartService=p(St);onAction(){this.router.navigateByUrl("/shop")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"flex","w-full","items-start","gap-6","mt-32"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop"],[1,"w-3/4"],[3,"item"],[1,"w-1/4"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop",3,"action"]],template:function(t,e){if(t&1&&(m(0,"section"),it(1,ds,6,0,"div",0)(2,ps,1,0,"app-empty-state",1),d()),t&2){let n;b(),nt(((n=e.cartService.cart())==null||n.items==null?null:n.items.length)>0?1:2)}},dependencies:[Bi,Wr,Ue],encapsulation:2})};var ko=(i,r)=>{let t=p(ce),e=p(qt),n=p(xi);return t.isAdmin()?!0:(n.error("Nope"),e.navigateByUrl("/shop"),!1)};var wo=[{path:"",component:Mi},{path:"shop",component:Oi},{path:"shop/:id",component:Li},{path:"cart",component:ji},{path:"checkout",loadChildren:()=>import("./chunk-NLCBOEMJ.js").then(i=>i.checkoutRoutes)},{path:"orders",loadChildren:()=>import("./chunk-AIN4W4TP.js").then(i=>i.orderRoutes)},{path:"account",loadChildren:()=>import("./chunk-6DBKBTF4.js").then(i=>i.accountRoutes)},{path:"test-error",component:Fi},{path:"not-found",component:Ni},{path:"server-error",component:zi},{path:"admin",loadChildren:()=>import("./chunk-YXQKOJZ6.js").then(i=>i.AdminComponent),canActivate:[Yr,ko]},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var us="@",hs=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=p(oe);loadingSchedulerFn=p(gs,{optional:!0});_engine;constructor(t,e,n,o,u){this.doc=t,this.delegate=e,this.zone=n,this.animationType=o,this.moduleImpl=u}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-QZYIIGDR.js").then(n=>n),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(n=>{throw new Fn(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:o})=>{this._engine=n(this.animationType,this.doc);let u=new o(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(t,e){let n=this.delegate.createRenderer(t,e);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let o=new vn(n);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let v=u.createRenderer(t,e);o.use(v),this.scheduler??=this.injector.get(Hn,null,{optional:!0}),this.scheduler?.notify(10)}).catch(u=>{o.use(n)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(e){ci()};static \u0275prov=re({token:i,factory:i.\u0275fac})}return i})(),vn=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let t of this.replay)t(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,t){return this.delegate.createElement(r,t)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,t){this.delegate.appendChild(r,t)}insertBefore(r,t,e,n){this.delegate.insertBefore(r,t,e,n)}removeChild(r,t,e,n){this.delegate.removeChild(r,t,e,n)}selectRootElement(r,t){return this.delegate.selectRootElement(r,t)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,t,e,n){this.delegate.setAttribute(r,t,e,n)}removeAttribute(r,t,e){this.delegate.removeAttribute(r,t,e)}addClass(r,t){this.delegate.addClass(r,t)}removeClass(r,t){this.delegate.removeClass(r,t)}setStyle(r,t,e,n){this.delegate.setStyle(r,t,e,n)}removeStyle(r,t,e){this.delegate.removeStyle(r,t,e)}setProperty(r,t,e){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(r,t,e)),this.delegate.setProperty(r,t,e)}setValue(r,t){this.delegate.setValue(r,t)}listen(r,t,e,n){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(r,t,e,n)),this.delegate.listen(r,t,e,n)}shouldReplay(r){return this.replay!==null&&r.startsWith(us)}},gs=new xt("");function Co(i="animations"){return qn("NgAsyncAnimations"),zn([{provide:Wn,useFactory:()=>new hs(p(ue),p(rr),p(Ft),i)},{provide:Xn,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Eo=(i,r)=>{let t=p(qt),e=p(xi);return r(i).pipe(Pn(n=>{if(n.status===400)if(n.error.errors){let o=[];for(let u in n.error.errors)n.error.errors[u]&&o.push(n.error.errors[u]);throw o.flat()}else e.error(n.error.title||n.error);if(n.status===401&&e.error(n.error.title||n.error),n.status===403&&e.error("Forbidden"),n.status===404&&t.navigateByUrl("/not-found"),n.status===500){let o={state:{error:n.error}};t.navigateByUrl("/server-error",o)}return Mn(()=>n)}))};var To=(i,r)=>{let t=p(de);return t.busy(),r(i).pipe(Le.production?Tn:An(500),On(()=>t.idle()))};var Hi=class i{cartService=p(St);accountService=p(ce);signalrService=p(Gr);init(){let r=localStorage.getItem("cart_id"),t=r?this.cartService.getCart(r):qe(null);return In({cart:t,user:this.accountService.getUserInfo().pipe(Ln(e=>{e&&this.signalrService.createHubConnection()}))})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=re({token:i,factory:i.\u0275fac,providedIn:"root"})};var Mo=(i,r)=>{let t=i.clone({withCredentials:!0});return r(t)};var So={providers:[jn(),pr(wo),ir(),Co(),sr(cr([Eo,To,Mo])),Kn(async()=>{let i=p(Hi);return Sn(i.init()).finally(()=>{let r=document.getElementById("initial-splash");r&&r.remove()})})]};var Io="mat-badge-content",fs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),Do=(()=>{class i{_ngZone=p(Ft);_elementRef=p(kt);_ariaDescriber=p(Cr);_renderer=p(ae);_animationsDisabled=ye();_idGenerator=p(_i);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=p(wr);_document=p(ue);constructor(){let t=p(Fe);t.load(fs),t.load(xr)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Io),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Io}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&ft("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",Xt],disabled:[2,"matBadgeDisabled","disabled",Xt],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",Xt]}})}return i})();function _s(i,r){i&1&&We(0,"div",2)}var bs=new xt("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ro=(()=>{class i{_elementRef=p(kt);_ngZone=p(Ft);_changeDetectorRef=p($t);_renderer=p(ae);_cleanupTransitionEnd;constructor(){let t=Er(),e=p(bs,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=Po(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Po(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Kt;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(e,n){e&2&&(bt("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),di("mat-"+n.color),ft("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Qi],bufferValue:[2,"bufferValue","bufferValue",Qi],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,n){e&1&&(fe(0,"div",0),We(1,"div",1),it(2,_s,1,0,"div",2),Me(),fe(3,"div",3),We(4,"span",4),Me(),fe(5,"div",5),We(6,"span",4),Me()),e&2&&(b(),Yi("flex-basis",n._getBufferBarFlexBasis()),b(),nt(n.mode==="buffer"?2:-1),b(),Yi("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Po(i,r=0,t=100){return Math.max(r,Math.min(t,i))}var Vi=class i{accountService=p(ce);viewContainerRef=p(li);templateRef=p(si);constructor(){Vn(()=>{this.accountService.isAdmin()?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=gt({type:i,selectors:[["","appIsAdmin",""]]})};var vs=()=>({exact:!0});function ys(i,r){i&1&&(m(0,"a",17),_(1,"Admin"),d())}function xs(i,r){if(i&1&&(m(0,"button",11)(1,"mat-icon"),_(2,"arrow_drop_down"),d(),m(3,"span"),_(4),d()()),i&2){let t,e=O(),n=zt(19);Z("matMenuTriggerFor",n),b(4),mt((t=e.accountService.currentUser())==null?null:t.email)}}function ks(i,r){i&1&&(m(0,"button",18),_(1,"Login"),d(),m(2,"button",19),_(3,"Register"),d())}function ws(i,r){i&1&&q(0,"mat-progress-bar",12)}var Zi=class i{busyService=p(de);cartService=p(St);accountService=p(ce);router=p(qt);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl("/")}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-header"]],decls:33,vars:6,consts:[["menu","matMenu"],[1,"shadow-md","p-3","w-full","max-h-20","fixed","top-0","z-50","bg-white"],[1,"flex","align-middle","items-center","justify-between","max-w-screen-2xl","mx-auto"],["routerLink","/","src","/images/logo.png","alt","app logo",1,"max-h-16"],[1,"flex","gap-3","my-2","uppercase","text-2xl"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-error","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],[1,"flex","gap-3","align-middle"],["routerLink","/cart","routerLinkActive","active","matBadgeSize","large",1,"custom-badge","mt-2","mr-2",3,"matBadge"],["mat-button","",3,"matMenuTriggerFor"],["mode","indeterminate",1,"fixed","top-20","z-50"],[1,"px-5"],["mat-menu-item","","routerLink","/cart",1,"px-3"],["mat-menu-item","","routerLink","/orders",1,"px-3"],["mat-menu-item","",1,"px-3",3,"click"],["routerLink","/admin","routerLinkActive","active"],["routerLink","/account/login","mat-stroked-button",""],["routerLink","/account/register","mat-stroked-button",""]],template:function(t,e){t&1&&(m(0,"header",1)(1,"div",2),q(2,"img",3),m(3,"nav",4)(4,"a",5),_(5,"Home"),d(),m(6,"a",6),_(7,"Shop"),d(),m(8,"a",7),_(9,"Errors"),d(),Vt(10,ys,2,0,"a",8),d(),m(11,"div",9)(12,"a",10)(13,"mat-icon"),_(14,"shopping_cart"),d()(),it(15,xs,5,2,"button",11)(16,ks,4,0),d()()(),it(17,ws,1,0,"mat-progress-bar",12),m(18,"mat-menu",13,0)(20,"button",14)(21,"mat-icon"),_(22,"shopping_cart"),d(),_(23," My cart "),d(),m(24,"button",15)(25,"mat-icon"),_(26,"history"),d(),_(27," My orders "),d(),q(28,"mat-divider"),m(29,"button",16),X("click",function(){return e.logout()}),m(30,"mat-icon"),_(31,"logout"),d(),_(32," Logout "),d()()),t&2&&(b(4),Z("routerLinkActiveOptions",tr(5,vs)),b(8),Z("matBadge",se(e.cartService.itemCount())),b(3),nt(e.accountService.currentUser()?15:16),b(2),nt(e.busyService.loading?17:-1))},dependencies:[Do,vt,Mt,Gt,dr,Ro,Ai,me,Ve,ei,Vi],styles:[".custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}a.active[_ngcontent-%COMP%]{color:#7d00fa}"]})};var Ui=class i{title="Skinet";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container","mt-24"]],template:function(t,e){t&1&&(q(0,"app-header"),m(1,"div",0),q(2,"router-outlet"),d())},dependencies:[mr,Zi],encapsulation:2})};or(Ui,So).catch(i=>console.error(i));
