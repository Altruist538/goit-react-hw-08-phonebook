"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{6068:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,i,o,a,l,c,d,u,s,x,m,p,f=r(1413),b=r(5705),h=r(6727),Z=r(168),g=r(5867),j=(0,g.ZP)(b.l0)(t||(t=(0,Z.Z)(["\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px;\n  width: 400px;\n  flex-wrap: wrap;\n  border: 1px solid #5d9969;\n  border-radius: 4px;\n  font-weight: bold;\n  align-content: center;\n  align-items: center;\n"]))),w=(0,g.ZP)(b.gN)(i||(i=(0,Z.Z)(["\n  padding: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-content: flex-start;\n"]))),v=(0,g.ZP)(b.Bc)(o||(o=(0,Z.Z)(["\n  color: red;\n"]))),P=g.ZP.button(a||(a=(0,Z.Z)(["\n  border: 1px solid #5d9969;\n  border-radius: 4px;\n  cursor: pointer;\n  }\n"]))),y=g.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 16px;\n"]))),C=r(9434),k=r(6076),_=r(6916),L=function(n){return n.contacts.items},N=function(n){return n.filters},q=(0,_.P1)([L,N],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),F=r(184),I=h.Ry().shape({name:h.Z_().min(2).max(50).required("* Name is required"),number:h.Z_().min(6,"Phone number is too short").max(16,"Phone number is too long").required("* Enter phone number")}),E=function(){var n=(0,C.I0)(),e=(0,C.v9)(L);return(0,F.jsx)(y,{children:(0,F.jsx)(b.J9,{initialValues:{name:"",number:""},validationSchema:I,onSubmit:function(r,t){if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()||n.number===r.number})))return alert("".concat(r.name," or ").concat(r.number," is already in contacts"));n((0,k.uK)((0,f.Z)({},r))),t.resetForm()},children:(0,F.jsxs)(j,{children:[(0,F.jsxs)("label",{children:["Name",(0,F.jsx)(w,{type:"text",name:"name",placeholder:"Jacob Mercer"}),(0,F.jsx)(v,{name:"name",component:"div"})]}),(0,F.jsxs)("label",{children:["Number",(0,F.jsx)(w,{type:"number",name:"number",placeholder:"xxx-xx-xx"}),(0,F.jsx)(v,{name:"number",component:"div"})]}),(0,F.jsx)(P,{type:"submit",children:"Add contact"})]})})})},J=g.ZP.ul(c||(c=(0,Z.Z)(["\n  gap: 16px;\n"]))),K=g.ZP.li(d||(d=(0,Z.Z)(["\n  margin: 10px;\n  font-weight: bold;\n"]))),S=g.ZP.button(u||(u=(0,Z.Z)(["\n  margin-left: 10px;\n  padding: 4px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  }\n"]))),T=g.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 16px;\n"]))),z=r(2791),A=function(){var n=(0,C.I0)();(0,z.useEffect)((function(){n((0,k.yF)())}),[n]);var e=(0,C.v9)(q);return(0,F.jsx)(T,{children:(0,F.jsx)(J,{children:e.map((function(e){return(0,F.jsxs)(K,{children:[e.name,": ",e.number,(0,F.jsx)(S,{onClick:function(){return n((0,k.GK)(e.id))},children:"Delete"})]},e.id)}))})})},B=g.ZP.div(x||(x=(0,Z.Z)(["\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 16px;\n"]))),D=g.ZP.input(m||(m=(0,Z.Z)(["\n  width: 200px;\n  height: 35px;\n"]))),G=g.ZP.label(p||(p=(0,Z.Z)(["\n  margin: 10px;\n  font-weight: bold;\n"]))),M=r(4808),R=function(){var n=(0,C.I0)(),e=(0,C.v9)(N);return(0,F.jsxs)(B,{children:[(0,F.jsx)(G,{children:"Find contacts by name"}),(0,F.jsx)(D,{type:"text",value:e,placeholder:"Type name...",onChange:function(e){n((0,M.T)(e.target.value))}})]})};function V(){return(0,F.jsxs)("div",{children:[(0,F.jsx)(E,{}),(0,F.jsx)(R,{}),(0,F.jsx)(A,{})]})}}}]);
//# sourceMappingURL=68.b92b32f5.chunk.js.map