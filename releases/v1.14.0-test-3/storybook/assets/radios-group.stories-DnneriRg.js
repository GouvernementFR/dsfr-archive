import{a as i,p as k}from"./radio-arg-types-Cd9JILZn.js";import{f as a,a as g}from"./form-arg-types-BB7YawXK.js";import{u as h}from"./renderer-CJGDU4KV.js";import{r as O}from"./fieldset-CLVBe4IY.js";import"./_commonjsHelpers-BosuxZz1.js";const $={status:{control:{type:"select",labels:{default:"Défaut",valid:"Succès",error:"Erreur"}},description:"Statut du message",options:["default","valid","error"],type:{value:"string"},table:{category:"message"}},errorMessage:{if:{arg:"status",eq:"error"},control:"text",description:"Texte du message d'erreur",type:{value:"string"},table:{category:"message"}},validMessage:{if:{arg:"status",eq:"valid"},control:"text",description:"Texte du message de succès",type:{value:"string"},table:{category:"message"}}},j={id:{...g.id,type:{value:"string",required:!0}},legend:{...g.legend,description:"Légende de l’ensemble des radios"},hint:{...i.hint,description:"Texte additionnel sous la légende"},size:{if:{arg:"rich",eq:!1},...i.size,description:"Taille des radios"},rich:{...i.rich},hasPictogram:{...k.hasPictogram},inline:{...g.inline},disabled:{...i.disabled,description:"Désactive l’ensemble des radios"},...$},t=(e=3)=>{const r=[],s=h("radios-group-name");for(let o=1;o<=e;o++)r.push({label:`Checkbox ${o}`,id:h("radio"),name:s,hint:"",disabled:!1,rich:!1,pictogramName:"city-hall",pictogramAccent:"défaut"});return r},L={legend:"Légende pour l’ensemble des éléments",hint:a.hint,size:"md",disabled:a.disabled,rich:!1,hasPictogram:!0,inline:a.inline,status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès",elements:t(),id:a.id},w=e=>{const r={id:e.id||h("radios-form"),legend:e.legend,disabled:e.disabled,hint:e.hint,rich:e.rich||L.rich,inline:e.inline,choice:!0,status:e.status||a.status,error:e.status==="error"?e.errorMessage||a.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||a.validMessage:void 0,elements:e.elements.map(s=>({type:"radio",inline:e.inline,data:{label:s.label,size:e.size,id:s.id,name:s.name,hint:s.hint,disabled:s.disabled,rich:e.rich}}))};for(let s=0;s<r.elements.length;s++)r.rich&&e.hasPictogram?r.elements[s].data.pictogram={name:e.elements[s].pictogramName||"city-hall",accent:e.elements[s].pictogramAccent||"défaut"}:r.elements[s].pictogram=void 0;return r},B=e=>O({fieldset:w(e)}),V={id:"radios-group",title:"DSFR/Component/Radio/Radios-Group",render:B,argTypes:j,args:L},n={tags:["!autodocs"],args:{}},d={tags:["autodocs","!dev"],args:{elements:t()}},c={tags:["autodocs","!dev"],args:{size:"sm",elements:t()}},l={tags:["autodocs","!dev"],args:{inline:!0,elements:t()}},u={tags:["autodocs","!dev"],args:{rich:!0,elements:t()}},m={tags:["autodocs","!dev"],args:{rich:!0,hasPictogram:!1,elements:t()}},p={tags:["autodocs","!dev"],args:{rich:!0,hasPictogram:!1,inline:!0,elements:t()}};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var G,v,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    elements: getRadiosGroupData()
  }
}`,...(R=(v=d.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var b,D,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    elements: getRadiosGroupData()
  }
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var P,x,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...(M=(x=l.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var z,A,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    elements: getRadiosGroupData()
  }
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,q,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    elements: getRadiosGroupData()
  }
}`,...(_=(q=m.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var C,E,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const W=["RadiosGroupStory","DefaultGroupStory","SizeSMGroupStory","InlineGroupStory","RadiosRichGroupStory","RadiosRichNoImageGroupStory","RadiosRichNoImageInlineGroupStory"];export{d as DefaultGroupStory,l as InlineGroupStory,n as RadiosGroupStory,u as RadiosRichGroupStory,m as RadiosRichNoImageGroupStory,p as RadiosRichNoImageInlineGroupStory,c as SizeSMGroupStory,W as __namedExportsOrder,V as default};
