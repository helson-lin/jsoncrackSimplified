"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5075],{25075:function(e,n,t){t.r(n);var a=t(52676),s=t(75271),o=t(38228),r=t(92835),l=t(93826),i=t(21976),c=t(90266);l._m.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs"}});let u={formatOnPaste:!0,formatOnType:!0,minimap:{enabled:!1}},d=async()=>{try{return await navigator.clipboard.readText()}catch(e){return console.error("获取剪贴板内容失败:",e),null}},h=e=>{try{return JSON.parse(e),!0}catch(e){return!1}};n.default=()=>{let e=(0,l.Ik)(),n=(0,c.Z)(e=>e.contents),t=(0,c.Z)(e=>e.setContents),r=(0,c.Z)(e=>e.setError),g=(0,c.Z)(e=>e.jsonSchema),v=(0,c.Z)(e=>e.getHasChanges),p=(0,i.Z)(e=>e.darkmodeEnabled?"vs-dark":"light"),w=(0,c.Z)(e=>e.format);return s.useEffect(()=>{null==e||e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!0,enableSchemaRequest:!0,...g&&{schemas:[{uri:"http://myserver/foo-schema.json",fileMatch:["*"],schema:g}]}})},[g,null==e?void 0:e.languages.json.jsonDefaults]),s.useEffect(()=>{let e=e=>{if(v()){let n="Unsaved changes, if you leave before saving  your changes will be lost";return(e||window.event).returnValue=n,n}};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[v]),s.useEffect(()=>{var e;null===(e=document.activeElement)||void 0===e||e.focus(),d().then(e=>{e&&h(e)&&t({contents:e})})},[]),(0,a.jsx)(f,{children:(0,a.jsx)(m,{children:(0,a.jsx)(l.ZP,{height:"100%",language:w,theme:p,value:n,options:u,onValidate:e=>{var n;return r(null===(n=e[0])||void 0===n?void 0:n.message)},onChange:e=>t({contents:e,skipUpdate:!0}),loading:(0,a.jsx)(o.f,{visible:!0})})})})};let f=r.ZP.div.withConfig({componentId:"sc-1eaea5ce-0"})(["display:flex;flex-direction:column;height:100%;user-select:none;"]),m=r.ZP.div.withConfig({componentId:"sc-1eaea5ce-1"})(["display:grid;height:calc(100vh - 67px);grid-template-columns:100%;grid-template-rows:minmax(0,1fr);"])}}]);
//# sourceMappingURL=5075.894b4da9be0a9004.js.map