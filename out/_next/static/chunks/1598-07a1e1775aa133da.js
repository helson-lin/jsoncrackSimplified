"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1598],{56402:function(e,o,t){t.d(o,{X:function(){return f}});var n=t(52676);t(75271);var r=t(13970),i=t(47118),s=t(80624),a=t(10714),l=t(16975),p=t(62202),d={root:"m_1b7284a3"};let c={},u=(0,i.Z)((e,{radius:o,shadow:t})=>({root:{"--paper-radius":void 0===o?void 0:(0,r.H5)(o),"--paper-shadow":(0,r.Xj)(t)}})),f=(0,p.b)((e,o)=>{let t=(0,s.w)("Paper",c,e),{classNames:r,className:i,style:p,styles:f,unstyled:m,withBorder:v,vars:h,radius:g,shadow:w,variant:y,mod:x,...b}=t,P=(0,a.y)({name:"Paper",props:t,classes:d,className:i,style:p,classNames:r,styles:f,unstyled:m,vars:h,varsResolver:u});return(0,n.jsx)(l.x,{ref:o,mod:[{"data-with-border":v},x],...P("root"),variant:y,...b})});f.classes=d,f.displayName="@mantine/core/Paper"},6155:function(e,o,t){t.d(o,{u:function(){return G}});var n=t(52676),r=t(75271),i=t(86259),s=t(29282),a=t(72984),l=t(30507),p=t(13970),d=t(47118),c=t(84939),u=t(80624),f=t(10714),m=t(16975),v=t(42922),h=t(56665),g=t(75546),w=t(45155),y=t(75982),x=t(62272);let b={duration:100,transition:"fade"};var P=t(81596),E=t(61253),j=t(56318),F=t(29742),D={tooltip:"m_1b3c8819",arrow:"m_f898399f"};let M={refProp:"ref",withinPortal:!0,offset:10,position:"right",zIndex:(0,l.w)("popover")},N=(0,d.Z)((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":void 0===o?void 0:(0,p.H5)(o),"--tooltip-bg":t?(0,c.p)(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),R=(0,v.d)((e,o)=>{let t=(0,u.w)("TooltipFloating",M,e),{children:i,refProp:l,withinPortal:p,style:d,className:c,classNames:v,styles:h,unstyled:g,radius:w,color:x,label:b,offset:R,position:T,multiline:k,zIndex:C,disabled:Y,variant:_,vars:L,portalProps:O,...S}=t,X=(0,P.rZ)(),Z=(0,f.y)({name:"TooltipFloating",props:t,classes:D,className:c,style:d,classNames:v,styles:h,unstyled:g,rootSelector:"tooltip",vars:L,varsResolver:N}),{handleMouseMove:G,x:I,y:q,opened:z,boundaryRef:A,floating:H,setOpened:K}=function({offset:e,position:o}){let[t,n]=(0,r.useState)(!1),i=(0,r.useRef)(),{x:s,y:a,elements:l,refs:p,update:d,placement:c}=(0,E.YF)({placement:o,middleware:[(0,j.uY)({crossAxis:!0,padding:5,rootBoundary:"document"})]}),u=c.includes("right")?e:o.includes("left")?-1*e:0,f=c.includes("bottom")?e:o.includes("top")?-1*e:0,m=(0,r.useCallback)(({clientX:e,clientY:o})=>{p.setPositionReference({getBoundingClientRect:()=>({width:0,height:0,x:e,y:o,left:e+u,top:o+f,right:e,bottom:o})})},[l.reference]);return(0,r.useEffect)(()=>{if(p.floating.current){let e=i.current;e.addEventListener("mousemove",m);let o=(0,F.Kx)(p.floating.current);return o.forEach(e=>{e.addEventListener("scroll",d)}),()=>{e.removeEventListener("mousemove",m),o.forEach(e=>{e.removeEventListener("scroll",d)})}}},[l.reference,p.floating.current,d,m,t]),{handleMouseMove:m,x:s,y:a,opened:t,setOpened:n,boundaryRef:i,floating:p.setFloating}}({offset:R,position:T});if(!(0,a.k)(i))throw Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");let Q=(0,s.Yx)(A,i.ref,o);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.q,{...O,withinPortal:p,children:(0,n.jsx)(m.x,{...S,...Z("tooltip",{style:{...function e(o,t){return Array.isArray(o)?[...o].reduce((o,n)=>({...o,...e(n,t)}),{}):"function"==typeof o?o(t):null==o?{}:o}(d,X),zIndex:C,display:!Y&&z?"block":"none",top:(q&&Math.round(q))??"",left:(I&&Math.round(I))??""}}),variant:_,ref:H,mod:{multiline:k},children:b})}),(0,r.cloneElement)(i,{...i.props,[l]:Q,onMouseEnter:e=>{i.props.onMouseEnter?.(e),G(e),K(!0)},onMouseLeave:e=>{i.props.onMouseLeave?.(e),K(!1)}})]})});R.classes=D,R.displayName="@mantine/core/TooltipFloating";let T=(0,r.createContext)(!1),k=T.Provider,C=()=>(0,r.useContext)(T),Y={openDelay:0,closeDelay:0};function _(e){let{openDelay:o,closeDelay:t,children:r}=(0,u.w)("TooltipGroup",Y,e);return(0,n.jsx)(k,{value:!0,children:(0,n.jsx)(E.e0,{delay:{open:o,close:t},children:r})})}_.displayName="@mantine/core/TooltipGroup";var L=t(20958),O=t(6044),S=t(7802);let X={position:"top",refProp:"ref",withinPortal:!0,inline:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},events:{hover:!0,focus:!1,touch:!1},zIndex:(0,l.w)("popover"),positionDependencies:[]},Z=(0,d.Z)((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":void 0===o?void 0:(0,p.H5)(o),"--tooltip-bg":t?(0,c.p)(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),G=(0,v.d)((e,o)=>{var t;let l=(0,u.w)("Tooltip",X,e),{children:p,position:d,refProp:c,label:v,openDelay:P,closeDelay:F,onPositionChange:M,opened:N,withinPortal:R,radius:T,color:k,classNames:Y,styles:_,unstyled:G,style:I,className:q,withArrow:z,arrowSize:A,arrowOffset:H,arrowRadius:K,arrowPosition:Q,offset:B,transitionProps:J,multiline:U,events:V,zIndex:W,disabled:$,positionDependencies:ee,onClick:eo,onMouseEnter:et,onMouseLeave:en,inline:er,variant:ei,keepMounted:es,vars:ea,portalProps:el,mod:ep,floatingStrategy:ed,...ec}=(0,u.w)("Tooltip",X,l),{dir:eu}=(0,h.gm)(),ef=(0,r.useRef)(null),em=function(e){let[o,t]=(0,r.useState)(!1),n="boolean"==typeof e.opened?e.opened:o,i=C(),s=(0,L.M)(),{delay:a,currentId:l,setCurrentId:p}=(0,E.tj)(),d=(0,r.useCallback)(e=>{t(e),e&&p(s)},[p,s]),{x:c,y:u,context:f,refs:m,update:v,placement:h,middlewareData:{arrow:{x:g,y:w}={}}}=(0,E.YF)({strategy:e.strategy,placement:e.position,open:n,onOpenChange:d,middleware:[(0,j.cv)(e.offset),(0,j.uY)({padding:8}),(0,j.RR)(),(0,j.x7)({element:e.arrowRef,padding:e.arrowOffset}),...e.inline?[(0,j.Qo)()]:[]]}),{getReferenceProps:y,getFloatingProps:x}=(0,E.NI)([(0,E.XI)(f,{enabled:e.events?.hover,delay:i?a:{open:e.openDelay,close:e.closeDelay},mouseOnly:!e.events?.touch}),(0,E.KK)(f,{enabled:e.events?.focus,visibleOnly:!0}),(0,E.qs)(f,{role:"tooltip"}),(0,E.bQ)(f,{enabled:void 0===e.opened}),(0,E.Qu)(f,{id:s})]);(0,S.L)({opened:n,position:e.position,positionDependencies:e.positionDependencies,floating:{refs:m,update:v}}),(0,O.l)(()=>{e.onPositionChange?.(h)},[h]);let b=n&&l&&l!==s;return{x:c,y:u,arrowX:g,arrowY:w,reference:m.setReference,floating:m.setFloating,getFloatingProps:x,getReferenceProps:y,isGroupPhase:b,opened:n,placement:h}}({position:(0,g._)(eu,d),closeDelay:F,openDelay:P,onPositionChange:M,opened:N,events:V,arrowRef:ef,arrowOffset:H,offset:"number"==typeof B?B+(z?A/2:0):B,positionDependencies:[...ee,p],inline:er,strategy:ed}),ev=(0,f.y)({name:"Tooltip",props:l,classes:D,className:q,style:I,classNames:Y,styles:_,unstyled:G,rootSelector:"tooltip",vars:ea,varsResolver:Z});if(!(0,a.k)(p))throw Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");let eh=(0,s.Yx)(em.reference,p.ref,o),eg=(t={duration:100,transition:"fade"},{...b,...t,...J});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.q,{...el,withinPortal:R,children:(0,n.jsx)(x.u,{...eg,keepMounted:es,mounted:!$&&!!em.opened,duration:em.isGroupPhase?10:eg.duration,children:e=>(0,n.jsxs)(m.x,{...ec,variant:ei,mod:[{multiline:U},ep],...em.getFloatingProps({ref:em.floating,className:ev("tooltip").className,style:{...ev("tooltip").style,...e,zIndex:W,top:em.y??0,left:em.x??0}}),children:[v,(0,n.jsx)(w.Y,{ref:ef,arrowX:em.arrowX,arrowY:em.arrowY,visible:z,position:em.placement,arrowSize:A,arrowOffset:H,arrowRadius:K,arrowPosition:Q,...ev("arrow")})]})})}),(0,r.cloneElement)(p,em.getReferenceProps({onClick:eo,onMouseEnter:et,onMouseLeave:en,onMouseMove:l.onMouseMove,onPointerDown:l.onPointerDown,onPointerEnter:l.onPointerEnter,[c]:eh,className:(0,i.Z)(q,p.props.className),...p.props}))]})});G.classes=D,G.displayName="@mantine/core/Tooltip",G.Floating=R,G.Group=_}}]);
//# sourceMappingURL=1598-07a1e1775aa133da.js.map