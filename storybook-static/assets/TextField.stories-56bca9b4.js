import{a as F,F as L,j as o}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{p as e}from"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:g,error:s,errorLabel:S,onChange:h,...n})=>F(L,{children:[o("label",{for:n.id,className:"textField-label",children:g}),o("input",{type:"text",className:`textField ${s&&"textField--error"}`,onChange:h,...n}),s&&o("span",{className:"textField-label--error",children:S})]});t.propTypes={label:e.string.isRequired,error:e.bool,errorLabel:e.string,disabled:e.bool,onChange:e.func};t.defaultProps={label:"Sample label*",error:!1,errorLabel:"Sample error",onChange:void 0,disabled:!1};t.__docgenInfo={description:"TextField components documentation",methods:[],displayName:"TextField",props:{label:{defaultValue:{value:"'Sample label*'",computed:!1},type:{name:"string"},required:!1,description:"Enter the Text field label:"},error:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Select the textfield state:"},errorLabel:{defaultValue:{value:"'Sample error'",computed:!1},type:{name:"string"},required:!1,description:"Select the textfield error label:"},onChange:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Get the textfield event:"},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Select the textfield disabled state:"}}};const E={title:"Components/TextField",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},errorLabel:{control:"text"}}},r={args:{label:"Sample label*",error:!1,errorLabel:"Sample error"}},a={args:{label:"Login email",error:!0,errorLabel:"Invalid email"}},l={args:{label:"Sample label*",error:!1,errorLabel:"Sample error",disabled:!0}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Sample label*',
    error: false,
    errorLabel: 'Sample error'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Login email',
    error: true,
    errorLabel: 'Invalid email'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,f,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Sample label*',
    error: false,
    errorLabel: 'Sample error',
    disabled: true
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const V=["Default","Error","Disabled"];export{r as Default,l as Disabled,a as Error,V as __namedExportsOrder,E as default};
//# sourceMappingURL=TextField.stories-56bca9b4.js.map
