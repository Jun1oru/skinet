import{$ as k,$a as Xt,$b as Je,A as yn,Aa as H,Ab as po,Ac as fi,B as qe,Ba as ui,Bb as ht,Bc as sp,C as Bd,Ca as zh,Cb as pt,Cc as go,D as Xi,Da as Er,Db as D,Dc as va,E as ro,Ea as Vh,Eb as d,Ec as lp,F as oo,Fa as so,Fb as m,Fc as cp,G as Nt,Ga as lo,Gb as R,Gc as Me,H as Th,Ha as co,Hb as tt,Hc as dp,I as zd,Ia as qs,Ib as vt,Ic as U,J as Ki,Ja as uo,Jb as Qt,Jc as Ct,K as Qi,Ka as mo,Kb as Cn,Kc as up,L as Vd,La as jh,Lb as Lt,Lc as Qs,M as jd,Ma as Uh,Mb as Tt,N as Ah,Na as Hh,Nb as wn,O as Ud,Oa as $h,Ob as At,P as Ws,Pa as Gh,Pb as O,Q as bt,Qa as Wh,Qb as Ks,R as Mt,Ra as qh,Rb as M,S as we,Sa as un,Sb as je,T as Rh,Ta as mi,Tb as pe,U as kt,Ua as Zh,Ub as Bt,V as de,Va as p,Vb as nt,W as pa,Wa as ho,Wb as G,X as tn,Xa as Yh,Xb as W,Y as w,Ya as Zs,Yb as Jh,Z as ge,Za as $d,Zb as ep,_ as Oh,_a as It,_b as Zd,a as _,aa as _e,ab as Kt,ac as pi,b as Re,ba as l,bb as Le,bc as $,c as eo,ca as wr,cb as me,cc as zt,da as Ph,db as ga,dc as f,e as xt,ea as Yt,eb as mn,ec as X,f as Eh,fa as xn,fb as Ys,fc as Se,g as Sh,ga as Ze,gb as Xh,gc as tp,h as Nn,ha as Ye,hb as Gd,hc as Mr,i as z,ia as nn,ib as S,ic as Ir,j as bn,ja as Ji,jb as be,jc as Tr,k as ha,ka as ue,kb as F,kc as hn,l as vn,la as ie,lb as Sr,lc as Ln,m as dn,ma as ao,mb as Ee,mc as $e,n as Q,na as Fh,nb as mt,nc as np,o as to,oa as J,ob as Xs,oc as ba,p as Hs,pa as Y,pb as Wd,pc as ip,q as Mh,qa as kr,qb as er,qc as Be,r as Ih,ra as fa,rb as _a,rc as Ue,s as no,sa as Nh,sb as qd,sc as fo,t as ce,ta as Z,tb as Kh,tc as Kn,u as $s,ua as Lh,ub as hi,uc as rp,v as Oi,va as Bh,vb as Qh,vc as Yd,w as Ld,wa as Dr,wb as ee,wc as op,x as Gs,xa as et,xb as V,xc as Ge,y as di,ya as Dt,yb as j,yc as Rt,z as io,za as Hd,zb as Pi,zc as ap}from"./chunk-NSUD3QBI.js";var mp=null;function Bn(){return mp}function Xd(i){mp??=i}var ya=class{},_o=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>l(hp),providedIn:"platform"})}return i})();var hp=(()=>{class i extends _o{_location;_history;_doc=l(ie);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Bn().getBaseHref(this._doc)}onPopState(e){let t=Bn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Bn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function gp(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function pp(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function tr(i){return i&&i[0]!=="?"?`?${i}`:i}var bo=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>l(pv),providedIn:"root"})}return i})(),hv=new k(""),pv=(()=>{class i extends bo{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return gp(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+tr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+tr(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+tr(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(_e(_o),_e(hv,8))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var gi=(()=>{class i{_subject=new z;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=_v(pp(fp(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+tr(t))}normalize(e){return i.stripTrailingSlash(gv(this._basePath,fp(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+tr(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+tr(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=tr;static joinWithSlash=gp;static stripTrailingSlash=pp;static \u0275fac=function(t){return new(t||i)(_e(bo))};static \u0275prov=w({token:i,factory:()=>fv(),providedIn:"root"})}return i})();function fv(){return new gi(_e(bo))}function gv(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function fp(i){return i.replace(/\/index.html$/,"")}function _v(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var yp={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},nu=(function(i){return i[i.Decimal=0]="Decimal",i[i.Percent=1]="Percent",i[i.Currency=2]="Currency",i[i.Scientific=3]="Scientific",i})(nu||{});var rn=(function(i){return i[i.Format=0]="Format",i[i.Standalone=1]="Standalone",i})(rn||{}),it=(function(i){return i[i.Narrow=0]="Narrow",i[i.Abbreviated=1]="Abbreviated",i[i.Wide=2]="Wide",i[i.Short=3]="Short",i})(it||{}),kn=(function(i){return i[i.Short=0]="Short",i[i.Medium=1]="Medium",i[i.Long=2]="Long",i[i.Full=3]="Full",i})(kn||{}),Dn={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function xp(i){return wn(i)[At.LocaleId]}function Cp(i,n,e){let t=wn(i),r=[t[At.DayPeriodsFormat],t[At.DayPeriodsStandalone]],o=zn(r,n);return zn(o,e)}function wp(i,n,e){let t=wn(i),r=[t[At.DaysFormat],t[At.DaysStandalone]],o=zn(r,n);return zn(o,e)}function kp(i,n,e){let t=wn(i),r=[t[At.MonthsFormat],t[At.MonthsStandalone]],o=zn(r,n);return zn(o,e)}function Dp(i,n){let t=wn(i)[At.Eras];return zn(t,n)}function xa(i,n){let e=wn(i);return zn(e[At.DateFormat],n)}function Ca(i,n){let e=wn(i);return zn(e[At.TimeFormat],n)}function wa(i,n){let t=wn(i)[At.DateTimeFormat];return zn(t,n)}function _i(i,n){let e=wn(i),t=e[At.NumberSymbols][n];if(typeof t>"u"){if(n===Dn.CurrencyDecimal)return e[At.NumberSymbols][Dn.Decimal];if(n===Dn.CurrencyGroup)return e[At.NumberSymbols][Dn.Group]}return t}function Ep(i,n){return wn(i)[At.NumberFormats][n]}function vv(i){return wn(i)[At.Currencies]}function Sp(i){if(!i[At.ExtraData])throw new de(2303,!1)}function Mp(i){let n=wn(i);return Sp(n),(n[At.ExtraData][2]||[]).map(t=>typeof t=="string"?Kd(t):[Kd(t[0]),Kd(t[1])])}function Ip(i,n,e){let t=wn(i);Sp(t);let r=[t[At.ExtraData][0],t[At.ExtraData][1]],o=zn(r,n)||[];return zn(o,e)||[]}function zn(i,n){for(let e=n;e>-1;e--)if(typeof i[e]<"u")return i[e];throw new de(2304,!1)}function Kd(i){let[n,e]=i.split(":");return{hours:+n,minutes:+e}}function Tp(i,n,e="en"){let t=vv(e)[i]||yp[i]||[],r=t[1];return n==="narrow"&&typeof r=="string"?r:t[0]||i}var yv=2;function Ap(i){let n,e=yp[i];return e&&(n=e[2]),typeof n=="number"?n:yv}var xv=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Js={},Cv=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Rp(i,n,e,t){let r=Av(i);n=Fi(e,n)||n;let a=[],s;for(;n;)if(s=Cv.exec(n),s){a=a.concat(s.slice(1));let h=a.pop();if(!h)break;n=h}else{a.push(n);break}let c=r.getTimezoneOffset();t&&(c=Pp(t,c),r=Tv(r,t));let u="";return a.forEach(h=>{let g=Mv(h);u+=g?g(r,e,c):h==="''"?"'":h.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function rl(i,n,e){let t=new Date(0);return t.setFullYear(i,n,e),t.setHours(0,0,0),t}function Fi(i,n){let e=xp(i);if(Js[e]??={},Js[e][n])return Js[e][n];let t="";switch(n){case"shortDate":t=xa(i,kn.Short);break;case"mediumDate":t=xa(i,kn.Medium);break;case"longDate":t=xa(i,kn.Long);break;case"fullDate":t=xa(i,kn.Full);break;case"shortTime":t=Ca(i,kn.Short);break;case"mediumTime":t=Ca(i,kn.Medium);break;case"longTime":t=Ca(i,kn.Long);break;case"fullTime":t=Ca(i,kn.Full);break;case"short":let r=Fi(i,"shortTime"),o=Fi(i,"shortDate");t=el(wa(i,kn.Short),[r,o]);break;case"medium":let a=Fi(i,"mediumTime"),s=Fi(i,"mediumDate");t=el(wa(i,kn.Medium),[a,s]);break;case"long":let c=Fi(i,"longTime"),u=Fi(i,"longDate");t=el(wa(i,kn.Long),[c,u]);break;case"full":let h=Fi(i,"fullTime"),g=Fi(i,"fullDate");t=el(wa(i,kn.Full),[h,g]);break}return t&&(Js[e][n]=t),t}function el(i,n){return n&&(i=i.replace(/\{([^}]+)}/g,function(e,t){return n!=null&&t in n?n[t]:e})),i}function Qn(i,n,e="-",t,r){let o="";(i<0||r&&i<=0)&&(r?i=-i+1:(i=-i,o=e));let a=String(i);for(;a.length<n;)a="0"+a;return t&&(a=a.slice(a.length-n)),o+a}function wv(i,n){return Qn(i,3).substring(0,n)}function Vt(i,n,e=0,t=!1,r=!1){return function(o,a){let s=kv(i,o);if((e>0||s>-e)&&(s+=e),i===3)s===0&&e===-12&&(s=12);else if(i===6)return wv(s,n);let c=_i(a,Dn.MinusSign);return Qn(s,n,c,t,r)}}function kv(i,n){switch(i){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new de(2301,!1)}}function ft(i,n,e=rn.Format,t=!1){return function(r,o){return Dv(r,o,i,n,e,t)}}function Dv(i,n,e,t,r,o){switch(e){case 2:return kp(n,r,t)[i.getMonth()];case 1:return wp(n,r,t)[i.getDay()];case 0:let a=i.getHours(),s=i.getMinutes();if(o){let u=Mp(n),h=Ip(n,r,t),g=u.findIndex(E=>{if(Array.isArray(E)){let[I,q]=E,K=a>=I.hours&&s>=I.minutes,te=a<q.hours||a===q.hours&&s<q.minutes;if(I.hours<q.hours){if(K&&te)return!0}else if(K||te)return!0}else if(E.hours===a&&E.minutes===s)return!0;return!1});if(g!==-1)return h[g]}return Cp(n,r,t)[a<12?0:1];case 3:return Dp(n,t)[i.getFullYear()<=0?0:1];default:let c=e;throw new de(2302,!1)}}function tl(i){return function(n,e,t){let r=-1*t,o=_i(e,Dn.MinusSign),a=r>0?Math.floor(r/60):Math.ceil(r/60);switch(i){case 0:return(r>=0?"+":"")+Qn(a,2,o)+Qn(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+Qn(a,1,o);case 2:return"GMT"+(r>=0?"+":"")+Qn(a,2,o)+":"+Qn(Math.abs(r%60),2,o);case 3:return t===0?"Z":(r>=0?"+":"")+Qn(a,2,o)+":"+Qn(Math.abs(r%60),2,o);default:throw new de(2310,!1)}}}var Ev=0,il=4;function Sv(i){let n=rl(i,Ev,1).getDay();return rl(i,0,1+(n<=il?il:il+7)-n)}function Op(i){let n=i.getDay(),e=n===0?-3:il-n;return rl(i.getFullYear(),i.getMonth(),i.getDate()+e)}function Qd(i,n=!1){return function(e,t){let r;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();r=1+Math.floor((a+o)/7)}else{let o=Op(e),a=Sv(o.getFullYear()),s=o.getTime()-a.getTime();r=1+Math.round(s/6048e5)}return Qn(r,i,_i(t,Dn.MinusSign))}}function nl(i,n=!1){return function(e,t){let o=Op(e).getFullYear();return Qn(o,i,_i(t,Dn.MinusSign),n)}}var Jd={};function Mv(i){if(Jd[i])return Jd[i];let n;switch(i){case"G":case"GG":case"GGG":n=ft(3,it.Abbreviated);break;case"GGGG":n=ft(3,it.Wide);break;case"GGGGG":n=ft(3,it.Narrow);break;case"y":n=Vt(0,1,0,!1,!0);break;case"yy":n=Vt(0,2,0,!0,!0);break;case"yyy":n=Vt(0,3,0,!1,!0);break;case"yyyy":n=Vt(0,4,0,!1,!0);break;case"Y":n=nl(1);break;case"YY":n=nl(2,!0);break;case"YYY":n=nl(3);break;case"YYYY":n=nl(4);break;case"M":case"L":n=Vt(1,1,1);break;case"MM":case"LL":n=Vt(1,2,1);break;case"MMM":n=ft(2,it.Abbreviated);break;case"MMMM":n=ft(2,it.Wide);break;case"MMMMM":n=ft(2,it.Narrow);break;case"LLL":n=ft(2,it.Abbreviated,rn.Standalone);break;case"LLLL":n=ft(2,it.Wide,rn.Standalone);break;case"LLLLL":n=ft(2,it.Narrow,rn.Standalone);break;case"w":n=Qd(1);break;case"ww":n=Qd(2);break;case"W":n=Qd(1,!0);break;case"d":n=Vt(2,1);break;case"dd":n=Vt(2,2);break;case"c":case"cc":n=Vt(7,1);break;case"ccc":n=ft(1,it.Abbreviated,rn.Standalone);break;case"cccc":n=ft(1,it.Wide,rn.Standalone);break;case"ccccc":n=ft(1,it.Narrow,rn.Standalone);break;case"cccccc":n=ft(1,it.Short,rn.Standalone);break;case"E":case"EE":case"EEE":n=ft(1,it.Abbreviated);break;case"EEEE":n=ft(1,it.Wide);break;case"EEEEE":n=ft(1,it.Narrow);break;case"EEEEEE":n=ft(1,it.Short);break;case"a":case"aa":case"aaa":n=ft(0,it.Abbreviated);break;case"aaaa":n=ft(0,it.Wide);break;case"aaaaa":n=ft(0,it.Narrow);break;case"b":case"bb":case"bbb":n=ft(0,it.Abbreviated,rn.Standalone,!0);break;case"bbbb":n=ft(0,it.Wide,rn.Standalone,!0);break;case"bbbbb":n=ft(0,it.Narrow,rn.Standalone,!0);break;case"B":case"BB":case"BBB":n=ft(0,it.Abbreviated,rn.Format,!0);break;case"BBBB":n=ft(0,it.Wide,rn.Format,!0);break;case"BBBBB":n=ft(0,it.Narrow,rn.Format,!0);break;case"h":n=Vt(3,1,-12);break;case"hh":n=Vt(3,2,-12);break;case"H":n=Vt(3,1);break;case"HH":n=Vt(3,2);break;case"m":n=Vt(4,1);break;case"mm":n=Vt(4,2);break;case"s":n=Vt(5,1);break;case"ss":n=Vt(5,2);break;case"S":n=Vt(6,1);break;case"SS":n=Vt(6,2);break;case"SSS":n=Vt(6,3);break;case"Z":case"ZZ":case"ZZZ":n=tl(0);break;case"ZZZZZ":n=tl(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=tl(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=tl(2);break;default:return null}return Jd[i]=n,n}function Pp(i,n){i=i.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+i)/6e4;return isNaN(e)?n:e}function Iv(i,n){return i=new Date(i.getTime()),i.setMinutes(i.getMinutes()+n),i}function Tv(i,n,e){let r=i.getTimezoneOffset(),o=Pp(n,r);return Iv(i,-1*(o-r))}function Av(i){if(_p(i))return i;if(typeof i=="number"&&!isNaN(i))return new Date(i);if(typeof i=="string"){if(i=i.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(i)){let[r,o=1,a=1]=i.split("-").map(s=>+s);return rl(r,o-1,a)}let e=parseFloat(i);if(!isNaN(i-e))return new Date(e);let t;if(t=i.match(xv))return Rv(t)}let n=new Date(i);if(!_p(n))throw new de(2311,!1);return n}function Rv(i){let n=new Date(0),e=0,t=0,r=i[8]?n.setUTCFullYear:n.setFullYear,o=i[8]?n.setUTCHours:n.setHours;i[9]&&(e=Number(i[9]+i[10]),t=Number(i[9]+i[11])),r.call(n,Number(i[1]),Number(i[2])-1,Number(i[3]));let a=Number(i[4]||0)-e,s=Number(i[5]||0)-t,c=Number(i[6]||0),u=Math.floor(parseFloat("0."+(i[7]||0))*1e3);return o.call(n,a,s,c,u),n}function _p(i){return i instanceof Date&&!isNaN(i.valueOf())}var Ov=/^(\d+)?\.((\d+)(-(\d+))?)?$/,bp=22,ol=".",ka="0",Pv=";",Fv=",",eu="#",vp="\xA4";function Nv(i,n,e,t,r,o,a=!1){let s="",c=!1;if(!isFinite(i))s=_i(e,Dn.Infinity);else{let u=zv(i);a&&(u=Bv(u));let h=n.minInt,g=n.minFrac,E=n.maxFrac;if(o){let N=o.match(Ov);if(N===null)throw new de(2306,!1);let P=N[1],he=N[3],Ie=N[5];P!=null&&(h=tu(P)),he!=null&&(g=tu(he)),Ie!=null?E=tu(Ie):he!=null&&g>E&&(E=g)}Vv(u,g,E);let I=u.digits,q=u.integerLen,K=u.exponent,te=[];for(c=I.every(N=>!N);q<h;q++)I.unshift(0);for(;q<0;q++)I.unshift(0);q>0?te=I.splice(q,I.length):(te=I,I=[0]);let re=[];for(I.length>=n.lgSize&&re.unshift(I.splice(-n.lgSize,I.length).join(""));I.length>n.gSize;)re.unshift(I.splice(-n.gSize,I.length).join(""));I.length&&re.unshift(I.join("")),s=re.join(_i(e,t)),te.length&&(s+=_i(e,r)+te.join("")),K&&(s+=_i(e,Dn.Exponential)+"+"+K)}return i<0&&!c?s=n.negPre+s+n.negSuf:s=n.posPre+s+n.posSuf,s}function Fp(i,n,e,t,r){let o=Ep(n,nu.Currency),a=Lv(o,_i(n,Dn.MinusSign));return a.minFrac=Ap(t),a.maxFrac=a.minFrac,Nv(i,a,n,Dn.CurrencyGroup,Dn.CurrencyDecimal,r).replace(vp,e).replace(vp,"").trim()}function Lv(i,n="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=i.split(Pv),r=t[0],o=t[1],a=r.indexOf(ol)!==-1?r.split(ol):[r.substring(0,r.lastIndexOf(ka)+1),r.substring(r.lastIndexOf(ka)+1)],s=a[0],c=a[1]||"";e.posPre=s.substring(0,s.indexOf(eu));for(let h=0;h<c.length;h++){let g=c.charAt(h);g===ka?e.minFrac=e.maxFrac=h+1:g===eu?e.maxFrac=h+1:e.posSuf+=g}let u=s.split(Fv);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,o){let h=r.length-e.posPre.length-e.posSuf.length,g=o.indexOf(eu);e.negPre=o.substring(0,g).replace(/'/g,""),e.negSuf=o.slice(g+h).replace(/'/g,"")}else e.negPre=n+e.posPre,e.negSuf=e.posSuf;return e}function Bv(i){if(i.digits[0]===0)return i;let n=i.digits.length-i.integerLen;return i.exponent?i.exponent+=2:(n===0?i.digits.push(0,0):n===1&&i.digits.push(0),i.integerLen+=2),i}function zv(i){let n=Math.abs(i)+"",e=0,t,r,o,a,s;for((r=n.indexOf(ol))>-1&&(n=n.replace(ol,"")),(o=n.search(/e/i))>0?(r<0&&(r=o),r+=+n.slice(o+1),n=n.substring(0,o)):r<0&&(r=n.length),o=0;n.charAt(o)===ka;o++);if(o===(s=n.length))t=[0],r=1;else{for(s--;n.charAt(s)===ka;)s--;for(r-=o,t=[],a=0;o<=s;o++,a++)t[a]=Number(n.charAt(o))}return r>bp&&(t=t.splice(0,bp-1),e=r-1,r=1),{digits:t,exponent:e,integerLen:r}}function Vv(i,n,e){if(n>e)throw new de(2307,!1);let t=i.digits,r=t.length-i.integerLen,o=Math.min(Math.max(n,r),e),a=o+i.integerLen,s=t[a];if(a>0){t.splice(Math.max(i.integerLen,a));for(let g=a;g<t.length;g++)t[g]=0}else{r=Math.max(0,r),i.integerLen=1,t.length=Math.max(1,a=o+1),t[0]=0;for(let g=1;g<a;g++)t[g]=0}if(s>=5)if(a-1<0){for(let g=0;g>a;g--)t.unshift(0),i.integerLen++;t.unshift(1),i.integerLen++}else t[a-1]++;for(;r<Math.max(0,o);r++)t.push(0);let c=o!==0,u=n+i.integerLen,h=t.reduceRight(function(g,E,I,q){return E=E+g,q[I]=E<10?E:E-10,c&&(q[I]===0&&I>=u?q.pop():c=!1),E>=10?1:0},0);h&&(t.unshift(h),i.integerLen++)}function tu(i){let n=parseInt(i);if(isNaN(n))throw new de(2305,!1);return n}var bi=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(ue);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||i)(me(mn))};static \u0275dir=F({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[et]})}return i})();function Np(i,n){return new de(2100,!1)}var jv="mediumDate",Lp=new k(""),Bp=new k(""),Ar=(()=>{class i{locale;defaultTimezone;defaultOptions;constructor(e,t,r){this.locale=e,this.defaultTimezone=t,this.defaultOptions=r}transform(e,t,r,o){if(e==null||e===""||e!==e)return null;try{let a=t??this.defaultOptions?.dateFormat??jv,s=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Rp(e,a,o||this.locale,s)}catch(a){throw Np(i,a.message)}}static \u0275fac=function(t){return new(t||i)(me(Yd,16),me(Lp,24),me(Bp,24))};static \u0275pipe=Sr({name:"date",type:i,pure:!0})}return i})();var Ot=(()=>{class i{_locale;_defaultCurrencyCode;constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(e,t=this._defaultCurrencyCode,r="symbol",o,a){if(!Uv(e))return null;a||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let s=t||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?s=Tp(s,r==="symbol"?"wide":"narrow",a):s=r);try{let c=Hv(e);return Fp(c,a,s,t,o)}catch(c){throw Np(i,c.message)}}static \u0275fac=function(t){return new(t||i)(me(Yd,16),me(op,16))};static \u0275pipe=Sr({name:"currency",type:i,pure:!0})}return i})();function Uv(i){return!(i==null||i===""||i!==i)}function Hv(i){if(typeof i=="string"&&!isNaN(Number(i)-parseFloat(i)))return Number(i);if(typeof i!="number")throw new de(2309,!1);return i}function Da(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Rr=class{};var iu="browser";function zp(i){return i===iu}var Ea=class{_doc;constructor(n){this._doc=n}manager},al=(()=>{class i extends Ea{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(_e(ie))};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})(),cl=new k(""),su=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof al));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof al);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new de(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(_e(cl),_e(Y))};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})(),ru="ng-app-id";function Vp(i){for(let n of i)n.remove()}function jp(i,n){let e=n.createElement("style");return e.textContent=i,e}function qv(i,n,e,t){let r=i.head?.querySelectorAll(`style[${ru}="${n}"],link[${ru}="${n}"]`);if(r)for(let o of r)o.removeAttribute(ru),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function au(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var lu=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,qv(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,jp);t?.forEach(r=>this.addUsage(r,this.external,au))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Vp(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Vp(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,jp(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,au(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(_e(ie),_e(Er),_e(co,8),_e(so))};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})(),ou={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},cu=/%COMP%/g;var Hp="%COMP%",Zv=`_nghost-${Hp}`,Yv=`_ngcontent-${Hp}`,Xv=!0,Kv=new k("",{factory:()=>Xv});function Qv(i){return Yv.replace(cu,i)}function Jv(i){return Zv.replace(cu,i)}function $p(i,n){return n.map(e=>e.replace(cu,i))}var Ia=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=u,this.defaultRenderer=new Sa(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof ll?r.applyToHost(e):r instanceof Ma&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,g=this.tracingService;switch(t.encapsulation){case qs.Emulated:o=new ll(c,u,t,this.appId,h,a,s,g);break;case qs.ShadowDom:return new sl(c,e,t,a,s,this.nonce,g,u);case qs.ExperimentalIsolatedShadowDom:return new sl(c,e,t,a,s,this.nonce,g);default:o=new Ma(c,u,t,h,a,s,g);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(_e(su),_e(lu),_e(Er),_e(Kv),_e(ie),_e(Y),_e(co),_e(Zs,8))};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})(),Sa=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(ou[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Up(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Up(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new de(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=ou[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=ou[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(ho.DashCase|ho.Important)?n.style.setProperty(e,t,r&ho.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&ho.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=Bn().getGlobalEventTarget(this.doc,n),!n))throw new de(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Up(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var sl=class extends Sa{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=$p(t.id,u);for(let g of u){let E=document.createElement("style");a&&E.setAttribute("nonce",a),E.textContent=g,this.shadowRoot.appendChild(E)}let h=t.getExternalStyles?.();if(h)for(let g of h){let E=au(g,r);a&&E.setAttribute("nonce",a),this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ma=class extends Sa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles;this.styles=c?$p(c,u):u,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Yh.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ll=class extends Ma{contentAttr;hostAttr;constructor(n,e,t,r,o,a,s,c){let u=r+"-"+t.id;super(n,e,t,o,a,s,c,u),this.contentAttr=Qv(u),this.hostAttr=Jv(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var dl=class i extends ya{supportsDOMEvents=!0;static makeCurrent(){Xd(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=ty();return e==null?null:ny(e)}resetBaseElement(){Ta=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Da(document.cookie,n)}},Ta=null;function ty(){return Ta=Ta||document.head.querySelector("base"),Ta?Ta.getAttribute("href"):null}function ny(i){return new URL(i,document.baseURI).pathname}var iy=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})(),Gp=["alt","control","meta","shift"],ry={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},oy={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Wp=(()=>{class i extends Ea{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=i.parseEventName(t),s=i.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Bn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),Gp.forEach(u=>{let h=t.indexOf(u);h>-1&&(t.splice(h,1),a+=u+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=ry[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Gp.forEach(a=>{if(a!==r){let s=oy[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(_e(ie))};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();async function du(i,n,e){let t=_({rootComponent:i},ay(n,e));return dp(t)}function ay(i,n){return{platformRef:n?.platformRef,appProviders:[...uy,...i?.providers??[]],platformProviders:dy}}function sy(){dl.makeCurrent()}function ly(){return new kr}function cy(){return zh(document),document}var dy=[{provide:so,useValue:iu},{provide:Vh,useValue:sy,multi:!0},{provide:ie,useFactory:cy}];var uy=[{provide:Ph,useValue:"root"},{provide:kr,useFactory:ly},{provide:cl,useClass:al,multi:!0},{provide:cl,useClass:Wp,multi:!0},Ia,lu,su,{provide:Kt,useExisting:Ia},{provide:Rr,useClass:iy},[]];var nr=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var ml=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},hl=class{encodeKey(n){return qp(n)}encodeValue(n){return qp(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function my(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var hy=/%(\d[a-f0-9])/gi,py={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function qp(i){return encodeURIComponent(i).replace(hy,(n,e)=>py[e]??n)}function ul(i){return`${i}`}var In=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new hl,n.fromString){if(n.fromObject)throw new de(2805,!1);this.map=my(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(ul):[ul(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(ul(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf(ul(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function fy(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Zp(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Yp(i){return typeof Blob<"u"&&i instanceof Blob}function Xp(i){return typeof FormData<"u"&&i instanceof FormData}function gy(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Kp="Content-Type",Qp="Accept",Jp="text/plain",ef="application/json",_y=`${ef}, ${Jp}, */*`,vo=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(fy(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new de(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new nr,this.context??=new ml,!this.params)this.params=new In,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Zp(this.body)||Yp(this.body)||Xp(this.body)||gy(this.body)?this.body:this.body instanceof In?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Xp(this.body)?null:Yp(this.body)?this.body.type||null:Zp(this.body)?null:typeof this.body=="string"?Jp:this.body instanceof In?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ef:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,u=n.redirect||this.redirect,h=n.credentials||this.credentials,g=n.referrer||this.referrer,E=n.integrity||this.integrity,I=n.referrerPolicy||this.referrerPolicy,q=n.transferCache??this.transferCache,K=n.timeout??this.timeout,te=n.body!==void 0?n.body:this.body,re=n.withCredentials??this.withCredentials,N=n.reportProgress??this.reportProgress,P=n.headers||this.headers,he=n.params||this.params,Ie=n.context??this.context;return n.setHeaders!==void 0&&(P=Object.keys(n.setHeaders).reduce((He,Ne)=>He.set(Ne,n.setHeaders[Ne]),P)),n.setParams&&(he=Object.keys(n.setParams).reduce((He,Ne)=>He.set(Ne,n.setParams[Ne]),he)),new i(e,t,te,{params:he,headers:P,context:Ie,reportProgress:N,responseType:r,withCredentials:re,transferCache:q,keepalive:o,cache:s,priority:a,timeout:K,mode:c,redirect:u,credentials:h,referrer:g,integrity:E,referrerPolicy:I})}},Or=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(Or||{}),xo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new nr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},pl=class i extends xo{constructor(n={}){super(n)}type=Or.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Aa=class i extends xo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Or.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},yo=class extends xo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},by=200,vy=204;var yy=new k("");var xy=/^\)\]\}',?\n/;var mu=(()=>{class i{xhrFactory;tracingService=l(Zs,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new de(-2800,!1);let t=this.xhrFactory;return Q(null).pipe(Mt(()=>new Nn(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((te,re)=>a.setRequestHeader(te,re.join(","))),e.headers.has(Qp)||a.setRequestHeader(Qp,_y),!e.headers.has(Kp)){let te=e.detectContentTypeHeader();te!==null&&a.setRequestHeader(Kp,te)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let te=e.responseType.toLowerCase();a.responseType=te!=="json"?te:"text"}let s=e.serializeBody(),c=null,u=()=>{if(c!==null)return c;let te=a.statusText||"OK",re=new nr(a.getAllResponseHeaders()),N=a.responseURL||e.url;return c=new pl({headers:re,status:a.status,statusText:te,url:N}),c},h=this.maybePropagateTrace(()=>{let{headers:te,status:re,statusText:N,url:P}=u(),he=null;re!==vy&&(he=typeof a.response>"u"?a.responseText:a.response),re===0&&(re=he?by:0);let Ie=re>=200&&re<300;if(e.responseType==="json"&&typeof he=="string"){let He=he;he=he.replace(xy,"");try{he=he!==""?JSON.parse(he):null}catch(Ne){he=He,Ie&&(Ie=!1,he={error:Ne,text:he})}}Ie?(o.next(new Aa({body:he,headers:te,status:re,statusText:N,url:P||void 0})),o.complete()):o.error(new yo({error:he,headers:te,status:re,statusText:N,url:P||void 0}))}),g=this.maybePropagateTrace(te=>{let{url:re}=u(),N=new yo({error:te,status:a.status||0,statusText:a.statusText||"Unknown Error",url:re||void 0});o.error(N)}),E=g;e.timeout&&(E=this.maybePropagateTrace(te=>{let{url:re}=u(),N=new yo({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:re||void 0});o.error(N)}));let I=!1,q=this.maybePropagateTrace(te=>{I||(o.next(u()),I=!0);let re={type:Or.DownloadProgress,loaded:te.loaded};te.lengthComputable&&(re.total=te.total),e.responseType==="text"&&a.responseText&&(re.partialText=a.responseText),o.next(re)}),K=this.maybePropagateTrace(te=>{let re={type:Or.UploadProgress,loaded:te.loaded};te.lengthComputable&&(re.total=te.total),o.next(re)});return a.addEventListener("load",h),a.addEventListener("error",g),a.addEventListener("timeout",E),a.addEventListener("abort",g),e.reportProgress&&(a.addEventListener("progress",q),s!==null&&a.upload&&a.upload.addEventListener("progress",K)),a.send(s),o.next({type:Or.Sent}),()=>{a.removeEventListener("error",g),a.removeEventListener("abort",g),a.removeEventListener("load",h),a.removeEventListener("timeout",E),e.reportProgress&&(a.removeEventListener("progress",q),s!==null&&a.upload&&a.upload.removeEventListener("progress",K)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||i)(_e(Rr))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Cy(i,n){return n(i)}function wy(i,n,e){return(t,r)=>xn(e,()=>n(t,o=>i(o,r)))}var hu=new k("",{factory:()=>[]}),tf=new k(""),nf=new k("",{factory:()=>!0});var pu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=_e(mu),r},providedIn:"root"})}return i})();var fl=(()=>{class i{backend;injector;chain=null;pendingTasks=l(Bh);contributeToStability=l(nf);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(hu),...this.injector.get(tf,[])]));this.chain=t.reduceRight((r,o)=>wy(r,o,this.injector),Cy)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Ki(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(_e(pu),_e(Yt))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=_e(fl),r},providedIn:"root"})}return i})();function uu(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Gt=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof vo)o=e;else{let c;r.headers instanceof nr?c=r.headers:c=new nr(r.headers);let u;r.params&&(r.params instanceof In?u=r.params:u=new In({fromObject:r.params})),o=new vo(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:u,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Q(o).pipe(ro(c=>this.handler.handle(c)));if(e instanceof vo||r.observe==="events")return a;let s=a.pipe(qe(c=>c instanceof Aa));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ce(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new de(2806,!1);return c.body}));case"blob":return s.pipe(ce(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new de(2807,!1);return c.body}));case"text":return s.pipe(ce(c=>{if(c.body!==null&&typeof c.body!="string")throw new de(2808,!1);return c.body}));default:return s.pipe(ce(c=>c.body))}case"response":return s;default:throw new de(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new In().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,uu(r,t))}post(e,t,r={}){return this.request("POST",e,uu(r,t))}put(e,t,r={}){return this.request("PUT",e,uu(r,t))}static \u0275fac=function(t){return new(t||i)(_e(fu))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ky=new k("",{factory:()=>!0}),Dy="XSRF-TOKEN",Ey=new k("",{factory:()=>Dy}),Sy="X-XSRF-TOKEN",My=new k("",{factory:()=>Sy}),Iy=(()=>{class i{cookieName=l(Ey);doc=l(ie);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Da(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=_e(Iy),r},providedIn:"root"})}return i})();function Ty(i,n){if(!l(ky)||i.method==="GET"||i.method==="HEAD")return n(i);try{let r=l(_o).href,{origin:o}=new URL(r),{origin:a}=new URL(i.url,o);if(o!==a)return n(i)}catch{return n(i)}let e=l(rf).getToken(),t=l(My);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),n(i)}var gu=(function(i){return i[i.Interceptors=0]="Interceptors",i[i.LegacyInterceptors=1]="LegacyInterceptors",i[i.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",i[i.NoXsrfProtection=3]="NoXsrfProtection",i[i.JsonpSupport=4]="JsonpSupport",i[i.RequestsMadeViaParent=5]="RequestsMadeViaParent",i[i.Fetch=6]="Fetch",i})(gu||{});function Ay(i,n){return{\u0275kind:i,\u0275providers:n}}function _u(...i){let n=[Gt,fl,{provide:fu,useExisting:fl},{provide:pu,useFactory:()=>l(yy,{optional:!0})??l(mu)},{provide:hu,useValue:Ty,multi:!0}];for(let e of i)n.push(...e.\u0275providers);return wr(n)}function bu(i){return Ay(gu.Interceptors,i.map(n=>({provide:hu,useValue:n,multi:!0})))}var of=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(_e(ie))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ra=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=_e(Ny),r},providedIn:"root"})}return i})(),Ny=(()=>{class i extends Ra{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case un.NONE:return t;case un.HTML:return mo(t,"HTML")?uo(t):qh(this._doc,String(t)).toString();case un.STYLE:return mo(t,"Style")?uo(t):t;case un.SCRIPT:if(mo(t,"Script"))return uo(t);throw new de(5200,!1);case un.URL:return mo(t,"URL")?uo(t):Wh(String(t));case un.RESOURCE_URL:if(mo(t,"ResourceURL"))return uo(t);throw new de(5201,!1);default:throw new de(5202,!1)}}bypassSecurityTrustHtml(e){return jh(e)}bypassSecurityTrustStyle(e){return Uh(e)}bypassSecurityTrustScript(e){return Hh(e)}bypassSecurityTrustUrl(e){return $h(e)}bypassSecurityTrustResourceUrl(e){return Gh(e)}static \u0275fac=function(t){return new(t||i)(_e(ie))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var xe="primary",qa=Symbol("RouteTitle"),wu=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Fr(i){return new wu(i)}function vu(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function hf(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let c={},u=i.slice(0,t.length);return vu(t,u,c)?{consumed:u,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!vu(o,i.slice(0,o.length),s)||!vu(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function xl(i){return new Promise((n,e)=>{i.pipe(Qi()).subscribe({next:t=>n(t),error:t=>e(t)})})}function Ly(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!vi(i[e],n[e]))return!1;return!0}function vi(i,n){let e=i?ku(i):void 0,t=n?ku(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!pf(i[r],n[r]))return!1;return!0}function ku(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function pf(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function By(i){return i.length>0?i[i.length-1]:null}function Br(i){return Hs(i)?i:_a(i)?dn(Promise.resolve(i)):Q(i)}function ff(i){return Hs(i)?xl(i):Promise.resolve(i)}var zy={exact:_f,subset:bf},gf={exact:Vy,subset:jy,ignored:()=>!0},Bu={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ba={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function zu(i,n,e){let t=i instanceof pn?i:n.parseUrl(i);return Rt(()=>Du(n.lastSuccessfulNavigation()?.finalUrl??new pn,t,_(_({},Ba),e)))}function Du(i,n,e){return zy[e.paths](i.root,n.root,e.matrixParams)&&gf[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function Vy(i,n){return vi(i,n)}function _f(i,n,e){if(!Pr(i.segments,n.segments)||!bl(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!_f(i.children[t],n.children[t],e))return!1;return!0}function jy(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>pf(i[e],n[e]))}function bf(i,n,e){return vf(i,n,n.segments,e)}function vf(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!Pr(r,e)||n.hasChildren()||!bl(r,e,t))}else if(i.segments.length===e.length){if(!Pr(i.segments,e)||!bl(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!bf(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!Pr(i.segments,r)||!bl(i.segments,r,t)||!i.children[xe]?!1:vf(i.children[xe],n,o,t)}}function bl(i,n,e){return n.every((t,r)=>gf[e](i[r].parameters,t.parameters))}var pn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new We([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Fr(this.queryParams),this._queryParamMap}toString(){return $y.serialize(this)}},We=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return vl(this)}},ir=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Fr(this.parameters),this._parameterMap}toString(){return xf(this)}};function Uy(i,n){return Pr(i,n)&&i.every((e,t)=>vi(e.parameters,n[t].parameters))}function Pr(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function Hy(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===xe&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==xe&&(e=e.concat(n(r,t)))}),e}var To=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>new rr,providedIn:"root"})}return i})(),rr=class{parse(n){let e=new Su(n);return new pn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Oa(n.root,!0)}`,t=qy(n.queryParams),r=typeof n.fragment=="string"?`#${Gy(n.fragment)}`:"";return`${e}${t}${r}`}},$y=new rr;function vl(i){return i.segments.map(n=>xf(n)).join("/")}function Oa(i,n){if(!i.hasChildren())return vl(i);if(n){let e=i.children[xe]?Oa(i.children[xe],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==xe&&t.push(`${r}:${Oa(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Hy(i,(t,r)=>r===xe?[Oa(i.children[xe],!1)]:[`${r}:${Oa(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[xe]!=null?`${vl(i)}/${e[0]}`:`${vl(i)}/(${e.join("//")})`}}function yf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gl(i){return yf(i).replace(/%3B/gi,";")}function Gy(i){return encodeURI(i)}function Eu(i){return yf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function yl(i){return decodeURIComponent(i)}function sf(i){return yl(i.replace(/\+/g,"%20"))}function xf(i){return`${Eu(i.path)}${Wy(i.parameters)}`}function Wy(i){return Object.entries(i).map(([n,e])=>`;${Eu(n)}=${Eu(e)}`).join("")}function qy(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${gl(e)}=${gl(r)}`).join("&"):`${gl(e)}=${gl(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Zy=/^[^\/()?;#]+/;function yu(i){let n=i.match(Zy);return n?n[0]:""}var Yy=/^[^\/()?;=#]+/;function Xy(i){let n=i.match(Yy);return n?n[0]:""}var Ky=/^[^=?&#]+/;function Qy(i){let n=i.match(Ky);return n?n[0]:""}var Jy=/^[^&#]+/;function e0(i){let n=i.match(Jy);return n?n[0]:""}var Su=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new We([],{}):new We([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new de(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[xe]=new We(e,t)),r}parseSegment(){let n=yu(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new de(4009,!1);return this.capture(n),new ir(yl(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Xy(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=yu(this.remaining);r&&(t=r,this.capture(t))}n[yl(e)]=yl(t)}parseQueryParam(n){let e=Qy(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=e0(this.remaining);a&&(t=a,this.capture(t))}let r=sf(e),o=sf(t);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=yu(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new de(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=xe);let s=this.parseChildren(e+1);t[a??xe]=Object.keys(s).length===1&&s[xe]?s[xe]:new We([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new de(4011,!1)}};function Cf(i){return i.segments.length>0?new We([],{[xe]:i}):i}function wf(i){let n={};for(let[t,r]of Object.entries(i.children)){let o=wf(r);if(t===xe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new We(i.segments,n);return t0(e)}function t0(i){if(i.numberOfChildren===1&&i.children[xe]){let n=i.children[xe];return new We(i.segments.concat(n.segments),n.children)}return i}function or(i){return i instanceof pn}function kf(i,n,e=null,t=null,r=new rr){let o=Df(i);return Ef(o,n,e,t,r)}function Df(i){let n;function e(o){let a={};for(let c of o.children){let u=e(c);a[c.outlet]=u}let s=new We(o.url,a);return o===i&&(n=s),s}let t=e(i.root),r=Cf(t);return n??r}function Ef(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return xu(o,o,o,e,t,r);let a=n0(n);if(a.toRoot())return xu(o,o,new We([],{}),e,t,r);let s=i0(a,o,i),c=s.processChildren?Fa(s.segmentGroup,s.index,a.commands):Mf(s.segmentGroup,s.index,a.commands);return xu(o,s.segmentGroup,c,e,t,r)}function Cl(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function za(i){return typeof i=="object"&&i!=null&&i.outlets}function lf(i,n,e){i||="\u0275";let t=new pn;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function xu(i,n,e,t,r,o){let a={};for(let[u,h]of Object.entries(t??{}))a[u]=Array.isArray(h)?h.map(g=>lf(u,g,o)):lf(u,h,o);let s;i===n?s=e:s=Sf(i,n,e);let c=Cf(wf(s));return new pn(c,a,r)}function Sf(i,n,e){let t={};return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=Sf(o,n,e)}),new We(i.segments,t)}var wl=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Cl(t[0]))throw new de(4003,!1);let r=t.find(za);if(r&&r!==By(t))throw new de(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function n0(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new wl(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,u])=>{s[c]=typeof u=="string"?u.split("/"):u}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new wl(e,n,t)}var wo=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function i0(i,n,e){if(i.isAbsolute)return new wo(n,!0,0);if(!e)return new wo(n,!1,NaN);if(e.parent===null)return new wo(e,!0,0);let t=Cl(i.commands[0])?0:1,r=e.segments.length-1+t;return r0(e,r,i.numberOfDoubleDots)}function r0(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new de(4005,!1);r=t.segments.length}return new wo(t,!1,r-o)}function o0(i){return za(i[0])?i[0].outlets:{[xe]:i}}function Mf(i,n,e){if(i??=new We([],{}),i.segments.length===0&&i.hasChildren())return Fa(i,n,e);let t=a0(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new We(i.segments.slice(0,t.pathIndex),{});return o.children[xe]=new We(i.segments.slice(t.pathIndex),i.children),Fa(o,0,r)}else return t.match&&r.length===0?new We(i.segments,{}):t.match&&!i.hasChildren()?Mu(i,n,e):t.match?Fa(i,0,r):Mu(i,n,e)}function Fa(i,n,e){if(e.length===0)return new We(i.segments,{});{let t=o0(e),r={};if(Object.keys(t).some(o=>o!==xe)&&i.children[xe]&&i.numberOfChildren===1&&i.children[xe].segments.length===0){let o=Fa(i.children[xe],n,e);return new We(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Mf(i.children[o],n,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new We(i.segments,r)}}function a0(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let a=i.segments[r],s=e[t];if(za(s))break;let c=`${s}`,u=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&u&&typeof u=="object"&&u.outlets===void 0){if(!df(c,u,a))return o;t+=2}else{if(!df(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Mu(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(za(o)){let c=s0(o.outlets);return new We(t,c)}if(r===0&&Cl(e[0])){let c=i.segments[n];t.push(new ir(c.path,cf(e[0]))),r++;continue}let a=za(o)?o.outlets[xe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Cl(s)?(t.push(new ir(a,cf(s))),r+=2):(t.push(new ir(a,{})),r++)}return new We(t,{})}function s0(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=Mu(new We([],{}),0,t))}),n}function cf(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function df(i,n,e){return i==e.path&&vi(n,e.parameters)}var Na="imperative",Wt=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Wt||{}),An=class{id;url;constructor(n,e){this.id=n,this.url=e}},Nr=class extends An{type=Wt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ei=class extends An{urlAfterRedirects;type=Wt.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},on=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(on||{}),Va=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Va||{}),Vn=class extends An{reason;code;type=Wt.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function If(i){return i instanceof Vn&&(i.code===on.Redirect||i.code===on.SupersededByNewNavigation)}var Li=class extends An{reason;code;type=Wt.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},Lr=class extends An{error;target;type=Wt.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ja=class extends An{urlAfterRedirects;state;type=Wt.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},kl=class extends An{urlAfterRedirects;state;type=Wt.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dl=class extends An{urlAfterRedirects;state;shouldActivate;type=Wt.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},El=class extends An{urlAfterRedirects;state;type=Wt.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sl=class extends An{urlAfterRedirects;state;type=Wt.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ml=class{route;type=Wt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Il=class{route;type=Wt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Tl=class{snapshot;type=Wt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Al=class{snapshot;type=Wt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rl=class{snapshot;type=Wt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ol=class{snapshot;type=Wt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Do=class{},Ua=class{},Eo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function l0(i){return!(i instanceof Do)&&!(i instanceof Eo)&&!(i instanceof Ua)}var Pl=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ao(this.rootInjector)}},Ao=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Pl(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(_e(Yt))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fl=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Iu(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=Iu(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Tu(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Tu(n,this._root).map(e=>e.value)}};function Iu(i,n){if(i===n.value)return n;for(let e of n.children){let t=Iu(i,e);if(t)return t}return null}function Tu(i,n){if(i===n.value)return[n];for(let e of n.children){let t=Tu(i,e);if(t.length)return t.unshift(n),t}return[]}var Tn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Co(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var Ha=class extends Fl{snapshot;constructor(n,e){super(n),this.snapshot=e,ju(this,n)}toString(){return this.snapshot.toString()}};function Tf(i,n){let e=c0(i,n),t=new bn([new ir("",{})]),r=new bn({}),o=new bn({}),a=new bn({}),s=new bn(""),c=new fn(t,r,a,s,o,xe,i,e.root);return c.snapshot=e.root,new Ha(new Tn(c,[]),e)}function c0(i,n){let e={},t={},r={},a=new So([],e,r,"",t,xe,i,null,{},n);return new $a("",new Tn(a,[]))}var fn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ce(u=>u[qa]))??Q(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ce(n=>Fr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ce(n=>Fr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Vu(i,n,e="emptyOnly"){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:_(_({},n.params),i.params),data:_(_({},n.data),i.data),resolve:_(_(_(_({},i.data),n.data),r?.data),i._resolvedData)}:t={params:_({},i.params),data:_({},i.data),resolve:_(_({},i.data),i._resolvedData??{})},r&&Rf(r)&&(t.resolve[qa]=r.title),t}var So=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[qa]}constructor(n,e,t,r,o,a,s,c,u,h){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=u,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Fr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Fr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},$a=class extends Fl{url;constructor(n,e){super(e),this.url=n,ju(this,e)}toString(){return Af(this._root)}};function ju(i,n){n.value._routerState=i,n.children.forEach(e=>ju(i,e))}function Af(i){let n=i.children.length>0?` { ${i.children.map(Af).join(", ")} } `:"";return`${i.value}${n}`}function Cu(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,vi(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),vi(n.params,e.params)||i.paramsSubject.next(e.params),Ly(n.url,e.url)||i.urlSubject.next(e.url),vi(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Au(i,n){let e=vi(i.params,n.params)&&Uy(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||Au(i.parent,n.parent))}function Rf(i){return typeof i.title=="string"||i.title===null}var Of=new k(""),Za=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=xe;activateEvents=new J;deactivateEvents=new J;attachEvents=new J;detachEvents=new J;routerOutletData=go();parentContexts=l(Ao);location=l(mn);changeDetector=l(Me);inputBinder=l(zl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new de(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new de(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new de(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new de(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Ru(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[et]})}return i})(),Ru=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===fn?this.route:n===Ao?this.childContexts:n===Of?this.outletData:this.parent.get(n,e)}},zl=new k("");var Uu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&R(0,"router-outlet")},dependencies:[Za],encapsulation:2})}return i})();function Hu(i){let n=i.children&&i.children.map(Hu),e=n?Re(_({},i),{children:n}):_({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==xe&&(e.component=Uu),e}function d0(i,n,e){let t=Ga(i,n._root,e?e._root:void 0);return new Ha(t,n)}function Ga(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let r=u0(i,n,e);return new Tn(t,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Ga(i,s)),a}}let t=m0(n.value),r=n.children.map(o=>Ga(i,o));return new Tn(t,r)}}function u0(i,n,e){return n.children.map(t=>{for(let r of e.children)if(i.shouldReuseRoute(t.value,r.value.snapshot))return Ga(i,t,r);return Ga(i,t)})}function m0(i){return new fn(new bn(i.url),new bn(i.params),new bn(i.queryParams),new bn(i.fragment),new bn(i.data),i.outlet,i.component,i)}var Mo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Pf="ngNavigationCancelingError";function Nl(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=or(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Ff(!1,on.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Ff(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Pf]=!0,e.cancellationCode=n,e}function h0(i){return Nf(i)&&or(i.url)}function Nf(i){return!!i&&i[Pf]}var Ou=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),Cu(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=Co(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=Co(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=Co(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let r=Co(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Ol(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Al(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(Cu(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Cu(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},Ll=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ko=class{component;route;constructor(n,e){this.component=n,this.route=e}};function p0(i,n,e){let t=i._root,r=n?n._root:null;return Pa(t,r,e,[t.value])}function f0(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Ro(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!Oh(i)?i:n.get(i):t}function Pa(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Co(n);return i.children.forEach(a=>{g0(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>La(s,e.getContext(a),r)),r}function g0(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=n?n.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=_0(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Ll(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Pa(i,n,s?s.children:null,t,r):Pa(i,n,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ko(s.outlet.component,a))}else a&&La(n,s,r),r.canActivateChecks.push(new Ll(t)),o.component?Pa(i,null,s?s.children:null,t,r):Pa(i,null,e,t,r);return r}function _0(i,n,e){if(typeof e=="function")return xn(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!Pr(i.url,n.url);case"pathParamsOrQueryParamsChange":return!Pr(i.url,n.url)||!vi(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Au(i,n)||!vi(i.queryParams,n.queryParams);default:return!Au(i,n)}}function La(i,n,e){let t=Co(i),r=i.value;Object.entries(t).forEach(([o,a])=>{r.component?n?La(a,n.children.getContext(o),e):La(a,null,e):La(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ko(n.outlet.component,r)):e.canDeactivateChecks.push(new ko(null,r)):e.canDeactivateChecks.push(new ko(null,r))}function Ya(i){return typeof i=="function"}function b0(i){return typeof i=="boolean"}function v0(i){return i&&Ya(i.canLoad)}function y0(i){return i&&Ya(i.canActivate)}function x0(i){return i&&Ya(i.canActivateChild)}function C0(i){return i&&Ya(i.canDeactivate)}function w0(i){return i&&Ya(i.canMatch)}function Lf(i){return i instanceof Mh||i?.name==="EmptyError"}var _l=Symbol("INITIAL_VALUE");function Io(){return Mt(i=>$s(i.map(n=>n.pipe(Nt(1),bt(_l)))).pipe(ce(n=>{for(let e of n)if(e!==!0){if(e===_l)return _l;if(e===!1||k0(e))return e}return!0}),qe(n=>n!==_l),Nt(1)))}function k0(i){return or(i)||i instanceof Mo}function Bf(i){return i.aborted?Q(void 0).pipe(Nt(1)):new Nn(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function zf(i){return we(Bf(i))}function D0(i){return Oi(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Q(Re(_({},n),{guardsResult:!0})):E0(o,e,t).pipe(Oi(a=>a&&b0(a)?S0(e,r,i):Q(a)),ce(a=>Re(_({},n),{guardsResult:a})))})}function E0(i,n,e){return dn(i).pipe(Oi(t=>R0(t.component,t.route,e,n)),Qi(t=>t!==!0,!0))}function S0(i,n,e){return dn(n).pipe(ro(t=>Gs(I0(t.route.parent,e),M0(t.route,e),A0(i,t.path),T0(i,t.route))),Qi(t=>t!==!0,!0))}function M0(i,n){return i!==null&&n&&n(new Rl(i)),Q(!0)}function I0(i,n){return i!==null&&n&&n(new Tl(i)),Q(!0)}function T0(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let t=e.map(r=>di(()=>{let o=n._environmentInjector,a=Ro(r,o),s=y0(a)?a.canActivate(n,i):xn(o,()=>a(n,i));return Br(s).pipe(Qi())}));return Q(t).pipe(Io())}function A0(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>f0(o)).filter(o=>o!==null).map(o=>di(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,u=Ro(s,c),h=x0(u)?u.canActivateChild(e,i):xn(c,()=>u(e,i));return Br(h).pipe(Qi())});return Q(a).pipe(Io())}));return Q(r).pipe(Io())}function R0(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Ro(a,s),u=C0(c)?c.canDeactivate(i,n,e,t):xn(s,()=>c(i,n,e,t));return Br(u).pipe(Qi())});return Q(o).pipe(Io())}function O0(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return Q(!0);let a=o.map(s=>{let c=Ro(s,i),u=v0(c)?c.canLoad(n,e):xn(i,()=>c(n,e)),h=Br(u);return r?h.pipe(zf(r)):h});return Q(a).pipe(Io(),Vf(t))}function Vf(i){return Sh(kt(n=>{if(typeof n!="boolean")throw Nl(i,n)}),ce(n=>n===!0))}function P0(i,n,e,t,r,o){let a=n.canMatch;if(!a||a.length===0)return Q(!0);let s=a.map(c=>{let u=Ro(c,i),h=w0(u)?u.canMatch(n,e,r):xn(i,()=>u(n,e,r));return Br(h).pipe(zf(o))});return Q(s).pipe(Io(),Vf(t))}var Ni=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},Wa=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function F0(i){throw new de(4e3,!1)}function N0(i){throw Ff(!1,on.GuardRejected)}var Pu=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[xe])throw F0(`${n.redirectTo}`);r=r.children[xe]}}async applyRedirectCommands(n,e,t,r,o){let a=await L0(e,r,o);if(a instanceof pn)throw new Wa(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new Wa(s);return s}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new pn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,t,r)}),new We(o,a)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new de(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function L0(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return xl(Br(xn(e,()=>t(n))))}function B0(i,n){return i.providers&&!i._injector&&(i._injector=Gd(i.providers,n,`Route: ${i.path}`)),i._injector??n}function Jn(i){return i.outlet||xe}function z0(i,n){let e=i.filter(t=>Jn(t)===n);return e.push(...i.filter(t=>Jn(t)!==n)),e}var Fu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jf(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function V0(i,n,e,t,r,o,a){let s=Uf(i,n,e);if(!s.matched)return Q(s);let c=jf(o(s));return t=B0(n,t),P0(t,n,e,r,c,a).pipe(ce(u=>u===!0?s:_({},Fu)))}function Uf(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?_({},Fu):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||hf)(e,i,n);if(!r)return _({},Fu);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function uf(i,n,e,t,r){return e.length>0&&H0(i,e,t,r)?{segmentGroup:new We(n,U0(t,new We(e,i.children))),slicedSegments:[]}:e.length===0&&$0(i,e,t)?{segmentGroup:new We(i.segments,j0(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new We(i.segments,i.children),slicedSegments:e}}function j0(i,n,e,t){let r={};for(let o of e)if(Vl(i,n,o)&&!t[Jn(o)]){let a=new We([],{});r[Jn(o)]=a}return _(_({},t),r)}function U0(i,n){let e={};e[xe]=n;for(let t of i)if(t.path===""&&Jn(t)!==xe){let r=new We([],{});e[Jn(t)]=r}return e}function H0(i,n,e,t){return e.some(r=>!Vl(i,n,r)||!(Jn(r)!==xe)?!1:!(t!==void 0&&Jn(r)===t))}function $0(i,n,e){return e.some(t=>Vl(i,n,t))}function Vl(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function G0(i,n,e){return n.length===0&&!i.children[e]}var Nu=class{};async function W0(i,n,e,t,r,o,a="emptyOnly",s){return new Lu(i,n,e,t,r,a,o,s).recognize()}var q0=31,Lu=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Pu(this.urlSerializer,this.urlTree)}noMatchError(n){return new de(4002,`'${n.segmentGroup}'`)}async recognize(){let n=uf(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(n),r=new Tn(t,e),o=new $a("",r),a=kf(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new So([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),xe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,xe,e),rootSnapshot:e}}catch(t){if(t instanceof Wa)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Ni?this.noMatchError(t):t}}async processSegmentGroup(n,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let a=await this.processSegment(n,e,t,t.segments,r,!0,o);return a instanceof Tn?[a]:[]}async processChildren(n,e,t,r){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let u=t.children[c],h=z0(e,c),g=await this.processSegmentGroup(n,h,u,c,r);a.push(...g)}let s=Hf(a);return Z0(s),s}async processSegment(n,e,t,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,t,r,o,a,s)}catch(u){if(u instanceof Ni||Lf(u))continue;throw u}if(G0(t,r,o))return new Nu;throw new Ni(t)}async processSegmentAgainstRoute(n,e,t,r,o,a,s,c){if(Jn(t)!==a&&(a===xe||!Vl(r,o,t)))throw new Ni(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,a,c);throw new Ni(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,a,s){let{matched:c,parameters:u,consumedSegments:h,positionalParamSegments:g,remainingSegments:E}=Uf(e,r,o);if(!c)throw new Ni(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>q0&&(this.allowRedirects=!1));let I=this.createSnapshot(n,r,o,u,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let q=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,g,jf(I),n),K=await this.applyRedirects.lineralizeSegments(r,q);return this.processSegment(n,t,e,K.concat(E),a,!1,s)}createSnapshot(n,e,t,r,o){let a=new So(t,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,X0(e),Jn(e),e.component??e._loadedComponent??null,e,K0(e),n),s=Vu(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=P=>this.createSnapshot(n,t,P.consumedSegments,P.parameters,a),c=await xl(V0(e,t,r,n,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Ni(e);n=t._injector??n;let{routes:u}=await this.getChildConfig(n,t,r),h=t._loadedInjector??n,{parameters:g,consumedSegments:E,remainingSegments:I}=c,q=this.createSnapshot(n,t,E,g,a),{segmentGroup:K,slicedSegments:te}=uf(e,E,I,u,o);if(te.length===0&&K.hasChildren()){let P=await this.processChildren(h,u,K,q);return new Tn(q,P)}if(u.length===0&&te.length===0)return new Tn(q,[]);let re=Jn(t)===o,N=await this.processSegment(h,u,K,te,re?xe:o,!0,q);return new Tn(q,N instanceof Tn?[N]:[])}async getChildConfig(n,e,t){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await xl(O0(n,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw N0(e)}return{routes:[],injector:n}}};function Z0(i){i.sort((n,e)=>n.value.outlet===xe?-1:e.value.outlet===xe?1:n.value.outlet.localeCompare(e.value.outlet))}function Y0(i){let n=i.value.routeConfig;return n&&n.path===""}function Hf(i){let n=[],e=new Set;for(let t of i){if(!Y0(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Hf(t.children);n.push(new Tn(t.value,r))}return n.filter(t=>!e.has(t))}function X0(i){return i.data||{}}function K0(i){return i.resolve||{}}function Q0(i,n,e,t,r,o,a){return Oi(async s=>{let{state:c,tree:u}=await W0(i,n,e,t,s.extractedUrl,r,o,a);return Re(_({},s),{targetSnapshot:c,urlAfterRedirects:u})})}function J0(i){return Oi(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return Q(n);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of $f(s))o.add(c);let a=0;return dn(o).pipe(ro(s=>r.has(s)?ex(s,e,i):(s.data=Vu(s,s.parent,i).resolve,Q(void 0))),kt(()=>a++),Vd(1),Oi(s=>a===o.size?Q(n):vn))})}function $f(i){let n=i.children.map(e=>$f(e)).flat();return[i,...n]}function ex(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!Rf(t)&&(r[qa]=t.title),di(()=>(i.data=Vu(i,i.parent,e).resolve,tx(r,i,n).pipe(ce(o=>(i._resolvedData=o,i.data=_(_({},i.data),o),null)))))}function tx(i,n,e){let t=ku(i);if(t.length===0)return Q({});let r={};return dn(t).pipe(Oi(o=>nx(i[o],n,e).pipe(Qi(),kt(a=>{if(a instanceof Mo)throw Nl(new rr,a);r[o]=a}))),Vd(1),ce(()=>r),Xi(o=>Lf(o)?vn:to(o)))}function nx(i,n,e){let t=n._environmentInjector,r=Ro(i,t),o=r.resolve?r.resolve(n,e):xn(t,()=>r(n,e));return Br(o)}function mf(i){return Mt(n=>{let e=i(n);return e?dn(e).pipe(ce(()=>n)):Q(n)})}var $u=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===xe);return t}getResolvedTitleForRoute(e){return e.data[qa]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>l(Gf),providedIn:"root"})}return i})(),Gf=(()=>{class i extends $u{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(_e(of))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Oo=new k("",{factory:()=>({})}),Xa=new k(""),Wf=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(rp);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await ff(xn(e,()=>t.loadComponent())),a=await Yf(Zf(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await qf(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function qf(i,n,e,t){let r=await ff(xn(e,()=>i.loadChildren())),o=await Yf(Zf(r)),a;o instanceof Xh||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),t&&t(i);let s,c,u=!1,h;return Array.isArray(a)?(c=a,u=!0):(s=a.create(e).injector,h=a,c=s.get(Xa,[],{optional:!0,self:!0}).flat()),{routes:c.map(Hu),injector:s,factory:h}}function ix(i){return i&&typeof i=="object"&&"default"in i}function Zf(i){return ix(i)?i.default:i}async function Yf(i){return i}var jl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>l(rx),providedIn:"root"})}return i})(),rx=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xf=new k("");var ox=()=>{},Kf=new k(""),Qf=(()=>{class i{currentNavigation=Z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Z(null);events=new z;transitionAbortWithErrorSubject=new z;configLoader=l(Wf);environmentInjector=l(Yt);destroyRef=l(ao);urlSerializer=l(To);rootContexts=l(Ao);location=l(gi);inputBindingEnabled=l(zl,{optional:!0})!==null;titleStrategy=l($u);options=l(Oo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(jl);createViewTransition=l(Xf,{optional:!0});navigationErrorHandler=l(Kf,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Ml(r)),t=r=>this.events.next(new Il(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ge(()=>{this.transitions?.next(Re(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new bn(null),this.transitions.pipe(qe(t=>t!==null),Mt(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return Q(t).pipe(Mt(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",on.SupersededByNewNavigation),vn;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?Re(_({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&h!=="reload")return this.events.next(new Li(s.id,this.urlSerializer.serialize(s.rawUrl),"",Va.IgnoredSameUrlNavigation)),s.resolve(!1),vn;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Q(s).pipe(Mt(g=>(this.events.next(new Nr(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?vn:Promise.resolve(g))),Q0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),kt(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=g.urlAfterRedirects,E)),this.events.next(new Ua)}),Mt(g=>dn(t.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(ce(()=>g))),kt(()=>{let g=new ja(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:E,source:I,restoredState:q,extras:K}=s,te=new Nr(g,this.urlSerializer.serialize(E),I,q);this.events.next(te);let re=Tf(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=Re(_({},s),{targetSnapshot:re,urlAfterRedirects:E,extras:Re(_({},K),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(N=>(N.finalUrl=E,N)),Q(t)}else return this.events.next(new Li(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Va.IgnoredByUrlHandlingStrategy)),s.resolve(!1),vn}),ce(s=>{let c=new kl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=Re(_({},s),{guards:p0(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),D0(s=>this.events.next(s)),Mt(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Nl(this.urlSerializer,s.guardsResult);let c=new Dl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return vn;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",on.GuardRejected),vn;if(s.guards.canActivateChecks.length===0)return Q(s);let u=new El(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!a())return vn;let h=!1;return Q(s).pipe(J0(this.paramsInheritanceStrategy),kt({next:()=>{h=!0;let g=new Sl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{h||this.cancelNavigationTransition(s,"",on.NoDataFromResolver)}}))}),mf(s=>{let c=h=>{let g=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let E=h._environmentInjector;g.push(this.configLoader.loadComponent(E,h.routeConfig).then(I=>{h.component=I}))}for(let E of h.children)g.push(...c(E));return g},u=c(s.targetSnapshot.root);return u.length===0?Q(s):dn(Promise.all(u).then(()=>s))}),mf(()=>this.afterPreactivation()),Mt(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return u?dn(u).pipe(ce(()=>t)):Q(t)}),Nt(1),Mt(s=>{let c=d0(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=Re(_({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new Do);let u=t.beforeActivateHandler.deferredHandle;return u?dn(u.then(()=>s)):Q(s)}),kt(s=>{new Ou(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=ox,c)),this.lastSuccessfulNavigation.set(Ge(this.currentNavigation)),this.events.next(new ei(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),we(Bf(o.signal).pipe(qe(()=>!r&&!t.targetRouterState),kt(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",on.Aborted)}))),kt({complete:()=>{r=!0}}),we(this.transitionAbortWithErrorSubject.pipe(kt(s=>{throw s}))),Ki(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",on.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Xi(s=>{if(r=!0,this.destroyed)return t.resolve(!1),vn;if(Nf(s))this.events.next(new Vn(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),h0(s)?this.events.next(new Eo(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new Lr(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=xn(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Mo){let{message:h,cancellationCode:g}=Nl(this.urlSerializer,u);this.events.next(new Vn(t.id,this.urlSerializer.serialize(t.extractedUrl),h,g)),this.events.next(new Eo(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return vn}))}))}cancelNavigationTransition(e,t,r){let o=new Vn(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ge(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ax(i){return i!==Na}var Jf=new k("");var eg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>l(sx),providedIn:"root"})}return i})(),Bl=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},sx=(()=>{class i extends Bl{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ul=(()=>{class i{urlSerializer=l(To);options=l(Oo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(gi);urlHandlingStrategy=l(jl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new pn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof pn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Tf(null,l(Yt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>l(lx),providedIn:"root"})}return i})(),lx=(()=>{class i extends Ul{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Nr?this.updateStateMemento():e instanceof Li?this.commitTransition(t):e instanceof ja?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Do?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Vn&&!If(e)?this.restoreHistory(t):e instanceof Lr?this.restoreHistory(t,!0):e instanceof ei&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,u=_(_({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",u)}else{let c=_(_({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Gu(i,n){i.events.pipe(qe(e=>e instanceof ei||e instanceof Vn||e instanceof Lr||e instanceof Li),ce(e=>e instanceof ei||e instanceof Li?0:(e instanceof Vn?e.code===on.Redirect||e.code===on.SupersededByNewNavigation:!1)?2:1),qe(e=>e!==2),Nt(1)).subscribe(()=>{n()})}var yt=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Wd);stateManager=l(Ul);options=l(Oo,{optional:!0})||{};pendingTasks=l(Fh);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Qf);urlSerializer=l(To);location=l(gi);urlHandlingStrategy=l(jl);injector=l(Yt);_events=new z;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(eg);injectorCleanup=l(Jf,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Xa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(zl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new xt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Ge(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Vn&&t.code!==on.Redirect&&t.code!==on.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ei)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Eo){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ax(r.source)},a);this.scheduleNavigation(s,Na,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}l0(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Na,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Re(_({},o),{browserUrl:e})),r){let u=_({},r);delete u.navigationId,delete u.\u0275routerPageId,delete u.\u0275routerUrl,Object.keys(u).length!==0&&(o.state=u)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(u=>{this.disposed||this.injector.get(fa)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Hu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,u=c?this.currentUrlTree.fragment:a,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let g;try{let E=r?r.snapshot:this.routerState.snapshot.root;g=Df(E)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return Ef(g,e,h,u??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=or(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Na,null,t)}navigate(e,t={skipLocationChange:!1}){return cx(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(pa(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=_({},Bu):t===!1?r=_({},Ba):r=_(_({},Ba),t),or(e))return Du(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Du(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,u;a?(s=a.resolve,c=a.reject,u=a.promise):u=new Promise((g,E)=>{s=g,c=E});let h=this.pendingTasks.add();return Gu(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function cx(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new de(4008,!1)}var ux=(()=>{class i{router=l(yt);stateManager=l(Ul);fragment=Z("");queryParams=Z({});path=Z("");serializer=l(To);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ei&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new pn(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),gt=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new fi("href"),{optional:!0});reactiveHref=ap(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ge(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ge(this._target)}_target=Z(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ge(this._queryParams)}_queryParams=Z(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ge(this._fragment)}_fragment=Z(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ge(this._queryParamsHandling)}_queryParamsHandling=Z(void 0);set state(e){this._state.set(e)}get state(){return Ge(this._state)}_state=Z(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ge(this._info)}_info=Z(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ge(this._relativeTo)}_relativeTo=Z(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ge(this._preserveFragment)}_preserveFragment=Z(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ge(this._skipLocationChange)}_skipLocationChange=Z(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ge(this._replaceUrl)}_replaceUrl=Z(!1);isAnchorElement;onChanges=new z;applicationErrorHandler=l(fa);options=l(Oo,{optional:!0});reactiveRouterState=l(ux);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Z(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(or(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=Rt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:or(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Ge(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(me(yt),me(fn),Hd("tabindex"),me(Le),me(H),me(bo))};static \u0275dir=F({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&O("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&ee("href",r.reactiveHref(),Zh)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",U],skipLocationChange:[2,"skipLocationChange","skipLocationChange",U],replaceUrl:[2,"replaceUrl","replaceUrl",U],routerLink:"routerLink"},features:[et]})}return i})(),Wu=(()=>{class i{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new J;link=l(gt,{optional:!0});constructor(e,t,r,o){this.router=e,this.element=t,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof ei&&this.update()})}ngAfterContentInit(){Q(this.links.changes,Q(null)).pipe(Ld()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=dn(e).pipe(Ld()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=mx(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?_({},Bu):_({},Ba);return r=>{let o=r.urlTree;return o?Ge(zu(o,e,t)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||i)(me(yt),me(H),me(Le),me(Me))};static \u0275dir=F({type:i,selectors:[["","routerLinkActive",""]],contentQueries:function(t,r,o){if(t&1&&Bt(o,gt,5),t&2){let a;G(a=W())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[et]})}return i})();function mx(i){let n=i;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var hx=new k("");function qu(i,...n){return wr([{provide:Xa,multi:!0,useValue:i},[],{provide:fn,useFactory:px},{provide:Kh,multi:!0,useFactory:fx},n.map(e=>e.\u0275providers)])}function px(){return l(yt).routerState.root}function fx(){let i=l(ue);return n=>{let e=i.get(hi);if(n!==e.components[0])return;let t=i.get(yt),r=i.get(gx);i.get(_x)===1&&t.initialNavigation(),i.get(bx,null,{optional:!0})?.setUpPreloading(),i.get(hx,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var gx=new k("",{factory:()=>new z}),_x=new k("",{factory:()=>1});var bx=new k("");var yx=Object.defineProperty,xx=Object.defineProperties,Cx=Object.getOwnPropertyDescriptors,tg=Object.getOwnPropertySymbols,wx=Object.prototype.hasOwnProperty,kx=Object.prototype.propertyIsEnumerable,Xu=(i,n,e)=>n in i?yx(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,ng=(i,n)=>{for(var e in n||(n={}))wx.call(n,e)&&Xu(i,e,n[e]);if(tg)for(var e of tg(n))kx.call(n,e)&&Xu(i,e,n[e]);return i},Dx=(i,n)=>xx(i,Cx(n)),Ce=(i,n,e)=>(Xu(i,typeof n!="symbol"?n+"":n,e),e),yi=globalThis;function jn(i){return(yi.__Zone_symbol_prefix||"__zone_symbol__")+i}function Ex(){let i=yi.performance;function n(Ke){i&&i.mark&&i.mark(Ke)}function e(Ke,y){i&&i.measure&&i.measure(Ke,y)}n("Zone");let t=class Ku{constructor(y,v){Ce(this,"_parent"),Ce(this,"_name"),Ce(this,"_properties"),Ce(this,"_zoneDelegate"),this._parent=y,this._name=v?v.name||"unnamed":"<root>",this._properties=v&&v.properties||{},this._zoneDelegate=new a(this,this._parent&&this._parent._zoneDelegate,v)}static assertZonePatched(){if(yi.Promise!==ve.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let y=Ku.current;for(;y.parent;)y=y.parent;return y}static get current(){return le.zone}static get currentTask(){return cn}static __load_patch(y,v,b=!1){if(ve.hasOwnProperty(y)){let se=yi[jn("forceDuplicateZoneCheck")]===!0;if(!b&&se)throw Error("Already loaded patch: "+y)}else if(!yi["__Zone_disable_"+y]){let se="Zone:"+y;n(se),ve[y]=v(yi,Ku,Oe),e(se,se)}}get parent(){return this._parent}get name(){return this._name}get(y){let v=this.getZoneWith(y);if(v)return v._properties[y]}getZoneWith(y){let v=this;for(;v;){if(v._properties.hasOwnProperty(y))return v;v=v._parent}return null}fork(y){if(!y)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,y)}wrap(y,v){if(typeof y!="function")throw new Error("Expecting function got: "+y);let b=this._zoneDelegate.intercept(this,y,v),se=this;return function(){return se.runGuarded(b,this,arguments,v)}}run(y,v,b,se){le={parent:le,zone:this};try{return this._zoneDelegate.invoke(this,y,v,b,se)}finally{le=le.parent}}runGuarded(y,v=null,b,se){le={parent:le,zone:this};try{try{return this._zoneDelegate.invoke(this,y,v,b,se)}catch(Qe){if(this._zoneDelegate.handleError(this,Qe))throw Qe}}finally{le=le.parent}}runTask(y,v,b){if(y.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(y.zone||re).name+"; Execution: "+this.name+")");let se=y,{type:Qe,data:{isPeriodic:Pe=!1,isRefreshable:qn=!1}={}}=y;if(y.state===N&&(Qe===ke||Qe===wt))return;let Ai=y.state!=Ie;Ai&&se._transitionTo(Ie,he);let Ri=cn;cn=se,le={parent:le,zone:this};try{Qe==wt&&y.data&&!Pe&&!qn&&(y.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,se,v,b)}catch(Zn){if(this._zoneDelegate.handleError(this,Zn))throw Zn}}finally{let Zn=y.state;if(Zn!==N&&Zn!==Ne)if(Qe==ke||Pe||qn&&Zn===P)Ai&&se._transitionTo(he,Ie,P);else{let L=se._zoneDelegates;this._updateTaskCount(se,-1),Ai&&se._transitionTo(N,Ie,N),qn&&(se._zoneDelegates=L)}le=le.parent,cn=Ri}}scheduleTask(y){if(y.zone&&y.zone!==this){let b=this;for(;b;){if(b===y.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${y.zone.name}`);b=b.parent}}y._transitionTo(P,N);let v=[];y._zoneDelegates=v,y._zone=this;try{y=this._zoneDelegate.scheduleTask(this,y)}catch(b){throw y._transitionTo(Ne,P,N),this._zoneDelegate.handleError(this,b),b}return y._zoneDelegates===v&&this._updateTaskCount(y,1),y.state==P&&y._transitionTo(he,P),y}scheduleMicroTask(y,v,b,se){return this.scheduleTask(new s(oe,y,v,b,se,void 0))}scheduleMacroTask(y,v,b,se,Qe){return this.scheduleTask(new s(wt,y,v,b,se,Qe))}scheduleEventTask(y,v,b,se,Qe){return this.scheduleTask(new s(ke,y,v,b,se,Qe))}cancelTask(y){if(y.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(y.zone||re).name+"; Execution: "+this.name+")");if(!(y.state!==he&&y.state!==Ie)){y._transitionTo(He,he,Ie);try{this._zoneDelegate.cancelTask(this,y)}catch(v){throw y._transitionTo(Ne,He),this._zoneDelegate.handleError(this,v),v}return this._updateTaskCount(y,-1),y._transitionTo(N,He),y.runCount=-1,y}}_updateTaskCount(y,v){let b=y._zoneDelegates;v==-1&&(y._zoneDelegates=null);for(let se=0;se<b.length;se++)b[se]._updateTaskCount(y.type,v)}};Ce(t,"__symbol__",jn);let r=t,o={name:"",onHasTask:(Ke,y,v,b)=>Ke.hasTask(v,b),onScheduleTask:(Ke,y,v,b)=>Ke.scheduleTask(v,b),onInvokeTask:(Ke,y,v,b,se,Qe)=>Ke.invokeTask(v,b,se,Qe),onCancelTask:(Ke,y,v,b)=>Ke.cancelTask(v,b)};class a{constructor(y,v,b){Ce(this,"_zone"),Ce(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),Ce(this,"_parentDelegate"),Ce(this,"_forkDlgt"),Ce(this,"_forkZS"),Ce(this,"_forkCurrZone"),Ce(this,"_interceptDlgt"),Ce(this,"_interceptZS"),Ce(this,"_interceptCurrZone"),Ce(this,"_invokeDlgt"),Ce(this,"_invokeZS"),Ce(this,"_invokeCurrZone"),Ce(this,"_handleErrorDlgt"),Ce(this,"_handleErrorZS"),Ce(this,"_handleErrorCurrZone"),Ce(this,"_scheduleTaskDlgt"),Ce(this,"_scheduleTaskZS"),Ce(this,"_scheduleTaskCurrZone"),Ce(this,"_invokeTaskDlgt"),Ce(this,"_invokeTaskZS"),Ce(this,"_invokeTaskCurrZone"),Ce(this,"_cancelTaskDlgt"),Ce(this,"_cancelTaskZS"),Ce(this,"_cancelTaskCurrZone"),Ce(this,"_hasTaskDlgt"),Ce(this,"_hasTaskDlgtOwner"),Ce(this,"_hasTaskZS"),Ce(this,"_hasTaskCurrZone"),this._zone=y,this._parentDelegate=v,this._forkZS=b&&(b&&b.onFork?b:v._forkZS),this._forkDlgt=b&&(b.onFork?v:v._forkDlgt),this._forkCurrZone=b&&(b.onFork?this._zone:v._forkCurrZone),this._interceptZS=b&&(b.onIntercept?b:v._interceptZS),this._interceptDlgt=b&&(b.onIntercept?v:v._interceptDlgt),this._interceptCurrZone=b&&(b.onIntercept?this._zone:v._interceptCurrZone),this._invokeZS=b&&(b.onInvoke?b:v._invokeZS),this._invokeDlgt=b&&(b.onInvoke?v:v._invokeDlgt),this._invokeCurrZone=b&&(b.onInvoke?this._zone:v._invokeCurrZone),this._handleErrorZS=b&&(b.onHandleError?b:v._handleErrorZS),this._handleErrorDlgt=b&&(b.onHandleError?v:v._handleErrorDlgt),this._handleErrorCurrZone=b&&(b.onHandleError?this._zone:v._handleErrorCurrZone),this._scheduleTaskZS=b&&(b.onScheduleTask?b:v._scheduleTaskZS),this._scheduleTaskDlgt=b&&(b.onScheduleTask?v:v._scheduleTaskDlgt),this._scheduleTaskCurrZone=b&&(b.onScheduleTask?this._zone:v._scheduleTaskCurrZone),this._invokeTaskZS=b&&(b.onInvokeTask?b:v._invokeTaskZS),this._invokeTaskDlgt=b&&(b.onInvokeTask?v:v._invokeTaskDlgt),this._invokeTaskCurrZone=b&&(b.onInvokeTask?this._zone:v._invokeTaskCurrZone),this._cancelTaskZS=b&&(b.onCancelTask?b:v._cancelTaskZS),this._cancelTaskDlgt=b&&(b.onCancelTask?v:v._cancelTaskDlgt),this._cancelTaskCurrZone=b&&(b.onCancelTask?this._zone:v._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let se=b&&b.onHasTask,Qe=v&&v._hasTaskZS;(se||Qe)&&(this._hasTaskZS=se?b:o,this._hasTaskDlgt=v,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,b.onScheduleTask||(this._scheduleTaskZS=o,this._scheduleTaskDlgt=v,this._scheduleTaskCurrZone=this._zone),b.onInvokeTask||(this._invokeTaskZS=o,this._invokeTaskDlgt=v,this._invokeTaskCurrZone=this._zone),b.onCancelTask||(this._cancelTaskZS=o,this._cancelTaskDlgt=v,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(y,v){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,y,v):new r(y,v)}intercept(y,v,b){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,y,v,b):v}invoke(y,v,b,se,Qe){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,y,v,b,se,Qe):v.apply(b,se)}handleError(y,v){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,y,v):!0}scheduleTask(y,v){let b=v;if(this._scheduleTaskZS)this._hasTaskZS&&b._zoneDelegates.push(this._hasTaskDlgtOwner),b=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,y,v),b||(b=v);else if(v.scheduleFn)v.scheduleFn(v);else if(v.type==oe)K(v);else throw new Error("Task is missing scheduleFn.");return b}invokeTask(y,v,b,se){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,y,v,b,se):v.callback.apply(b,se)}cancelTask(y,v){let b;if(this._cancelTaskZS)b=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,y,v);else{if(!v.cancelFn)throw Error("Task is not cancelable");b=v.cancelFn(v)}return b}hasTask(y,v){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,y,v)}catch(b){this.handleError(y,b)}}_updateTaskCount(y,v){let b=this._taskCounts,se=b[y],Qe=b[y]=se+v;if(Qe<0)throw new Error("More tasks executed then were scheduled.");if(se==0||Qe==0){let Pe={microTask:b.microTask>0,macroTask:b.macroTask>0,eventTask:b.eventTask>0,change:y};this.hasTask(this._zone,Pe)}}}class s{constructor(y,v,b,se,Qe,Pe){if(Ce(this,"type"),Ce(this,"source"),Ce(this,"invoke"),Ce(this,"callback"),Ce(this,"data"),Ce(this,"scheduleFn"),Ce(this,"cancelFn"),Ce(this,"_zone",null),Ce(this,"runCount",0),Ce(this,"_zoneDelegates",null),Ce(this,"_state","notScheduled"),this.type=y,this.source=v,this.data=se,this.scheduleFn=Qe,this.cancelFn=Pe,!b)throw new Error("callback is not defined");this.callback=b;let qn=this;y===ke&&se&&se.useG?this.invoke=s.invokeTask:this.invoke=function(){return s.invokeTask.call(yi,qn,this,arguments)}}static invokeTask(y,v,b){y||(y=this),Mn++;try{return y.runCount++,y.zone.runTask(y,v,b)}finally{Mn==1&&te(),Mn--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(N,P)}_transitionTo(y,v,b){if(this._state===v||this._state===b)this._state=y,y==N&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${y}', expecting state '${v}'${b?" or '"+b+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let c=jn("setTimeout"),u=jn("Promise"),h=jn("then"),g=[],E=!1,I;function q(Ke){if(I||yi[u]&&(I=yi[u].resolve(0)),I){let y=I[h];y||(y=I.then),y.call(I,Ke)}else yi[c](Ke,0)}function K(Ke){Mn===0&&g.length===0&&q(te),Ke&&g.push(Ke)}function te(){if(!E){for(E=!0;g.length;){let Ke=g;g=[];for(let y=0;y<Ke.length;y++){let v=Ke[y];try{v.zone.runTask(v,null,null)}catch(b){Oe.onUnhandledError(b)}}}Oe.microtaskDrainDone(),E=!1}}let re={name:"NO ZONE"},N="notScheduled",P="scheduling",he="scheduled",Ie="running",He="canceling",Ne="unknown",oe="microTask",wt="macroTask",ke="eventTask",ve={},Oe={symbol:jn,currentZoneFrame:()=>le,onUnhandledError:at,microtaskDrainDone:at,scheduleMicroTask:K,showUncaughtError:()=>!r[jn("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:at,patchMethod:()=>at,bindArguments:()=>[],patchThen:()=>at,patchMacroTask:()=>at,patchEventPrototype:()=>at,getGlobalObjects:()=>{},ObjectDefineProperty:()=>at,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>at,wrapWithCurrentZone:()=>at,filterProperties:()=>[],attachOriginToPatched:()=>at,_redefineProperty:()=>at,patchCallbacks:()=>at,nativeScheduleMicroTask:q},le={parent:null,zone:new r(null,null)},cn=null,Mn=0;function at(){}return e("Zone","Zone"),r}function Sx(){var i;let n=globalThis,e=n[jn("forceDuplicateZoneCheck")]===!0;if(n.Zone&&(e||typeof n.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(i=n.Zone)!=null||(n.Zone=Ex()),n.Zone}var Qa=Object.getOwnPropertyDescriptor,Ju=Object.defineProperty,em=Object.getPrototypeOf,Mx=Object.create,Ix=Array.prototype.slice,tm="addEventListener",nm="removeEventListener",Zu=jn(tm),Yu=jn(nm),Bi="true",zi="false",Ja=jn("");function im(i,n){return Zone.current.wrap(i,n)}function rm(i,n,e,t,r){return Zone.current.scheduleMacroTask(i,n,e,t,r)}var Xe=jn,Gl=typeof window<"u",Wl=Gl?window:void 0,Ut=Gl&&Wl||globalThis,Tx="removeAttribute";function om(i,n){for(let e=i.length-1;e>=0;e--)typeof i[e]=="function"&&(i[e]=im(i[e],n+"_"+e));return i}function Ax(i,n){let e=i.constructor.name;for(let t=0;t<n.length;t++){let r=n[t],o=i[r];if(o){let a=Qa(i,r);if(!lg(a))continue;i[r]=(s=>{let c=function(){return s.apply(this,om(arguments,e+"."+r))};return ji(c,s),c})(o)}}}function lg(i){return i?i.writable===!1?!1:!(typeof i.get=="function"&&typeof i.set>"u"):!0}var cg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,ql=!("nw"in Ut)&&typeof Ut.process<"u"&&Ut.process.toString()==="[object process]",am=!ql&&!cg&&!!(Gl&&Wl.HTMLElement),dg=typeof Ut.process<"u"&&Ut.process.toString()==="[object process]"&&!cg&&!!(Gl&&Wl.HTMLElement),$l={},Rx=Xe("enable_beforeunload"),ig=function(i){if(i=i||Ut.event,!i)return;let n=$l[i.type];n||(n=$l[i.type]=Xe("ON_PROPERTY"+i.type));let e=this||i.target||Ut,t=e[n],r;if(am&&e===Wl&&i.type==="error"){let o=i;r=t&&t.call(this,o.message,o.filename,o.lineno,o.colno,o.error),r===!0&&i.preventDefault()}else r=t&&t.apply(this,arguments),i.type==="beforeunload"&&Ut[Rx]&&typeof r=="string"?i.returnValue=r:r!=null&&!r&&i.preventDefault();return r};function rg(i,n,e){let t=Qa(i,n);if(!t&&e&&Qa(e,n)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;let r=Xe("on"+n+"patched");if(i.hasOwnProperty(r)&&i[r])return;delete t.writable,delete t.value;let o=t.get,a=t.set,s=n.slice(2),c=$l[s];c||(c=$l[s]=Xe("ON_PROPERTY"+s)),t.set=function(u){let h=this;if(!h&&i===Ut&&(h=Ut),!h)return;typeof h[c]=="function"&&h.removeEventListener(s,ig),a?.call(h,null),h[c]=u,typeof u=="function"&&h.addEventListener(s,ig,!1)},t.get=function(){let u=this;if(!u&&i===Ut&&(u=Ut),!u)return null;let h=u[c];if(h)return h;if(o){let g=o.call(this);if(g)return t.set.call(this,g),typeof u[Tx]=="function"&&u.removeAttribute(n),g}return null},Ju(i,n,t),i[r]=!0}function ug(i,n,e){if(n)for(let t=0;t<n.length;t++)rg(i,"on"+n[t],e);else{let t=[];for(let r in i)r.slice(0,2)=="on"&&t.push(r);for(let r=0;r<t.length;r++)rg(i,t[r],e)}}var ti=Xe("originalInstance");function Ka(i){let n=Ut[i];if(!n)return;Ut[Xe(i)]=n,Ut[i]=function(){let r=om(arguments,i);switch(r.length){case 0:this[ti]=new n;break;case 1:this[ti]=new n(r[0]);break;case 2:this[ti]=new n(r[0],r[1]);break;case 3:this[ti]=new n(r[0],r[1],r[2]);break;case 4:this[ti]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},ji(Ut[i],n);let e=new n(function(){}),t;for(t in e)i==="XMLHttpRequest"&&t==="responseBlob"||(function(r){typeof e[r]=="function"?Ut[i].prototype[r]=function(){return this[ti][r].apply(this[ti],arguments)}:Ju(Ut[i].prototype,r,{set:function(o){typeof o=="function"?(this[ti][r]=im(o,i+"."+r),ji(this[ti][r],o)):this[ti][r]=o},get:function(){return this[ti][r]}})})(t);for(t in n)t!=="prototype"&&n.hasOwnProperty(t)&&(Ut[i][t]=n[t])}function Ox(i,n){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(i).forEach(t=>{let r=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(n,t,{get:function(){return i[t]},set:function(o){r&&(!r.writable||typeof r.set!="function")||(i[t]=o)},enumerable:r?r.enumerable:!0,configurable:r?r.configurable:!0})})}var Px=!1;function Vi(i,n,e){let t=i;for(;t&&!t.hasOwnProperty(n);)t=em(t);!t&&i[n]&&(t=i);let r=Xe(n),o=null;if(t&&(!(o=t[r])||!t.hasOwnProperty(r))){o=t[r]=t[n];let a=t&&Qa(t,n);if(lg(a)){let s=e(o,r,n);t[n]=function(){return s(this,arguments)},ji(t[n],o),Px&&Ox(o,t[n])}}return o}function Fx(i,n,e){let t=null;function r(o){let a=o.data;return a.args[a.cbIdx]=function(){o.invoke.apply(this,arguments)},t.apply(a.target,a.args),o}t=Vi(i,n,o=>function(a,s){let c=e(a,s);return c.cbIdx>=0&&typeof s[c.cbIdx]=="function"?rm(c.name,s[c.cbIdx],c,r):o.apply(a,s)})}function ji(i,n){i[Xe("OriginalDelegate")]=n}function og(i){return typeof i=="function"}function ag(i){return typeof i=="number"}var Nx={useG:!0},Un={},mg={},hg=new RegExp("^"+Ja+"(\\w+)(true|false)$"),pg=Xe("propagationStopped");function fg(i,n){let e=(n?n(i):i)+zi,t=(n?n(i):i)+Bi,r=Ja+e,o=Ja+t;Un[i]={},Un[i][zi]=r,Un[i][Bi]=o}function Lx(i,n,e,t){let r=t&&t.add||tm,o=t&&t.rm||nm,a=t&&t.listeners||"eventListeners",s=t&&t.rmAll||"removeAllListeners",c=Xe(r),u="."+r+":",h="prependListener",g="."+h+":",E=function(N,P,he){if(N.isRemoved)return;let Ie=N.callback;typeof Ie=="object"&&Ie.handleEvent&&(N.callback=oe=>Ie.handleEvent(oe),N.originalDelegate=Ie);let He;try{N.invoke(N,P,[he])}catch(oe){He=oe}let Ne=N.options;if(Ne&&typeof Ne=="object"&&Ne.once){let oe=N.originalDelegate?N.originalDelegate:N.callback;P[o].call(P,he.type,oe,Ne)}return He};function I(N,P,he){if(P=P||i.event,!P)return;let Ie=N||P.target||i,He=Ie[Un[P.type][he?Bi:zi]];if(He){let Ne=[];if(He.length===1){let oe=E(He[0],Ie,P);oe&&Ne.push(oe)}else{let oe=He.slice();for(let wt=0;wt<oe.length&&!(P&&P[pg]===!0);wt++){let ke=E(oe[wt],Ie,P);ke&&Ne.push(ke)}}if(Ne.length===1)throw Ne[0];for(let oe=0;oe<Ne.length;oe++){let wt=Ne[oe];n.nativeScheduleMicroTask(()=>{throw wt})}}}let q=function(N){return I(this,N,!1)},K=function(N){return I(this,N,!0)};function te(N,P){if(!N)return!1;let he=!0;P&&P.useG!==void 0&&(he=P.useG);let Ie=P&&P.vh,He=!0;P&&P.chkDup!==void 0&&(He=P.chkDup);let Ne=!1;P&&P.rt!==void 0&&(Ne=P.rt);let oe=N;for(;oe&&!oe.hasOwnProperty(r);)oe=em(oe);if(!oe&&N[r]&&(oe=N),!oe||oe[c])return!1;let wt=P&&P.eventNameToString,ke={},ve=oe[c]=oe[r],Oe=oe[Xe(o)]=oe[o],le=oe[Xe(a)]=oe[a],cn=oe[Xe(s)]=oe[s],Mn;P&&P.prepend&&(Mn=oe[Xe(P.prepend)]=oe[P.prepend]);function at(x,B){return B?typeof x=="boolean"?{capture:x,passive:!0}:x?typeof x=="object"&&x.passive!==!1?Dx(ng({},x),{passive:!0}):x:{passive:!0}:x}let Ke=function(x){if(!ke.isExisting)return ve.call(ke.target,ke.eventName,ke.capture?K:q,ke.options)},y=function(x){if(!x.isRemoved){let B=Un[x.eventName],ae;B&&(ae=B[x.capture?Bi:zi]);let fe=ae&&x.target[ae];if(fe){for(let ne=0;ne<fe.length;ne++)if(fe[ne]===x){fe.splice(ne,1),x.isRemoved=!0,x.removeAbortListener&&(x.removeAbortListener(),x.removeAbortListener=null),fe.length===0&&(x.allRemoved=!0,x.target[ae]=null);break}}}if(x.allRemoved)return Oe.call(x.target,x.eventName,x.capture?K:q,x.options)},v=function(x){return ve.call(ke.target,ke.eventName,x.invoke,ke.options)},b=function(x){return Mn.call(ke.target,ke.eventName,x.invoke,ke.options)},se=function(x){return Oe.call(x.target,x.eventName,x.invoke,x.options)},Qe=he?Ke:v,Pe=he?y:se,qn=function(x,B){let ae=typeof B;return ae==="function"&&x.callback===B||ae==="object"&&x.originalDelegate===B},Ai=P?.diff||qn,Ri=Zone[Xe("UNPATCHED_EVENTS")],Zn=i[Xe("PASSIVE_EVENTS")];function L(x){if(typeof x=="object"&&x!==null){let B=ng({},x);return x.signal&&(B.signal=x.signal),B}return x}let A=function(x,B,ae,fe,ne=!1,De=!1){return function(){let Te=this||i,Ae=arguments[0];P&&P.transferEventName&&(Ae=P.transferEventName(Ae));let dt=arguments[1];if(!dt)return x.apply(this,arguments);if(ql&&Ae==="uncaughtException")return x.apply(this,arguments);let ut=!1;if(typeof dt!="function"){if(!dt.handleEvent)return x.apply(this,arguments);ut=!0}if(Ie&&!Ie(x,dt,Te,arguments))return;let Yi=!!Zn&&Zn.indexOf(Ae)!==-1,Yn=L(at(arguments[2],Yi)),Cr=Yn?.signal;if(Cr?.aborted)return;if(Ri){for(let ci=0;ci<Ri.length;ci++)if(Ae===Ri[ci])return Yi?x.call(Te,Ae,dt,Yn):x.apply(this,arguments)}let Fd=Yn?typeof Yn=="boolean"?!0:Yn.capture:!1,xh=Yn&&typeof Yn=="object"?Yn.once:!1,mv=Zone.current,Nd=Un[Ae];Nd||(fg(Ae,wt),Nd=Un[Ae]);let Ch=Nd[Fd?Bi:zi],Jr=Te[Ch],wh=!1;if(Jr){if(wh=!0,He){for(let ci=0;ci<Jr.length;ci++)if(Ai(Jr[ci],dt))return}}else Jr=Te[Ch]=[];let Us,kh=Te.constructor.name,Dh=mg[kh];Dh&&(Us=Dh[Ae]),Us||(Us=kh+B+(wt?wt(Ae):Ae)),ke.options=Yn,xh&&(ke.options.once=!1),ke.target=Te,ke.capture=Fd,ke.eventName=Ae,ke.isExisting=wh;let ma=he?Nx:void 0;ma&&(ma.taskData=ke),Cr&&(ke.options.signal=void 0);let Xn=mv.scheduleEventTask(Us,dt,ma,ae,fe);if(Cr){ke.options.signal=Cr;let ci=()=>Xn.zone.cancelTask(Xn);x.call(Cr,"abort",ci,{once:!0}),Xn.removeAbortListener=()=>Cr.removeEventListener("abort",ci)}if(ke.target=null,ma&&(ma.taskData=null),xh&&(ke.options.once=!0),typeof Xn.options!="boolean"&&(Xn.options=Yn),Xn.target=Te,Xn.capture=Fd,Xn.eventName=Ae,ut&&(Xn.originalDelegate=dt),De?Jr.unshift(Xn):Jr.push(Xn),ne)return Te}};return oe[r]=A(ve,u,Qe,Pe,Ne),Mn&&(oe[h]=A(Mn,g,b,Pe,Ne,!0)),oe[o]=function(){let x=this||i,B=arguments[0];P&&P.transferEventName&&(B=P.transferEventName(B));let ae=arguments[2],fe=ae?typeof ae=="boolean"?!0:ae.capture:!1,ne=arguments[1];if(!ne)return Oe.apply(this,arguments);if(Ie&&!Ie(Oe,ne,x,arguments))return;let De=Un[B],Te;De&&(Te=De[fe?Bi:zi]);let Ae=Te&&x[Te];if(Ae)for(let dt=0;dt<Ae.length;dt++){let ut=Ae[dt];if(Ai(ut,ne)){if(Ae.splice(dt,1),ut.isRemoved=!0,Ae.length===0&&(ut.allRemoved=!0,x[Te]=null,!fe&&typeof B=="string")){let Yi=Ja+"ON_PROPERTY"+B;x[Yi]=null}return ut.zone.cancelTask(ut),Ne?x:void 0}}return Oe.apply(this,arguments)},oe[a]=function(){let x=this||i,B=arguments[0];P&&P.transferEventName&&(B=P.transferEventName(B));let ae=[],fe=gg(x,wt?wt(B):B);for(let ne=0;ne<fe.length;ne++){let De=fe[ne],Te=De.originalDelegate?De.originalDelegate:De.callback;ae.push(Te)}return ae},oe[s]=function(){let x=this||i,B=arguments[0];if(B){P&&P.transferEventName&&(B=P.transferEventName(B));let ae=Un[B];if(ae){let fe=ae[zi],ne=ae[Bi],De=x[fe],Te=x[ne];if(De){let Ae=De.slice();for(let dt=0;dt<Ae.length;dt++){let ut=Ae[dt],Yi=ut.originalDelegate?ut.originalDelegate:ut.callback;this[o].call(this,B,Yi,ut.options)}}if(Te){let Ae=Te.slice();for(let dt=0;dt<Ae.length;dt++){let ut=Ae[dt],Yi=ut.originalDelegate?ut.originalDelegate:ut.callback;this[o].call(this,B,Yi,ut.options)}}}}else{let ae=Object.keys(x);for(let fe=0;fe<ae.length;fe++){let ne=ae[fe],De=hg.exec(ne),Te=De&&De[1];Te&&Te!=="removeListener"&&this[s].call(this,Te)}this[s].call(this,"removeListener")}if(Ne)return this},ji(oe[r],ve),ji(oe[o],Oe),cn&&ji(oe[s],cn),le&&ji(oe[a],le),!0}let re=[];for(let N=0;N<e.length;N++)re[N]=te(e[N],t);return re}function gg(i,n){if(!n){let o=[];for(let a in i){let s=hg.exec(a),c=s&&s[1];if(c&&(!n||c===n)){let u=i[a];if(u)for(let h=0;h<u.length;h++)o.push(u[h])}}return o}let e=Un[n];e||(fg(n),e=Un[n]);let t=i[e[zi]],r=i[e[Bi]];return t?r?t.concat(r):t.slice():r?r.slice():[]}function Bx(i,n){let e=i.Event;e&&e.prototype&&n.patchMethod(e.prototype,"stopImmediatePropagation",t=>function(r,o){r[pg]=!0,t&&t.apply(r,o)})}function zx(i,n){n.patchMethod(i,"queueMicrotask",e=>function(t,r){Zone.current.scheduleMicroTask("queueMicrotask",r[0])})}var Hl=Xe("zoneTask");function Po(i,n,e,t){let r=null,o=null;n+=t,e+=t;let a={};function s(u){let h=u.data;h.args[0]=function(){return u.invoke.apply(this,arguments)};let g=r.apply(i,h.args);return ag(g)?h.handleId=g:(h.handle=g,h.isRefreshable=og(g.refresh)),u}function c(u){let{handle:h,handleId:g}=u.data;return o.call(i,h??g)}r=Vi(i,n,u=>function(h,g){var E;if(og(g[0])){let I={isRefreshable:!1,isPeriodic:t==="Interval",delay:t==="Timeout"||t==="Interval"?g[1]||0:void 0,args:g},q=g[0];g[0]=function(){try{return q.apply(this,arguments)}finally{let{handle:Ie,handleId:He,isPeriodic:Ne,isRefreshable:oe}=I;!Ne&&!oe&&(He?delete a[He]:Ie&&(Ie[Hl]=null))}};let K=rm(n,g[0],I,s,c);if(!K)return K;let{handleId:te,handle:re,isRefreshable:N,isPeriodic:P}=K.data;if(te)a[te]=K;else if(re&&(re[Hl]=K,N&&!P)){let he=re.refresh;re.refresh=function(){let{zone:Ie,state:He}=K;return He==="notScheduled"?(K._state="scheduled",Ie._updateTaskCount(K,1)):He==="running"&&(K._state="scheduling"),he.call(this)}}return(E=re??te)!=null?E:K}else return u.apply(i,g)}),o=Vi(i,e,u=>function(h,g){let E=g[0],I;ag(E)?(I=a[E],delete a[E]):(I=E?.[Hl],I?E[Hl]=null:I=E),I?.type?I.cancelFn&&I.zone.cancelTask(I):u.apply(i,g)})}function Vx(i,n){let{isBrowser:e,isMix:t}=n.getGlobalObjects();if(!e&&!t||!i.customElements||!("customElements"in i))return;let r=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];n.patchCallbacks(n,i.customElements,"customElements","define",r)}function jx(i,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:e,zoneSymbolEventNames:t,TRUE_STR:r,FALSE_STR:o,ZONE_SYMBOL_PREFIX:a}=n.getGlobalObjects();for(let c=0;c<e.length;c++){let u=e[c],h=u+o,g=u+r,E=a+h,I=a+g;t[u]={},t[u][o]=E,t[u][r]=I}let s=i.EventTarget;if(!(!s||!s.prototype))return n.patchEventTarget(i,n,[s&&s.prototype]),!0}function Ux(i,n){n.patchEventPrototype(i,n)}function _g(i,n,e){if(!e||e.length===0)return n;let t=e.filter(o=>o.target===i);if(t.length===0)return n;let r=t[0].ignoreProperties;return n.filter(o=>r.indexOf(o)===-1)}function sg(i,n,e,t){if(!i)return;let r=_g(i,n,e);ug(i,r,t)}function Qu(i){return Object.getOwnPropertyNames(i).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function Hx(i,n){if(ql&&!dg||Zone[i.symbol("patchEvents")])return;let e=n.__Zone_ignore_on_properties,t=[];if(am){let r=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),sg(r,Qu(r),e,em(r))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<t.length;r++){let o=n[t[r]];o?.prototype&&sg(o.prototype,Qu(o.prototype),e)}}function $x(i){i.__load_patch("timers",n=>{let t="clear";Po(n,"set",t,"Timeout"),Po(n,"set",t,"Interval"),Po(n,"set",t,"Immediate")}),i.__load_patch("requestAnimationFrame",n=>{Po(n,"request","cancel","AnimationFrame"),Po(n,"mozRequest","mozCancel","AnimationFrame"),Po(n,"webkitRequest","webkitCancel","AnimationFrame")}),i.__load_patch("blocking",(n,e)=>{let t=["alert","prompt","confirm"];for(let r=0;r<t.length;r++){let o=t[r];Vi(n,o,(a,s,c)=>function(u,h){return e.current.run(a,n,h,c)})}}),i.__load_patch("EventTarget",(n,e,t)=>{Ux(n,t),jx(n,t);let r=n.XMLHttpRequestEventTarget;r&&r.prototype&&t.patchEventTarget(n,t,[r.prototype])}),i.__load_patch("MutationObserver",(n,e,t)=>{Ka("MutationObserver"),Ka("WebKitMutationObserver")}),i.__load_patch("IntersectionObserver",(n,e,t)=>{Ka("IntersectionObserver")}),i.__load_patch("FileReader",(n,e,t)=>{Ka("FileReader")}),i.__load_patch("on_property",(n,e,t)=>{Hx(t,n)}),i.__load_patch("customElements",(n,e,t)=>{Vx(n,t)}),i.__load_patch("XHR",(n,e)=>{u(n);let t=Xe("xhrTask"),r=Xe("xhrSync"),o=Xe("xhrListener"),a=Xe("xhrScheduled"),s=Xe("xhrURL"),c=Xe("xhrErrorBeforeScheduled");function u(h){let g=h.XMLHttpRequest;if(!g)return;let E=g.prototype;function I(ve){return ve[t]}let q=E[Zu],K=E[Yu];if(!q){let ve=h.XMLHttpRequestEventTarget;if(ve){let Oe=ve.prototype;q=Oe[Zu],K=Oe[Yu]}}let te="readystatechange",re="scheduled";function N(ve){let Oe=ve.data,le=Oe.target;le[a]=!1,le[c]=!1;let cn=le[o];q||(q=le[Zu],K=le[Yu]),cn&&K.call(le,te,cn);let Mn=le[o]=()=>{if(le.readyState===le.DONE)if(!Oe.aborted&&le[a]&&ve.state===re){let Ke=le[e.__symbol__("loadfalse")];if(le.status!==0&&Ke&&Ke.length>0){let y=ve.invoke;ve.invoke=function(){let v=le[e.__symbol__("loadfalse")];for(let b=0;b<v.length;b++)v[b]===ve&&v.splice(b,1);!Oe.aborted&&ve.state===re&&y.call(ve)},Ke.push(ve)}else ve.invoke()}else!Oe.aborted&&le[a]===!1&&(le[c]=!0)};return q.call(le,te,Mn),le[t]||(le[t]=ve),wt.apply(le,Oe.args),le[a]=!0,ve}function P(){}function he(ve){let Oe=ve.data;return Oe.aborted=!0,ke.apply(Oe.target,Oe.args)}let Ie=Vi(E,"open",()=>function(ve,Oe){return ve[r]=Oe[2]==!1,ve[s]=Oe[1],Ie.apply(ve,Oe)}),He="XMLHttpRequest.send",Ne=Xe("fetchTaskAborting"),oe=Xe("fetchTaskScheduling"),wt=Vi(E,"send",()=>function(ve,Oe){if(e.current[oe]===!0||ve[r])return wt.apply(ve,Oe);{let le={target:ve,url:ve[s],isPeriodic:!1,args:Oe,aborted:!1},cn=rm(He,P,le,N,he);ve&&ve[c]===!0&&!le.aborted&&cn.state===re&&cn.invoke()}}),ke=Vi(E,"abort",()=>function(ve,Oe){let le=I(ve);if(le&&typeof le.type=="string"){if(le.cancelFn==null||le.data&&le.data.aborted)return;le.zone.cancelTask(le)}else if(e.current[Ne]===!0)return ke.apply(ve,Oe)})}}),i.__load_patch("geolocation",n=>{n.navigator&&n.navigator.geolocation&&Ax(n.navigator.geolocation,["getCurrentPosition","watchPosition"])}),i.__load_patch("PromiseRejectionEvent",(n,e)=>{function t(r){return function(o){gg(n,r).forEach(s=>{let c=n.PromiseRejectionEvent;if(c){let u=new c(r,{promise:o.promise,reason:o.rejection});s.invoke(u)}})}}n.PromiseRejectionEvent&&(e[Xe("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),e[Xe("rejectionHandledHandler")]=t("rejectionhandled"))}),i.__load_patch("queueMicrotask",(n,e,t)=>{zx(n,t)})}function Gx(i){i.__load_patch("ZoneAwarePromise",(n,e,t)=>{let r=Object.getOwnPropertyDescriptor,o=Object.defineProperty;function a(L){if(L&&L.toString===Object.prototype.toString){let A=L.constructor&&L.constructor.name;return(A||"")+": "+JSON.stringify(L)}return L?L.toString():Object.prototype.toString.call(L)}let s=t.symbol,c=[],u=n[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,h=s("Promise"),g=s("then"),E="__creationTrace__";t.onUnhandledError=L=>{if(t.showUncaughtError()){let A=L&&L.rejection;A?console.error("Unhandled Promise rejection:",A instanceof Error?A.message:A,"; Zone:",L.zone.name,"; Task:",L.task&&L.task.source,"; Value:",A,A instanceof Error?A.stack:void 0):console.error(L)}},t.microtaskDrainDone=()=>{for(;c.length;){let L=c.shift();try{L.zone.runGuarded(()=>{throw L.throwOriginal?L.rejection:L})}catch(A){q(A)}}};let I=s("unhandledPromiseRejectionHandler");function q(L){t.onUnhandledError(L);try{let A=e[I];typeof A=="function"&&A.call(this,L)}catch{}}function K(L){return L&&typeof L.then=="function"}function te(L){return L}function re(L){return Pe.reject(L)}let N=s("state"),P=s("value"),he=s("finally"),Ie=s("parentPromiseValue"),He=s("parentPromiseState"),Ne="Promise.then",oe=null,wt=!0,ke=!1,ve=0;function Oe(L,A){return x=>{try{at(L,A,x)}catch(B){at(L,!1,B)}}}let le=function(){let L=!1;return function(x){return function(){L||(L=!0,x.apply(null,arguments))}}},cn="Promise resolved with itself",Mn=s("currentTaskTrace");function at(L,A,x){let B=le();if(L===x)throw new TypeError(cn);if(L[N]===oe){let ae=null;try{(typeof x=="object"||typeof x=="function")&&(ae=x&&x.then)}catch(fe){return B(()=>{at(L,!1,fe)})(),L}if(A!==ke&&x instanceof Pe&&x.hasOwnProperty(N)&&x.hasOwnProperty(P)&&x[N]!==oe)y(x),at(L,x[N],x[P]);else if(A!==ke&&typeof ae=="function")try{ae.call(x,B(Oe(L,A)),B(Oe(L,!1)))}catch(fe){B(()=>{at(L,!1,fe)})()}else{L[N]=A;let fe=L[P];if(L[P]=x,L[he]===he&&A===wt&&(L[N]=L[He],L[P]=L[Ie]),A===ke&&x instanceof Error){let ne=e.currentTask&&e.currentTask.data&&e.currentTask.data[E];ne&&o(x,Mn,{configurable:!0,enumerable:!1,writable:!0,value:ne})}for(let ne=0;ne<fe.length;)v(L,fe[ne++],fe[ne++],fe[ne++],fe[ne++]);if(fe.length==0&&A==ke){L[N]=ve;let ne=x;try{throw new Error("Uncaught (in promise): "+a(x)+(x&&x.stack?`
`+x.stack:""))}catch(De){ne=De}u&&(ne.throwOriginal=!0),ne.rejection=x,ne.promise=L,ne.zone=e.current,ne.task=e.currentTask,c.push(ne),t.scheduleMicroTask()}}}return L}let Ke=s("rejectionHandledHandler");function y(L){if(L[N]===ve){try{let A=e[Ke];A&&typeof A=="function"&&A.call(this,{rejection:L[P],promise:L})}catch{}L[N]=ke;for(let A=0;A<c.length;A++)L===c[A].promise&&c.splice(A,1)}}function v(L,A,x,B,ae){y(L);let fe=L[N],ne=fe?typeof B=="function"?B:te:typeof ae=="function"?ae:re;A.scheduleMicroTask(Ne,()=>{try{let De=L[P],Te=!!x&&he===x[he];Te&&(x[Ie]=De,x[He]=fe);let Ae=A.run(ne,void 0,Te&&ne!==re&&ne!==te?[]:[De]);at(x,!0,Ae)}catch(De){at(x,!1,De)}},x)}let b="function ZoneAwarePromise() { [native code] }",se=function(){},Qe=n.AggregateError;class Pe{static toString(){return b}static resolve(A){return A instanceof Pe?A:at(new this(null),wt,A)}static reject(A){return at(new this(null),ke,A)}static withResolvers(){let A={};return A.promise=new Pe((x,B)=>{A.resolve=x,A.reject=B}),A}static any(A){if(!A||typeof A[Symbol.iterator]!="function")return Promise.reject(new Qe([],"All promises were rejected"));let x=[],B=0;try{for(let ne of A)B++,x.push(Pe.resolve(ne))}catch{return Promise.reject(new Qe([],"All promises were rejected"))}if(B===0)return Promise.reject(new Qe([],"All promises were rejected"));let ae=!1,fe=[];return new Pe((ne,De)=>{for(let Te=0;Te<x.length;Te++)x[Te].then(Ae=>{ae||(ae=!0,ne(Ae))},Ae=>{fe.push(Ae),B--,B===0&&(ae=!0,De(new Qe(fe,"All promises were rejected")))})})}static race(A){let x,B,ae=new this((De,Te)=>{x=De,B=Te});function fe(De){x(De)}function ne(De){B(De)}for(let De of A)K(De)||(De=this.resolve(De)),De.then(fe,ne);return ae}static all(A){return Pe.allWithCallback(A)}static allSettled(A){return(this&&this.prototype instanceof Pe?this:Pe).allWithCallback(A,{thenCallback:B=>({status:"fulfilled",value:B}),errorCallback:B=>({status:"rejected",reason:B})})}static allWithCallback(A,x){let B,ae,fe=new this((Ae,dt)=>{B=Ae,ae=dt}),ne=2,De=0,Te=[];for(let Ae of A){K(Ae)||(Ae=this.resolve(Ae));let dt=De;try{Ae.then(ut=>{Te[dt]=x?x.thenCallback(ut):ut,ne--,ne===0&&B(Te)},ut=>{x?(Te[dt]=x.errorCallback(ut),ne--,ne===0&&B(Te)):ae(ut)})}catch(ut){ae(ut)}ne++,De++}return ne-=2,ne===0&&B(Te),fe}constructor(A){let x=this;if(!(x instanceof Pe))throw new Error("Must be an instanceof Promise.");x[N]=oe,x[P]=[];try{let B=le();A&&A(B(Oe(x,wt)),B(Oe(x,ke)))}catch(B){at(x,!1,B)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Pe}then(A,x){var B;let ae=(B=this.constructor)==null?void 0:B[Symbol.species];(!ae||typeof ae!="function")&&(ae=this.constructor||Pe);let fe=new ae(se),ne=e.current;return this[N]==oe?this[P].push(ne,fe,A,x):v(this,ne,fe,A,x),fe}catch(A){return this.then(null,A)}finally(A){var x;let B=(x=this.constructor)==null?void 0:x[Symbol.species];(!B||typeof B!="function")&&(B=Pe);let ae=new B(se);ae[he]=he;let fe=e.current;return this[N]==oe?this[P].push(fe,ae,A,A):v(this,fe,ae,A,A),ae}}Pe.resolve=Pe.resolve,Pe.reject=Pe.reject,Pe.race=Pe.race,Pe.all=Pe.all;let qn=n[h]=n.Promise;n.Promise=Pe;let Ai=s("thenPatched");function Ri(L){let A=L.prototype,x=r(A,"then");if(x&&(x.writable===!1||!x.configurable))return;let B=A.then;A[g]=B,L.prototype.then=function(ae,fe){return new Pe((De,Te)=>{B.call(this,De,Te)}).then(ae,fe)},L[Ai]=!0}t.patchThen=Ri;function Zn(L){return function(A,x){let B=L.apply(A,x);if(B instanceof Pe)return B;let ae=B.constructor;return ae[Ai]||Ri(ae),B}}if(qn){Ri(qn);let L=qn.try;L&&typeof L=="function"&&(Pe.try=L),Vi(n,"fetch",A=>Zn(A))}return Promise[e.__symbol__("uncaughtPromiseErrors")]=c,Pe})}function Wx(i){i.__load_patch("toString",n=>{let e=Function.prototype.toString,t=Xe("OriginalDelegate"),r=Xe("Promise"),o=Xe("Error"),a=function(){if(typeof this=="function"){let h=this[t];if(h)return typeof h=="function"?e.call(h):Object.prototype.toString.call(h);if(this===Promise){let g=n[r];if(g)return e.call(g)}if(this===Error){let g=n[o];if(g)return e.call(g)}}return e.call(this)};a[t]=e,Function.prototype.toString=a;let s=Object.prototype.toString,c="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?c:s.call(this)}})}function qx(i,n,e,t,r){let o=Zone.__symbol__(t);if(n[o])return;let a=n[o]=n[t];n[t]=function(s,c,u){return c&&c.prototype&&r.forEach(function(h){let g=`${e}.${t}::`+h,E=c.prototype;try{if(E.hasOwnProperty(h)){let I=i.ObjectGetOwnPropertyDescriptor(E,h);I&&I.value?(I.value=i.wrapWithCurrentZone(I.value,g),i._redefineProperty(c.prototype,h,I)):E[h]&&(E[h]=i.wrapWithCurrentZone(E[h],g))}else E[h]&&(E[h]=i.wrapWithCurrentZone(E[h],g))}catch{}}),a.call(n,s,c,u)},i.attachOriginToPatched(n[t],a)}function Zx(i){i.__load_patch("util",(n,e,t)=>{let r=Qu(n);t.patchOnProperties=ug,t.patchMethod=Vi,t.bindArguments=om,t.patchMacroTask=Fx;let o=e.__symbol__("BLACK_LISTED_EVENTS"),a=e.__symbol__("UNPATCHED_EVENTS");n[a]&&(n[o]=n[a]),n[o]&&(e[o]=e[a]=n[o]),t.patchEventPrototype=Bx,t.patchEventTarget=Lx,t.ObjectDefineProperty=Ju,t.ObjectGetOwnPropertyDescriptor=Qa,t.ObjectCreate=Mx,t.ArraySlice=Ix,t.patchClass=Ka,t.wrapWithCurrentZone=im,t.filterProperties=_g,t.attachOriginToPatched=ji,t._redefineProperty=Object.defineProperty,t.patchCallbacks=qx,t.getGlobalObjects=()=>({globalSources:mg,zoneSymbolEventNames:Un,eventNames:r,isBrowser:am,isMix:dg,isNode:ql,TRUE_STR:Bi,FALSE_STR:zi,ZONE_SYMBOL_PREFIX:Ja,ADD_EVENT_LISTENER_STR:tm,REMOVE_EVENT_LISTENER_STR:nm})})}function Yx(i){Gx(i),Wx(i),Zx(i)}var bg=Sx();Yx(bg);$x(bg);var Zl=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"max-w-screen-2xl","mx-auto","px-4","mt-32"],[1,"flex","flex-col","items-center","py-16","justify-center","mt-20","rounded-2xl","shadow-xl","relative"],["src","../images/hero1.jpg","alt","ski resort image",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-2xl"],[1,"flex","flex-col","p-8","rounded-2xl","items-center","relative"],[1,"my-6","font-extrabold","text-white","text-6xl"],["routerLink","/shop",1,"bg-linear-to-r","from-blue-600","to-cyan-500","font-semibold","text-2xl","text-white","rounded-2xl","px-8","py-4","border-2","border-transparent","mt-8","cursor-pointer"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1),R(2,"img",2),d(3,"div",3)(4,"h1",4),f(5,"Welcome to SkiNet!"),m(),d(6,"button",5),f(7," Go to shop "),m()()()())},dependencies:[gt],encapsulation:2})};var Ht={production:!0,apiUrl:"api/",hubUrl:"hub/notifications",stripePublicKey:"pk_test_51TSH5lAuDKUuu3194TzzP8lr7U7qL83V7dYFqXPS1LYqqWaH0vKNQQFWi09Sfg4iDMUum707PQeasfCEzZYNadsX00XmRwMxII"};var ar=class i{baseUrl=Ht.apiUrl;http=l(Gt);types=[];brands=[];getProducts(n){let e=new In;return n.brands.length>0&&(e=e.append("brands",n.brands.join(","))),n.types.length>0&&(e=e.append("types",n.types.join(","))),n.sort&&(e=e.append("sort",n.sort)),n.search&&(e=e.append("search",n.search)),e=e.append("pageSize",n.pageSize),e=e.append("pageIndex",n.pageNumber),this.http.get(this.baseUrl+"products",{params:e})}getProduct(n){return this.http.get(this.baseUrl+"products/"+n)}getBrands(){return this.brands.length>0?this.brands:this.http.get(this.baseUrl+"products/brands").subscribe({next:n=>this.brands=n})}getTypes(){return this.types.length>0?this.types:this.http.get(this.baseUrl+"products/types").subscribe({next:n=>this.types=n})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Xx=new k("cdk-dir-doc",{providedIn:"root",factory:()=>l(ie)}),Kx=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function vg(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Kx.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Jt=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Z("ltr");change=new J;constructor(){let e=l(Xx,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(vg(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({})}return i})();var Qx=["*"];var Jx=new k("MAT_CARD_CONFIG"),xi=(()=>{class i{appearance;constructor(){let e=l(Jx,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&$("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Qx,decls:1,vars:0,template:function(t,r){t&1&&(je(),pe(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})();var yg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var xg=(()=>{class i{align="start";static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&$("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})();var Cg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[qt]})}return i})();function zr(i){return i.buttons===0||i.detail===0}function Vr(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var sm;function wg(){if(sm==null){let i=typeof document<"u"?document.head:null;sm=!!(i&&(i.createShadowRoot||i.attachShadow))}return sm}function lm(i){if(wg()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Ui(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function en(i){return i.composedPath?i.composedPath()[0]:i.target}var cm;try{cm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{cm=!1}var Fe=(()=>{class i{_platformId=l(so);isBrowser=this._platformId?zp(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||cm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var es;function kg(){if(es==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>es=!0}))}finally{es=es||!1}return es}function Fo(i){return kg()?i:!!i.capture}function Rn(i,n=0){return Dg(i)?Number(i):arguments.length===2?n:0}function Dg(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function gn(i){return i instanceof H?i.nativeElement:i}var Eg=new k("cdk-input-modality-detector-options"),Sg={ignoreKeys:[18,17,224,91,16]},Mg=650,dm={passive:!0,capture:!0},Ig=(()=>{class i{_platform=l(Fe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new bn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=en(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Mg||(this._modality.next(zr(e)?"keyboard":"mouse"),this._mostRecentTarget=en(e))};_onTouchstart=e=>{if(Vr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=en(e)};constructor(){let e=l(Y),t=l(ie),r=l(Eg,{optional:!0});if(this._options=_(_({},Sg),r),this.modalityDetected=this._modality.pipe(Ws(1)),this.modalityChanged=this.modalityDetected.pipe(zd()),this._platform.isBrowser){let o=l(Kt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,dm),o.listen(t,"mousedown",this._onMousedown,dm),o.listen(t,"touchstart",this._onTouchstart,dm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ts=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(ts||{}),Tg=new k("cdk-focus-monitor-default-options"),Yl=Fo({passive:!0,capture:!0}),En=(()=>{class i{_ngZone=l(Y);_platform=l(Fe);_inputModalityDetector=l(Ig);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(ie);_stopInputModalityDetector=new z;constructor(){let e=l(Tg,{optional:!0});this._detectionMode=e?.detectionMode||ts.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=en(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=gn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let o=lm(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new z,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=gn(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=gn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ts.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ts.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Mg:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=en(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Yl),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Yl)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(we(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Yl),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Yl),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xl=new WeakMap,rt=(()=>{class i{_appRef;_injector=l(ue);_environmentInjector=l(Yt);load(e){let t=this._appRef=this._appRef||this._injector.get(hi),r=Xl.get(t);r||(r={loaders:new Set,refs:[]},Xl.set(t,r),t.onDestroy(()=>{Xl.get(t)?.refs.forEach(o=>o.destroy()),Xl.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Qs(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ci=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Kl;function tC(){if(Kl===void 0&&(Kl=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Kl=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Kl}function jr(i){return tC()?.createHTML(i)||i}function Ag(i,n,e){let t=e.sanitize(un.HTML,n);i.innerHTML=jr(t||"")}function No(i){return Array.isArray(i)?i:[i]}var Rg=new Set,Ur,Lo=(()=>{class i{_platform=l(Fe);_nonce=l(co,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):iC}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&nC(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function nC(i,n){if(!Rg.has(i))try{Ur||(Ur=document.createElement("style"),n&&Ur.setAttribute("nonce",n),Ur.setAttribute("type","text/css"),document.head.appendChild(Ur)),Ur.sheet&&(Ur.sheet.insertRule(`@media ${i} {body{ }}`,0),Rg.add(i))}catch(e){console.error(e)}}function iC(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var um=(()=>{class i{_mediaMatcher=l(Lo);_zone=l(Y);_queries=new Map;_destroySubject=new z;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Og(No(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Og(No(e)).map(a=>this._registerQuery(a).observable),o=$s(r);return o=Gs(o.pipe(Nt(1)),o.pipe(Ws(1),oo(0))),o.pipe(ce(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:u})=>{s.matches=s.matches||c,s.breakpoints[u]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Nn(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(bt(t),ce(({matches:a})=>({query:e,matches:a})),we(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Og(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function rC(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var oC=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),aC=(()=>{class i{_mutationObserverFactory=l(oC);_observedElements=new Map;_ngZone=l(Y);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=gn(e);return new Nn(r=>{let a=this._observeElement(t).pipe(ce(s=>s.filter(c=>!rC(c))),qe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new z,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Pg=(()=>{class i{_contentObserver=l(aC);_elementRef=l(H);event=new J;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Rn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(oo(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",U],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})();var Bo=(()=>{class i{_platform=l(Fe);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return lC(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=sC(gC(e));if(t&&(Fg(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Fg(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!pC(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return fC(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function sC(i){try{return i.frameElement}catch{return null}}function lC(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function cC(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function dC(i){return mC(i)&&i.type=="hidden"}function uC(i){return hC(i)&&i.hasAttribute("href")}function mC(i){return i.nodeName.toLowerCase()=="input"}function hC(i){return i.nodeName.toLowerCase()=="a"}function Ng(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Fg(i){if(!Ng(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function pC(i){let n=i.nodeName.toLowerCase(),e=n==="input"&&i.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function fC(i){return dC(i)?!1:cC(i)||uC(i)||i.hasAttribute("contenteditable")||Ng(i)}function gC(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Ql=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,t,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(n),!!t}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?It(n,{injector:this._injector}):setTimeout(n)}},mm=(()=>{class i{_checker=l(Bo);_ngZone=l(Y);_document=l(ie);_injector=l(ue);constructor(){l(rt).load(Ci)}create(e,t=!1){return new Ql(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Lg=new k("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Bg=new k("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),_C=0,ns=(()=>{class i{_ngZone=l(Y);_defaultOptions=l(Bg,{optional:!0});_liveElement;_document=l(ie);_sanitizer=l(Ra);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Lg,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ag(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${_C++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bC=200,Jl=class{_letterKeyStream=new z;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new z;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:bC;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(kt(e=>this._pressedLetters.push(e)),oo(n),qe(()=>this._pressedLetters.length>0),ce(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function St(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var zo=class{_items;_activeItemIndex=Z(-1);_activeItem=Z(null);_wrap=!1;_typeaheadSubscription=xt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof ui?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):er(n)&&(this._effectRef=Dr(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new z;change=new z;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Jl(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||St(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return er(this._items)?this._items():this._items instanceof ui?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var ss=class extends zo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Hi=class extends zo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var hm={},ze=class i{_appId=l(Er);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),hm.hasOwnProperty(n)||(hm[n]=0),`${n}${e?i._infix+"-":""}${hm[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var jg=" ";function gm(i,n,e){let t=nc(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(jg)))}function ic(i,n,e){let t=nc(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(jg)):i.removeAttribute(n)}function nc(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Ug="cdk-describedby-message",tc="cdk-describedby-host",fm=0,rc=(()=>{class i{_platform=l(Fe);_document=l(ie);_messageRegistry=new Map;_messagesContainer=null;_id=`${fm++}`;constructor(){l(rt).load(Ci),this._id=l(Er)+"-"+fm++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=pm(t,r);typeof t!="string"?(zg(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=pm(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${tc}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(tc);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");zg(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(pm(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=nc(e,"aria-describedby").filter(r=>r.indexOf(Ug)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);gm(e,"aria-describedby",r.messageElement.id),e.setAttribute(tc,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,ic(e,"aria-describedby",r.messageElement.id),e.removeAttribute(tc)}_isElementDescribedByMessage(e,t){let r=nc(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function pm(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function zg(i,n){i.id||(i.id=`${Ug}-${n}-${fm++}`)}var Hr;function Hg(){if(Hr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Hr=!1,Hr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Hr=!0;else{let i=Element.prototype.scrollTo;i?Hr=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Hr=!1}}return Hr}function _m(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Vo,$g=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function bm(){if(Vo)return Vo;if(typeof document!="object"||!document)return Vo=new Set($g),Vo;let i=document.createElement("input");return Vo=new Set($g.filter(n=>(i.setAttribute("type",n),i.type===n))),Vo}var Gg={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var vC=new k("MATERIAL_ANIMATIONS"),Wg=null;function ls(){return l(vC,{optional:!0})?.animationsDisabled||l(lo,{optional:!0})==="NoopAnimations"?"di-disabled":(Wg??=l(Lo).matchMedia("(prefers-reduced-motion)").matches,Wg?"reduced-motion":"enabled")}function Ve(){return ls()!=="enabled"}function Pt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Ft(i){return i!=null&&`${i}`!="false"}var Hn=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Hn||{}),vm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Hn.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},qg=Fo({passive:!0,capture:!0}),ym=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,qg)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,qg)))}_delegateEventHandler=n=>{let e=en(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},cs={enterDuration:225,exitDuration:150},yC=800,Zg=Fo({passive:!0,capture:!0}),Yg=["mousedown","touchstart"],Xg=["mouseup","mouseleave","touchend","touchcancel"],xC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),$r=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ym;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=gn(t)),o&&o.get(rt).load(xC)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},cs),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||CC(n,e,r),s=n-r.left,c=e-r.top,u=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${s-a}px`,h.style.top=`${c-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,t.color!=null&&(h.style.backgroundColor=t.color),h.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(h);let g=window.getComputedStyle(h),E=g.transitionProperty,I=g.transitionDuration,q=E==="none"||I==="0s"||I==="0s, 0s"||r.width===0&&r.height===0,K=new vm(this,h,t,q);h.style.transform="scale3d(1, 1, 1)",K.state=Hn.FADING_IN,t.persistent||(this._mostRecentTransientRipple=K);let te=null;return!q&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let re=()=>{te&&(te.fallbackTimer=null),clearTimeout(P),this._finishRippleTransition(K)},N=()=>this._destroyRipple(K),P=setTimeout(N,u+100);h.addEventListener("transitionend",re),h.addEventListener("transitioncancel",N),te={onTransitionEnd:re,onTransitionCancel:N,fallbackTimer:P}}),this._activeRipples.set(K,te),(q||!u)&&this._finishRippleTransition(K),K}fadeOutRipple(n){if(n.state===Hn.FADING_OUT||n.state===Hn.HIDDEN)return;let e=n.element,t=_(_({},cs),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=Hn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=gn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Yg.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xg.forEach(e=>{this._triggerElement.addEventListener(e,this,Zg)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Hn.FADING_IN?this._startFadeOutTransition(n):n.state===Hn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=Hn.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Hn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=zr(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+yC;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Vr(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Hn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Hn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Yg.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Xg.forEach(e=>n.removeEventListener(e,this,Zg)),this._pointerUpEventsRegistered=!1))}};function CC(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var ds=new k("mat-ripple-global-options"),wi=(()=>{class i{_elementRef=l(H);_animationsDisabled=Ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(Y),t=l(Fe),r=l(ds,{optional:!0}),o=l(ue);this._globalOptions=r||{},this._rippleRenderer=new $r(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&$("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var wC={capture:!0},kC=["focus","mousedown","mouseenter","touchstart"],xm="mat-ripple-loader-uninitialized",Cm="mat-ripple-loader-class-name",Kg="mat-ripple-loader-centered",oc="mat-ripple-loader-disabled",Qg=(()=>{class i{_document=l(ie);_animationsDisabled=Ve();_globalRippleOptions=l(ds,{optional:!0});_platform=l(Fe);_ngZone=l(Y);_injector=l(ue);_eventCleanups;_hosts=new Map;constructor(){let e=l(Kt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>kC.map(t=>e.listen(this._document,t,this._onInteraction,wC)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(xm,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Cm))&&e.setAttribute(Cm,t.className||""),t.centered&&e.setAttribute(Kg,""),t.disabled&&e.setAttribute(oc,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(oc,""):e.removeAttribute(oc)}_onInteraction=e=>{let t=en(e);if(t instanceof HTMLElement){let r=t.closest(`[${xm}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Cm)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??cs.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??cs.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(oc),rippleConfig:{centered:e.hasAttribute(Kg),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new $r(s,this._ngZone,t,this._platform,this._injector),u=!s.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:u}),e.removeAttribute(xm)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Sn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var DC=["mat-icon-button",""],EC=["*"],SC=new k("MAT_BUTTON_CONFIG");function Jg(i){return i==null?void 0:Ct(i)}var wm=(()=>{class i{_elementRef=l(H);_ngZone=l(Y);_animationsDisabled=Ve();_config=l(SC,{optional:!0});_focusMonitor=l(En);_cleanupClick;_renderer=l(Le);_rippleLoader=l(Qg);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(rt).load(Sn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(ee("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),zt(r.color?"mat-"+r.color:""),$("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",Jg],_tabindex:[2,"tabindex","_tabindex",Jg]}})}return i})(),Gr=(()=>{class i extends wm{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ee],attrs:DC,ngContentSelectors:EC,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(je(),Qt(0,"span",0),pe(1),Qt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ac=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[qt]})}return i})();var MC=["matButton",""],IC=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],TC=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var e_=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),st=(()=>{class i extends wm{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=AC(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?e_.get(this._appearance):null,o=e_.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ee],attrs:MC,ngContentSelectors:TC,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(je(IC),Qt(0,"span",0),pe(1),tt(2,"span",1),pe(3,1),vt(),pe(4,2),Qt(5,"span",2)(6,"span",3)),t&2&&$("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function AC(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var jo=st;function t_(i){return Error(`Unable to find icon with the name "${i}"`)}function RC(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function n_(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function i_(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var $i=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},o_=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new $i(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(un.HTML,r);if(!a)throw i_(r);let s=jr(a);return this._addSvgIconConfig(e,t,new $i("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new $i(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(un.HTML,t);if(!o)throw i_(t);let a=jr(o);return this._addSvgIconSetConfig(e,new $i("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(un.RESOURCE_URL,e);if(!t)throw n_(e);let r=this._cachedIconsByUrl.get(t);return r?Q(sc(r)):this._loadSvgIconFromConfig(new $i(e,null)).pipe(kt(o=>this._cachedIconsByUrl.set(t,o)),ce(o=>sc(o)))}getNamedSvgIcon(e,t=""){let r=r_(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):to(t_(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Q(sc(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ce(t=>sc(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return Q(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Xi(s=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(un.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(u)),Q(null)})));return io(o).pipe(ce(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw t_(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(kt(t=>e.svgText=t),ce(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Q(null):this._fetchIcon(e).pipe(kt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(jr("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(jr("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw RC();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(un.RESOURCE_URL,t);if(!a)throw n_(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ce(u=>jr(u)),Ki(()=>this._inProgressUrlFetches.delete(a)),Ah());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(r_(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return OC(o)?new $i(o.url,null,o.options):new $i(o,null)}}static \u0275fac=function(t){return new(t||i)(_e(Gt,8),_e(Ra),_e(ie,8),_e(kr))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function sc(i){return i.cloneNode(!0)}function r_(i,n){return i+":"+n}function OC(i){return!!(i.url&&i.options)}var PC=["*"],FC=new k("MAT_ICON_DEFAULT_OPTIONS"),NC=new k("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(ie),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),a_=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],LC=a_.map(i=>`[${i}]`).join(", "),BC=/^url\(['"]?#(.*?)['"]?\)$/,an=(()=>{class i{_elementRef=l(H);_iconRegistry=l(o_);_location=l(NC);_errorHandler=l(kr);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=xt.EMPTY;constructor(){let e=l(new fi("aria-hidden"),{optional:!0}),t=l(FC,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(LC),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)a_.forEach(a=>{let s=t[o],c=s.getAttribute(a),u=c?c.match(BC):null;if(u){let h=r.get(s);h||(h=[],r.set(s,h)),h.push({name:a,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Nt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(ee("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),zt(r.color?"mat-"+r.color:""),$("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",U],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:PC,decls:1,vars:0,template:function(t,r){t&1&&(je(),pe(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),s_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[qt]})}return i})();var l_="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var c_=(i=21)=>{let n="",e=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)n+=l_[e[i]&63];return n};var lc=class{id=c_();items=[];deliveryMethodId;paymentIntentId;clientSecret};var _t=class i{baseUrl=Ht.apiUrl;http=l(Gt);cart=Z(null);itemCount=Rt(()=>this.cart()?.items.reduce((n,e)=>n+e.quantity,0));selectedDelivery=Z(null);totals=Rt(()=>{let n=this.cart(),e=this.selectedDelivery();if(!n)return null;let t=n.items.reduce((a,s)=>a+s.price*s.quantity,0),r=e?e.price:0,o=0;return{subtotal:t,shipping:r,discount:o,total:t+r-o}});getCart(n){return this.http.get(this.baseUrl+"cart?id="+n).pipe(ce(e=>(this.cart.set(e),e)))}setCart(n){return this.http.post(this.baseUrl+"cart",n).subscribe({next:e=>this.cart.set(e)})}addItemToCart(n,e=1){let t=this.cart()??this.createCart();this.isProduct(n)&&(n=this.mapProductToCartItem(n)),t.items=this.addOrUpdateItem(t.items,n,e),this.setCart(t)}removeItemFromCart(n,e=1){let t=this.cart();if(!t)return;let r=t.items.findIndex(o=>o.productId===n);r!==-1&&(t.items[r].quantity>e?t.items[r].quantity-=e:t.items.splice(r,1),t.items.length===0?this.deleteCart():this.setCart(t))}deleteCart(){this.http.delete(this.baseUrl+"cart?id="+this.cart()?.id).subscribe({next:()=>{localStorage.removeItem("cart_id"),this.cart.set(null)}})}addOrUpdateItem(n,e,t){let r=n.findIndex(o=>o.productId===e.productId);return r===-1?(e.quantity=t,n.push(e)):n[r].quantity+=t,n}mapProductToCartItem(n){return{productId:n.id,productName:n.name,price:n.price,quantity:0,pictureUrl:n.pictureUrl,brand:n.brand,type:n.type}}isProduct(n){return n.id!==void 0}createCart(){let n=new lc;return localStorage.setItem("cart_id",n.id),n}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function zC(i,n){if(i&1){let e=Lt();d(0,"mat-card",0),R(1,"img",1),d(2,"mat-card-content",2)(3,"h2",3),f(4),m(),d(5,"p",4),f(6),Be(7,"currency"),m()(),d(8,"mat-card-actions",5),O("click",function(r){return r.stopPropagation()}),d(9,"button",6),O("click",function(){Ze(e);let r=M();return Ye(r.cartService.addItemToCart(r.product))}),d(10,"mat-icon"),f(11,"add_shopping_cart"),m(),f(12," Add to cart "),m()()()}if(i&2){let e=M();D("routerLink",Ln("/shop/",e.product.id)),p(),D("src",hn(e.product.pictureUrl),mi)("alt",Ln("image of ",e.product.name)),p(3),X(e.product.name),p(2),X(Ue(7,8,e.product.price))}}var cc=class i{product;cartService=l(_t);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card",3,"routerLink"],[1,"rounded-t-lg",3,"src","alt"],[1,"mt-2"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"]],template:function(e,t){e&1&&V(0,zC,13,10,"mat-card",0),e&2&&j(t.product?0:-1)},dependencies:[xi,yg,xg,jo,an,gt,Ot],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0003;cursor:pointer}"]})};var VC=20,Uo=(()=>{class i{_ngZone=l(Y);_platform=l(Fe);_renderer=l(Kt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new z;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=VC){return this._platform.isBrowser?new Nn(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Bd(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(qe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=gn(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var jC=20,sr=(()=>{class i{_platform=l(Fe);_listeners;_viewportSize=null;_change=new z;_document=l(ie);constructor(){let e=l(Y),t=l(Kt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=jC){return e>0?this._change.pipe(Bd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var us=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},ni=class extends us{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},On=class extends us{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},km=class extends us{element;constructor(n){super(),this.element=n instanceof H?n.nativeElement:n}},lr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ni)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof On)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof km)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ms=class extends lr{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(Ys,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||ue.NULL,o=r.get(Yt,t.injector);e=Qs(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var ki=(()=>{class i extends lr{_moduleRef=l(Ys,{optional:!0});_document=l(ie);_viewContainerRef=l(mn);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new J;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ee]})}return i})(),Ho=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({})}return i})();var d_=Hg();function hs(i){return new dc(i.get(sr),i.get(ie))}var dc=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Pt(-this._previousScrollPosition.left),n.style.top=Pt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),d_&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),d_&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};var uc=class{enable(){}disable(){}attach(){}};function Dm(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||r||o||a})}function u_(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||r||o||a})}function cr(i,n){return new mc(i.get(Uo),i.get(sr),i.get(Y),n)}var mc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Dm(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ii=class{positionStrategy;scrollStrategy=new uc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var hc=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var __=(()=>{class i{_attachedOverlays=[];_document=l(ie);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),b_=(()=>{class i extends __{_ngZone=l(Y);_renderer=l(Kt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),v_=(()=>{class i extends __{_platform=l(Fe);_ngZone=l(Y);_renderer=l(Kt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=en(e)};_clickListener=e=>{let t=en(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(m_(s.overlayElement,t)||m_(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function m_(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var y_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),gc=(()=>{class i{_platform=l(Fe);_containerElement;_document=l(ie);_styleLoader=l(rt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||_m()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),_m()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(y_)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Em=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Sm(i){return i&&i.nodeType===1}var $o=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new z;_attachments=new z;_detachments=new z;_positionStrategy;_scrollStrategy;_locationChanges=xt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new z;_outsidePointerEvents=new z;_afterNextRenderRef;constructor(n,e,t,r,o,a,s,c,u,h=!1,g,E){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=h,this._injector=g,this._renderer=E,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=It(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Re(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Pt(this._config.width),n.height=Pt(this._config.height),n.minWidth=Pt(this._config.minWidth),n.minHeight=Pt(this._config.minHeight),n.maxWidth=Pt(this._config.maxWidth),n.maxHeight=Pt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Sm(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Em(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=No(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=It(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},h_="cdk-overlay-connected-position-bounding-box",UC=/([A-Za-z%]+)$/;function Wo(i,n){return new pc(n,i.get(sr),i.get(ie),i.get(Fe),i.get(gc))}var pc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new z;_resizeSubscription=xt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(h_),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),u=this._getOverlayPoint(c,e,s),h=this._getOverlayFit(u,e,t,s);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(h,u,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<h.visibleArea)&&(a={overlayFit:h,overlayPoint:u,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let u of o){let h=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);h>c&&(c=h,s=u)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Wr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(h_),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof H?this._origin.nativeElement:Sm(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=f_(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),u=this._getOffset(r,"y");c&&(a+=c),u&&(s+=u);let h=0-a,g=a+o.width-t.width,E=0-s,I=s+o.height-t.height,q=this._subtractOverflows(o.width,h,g),K=this._subtractOverflows(o.height,E,I),te=q*K;return{visibleArea:te,isCompletelyWithinViewport:o.width*o.height===te,fitsInViewportVertically:K===o.height,fitsInViewportHorizontally:q==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=p_(this._overlayRef.getConfig().minHeight),s=p_(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,u=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&u}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=f_(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-t.top-n.y,0),u=Math.max(o.left-t.left-n.x,0),h=0,g=0;return r.width<=o.width?h=u||-a:h=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?g=c||-s:g=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:h,y:g},{x:n.x+h,y:n.y+g}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!HC(this._lastScrollVisibility,t)){let r=new hc(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let I=Math.min(t.bottom-n.y+t.top,n.y),q=this._lastBoundingBoxSize.height;o=I*2,a=n.y-I,o>q&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-q/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,u=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,h,g,E;if(u)E=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=n.x-this._getViewportMarginStart();else if(c)g=n.x,h=t.right-n.x-this._getViewportMarginEnd();else{let I=Math.min(t.right-n.x+t.left,n.x),q=this._lastBoundingBoxSize.width;h=I*2,g=n.x-I,h>q&&!this._isInitialRender&&!this._growAfterOpen&&(g=n.x-q/2)}return{top:a,left:g,bottom:s,right:E,width:h,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Pt(t.width),r.height=Pt(t.height),r.top=Pt(t.top)||"auto",r.bottom=Pt(t.bottom)||"auto",r.left=Pt(t.left)||"auto",r.right=Pt(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Pt(o)),a&&(r.maxWidth=Pt(a))}this._lastBoundingBoxSize=t,Wr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Wr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Wr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let h=this._viewportRuler.getViewportScrollPosition();Wr(t,this._getExactOverlayY(e,n,h)),Wr(t,this._getExactOverlayX(e,n,h))}else t.position="static";let s="",c=this._getOffset(e,"x"),u=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),u&&(s+=`translateY(${u}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=Pt(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=Pt(a.maxWidth):o&&(t.maxWidth="")),Wr(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Pt(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Pt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:u_(n,t),isOriginOutsideView:Dm(n,t),isOverlayClipped:u_(e,t),isOverlayOutsideView:Dm(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&No(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof H)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Wr(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function p_(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(UC);return!e||e==="px"?parseFloat(n):null}return i||null}function f_(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function HC(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var g_="cdk-global-overlay-wrapper";function qr(i){return new fc}var fc=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(g_),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),u=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),h=this._xPosition,g=this._xOffset,E=this._overlayRef.getConfig().direction==="rtl",I="",q="",K="";c?K="flex-start":h==="center"?(K="center",E?q=g:I=g):E?h==="left"||h==="end"?(K="flex-end",I=g):(h==="right"||h==="start")&&(K="flex-start",q=g):h==="left"||h==="start"?(K="flex-start",I=g):(h==="right"||h==="end")&&(K="flex-end",q=g),n.position=this._cssPosition,n.marginLeft=c?"0":I,n.marginTop=u?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":q,e.justifyContent=K,e.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(g_),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}};var ps=new k("OVERLAY_DEFAULT_CONFIG");function Di(i,n){i.get(rt).load(y_);let e=i.get(gc),t=i.get(ie),r=i.get(ze),o=i.get(hi),a=i.get(Jt),s=i.get(Le,null,{optional:!0})||i.get(Kt).createRenderer(null,null),c=new ii(n),u=i.get(ps,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=n?.usePopover??u:c.usePopover=!1;let h=t.createElement("div"),g=t.createElement("div");h.id=r.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),g.appendChild(h),c.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let E=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Sm(E)?E.after(g):E?.type==="parent"?E.element.appendChild(g):e.getContainerElement().appendChild(g),new $o(new ms(h,o,i),g,h,c,i.get(Y),i.get(b_),t,i.get(gi),i.get(v_),n?.disableAnimations??i.get(lo,null,{optional:!0})==="NoopAnimations",i.get(Yt),s)}var $C=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],GC=new k("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(ue);return()=>cr(i)}}),Go=(()=>{class i{elementRef=l(H);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),x_=new k("cdk-connected-overlay-default-config"),_c=(()=>{class i{_dir=l(Jt,{optional:!0});_injector=l(ue);_overlayRef;_templatePortal;_backdropSubscription=xt.EMPTY;_attachSubscription=xt.EMPTY;_detachSubscription=xt.EMPTY;_positionSubscription=xt.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(GC);_ngZone=l(Y);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new J;positionChange=new J;attach=new J;detach=new J;overlayKeydown=new J;overlayOutsideClick=new J;constructor(){let e=l(Xt),t=l(mn),r=l(x_,{optional:!0}),o=l(ps,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new On(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=$C);let e=this._overlayRef=Di(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!St(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=en(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new ii({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Wo(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Go?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Go?this.origin.elementRef.nativeElement:this.origin instanceof H?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Rh(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",U],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",U],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",U],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",U],push:[2,"cdkConnectedOverlayPush","push",U],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",U],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",U],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[et]})}return i})();function qC(i,n){}var dr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Im=(()=>{class i extends lr{_elementRef=l(H);_focusTrapFactory=l(mm);_config;_interactivityChecker=l(Bo);_ngZone=l(Y);_focusMonitor=l(En);_renderer=l(Le);_changeDetectorRef=l(Me);_injector=l(ue);_platform=l(Fe);_document=l(ie);_portalOutlet;_focusTrapped=new z;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(dr,{optional:!0})||new dr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||It(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=Ui(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Ui();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ui()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&nt(ki,7),t&2){let o;G(o=W())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&ee("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Ee],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&mt(0,qC,0,0,"ng-template",0)},dependencies:[ki],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),gs=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new z;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!St(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(n),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},ZC=new k("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(ue);return()=>hs(i)}}),YC=new k("DialogData"),XC=new k("DefaultDialogConfig");function KC(i){let n=Z(i),e=new J;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var C_=(()=>{class i{_injector=l(ue);_defaultOptions=l(XC,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(gc);_idGenerator=l(ze);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new z;_afterOpenedAtThisLevel=new z;_ariaHiddenElements=new Map;_scrollStrategy=l(ZC);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=di(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(bt(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new dr;t=_(_({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),a=Di(this._injector,o),s=new gs(a,t),c=this._attachContainer(a,s,t);if(s.containerInstance=c,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Nt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(e,s,c,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Mm(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Mm(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Mm(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new ii({positionStrategy:e.positionStrategy||qr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:dr,useValue:r},{provide:gs,useValue:t},{provide:$o,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Im;let c=new ni(s,r.viewContainerRef,ue.create({parent:o||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,t,r,o){if(e instanceof Xt){let a=this._createInjector(o,t,r,void 0),s={$implicit:o.data,dialogRef:t};o.templateContext&&(s=_(_({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new On(e,null,s,a))}else{let a=this._createInjector(o,t,r,this._injector),s=r.attachComponentPortal(new ni(e,o.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:YC,useValue:e.data},{provide:gs,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(Jt,null,{optional:!0}))&&s.push({provide:Jt,useValue:KC(e.direction)}),ue.create({parent:a||o,providers:s})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Mm(i,n){let e=i.length;for(;e--;)n(i[e])}function QC(i,n){}var vc=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Tm="mdc-dialog--open",w_="mdc-dialog--opening",k_="mdc-dialog--closing",JC=150,ew=75,tw=(()=>{class i extends Im{_animationStateChanged=new J;_animationsEnabled=!Ve();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?E_(this._config.enterAnimationDuration)??JC:0;_exitAnimationDuration=this._animationsEnabled?E_(this._config.exitAnimationDuration)??ew:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(D_,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(w_,Tm)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Tm),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Tm),this._animationsEnabled?(this._hostElement.style.setProperty(D_,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(k_)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(w_,k_)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275cmp=S({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(Tt("id",r._config.id),ee("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),$("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Ee],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",0)(1,"div",1),mt(2,QC,0,0,"ng-template",2),m()())},dependencies:[ki],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),D_="--mat-dialog-transition-duration";function E_(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?Rn(i.substring(0,i.length-2)):i.endsWith("s")?Rn(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var bc=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(bc||{}),_s=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ha(1);_beforeClosed=new ha(1);_result;_closeFallbackTimeout;_state=bc.OPEN;_closeInteractionType;constructor(n,e,t){this._ref=n,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(qe(r=>r.state==="opened"),Nt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(qe(r=>r.state==="closed"),Nt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),yn(this.backdropClick(),this.keydownEvents().pipe(qe(r=>r.keyCode===27&&!this.disableClose&&!St(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),nw(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(qe(t=>t.state==="closing"),Nt(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=bc.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=bc.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function nw(i,n,e){return i._closeInteractionType=n,i.close(e)}var Am=new k("MatMdcDialogData"),iw=new k("mat-mdc-dialog-default-options"),rw=new k("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(ue);return()=>hs(i)}}),S_=(()=>{class i{_defaultOptions=l(iw,{optional:!0});_scrollStrategy=l(rw);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(ze);_injector=l(ue);_dialog=l(C_);_animationsDisabled=Ve();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new z;_afterOpenedAtThisLevel=new z;dialogConfigClass=vc;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=di(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(bt(void 0)));constructor(){this._dialogRefConstructor=_s,this._dialogContainerType=tw,this._dialogDataToken=Am}open(e,t){let r;t=_(_({},this._defaultOptions||new vc),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Re(_({},t),{positionStrategy:qr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:dr,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(a,s,c)=>(r=new this._dialogRefConstructor(a,t,c),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qo=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=Ft(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Ft(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(ee("aria-orientation",r.vertical?"vertical":"horizontal"),$("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return i})();var ur=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new z;constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Rm=(()=>{class i{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var F_=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(me(Le),me(H))};static \u0275dir=F({type:i})}return i})(),N_=(()=>{class i extends F_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,features:[Ee]})}return i})(),oi=new k("");var ow={provide:oi,useExisting:tn(()=>Ei),multi:!0};function aw(){let i=Bn()?Bn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var sw=new k(""),Ei=(()=>{class i extends F_{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!aw())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(me(Le),me(H),me(sw,8))};static \u0275dir=F({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&O("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[$e([ow]),Ee]})}return i})();function Nm(i){return i==null||Lm(i)===0}function Lm(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var hr=new k(""),Es=new k(""),lw=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,$n=class{static min(n){return L_(n)}static max(n){return cw(n)}static required(n){return dw(n)}static requiredTrue(n){return uw(n)}static email(n){return mw(n)}static minLength(n){return hw(n)}static maxLength(n){return pw(n)}static pattern(n){return fw(n)}static nullValidator(n){return xc()}static compose(n){return H_(n)}static composeAsync(n){return $_(n)}};function L_(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function cw(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function dw(i){return Nm(i.value)?{required:!0}:null}function uw(i){return i.value===!0?null:{required:!0}}function mw(i){return Nm(i.value)||lw.test(i.value)?null:{email:!0}}function hw(i){return n=>{let e=n.value?.length??Lm(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function pw(i){return n=>{let e=n.value?.length??Lm(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function fw(i){if(!i)return xc;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(Nm(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function xc(i){return null}function B_(i){return i!=null}function z_(i){return _a(i)?dn(i):i}function V_(i){let n={};return i.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function j_(i,n){return n.map(e=>e(i))}function gw(i){return!i.validate}function U_(i){return i.map(n=>gw(n)?n:e=>n.validate(e))}function H_(i){if(!i)return null;let n=i.filter(B_);return n.length==0?null:function(e){return V_(j_(e,n))}}function Bm(i){return i!=null?H_(U_(i)):null}function $_(i){if(!i)return null;let n=i.filter(B_);return n.length==0?null:function(e){let t=j_(e,n).map(z_);return io(t).pipe(ce(V_))}}function zm(i){return i!=null?$_(U_(i)):null}function M_(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function G_(i){return i._rawValidators}function W_(i){return i._rawAsyncValidators}function Om(i){return i?Array.isArray(i)?i:[i]:[]}function Cc(i,n){return Array.isArray(i)?i.includes(n):i===n}function I_(i,n){let e=Om(n);return Om(i).forEach(r=>{Cc(e,r)||e.push(r)}),e}function T_(i,n){return Om(n).filter(e=>!Cc(i,e))}var wc=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Bm(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=zm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},ri=class extends wc{name;get formDirective(){return null}get path(){return null}},_n=class extends wc{_parent=null;name=null;valueAccessor=null},kc=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Gn=(()=>{class i extends kc{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(me(_n,2))};static \u0275dir=F({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ee]})}return i})(),Qo=(()=>{class i extends kc{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(me(ri,10))};static \u0275dir=F({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ee]})}return i})();var bs="VALID",yc="INVALID",Zo="PENDING",vs="DISABLED",mr=class{},Dc=class extends mr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},xs=class extends mr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Cs=class extends mr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Yo=class extends mr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ec=class extends mr{source;constructor(n){super(),this.source=n}},ks=class extends mr{source;constructor(n){super(),this.source=n}};function Vm(i){return(Tc(i)?i.validators:i)||null}function _w(i){return Array.isArray(i)?Bm(i):i||null}function jm(i,n){return(Tc(n)?n.asyncValidators:i)||null}function bw(i){return Array.isArray(i)?zm(i):i||null}function Tc(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function q_(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new de(1e3,"");if(!t[e])throw new de(1001,"")}function Z_(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new de(-1002,"")})}var Xo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ge(this.statusReactive)}set status(n){Ge(()=>this.statusReactive.set(n))}_status=Rt(()=>this.statusReactive());statusReactive=Z(void 0);get valid(){return this.status===bs}get invalid(){return this.status===yc}get pending(){return this.status===Zo}get disabled(){return this.status===vs}get enabled(){return this.status!==vs}errors;get pristine(){return Ge(this.pristineReactive)}set pristine(n){Ge(()=>this.pristineReactive.set(n))}_pristine=Rt(()=>this.pristineReactive());pristineReactive=Z(!0);get dirty(){return!this.pristine}get touched(){return Ge(this.touchedReactive)}set touched(n){Ge(()=>this.touchedReactive.set(n))}_touched=Rt(()=>this.touchedReactive());touchedReactive=Z(!1);get untouched(){return!this.touched}_events=new z;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(I_(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(I_(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(T_(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(T_(n,this._rawAsyncValidators))}hasValidator(n){return Cc(this._rawValidators,n)}hasAsyncValidator(n){return Cc(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Re(_({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Cs(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Cs(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Re(_({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new xs(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new xs(!0,t))}markAsPending(n={}){this.status=Zo;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Yo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Re(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=vs,this.errors=null,this._forEachChild(r=>{r.disable(Re(_({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Dc(this.value,t)),this._events.next(new Yo(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Re(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=bs,this._forEachChild(t=>{t.enable(Re(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Re(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bs||this.status===Zo)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Dc(this.value,e)),this._events.next(new Yo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Re(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vs:bs}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Zo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=z_(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Yo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new J,this.statusChanges=new J}_calculateStatus(){return this._allControlsDisabled()?vs:this.errors?yc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Zo)?Zo:this._anyControlsHaveStatus(yc)?yc:bs}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new xs(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Cs(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Tc(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=_w(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=bw(this._rawAsyncValidators)}},Ko=class extends Xo{constructor(n,e,t){super(Vm(e),jm(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Z_(this,!0,n),Object.keys(n).forEach(t=>{q_(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this.controls[t];r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,Re(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ks(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Pm=class extends Ko{};var Jo=new k("",{factory:()=>Ac}),Ac="always";function Y_(i,n){return[...n.path,i]}function Ds(i,n,e=Ac){Um(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),yw(i,n),Cw(i,n),xw(i,n),vw(i,n)}function Sc(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Ic(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Mc(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function vw(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Um(i,n){let e=G_(i);n.validator!==null?i.setValidators(M_(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=W_(i);n.asyncValidator!==null?i.setAsyncValidators(M_(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Mc(n._rawValidators,r),Mc(n._rawAsyncValidators,r)}function Ic(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=G_(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let r=W_(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return Mc(n._rawValidators,t),Mc(n._rawAsyncValidators,t),e}function yw(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&X_(i,n)})}function xw(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&X_(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function X_(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Cw(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function K_(i,n){i==null,Um(i,n)}function ww(i,n){return Ic(i,n)}function Hm(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function kw(i){return Object.getPrototypeOf(i.constructor)===N_}function Q_(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function $m(i,n){if(!n)return null;Array.isArray(n);let e,t,r;return n.forEach(o=>{o.constructor===Ei?e=o:kw(o)?t=o:r=o}),r||t||e||null}function Dw(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var Ew={provide:ri,useExisting:tn(()=>Zr)},ys=Promise.resolve(),Zr=(()=>{class i extends ri{callSetDisabledState;get submitted(){return Ge(this.submittedReactive)}_submitted=Rt(()=>this.submittedReactive());submittedReactive=Z(!1);_directives=new Set;form;ngSubmit=new J;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Ko({},Bm(e),zm(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ys.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Ds(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ys.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ys.then(()=>{let t=this._findContainer(e.path),r=new Ko({});K_(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ys.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){ys.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Q_(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ec(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(me(hr,10),me(Es,10),me(Jo,8))};static \u0275dir=F({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&O("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[$e([Ew]),Ee]})}return i})();function A_(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function R_(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ws=class extends Xo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(Vm(e),jm(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Tc(e)&&(e.nonNullable||e.initialValueIsDefault)&&(R_(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ks(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){A_(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){A_(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){R_(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Sw=i=>i instanceof ws;var Mw={provide:_n,useExisting:tn(()=>Yr)},O_=Promise.resolve(),Yr=(()=>{class i extends _n{_changeDetectorRef;callSetDisabledState;control=new ws;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new J;constructor(e,t,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=$m(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Hm(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ds(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){O_.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&U(t);O_.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Y_(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(me(ri,9),me(hr,10),me(Es,10),me(oi,10),me(Me,8),me(Jo,8))};static \u0275dir=F({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[$e([Mw]),Ee,et]})}return i})();var ea=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})(),Iw={provide:oi,useExisting:tn(()=>Gm),multi:!0},Gm=(()=>{class i extends N_{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){t&1&&O("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[$e([Iw]),Ee]})}return i})();var Fm=class extends Xo{constructor(n,e,t){super(Vm(e),jm(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,t={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(n,e={}){let t=this._adjustIndex(n);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Z_(this,!1,n),n.forEach((t,r)=>{q_(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((t,r)=>{t.reset(n[r],Re(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ks(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,t)=>{n(e,t)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var Tw=(()=>{class i extends ri{callSetDisabledState;get submitted(){return Ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Rt(()=>this._submittedReactive());_submittedReactive=Z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ic(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Ds(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Sc(e.control||null,e,!1),Dw(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Q_(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ec(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Sc(t||null,e),Sw(r)&&(Ds(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);K_(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&ww(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Um(this.form,this),this._oldForm&&Ic(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(me(hr,10),me(Es,10),me(Jo,8))};static \u0275dir=F({type:i,features:[Ee,et]})}return i})();var Wm=new k(""),Aw={provide:_n,useExisting:tn(()=>qm)},qm=(()=>{class i extends _n{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new J;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=$m(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&Sc(t,this,!1),Ds(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Hm(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Sc(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||i)(me(hr,10),me(Es,10),me(oi,10),me(Wm,8),me(Jo,8))};static \u0275dir=F({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[$e([Aw]),Ee,et]})}return i})();var Rw={provide:_n,useExisting:tn(()=>Ss)},Ss=(()=>{class i extends _n{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new J;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=$m(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Hm(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Y_(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(me(ri,13),me(hr,10),me(Es,10),me(oi,10),me(Wm,8))};static \u0275dir=F({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[$e([Rw]),Ee,et]})}return i})();var Ow={provide:ri,useExisting:tn(()=>Wi)},Wi=(()=>{class i extends Tw{form=null;ngSubmit=new J;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&O("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[$e([Ow]),Ee]})}return i})();function Pw(i){return typeof i=="number"?i:parseFloat(i)}var Fw=(()=>{class i{_validator=xc;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):xc,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,features:[et]})}return i})();var Nw={provide:hr,useExisting:tn(()=>Zm),multi:!0},Zm=(()=>{class i extends Fw{min;inputName="min";normalizeInput=e=>Pw(e);createValidator=e=>L_(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&ee("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[$e([Nw]),Ee]})}return i})();var J_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({})}return i})();function P_(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Rc=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return P_(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Ko(r,o)}record(e,t=null){let r=this._reduceControls(e);return new Pm(r,t)}control(e,t,r){let o={};return this.useNonNullable?(P_(t)?o=t:(o.validators=t,o.asyncValidators=r),new ws(e,Re(_({},o),{nonNullable:!0}))):new ws(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new Fm(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof ws)return e;if(e instanceof Xo)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ta=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Jo,useValue:e.callSetDisabledState??Ac}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[J_]})}return i})(),na=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Wm,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Jo,useValue:e.callSetDisabledState??Ac}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[J_]})}return i})();var eb=(()=>{class i{_animationsDisabled=Ve();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&$("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Lw=["*"],Bw=`.mdc-list {
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
`,zw=["unscopedContent"];var Vw=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],jw=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function Uw(i,n){i&1&&pe(0,4)}function Hw(i,n){if(i&1&&(d(0,"div",11),R(1,"input",12),d(2,"div",13),nn(),d(3,"svg",14),R(4,"path",15),m(),Ji(),R(5,"div",16),m()()),i&2){let e=M();$("mdc-checkbox--disabled",e.disabled),p(),D("checked",e.selected)("disabled",e.disabled)}}function $w(i,n){if(i&1&&(d(0,"div",17),R(1,"input",18),d(2,"div",19),R(3,"div",20)(4,"div",21),m()()),i&2){let e=M();$("mdc-radio--disabled",e.disabled),p(),D("checked",e.selected)("disabled",e.disabled)}}function Gw(i,n){}function Ww(i,n){if(i&1&&(d(0,"span",4),mt(1,Gw,0,0,"ng-template",6),m()),i&2){M();let e=Je(3);p(),D("ngTemplateOutlet",e)}}function qw(i,n){}function Zw(i,n){if(i&1&&(d(0,"span",5),mt(1,qw,0,0,"ng-template",6),m()),i&2){M();let e=Je(5);p(),D("ngTemplateOutlet",e)}}function Yw(i,n){}function Xw(i,n){if(i&1&&mt(0,Yw,0,0,"ng-template",6),i&2){M();let e=Je(1);D("ngTemplateOutlet",e)}}function Kw(i,n){}function Qw(i,n){if(i&1&&(d(0,"span",9),mt(1,Kw,0,0,"ng-template",6),m()),i&2){M();let e=Je(3);p(),D("ngTemplateOutlet",e)}}function Jw(i,n){}function ek(i,n){if(i&1&&(d(0,"span",9),mt(1,Jw,0,0,"ng-template",6),m()),i&2){M();let e=Je(5);p(),D("ngTemplateOutlet",e)}}function tk(i,n){}function nk(i,n){if(i&1&&mt(0,tk,0,0,"ng-template",6),i&2){M();let e=Je(1);D("ngTemplateOutlet",e)}}var nb=new k("ListOption"),ik=(()=>{class i{_elementRef=l(H);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),rk=(()=>{class i{_elementRef=l(H);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})();var ib=(()=>{class i{_listOption=l(nb,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,hostVars:4,hostBindings:function(t,r){t&2&&$("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return i})(),ok=(()=>{class i extends ib{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ee]})}return i})(),ak=(()=>{class i extends ib{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ee]})}return i})(),sk=new k("MAT_LIST_CONFIG"),Ym=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Ft(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Ft(e))}_disabled=Z(!1);_defaultOptions=l(sk,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,hostVars:1,hostBindings:function(t,r){t&2&&ee("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),tb=(()=>{class i{_elementRef=l(H);_ngZone=l(Y);_listBase=l(Ym,{optional:!0});_platform=l(Fe);_hostElement;_isButtonElement;_noopAnimations=Ve();_avatars;_icons;set lines(e){this._explicitLines=Rn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Ft(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Ft(e))}_disabled=Z(!1);_subscriptions=new xt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(rt).load(Sn);let e=l(ds,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new $r(this,this._ngZone,this._hostElement,this._platform,l(ue)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(yn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,contentQueries:function(t,r,o){if(t&1&&Bt(o,ok,4)(o,ak,4),t&2){let a;G(a=W())&&(r._avatars=a),G(a=W())&&(r._icons=a)}},hostVars:4,hostBindings:function(t,r){t&2&&(ee("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),$("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var rb=new k("SelectionList"),Ms=(()=>{class i extends tb{_selectionList=l(rb);_changeDetectorRef=l(Me);_lines;_titles;_unscopedContent;selectedChange=new J;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(e){this.togglePosition=e}get color(){return this._color||this._selectionList.color}set color(e){this._color=e}_color;get value(){return this._value}set value(e){this.selected&&e!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=e}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(e){let t=Ft(e);t!==this._selected&&(this._setSelected(t),(t||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let e=this._selectionList;e._value&&e._value.some(r=>e.compareWith(this._value,r))&&this._setSelected(!0);let t=this._selected;Promise.resolve().then(()=>{(this._selected||t)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(e){return this._selectionList.multiple&&this._getTogglePosition()===e}_hasRadioAt(e){return!this._selectionList.multiple&&this._getTogglePosition()===e&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(e){return this._hasProjected("icons",e)||this._hasProjected("avatars",e)}_hasProjected(e,t){return this._getTogglePosition()!==t&&(e==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(e){return e===this._selected?!1:(this._selected=e,e?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(e),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(e){this._hostElement.setAttribute("tabindex",e+"")}_hasBothLeadingAndTrailing(){let e=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),t=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return e&&t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275cmp=S({type:i,selectors:[["mat-list-option"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,rk,5)(o,ik,5),t&2){let a;G(a=W())&&(r._lines=a),G(a=W())&&(r._titles=a)}},viewQuery:function(t,r){if(t&1&&nt(zw,5),t&2){let o;G(o=W())&&(r._unscopedContent=o.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(t,r){t&1&&O("blur",function(){return r._handleBlur()})("click",function(){return r._toggleOnInteraction()}),t&2&&(ee("aria-selected",r.selected),$("mdc-list-item--selected",r.selected&&!r._selectionList.multiple&&r._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",r._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",r._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",r._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",r._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",r._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",r._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",r._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",r._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("mat-accent",r.color!=="primary"&&r.color!=="warn")("mat-warn",r.color==="warn")("_mat-animation-noopable",r._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[$e([{provide:tb,useExisting:i},{provide:nb,useExisting:i}]),Ee],ngContentSelectors:jw,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(t,r){t&1&&(je(Vw),mt(0,Uw,1,0,"ng-template",null,0,Kn)(2,Hw,6,4,"ng-template",null,1,Kn)(4,$w,5,4,"ng-template",null,2,Kn),V(6,Ww,2,1,"span",4)(7,Zw,2,1,"span",5),V(8,Xw,1,1,null,6),d(9,"span",7),pe(10),pe(11,1),d(12,"span",8,3),O("cdkObserveContent",function(){return r._updateItemLines(!0)}),pe(14,2),m()(),V(15,Qw,2,1,"span",9)(16,ek,2,1,"span",9),V(17,nk,1,1,null,6),pe(18,3),R(19,"div",10)),t&2&&(p(6),j(r._hasCheckboxAt("before")?6:r._hasRadioAt("before")?7:-1),p(2),j(r._hasIconsOrAvatarsAt("before")?8:-1),p(7),j(r._hasCheckboxAt("after")?15:r._hasRadioAt("after")?16:-1),p(2),j(r._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[bi,Pg],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
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
`],encapsulation:2,changeDetection:0})}return i})();var lk={provide:oi,useExisting:tn(()=>Is),multi:!0},Xm=class{source;options;constructor(n,e){this.source=n,this.options=e}},Is=(()=>{class i extends Ym{_element=l(H);_ngZone=l(Y);_renderer=l(Le);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new z;_isDestroyed=!1;_onChange=e=>{};_items;selectionChange=new J;color="accent";compareWith=(e,t)=>e===t;get multiple(){return this._multiple}set multiple(e){let t=Ft(e);t!==this._multiple&&(this._multiple=t,this.selectedOptions=new ur(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=Ft(e)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new ur(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=l(Me);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(e){let t=e.disabled,r=e.disableRipple,o=e.hideSingleSelectionIndicator;(r&&!r.firstChange||t&&!t.firstChange||o&&!o.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(e){this._element.nativeElement.focus(e)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let e=this._getSelectedOptionValues();this._onChange(e),this._value=e}}_emitChangeEvent(e){this.selectionChange.emit(new Xm(this,e))}writeValue(e){this._value=e,this.options&&this._setOptionsFromValues(e||[])}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(e){this._selectionListDisabled.set(Ft(e)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=Z(!1);registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}_watchForSelectionChange(){this.selectedOptions.changed.pipe(we(this._destroyed)).subscribe(e=>{for(let t of e.added)t.selected=!0;for(let t of e.removed)t.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(e){this.options.forEach(t=>t._setSelected(!1)),e.forEach(t=>{let r=this.options.find(o=>o.selected?!1:this.compareWith(o.value,t));r&&r._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(e=>e.selected).map(e=>e.value)}_markOptionsForCheck(){this.options&&this.options.forEach(e=>e._markForCheck())}_setAllOptionsSelected(e,t){let r=[];return this.options.forEach(o=>{(!t||!o.disabled)&&o._setSelected(e)&&r.push(o)}),r.length&&this._reportValueChange(),r}get options(){return this._items}_handleKeydown(e){let t=this._keyManager.activeItem;if((e.keyCode===13||e.keyCode===32)&&!this._keyManager.isTyping()&&t&&!t.disabled)e.preventDefault(),t._toggleOnInteraction();else if(e.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&St(e,"ctrlKey","metaKey")){let r=this.options.some(o=>!o.disabled&&!o.selected);e.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(r,!0))}else this._keyManager.onKeydown(e)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=e=>{if(this.disabled)return;let t=this._items.toArray().findIndex(r=>r._elementRef.nativeElement.contains(e.target));t>-1?this._setActiveOption(t):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new Hi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(e=>this._setActiveOption(e)),this._items.changes.pipe(we(this._destroyed)).subscribe(()=>{let e=this._keyManager.activeItem;(!e||this._items.toArray().indexOf(e)===-1)&&this._resetActiveOption()})}_setActiveOption(e){this._items.forEach((t,r)=>t._setTabindex(r===e?0:-1)),this._keyManager.updateActiveItem(e)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let e=this._items.find(t=>t.selected&&!t.disabled)||this._items.first;this._setActiveOption(e?this._items.toArray().indexOf(e):-1)}_containsFocus(){let e=Ui();return e&&this._element.nativeElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-selection-list"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,Ms,5),t&2){let a;G(a=W())&&(r._items=a)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(t,r){t&1&&O("keydown",function(a){return r._handleKeydown(a)}),t&2&&ee("aria-multiselectable",r.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[$e([lk,{provide:Ym,useExisting:i},{provide:rb,useExisting:i}]),Ee,et],ngContentSelectors:Lw,decls:1,vars:0,template:function(t,r){t&1&&(je(),pe(0))},styles:[Bw],encapsulation:2,changeDetection:0})}return i})();function ck(i,n){if(i&1&&(d(0,"mat-list-option",5),f(1),m()),i&2){let e=n.$implicit;D("value",e),p(),X(e)}}function dk(i,n){if(i&1&&(d(0,"mat-list-option",5),f(1),m()),i&2){let e=n.$implicit;D("value",e),p(),X(e)}}var Oc=class i{shopService=l(ar);dialogRef=l(_s);data=l(Am);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({selectedBrands:this.selectedBrands,selectedTypes:this.selectedTypes})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-filters-dialog"]],decls:20,vars:4,consts:[[1,"text-3xl","text-center","pt-6","mb-3"],[1,"flex","p-4"],[1,"w-1/2"],[1,"font-semibold","text-xl","text-primary"],[3,"ngModelChange","ngModel","multiple"],[3,"value"],[1,"flex","justify-end","p-4"],["mat-flat-button","",3,"click"]],template:function(e,t){e&1&&(d(0,"div")(1,"h3",0),f(2,"Filters"),m(),R(3,"mat-divider"),d(4,"div",1)(5,"div",2)(6,"h4",3),f(7,"Brands"),m(),d(8,"mat-selection-list",4),Tr("ngModelChange",function(o){return Ir(t.selectedBrands,o)||(t.selectedBrands=o),o}),ht(9,ck,2,2,"mat-list-option",5,Pi),m()(),d(11,"div",2)(12,"h4",3),f(13,"Types"),m(),d(14,"mat-selection-list",4),Tr("ngModelChange",function(o){return Ir(t.selectedTypes,o)||(t.selectedTypes=o),o}),ht(15,dk,2,2,"mat-list-option",5,Pi),m()()(),d(17,"div",6)(18,"button",7),O("click",function(){return t.applyFilters()}),f(19,"Apply Filters"),m()()()),e&2&&(p(8),Mr("ngModel",t.selectedBrands),D("multiple",!0),p(),pt(t.shopService.brands),p(5),Mr("ngModel",t.selectedTypes),D("multiple",!0),p(),pt(t.shopService.types))},dependencies:[qo,Is,Ms,st,ta,Gn,Yr],encapsulation:2})};var uk=["mat-menu-item",""],mk=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],hk=["mat-icon, [matMenuItemIcon]","*"];function pk(i,n){i&1&&(nn(),d(0,"svg",2),R(1,"polygon",3),m())}var fk=["*"];function gk(i,n){if(i&1){let e=Lt();tt(0,"div",0),Ks("click",function(){Ze(e);let r=M();return Ye(r.closed.emit("click"))})("animationstart",function(r){Ze(e);let o=M();return Ye(o._onAnimationStart(r.animationName))})("animationend",function(r){Ze(e);let o=M();return Ye(o._onAnimationDone(r.animationName))})("animationcancel",function(r){Ze(e);let o=M();return Ye(o._onAnimationDone(r.animationName))}),tt(1,"div",1),pe(2),vt()()}if(i&2){let e=M();zt(e._classList),$("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Tt("id",e.panelId),ee("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Qm=new k("MAT_MENU_PANEL"),Ts=(()=>{class i{_elementRef=l(H);_document=l(ie);_focusMonitor=l(En);_parentMenu=l(Qm,{optional:!0});_changeDetectorRef=l(Me);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new z;_focused=new z;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(rt).load(Sn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&O("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(ee("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),$("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",U],disableRipple:[2,"disableRipple","disableRipple",U]},exportAs:["matMenuItem"],attrs:uk,ngContentSelectors:hk,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(je(mk),pe(0),d(1,"span",0),pe(2,1),m(),R(3,"div",1),V(4,pk,2,0,":svg:svg",2)),t&2&&(p(3),D("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),p(),j(r._triggersSubmenu?4:-1))},dependencies:[wi],encapsulation:2,changeDetection:0})}return i})();var _k=new k("MatMenuContent");var bk=new k("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Km="_mat-menu-enter",Pc="_mat-menu-exit",pr=(()=>{class i{_elementRef=l(H);_changeDetectorRef=l(Me);_injector=l(ue);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ve();_allItems;_directDescendantItems=new ui;_classList={};_panelAnimationState="void";_animationDone=new z;_isAnimating=Z(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=_({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new J;close=this.closed;panelId=l(ze).getId("mat-menu-panel-");constructor(){let e=l(bk);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Hi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(bt(this._directDescendantItems),Mt(e=>yn(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(bt(this._directDescendantItems),Mt(t=>yn(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:St(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=It(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Re(_({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Pc;(t||e===Km)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Km||e===Pc)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Pc),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Km:Pc)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(bt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,_k,5)(o,Ts,5)(o,Ts,4),t&2){let a;G(a=W())&&(r.lazyContent=a.first),G(a=W())&&(r._allItems=a),G(a=W())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&nt(Xt,5),t&2){let o;G(o=W())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&ee("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",U],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:U(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[$e([{provide:Qm,useExisting:i}])],ngContentSelectors:fk,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(je(),Xs(0,gk,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return i})(),vk=new k("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(ue);return()=>cr(i)}});var ra=new WeakMap,yk=(()=>{class i{_canHaveBackdrop;_element=l(H);_viewContainerRef=l(mn);_menuItemInstance=l(Ts,{optional:!0,self:!0});_dir=l(Jt,{optional:!0});_focusMonitor=l(En);_ngZone=l(Y);_injector=l(ue);_scrollStrategy=l(vk);_changeDetectorRef=l(Me);_animationsDisabled=Ve();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=xt.EMPTY;_menuCloseSubscription=xt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(Qm,{optional:!0});this._parentMaterialMenu=t instanceof pr?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ra.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=ra.get(t);ra.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof pr&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(we(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof pr&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Nt(1)).subscribe(()=>{t.detach(),ra.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ra.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Di(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof pr&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new ii({positionStrategy:Wo(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,u]=[a,s],[h,g]=[r,o],E=0;if(this._triggersSubmenu()){if(g=r=e.xPosition==="before"?"start":"end",o=h=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let I=this._parentMaterialMenu.items.first;this._parentInnerPadding=I?I._getHostElement().offsetTop:0}E=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",u=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:h,overlayY:a,offsetY:E},{originX:o,originY:c,overlayX:g,overlayY:a,offsetY:E},{originX:r,originY:u,overlayX:h,overlayY:s,offsetY:-E},{originX:o,originY:u,overlayX:g,overlayY:s,offsetY:-E}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:Q(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(qe(a=>this._menuOpen&&a!==this._menuItemInstance)):Q();return yn(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new On(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ra.get(e)===this}_triggerIsAriaDisabled(){return U(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){ga()};static \u0275dir=F({type:i})}return i})(),Fc=(()=>{class i extends yk{_cleanupTouchstart;_hoverSubscription=xt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new J;onMenuOpen=this.menuOpened;menuClosed=new J;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(Le);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Vr(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){zr(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&O("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&ee("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ee]})}return i})();var Nc=class{brands=[];types=[];sort="name";pageNumber=1;pageSize=10;search=""};var Jm=class{_box;_destroyed=new z;_resizeSubject=new z;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Nn(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(qe(e=>e.some(t=>t.target===n)),Ud({bufferSize:1,refCount:!0}),we(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ob=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(Y);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Jm(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var xk=["notch"],Ck=["matFormFieldNotchedOutline",""],wk=["*"],ab=["iconPrefixContainer"],sb=["textPrefixContainer"],lb=["iconSuffixContainer"],cb=["textSuffixContainer"],kk=["textField"],Dk=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ek=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Sk(i,n){i&1&&R(0,"span",21)}function Mk(i,n){if(i&1&&(d(0,"label",20),pe(1,1),V(2,Sk,1,0,"span",21),m()),i&2){let e=M(2);D("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ee("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),j(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ik(i,n){if(i&1&&V(0,Mk,3,5,"label",20),i&2){let e=M();j(e._hasFloatingLabel()?0:-1)}}function Tk(i,n){i&1&&R(0,"div",7)}function Ak(i,n){}function Rk(i,n){if(i&1&&mt(0,Ak,0,0,"ng-template",13),i&2){M(2);let e=Je(1);D("ngTemplateOutlet",e)}}function Ok(i,n){if(i&1&&(d(0,"div",9),V(1,Rk,1,1,null,13),m()),i&2){let e=M();D("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),j(e._forceDisplayInfixLabel()?-1:1)}}function Pk(i,n){i&1&&(d(0,"div",10,2),pe(2,2),m())}function Fk(i,n){i&1&&(d(0,"div",11,3),pe(2,3),m())}function Nk(i,n){}function Lk(i,n){if(i&1&&mt(0,Nk,0,0,"ng-template",13),i&2){M();let e=Je(1);D("ngTemplateOutlet",e)}}function Bk(i,n){i&1&&(d(0,"div",14,4),pe(2,4),m())}function zk(i,n){i&1&&(d(0,"div",15,5),pe(2,5),m())}function Vk(i,n){i&1&&R(0,"div",16)}function jk(i,n){i&1&&(d(0,"div",18),pe(1,6),m())}function Uk(i,n){if(i&1&&(d(0,"mat-hint",22),f(1),m()),i&2){let e=M(2);D("id",e._hintLabelId),p(),X(e.hintLabel)}}function Hk(i,n){if(i&1&&(d(0,"div",19),V(1,Uk,2,2,"mat-hint",22),pe(2,7),R(3,"div",23),pe(4,8),m()),i&2){let e=M();p(),j(e.hintLabel?1:-1)}}var ai=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-label"]]})}return i})(),gb=new k("MatError"),th=(()=>{class i{id=l(ze).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&Tt("id",r.id)},inputs:{id:"id"},features:[$e([{provide:gb,useExisting:i}])]})}return i})(),eh=(()=>{class i{align="start";id=l(ze).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Tt("id",r.id),ee("align",null),$("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),$k=new k("MatPrefix");var Gk=new k("MatSuffix");var _b=new k("FloatingLabelParent"),db=(()=>{class i{_elementRef=l(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(ob);_ngZone=l(Y);_parent=l(_b);_resizeSubscription=new xt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Wk(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&$("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Wk(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ub="mdc-line-ripple--active",Lc="mdc-line-ripple--deactivating",mb=(()=>{class i{_elementRef=l(H);_cleanupTransitionEnd;constructor(){let e=l(Y),t=l(Le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Lc),e.add(ub)}deactivate(){this._elementRef.nativeElement.classList.add(Lc)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Lc);e.propertyName==="opacity"&&r&&t.remove(ub,Lc)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),hb=(()=>{class i{_elementRef=l(H);_ngZone=l(Y);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&nt(xk,5),t&2){let o;G(o=W())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&$("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ck,ngContentSelectors:wk,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(je(),Qt(0,"div",1),tt(1,"div",2,0),pe(3),vt(),Qt(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),As=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i})}return i})();var Rs=new k("MatFormField"),qk=new k("MAT_FORM_FIELD_DEFAULT_OPTIONS"),pb="fill",Zk="auto",fb="fixed",Yk="translateY(-50%)",si=(()=>{class i{_elementRef=l(H);_changeDetectorRef=l(Me);_platform=l(Fe);_idGenerator=l(ze);_ngZone=l(Y);_defaults=l(qk,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=va("iconPrefixContainer");_textPrefixContainerSignal=va("textPrefixContainer");_iconSuffixContainerSignal=va("iconSuffixContainer");_textSuffixContainerSignal=va("textSuffixContainer");_prefixSuffixContainers=Rt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=lp(ai);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ft(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Zk}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||pb;this._appearanceSignal.set(t)}_appearanceSignal=Z(pb);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||fb}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||fb}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ve();constructor(){let e=this._defaults,t=l(Jt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Dr(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Rt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(bt([void 0,void 0]),ce(()=>[t.errorState,t.userAriaDescribedBy]),jd(),qe(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(we(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),yn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){up({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Rt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",g=`${a+s}px`,I=`calc(${h} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,q=`var(--mat-mdc-form-field-label-transform, ${Yk} translateX(${I}))`,K=a+s+c+u;return[q,K]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Jh(o,r._labelChild,ai,5),Bt(o,As,5)(o,$k,5)(o,Gk,5)(o,gb,5)(o,eh,5)),t&2){Zd();let a;G(a=W())&&(r._formFieldControl=a.first),G(a=W())&&(r._prefixChildren=a),G(a=W())&&(r._suffixChildren=a),G(a=W())&&(r._errorChildren=a),G(a=W())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(ep(r._iconPrefixContainerSignal,ab,5)(r._textPrefixContainerSignal,sb,5)(r._iconSuffixContainerSignal,lb,5)(r._textSuffixContainerSignal,cb,5),nt(kk,5)(ab,5)(sb,5)(lb,5)(cb,5)(db,5)(hb,5)(mb,5)),t&2){Zd(4);let o;G(o=W())&&(r._textField=o.first),G(o=W())&&(r._iconPrefixContainer=o.first),G(o=W())&&(r._textPrefixContainer=o.first),G(o=W())&&(r._iconSuffixContainer=o.first),G(o=W())&&(r._textSuffixContainer=o.first),G(o=W())&&(r._floatingLabel=o.first),G(o=W())&&(r._notchedOutline=o.first),G(o=W())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&$("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[$e([{provide:Rs,useExisting:i},{provide:_b,useExisting:i}])],ngContentSelectors:Ek,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(je(Dk),mt(0,Ik,1,1,"ng-template",null,0,Kn),d(2,"div",6,1),O("click",function(a){return r._control.onContainerClick(a)}),V(4,Tk,1,0,"div",7),d(5,"div",8),V(6,Ok,2,2,"div",9),V(7,Pk,3,0,"div",10),V(8,Fk,3,0,"div",11),d(9,"div",12),V(10,Lk,1,1,null,13),pe(11),m(),V(12,Bk,3,0,"div",14),V(13,zk,3,0,"div",15),m(),V(14,Vk,1,0,"div",16),m(),d(15,"div",17),V(16,jk,2,0,"div",18)(17,Hk,5,1,"div",19),m()),t&2){let o;p(2),$("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),j(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),j(r._hasOutline()?6:-1),p(),j(r._hasIconPrefix?7:-1),p(),j(r._hasTextPrefix?8:-1),p(2),j(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),j(r._hasTextSuffix?12:-1),p(),j(r._hasIconSuffix?13:-1),p(),j(r._hasOutline()?-1:14),p(),$("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),j((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[db,hb,bi,mb,eh],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var Xk=["text"],Kk=[[["mat-icon"]],"*"],Qk=["mat-icon","*"];function Jk(i,n){if(i&1&&R(0,"mat-pseudo-checkbox",1),i&2){let e=M();D("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function eD(i,n){if(i&1&&R(0,"mat-pseudo-checkbox",3),i&2){let e=M();D("disabled",e.disabled)}}function tD(i,n){if(i&1&&(d(0,"span",4),f(1),m()),i&2){let e=M();p(),Se("(",e.group.label,")")}}var ih=new k("MAT_OPTION_PARENT_COMPONENT"),rh=new k("MatOptgroup");var nh=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Bc=(()=>{class i{_element=l(H);_changeDetectorRef=l(Me);_parent=l(ih,{optional:!0});group=l(rh,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(ze).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Z(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new J;_text;_stateChanges=new z;constructor(){let e=l(rt);e.load(Sn),e.load(Ci),this._signalDisableRipple=!!this._parent&&er(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!St(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new nh(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&nt(Xk,7),t&2){let o;G(o=W())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&O("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Tt("id",r.id),ee("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),$("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",U]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Qk,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(je(Kk),V(0,Jk,1,2,"mat-pseudo-checkbox",1),pe(1),d(2,"span",2,0),pe(4,1),m(),V(5,eD,1,1,"mat-pseudo-checkbox",3),V(6,tD,2,1,"span",4),R(7,"div",5)),t&2&&(j(r.multiple?0:-1),p(5),j(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),j(r.group&&r.group._inert?6:-1),p(),D("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[eb,wi],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function bb(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function vb(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var fr=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var oa=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var nD=["trigger"],iD=["panel"],rD=[[["mat-select-trigger"]],"*"],oD=["mat-select-trigger","*"];function aD(i,n){if(i&1&&(d(0,"span",4),f(1),m()),i&2){let e=M();p(),X(e.placeholder)}}function sD(i,n){i&1&&pe(0)}function lD(i,n){if(i&1&&(d(0,"span",11),f(1),m()),i&2){let e=M(2);p(),X(e.triggerValue)}}function cD(i,n){if(i&1&&(d(0,"span",5),V(1,sD,1,0)(2,lD,2,1,"span",11),m()),i&2){let e=M();p(),j(e.customTrigger?1:2)}}function dD(i,n){if(i&1){let e=Lt();d(0,"div",12,1),O("keydown",function(r){Ze(e);let o=M();return Ye(o._handleKeydown(r))}),pe(2,1),m()}if(i&2){let e=M();zt(e.panelClass),$("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),ee("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var uD=new k("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(ue);return()=>cr(i)}}),mD=new k("MAT_SELECT_CONFIG"),hD=new k("MatSelectTrigger"),oh=class{source;value;constructor(n,e){this.source=n,this.value=e}},yb=(()=>{class i{_viewportRuler=l(sr);_changeDetectorRef=l(Me);_elementRef=l(H);_dir=l(Jt,{optional:!0});_idGenerator=l(ze);_renderer=l(Le);_parentFormField=l(Rs,{optional:!0});ngControl=l(_n,{self:!0,optional:!0});_liveAnnouncer=l(ns);_defaultOptions=l(mD,{optional:!0});_animationsDisabled=Ve();_popoverLocation;_initialized=new z;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=bb(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=vb(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new oh(this,e)}_scrollStrategyFactory=l(uD);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new z;_errorStateTracker;stateChanges=new z;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Z(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator($n.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=di(()=>{let e=this.options;return e?e.changes.pipe(bt(e),Mt(()=>yn(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Mt(()=>this.optionSelectionChanges))});openedChange=new J;_openedStream=this.openedChange.pipe(qe(e=>e),ce(()=>{}));_closedStream=this.openedChange.pipe(qe(e=>!e),ce(()=>{}));selectionChange=new J;valueChange=new J;constructor(){let e=l(fr),t=l(Zr,{optional:!0}),r=l(Wi,{optional:!0}),o=l(new fi("tabindex"),{optional:!0}),a=l(ps,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new oa(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ur(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(we(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(we(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(bt(null),we(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Nt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&ic(this._trackedModal,"aria-owns",t),gm(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ic(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!St(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!St(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!St(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Go?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ss(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=yn(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(we(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),yn(...this.options.map(t=>t._stateChanges)).pipe(we(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=en(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,hD,5)(o,Bc,5)(o,rh,5),t&2){let a;G(a=W())&&(r.customTrigger=a.first),G(a=W())&&(r.options=a),G(a=W())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&nt(nD,5)(iD,5)(_c,5),t&2){let o;G(o=W())&&(r.trigger=o.first),G(o=W())&&(r.panel=o.first),G(o=W())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&O("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(ee("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),$("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",U],disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ct(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",U],placeholder:"placeholder",required:[2,"required","required",U],multiple:[2,"multiple","multiple",U],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",U],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ct],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",U]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[$e([{provide:As,useExisting:i},{provide:ih,useExisting:i}]),et],ngContentSelectors:oD,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(je(rD),d(0,"div",2,0),O("click",function(){return r.open()}),d(3,"div",3),V(4,aD,2,1,"span",4)(5,cD,3,1,"span",5),m(),d(6,"div",6)(7,"div",7),nn(),d(8,"svg",8),R(9,"path",9),m()()()(),mt(10,dD,3,16,"ng-template",10),O("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=Je(1);p(3),ee("id",r._valueId),p(),j(r.empty?4:5),p(6),D("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Go,_c],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var pD=["tooltip"],fD=20;var gD=new k("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(ue);return()=>cr(i,{scrollThrottle:fD})}}),_D=new k("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var xb="tooltip-panel",bD={passive:!0},vD=8,yD=8,xD=24,CD=200,Cb=(()=>{class i{_elementRef=l(H);_ngZone=l(Y);_platform=l(Fe);_ariaDescriber=l(rc);_focusMonitor=l(En);_dir=l(Jt);_injector=l(ue);_viewContainerRef=l(mn);_mediaMatcher=l(Lo);_document=l(ie);_renderer=l(Le);_animationsDisabled=Ve();_defaultOptions=l(_D,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=wD;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ft(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ft(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Rn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Rn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new z;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=vD}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(we(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new ni(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(we(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof H)return this._overlayRef;this._detach()}let t=this._injector.get(Uo).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${xb}`,o=Wo(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(we(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Di(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(gD)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(we(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(we(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(we(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(we(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let t=yD,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),It(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${xb}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,bD))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||It({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!St(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&$("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),wD=(()=>{class i{_changeDetectorRef=l(Me);_elementRef=l(H);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ve();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new z;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>xD&&e.width>=CD}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&nt(pD,7),t&2){let o;G(o=W())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&O("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(tt(0,"div",1,0),Ks("animationend",function(a){return r._handleAnimationEnd(a)}),tt(2,"div",2),f(3),vt()()),t&2&&(zt(r.tooltipClass),$("mdc-tooltip--multiline",r._isMultiline),p(3),X(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();function kD(i,n){if(i&1&&(d(0,"mat-option",17),f(1),m()),i&2){let e=n.$implicit;D("value",e),p(),Se(" ",e," ")}}function DD(i,n){if(i&1){let e=Lt();d(0,"mat-form-field",14)(1,"mat-select",16,0),O("selectionChange",function(r){Ze(e);let o=M(2);return Ye(o._changePageSize(r.value))}),ht(3,kD,2,2,"mat-option",17,po),m(),d(5,"div",18),O("click",function(){Ze(e);let r=Je(2);return Ye(r.open())}),m()()}if(i&2){let e=M(2);D("appearance",e._formFieldAppearance)("color",e.color),p(),D("value",e.pageSize)("disabled",e.disabled),Qh("aria-labelledby",e._pageSizeLabelId),D("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),p(2),pt(e._displayedPageSizeOptions)}}function ED(i,n){if(i&1&&(d(0,"div",15),f(1),m()),i&2){let e=M(2);p(),X(e.pageSize)}}function SD(i,n){if(i&1&&(d(0,"div",3)(1,"div",13),f(2),m(),V(3,DD,6,7,"mat-form-field",14),V(4,ED,2,1,"div",15),m()),i&2){let e=M();p(),ee("id",e._pageSizeLabelId),p(),Se(" ",e._intl.itemsPerPageLabel," "),p(),j(e._displayedPageSizeOptions.length>1?3:-1),p(),j(e._displayedPageSizeOptions.length<=1?4:-1)}}function MD(i,n){if(i&1){let e=Lt();d(0,"button",19),O("click",function(){Ze(e);let r=M();return Ye(r._buttonClicked(0,r._previousButtonsDisabled()))}),nn(),d(1,"svg",8),R(2,"path",20),m()()}if(i&2){let e=M();D("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),ee("aria-label",e._intl.firstPageLabel)}}function ID(i,n){if(i&1){let e=Lt();d(0,"button",21),O("click",function(){Ze(e);let r=M();return Ye(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),nn(),d(1,"svg",8),R(2,"path",22),m()()}if(i&2){let e=M();D("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),ee("aria-label",e._intl.lastPageLabel)}}var TD=(()=>{class i{changes=new z;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,r)=>{if(r==0||t==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*t,a=o<r?Math.min(o+t,r):o+t;return`${o+1} \u2013 ${a} of ${r}`};static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),AD=50;var RD=new k("MAT_PAGINATOR_DEFAULT_OPTIONS"),wb=(()=>{class i{_intl=l(TD);_changeDetectorRef=l(Me);_formFieldAppearance;_pageSizeLabelId=l(ze).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new ha(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ct(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new J;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=l(RD,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:r,pageSizeOptions:o,hidePageSize:a,showFirstLastButtons:s}=t;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),a!=null&&(this.hidePageSize=a),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:AD),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ct],length:[2,"length","length",Ct],pageSize:[2,"pageSize","pageSize",Ct],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",U],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",U],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",U]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,r){t&1&&(d(0,"div",1)(1,"div",2),V(2,SD,5,4,"div",3),d(3,"div",4)(4,"div",5),f(5),m(),V(6,MD,3,5,"button",6),d(7,"button",7),O("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),nn(),d(8,"svg",8),R(9,"path",9),m()(),Ji(),d(10,"button",10),O("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),nn(),d(11,"svg",8),R(12,"path",11),m()(),V(13,ID,3,5,"button",12),m()()()),t&2&&(p(2),j(r.hidePageSize?-1:2),p(3),Se(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),p(),j(r.showFirstLastButtons?6:-1),p(),D("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),ee("aria-label",r._intl.previousPageLabel),p(3),D("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),ee("aria-label",r._intl.nextPageLabel),p(3),j(r.showFirstLastButtons?13:-1))},dependencies:[si,yb,Bc,Gr,Cb],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return i})();var OD=(i,n)=>n.id;function PD(i,n){if(i&1&&R(0,"app-product-item",12),i&2){let e=n.$implicit;D("product",e)}}function FD(i,n){if(i&1&&(d(0,"mat-list-option",14),f(1),m()),i&2){let e=n.$implicit,t=M(2);D("value",e.value)("selected",t.shopParams.sort===e.value),p(),Se(" ",e.name," ")}}function ND(i,n){if(i&1){let e=Lt();d(0,"div",2)(1,"div",3)(2,"mat-paginator",4),O("page",function(r){Ze(e);let o=M();return Ye(o.handlePageEvent(r))}),m(),d(3,"form",5,0),O("ngSubmit",function(){Ze(e);let r=M();return Ye(r.onSearchChange())}),d(5,"input",6),Tr("ngModelChange",function(r){Ze(e);let o=M();return Ir(o.shopParams.search,r)||(o.shopParams.search=r),Ye(r)}),m(),d(6,"button",7)(7,"mat-icon"),f(8,"search"),m()()(),d(9,"div",8)(10,"button",9),O("click",function(){Ze(e);let r=M();return Ye(r.openFiltersDialog())}),d(11,"mat-icon"),f(12,"filter_list"),m(),f(13," Filters "),m(),d(14,"button",10)(15,"mat-icon"),f(16,"swap_vert"),m(),f(17," Sort "),m()()(),d(18,"div",11),ht(19,PD,1,1,"app-product-item",12,OD),m()(),d(21,"mat-menu",null,1)(23,"mat-selection-list",13),O("selectionChange",function(r){Ze(e);let o=M();return Ye(o.onSortChange(r))}),ht(24,FD,2,3,"mat-list-option",14,Pi),m()()}if(i&2){let e=Je(22),t=M();p(2),D("length",t.products.count)("pageSize",t.shopParams.pageSize)("showFirstLastButtons",!0)("pageSizeOptions",t.pageSizeOptions)("pageIndex",t.shopParams.pageNumber-1),p(3),Mr("ngModel",t.shopParams.search),p(9),D("matMenuTriggerFor",e),p(5),pt(t.products.data),p(4),D("multiple",!1),p(),pt(t.sortOptions)}}var zc=class i{shopService=l(ar);dialogService=l(S_);products;sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low-High",value:"priceAsc"},{name:"Price: High-Low",value:"priceDesc"}];shopParams=new Nc;pageSizeOptions=[5,10,15,20];ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:n=>this.products=n,error:n=>console.log(n)})}onSearchChange(){this.shopParams.pageNumber=1,this.getProducts()}handlePageEvent(n){this.shopParams.pageNumber=n.pageIndex+1,this.shopParams.pageSize=n.pageSize,this.getProducts()}onSortChange(n){let e=n.options[0];e&&(this.shopParams.sort=e.value,this.shopParams.pageNumber=1,this.getProducts())}openFiltersDialog(){this.dialogService.open(Oc,{minWidth:"500px",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:e=>{e&&(this.shopParams.brands=e.selectedBrands,this.shopParams.types=e.selectedTypes,this.shopParams.pageNumber=1,this.getProducts())}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-shop"]],decls:1,vars:1,consts:[["searchForm","ngForm"],["sortMenu","matMenu"],[1,"flex","flex-col","gap-3"],[1,"flex","justify-between"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex"],[1,"relative","flex","items-center","w-full","max-w-md","mx-4",3,"ngSubmit"],["type","search","placeholder","Search","name","search",1,"block","w-full","p-4","text-sm","text-gray-900","border-gray-300","rounded-lg",3,"ngModelChange","ngModel"],["mat-icon-button","","type","submit",1,"absolute","inset-y-0","right-8","top-2","flex","items-center","pl-3"],[1,"flex","gap-3"],["mat-stroked-button","",1,"match-input-height",3,"click"],["mat-stroked-button","",1,"match-input-height",3,"matMenuTriggerFor"],[1,"grid","grid-cols-5","gap-4"],[3,"product"],[3,"selectionChange","multiple"],[3,"value","selected"]],template:function(e,t){e&1&&V(0,ND,26,8),e&2&&j(t.products?0:-1)},dependencies:[cc,st,an,pr,Is,Ms,Fc,wb,ta,ea,Ei,Gn,Qo,Yr,Zr,Gr],encapsulation:2})};var LD=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),BD={passive:!0},kb=(()=>{class i{_platform=l(Fe);_ngZone=l(Y);_renderer=l(Kt).createRenderer(null,null);_styleLoader=l(rt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return vn;this._styleLoader.load(LD);let t=gn(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new z,a="cdk-text-field-autofilled",s=u=>{u.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0}))):u.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,BD)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=gn(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Db=new k("MAT_INPUT_VALUE_ACCESSOR");var zD=["button","checkbox","file","hidden","image","radio","range","reset","submit"],VD=new k("MAT_INPUT_CONFIG"),gr=(()=>{class i{_elementRef=l(H);_platform=l(Fe);ngControl=l(_n,{optional:!0,self:!0});_autofillMonitor=l(kb);_ngZone=l(Y);_formField=l(Rs,{optional:!0});_renderer=l(Le);_uid=l(ze).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(VD,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new z;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ft(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator($n.required)??!1}set required(e){this._required=Ft(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&bm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ft(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>bm().has(e));constructor(){let e=l(Zr,{optional:!0}),t=l(Wi,{optional:!0}),r=l(fr),o=l(Db,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?er(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new oa(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Dr(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){zD.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&O("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Tt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ee("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),$("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U]},exportAs:["matInput"],features:[$e([{provide:As,useExisting:i}]),et]})}return i})();function jD(i,n){if(i&1){let e=Lt();d(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),R(4,"img",4),m(),d(5,"div")(6,"h1",5),f(7),m(),d(8,"p"),f(9),m(),d(10,"div",6)(11,"p",7),f(12),Be(13,"currency"),m()(),d(14,"div",8)(15,"button",9),O("click",function(){Ze(e);let r=M();return Ye(r.updateCart())}),d(16,"mat-icon"),f(17,"shopping_cart"),m(),f(18),m(),d(19,"mat-form-field",10)(20,"mat-label"),f(21,"Quantity"),m(),d(22,"input",11),Tr("ngModelChange",function(r){Ze(e);let o=M();return Ir(o.quantity,r)||(o.quantity=r),Ye(r)}),m()()(),R(23,"mat-divider"),d(24,"p",12),f(25),m()()()()()}if(i&2){let e=M();p(4),D("src",hn(e.product.pictureUrl),mi),p(3),X(e.product.name),p(2),Se("You have ",e.quantityInCart," of this item in your cart"),p(3),Se(" ",Ue(13,9,e.product.price)," "),p(3),D("disabled",e.quantity==e.quantityInCart),p(3),Se(" ",e.getButtonText()," "),p(4),Mr("ngModel",e.quantity),p(3),Se(" ",e.product.description," ")}}var Vc=class i{shopService=l(ar);activatedRoute=l(fn);cartService=l(_t);product;quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let n=this.activatedRoute.snapshot.paramMap.get("id");n&&this.shopService.getProduct(+n).subscribe({next:e=>{this.product=e,this.updateQuantityInCart()},error:e=>console.log(e)})}updateCart(){if(this.product)if(this.quantity>this.quantityInCart){let n=this.quantity-this.quantityInCart;this.quantityInCart+=n,this.cartService.addItemToCart(this.product,n)}else{let n=this.quantityInCart-this.quantity;this.quantityInCart-=n,this.cartService.removeItemFromCart(this.product.id,n)}}updateQuantityInCart(){this.quantityInCart=this.cartService.cart()?.items.find(n=>n.productId===this.product?.id)?.quantity||0,this.quantity=this.quantityInCart||1}getButtonText(){return this.quantityInCart>0?"Update cart":"Add to cart"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-screen-2xl","px-4","mx-auto"],[1,"grid","grid-cols-2","gap-8"],[1,"max-w-xl","mx-auto"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","gap-4","mt-6"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"],["appearance","outline",1,"flex"],["matInput","","min","0","type","number",3,"ngModelChange","ngModel"],[1,"mt-6","text-gray-500"]],template:function(e,t){e&1&&V(0,jD,26,11,"section",0),e&2&&j(t.product?0:-1)},dependencies:[jo,an,si,ai,qo,gr,ta,Ei,Gm,Gn,Zm,Yr,Ot],encapsulation:2})};function UD(i,n){if(i&1&&(d(0,"li",4),f(1),m()),i&2){let e=n.$implicit;p(),X(e)}}function HD(i,n){if(i&1&&(d(0,"div",2)(1,"ul",3),ht(2,UD,2,1,"li",4,Pi),m()()),i&2){let e=M();p(2),pt(e.validationErrors)}}var jc=class i{baseUrl=Ht.apiUrl;http=l(Gt);validationErrors;get404Error(){this.http.get(this.baseUrl+"buggy/notfound").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get401Error(){this.http.get(this.baseUrl+"buggy/unauthorized").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get500Error(){this.http.get(this.baseUrl+"buggy/internalerror").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get400ValidationError(){this.http.post(this.baseUrl+"buggy/validationerror",{}).subscribe({next:n=>console.log(n),error:n=>this.validationErrors=n})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-test-error"]],decls:12,vars:1,consts:[[1,"mt-5","flex","justify-center","gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","max-w-lg","mt-5","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"button",1),O("click",function(){return t.get500Error()}),f(2,"Test 500 error"),m(),d(3,"button",1),O("click",function(){return t.get404Error()}),f(4,"Test 404 error"),m(),d(5,"button",1),O("click",function(){return t.get400Error()}),f(6,"Test 400 error"),m(),d(7,"button",1),O("click",function(){return t.get401Error()}),f(8,"Test 401 error"),m(),d(9,"button",1),O("click",function(){return t.get400ValidationError()}),f(10,"Test validation error"),m()(),V(11,HD,4,0,"div",2)),e&2&&(p(11),j(t.validationErrors?11:-1))},dependencies:[st],encapsulation:2})};var Uc=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","items-center","justify-center","min-h-96","bg-gray-100"],[1,"text-center"],[1,"text-purple-700!","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-4"],[1,"text-lg","text-gray-600","mt-2"],["routerLink","/shop","mat-flat-button","",1,"mt-4"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"mat-icon",2),f(3,"error_outline"),m(),d(4,"h1",3),f(5,"404"),m(),d(6,"p",4),f(7,"Page not found"),m(),d(8,"button",5),f(9,"Back to shop"),m()()())},dependencies:[an,gt,jo],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};function $D(i,n){if(i&1&&(d(0,"h5",2),f(1),m(),d(2,"p",3),f(3,"This error comes from the server, not Angular"),m(),d(4,"p",4),f(5,"What to do next?"),m(),d(6,"ol",5)(7,"li",6),f(8,"Check the network tab in chrome dev tools"),m(),d(9,"li",6),f(10," Reproduce the error in postman. If same error, don't waste time troubleshooting angular code "),m()(),d(11,"h5",7),f(12,"Stack trace"),m(),d(13,"mat-card",8)(14,"code",9),f(15),m()()),i&2){let e=M();p(),Se("Error: ",e.error.message),p(14),X(e.error.details)}}var Hc=class i{constructor(n){this.router=n;let e=this.router.currentNavigation();this.error=e?.extras.state?.error}error;static \u0275fac=function(e){return new(e||i)(me(yt))};static \u0275cmp=S({type:i,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"container","mt-5","p-4","bg-gray-100","rounded","shadow-lg"],[1,"text-2xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold","mb-2"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"h1",1),f(2,"Internal server error"),m(),V(3,$D,16,2),m()),e&2&&(p(3),j(t.error?3:-1))},dependencies:[xi],encapsulation:2})};var $c=class i{item=go.required();cartService=l(_t);incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-cart-item"]],inputs:{item:[1,"item"]},decls:26,vars:11,consts:[[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","items-center","justify-between","gap-6"],[1,"shrink","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20",3,"src"],[1,"flex","items-center","justify-between","order-3"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","order-4","w-32"],[1,"font-bold","text-xl"],[1,"w-full","flex","flex-col","items-start","flex-1","space-y-4","order-2","max-w-md"],[1,"font-medium",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!",3,"click"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"a",2),R(3,"img",3),m(),d(4,"div",4)(5,"div",5)(6,"button",6),O("click",function(){return t.decrementQuantity()}),d(7,"mat-icon",7),f(8,"remove"),m()(),d(9,"div",8),f(10),m(),d(11,"button",6),O("click",function(){return t.incrementQuantity()}),d(12,"mat-icon",9),f(13,"add"),m()()(),d(14,"div",10)(15,"p",11),f(16),Be(17,"currency"),m()()(),d(18,"div",12)(19,"a",13),f(20),m(),d(21,"div",14)(22,"button",15),O("click",function(){return t.removeItemFromCart()}),d(23,"mat-icon"),f(24,"delete"),m(),f(25," Delete "),m()()()()()),e&2&&(p(2),D("routerLink",Ln("/shop/",t.item().productId)),p(),D("src",hn(t.item().pictureUrl),mi),p(7),X(t.item().quantity),p(6),X(Ue(17,9,t.item().price)),p(3),D("routerLink",Ln("/shop/",t.item().productId)),p(),Se(" ",t.item().productName," "))},dependencies:[gt,st,an,Gr,Ot],encapsulation:2})};function GD(i,n){i&1&&(d(0,"div",10)(1,"button",17),f(2,"Checkout"),m(),d(3,"button",18),f(4,"Continue Shopping"),m()())}var aa=class i{cartService=l(_t);location=l(gi);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-order-summary"]],decls:41,vars:13,consts:[[1,"mx-auto","max-w-4xl","flex-1","space-y-6","w-full"],[1,"space-y-4","rounded-lg","border","border-gray-200","p-4","bg-white","shadow-sm"],[1,"text-xl","font-semibold"],[1,"space-y-4"],[1,"space-y-2"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-medium","text-gray-500"],[1,"font-medium","text-gray-900"],[1,"font-medium","text-green-500"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2"],[1,"flex","flex-col","gap-2"],[1,"space-y-4","rounded-lg","border","border-gray-200","bg-white","shadow-sm"],[1,"space-y-2","flex","flex-col","p-2"],[1,"mb-2","block","text-sm","font-medium"],["appearance","outline"],["type","text","matInput",""],["mat-flat-button",""],["routerLink","/checkout","mat-flat-button",""],["routerLink","/shop","mat-button",""]],template:function(e,t){if(e&1&&(d(0,"div",0)(1,"div",1)(2,"p",2),f(3,"Order summary"),m(),d(4,"div",3)(5,"div",4)(6,"dl",5)(7,"dt",6),f(8,"Subtotal"),m(),d(9,"dd",7),f(10),Be(11,"currency"),m()(),d(12,"dl",5)(13,"dt",6),f(14,"Discount"),m(),d(15,"dd",8),f(16),Be(17,"currency"),m()(),d(18,"dl",5)(19,"dt",6),f(20,"Delivery fee"),m(),d(21,"dd",7),f(22),Be(23,"currency"),m()()(),d(24,"dl",9)(25,"dt",6),f(26,"Total"),m(),d(27,"dd",7),f(28),Be(29,"currency"),m()()(),V(30,GD,5,0,"div",10),m(),d(31,"div",11)(32,"form",12)(33,"label",13),f(34," Do you have a voucher code? "),m(),d(35,"mat-form-field",14)(36,"mat-label"),f(37,"Voucher code"),m(),R(38,"input",15),m(),d(39,"button",16),f(40,"Apply code"),m()()()()),e&2){let r,o,a,s;p(10),X(Ue(11,5,(r=t.cartService.totals())==null?null:r.subtotal)),p(6),Se(" -",Ue(17,7,(o=t.cartService.totals())==null?null:o.discount)," "),p(6),Se(" ",Ue(23,9,(a=t.cartService.totals())==null?null:a.shipping)," "),p(6),X(Ue(29,11,(s=t.cartService.totals())==null?null:s.total)),p(2),j(t.location.path()!=="/checkout"?30:-1)}},dependencies:[gt,st,si,ai,gr,Ot],encapsulation:2})};var Gc=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-empty-state"]],decls:8,vars:0,consts:[[1,"max-w-7xl","mx-auto","mt-32","px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","py-12","w-full"],[1,"icon-display","mb-8"],[1,"text-gray-600","text-lg","font-semibold","mb-4"],["mat-flat-button","","routerLink","/shop"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"mat-icon",2),f(3,"shopping_cart"),m(),d(4,"p",3),f(5,"Your shopping cart is empty"),m(),d(6,"button",4),f(7,"Go shopping!"),m()()())},dependencies:[an,st,gt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var WD=(i,n)=>n.productId;function qD(i,n){if(i&1&&R(0,"app-cart-item",2),i&2){let e=n.$implicit;D("item",e)}}function ZD(i,n){if(i&1&&(d(0,"div",0)(1,"div",1),ht(2,qD,1,1,"app-cart-item",2,WD),m(),d(4,"div",3),R(5,"app-order-summary"),m()()),i&2){let e,t=M();p(2),pt((e=t.cartService.cart())==null?null:e.items)}}function YD(i,n){i&1&&R(0,"app-empty-state")}var Wc=class i{cartService=l(_t);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"flex","w-full","items-start","gap-6","mt-32"],[1,"w-3/4"],[3,"item"],[1,"w-1/4"]],template:function(e,t){if(e&1&&(d(0,"section"),V(1,ZD,6,0,"div",0)(2,YD,1,0,"app-empty-state"),m()),e&2){let r;p(),j(((r=t.cartService.cart())==null||r.items==null?null:r.items.length)>0?1:2)}},dependencies:[$c,aa,Gc],encapsulation:2})};var XD=["*"];function KD(i,n){i&1&&pe(0)}var ah=(()=>{class i{_elementRef=l(H);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return i})(),sh=(()=>{class i{template=l(Xt);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkStepLabel",""]]})}return i})();var Xr={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},QD=new k("STEPPER_GLOBAL_OPTIONS"),qc=(()=>{class i{_stepperOptions;_stepper=l(sa);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Z(!1);interactedStream=new J;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Z(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Z(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=Z(null);index=Z(-1);isSelected=Rt(()=>this._stepper.selectedIndex===this.index());indicatorType=Rt(()=>{let e=this.isSelected(),t=this.completed,r=this._state()??Xr.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?Xr.ERROR:this._displayDefaultIndicatorType?!t||e?Xr.NUMBER:o?Xr.EDIT:Xr.DONE:t&&!e?Xr.DONE:t&&e?r:o&&e?Xr.EDIT:r});isNavigable=Rt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Z(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=l(QD,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["cdk-step"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,sh,5)(o,ri,5),t&2){let a;G(a=W())&&(r.stepLabel=a.first),G(a=W())&&(r._childForms=a)}},viewQuery:function(t,r){if(t&1&&nt(Xt,7),t&2){let o;G(o=W())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",U],optional:[2,"optional","optional",U],completed:[2,"completed","completed",U],hasError:[2,"hasError","hasError",U]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[et],ngContentSelectors:XD,decls:1,vars:0,template:function(t,r){t&1&&(je(),Xs(0,KD,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return i})(),sa=(()=>{class i{_dir=l(Jt,{optional:!0});_changeDetectorRef=l(Me);_elementRef=l(H);_destroyed=new z;_keyManager;_steps;steps=new ui;_stepHeader;_sortedHeaders=new ui;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Z(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Z(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new J;selectedIndexChange=new J;_groupId=l(ze).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(bt(this._steps),we(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,r)=>t.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(bt(this._stepHeader),we(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,r)=>t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Hi(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Q()).pipe(bt(this._layoutDirection()),we(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:t[e],previouslySelectedStep:t[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=St(e),r=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!t&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let r=t.stepControl;return(r?r.invalid||r.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=Ui();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkStepper",""]],contentQueries:function(t,r,o){if(t&1&&Bt(o,qc,5)(o,ah,5),t&2){let a;G(a=W())&&(r._steps=a),G(a=W())&&(r._stepHeader=a)}},inputs:{linear:[2,"linear","linear",U],selectedIndex:[2,"selectedIndex","selectedIndex",Ct],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return i})(),Eb=(()=>{class i{_stepper=l(sa);type="submit";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,r){t&1&&O("click",function(){return r._stepper.next()}),t&2&&Tt("type",r.type)},inputs:{type:"type"}})}return i})(),Sb=(()=>{class i{_stepper=l(sa);type="button";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,r){t&1&&O("click",function(){return r._stepper.previous()}),t&2&&Tt("type",r.type)},inputs:{type:"type"}})}return i})(),Mb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[qt]})}return i})();var JD=(i,n,e)=>({index:i,active:n,optional:e});function eE(i,n){if(i&1&&Cn(0,2),i&2){let e=M();D("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",ip(2,JD,e.index,e.active,e.optional))}}function tE(i,n){if(i&1&&(d(0,"span",7),f(1),m()),i&2){let e=M(2);p(),X(e._getDefaultTextForState(e.state))}}function nE(i,n){if(i&1&&(d(0,"span",8),f(1),m()),i&2){let e=M(3);p(),X(e._intl.completedLabel)}}function iE(i,n){if(i&1&&(d(0,"span",8),f(1),m()),i&2){let e=M(3);p(),X(e._intl.editableLabel)}}function rE(i,n){if(i&1&&(V(0,nE,2,1,"span",8)(1,iE,2,1,"span",8),d(2,"mat-icon",7),f(3),m()),i&2){let e=M(2);j(e.state==="done"?0:e.state==="edit"?1:-1),p(3),X(e._getDefaultTextForState(e.state))}}function oE(i,n){if(i&1&&V(0,tE,2,1,"span",7)(1,rE,4,2),i&2){let e,t=M();j((e=t.state)==="number"?0:1)}}function aE(i,n){i&1&&(d(0,"div",4),Cn(1,9),m()),i&2&&(p(),D("ngTemplateOutlet",n.template))}function sE(i,n){if(i&1&&(d(0,"div",4),f(1),m()),i&2){let e=M();p(),X(e.label)}}function lE(i,n){if(i&1&&(d(0,"div",5),f(1),m()),i&2){let e=M();p(),X(e._intl.optionalLabel)}}function cE(i,n){if(i&1&&(d(0,"div",6),f(1),m()),i&2){let e=M();p(),X(e.errorMessage)}}var Ib=["*"];function dE(i,n){}function uE(i,n){if(i&1&&(pe(0),mt(1,dE,0,0,"ng-template",0)),i&2){let e=M();p(),D("cdkPortalOutlet",e._portal)}}var mE=["animatedContainer"],Tb=i=>({steps:i}),Ab=i=>({step:i});function hE(i,n){i&1&&pe(0)}function pE(i,n){if(i&1&&(d(0,"div",5),Cn(1,9)(2,6),m()),i&2){let e=M(2),t=Je(6);p(),D("ngTemplateOutlet",e.headerPrefix()),p(),D("ngTemplateOutlet",t)("ngTemplateOutletContext",ba(3,Tb,e.steps))}}function fE(i,n){if(i&1&&Cn(0,6),i&2){let e=M(2),t=Je(6);D("ngTemplateOutlet",t)("ngTemplateOutletContext",ba(2,Tb,e.steps))}}function gE(i,n){if(i&1&&(d(0,"div",10,2),Cn(2,9),m()),i&2){let e=n.$implicit,t=n.$index,r=M(2);zt("mat-horizontal-stepper-content-"+r._getAnimationDirection(t)),D("id",r._getStepContentId(t)),ee("aria-labelledby",r._getStepLabelId(t))("inert",r.selectedIndex===t?null:""),p(2),D("ngTemplateOutlet",e.content)}}function _E(i,n){if(i&1&&(d(0,"div",3),V(1,pE,3,5,"div",5)(2,fE,1,4,"ng-container",6),d(3,"div",7),ht(4,gE,3,6,"div",8,po),m()()),i&2){let e=M();p(),j(e.headerPrefix()?1:2),p(3),pt(e.steps)}}function bE(i,n){if(i&1&&Cn(0,9),i&2){let e=M(2);D("ngTemplateOutlet",e.headerPrefix())}}function vE(i,n){if(i&1&&(d(0,"div",11),Cn(1,6),d(2,"div",12,2)(4,"div",13)(5,"div",14),Cn(6,9),m()()()()),i&2){let e=n.$implicit,t=n.$index,r=n.$index,o=n.$count,a=M(2),s=Je(4);p(),D("ngTemplateOutlet",s)("ngTemplateOutletContext",ba(10,Ab,e)),p(),$("mat-stepper-vertical-line",r!==o-1)("mat-vertical-content-container-active",a.selectedIndex===t),ee("inert",a.selectedIndex===t?null:""),p(2),D("id",a._getStepContentId(t)),ee("aria-labelledby",a._getStepLabelId(t)),p(2),D("ngTemplateOutlet",e.content)}}function yE(i,n){if(i&1&&(d(0,"div",4),V(1,bE,1,1,"ng-container",9),ht(2,vE,7,12,"div",11,po),m()),i&2){let e=M();p(),j(e.headerPrefix()?1:-1),p(),pt(e.steps)}}function xE(i,n){if(i&1){let e=Lt();d(0,"mat-step-header",15),O("click",function(){let r=Ze(e).step;return Ye(r.select())})("keydown",function(r){Ze(e);let o=M();return Ye(o._onKeydown(r))}),m()}if(i&2){let e=n.step,t=M();$("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),D("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),ee("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function CE(i,n){i&1&&R(0,"div",17)}function wE(i,n){if(i&1&&(Cn(0,6),V(1,CE,1,0,"div",17)),i&2){let e=n.$implicit,t=n.$index,r=n.$count;M(2);let o=Je(4);D("ngTemplateOutlet",o)("ngTemplateOutletContext",ba(3,Ab,e)),p(),j(t!==r-1?1:-1)}}function kE(i,n){if(i&1&&(d(0,"div",16),ht(1,wE,2,5,null,null,po),m()),i&2){let e=n.steps;p(),pt(e)}}var lh=(()=>{class i extends sh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","matStepLabel",""]],features:[Ee]})}return i})(),DE=(()=>{class i{changes=new z;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ch=(()=>{class i extends ah{_intl=l(DE);_focusMonitor=l(En);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=l(rt);e.load(Sn),e.load(Ci);let t=l(Me);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof lh?null:this.label}_templateLabel(){return this.label instanceof lh?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,r){t&2&&(zt("mat-"+(r.color||"primary")),$("mat-step-header-empty-label",r._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[Ee],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,r){if(t&1&&(R(0,"div",0),d(1,"div")(2,"div",1),V(3,eE,1,6,"ng-container",2)(4,oE,2,1),m()(),d(5,"div",3),V(6,aE,2,1,"div",4)(7,sE,2,1,"div",4),V(8,lE,2,1,"div",5),V(9,cE,2,1,"div",6),m()),t&2){let o;D("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),p(),zt(Ln("mat-step-icon-state-",r.state," mat-step-icon")),$("mat-step-icon-selected",r.selected),p(2),j(r.iconOverrides&&r.iconOverrides[r.state]?3:4),p(2),$("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),p(),j((o=r._templateLabel())?6:r._stringLabel()?7:-1,o),p(2),j(r._hasOptionalLabel()?8:-1),p(),j(r._hasErrorLabel()?9:-1)}},dependencies:[wi,bi,an],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return i})(),EE=(()=>{class i{templateRef=l(Xt);name;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return i})(),SE=(()=>{class i{_template=l(Xt);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["ng-template","matStepContent",""]]})}return i})(),dh=(()=>{class i extends qc{_errorStateMatcher=l(fr,{skipSelf:!0});_viewContainerRef=l(mn);_isSelected=xt.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Mt(()=>this._stepper.selectionChange.pipe(ce(e=>e.selectedStep===this),bt(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new On(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let r=this._errorStateMatcher.isErrorState(e,t),o=!!(e&&e.invalid&&this.interacted);return r||o}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275cmp=S({type:i,selectors:[["mat-step"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,lh,5)(o,SE,5),t&2){let a;G(a=W())&&(r.stepLabel=a.first),G(a=W())&&(r._lazyContent=a.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[$e([{provide:fr,useExisting:i},{provide:qc,useExisting:i}]),Ee],ngContentSelectors:Ib,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(je(),mt(0,uE,2,1,"ng-template"))},dependencies:[ki],encapsulation:2,changeDetection:0})}return i})(),uh=(()=>{class i extends sa{_ngZone=l(Y);_renderer=l(Le);_animationsDisabled=Ve();_cleanupTransition;_isAnimating=Z(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new ui;_icons;animationDone=new J;disableRipple=!1;color;labelPosition="end";headerPosition="top";headerPrefix=go(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!l(Fe).isBrowser;constructor(){super();let t=l(H).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(we(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(we(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(bt(null),we(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let r=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(r||o)&&this._animatedContainers.find(s=>s.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,r,o){if(t&1&&Bt(o,dh,5)(o,EE,5),t&2){let a;G(a=W())&&(r._steps=a),G(a=W())&&(r._icons=a)}},viewQuery:function(t,r){if(t&1&&nt(ch,5)(mE,5),t&2){let o;G(o=W())&&(r._stepHeader=o),G(o=W())&&(r._animatedContainers=o)}},hostVars:14,hostBindings:function(t,r){t&2&&(pi("--mat-stepper-animation-duration",r._getAnimationDuration()),$("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom")("mat-stepper-animating",r._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[$e([{provide:sa,useExisting:i}]),Ee],ngContentSelectors:Ib,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,r){if(t&1&&(je(),V(0,hE,1,0),V(1,_E,6,1,"div",3)(2,yE,4,1,"div",4),mt(3,xE,1,27,"ng-template",null,0,Kn)(5,kE,3,0,"ng-template",null,1,Kn)),t&2){let o;j(r._isServer?0:-1),p(),j((o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[bi,ch],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return i})(),Rb=(()=>{class i extends Eb{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,r){t&2&&Tt("type",r.type)},features:[Ee]})}return i})(),Ob=(()=>{class i extends Sb{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Dt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,r){t&2&&Tt("type",r.type)},features:[Ee]})}return i})(),Pb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({providers:[fr],imports:[Ho,Mb,s_,ac,uh,ch,qt]})}return i})();function Xc(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xc=function(n){return typeof n}:Xc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xc(i)}var Lb="dahlia",IE=function(n){return n===3?"v3":n},Bb="https://js.stripe.com",TE="".concat(Bb,"/").concat(Lb,"/stripe.js"),AE=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,RE=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,Fb="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",OE=function(n){return AE.test(n)||RE.test(n)},PE=function(){for(var n=document.querySelectorAll('script[src^="'.concat(Bb,'"]')),e=0;e<n.length;e++){var t=n[e];if(OE(t.src))return t}return null},Nb=function(n){var e=n&&!n.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(TE).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(t),t},FE=function(n,e){!n||!n._registerWrapper||n._registerWrapper({name:"stripe-js",version:"9.3.1",startTime:e})},Os=null,Zc=null,Yc=null,NE=function(n){return function(e){n(new Error("Failed to load Stripe.js",{cause:e}))}},LE=function(n,e){return function(){window.Stripe?n(window.Stripe):e(new Error("Stripe.js not available"))}},BE=function(n){return Os!==null?Os:(Os=new Promise(function(e,t){if(typeof window>"u"||typeof document>"u"){e(null);return}if(window.Stripe&&n&&console.warn(Fb),window.Stripe){e(window.Stripe);return}try{var r=PE();if(r&&n)console.warn(Fb);else if(!r)r=Nb(n);else if(r&&Yc!==null&&Zc!==null){var o;r.removeEventListener("load",Yc),r.removeEventListener("error",Zc),(o=r.parentNode)===null||o===void 0||o.removeChild(r),r=Nb(n)}Yc=LE(e,t),Zc=NE(t),r.addEventListener("load",Yc),r.addEventListener("error",Zc)}catch(a){t(a);return}}),Os.catch(function(e){return Os=null,Promise.reject(e)}))},zE=function(n,e,t){if(n===null)return null;var r=e[0];if(typeof r!="string")throw new Error("Expected publishable key to be of type string, got type ".concat(Xc(r)," instead."));var o=r.match(/^pk_test/),a=IE(n.version),s=Lb;o&&a!==s&&console.warn("Stripe.js@".concat(a," was loaded on the page, but @stripe/stripe-js@").concat("9.3.1"," expected Stripe.js@").concat(s,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var c=n.apply(void 0,e);return FE(c,t),c},Ps,zb=!1,Vb=function(){return Ps||(Ps=BE(null).catch(function(n){return Ps=null,Promise.reject(n)}),Ps)};Promise.resolve().then(function(){return Vb()}).catch(function(i){zb||console.warn(i)});var jb=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];zb=!0;var r=Date.now();return Vb().then(function(o){return zE(o,e,r)})};var Pn=class extends Error{constructor(n,e){let t=new.target.prototype;super(`${n}: Status code '${e}'`),this.statusCode=e,this.__proto__=t}},_r=class extends Error{constructor(n="A timeout occurred."){let e=new.target.prototype;super(n),this.__proto__=e}},Zt=class extends Error{constructor(n="An abort occurred."){let e=new.target.prototype;super(n),this.__proto__=e}},Kc=class extends Error{constructor(n,e){let t=new.target.prototype;super(n),this.transport=e,this.errorType="UnsupportedTransportError",this.__proto__=t}},Qc=class extends Error{constructor(n,e){let t=new.target.prototype;super(n),this.transport=e,this.errorType="DisabledTransportError",this.__proto__=t}},Jc=class extends Error{constructor(n,e){let t=new.target.prototype;super(n),this.transport=e,this.errorType="FailedToStartTransportError",this.__proto__=t}},Fs=class extends Error{constructor(n){let e=new.target.prototype;super(n),this.errorType="FailedToNegotiateWithServerError",this.__proto__=e}},ed=class extends Error{constructor(n,e){let t=new.target.prototype;super(n),this.innerErrors=e,this.__proto__=t}};var la=class{constructor(n,e,t){this.statusCode=n,this.statusText=e,this.content=t}},Si=class{get(n,e){return this.send(Re(_({},e),{method:"GET",url:n}))}post(n,e){return this.send(Re(_({},e),{method:"POST",url:n}))}delete(n,e){return this.send(Re(_({},e),{method:"DELETE",url:n}))}getCookieString(n){return""}};var C=(function(i){return i[i.Trace=0]="Trace",i[i.Debug=1]="Debug",i[i.Information=2]="Information",i[i.Warning=3]="Warning",i[i.Error=4]="Error",i[i.Critical=5]="Critical",i[i.None=6]="None",i})(C||{});var Mi=class{constructor(){}log(n,e){}};Mi.instance=new Mi;var Ub="10.0.0";var ot=class{static isRequired(n,e){if(n==null)throw new Error(`The '${e}' argument is required.`)}static isNotEmpty(n,e){if(!n||n.match(/^\s*$/))throw new Error(`The '${e}' argument should not be empty.`)}static isIn(n,e,t){if(!(n in e))throw new Error(`Unknown ${t} value: ${n}.`)}},lt=class i{static get isBrowser(){return!i.isNode&&typeof window=="object"&&typeof window.document=="object"}static get isWebWorker(){return!i.isNode&&typeof self=="object"&&"importScripts"in self}static get isReactNative(){return!i.isNode&&typeof window=="object"&&typeof window.document>"u"}static get isNode(){return typeof process<"u"&&process.release&&process.release.name==="node"}};function br(i,n){let e="";return li(i)?(e=`Binary data of length ${i.byteLength}`,n&&(e+=`. Content: '${VE(i)}'`)):typeof i=="string"&&(e=`String data of length ${i.length}`,n&&(e+=`. Content: '${i}'`)),e}function VE(i){let n=new Uint8Array(i),e="";return n.forEach(t=>{let r=t<16?"0":"";e+=`0x${r}${t.toString(16)} `}),e.substring(0,e.length-1)}function li(i){return i&&typeof ArrayBuffer<"u"&&(i instanceof ArrayBuffer||i.constructor&&i.constructor.name==="ArrayBuffer")}async function nd(i,n,e,t,r,o){let a={},[s,c]=Ii();a[s]=c,i.log(C.Trace,`(${n} transport) sending data. ${br(r,o.logMessageContent)}.`);let u=li(r)?"arraybuffer":"text",h=await e.post(t,{content:r,headers:_(_({},a),o.headers),responseType:u,timeout:o.timeout,withCredentials:o.withCredentials});i.log(C.Trace,`(${n} transport) request complete. Response status: ${h.statusCode}.`)}function Hb(i){return i===void 0?new Kr(C.Information):i===null?Mi.instance:i.log!==void 0?i:new Kr(i)}var td=class{constructor(n,e){this._subject=n,this._observer=e}dispose(){let n=this._subject.observers.indexOf(this._observer);n>-1&&this._subject.observers.splice(n,1),this._subject.observers.length===0&&this._subject.cancelCallback&&this._subject.cancelCallback().catch(e=>{})}},Kr=class{constructor(n){this._minLevel=n,this.out=console}log(n,e){if(n>=this._minLevel){let t=`[${new Date().toISOString()}] ${C[n]}: ${e}`;switch(n){case C.Critical:case C.Error:this.out.error(t);break;case C.Warning:this.out.warn(t);break;case C.Information:this.out.info(t);break;default:this.out.log(t);break}}}};function Ii(){let i="X-SignalR-User-Agent";return lt.isNode&&(i="User-Agent"),[i,jE(Ub,UE(),$E(),HE())]}function jE(i,n,e,t){let r="Microsoft SignalR/",o=i.split(".");return r+=`${o[0]}.${o[1]}`,r+=` (${i}; `,n&&n!==""?r+=`${n}; `:r+="Unknown OS; ",r+=`${e}`,t?r+=`; ${t}`:r+="; Unknown Runtime Version",r+=")",r}function UE(){if(lt.isNode)switch(process.platform){case"win32":return"Windows NT";case"darwin":return"macOS";case"linux":return"Linux";default:return process.platform}else return""}function HE(){if(lt.isNode)return process.versions.node}function $E(){return lt.isNode?"NodeJS":"Browser"}function id(i){return i.stack?i.stack:i.message?i.message:`${i}`}function $b(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("could not find global")}var rd=class extends Si{constructor(n){if(super(),this._logger=n,typeof fetch>"u"||lt.isNode){let e=typeof __webpack_require__=="function"?__non_webpack_require__:eo;this._jar=new(e("tough-cookie")).CookieJar,typeof fetch>"u"?this._fetchType=e("node-fetch"):this._fetchType=fetch,this._fetchType=e("fetch-cookie")(this._fetchType,this._jar)}else this._fetchType=fetch.bind($b());if(typeof AbortController>"u"){let e=typeof __webpack_require__=="function"?__non_webpack_require__:eo;this._abortControllerType=e("abort-controller")}else this._abortControllerType=AbortController}async send(n){if(n.abortSignal&&n.abortSignal.aborted)throw new Zt;if(!n.method)throw new Error("No method defined.");if(!n.url)throw new Error("No url defined.");let e=new this._abortControllerType,t;n.abortSignal&&(n.abortSignal.onabort=()=>{e.abort(),t=new Zt});let r=null;if(n.timeout){let c=n.timeout;r=setTimeout(()=>{e.abort(),this._logger.log(C.Warning,"Timeout from HTTP request."),t=new _r},c)}n.content===""&&(n.content=void 0),n.content&&(n.headers=n.headers||{},li(n.content)?n.headers["Content-Type"]="application/octet-stream":n.headers["Content-Type"]="text/plain;charset=UTF-8");let o;try{o=await this._fetchType(n.url,{body:n.content,cache:"no-cache",credentials:n.withCredentials===!0?"include":"same-origin",headers:_({"X-Requested-With":"XMLHttpRequest"},n.headers),method:n.method,mode:"cors",redirect:"follow",signal:e.signal})}catch(c){throw t||(this._logger.log(C.Warning,`Error from HTTP request. ${c}.`),c)}finally{r&&clearTimeout(r),n.abortSignal&&(n.abortSignal.onabort=null)}if(!o.ok){let c=await Gb(o,"text");throw new Pn(c||o.statusText,o.status)}let s=await Gb(o,n.responseType);return new la(o.status,o.statusText,s)}getCookieString(n){let e="";return lt.isNode&&this._jar&&this._jar.getCookies(n,(t,r)=>e=r.join("; ")),e}};function Gb(i,n){let e;switch(n){case"arraybuffer":e=i.arrayBuffer();break;case"text":e=i.text();break;case"blob":case"document":case"json":throw new Error(`${n} is not supported.`);default:e=i.text();break}return e}var od=class extends Si{constructor(n){super(),this._logger=n}send(n){return n.abortSignal&&n.abortSignal.aborted?Promise.reject(new Zt):n.method?n.url?new Promise((e,t)=>{let r=new XMLHttpRequest;r.open(n.method,n.url,!0),r.withCredentials=n.withCredentials===void 0?!0:n.withCredentials,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.content===""&&(n.content=void 0),n.content&&(li(n.content)?r.setRequestHeader("Content-Type","application/octet-stream"):r.setRequestHeader("Content-Type","text/plain;charset=UTF-8"));let o=n.headers;o&&Object.keys(o).forEach(a=>{r.setRequestHeader(a,o[a])}),n.responseType&&(r.responseType=n.responseType),n.abortSignal&&(n.abortSignal.onabort=()=>{r.abort(),t(new Zt)}),n.timeout&&(r.timeout=n.timeout),r.onload=()=>{n.abortSignal&&(n.abortSignal.onabort=null),r.status>=200&&r.status<300?e(new la(r.status,r.statusText,r.response||r.responseText)):t(new Pn(r.response||r.responseText||r.statusText,r.status))},r.onerror=()=>{this._logger.log(C.Warning,`Error from HTTP request. ${r.status}: ${r.statusText}.`),t(new Pn(r.statusText,r.status))},r.ontimeout=()=>{this._logger.log(C.Warning,"Timeout from HTTP request."),t(new _r)},r.send(n.content)}):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}};var ad=class extends Si{constructor(n){if(super(),typeof fetch<"u"||lt.isNode)this._httpClient=new rd(n);else if(typeof XMLHttpRequest<"u")this._httpClient=new od(n);else throw new Error("No usable HttpClient found.")}send(n){return n.abortSignal&&n.abortSignal.aborted?Promise.reject(new Zt):n.method?n.url?this._httpClient.send(n):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}getCookieString(n){return this._httpClient.getCookieString(n)}};var Fn=class i{static write(n){return`${n}${i.RecordSeparator}`}static parse(n){if(n[n.length-1]!==i.RecordSeparator)throw new Error("Message is incomplete.");let e=n.split(i.RecordSeparator);return e.pop(),e}};Fn.RecordSeparatorCode=30;Fn.RecordSeparator=String.fromCharCode(Fn.RecordSeparatorCode);var sd=class{writeHandshakeRequest(n){return Fn.write(JSON.stringify(n))}parseHandshakeResponse(n){let e,t;if(li(n)){let s=new Uint8Array(n),c=s.indexOf(Fn.RecordSeparatorCode);if(c===-1)throw new Error("Message is incomplete.");let u=c+1;e=String.fromCharCode.apply(null,Array.prototype.slice.call(s.slice(0,u))),t=s.byteLength>u?s.slice(u).buffer:null}else{let s=n,c=s.indexOf(Fn.RecordSeparator);if(c===-1)throw new Error("Message is incomplete.");let u=c+1;e=s.substring(0,u),t=s.length>u?s.substring(u):null}let r=Fn.parse(e),o=JSON.parse(r[0]);if(o.type)throw new Error("Expected a handshake response from the server.");return[t,o]}};var ye=(function(i){return i[i.Invocation=1]="Invocation",i[i.StreamItem=2]="StreamItem",i[i.Completion=3]="Completion",i[i.StreamInvocation=4]="StreamInvocation",i[i.CancelInvocation=5]="CancelInvocation",i[i.Ping=6]="Ping",i[i.Close=7]="Close",i[i.Ack=8]="Ack",i[i.Sequence=9]="Sequence",i})(ye||{});var ld=class{constructor(){this.observers=[]}next(n){for(let e of this.observers)e.next(n)}error(n){for(let e of this.observers)e.error&&e.error(n)}complete(){for(let n of this.observers)n.complete&&n.complete()}subscribe(n){return this.observers.push(n),new td(this,n)}};var cd=class{constructor(n,e,t){this._bufferSize=1e5,this._messages=[],this._totalMessageCount=0,this._waitForSequenceMessage=!1,this._nextReceivingSequenceId=1,this._latestReceivedSequenceId=0,this._bufferedByteCount=0,this._reconnectInProgress=!1,this._protocol=n,this._connection=e,this._bufferSize=t}async _send(n){let e=this._protocol.writeMessage(n),t=Promise.resolve();if(this._isInvocationMessage(n)){this._totalMessageCount++;let r=()=>{},o=()=>{};li(e)?this._bufferedByteCount+=e.byteLength:this._bufferedByteCount+=e.length,this._bufferedByteCount>=this._bufferSize&&(t=new Promise((a,s)=>{r=a,o=s})),this._messages.push(new mh(e,this._totalMessageCount,r,o))}try{this._reconnectInProgress||await this._connection.send(e)}catch{this._disconnected()}await t}_ack(n){let e=-1;for(let t=0;t<this._messages.length;t++){let r=this._messages[t];if(r._id<=n.sequenceId)e=t,li(r._message)?this._bufferedByteCount-=r._message.byteLength:this._bufferedByteCount-=r._message.length,r._resolver();else if(this._bufferedByteCount<this._bufferSize)r._resolver();else break}e!==-1&&(this._messages=this._messages.slice(e+1))}_shouldProcessMessage(n){if(this._waitForSequenceMessage)return n.type!==ye.Sequence?!1:(this._waitForSequenceMessage=!1,!0);if(!this._isInvocationMessage(n))return!0;let e=this._nextReceivingSequenceId;return this._nextReceivingSequenceId++,e<=this._latestReceivedSequenceId?(e===this._latestReceivedSequenceId&&this._ackTimer(),!1):(this._latestReceivedSequenceId=e,this._ackTimer(),!0)}_resetSequence(n){if(n.sequenceId>this._nextReceivingSequenceId){this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));return}this._nextReceivingSequenceId=n.sequenceId}_disconnected(){this._reconnectInProgress=!0,this._waitForSequenceMessage=!0}async _resend(){let n=this._messages.length!==0?this._messages[0]._id:this._totalMessageCount+1;await this._connection.send(this._protocol.writeMessage({type:ye.Sequence,sequenceId:n}));let e=this._messages;for(let t of e)await this._connection.send(t._message);this._reconnectInProgress=!1}_dispose(n){n??(n=new Error("Unable to reconnect to server."));for(let e of this._messages)e._rejector(n)}_isInvocationMessage(n){switch(n.type){case ye.Invocation:case ye.StreamItem:case ye.Completion:case ye.StreamInvocation:case ye.CancelInvocation:return!0;case ye.Close:case ye.Sequence:case ye.Ping:case ye.Ack:return!1}}_ackTimer(){this._ackTimerHandle===void 0&&(this._ackTimerHandle=setTimeout(async()=>{try{this._reconnectInProgress||await this._connection.send(this._protocol.writeMessage({type:ye.Ack,sequenceId:this._latestReceivedSequenceId}))}catch{}clearTimeout(this._ackTimerHandle),this._ackTimerHandle=void 0},1e3))}},mh=class{constructor(n,e,t,r){this._message=n,this._id=e,this._resolver=t,this._rejector=r}};var GE=30*1e3,WE=15*1e3,qE=1e5,ct=(function(i){return i.Disconnected="Disconnected",i.Connecting="Connecting",i.Connected="Connected",i.Disconnecting="Disconnecting",i.Reconnecting="Reconnecting",i})(ct||{}),Ns=class i{static create(n,e,t,r,o,a,s){return new i(n,e,t,r,o,a,s)}constructor(n,e,t,r,o,a,s){this._nextKeepAlive=0,this._freezeEventListener=()=>{this._logger.log(C.Warning,"The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")},ot.isRequired(n,"connection"),ot.isRequired(e,"logger"),ot.isRequired(t,"protocol"),this.serverTimeoutInMilliseconds=o??GE,this.keepAliveIntervalInMilliseconds=a??WE,this._statefulReconnectBufferSize=s??qE,this._logger=e,this._protocol=t,this.connection=n,this._reconnectPolicy=r,this._handshakeProtocol=new sd,this.connection.onreceive=c=>this._processIncomingData(c),this.connection.onclose=c=>this._connectionClosed(c),this._callbacks={},this._methods={},this._closedCallbacks=[],this._reconnectingCallbacks=[],this._reconnectedCallbacks=[],this._invocationId=0,this._receivedHandshakeResponse=!1,this._connectionState=ct.Disconnected,this._connectionStarted=!1,this._cachedPingMessage=this._protocol.writeMessage({type:ye.Ping})}get state(){return this._connectionState}get connectionId(){return this.connection&&this.connection.connectionId||null}get baseUrl(){return this.connection.baseUrl||""}set baseUrl(n){if(this._connectionState!==ct.Disconnected&&this._connectionState!==ct.Reconnecting)throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");if(!n)throw new Error("The HubConnection url must be a valid url.");this.connection.baseUrl=n}start(){return this._startPromise=this._startWithStateTransitions(),this._startPromise}async _startWithStateTransitions(){if(this._connectionState!==ct.Disconnected)return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));this._connectionState=ct.Connecting,this._logger.log(C.Debug,"Starting HubConnection.");try{await this._startInternal(),lt.isBrowser&&window.document.addEventListener("freeze",this._freezeEventListener),this._connectionState=ct.Connected,this._connectionStarted=!0,this._logger.log(C.Debug,"HubConnection connected successfully.")}catch(n){return this._connectionState=ct.Disconnected,this._logger.log(C.Debug,`HubConnection failed to start successfully because of error '${n}'.`),Promise.reject(n)}}async _startInternal(){this._stopDuringStartError=void 0,this._receivedHandshakeResponse=!1;let n=new Promise((e,t)=>{this._handshakeResolver=e,this._handshakeRejecter=t});await this.connection.start(this._protocol.transferFormat);try{let e=this._protocol.version;this.connection.features.reconnect||(e=1);let t={protocol:this._protocol.name,version:e};if(this._logger.log(C.Debug,"Sending handshake request."),await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)),this._logger.log(C.Information,`Using HubProtocol '${this._protocol.name}'.`),this._cleanupTimeout(),this._resetTimeoutPeriod(),this._resetKeepAliveInterval(),await n,this._stopDuringStartError)throw this._stopDuringStartError;this.connection.features.reconnect&&(this._messageBuffer=new cd(this._protocol,this.connection,this._statefulReconnectBufferSize),this.connection.features.disconnected=this._messageBuffer._disconnected.bind(this._messageBuffer),this.connection.features.resend=()=>{if(this._messageBuffer)return this._messageBuffer._resend()}),this.connection.features.inherentKeepAlive||await this._sendMessage(this._cachedPingMessage)}catch(e){throw this._logger.log(C.Debug,`Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`),this._cleanupTimeout(),this._cleanupPingTimer(),await this.connection.stop(e),e}}async stop(){let n=this._startPromise;this.connection.features.reconnect=!1,this._stopPromise=this._stopInternal(),await this._stopPromise;try{await n}catch{}}_stopInternal(n){if(this._connectionState===ct.Disconnected)return this._logger.log(C.Debug,`Call to HubConnection.stop(${n}) ignored because it is already in the disconnected state.`),Promise.resolve();if(this._connectionState===ct.Disconnecting)return this._logger.log(C.Debug,`Call to HttpConnection.stop(${n}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;let e=this._connectionState;return this._connectionState=ct.Disconnecting,this._logger.log(C.Debug,"Stopping HubConnection."),this._reconnectDelayHandle?(this._logger.log(C.Debug,"Connection stopped during reconnect delay. Done reconnecting."),clearTimeout(this._reconnectDelayHandle),this._reconnectDelayHandle=void 0,this._completeClose(),Promise.resolve()):(e===ct.Connected&&this._sendCloseMessage(),this._cleanupTimeout(),this._cleanupPingTimer(),this._stopDuringStartError=n||new Zt("The connection was stopped before the hub handshake could complete."),this.connection.stop(n))}async _sendCloseMessage(){try{await this._sendWithProtocol(this._createCloseMessage())}catch{}}stream(n,...e){let[t,r]=this._replaceStreamingParams(e),o=this._createStreamInvocation(n,e,r),a,s=new ld;return s.cancelCallback=()=>{let c=this._createCancelInvocation(o.invocationId);return delete this._callbacks[o.invocationId],a.then(()=>this._sendWithProtocol(c))},this._callbacks[o.invocationId]=(c,u)=>{if(u){s.error(u);return}else c&&(c.type===ye.Completion?c.error?s.error(new Error(c.error)):s.complete():s.next(c.item))},a=this._sendWithProtocol(o).catch(c=>{s.error(c),delete this._callbacks[o.invocationId]}),this._launchStreams(t,a),s}_sendMessage(n){return this._resetKeepAliveInterval(),this.connection.send(n)}_sendWithProtocol(n){return this._messageBuffer?this._messageBuffer._send(n):this._sendMessage(this._protocol.writeMessage(n))}send(n,...e){let[t,r]=this._replaceStreamingParams(e),o=this._sendWithProtocol(this._createInvocation(n,e,!0,r));return this._launchStreams(t,o),o}invoke(n,...e){let[t,r]=this._replaceStreamingParams(e),o=this._createInvocation(n,e,!1,r);return new Promise((s,c)=>{this._callbacks[o.invocationId]=(h,g)=>{if(g){c(g);return}else h&&(h.type===ye.Completion?h.error?c(new Error(h.error)):s(h.result):c(new Error(`Unexpected message type: ${h.type}`)))};let u=this._sendWithProtocol(o).catch(h=>{c(h),delete this._callbacks[o.invocationId]});this._launchStreams(t,u)})}on(n,e){!n||!e||(n=n.toLowerCase(),this._methods[n]||(this._methods[n]=[]),this._methods[n].indexOf(e)===-1&&this._methods[n].push(e))}off(n,e){if(!n)return;n=n.toLowerCase();let t=this._methods[n];if(t)if(e){let r=t.indexOf(e);r!==-1&&(t.splice(r,1),t.length===0&&delete this._methods[n])}else delete this._methods[n]}onclose(n){n&&this._closedCallbacks.push(n)}onreconnecting(n){n&&this._reconnectingCallbacks.push(n)}onreconnected(n){n&&this._reconnectedCallbacks.push(n)}_processIncomingData(n){if(this._cleanupTimeout(),this._receivedHandshakeResponse||(n=this._processHandshakeResponse(n),this._receivedHandshakeResponse=!0),n){let e=this._protocol.parseMessages(n,this._logger);for(let t of e)if(!(this._messageBuffer&&!this._messageBuffer._shouldProcessMessage(t)))switch(t.type){case ye.Invocation:this._invokeClientMethod(t).catch(r=>{this._logger.log(C.Error,`Invoke client method threw error: ${id(r)}`)});break;case ye.StreamItem:case ye.Completion:{let r=this._callbacks[t.invocationId];if(r){t.type===ye.Completion&&delete this._callbacks[t.invocationId];try{r(t)}catch(o){this._logger.log(C.Error,`Stream callback threw error: ${id(o)}`)}}break}case ye.Ping:break;case ye.Close:{this._logger.log(C.Information,"Close message received from server.");let r=t.error?new Error("Server returned an error on close: "+t.error):void 0;t.allowReconnect===!0?this.connection.stop(r):this._stopPromise=this._stopInternal(r);break}case ye.Ack:this._messageBuffer&&this._messageBuffer._ack(t);break;case ye.Sequence:this._messageBuffer&&this._messageBuffer._resetSequence(t);break;default:this._logger.log(C.Warning,`Invalid message type: ${t.type}.`);break}}this._resetTimeoutPeriod()}_processHandshakeResponse(n){let e,t;try{[t,e]=this._handshakeProtocol.parseHandshakeResponse(n)}catch(r){let o="Error parsing handshake response: "+r;this._logger.log(C.Error,o);let a=new Error(o);throw this._handshakeRejecter(a),a}if(e.error){let r="Server returned handshake error: "+e.error;this._logger.log(C.Error,r);let o=new Error(r);throw this._handshakeRejecter(o),o}else this._logger.log(C.Debug,"Server handshake complete.");return this._handshakeResolver(),t}_resetKeepAliveInterval(){this.connection.features.inherentKeepAlive||(this._nextKeepAlive=new Date().getTime()+this.keepAliveIntervalInMilliseconds,this._cleanupPingTimer())}_resetTimeoutPeriod(){if(!this.connection.features||!this.connection.features.inherentKeepAlive){this._timeoutHandle=setTimeout(()=>this.serverTimeout(),this.serverTimeoutInMilliseconds);let n=this._nextKeepAlive-new Date().getTime();if(n<0){this._connectionState===ct.Connected&&this._trySendPingMessage();return}this._pingServerHandle===void 0&&(n<0&&(n=0),this._pingServerHandle=setTimeout(async()=>{this._connectionState===ct.Connected&&await this._trySendPingMessage()},n))}}serverTimeout(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))}async _invokeClientMethod(n){let e=n.target.toLowerCase(),t=this._methods[e];if(!t){this._logger.log(C.Warning,`No client method with the name '${e}' found.`),n.invocationId&&(this._logger.log(C.Warning,`No result given for '${e}' method and invocation ID '${n.invocationId}'.`),await this._sendWithProtocol(this._createCompletionMessage(n.invocationId,"Client didn't provide a result.",null)));return}let r=t.slice(),o=!!n.invocationId,a,s,c;for(let u of r)try{let h=a;a=await u.apply(this,n.arguments),o&&a&&h&&(this._logger.log(C.Error,`Multiple results provided for '${e}'. Sending error to server.`),c=this._createCompletionMessage(n.invocationId,"Client provided multiple results.",null)),s=void 0}catch(h){s=h,this._logger.log(C.Error,`A callback for the method '${e}' threw error '${h}'.`)}c?await this._sendWithProtocol(c):o?(s?c=this._createCompletionMessage(n.invocationId,`${s}`,null):a!==void 0?c=this._createCompletionMessage(n.invocationId,null,a):(this._logger.log(C.Warning,`No result given for '${e}' method and invocation ID '${n.invocationId}'.`),c=this._createCompletionMessage(n.invocationId,"Client didn't provide a result.",null)),await this._sendWithProtocol(c)):a&&this._logger.log(C.Error,`Result given for '${e}' method but server is not expecting a result.`)}_connectionClosed(n){this._logger.log(C.Debug,`HubConnection.connectionClosed(${n}) called while in state ${this._connectionState}.`),this._stopDuringStartError=this._stopDuringStartError||n||new Zt("The underlying connection was closed before the hub handshake could complete."),this._handshakeResolver&&this._handshakeResolver(),this._cancelCallbacksWithError(n||new Error("Invocation canceled due to the underlying connection being closed.")),this._cleanupTimeout(),this._cleanupPingTimer(),this._connectionState===ct.Disconnecting?this._completeClose(n):this._connectionState===ct.Connected&&this._reconnectPolicy?this._reconnect(n):this._connectionState===ct.Connected&&this._completeClose(n)}_completeClose(n){if(this._connectionStarted){this._connectionState=ct.Disconnected,this._connectionStarted=!1,this._messageBuffer&&(this._messageBuffer._dispose(n??new Error("Connection closed.")),this._messageBuffer=void 0),lt.isBrowser&&window.document.removeEventListener("freeze",this._freezeEventListener);try{this._closedCallbacks.forEach(e=>e.apply(this,[n]))}catch(e){this._logger.log(C.Error,`An onclose callback called with error '${n}' threw error '${e}'.`)}}}async _reconnect(n){let e=Date.now(),t=0,r=n!==void 0?n:new Error("Attempting to reconnect due to a unknown error."),o=this._getNextRetryDelay(t,0,r);if(o===null){this._logger.log(C.Debug,"Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),this._completeClose(n);return}if(this._connectionState=ct.Reconnecting,n?this._logger.log(C.Information,`Connection reconnecting because of error '${n}'.`):this._logger.log(C.Information,"Connection reconnecting."),this._reconnectingCallbacks.length!==0){try{this._reconnectingCallbacks.forEach(a=>a.apply(this,[n]))}catch(a){this._logger.log(C.Error,`An onreconnecting callback called with error '${n}' threw error '${a}'.`)}if(this._connectionState!==ct.Reconnecting){this._logger.log(C.Debug,"Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");return}}for(;o!==null;){if(this._logger.log(C.Information,`Reconnect attempt number ${t+1} will start in ${o} ms.`),await new Promise(a=>{this._reconnectDelayHandle=setTimeout(a,o)}),this._reconnectDelayHandle=void 0,this._connectionState!==ct.Reconnecting){this._logger.log(C.Debug,"Connection left the reconnecting state during reconnect delay. Done reconnecting.");return}try{if(await this._startInternal(),this._connectionState=ct.Connected,this._logger.log(C.Information,"HubConnection reconnected successfully."),this._reconnectedCallbacks.length!==0)try{this._reconnectedCallbacks.forEach(a=>a.apply(this,[this.connection.connectionId]))}catch(a){this._logger.log(C.Error,`An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${a}'.`)}return}catch(a){if(this._logger.log(C.Information,`Reconnect attempt failed because of error '${a}'.`),this._connectionState!==ct.Reconnecting){this._logger.log(C.Debug,`Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),this._connectionState===ct.Disconnecting&&this._completeClose();return}t++,r=a instanceof Error?a:new Error(a.toString()),o=this._getNextRetryDelay(t,Date.now()-e,r)}}this._logger.log(C.Information,`Reconnect retries have been exhausted after ${Date.now()-e} ms and ${t} failed attempts. Connection disconnecting.`),this._completeClose()}_getNextRetryDelay(n,e,t){try{return this._reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:e,previousRetryCount:n,retryReason:t})}catch(r){return this._logger.log(C.Error,`IRetryPolicy.nextRetryDelayInMilliseconds(${n}, ${e}) threw error '${r}'.`),null}}_cancelCallbacksWithError(n){let e=this._callbacks;this._callbacks={},Object.keys(e).forEach(t=>{let r=e[t];try{r(null,n)}catch(o){this._logger.log(C.Error,`Stream 'error' callback called with '${n}' threw error: ${id(o)}`)}})}_cleanupPingTimer(){this._pingServerHandle&&(clearTimeout(this._pingServerHandle),this._pingServerHandle=void 0)}_cleanupTimeout(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}_createInvocation(n,e,t,r){if(t)return r.length!==0?{target:n,arguments:e,streamIds:r,type:ye.Invocation}:{target:n,arguments:e,type:ye.Invocation};{let o=this._invocationId;return this._invocationId++,r.length!==0?{target:n,arguments:e,invocationId:o.toString(),streamIds:r,type:ye.Invocation}:{target:n,arguments:e,invocationId:o.toString(),type:ye.Invocation}}}_launchStreams(n,e){if(n.length!==0){e||(e=Promise.resolve());for(let t in n)n[t].subscribe({complete:()=>{e=e.then(()=>this._sendWithProtocol(this._createCompletionMessage(t)))},error:r=>{let o;r instanceof Error?o=r.message:r&&r.toString?o=r.toString():o="Unknown error",e=e.then(()=>this._sendWithProtocol(this._createCompletionMessage(t,o)))},next:r=>{e=e.then(()=>this._sendWithProtocol(this._createStreamItemMessage(t,r)))}})}}_replaceStreamingParams(n){let e=[],t=[];for(let r=0;r<n.length;r++){let o=n[r];if(this._isObservable(o)){let a=this._invocationId;this._invocationId++,e[a]=o,t.push(a.toString()),n.splice(r,1)}}return[e,t]}_isObservable(n){return n&&n.subscribe&&typeof n.subscribe=="function"}_createStreamInvocation(n,e,t){let r=this._invocationId;return this._invocationId++,t.length!==0?{target:n,arguments:e,invocationId:r.toString(),streamIds:t,type:ye.StreamInvocation}:{target:n,arguments:e,invocationId:r.toString(),type:ye.StreamInvocation}}_createCancelInvocation(n){return{invocationId:n,type:ye.CancelInvocation}}_createStreamItemMessage(n,e){return{invocationId:n,item:e,type:ye.StreamItem}}_createCompletionMessage(n,e,t){return e?{error:e,invocationId:n,type:ye.Completion}:{invocationId:n,result:t,type:ye.Completion}}_createCloseMessage(){return{type:ye.Close}}async _trySendPingMessage(){try{await this._sendMessage(this._cachedPingMessage)}catch{this._cleanupPingTimer()}}};var ZE=[0,2e3,1e4,3e4,null],Ls=class{constructor(n){this._retryDelays=n!==void 0?[...n,null]:ZE}nextRetryDelayInMilliseconds(n){return this._retryDelays[n.previousRetryCount]}};var Qr=(()=>{class i{}return i.Authorization="Authorization",i.Cookie="Cookie",i})();var dd=class extends Si{constructor(n,e){super(),this._innerClient=n,this._accessTokenFactory=e}async send(n){let e=!0;this._accessTokenFactory&&(!this._accessToken||n.url&&n.url.indexOf("/negotiate?")>0)&&(e=!1,this._accessToken=await this._accessTokenFactory()),this._setAuthorizationHeader(n);let t=await this._innerClient.send(n);return e&&t.statusCode===401&&this._accessTokenFactory?(this._accessToken=await this._accessTokenFactory(),this._setAuthorizationHeader(n),await this._innerClient.send(n)):t}_setAuthorizationHeader(n){n.headers||(n.headers={}),this._accessToken?n.headers[Qr.Authorization]=`Bearer ${this._accessToken}`:this._accessTokenFactory&&n.headers[Qr.Authorization]&&delete n.headers[Qr.Authorization]}getCookieString(n){return this._innerClient.getCookieString(n)}};var $t=(function(i){return i[i.None=0]="None",i[i.WebSockets=1]="WebSockets",i[i.ServerSentEvents=2]="ServerSentEvents",i[i.LongPolling=4]="LongPolling",i})($t||{}),jt=(function(i){return i[i.Text=1]="Text",i[i.Binary=2]="Binary",i})(jt||{});var ud=class{constructor(){this._isAborted=!1,this.onabort=null}abort(){this._isAborted||(this._isAborted=!0,this.onabort&&this.onabort())}get signal(){return this}get aborted(){return this._isAborted}};var Bs=class{get pollAborted(){return this._pollAbort.aborted}constructor(n,e,t){this._httpClient=n,this._logger=e,this._pollAbort=new ud,this._options=t,this._running=!1,this.onreceive=null,this.onclose=null}async connect(n,e){if(ot.isRequired(n,"url"),ot.isRequired(e,"transferFormat"),ot.isIn(e,jt,"transferFormat"),this._url=n,this._logger.log(C.Trace,"(LongPolling transport) Connecting."),e===jt.Binary&&typeof XMLHttpRequest<"u"&&typeof new XMLHttpRequest().responseType!="string")throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");let[t,r]=Ii(),o=_({[t]:r},this._options.headers),a={abortSignal:this._pollAbort.signal,headers:o,timeout:1e5,withCredentials:this._options.withCredentials};e===jt.Binary&&(a.responseType="arraybuffer");let s=`${n}&_=${Date.now()}`;this._logger.log(C.Trace,`(LongPolling transport) polling: ${s}.`);let c=await this._httpClient.get(s,a);c.statusCode!==200?(this._logger.log(C.Error,`(LongPolling transport) Unexpected response code: ${c.statusCode}.`),this._closeError=new Pn(c.statusText||"",c.statusCode),this._running=!1):this._running=!0,this._receiving=this._poll(this._url,a)}async _poll(n,e){try{for(;this._running;)try{let t=`${n}&_=${Date.now()}`;this._logger.log(C.Trace,`(LongPolling transport) polling: ${t}.`);let r=await this._httpClient.get(t,e);r.statusCode===204?(this._logger.log(C.Information,"(LongPolling transport) Poll terminated by server."),this._running=!1):r.statusCode!==200?(this._logger.log(C.Error,`(LongPolling transport) Unexpected response code: ${r.statusCode}.`),this._closeError=new Pn(r.statusText||"",r.statusCode),this._running=!1):r.content?(this._logger.log(C.Trace,`(LongPolling transport) data received. ${br(r.content,this._options.logMessageContent)}.`),this.onreceive&&this.onreceive(r.content)):this._logger.log(C.Trace,"(LongPolling transport) Poll timed out, reissuing.")}catch(t){this._running?t instanceof _r?this._logger.log(C.Trace,"(LongPolling transport) Poll timed out, reissuing."):(this._closeError=t,this._running=!1):this._logger.log(C.Trace,`(LongPolling transport) Poll errored after shutdown: ${t.message}`)}}finally{this._logger.log(C.Trace,"(LongPolling transport) Polling complete."),this.pollAborted||this._raiseOnClose()}}async send(n){return this._running?nd(this._logger,"LongPolling",this._httpClient,this._url,n,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))}async stop(){this._logger.log(C.Trace,"(LongPolling transport) Stopping polling."),this._running=!1,this._pollAbort.abort();try{await this._receiving,this._logger.log(C.Trace,`(LongPolling transport) sending DELETE request to ${this._url}.`);let n={},[e,t]=Ii();n[e]=t;let r={headers:_(_({},n),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials},o;try{await this._httpClient.delete(this._url,r)}catch(a){o=a}o?o instanceof Pn&&(o.statusCode===404?this._logger.log(C.Trace,"(LongPolling transport) A 404 response was returned from sending a DELETE request."):this._logger.log(C.Trace,`(LongPolling transport) Error sending a DELETE request: ${o}`)):this._logger.log(C.Trace,"(LongPolling transport) DELETE request accepted.")}finally{this._logger.log(C.Trace,"(LongPolling transport) Stop finished."),this._raiseOnClose()}}_raiseOnClose(){if(this.onclose){let n="(LongPolling transport) Firing onclose event.";this._closeError&&(n+=" Error: "+this._closeError),this._logger.log(C.Trace,n),this.onclose(this._closeError)}}};var md=class{constructor(n,e,t,r){this._httpClient=n,this._accessToken=e,this._logger=t,this._options=r,this.onreceive=null,this.onclose=null}async connect(n,e){return ot.isRequired(n,"url"),ot.isRequired(e,"transferFormat"),ot.isIn(e,jt,"transferFormat"),this._logger.log(C.Trace,"(SSE transport) Connecting."),this._url=n,this._accessToken&&(n+=(n.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(this._accessToken)}`),new Promise((t,r)=>{let o=!1;if(e!==jt.Text){r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));return}let a;if(lt.isBrowser||lt.isWebWorker)a=new this._options.EventSource(n,{withCredentials:this._options.withCredentials});else{let s=this._httpClient.getCookieString(n),c={};c.Cookie=s;let[u,h]=Ii();c[u]=h,a=new this._options.EventSource(n,{withCredentials:this._options.withCredentials,headers:_(_({},c),this._options.headers)})}try{a.onmessage=s=>{if(this.onreceive)try{this._logger.log(C.Trace,`(SSE transport) data received. ${br(s.data,this._options.logMessageContent)}.`),this.onreceive(s.data)}catch(c){this._close(c);return}},a.onerror=s=>{o?this._close():r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))},a.onopen=()=>{this._logger.log(C.Information,`SSE connected to ${this._url}`),this._eventSource=a,o=!0,t()}}catch(s){r(s);return}})}async send(n){return this._eventSource?nd(this._logger,"SSE",this._httpClient,this._url,n,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))}stop(){return this._close(),Promise.resolve()}_close(n){this._eventSource&&(this._eventSource.close(),this._eventSource=void 0,this.onclose&&this.onclose(n))}};var hd=class{constructor(n,e,t,r,o,a){this._logger=t,this._accessTokenFactory=e,this._logMessageContent=r,this._webSocketConstructor=o,this._httpClient=n,this.onreceive=null,this.onclose=null,this._headers=a}async connect(n,e){ot.isRequired(n,"url"),ot.isRequired(e,"transferFormat"),ot.isIn(e,jt,"transferFormat"),this._logger.log(C.Trace,"(WebSockets transport) Connecting.");let t;return this._accessTokenFactory&&(t=await this._accessTokenFactory()),new Promise((r,o)=>{n=n.replace(/^http/,"ws");let a,s=this._httpClient.getCookieString(n),c=!1;if(lt.isNode||lt.isReactNative){let u={},[h,g]=Ii();u[h]=g,t&&(u[Qr.Authorization]=`Bearer ${t}`),s&&(u[Qr.Cookie]=s),a=new this._webSocketConstructor(n,void 0,{headers:_(_({},u),this._headers)})}else t&&(n+=(n.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(t)}`);a||(a=new this._webSocketConstructor(n)),e===jt.Binary&&(a.binaryType="arraybuffer"),a.onopen=u=>{this._logger.log(C.Information,`WebSocket connected to ${n}.`),this._webSocket=a,c=!0,r()},a.onerror=u=>{let h=null;typeof ErrorEvent<"u"&&u instanceof ErrorEvent?h=u.error:h="There was an error with the transport",this._logger.log(C.Information,`(WebSockets transport) ${h}.`)},a.onmessage=u=>{if(this._logger.log(C.Trace,`(WebSockets transport) data received. ${br(u.data,this._logMessageContent)}.`),this.onreceive)try{this.onreceive(u.data)}catch(h){this._close(h);return}},a.onclose=u=>{if(c)this._close(u);else{let h=null;typeof ErrorEvent<"u"&&u instanceof ErrorEvent?h=u.error:h="WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",o(new Error(h))}}})}send(n){return this._webSocket&&this._webSocket.readyState===this._webSocketConstructor.OPEN?(this._logger.log(C.Trace,`(WebSockets transport) sending data. ${br(n,this._logMessageContent)}.`),this._webSocket.send(n),Promise.resolve()):Promise.reject("WebSocket is not in the OPEN state")}stop(){return this._webSocket&&this._close(void 0),Promise.resolve()}_close(n){this._webSocket&&(this._webSocket.onclose=()=>{},this._webSocket.onmessage=()=>{},this._webSocket.onerror=()=>{},this._webSocket.close(),this._webSocket=void 0),this._logger.log(C.Trace,"(WebSockets transport) socket closed."),this.onclose&&(this._isCloseEvent(n)&&(n.wasClean===!1||n.code!==1e3)?this.onclose(new Error(`WebSocket closed with status code: ${n.code} (${n.reason||"no reason given"}).`)):n instanceof Error?this.onclose(n):this.onclose())}_isCloseEvent(n){return n&&typeof n.wasClean=="boolean"&&typeof n.code=="number"}};var Wb=100,pd=class{constructor(n,e={}){if(this._stopPromiseResolver=()=>{},this.features={},this._negotiateVersion=1,ot.isRequired(n,"url"),this._logger=Hb(e.logger),this.baseUrl=this._resolveUrl(n),e=e||{},e.logMessageContent=e.logMessageContent===void 0?!1:e.logMessageContent,typeof e.withCredentials=="boolean"||e.withCredentials===void 0)e.withCredentials=e.withCredentials===void 0?!0:e.withCredentials;else throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");e.timeout=e.timeout===void 0?100*1e3:e.timeout;let t=null,r=null;if(lt.isNode&&typeof eo<"u"){let o=typeof __webpack_require__=="function"?__non_webpack_require__:eo;t=o("ws"),r=o("eventsource")}!lt.isNode&&typeof WebSocket<"u"&&!e.WebSocket?e.WebSocket=WebSocket:lt.isNode&&!e.WebSocket&&t&&(e.WebSocket=t),!lt.isNode&&typeof EventSource<"u"&&!e.EventSource?e.EventSource=EventSource:lt.isNode&&!e.EventSource&&typeof r<"u"&&(e.EventSource=r),this._httpClient=new dd(e.httpClient||new ad(this._logger),e.accessTokenFactory),this._connectionState="Disconnected",this._connectionStarted=!1,this._options=e,this.onreceive=null,this.onclose=null}async start(n){if(n=n||jt.Binary,ot.isIn(n,jt,"transferFormat"),this._logger.log(C.Debug,`Starting connection with transfer format '${jt[n]}'.`),this._connectionState!=="Disconnected")return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));if(this._connectionState="Connecting",this._startInternalPromise=this._startInternal(n),await this._startInternalPromise,this._connectionState==="Disconnecting"){let e="Failed to start the HttpConnection before stop() was called.";return this._logger.log(C.Error,e),await this._stopPromise,Promise.reject(new Zt(e))}else if(this._connectionState!=="Connected"){let e="HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";return this._logger.log(C.Error,e),Promise.reject(new Zt(e))}this._connectionStarted=!0}send(n){return this._connectionState!=="Connected"?Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")):(this._sendQueue||(this._sendQueue=new hh(this.transport)),this._sendQueue.send(n))}async stop(n){if(this._connectionState==="Disconnected")return this._logger.log(C.Debug,`Call to HttpConnection.stop(${n}) ignored because the connection is already in the disconnected state.`),Promise.resolve();if(this._connectionState==="Disconnecting")return this._logger.log(C.Debug,`Call to HttpConnection.stop(${n}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;this._connectionState="Disconnecting",this._stopPromise=new Promise(e=>{this._stopPromiseResolver=e}),await this._stopInternal(n),await this._stopPromise}async _stopInternal(n){this._stopError=n;try{await this._startInternalPromise}catch{}if(this.transport){try{await this.transport.stop()}catch(e){this._logger.log(C.Error,`HttpConnection.transport.stop() threw error '${e}'.`),this._stopConnection()}this.transport=void 0}else this._logger.log(C.Debug,"HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")}async _startInternal(n){let e=this.baseUrl;this._accessTokenFactory=this._options.accessTokenFactory,this._httpClient._accessTokenFactory=this._accessTokenFactory;try{if(this._options.skipNegotiation)if(this._options.transport===$t.WebSockets)this.transport=this._constructTransport($t.WebSockets),await this._startTransport(e,n);else throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");else{let t=null,r=0;do{if(t=await this._getNegotiationResponse(e),this._connectionState==="Disconnecting"||this._connectionState==="Disconnected")throw new Zt("The connection was stopped during negotiation.");if(t.error)throw new Error(t.error);if(t.ProtocolVersion)throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");if(t.url&&(e=t.url),t.accessToken){let o=t.accessToken;this._accessTokenFactory=()=>o,this._httpClient._accessToken=o,this._httpClient._accessTokenFactory=void 0}r++}while(t.url&&r<Wb);if(r===Wb&&t.url)throw new Error("Negotiate redirection limit exceeded.");await this._createTransport(e,this._options.transport,t,n)}this.transport instanceof Bs&&(this.features.inherentKeepAlive=!0),this._connectionState==="Connecting"&&(this._logger.log(C.Debug,"The HttpConnection connected successfully."),this._connectionState="Connected")}catch(t){return this._logger.log(C.Error,"Failed to start the connection: "+t),this._connectionState="Disconnected",this.transport=void 0,this._stopPromiseResolver(),Promise.reject(t)}}async _getNegotiationResponse(n){let e={},[t,r]=Ii();e[t]=r;let o=this._resolveNegotiateUrl(n);this._logger.log(C.Debug,`Sending negotiation request: ${o}.`);try{let a=await this._httpClient.post(o,{content:"",headers:_(_({},e),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials});if(a.statusCode!==200)return Promise.reject(new Error(`Unexpected status code returned from negotiate '${a.statusCode}'`));let s=JSON.parse(a.content);return(!s.negotiateVersion||s.negotiateVersion<1)&&(s.connectionToken=s.connectionId),s.useStatefulReconnect&&this._options._useStatefulReconnect!==!0?Promise.reject(new Fs("Client didn't negotiate Stateful Reconnect but the server did.")):s}catch(a){let s="Failed to complete negotiation with the server: "+a;return a instanceof Pn&&a.statusCode===404&&(s=s+" Either this is not a SignalR endpoint or there is a proxy blocking the connection."),this._logger.log(C.Error,s),Promise.reject(new Fs(s))}}_createConnectUrl(n,e){return e?n+(n.indexOf("?")===-1?"?":"&")+`id=${e}`:n}async _createTransport(n,e,t,r){let o=this._createConnectUrl(n,t.connectionToken);if(this._isITransport(e)){this._logger.log(C.Debug,"Connection was provided an instance of ITransport, using that directly."),this.transport=e,await this._startTransport(o,r),this.connectionId=t.connectionId;return}let a=[],s=t.availableTransports||[],c=t;for(let u of s){let h=this._resolveTransportOrError(u,e,r,c?.useStatefulReconnect===!0);if(h instanceof Error)a.push(`${u.transport} failed:`),a.push(h);else if(this._isITransport(h)){if(this.transport=h,!c){try{c=await this._getNegotiationResponse(n)}catch(g){return Promise.reject(g)}o=this._createConnectUrl(n,c.connectionToken)}try{await this._startTransport(o,r),this.connectionId=c.connectionId;return}catch(g){if(this._logger.log(C.Error,`Failed to start the transport '${u.transport}': ${g}`),c=void 0,a.push(new Jc(`${u.transport} failed: ${g}`,$t[u.transport])),this._connectionState!=="Connecting"){let E="Failed to select transport before stop() was called.";return this._logger.log(C.Debug,E),Promise.reject(new Zt(E))}}}}return a.length>0?Promise.reject(new ed(`Unable to connect to the server with any of the available transports. ${a.join(" ")}`,a)):Promise.reject(new Error("None of the transports supported by the client are supported by the server."))}_constructTransport(n){switch(n){case $t.WebSockets:if(!this._options.WebSocket)throw new Error("'WebSocket' is not supported in your environment.");return new hd(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers||{});case $t.ServerSentEvents:if(!this._options.EventSource)throw new Error("'EventSource' is not supported in your environment.");return new md(this._httpClient,this._httpClient._accessToken,this._logger,this._options);case $t.LongPolling:return new Bs(this._httpClient,this._logger,this._options);default:throw new Error(`Unknown transport: ${n}.`)}}_startTransport(n,e){return this.transport.onreceive=this.onreceive,this.features.reconnect?this.transport.onclose=async t=>{let r=!1;if(this.features.reconnect)try{this.features.disconnected(),await this.transport.connect(n,e),await this.features.resend()}catch{r=!0}else{this._stopConnection(t);return}r&&this._stopConnection(t)}:this.transport.onclose=t=>this._stopConnection(t),this.transport.connect(n,e)}_resolveTransportOrError(n,e,t,r){let o=$t[n.transport];if(o==null)return this._logger.log(C.Debug,`Skipping transport '${n.transport}' because it is not supported by this client.`),new Error(`Skipping transport '${n.transport}' because it is not supported by this client.`);if(YE(e,o))if(n.transferFormats.map(s=>jt[s]).indexOf(t)>=0){if(o===$t.WebSockets&&!this._options.WebSocket||o===$t.ServerSentEvents&&!this._options.EventSource)return this._logger.log(C.Debug,`Skipping transport '${$t[o]}' because it is not supported in your environment.'`),new Kc(`'${$t[o]}' is not supported in your environment.`,o);this._logger.log(C.Debug,`Selecting transport '${$t[o]}'.`);try{return this.features.reconnect=o===$t.WebSockets?r:void 0,this._constructTransport(o)}catch(s){return s}}else return this._logger.log(C.Debug,`Skipping transport '${$t[o]}' because it does not support the requested transfer format '${jt[t]}'.`),new Error(`'${$t[o]}' does not support ${jt[t]}.`);else return this._logger.log(C.Debug,`Skipping transport '${$t[o]}' because it was disabled by the client.`),new Qc(`'${$t[o]}' is disabled by the client.`,o)}_isITransport(n){return n&&typeof n=="object"&&"connect"in n}_stopConnection(n){if(this._logger.log(C.Debug,`HttpConnection.stopConnection(${n}) called while in state ${this._connectionState}.`),this.transport=void 0,n=this._stopError||n,this._stopError=void 0,this._connectionState==="Disconnected"){this._logger.log(C.Debug,`Call to HttpConnection.stopConnection(${n}) was ignored because the connection is already in the disconnected state.`);return}if(this._connectionState==="Connecting")throw this._logger.log(C.Warning,`Call to HttpConnection.stopConnection(${n}) was ignored because the connection is still in the connecting state.`),new Error(`HttpConnection.stopConnection(${n}) was called while the connection is still in the connecting state.`);if(this._connectionState==="Disconnecting"&&this._stopPromiseResolver(),n?this._logger.log(C.Error,`Connection disconnected with error '${n}'.`):this._logger.log(C.Information,"Connection disconnected."),this._sendQueue&&(this._sendQueue.stop().catch(e=>{this._logger.log(C.Error,`TransportSendQueue.stop() threw error '${e}'.`)}),this._sendQueue=void 0),this.connectionId=void 0,this._connectionState="Disconnected",this._connectionStarted){this._connectionStarted=!1;try{this.onclose&&this.onclose(n)}catch(e){this._logger.log(C.Error,`HttpConnection.onclose(${n}) threw error '${e}'.`)}}}_resolveUrl(n){if(n.lastIndexOf("https://",0)===0||n.lastIndexOf("http://",0)===0)return n;if(!lt.isBrowser)throw new Error(`Cannot resolve '${n}'.`);let e=window.document.createElement("a");return e.href=n,this._logger.log(C.Information,`Normalizing '${n}' to '${e.href}'.`),e.href}_resolveNegotiateUrl(n){let e=new URL(n);e.pathname.endsWith("/")?e.pathname+="negotiate":e.pathname+="/negotiate";let t=new URLSearchParams(e.searchParams);return t.has("negotiateVersion")||t.append("negotiateVersion",this._negotiateVersion.toString()),t.has("useStatefulReconnect")?t.get("useStatefulReconnect")==="true"&&(this._options._useStatefulReconnect=!0):this._options._useStatefulReconnect===!0&&t.append("useStatefulReconnect","true"),e.search=t.toString(),e.toString()}};function YE(i,n){return!i||(n&i)!==0}var hh=class i{constructor(n){this._transport=n,this._buffer=[],this._executing=!0,this._sendBufferedData=new ca,this._transportResult=new ca,this._sendLoopPromise=this._sendLoop()}send(n){return this._bufferData(n),this._transportResult||(this._transportResult=new ca),this._transportResult.promise}stop(){return this._executing=!1,this._sendBufferedData.resolve(),this._sendLoopPromise}_bufferData(n){if(this._buffer.length&&typeof this._buffer[0]!=typeof n)throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof n}`);this._buffer.push(n),this._sendBufferedData.resolve()}async _sendLoop(){for(;;){if(await this._sendBufferedData.promise,!this._executing){this._transportResult&&this._transportResult.reject("Connection stopped.");break}this._sendBufferedData=new ca;let n=this._transportResult;this._transportResult=void 0;let e=typeof this._buffer[0]=="string"?this._buffer.join(""):i._concatBuffers(this._buffer);this._buffer.length=0;try{await this._transport.send(e),n.resolve()}catch(t){n.reject(t)}}}static _concatBuffers(n){let e=n.map(o=>o.byteLength).reduce((o,a)=>o+a),t=new Uint8Array(e),r=0;for(let o of n)t.set(new Uint8Array(o),r),r+=o.byteLength;return t.buffer}},ca=class{constructor(){this.promise=new Promise((n,e)=>[this._resolver,this._rejecter]=[n,e])}resolve(){this._resolver()}reject(n){this._rejecter(n)}};var XE="json",fd=class{constructor(){this.name=XE,this.version=2,this.transferFormat=jt.Text}parseMessages(n,e){if(typeof n!="string")throw new Error("Invalid input for JSON hub protocol. Expected a string.");if(!n)return[];e===null&&(e=Mi.instance);let t=Fn.parse(n),r=[];for(let o of t){let a=JSON.parse(o);if(typeof a.type!="number")throw new Error("Invalid payload.");switch(a.type){case ye.Invocation:this._isInvocationMessage(a);break;case ye.StreamItem:this._isStreamItemMessage(a);break;case ye.Completion:this._isCompletionMessage(a);break;case ye.Ping:break;case ye.Close:break;case ye.Ack:this._isAckMessage(a);break;case ye.Sequence:this._isSequenceMessage(a);break;default:e.log(C.Information,"Unknown message type '"+a.type+"' ignored.");continue}r.push(a)}return r}writeMessage(n){return Fn.write(JSON.stringify(n))}_isInvocationMessage(n){this._assertNotEmptyString(n.target,"Invalid payload for Invocation message."),n.invocationId!==void 0&&this._assertNotEmptyString(n.invocationId,"Invalid payload for Invocation message.")}_isStreamItemMessage(n){if(this._assertNotEmptyString(n.invocationId,"Invalid payload for StreamItem message."),n.item===void 0)throw new Error("Invalid payload for StreamItem message.")}_isCompletionMessage(n){if(n.result&&n.error)throw new Error("Invalid payload for Completion message.");!n.result&&n.error&&this._assertNotEmptyString(n.error,"Invalid payload for Completion message."),this._assertNotEmptyString(n.invocationId,"Invalid payload for Completion message.")}_isAckMessage(n){if(typeof n.sequenceId!="number")throw new Error("Invalid SequenceId for Ack message.")}_isSequenceMessage(n){if(typeof n.sequenceId!="number")throw new Error("Invalid SequenceId for Sequence message.")}_assertNotEmptyString(n,e){if(typeof n!="string"||n==="")throw new Error(e)}};var KE={trace:C.Trace,debug:C.Debug,info:C.Information,information:C.Information,warn:C.Warning,warning:C.Warning,error:C.Error,critical:C.Critical,none:C.None};function QE(i){let n=KE[i.toLowerCase()];if(typeof n<"u")return n;throw new Error(`Unknown log level: ${i}`)}var zs=class{configureLogging(n){if(ot.isRequired(n,"logging"),JE(n))this.logger=n;else if(typeof n=="string"){let e=QE(n);this.logger=new Kr(e)}else this.logger=new Kr(n);return this}withUrl(n,e){return ot.isRequired(n,"url"),ot.isNotEmpty(n,"url"),this.url=n,typeof e=="object"?this.httpConnectionOptions=_(_({},this.httpConnectionOptions),e):this.httpConnectionOptions=Re(_({},this.httpConnectionOptions),{transport:e}),this}withHubProtocol(n){return ot.isRequired(n,"protocol"),this.protocol=n,this}withAutomaticReconnect(n){if(this.reconnectPolicy)throw new Error("A reconnectPolicy has already been set.");return n?Array.isArray(n)?this.reconnectPolicy=new Ls(n):this.reconnectPolicy=n:this.reconnectPolicy=new Ls,this}withServerTimeout(n){return ot.isRequired(n,"milliseconds"),this._serverTimeoutInMilliseconds=n,this}withKeepAliveInterval(n){return ot.isRequired(n,"milliseconds"),this._keepAliveIntervalInMilliseconds=n,this}withStatefulReconnect(n){return this.httpConnectionOptions===void 0&&(this.httpConnectionOptions={}),this.httpConnectionOptions._useStatefulReconnect=!0,this._statefulReconnectBufferSize=n?.bufferSize,this}build(){let n=this.httpConnectionOptions||{};if(n.logger===void 0&&(n.logger=this.logger),!this.url)throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");let e=new pd(this.url,n);return Ns.create(e,this.logger||Mi.instance,this.protocol||new fd,this.reconnectPolicy,this._serverTimeoutInMilliseconds,this._keepAliveIntervalInMilliseconds,this._statefulReconnectBufferSize)}};function JE(i){return i.log!==void 0}var vr=class i{hubUrl=Ht.hubUrl;hubConnection;orderSignal=Z(null);createHubConnection(){this.hubConnection=new zs().withUrl(this.hubUrl,{withCredentials:!0}).withAutomaticReconnect().build(),this.hubConnection.start().catch(n=>console.log(n)),this.hubConnection.on("OrderCompleteNotification",n=>{this.orderSignal.set(n)})}stopHubConnection(){this.hubConnection?.state===ct.Connected&&this.hubConnection.stop().catch(n=>console.log(n))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var sn=class i{baseUrl=Ht.apiUrl;http=l(Gt);signalrService=l(vr);currentUser=Z(null);login(n){let e=new In;return e=e.append("useCookies",!0),this.http.post(this.baseUrl+"login",n,{params:e}).pipe(kt(()=>this.signalrService.createHubConnection()))}register(n){return this.http.post(this.baseUrl+"account/register",n)}getUserInfo(){return this.http.get(this.baseUrl+"account/user-info").pipe(ce(n=>(this.currentUser.set(n),n)))}logout(){return this.http.post(this.baseUrl+"account/logout",{}).pipe(kt(()=>this.signalrService.stopHubConnection()))}updateAddress(n){return this.http.post(this.baseUrl+"account/address",n).pipe(kt(()=>{this.currentUser.update(e=>(e&&(e.address=n),e))}))}getAuthState(){return this.http.get(this.baseUrl+"account/auth-status")}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var gd=class i{baseUrl=Ht.apiUrl;cartService=l(_t);accountService=l(sn);http=l(Gt);stripePromise;elements;addressElement;paymentElement;constructor(){this.stripePromise=jb(Ht.stripePublicKey)}getStripeInstance(){return this.stripePromise}async initializeElements(){if(!this.elements){let n=await this.getStripeInstance();if(n){let e=await no(this.createOrUpdatePaymentIntent());this.elements=n.elements({clientSecret:e.clientSecret,appearance:{labels:"floating"}})}else throw new Error("Stripe has not been loaded")}return this.elements}async createPaymentElement(){if(!this.paymentElement){let n=await this.initializeElements();if(n)this.paymentElement=n.create("payment");else throw new Error("Elements instance has not been initialized")}return this.paymentElement}async createAddressElement(){if(!this.addressElement){let n=await this.initializeElements();if(n){let e=this.accountService.currentUser(),t={};e&&(t.name=e.firstName+" "+e.lastName),e?.address&&(t.address={line1:e.address.line1,line2:e.address.line2,city:e.address.city,state:e.address.state,country:e.address.country,postal_code:e.address.postalCode});let r={mode:"shipping",defaultValues:t};this.addressElement=n.create("address",r)}else throw new Error("Elements instance has not been loaded")}return this.addressElement}async createConfirmationToken(){let n=await this.getStripeInstance(),e=await this.initializeElements(),t=await e.submit();if(t.error)throw new Error(t.error.message);if(n)return await n.createConfirmationToken({elements:e});throw new Error("Stripe not available")}async confirmPayment(n){let e=await this.getStripeInstance(),r=await(await this.initializeElements()).submit();if(r.error)throw new Error(r.error.message);let o=this.cartService.cart()?.clientSecret;if(e&&o)return await e.confirmPayment({clientSecret:o,confirmParams:{confirmation_token:n.id},redirect:"if_required"});throw new Error("Unable to load stripe")}createOrUpdatePaymentIntent(){let n=this.cartService.cart();if(!n)throw new Error("Problem with cart");return this.http.post(this.baseUrl+"payments/"+n.id,{}).pipe(ce(e=>(this.cartService.setCart(e),e)))}disposeElements(){this.elements=void 0,this.addressElement=void 0,this.paymentElement=void 0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function eS(i,n){if(i&1){let e=Lt();d(0,"div",1)(1,"button",2),O("click",function(){Ze(e);let r=M();return Ye(r.action())}),f(2),m()()}if(i&2){let e=M();p(2),Se(" ",e.data.action," ")}}var tS=["label"];function nS(i,n){}var iS=Math.pow(2,31)-1,Vs=class{_overlayRef;instance;containerInstance;_afterDismissed=new z;_afterOpened=new z;_onAction=new z;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,iS))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},qb=new k("MatSnackBarData"),da=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},rS=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),oS=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),aS=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),sS=(()=>{class i{snackBarRef=l(Vs);data=l(qb);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(d(0,"div",0),f(1),m(),V(2,eS,3,1,"div",1)),t&2&&(p(),Se(" ",r.data.message,`
`),p(),j(r.hasAction?2:-1))},dependencies:[st,rS,oS,aS],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ph="_mat-snack-bar-enter",fh="_mat-snack-bar-exit",lS=(()=>{class i extends lr{_ngZone=l(Y);_elementRef=l(H);_changeDetectorRef=l(Me);_platform=l(Fe);_animationsDisabled=Ve();snackBarConfig=l(da);_document=l(ie);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(ue);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new z;_onExit=new z;_onEnter=new z;_animationState="void";_live;_label;_role;_liveElementId=l(ze).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===fh?this._completeExit():e===ph&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?It(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ph)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ph)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?It(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(fh)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(fh),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&nt(ki,7)(tS,7),t&2){let o;G(o=W())&&(r._portalOutlet=o.first),G(o=W())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&O("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&$("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ee],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),mt(4,nS,0,0,"ng-template",4),m(),R(5,"div"),m()()),t&2&&(p(5),ee("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[ki],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),cS=new k("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new da}),Zb=(()=>{class i{_live=l(ns);_injector=l(ue);_breakpointObserver=l(um);_parentSnackBar=l(i,{optional:!0,skipSelf:!0});_defaultConfig=l(cS);_animationsDisabled=Ve();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=sS;snackBarContainerComponent=lS;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=ue.create({parent:r||this._injector,providers:[{provide:da,useValue:t}]}),a=new ni(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=_(_(_({},new da),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Vs(a,o);if(e instanceof Xt){let c=new On(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),u=new ni(e,void 0,c),h=a.attachComponentPortal(u);s.instance=h.instance}return this._breakpointObserver.observe(Gg.HandsetPortrait).pipe(we(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new ii;t.direction=e.direction;let r=qr(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Di(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ue.create({parent:r||this._injector,providers:[{provide:Vs,useValue:t},{provide:qb,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ti=class i{snackbar=l(Zb);error(n){this.snackbar.open(n,"Close",{duration:5e3,panelClass:["snack-error"]})}success(n){this.snackbar.open(n,"Close",{duration:5e3,panelClass:["snack-success"]})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var dS=["mat-internal-form-field",""],uS=["*"],_d=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&$("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:dS,ngContentSelectors:uS,decls:1,vars:0,template:function(t,r){t&1&&(je(),pe(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var mS=["input"],hS=["label"],pS=["*"],gh={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},fS=new k("mat-checkbox-default-options",{providedIn:"root",factory:()=>gh}),ln=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(ln||{}),_h=class{source;checked},bh=(()=>{class i{_elementRef=l(H);_changeDetectorRef=l(Me);_ngZone=l(Y);_animationsDisabled=Ve();_options=l(fS,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new _h;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new J;indeterminateChange=new J;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ln.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(rt).load(Sn);let e=l(new fi("tabindex"),{optional:!0});this._options=this._options||gh,this.color=this._options.color||gh.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=l(ze).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ln.Indeterminate):this._transitionCheckState(this.checked?ln.Checked:ln.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Z(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ln.Checked:ln.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case ln.Init:if(t===ln.Checked)return this._animationClasses.uncheckedToChecked;if(t==ln.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ln.Unchecked:return t===ln.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ln.Checked:return t===ln.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ln.Indeterminate:return t===ln.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&nt(mS,5)(hS,5),t&2){let o;G(o=W())&&(r._inputElement=o.first),G(o=W())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(Tt("id",r.id),ee("tabindex",null)("aria-label",null)("aria-labelledby",null),zt(r.color?"mat-"+r.color:"mat-accent"),$("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",U],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",U],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ct(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],checked:[2,"checked","checked",U],disabled:[2,"disabled","disabled",U],indeterminate:[2,"indeterminate","indeterminate",U]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[$e([{provide:oi,useExisting:tn(()=>i),multi:!0},{provide:hr,useExisting:i,multi:!0}]),et],ngContentSelectors:pS,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,r){if(t&1&&(je(),d(0,"div",3),O("click",function(a){return r._preventBubblingFromLabel(a)}),d(1,"div",4,0)(3,"div",5),O("click",function(){return r._onTouchTargetClick()}),m(),d(4,"input",6,1),O("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),m(),R(6,"div",7),d(7,"div",8),nn(),d(8,"svg",9),R(9,"path",10),m(),Ji(),R(10,"div",11),m(),R(11,"div",12),m(),d(12,"label",13,2),pe(14),m()()),t&2){let o=Je(2);D("labelPosition",r.labelPosition),p(4),$("mdc-checkbox--selected",r.checked),D("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),ee("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),D("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),D("for",r.inputId)}},dependencies:[wi,_d],styles:[`.mdc-checkbox {
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
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
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

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
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

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
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
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
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
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
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
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),Yb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[bh,qt]})}return i})();var bd=class i{baseUrl=Ht.apiUrl;http=l(Gt);deliveryMethods=[];getDeliveryMethods(){return this.deliveryMethods.length>0?Q(this.deliveryMethods):this.http.get(this.baseUrl+"payments/delivery-methods").pipe(ce(n=>(this.deliveryMethods=n.sort((e,t)=>t.price-e.price),n)))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var _S=["input"],bS=["formField"],vS=["*"],vd=class{source;value;constructor(n,e){this.source=n,this.value=e}},yS={provide:oi,useExisting:tn(()=>vh),multi:!0},Xb=new k("MatRadioGroup"),xS=new k("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),vh=(()=>{class i{_changeDetector=l(Me);_value=null;_name=l(ze).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new J;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new vd(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-radio-group"]],contentQueries:function(t,r,o){if(t&1&&Bt(o,yd,5),t&2){let a;G(a=W())&&(r._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",U],required:[2,"required","required",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[$e([yS,{provide:Xb,useExisting:i}])]})}return i})(),yd=(()=>{class i{_elementRef=l(H);_changeDetector=l(Me);_focusMonitor=l(En);_radioDispatcher=l(Rm);_defaultOptions=l(xS,{optional:!0});_ngZone=l(Y);_renderer=l(Le);_uniqueId=l(ze).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new J;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Ve();_injector=l(ue);constructor(){l(rt).load(Sn);let e=l(Xb,{optional:!0}),t=l(new fi("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=Ct(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new vd(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",t+""),this._previousTabIndex=t,It(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-radio-button"]],viewQuery:function(t,r){if(t&1&&nt(_S,5)(bS,7,H),t&2){let o;G(o=W())&&(r._inputElement=o.first),G(o=W())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,r){t&1&&O("focus",function(){return r._inputElement.nativeElement.focus()}),t&2&&(ee("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),$("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ct(e)],checked:[2,"checked","checked",U],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",U],required:[2,"required","required",U],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:vS,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,r){t&1&&(je(),d(0,"div",2,0)(2,"div",3)(3,"div",4),O("click",function(a){return r._onTouchTargetClick(a)}),m(),d(4,"input",5,1),O("change",function(a){return r._onInputInteraction(a)}),m(),d(6,"div",6),R(7,"div",7)(8,"div",8),m(),d(9,"div",9),R(10,"div",10),m()(),d(11,"label",11),pe(12),m()()),t&2&&(D("labelPosition",r.labelPosition),p(2),$("mdc-radio--disabled",r.disabled),p(2),D("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ee("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(5),D("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),p(2),D("for",r.inputId))},dependencies:[wi,_d],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
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
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
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
.mat-mdc-radio-button .mdc-radio__outer-circle {
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
.mat-mdc-radio-button .mdc-radio__inner-circle {
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
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
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
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),Kb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[ac,yd,qt]})}return i})();var wS=(i,n)=>n.id;function kS(i,n){if(i&1&&(d(0,"label",2)(1,"mat-radio-button",3)(2,"div",4)(3,"strong"),f(4),Be(5,"currency"),m(),d(6,"span",5),f(7),m()()()()),i&2){let e=n.$implicit,t=M();p(),D("checked",t.cartService.selectedDelivery()===e)("value",e),p(3),tp("",e.shortName," - ",Ue(5,5,e.price)),p(3),X(e.description)}}var xd=class i{checkoutService=l(bd);cartService=l(_t);deliveryComplete=sp();ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:n=>{if(this.cartService.cart()?.deliveryMethodId){let e=n.find(t=>t.id===this.cartService.cart()?.deliveryMethodId);e&&(this.cartService.selectedDelivery.set(e),this.deliveryComplete.emit(!0))}}})}updateDeliveryMethod(n){this.cartService.selectedDelivery.set(n);let e=this.cartService.cart();e&&(e.deliveryMethodId=n.id,this.cartService.setCart(e),this.deliveryComplete.emit(!0))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-checkout-delivery"]],outputs:{deliveryComplete:"deliveryComplete"},decls:4,vars:1,consts:[[1,"w-full"],[1,"grid","grid-cols-2","gap-4",3,"change","value"],[1,"p-3","border","border-gray-200","cursor-pointer","w-full","h-full","hover:bg-purple-100"],[1,"w-full","h-full",3,"checked","value"],[1,"flex","flex-col","w-full","h-full"],[1,"text-sm"]],template:function(e,t){if(e&1&&(d(0,"div",0)(1,"mat-radio-group",1),O("change",function(o){return t.updateDeliveryMethod(o.value)}),ht(2,kS,8,7,"label",2,wS),m()()),e&2){let r;p(),D("value",(r=t.cartService.selectedDelivery())==null?null:r.id),p(),pt(t.checkoutService.deliveryMethods)}},dependencies:[Kb,vh,yd,Ot],encapsulation:2})};var yr=class i{transform(n,...e){if(n&&"address"in n&&n.name){let{line1:t,line2:r,city:o,state:a,country:s,postal_code:c}=n?.address;return`${n.name}, ${t}${r?", "+r:""}, ${o}, ${a}, ${c}, ${s}`}else if(n&&"line1"in n){let{line1:t,line2:r,city:o,state:a,country:s,postalCode:c}=n;return`${n.name}, ${t}${r?", "+r:""}, ${o}, ${a}, ${c}, ${s}`}else return"Unknown address"}static \u0275fac=function(e){return new(e||i)};static \u0275pipe=Sr({name:"address",type:i,pure:!0})};var xr=class i{transform(n,...e){if(n&&"card"in n){let{brand:t,last4:r,exp_month:o,exp_year:a}=n.card;return`${t.toUpperCase()} **** **** **** ${r}, Exp: ${o}/${a}`}else if(n&&"last4"in n){let{brand:t,last4:r,expMonth:o,expYear:a}=n;return`${t.toUpperCase()} **** **** **** ${r}, Exp: ${o}/${a}`}else return"Unknown payment method"}static \u0275fac=function(e){return new(e||i)};static \u0275pipe=Sr({name:"paymentCard",type:i,pure:!0})};var DS=(i,n)=>n.productId;function ES(i,n){if(i&1&&(tt(0,"tr")(1,"td",8)(2,"div",9),Qt(3,"img",10),tt(4,"span"),f(5),vt()()(),tt(6,"td",11),f(7),vt(),tt(8,"td",12),f(9),Be(10,"currency"),vt()()),i&2){let e=n.$implicit;p(3),Tt("src",hn(e.pictureUrl),mi),p(2),X(e.productName),p(2),Se("x",e.quantity),p(2),X(Ue(10,5,e.price))}}var Cd=class i{cartService=l(_t);confirmationToken;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-checkout-review"]],inputs:{confirmationToken:"confirmationToken"},decls:20,vars:6,consts:[[1,"mt-4","w-full"],[1,"text-lg","font-semibold"],[1,"font-medium"],[1,"mt-1","text-gray-500"],[1,"mt-6","mx-auto"],[1,"border-b","border-gray-200"],[1,"w-full","text-center"],[1,"divide-y","divide-gray-200"],[1,"py-4"],[1,"flex","items-center","gap-4"],["alt","product image",1,"w-10","h-10",3,"src"],[1,"p-4"],[1,"p-4","text-right"]],template:function(e,t){if(e&1&&(tt(0,"div",0)(1,"h4",1),f(2,"Billing and delivery information"),vt(),tt(3,"dl")(4,"dt",2),f(5,"Shipping address"),vt(),tt(6,"dd",3),f(7),Be(8,"address"),vt(),tt(9,"dt",2),f(10,"Payment details"),vt(),tt(11,"dd",3),f(12),Be(13,"paymentCard"),vt()()(),tt(14,"div",4)(15,"div",5)(16,"table",6)(17,"tbody",7),ht(18,ES,11,7,"tr",null,DS),vt()()()()),e&2){let r;p(7),X(Ue(8,2,t.confirmationToken==null?null:t.confirmationToken.shipping)),p(5),Se(" ",Ue(13,4,t.confirmationToken==null?null:t.confirmationToken.payment_method_preview)," "),p(6),pt((r=t.cartService.cart())==null?null:r.items)}},dependencies:[Ot,yr,xr],encapsulation:2})};var SS=["determinateSpinner"];function MS(i,n){if(i&1&&(nn(),d(0,"svg",11),R(1,"circle",12),m()),i&2){let e=M();ee("viewBox",e._viewBox()),p(),pi("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),ee("r",e._circleRadius())}}var IS=new k("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Qb})}),Qb=100,TS=10,wd=(()=>{class i{_elementRef=l(H);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(IS),t=ls(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Qb;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-TS)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&nt(SS,5),t&2){let o;G(o=W())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(ee("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),zt("mat-"+r.color),pi("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),$("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ct],diameter:[2,"diameter","diameter",Ct],strokeWidth:[2,"strokeWidth","strokeWidth",Ct]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(mt(0,MS,2,8,"ng-template",null,0,Kn),d(2,"div",2,1),nn(),d(4,"svg",3),R(5,"circle",4),m()(),Ji(),d(6,"div",5)(7,"div",6)(8,"div",7),Cn(9,8),m(),d(10,"div",9),Cn(11,8),m(),d(12,"div",10),Cn(13,8),m()()()),t&2){let o=Je(1);p(4),ee("viewBox",r._viewBox()),p(),pi("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),ee("r",r._circleRadius()),p(4),D("ngTemplateOutlet",o),p(2),D("ngTemplateOutlet",o),p(2),D("ngTemplateOutlet",o)}},dependencies:[bi],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var kd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=be({type:i});static \u0275inj=ge({imports:[qt]})}return i})();var Wn=class i{baseUrl=Ht.apiUrl;http=l(Gt);orderComplete=!1;createOrder(n){return this.http.post(this.baseUrl+"orders",n)}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(n){return this.http.get(this.baseUrl+"orders/"+n)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function AS(i,n){i&1&&R(0,"mat-spinner",20)}function RS(i,n){if(i&1&&(d(0,"span"),f(1),Be(2,"currency"),m()),i&2){let e,t=M();p(),Se(" Pay ",Ue(2,1,(e=t.cartService.totals())==null?null:e.total)," ")}}var Dd=class i{stripeService=l(gd);snackbar=l(Ti);router=l(yt);accountService=l(sn);orderService=l(Wn);cartService=l(_t);addressElement;paymentElement;saveAddress=!1;completionStatus=Z({address:!1,card:!1,delivery:!1});confirmationToken;loading=!1;async ngOnInit(){try{this.addressElement=await this.stripeService.createAddressElement(),this.addressElement.mount("#address-element"),this.addressElement.on("change",this.handleAddressChange),this.paymentElement=await this.stripeService.createPaymentElement(),this.paymentElement.mount("#payment-element"),this.paymentElement.on("change",this.handlePaymentChange)}catch(n){this.snackbar.error(n.message)}}handleAddressChange=n=>{this.completionStatus.update(e=>(e.address=n.complete,e))};handlePaymentChange=n=>{this.completionStatus.update(e=>(e.card=n.complete,e))};handleDeliveryChange(n){this.completionStatus.update(e=>(e.delivery=n,e))}async getConfirmationToken(){try{if(Object.values(this.completionStatus()).every(n=>n===!0)){let n=await this.stripeService.createConfirmationToken();if(n.error)throw new Error(n.error.message);this.confirmationToken=n.confirmationToken,console.log(this.confirmationToken)}}catch(n){this.snackbar.error(n.message)}}async onStepChange(n){if(n.selectedIndex===1&&this.saveAddress){let e=await this.getAddressFromStripeAddress();e&&no(this.accountService.updateAddress(e))}n.selectedIndex===2&&await no(this.stripeService.createOrUpdatePaymentIntent()),n.selectedIndex===3&&await this.getConfirmationToken()}async confirmPayment(n){this.loading=!0;try{if(this.confirmationToken){let e=await this.stripeService.confirmPayment(this.confirmationToken);if(e.paymentIntent?.status==="succeeded"){let t=await this.createOrderModel();if(await no(this.orderService.createOrder(t)))this.orderService.orderComplete=!0,this.cartService.deleteCart(),this.cartService.selectedDelivery.set(null),this.router.navigateByUrl("/checkout/success");else throw new Error("Order creation failed")}else throw e.error?new Error(e.error.message):new Error("Something went wrong")}}catch(e){this.snackbar.error(e.message||"Something went wrong"),n.previous()}finally{this.loading=!1}}async createOrderModel(){let n=this.cartService.cart(),e=await this.getAddressFromStripeAddress(),t=this.confirmationToken?.payment_method_preview.card;if(!n?.id||!n.deliveryMethodId||!t||!e)throw new Error("Problem creating order");return{cartId:n.id,paymentSummary:{last4:+t.last4,brand:t.brand,expMonth:t.exp_month,expYear:t.exp_year},deliveryMethodId:n.deliveryMethodId,shippingAddress:e}}async getAddressFromStripeAddress(){let n=await this.addressElement?.getValue(),e=n?.value.address;return e?{name:n.value.name,line1:e.line1,line2:e.line2||void 0,city:e.city,country:e.country,state:e.state,postalCode:e.postal_code}:null}onSaveAddressCheckboxChange(n){this.saveAddress=n.checked}ngOnDestroy(){this.stripeService.disposeElements()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-checkout"]],decls:38,vars:11,consts:[["stepper",""],[1,"flex","mt-32","gap-6"],[1,"w-3/4"],[1,"bg-white","border","border-gray-200","shadow-sm",3,"selectionChange","linear"],["label","Address",3,"completed"],["id","address-element"],[1,"flex","justify-end","mt-1"],[3,"change","checked"],[1,"flex","justify-between","mt-6"],["routerLink","/shop","mat-stroked-button","",1,"z-0"],["matStepperNext","","mat-flat-button","",1,"z-0",3,"disabled"],["label","Shipping",3,"completed"],[3,"deliveryComplete"],["matStepperPrevious","","mat-stroked-button",""],["matStepperNext","","mat-flat-button","",3,"disabled"],["label","Payment",3,"completed"],["id","payment-element"],["label","Confirmation"],[3,"confirmationToken"],["mat-flat-button","",3,"click","disabled"],["diameter","20"],[1,"w-1/4"]],template:function(e,t){if(e&1){let r=Lt();d(0,"div",1)(1,"div",2)(2,"mat-stepper",3,0),O("selectionChange",function(a){return t.onStepChange(a)}),d(4,"mat-step",4),R(5,"div",5),d(6,"div",6)(7,"mat-checkbox",7),O("change",function(a){return t.onSaveAddressCheckboxChange(a)}),f(8," Save as default address "),m()(),d(9,"div",8)(10,"button",9),f(11,"Continue shopping"),m(),d(12,"button",10),f(13," Next "),m()()(),d(14,"mat-step",11)(15,"app-checkout-delivery",12),O("deliveryComplete",function(a){return t.handleDeliveryChange(a)}),m(),d(16,"div",8)(17,"button",13),f(18,"Back"),m(),d(19,"button",14),f(20," Next "),m()()(),d(21,"mat-step",15),R(22,"div",16),d(23,"div",8)(24,"button",13),f(25,"Back"),m(),d(26,"button",14),f(27,"Next"),m()()(),d(28,"mat-step",17),R(29,"app-checkout-review",18),d(30,"div",8)(31,"button",13),f(32,"Back"),m(),d(33,"button",19),O("click",function(){Ze(r);let a=Je(3);return Ye(t.confirmPayment(a))}),V(34,AS,1,0,"mat-spinner",20)(35,RS,3,3,"span"),m()()()()(),d(36,"div",21),R(37,"app-order-summary"),m()()}e&2&&(p(2),D("linear",!0),p(2),D("completed",t.completionStatus().address),p(3),D("checked",t.saveAddress),p(5),D("disabled",!t.completionStatus().address),p(2),D("completed",t.completionStatus().delivery),p(5),D("disabled",!t.completionStatus().delivery),p(2),D("completed",t.completionStatus().card),p(5),D("disabled",!t.completionStatus().card),p(3),D("confirmationToken",t.confirmationToken),p(4),D("disabled",!t.confirmationToken||t.loading),p(),j(t.loading?34:35))},dependencies:[aa,Pb,dh,uh,Rb,Ob,gt,st,Yb,bh,xd,Cd,kd,wd,Ot],encapsulation:2})};var Ed=class i{fb=l(Rc);accountService=l(sn);router=l(yt);activatedRoute=l(fn);returnUrl="/shop";constructor(){let n=this.activatedRoute.snapshot.queryParams.returnUrl;n&&(this.returnUrl=n)}loginForm=this.fb.group({email:[""],password:[""]});onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>{this.accountService.getUserInfo().subscribe(),this.router.navigateByUrl(this.returnUrl)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-login"]],decls:15,vars:1,consts:[[1,"max-w-lg","mx-auto","mt-32","p-8","bg-white"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-6"],[1,"text-3xl","font-semibold","text-primary"],["appearance","outline",1,"w-full","mb-4"],["formControlName","email","type","email","placeholder","name@example.com","matInput",""],["formControlName","password","type","password","placeholder","Password","matInput",""],["mat-flat-button","","type","submit",1,"w-full","py-2"]],template:function(e,t){e&1&&(d(0,"mat-card",0)(1,"form",1),O("ngSubmit",function(){return t.onSubmit()}),d(2,"div",2)(3,"h1",3),f(4,"Login"),m()(),d(5,"mat-form-field",4)(6,"mat-label"),f(7,"Email address"),m(),R(8,"input",5),m(),d(9,"mat-form-field",4)(10,"mat-label"),f(11,"Password"),m(),R(12,"input",6),m(),d(13,"button",7),f(14,"Sign in"),m()()()),e&2&&(p(),D("formGroup",t.loginForm))},dependencies:[na,ea,Ei,Gn,Qo,Wi,Ss,xi,si,gr,ai,st],encapsulation:2})};function OS(i,n){if(i&1&&(d(0,"mat-error"),f(1),m()),i&2){let e=M();p(),Se("",e.label," is required")}}function PS(i,n){i&1&&(d(0,"mat-error"),f(1,"Email is invalid"),m())}var Sd=class i{constructor(n){this.controlDir=n;this.controlDir.valueAccessor=this}label="";type="text";writeValue(n){}registerOnChange(n){}registerOnTouched(n){}get control(){return this.controlDir.control}static \u0275fac=function(e){return new(e||i)(me(_n,2))};static \u0275cmp=S({type:i,selectors:[["app-text-input"]],inputs:{label:"label",type:"type"},decls:6,vars:8,consts:[["appearance","outline",1,"w-full","mb-4"],["matInput","",3,"formControl","type","placeholder"]],template:function(e,t){e&1&&(d(0,"mat-form-field",0)(1,"mat-label"),f(2),m(),R(3,"input",1),V(4,OS,2,1,"mat-error"),V(5,PS,2,0,"mat-error"),m()),e&2&&(p(2),X(t.label),p(),D("type",hn(t.type))("placeholder",hn(t.label))("formControl",t.control),p(),j(t.control.hasError("required")?4:-1),p(),j(t.control.hasError("email")?5:-1))},dependencies:[na,Ei,Gn,qm,si,gr,th,ai],encapsulation:2})};function FS(i,n){if(i&1&&(d(0,"li"),f(1),m()),i&2){let e=n.$implicit;p(),X(e)}}function NS(i,n){if(i&1&&(d(0,"div",8)(1,"ul",10),ht(2,FS,2,1,"li",null,Pi),m()()),i&2){let e=M();p(2),pt(e.validationErrors)}}var Md=class i{fb=l(Rc);accountService=l(sn);router=l(yt);snack=l(Ti);validationErrors;registerForm=this.fb.group({firstName:["",$n.required],lastName:["",$n.required],email:["",[$n.required,$n.email]],password:["",$n.required]});onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>{this.snack.success("Registration successful - you can now login"),this.router.navigateByUrl("/account/login")},error:n=>this.validationErrors=n})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-register"]],decls:12,vars:3,consts:[[1,"max-w-lg","mx-auto","mt-32","p-8","bg-white"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-6"],[1,"text-3xl","font-semibold","text-primary"],["label","First name","formControlName","firstName"],["label","Last name","formControlName","lastName"],["label","Email address","formControlName","email"],["label","Password","formControlName","password","type","password"],[1,"mb-3","p-4","bg-red-100","text-red-600"],["mat-flat-button","","type","submit",1,"w-full","py-2",3,"disabled"],[1,"list-disc","px-3"]],template:function(e,t){e&1&&(d(0,"mat-card",0)(1,"form",1),O("ngSubmit",function(){return t.onSubmit()}),d(2,"div",2)(3,"h1",3),f(4,"Register"),m()(),R(5,"app-text-input",4)(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),V(9,NS,4,0,"div",8),d(10,"button",9),f(11," Register "),m()()()),e&2&&(p(),D("formGroup",t.registerForm),p(8),j(t.validationErrors?9:-1),p(),D("disabled",t.registerForm.invalid))},dependencies:[na,ea,Gn,Qo,Wi,Ss,xi,st,Sd],encapsulation:2})};var js=(i,n)=>{let e=l(sn),t=l(yt);return e.currentUser()?Q(!0):e.getAuthState().pipe(ce(r=>r.isAuthenticated?!0:(t.navigate(["/account/login"],{queryParams:{returnUrl:n.url}}),!1)))};var ev=(i,n)=>{let e=l(_t),t=l(yt),r=l(Ti);return!e.cart()||e.cart()?.items.length===0?(r.error("Your cart is empty"),t.navigateByUrl("/cart"),!1):!0};function LS(i,n){if(i&1&&(d(0,"section",0)(1,"div",1)(2,"h2",2),f(3,"Thanks for your fake order!"),m(),d(4,"p",3),f(5," Your order "),d(6,"span",4),f(7),m(),f(8," will never be processed as this is a fake shop. We will not notify you once your order has not shipped. "),m(),d(9,"div",5)(10,"dl",6)(11,"dt",7),f(12,"Date"),m(),d(13,"dd",8),f(14),Be(15,"date"),m()(),d(16,"dl",6)(17,"dt",7),f(18,"Payment method"),m(),d(19,"dd",8),f(20),Be(21,"paymentCard"),m()(),d(22,"dl",6)(23,"dt",7),f(24,"Address"),m(),d(25,"dd",8),f(26),Be(27,"address"),m()(),d(28,"dl",6)(29,"dt",7),f(30,"Amount"),m(),d(31,"dd",8),f(32),Be(33,"currency"),m()()(),d(34,"div",9)(35,"button",10),f(36,"View your order"),m(),d(37,"button",11),f(38,"Continue shopping"),m()()()()),i&2){let e=n;p(7),Se("#",e.id),p(7),X(fo(15,7,e.orderDate,"medium")),p(6),Se(" ",Ue(21,10,e.paymentSummary)," "),p(6),X(Ue(27,12,e.shippingAddress)),p(6),X(Ue(33,14,e.total)),p(3),D("routerLink",Ln("/orders/",e.id))}}function BS(i,n){i&1&&(d(0,"section",0)(1,"div",1)(2,"h2",2),f(3,"Order processing... please wait"),m(),d(4,"div",5)(5,"div",12),R(6,"mat-spinner",13),d(7,"p",14),f(8,"Loading order..."),m(),d(9,"span"),f(10,"Your payment has been received. We are creating the order"),m()()(),d(11,"div",9)(12,"button",11),f(13,"Continue shopping"),m()()()())}var Id=class i{signalrService=l(vr);orderService=l(Wn);ngOnDestroy(){this.orderService.orderComplete=!1,this.signalrService.orderSignal.set(null)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-checkout-success"]],decls:2,vars:1,consts:[[1,"bg-white","py-16"],[1,"mx-auto","max-w-2xl","px-4"],[1,"font-semibold","text-2xl","mb-2"],[1,"text-gray-500","mb-8"],[1,"font-medium"],[1,"space-y-2","rounded-lg","border","border-gray-100","bg-gray-50","p-6","mb-8"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-normal","text-gray-500"],[1,"font-medium","text-gray-900","text-end"],[1,"flex","items-center","space-x-4"],["mat-flat-button","",3,"routerLink"],["routerLink","/shop","mat-stroked-button",""],[1,"flex","flex-col","justify-center","items-center"],["diameter","30"],[1,"text-xl"]],template:function(e,t){if(e&1&&V(0,LS,39,16,"section",0)(1,BS,14,0,"section",0),e&2){let r;j((r=t.signalrService.orderSignal())?0:1,r)}},dependencies:[st,gt,kd,wd,Ar,yr,Ot,xr],encapsulation:2})};var zS=(i,n)=>n.id;function VS(i,n){if(i&1&&(d(0,"tr",10)(1,"th",11),f(2),m(),d(3,"td"),f(4),Be(5,"date"),m(),d(6,"td"),f(7),Be(8,"currency"),m(),d(9,"td"),f(10),m()()),i&2){let e=n.$implicit;D("routerLink",Ln("/orders/",e.id)),p(2),Se("# ",e.id),p(2),X(fo(5,6,e.orderDate,"medium")),p(3),X(Ue(8,9,e.total)),p(3),X(e.status)}}var Td=class i{orderService=l(Wn);orders=[];ngOnInit(){this.orderService.getOrdersForUser().subscribe({next:n=>this.orders=n})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-order"]],decls:19,vars:0,consts:[[1,"mx-auto","mt-32"],[1,"font-semibold","text-2xl","mb-6","text-center"],[1,"flex","flex-col"],[1,"w-full"],[1,"min-w-full","divide-y","divide-gray-200","cursor-pointer"],[1,"bg-gray-50"],[1,"uppercase","text-gray-600","text-sm"],[1,"text-center","px-6","py-3"],[1,"text-left"],[1,"bg-white","divide-y","divide-gray-200"],[1,"hover:bg-gray-100",3,"routerLink"],[1,"px-6","py-3"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"h2",1),f(2,"My orders"),m(),d(3,"div",2)(4,"div",3)(5,"table",4)(6,"thead",5)(7,"tr",6)(8,"th",7),f(9,"Order"),m(),d(10,"th",8),f(11,"Date"),m(),d(12,"th",8),f(13,"Total"),m(),d(14,"th",8),f(15,"Status"),m()()(),d(16,"tbody",9),ht(17,VS,11,11,"tr",10,zS),m()()()()()),e&2&&(p(17),pt(t.orders))},dependencies:[gt,Ar,Ot],encapsulation:2})};var jS=(i,n)=>n.productId;function US(i,n){if(i&1&&(d(0,"tr")(1,"td",22)(2,"div",23),R(3,"img",24),d(4,"span"),f(5),m()()(),d(6,"td",25),f(7),m(),d(8,"td",26),f(9),Be(10,"currency"),m()()),i&2){let e=n.$implicit;p(3),D("src",hn(e.pictureUrl),mi),p(2),X(e.productName),p(2),Se("x",e.quantity),p(2),X(Ue(10,5,e.price))}}function HS(i,n){if(i&1&&(d(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"h2",3),f(4),m(),d(5,"button",4),f(6,"Return to orders"),m()(),d(7,"div",5)(8,"div",6)(9,"h4",7),f(10,"Billing and delivery information"),m(),d(11,"dl")(12,"dt",8),f(13,"Shipping address"),m(),d(14,"dd",9),f(15),Be(16,"address"),m()(),d(17,"dl")(18,"dt",8),f(19,"Payment info"),m(),d(20,"dd",9),f(21),Be(22,"paymentCard"),m()()(),d(23,"div",6)(24,"h4",7),f(25,"Order details"),m(),d(26,"dl")(27,"dt",8),f(28,"Email address"),m(),d(29,"dd",9),f(30),m()(),d(31,"dl")(32,"dt",8),f(33,"Order status"),m(),d(34,"dd",9),f(35),m()(),d(36,"dl")(37,"dt",8),f(38,"Order date"),m(),d(39,"dd",9),f(40),Be(41,"date"),m()()()(),d(42,"div",10)(43,"div",11)(44,"table",12)(45,"tbody",13),ht(46,US,11,7,"tr",null,jS),m()()()(),d(48,"div",14)(49,"p",15),f(50,"Order summary"),m(),d(51,"div",16)(52,"div",6)(53,"dl",17)(54,"dt",18),f(55,"Subtotal"),m(),d(56,"dd",19),f(57),Be(58,"currency"),m()(),d(59,"dl",17)(60,"dt",18),f(61,"Discount"),m(),d(62,"dd",20),f(63,"-$0.00"),m()(),d(64,"dl",17)(65,"dt",18),f(66,"Delivery fee"),m(),d(67,"dd",19),f(68),Be(69,"currency"),m()()(),d(70,"dl",21)(71,"dt",18),f(72,"Total"),m(),d(73,"dd",19),f(74),Be(75,"currency"),m()()()()()()),i&2){let e=M();p(4),Se("Order summary for order #",e.order.id),p(11),X(Ue(16,9,e.order.shippingAddress)),p(6),X(Ue(22,11,e.order.paymentSummary)),p(9),X(e.order.buyerEmail),p(5),X(e.order.status),p(5),X(fo(41,13,e.order.orderDate,"medium")),p(6),pt(e.order.orderItems),p(11),Se(" ",Ue(58,16,e.order.subtotal)," "),p(11),Se(" ",Ue(69,18,e.order.shippingPrice)," "),p(6),X(Ue(75,20,e.order.total))}}var Ad=class i{orderService=l(Wn);activatedRouter=l(fn);order;ngOnInit(){this.loadOrder()}loadOrder(){let n=this.activatedRouter.snapshot.paramMap.get("id");n&&this.orderService.getOrderDetailed(+n).subscribe({next:e=>this.order=e})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-order-detailed"]],decls:1,vars:1,consts:[[1,"bg-white","py-8","shadow-md","max-w-5xl","mx-auto"],[1,"px-4","w-full"],[1,"flex","justify-between","items-center","align-middle"],[1,"text-2xl","text-center","font-semibold"],["routerLink","/orders","mat-stroked-button",""],[1,"mt-8","py-3","border-t","border-gray-200","flex","gap-16"],[1,"space-y-2"],[1,"text-lg","font-semibold"],[1,"font-medium"],[1,"mt-1","font-light"],[1,"mt-4"],[1,"border-y","border-gray-200"],[1,"w-full","text-center"],[1,"divide-y","divide-gray-200"],[1,"space-y-4","rounded-lg","border-y","border-gray-200","p-4","bg-white"],[1,"text-xl","font-semibold"],[1,"space-y-4"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-medium","text-gray-500"],[1,"font-medium","text-gray-900"],[1,"font-medium","text-green-500"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2"],[1,"py-4"],[1,"flex","items-center","gap-4"],["alt","product image",1,"w-10","h-10",3,"src"],[1,"p-4"],[1,"p-4","text-right"]],template:function(e,t){e&1&&V(0,HS,76,22,"mat-card",0),e&2&&j(t.order?0:-1)},dependencies:[Cg,xi,st,gt,Ar,Ot,yr,xr],encapsulation:2})};var tv=(i,n)=>{let e=l(Wn),t=l(yt);return e.orderComplete?!0:(t.navigateByUrl("/shop"),!1)};var nv=[{path:"",component:Zl},{path:"shop",component:zc},{path:"shop/:id",component:Vc},{path:"cart",component:Wc},{path:"checkout",component:Dd,canActivate:[js,ev]},{path:"checkout/success",component:Id,canActivate:[js,tv]},{path:"orders",component:Td,canActivate:[js]},{path:"orders/:id",component:Ad,canActivate:[js]},{path:"account/login",component:Ed},{path:"account/register",component:Md},{path:"test-error",component:jc},{path:"not-found",component:Uc},{path:"server-error",component:Hc},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var $S="@",GS=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(ue);loadingSchedulerFn=l(WS,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-6FSR54PZ.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new de(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new yh(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(Lh,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){ga()};static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})(),yh=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,r){this.delegate.insertBefore(n,e,t,r)}removeChild(n,e,t,r){this.delegate.removeChild(n,e,t,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,t,r)),this.delegate.listen(n,e,t,r)}shouldReplay(n){return this.replay!==null&&n.startsWith($S)}},WS=new k("");function iv(i="animations"){return $d("NgAsyncAnimations"),wr([{provide:Kt,useFactory:()=>new GS(l(ie),l(Ia),l(Y),i)},{provide:lo,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var rv=(i,n)=>{let e=l(yt),t=l(Ti);return n(i).pipe(Xi(r=>{if(r.status===400)if(r.error.errors){let o=[];for(let a in r.error.errors)r.error.errors[a]&&o.push(r.error.errors[a]);throw o.flat()}else t.error(r.error.title||r.error);if(r.status===401&&t.error(r.error.title||r.error),r.status===404&&e.navigateByUrl("/not-found"),r.status===500){let o={state:{error:r.error}};e.navigateByUrl("/server-error",o)}return to(()=>r)}))};var ua=class i{loading=!1;busyRequestCount=0;busy(){this.busyRequestCount++,this.loading=!0}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading=!1)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var ov=(i,n)=>{let e=l(ua);return e.busy(),n(i).pipe(Ht.production?Eh:Th(500),Ki(()=>e.idle()))};var Rd=class i{cartService=l(_t);accountService=l(sn);signalrService=l(vr);init(){let n=localStorage.getItem("cart_id"),e=n?this.cartService.getCart(n):Q(null);return io({cart:e,user:this.accountService.getUserInfo().pipe(kt(t=>{t&&this.signalrService.createHubConnection()}))})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var av=(i,n)=>{let e=i.clone({withCredentials:!0});return n(e)};var sv={providers:[Nh(),qu(nv),cp(),iv(),_u(bu([rv,ov,av])),qd(async()=>{let i=l(Rd);return Ih(i.init()).finally(()=>{let n=document.getElementById("initial-splash");n&&n.remove()})})]};var lv="mat-badge-content",qS=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return i})(),cv=(()=>{class i{_ngZone=l(Y);_elementRef=l(H);_ariaDescriber=l(rc);_renderer=l(Le);_animationsDisabled=Ve();_idGenerator=l(ze);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=l(Bo);_document=l(ie);constructor(){let e=l(rt);e.load(qS),e.load(Ci)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(lv),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${lv}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,r){t&2&&$("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",U],disabled:[2,"matBadgeDisabled","disabled",U],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",U]}})}return i})();function ZS(i,n){i&1&&Qt(0,"div",2)}var YS=new k("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var uv=(()=>{class i{_elementRef=l(H);_ngZone=l(Y);_changeDetectorRef=l(Me);_renderer=l(Le);_cleanupTransitionEnd;constructor(){let e=ls(),t=l(YS,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=dv(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=dv(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new J;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(ee("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),zt("mat-"+r.color),$("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ct],bufferValue:[2,"bufferValue","bufferValue",Ct],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&(tt(0,"div",0),Qt(1,"div",1),V(2,ZS,1,0,"div",2),vt(),tt(3,"div",3),Qt(4,"span",4),vt(),tt(5,"div",5),Qt(6,"span",4),vt()),t&2&&(p(),pi("flex-basis",r._getBufferBarFlexBasis()),p(),j(r.mode==="buffer"?2:-1),p(),pi("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return i})();function dv(i,n=0,e=100){return Math.max(n,Math.min(e,i))}var XS=()=>({exact:!0});function KS(i,n){if(i&1&&(d(0,"button",10)(1,"mat-icon"),f(2,"arrow_drop_down"),m(),d(3,"span"),f(4),m()()),i&2){let e,t=M(),r=Je(18);D("matMenuTriggerFor",r),p(4),X((e=t.accountService.currentUser())==null?null:e.email)}}function QS(i,n){i&1&&(d(0,"button",16),f(1,"Login"),m(),d(2,"button",17),f(3,"Register"),m())}function JS(i,n){i&1&&R(0,"mat-progress-bar",11)}var Od=class i{busyService=l(ua);cartService=l(_t);accountService=l(sn);router=l(yt);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl("/")}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-header"]],decls:32,vars:6,consts:[["menu","matMenu"],[1,"shadow-md","p-3","w-full","max-h-20","fixed","top-0","z-50","bg-white"],[1,"flex","align-middle","items-center","justify-between","max-w-screen-2xl","mx-auto"],["routerLink","/","src","/images/logo.png","alt","app logo",1,"max-h-16"],[1,"flex","gap-3","my-2","uppercase","text-2xl"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-error","routerLinkActive","active"],[1,"flex","gap-3","align-middle"],["routerLink","/cart","routerLinkActive","active","matBadgeSize","large",1,"custom-badge","mt-2","mr-2",3,"matBadge"],["mat-button","",3,"matMenuTriggerFor"],["mode","indeterminate",1,"fixed","top-20","z-50"],[1,"px-5"],["mat-menu-item","","routerLink","/cart",1,"px-3"],["mat-menu-item","","routerLink","/orders",1,"px-3"],["mat-menu-item","",1,"px-3",3,"click"],["routerLink","/account/login","mat-stroked-button",""],["routerLink","/account/register","mat-stroked-button",""]],template:function(e,t){e&1&&(d(0,"header",1)(1,"div",2),R(2,"img",3),d(3,"nav",4)(4,"a",5),f(5,"Home"),m(),d(6,"a",6),f(7,"Shop"),m(),d(8,"a",7),f(9,"Errors"),m()(),d(10,"div",8)(11,"a",9)(12,"mat-icon"),f(13,"shopping_cart"),m()(),V(14,KS,5,2,"button",10)(15,QS,4,0),m()()(),V(16,JS,1,0,"mat-progress-bar",11),d(17,"mat-menu",12,0)(19,"button",13)(20,"mat-icon"),f(21,"shopping_cart"),m(),f(22," My cart "),m(),d(23,"button",14)(24,"mat-icon"),f(25,"history"),m(),f(26," My orders "),m(),R(27,"mat-divider"),d(28,"button",15),O("click",function(){return t.logout()}),d(29,"mat-icon"),f(30,"logout"),m(),f(31," Logout "),m()()),e&2&&(p(4),D("routerLinkActiveOptions",np(5,XS)),p(7),D("matBadge",hn(t.cartService.itemCount())),p(3),j(t.accountService.currentUser()?14:15),p(2),j(t.busyService.loading?16:-1))},dependencies:[cv,an,st,gt,Wu,uv,Fc,pr,qo,Ts],styles:[".custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}a.active[_ngcontent-%COMP%]{color:#7d00fa}"]})};var Pd=class i{title="Skinet";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container","mt-24"]],template:function(e,t){e&1&&(R(0,"app-header"),d(1,"div",0),R(2,"router-outlet"),m())},dependencies:[Za,Od],encapsulation:2})};du(Pd,sv).catch(i=>console.error(i));
