import{a as o,t as $}from"./toggle-arg-types-DqppkMCx.js";import{a as h,f as c}from"./form-arg-types-BB7YawXK.js";import{u as t}from"./renderer-CJGDU4KV.js";import{r as _}from"./fieldset-CLVBe4IY.js";import"./_commonjsHelpers-BosuxZz1.js";const F={id:{control:"text",description:"Attribut id du fieldset",type:{value:"string",required:!0},table:{category:"attributes"}},legend:{...h.legend,description:"Légende de l’ensemble des interrupteurs"},left:{...o.left},border:{...o.border},state:{...o.state},status:{...o.status},errorMessage:{...o.errorMessage},validMessage:{...o.validMessage}},s=(e=t("toggle"),p=3)=>{const g=[];for(let r=1;r<=p;r++)g.push({id:`${e}-${r}`,label:`${$.label} ${r}`,checked:r===1,disabled:!1,hint:void 0});return g},i={legend:"Légende pour l'ensemble des éléments",left:!1,border:!1,state:!1,status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès",elements:s(),id:"toggle-group-id"},k=e=>{const p=[{type:"toggle",data:{toggles:e.elements||i.elements}}],g={id:e.id||void 0,legend:e.legend||i.legend,status:e.status||i.status,error:e.status==="error"?e.errorMessage||c.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||c.validMessage:void 0,elements:p};for(const r of g.elements[0].data.toggles)r.left=e.left,r.border=e.border,r.state=e.state;return g},C=e=>_({fieldset:k(e)}),w={id:"toggle-group",title:"DSFR/Component/Toggle/Toggle-Group",render:C,argTypes:F,args:i},a={tags:["!autodocs"],args:{id:t("toggle-group-id"),elements:s(t("toggle"))}},d={tags:["autodocs","!dev"],args:{id:t("toggle-group-id"),elements:s(t("toggle"))}},n={tags:["autodocs","!dev"],args:{id:t("toggle-group-id"),elements:s(t("toggle")),state:!0}},l={tags:["autodocs","!dev"],args:{id:t("toggle-group-id"),elements:s(t("toggle")),border:!0}},u={tags:["autodocs","!dev"],args:{id:t("toggle-group-id"),elements:s(t("toggle")),left:!0}};var m,f,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle'))
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,y,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle'))
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var T,G,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle')),
    state: true
  }
}`,...(q=(G=n.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var I,M,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle')),
    border: true
  }
}`,...(A=(M=l.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var D,x,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle')),
    left: true
  }
}`,...(L=(x=u.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const z=["ToggleGroupStory","DefaultGroupStory","StateGroupStory","borderGroupStory","AlignLeftStory"];export{u as AlignLeftStory,d as DefaultGroupStory,n as StateGroupStory,a as ToggleGroupStory,z as __namedExportsOrder,l as borderGroupStory,w as default};
