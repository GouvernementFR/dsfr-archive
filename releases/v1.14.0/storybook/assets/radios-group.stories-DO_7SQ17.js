import{a as o,p as w}from"./radio-arg-types-Cd9JILZn.js";import{f as t,a as h}from"./form-arg-types-BB7YawXK.js";import{u as f}from"./renderer-DaqJVYXj.js";import{r as B}from"./fieldset-JllCwkmU.js";import"./_commonjsHelpers-BosuxZz1.js";const J={status:{control:{type:"select",labels:{default:"Défaut",valid:"Succès",error:"Erreur"}},description:"Statut du message",options:["default","valid","error"],type:{value:"string"},table:{category:"message"}},errorMessage:{if:{arg:"status",eq:"error"},control:"text",description:"Texte du message d'erreur",type:{value:"string"},table:{category:"message"}},validMessage:{if:{arg:"status",eq:"valid"},control:"text",description:"Texte du message de succès",type:{value:"string"},table:{category:"message"}}},K={id:{...h.id,type:{value:"string",required:!0}},legend:{...h.legend,description:"Légende de l’ensemble des radios"},hint:{...o.hint,description:"Texte additionnel sous la légende"},size:{if:{arg:"rich",eq:!1},...o.size,description:"Taille des radios"},rich:{...o.rich},hasPictogram:{...w.hasPictogram},inline:{...h.inline},disabled:{...o.disabled,description:"Désactive l’ensemble des radios"},...J},r=(e=3,a=!1)=>{const s=[],y=f("radios-group-name");for(let g=1;g<=e;g++)s.push({label:`Checkbox ${g}`,id:f("radio"),name:y,hint:a?"Texte additionnel":"",disabled:!1,rich:!1,pictogramName:"city-hall",pictogramAccent:"défaut"});return s},j={legend:"Légende pour l’ensemble des éléments",hint:t.hint,size:"md",disabled:t.disabled,rich:!1,hasPictogram:!0,inline:t.inline,status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès",elements:r(),id:t.id},Q=e=>{const a={id:e.id||f("radios-form"),legend:e.legend,disabled:e.disabled,hint:e.hint,rich:e.rich||j.rich,inline:e.inline,choice:!0,status:e.status||t.status,error:e.status==="error"?e.errorMessage||t.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||t.validMessage:void 0,elements:e.elements.map(s=>({type:"radio",inline:e.inline,data:{label:s.label,size:e.size,id:s.id,name:s.name,hint:s.hint,disabled:s.disabled,rich:e.rich}}))};for(let s=0;s<a.elements.length;s++)a.rich&&e.hasPictogram?a.elements[s].data.pictogram={name:e.elements[s].pictogramName||"city-hall",accent:e.elements[s].pictogramAccent||"défaut"}:a.elements[s].pictogram=void 0;return a},U=e=>B({fieldset:Q(e)}),ee={id:"radios-group",title:"DSFR/Component/Radio/Radios-Group",render:U,argTypes:K,args:j},i={tags:["!autodocs"],args:{}},n={tags:["autodocs","!dev"],args:{elements:r()}},d={tags:["autodocs","!dev"],args:{elements:r(3,!0)}},c={tags:["autodocs","!dev"],args:{size:"sm",elements:r()}},u={tags:["autodocs","!dev"],args:{inline:!0,elements:r()}},l={tags:["autodocs","!dev"],args:{rich:!0,elements:r()}},m={tags:["autodocs","!dev"],args:{rich:!0,hasPictogram:!1,elements:r()}},p={tags:["autodocs","!dev"],args:{rich:!0,hasPictogram:!1,inline:!0,elements:r()}};var S,G,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(v=(G=i.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};var R,b,D;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    elements: getRadiosGroupData()
  }
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var T,x,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    elements: getRadiosGroupData(3, true)
  }
}`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var M,z,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    elements: getRadiosGroupData()
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,N,q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var _,C,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    elements: getRadiosGroupData()
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,H,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    elements: getRadiosGroupData()
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,O,$;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...($=(O=p.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const se=["RadiosGroupStory","DefaultGroupStory","HintGroupStory","SizeSMGroupStory","InlineGroupStory","RadiosRichGroupStory","RadiosRichNoImageGroupStory","RadiosRichNoImageInlineGroupStory"];export{n as DefaultGroupStory,d as HintGroupStory,u as InlineGroupStory,i as RadiosGroupStory,l as RadiosRichGroupStory,m as RadiosRichNoImageGroupStory,p as RadiosRichNoImageInlineGroupStory,c as SizeSMGroupStory,se as __namedExportsOrder,ee as default};
