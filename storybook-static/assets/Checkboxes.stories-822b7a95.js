import{j as s,F as w}from"./jsx-runtime-670450c2.js";import{r as f}from"./index-f1f749bf.js";import{p as I}from"./index-4d501b15.js";import{a as D,g as W,s as A,r as G,e as F,b as J,u as K,_ as Q,c as X,d as Y}from"./ButtonBase-6da5a39f.js";import{_ as a}from"./inheritsLoose-d9818a81.js";import{S as Z}from"./SwitchBase-874d150e.js";import{c as k}from"./createSvgIcon-7b47fb5e.js";import"./_commonjsHelpers-042e6b4d.js";const ee=k(s("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),oe=k(s("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),re=k(s("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function se(e){return W("MuiCheckbox",e)}const ce=D("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=ce,ae=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],te=e=>{const{classes:o,indeterminate:r,color:t}=e,n={root:["root",r&&"indeterminate",`color${F(t)}`]},c=Y(n,se,o);return a({},o,c)},ne=A(Z,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.indeterminate&&o.indeterminate,r.color!=="default"&&o[`color${F(r.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:J(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ie=s(oe,{}),le=s(ee,{}),de=s(re,{}),pe=f.forwardRef(function(o,r){var t,n;const c=K({props:o,name:"MuiCheckbox"}),{checkedIcon:N=ie,color:T="primary",icon:U=le,indeterminate:i=!1,indeterminateIcon:x=de,inputProps:j,size:h="medium",className:L}=c,q=Q(c,ae),C=i?x:U,g=i?x:N,v=a({},c,{color:T,indeterminate:i,size:h}),y=te(v);return s(ne,a({type:"checkbox",inputProps:a({"data-indeterminate":i},j),icon:f.cloneElement(C,{fontSize:(t=C.props.fontSize)!=null?t:h}),checkedIcon:f.cloneElement(g,{fontSize:(n=g.props.fontSize)!=null?n:h}),ownerState:v,ref:r,className:X(y.root,L)},q,{classes:y}))}),me=pe;const u=({color:e,disabled:o,...r})=>s(w,{children:s(me,{disabled:o,sx:{color:e,"&.Mui-checked":{color:e}},...r})});u.propTypes={color:I.string,disabled:I.bool};u.defaultProps={color:"#13499f",disabled:!1};u.__docgenInfo={description:"Checkboxes components documentation",methods:[],displayName:"Checkboxes",props:{color:{defaultValue:{value:"'#13499f'",computed:!1},type:{name:"string"},required:!1,description:"Enter the checkbox color:"},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Select the checkbox state:"}}};const ve={title:"Components/Checkboxes",component:u,tags:["autodocs"],argTypes:{color:{control:"color"}}},l={args:{color:"#13499f"}},d={args:{color:"#13499f"}},p={args:{color:"#e51937"}},m={args:{color:"#767676",disabled:!0}};var S,z,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: '#13499f'
  }
}`,...(P=(z=l.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var _,$,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: '#13499f'
  }
}`,...(B=($=d.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var E,M,V;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: '#e51937'
  }
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var H,O,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: '#767676',
    disabled: true
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const ye=["Primary","Secondary","Error","Disabled"];export{m as Disabled,p as Error,l as Primary,d as Secondary,ye as __namedExportsOrder,ve as default};
//# sourceMappingURL=Checkboxes.stories-822b7a95.js.map
