import{j as $}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{p as e}from"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const u=({size:c,label:d,variant:a,backgroundColor:P,textColor:R,...T})=>$("button",{variant:(()=>a==="primary"?"contained":a==="secondary"?"outlined":"default")(),className:[`buttons-${a}`,`buttons-${a}--${c}`].join(" "),size:c,style:{backgroundColor:P,color:R},"aria-label":d,...T,children:d});u.propTypes={label:e.string.isRequired,disabled:e.bool,size:e.oneOf(["small","medium","large","full","fit"]),variant:e.oneOf(["primary","secondary"]).isRequired,onClick:e.func,backgroundColor:e.string,textColor:e.string};u.defaultProps={size:"small",variant:"primary",label:"buttons",onClick:void 0,disabled:!1};u.__docgenInfo={description:"Buttons components documentation",methods:[],displayName:"Buttons",props:{size:{defaultValue:{value:"'small'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'full'",computed:!1},{value:"'fit'",computed:!1}]},required:!1,description:"Select the button size:"},variant:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1,description:"Enter the button style type:"},label:{defaultValue:{value:"'buttons'",computed:!1},type:{name:"string"},required:!1,description:"Enter the button label:"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Required to define the button variant"},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Enter the button status:"},backgroundColor:{type:{name:"string"},required:!1,description:"Enter the button background color:"},textColor:{type:{name:"string"},required:!1,description:"Enter the button text color:"}}};const A={title:"Components/Button",component:u,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},textColor:{control:"color"}}},r={args:{label:"Button",variant:"primary",disabled:!1}},t={args:{label:"Button",variant:"secondary"}},o={args:{size:"large",label:"Button",variant:"primary"}},s={args:{size:"medium",label:"Button",variant:"primary"}},n={args:{size:"small",label:"Button",variant:"primary"}},l={args:{size:"full",label:"Button",variant:"primary"}},i={args:{size:"fit",label:"Button",variant:"primary"}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: false
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,g,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'secondary'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,B,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button',
    variant: 'primary'
  }
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var S,q,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Button',
    variant: 'primary'
  }
}`,...(C=(q=s.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var h,x,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button',
    variant: 'primary'
  }
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var E,V,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'full',
    label: 'Button',
    variant: 'primary'
  }
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var F,j,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'fit',
    label: 'Button',
    variant: 'primary'
  }
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const D=["Primary","Secondary","Large","Medium","Small","Full","Fit"];export{i as Fit,l as Full,o as Large,s as Medium,r as Primary,t as Secondary,n as Small,D as __namedExportsOrder,A as default};
//# sourceMappingURL=Buttons.stories-a9cb4fb2.js.map
