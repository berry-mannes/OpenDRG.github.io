(self.webpackChunkdrg_group=self.webpackChunkdrg_group||[]).push([[826],{481:(e,t,n)=>{var i={"./SS_INFO.csv":[580,580],"./ZD_INFO.csv":[794,794]};function r(e){if(!n.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,23)))}r.keys=()=>Object.keys(i),r.id=481,e.exports=r},815:(e,t,n)=>{var i={"./beijing_2022.js":[369,369],"./lanzhou_2022.js":[472,472],"./suzhou_2022.js":[98,98],"./taizhou_2022.js":[814,814],"./wuhan_2022.js":[731,731],"./wuxi_2022.js":[97,97],"./yancheng_2022.js":[34,34]};function r(e){if(!n.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,23)))}r.keys=()=>Object.keys(i),r.id=815,e.exports=r},528:(e,t,n)=>{"use strict";var i=n(89),r=n.n(i),a=n(479),o=n.n(a),l=n(802),s=n.n(l),c=n(666),d=n.n(c),p=n(432),u=n.n(p),h=n(605),f=n.n(h),v=n(192),m={};m.styleTagTransform=f(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),r()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;let x={1:"男",2:"女"},y={1:"医嘱离院",2:"医嘱转院",3:"医嘱转社区卫生服务机构/乡镇卫生院",4:"非医嘱离院",5:"死亡",9:"其他"},g={yancheng_2022:"CHS-DRG 1.1标准分组/盐城",suzhou_2022:"苏州2022细分组",taizhou_2022:"泰州2022细分组",wuxi_2022:"无锡2022细分组",wuhan_2022:"武汉2022细分组",beijing_2022:"北京2022细分组",lanzhou_2022:"兰州2022细分组"};const w=document.createElement("div"),b=B(w,"","width:90%"),E=J(b,"textarea","病案信息CSV格式快捷输入","display:inline-block;","width:100%;"),k="病案号,年龄,新生儿年龄天,新生儿出生体重,科室,住院天数,性别,离院方式,诊断编码,手术操作编码\n多个ICD编码用|分隔并加分号";b.querySelector("label").title=k,b.querySelector("textarea").title=k;const _=B(w,"","color:red;"),C=B(w,"","display:inline-block;width:25%"),O=B(w,"","display:inline-block;width:70%"),j=J(C,"input","病案号","display:inline-block;width:70px;","width:100px;"),T=J(O,"input","年龄","display:inline-block;width:70px;","width:50px;"),I=J(C,"input","年龄天","display:inline-block;width:70px;","width:50px;"),z=J(O,"input","出生体重","display:inline-block;width:70px;","width:50px;"),L=J(C,"input","科室","display:inline-block;width:70px;","width:100px;"),M=J(O,"input","住院天数","display:inline-block;width:70px;","width:50px;"),N=J(C,"select","性别","display:inline-block;width:70px;","width:50px;"),S=J(O,"select","离院方式","display:inline-block;width:70px;","width:150px;"),D=B(w,"",""),H=J(B(D,"","display:inline-block;"),"textarea","诊断编码（ICD医保版2.0）","display:inline-block;","width:200px;height:50px;","width:220px;margin-top:10px;"),F=J(B(D,"","display:inline-block;"),"textarea","名称","display:inline-block;width:70px;","width:300px;height:50px;","width:320px;margin-top:10px;");F.readOnly=!0;const U=B(w,"",""),Z=J(B(U,"","display:inline-block;"),"textarea","手术操作编码（ICD医保版2.0）","display:inline-block;","width:200px;height:50px;","width:220px;margin-top:10px;"),R=J(B(U,"","display:inline-block;"),"textarea","名称","display:inline-block;width:70px;","width:300px;height:50px;","width:320px;margin-top:10px;");F.readOnly=!0,Object.keys(x).forEach((e=>N.add(new Option(x[e],e)))),Object.keys(y).forEach((e=>S.add(new Option(y[e],e))));const A=J(B(w,"","width:90%;margin-top:10px;"),"select","分组方案","display:inline-block;width:70px;","width:220px;","display:inline-block;");Object.keys(g).forEach((e=>A.add(new Option(g[e],e))));const P=B(w,"","width:90%;margin-top:10px;"),q=document.createElement("button");q.innerText="开始分组",P.appendChild(q);const Y=B(w,"","width:90%");async function G(e,t){const i=await n(481)("./"+t+".csv");return e.map((e=>{let t=Object.values(i).find((t=>t[0]==e));return t?t[1]:"无效编码"}))}function B(e,t,n){const i=document.createElement("div");return i.innerText=t,i.style=n,e.appendChild(i),i}function J(e,t,n,i,r,a){const o=document.createElement(t);o.style=r;const l=document.createElement("label");l.htmlFor=o,l.textContent=n,l.style=i;const s=document.createElement("div");return s.style=a,s.appendChild(l),s.appendChild(o),e.appendChild(s),o}function V(e,t,n){return e.replace(new RegExp(t,"g"),n)}document.body.appendChild(w),E.value='22139971,1.0,73.0,27006.0,,13030305.0,8.0,1.0,"G20.x03,R90.803,F41.101,I10.x00x002,N39.000,E77.801,E87.600",,BU21',E.addEventListener("input",(e=>function(e){if(""==e.trim())return;const t=function(e){let t,n=e,i=new RegExp('"(.*?)"',"g");for(;t=i.exec(e);)n=n.replace(t[0],V(t[1],",","|"));return n}(e).split(",");t.length<10?_.innerText="病案信息格式不正确，信息不全":(_.innerText="",[j,N,T,I,z,L,M,S,H,Z].forEach(((e,n)=>{let i=t[n];if(i.lastIndexOf(".")>=0&&".0"==i.slice(i.lastIndexOf("."))&&(i=i.substring(0,i.lastIndexOf("."))),"text"==e.type)e.value=i;else if("select-one"==e.type){for(let t=0;t<e.options.length;t++)if(e.options[t].value==i){e.selectedIndex=t;break}}else"textarea"==e.type&&(e.value=i.split("|").join("\n"))})),H.dispatchEvent(new Event("input")),Z.dispatchEvent(new Event("input")))}(e.target.value))),q.addEventListener("click",(()=>async function(e,t){const{group_record_str:i}=await n(815)("./"+t+".js");let r=i(e);console.log(r);const a=document.createElement("div"),o=function(e){const t=document.createElement("ul");e.forEach((e=>{let n=document.createElement("li");n.innerHTML=e,t.appendChild(n)}));const n=document.createElement("div");return n.appendChild(t),n}(r.messages),l=document.createElement("div");l.classList.add("red"),l.innerHTML=r.drg;var s=document.createElement("div");if(r&&"0000"!=r.drg){const e=await n(646)("./"+t+".csv");let i=Object.values(e).splice(1).find((e=>e[0]==r.drg));l.innerHTML=r.drg+"-"+i[1],s=function(e,t){let n,i=document.createElement("table"),r=document.createElement("thead"),a=document.createElement("tbody");n=document.createElement("tr"),e.forEach((e=>{let t=document.createElement("th");t.innerText=e,n.appendChild(t)})),r.appendChild(n),n=document.createElement("tr"),t.forEach((e=>{let t=document.createElement("td");t.innerText=e,n.appendChild(t)})),a.appendChild(n),i.appendChild(r),i.appendChild(a);const o=document.createElement("div");return o.appendChild(i),o}(e[0].slice(2),i.slice(2))}return[document.createElement("br"),o,l,document.createElement("br"),s].forEach((e=>a.appendChild(e))),a}(function(){let e=[];return[j,N,T,I,z,L,M,S,H,Z].forEach((t=>{if("text"==t.type)t.value.trim()?e.push(t.value.trim()):e.push("");else if("select-one"==t.type){for(let n=0;n<t.options.length;n++)if(t.options[n].selected){e.push(t.options[n].value);break}t.selected}else"textarea"==t.type&&(t.value.trim()?e.push('"'+t.value.trim().split("\n").join("|")+'"'):e.push(""))})),e.join(",")}(),A.value).then((e=>Y.innerHTML=e.innerHTML)))),H.addEventListener("input",(e=>{e.target.style.height="20px",e.target.style.height=e.target.scrollHeight+"px",F.style.height=e.target.style.height,e.target.value.trim()?G(e.target.value.split("\n"),"ZD_INFO").then((e=>F.value=e.join("\n"))):F.value=""})),Z.addEventListener("input",(e=>{e.target.style.height="20px",e.target.style.height=e.target.scrollHeight+"px",R.style.height=e.target.style.height,e.target.value.trim()?G(e.target.value.split("\n"),"SS_INFO").then((e=>R.value=e.join("\n"))):F.value=""})),E.dispatchEvent(new Event("input"))},192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(799),r=n.n(i),a=n(884),o=n.n(a)()(r());o.push([e.id,".red {\n    color: red;\n    font-size: 14pt; \n  }\n\ndiv {\n    margin-top:2px;font-size:11pt;font-family:'Microsoft YaHei';\n}\n\nlabel {\n    font-size:11pt;font-family:'Microsoft YaHei';\n}\n\ninput,select,textarea {\n    font-size:11pt;font-family:'Microsoft YaHei';\n}\n\n.baInfo {\n    float:left;\n    width: 80%;\n    font-size: 11pt; \n    padding: 6px;\n}\n\n.zdList,.ssList {\n    width: 40%;\n    font-size: 11pt; \n    padding: 6px;\n}\n\npre {\n    white-space: pre-wrap; \n    color: blue; \n    font-size: 11pt; \n    font-family: monospace;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nth,\ntd {\n    padding: 10px 20px;\n    border: 1px solid #000;\n}",""]);const l=o},884:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},799:e=>{"use strict";e.exports=function(e){return e[1]}},89:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],l=0;l<e.length;l++){var s=e[l],c=i.base?s[0]+i.base:s[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,i);i.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var l=n(a[o]);t[l].references--}for(var s=i(e,r),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},802:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},432:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},666:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},479:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},605:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},646:(e,t,n)=>{var i={"./beijing_2022.csv":[565,565],"./fuzhou_2022.csv":[544,544],"./lanzhou_2022.csv":[749,749],"./suzhou_2022.csv":[747,747],"./taizhou_2022.csv":[665,665],"./wuhan_2022.csv":[909,909],"./wuxi_2022.csv":[736,736],"./yancheng_2022.csv":[299,299]};function r(e){if(!n.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,23)))}r.keys=()=>Object.keys(i),r.id=646,e.exports=r}},e=>{e(e.s=528)}]);