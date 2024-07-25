(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9742],{22150:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return s(35652)}])},35652:function(e,r,s){"use strict";s.r(r);var t=s(52676),a=s(75271),o=s(4559),l=s.n(o),n=s(40078),i=s.n(n),c=s(62),u=s(56402),d=s(68975),h=s(91784),m=s(16289),p=s(78462),w=s(94548),x=s(90324),f=s(54941),g=s(89416),j=s(15665),y=s(9096);function b(){let[e,r]=a.useState(!1),[s,o]=a.useState(""),[l,n]=a.useState(""),i=async e=>{try{if(e.preventDefault(),r(!0),s!==l)throw Error("Passwords do not match");let{error:t}=await y.O.auth.updateUser({password:s});if(t)throw Error(t.message);g.toast.success("Successfully updated password!"),setTimeout(()=>window.location.assign("/sign-in"),2e3)}catch(e){e instanceof Error&&g.toast.error(e.message)}finally{r(!1)}};return(0,t.jsxs)(u.X,{mx:"auto",mt:70,maw:400,p:"lg",withBorder:!0,children:[(0,t.jsx)(d.x,{size:"lg",w:500,mb:"lg",children:"Create New Password"}),(0,t.jsxs)("form",{onSubmit:i,children:[(0,t.jsxs)(h.K,{children:[(0,t.jsx)(m.W,{name:"password",value:s,onChange:e=>o(e.target.value),required:!0,label:"New Password",radius:"sm",placeholder:"∗∗∗∗∗∗∗∗∗∗∗",style:{color:"black"}}),(0,t.jsx)(m.W,{name:"password",value:l,onChange:e=>n(e.target.value),required:!0,label:"Validate Password",radius:"sm",placeholder:"∗∗∗∗∗∗∗∗∗∗∗",style:{color:"black"}})]}),(0,t.jsx)(p.Z,{justify:"apart",mt:"xl",children:(0,t.jsx)(w.z,{color:"dark",type:"submit",radius:"sm",loading:e,fullWidth:!0,children:"Reset Password"})})]})]})}r.default=()=>{let{query:e}=(0,c.useRouter)(),[r,s]=a.useState(!1),[o,n]=a.useState(""),[m,v]=a.useState(!1),k=(null==e?void 0:e.type)==="recovery"&&!(null==e?void 0:e.error),_=async e=>{try{e.preventDefault(),s(!0);let{error:r}=await y.O.auth.resetPasswordForEmail(o);if(r)throw Error(r.message);v(!0)}catch(e){e instanceof Error&&g.toast.error(e.message),console.error(e)}finally{s(!1)}};return(0,t.jsxs)(j.Z,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"Reset Password - JSON Crack"}),(0,t.jsx)("link",{rel:"canonical",href:"https://app.jsoncrack.com/forgot-password"}),(0,t.jsx)("meta",{name:"robots",content:"noindex,nofollow"})]}),k?(0,t.jsx)(b,{}):(0,t.jsxs)(u.X,{mx:"auto",mt:100,maw:400,p:"lg",withBorder:!0,children:[(0,t.jsx)(d.x,{size:"lg",w:500,c:"dark",children:"Reset Password"}),(0,t.jsx)(u.X,{pt:"lg",children:m?(0,t.jsx)(d.x,{children:"We've sent an email to you, please check your inbox."}):(0,t.jsxs)("form",{onSubmit:_,children:[(0,t.jsx)(h.K,{children:(0,t.jsx)(x.o,{name:"email",type:"email",value:o,onChange:e=>n(e.target.value),required:!0,label:"Email",placeholder:"hello@jsoncrack.com",radius:"sm",style:{color:"black"}})}),(0,t.jsx)(p.Z,{justify:"apart",mt:"xl",children:(0,t.jsx)(w.z,{color:"dark",type:"submit",radius:"sm",loading:r,fullWidth:!0,children:"Reset Password"})}),(0,t.jsx)(h.K,{mt:"lg",align:"center",children:(0,t.jsx)(f.e,{component:i(),href:"/sign-in",c:"dark",size:"xs",children:"Don't have an account? Sign Up"})})]})})]})]})}},78462:function(e,r,s){"use strict";s.d(r,{Z:function(){return p}});var t=s(52676),a=s(75271),o=s(13970),l=s(47118),n=s(80624),i=s(10714),c=s(16975),u=s(42922),d={root:"m_4081bf90"};let h={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},m=(0,l.Z)((e,{grow:r,preventGrowOverflow:s,gap:t,align:a,justify:l,wrap:n},{childWidth:i})=>({root:{"--group-child-width":r&&s?i:void 0,"--group-gap":(0,o.bG)(t),"--group-align":a,"--group-justify":l,"--group-wrap":n}})),p=(0,u.d)((e,r)=>{let s=(0,n.w)("Group",h,e),{classNames:l,className:u,style:p,styles:w,unstyled:x,children:f,gap:g,align:j,justify:y,wrap:b,grow:v,preventGrowOverflow:k,vars:_,variant:E,__size:P,mod:S,...C}=s,N=a.Children.toArray(f).filter(Boolean),z=N.length,G=(0,o.bG)(g??"md"),O=`calc(${100/z}% - (${G} - ${G} / ${z}))`,R=(0,i.y)({name:"Group",props:s,stylesCtx:{childWidth:O},className:u,style:p,classes:d,classNames:l,styles:w,unstyled:x,vars:_,varsResolver:m});return(0,t.jsx)(c.x,{...R("root"),ref:r,variant:E,mod:[{grow:v},S],size:P,...C,children:N})});p.classes=d,p.displayName="@mantine/core/Group"}},function(e){e.O(0,[3368,4755,9209,9886,3673,1940,8350,2888,9774,179],function(){return e(e.s=22150)}),_N_E=e.O()}]);
//# sourceMappingURL=forgot-password-6fc072a95a233262.js.map