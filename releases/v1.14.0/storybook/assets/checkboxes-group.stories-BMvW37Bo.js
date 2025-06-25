import{a as o}from"./checkbox-arg-types-C1lDYMsA.js";import{f as r,a as b}from"./form-arg-types-BB7YawXK.js";import{u as L}from"./renderer-3y4n_kVM.js";import{r as $}from"./fieldset-59UmsJWr.js";import"./_commonjsHelpers-BosuxZz1.js";const I={id:{...b.id,type:{value:"string",required:!0}},legend:{...b.legend,description:"Légende de l’ensemble des checkboxes"},hint:{...o.hint,description:"Texte additionnel sous la légende"},size:{...o.size,description:"Taille des checkboxes"},inline:{...b.inline},disabled:{...o.disabled,description:"Désactive l’ensemble des checkboxes"},status:{...o.status},errorMessage:{...o.errorMessage},validMessage:{...o.validMessage}},a=(e=3,m=!1)=>{const s=[];for(let t=1;t<=e;t++)s.push({label:`Checkbox ${t}`,id:L("checkbox"),name:`checkbox${t}`,hint:m?"Texte additionnel":"",disabled:!1});return s},O={legend:"Légende pour l’ensemble des éléments",hint:r.hint,size:"md",disabled:r.disabled,inline:r.inline,status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès",checkboxes:a(),id:r.id},R=e=>({id:e.id||L("checkbox-form"),legend:e.legend,disabled:e.disabled,hint:e.hint!==""?e.hint||r.hint:void 0,inline:e.inline,choice:!0,status:e.status||r.status,error:e.status==="error"?e.errorMessage||r.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||r.validMessage:void 0,elements:e.checkboxes.map((s,t)=>({type:"checkbox",inline:e.inline,data:{label:s.label,size:e.size,id:s.id,name:s.name,hint:s.hint,disabled:s.disabled}}))}),j=e=>$({fieldset:R(e)}),U={id:"checkboxes-group",title:"DSFR/Component/Checkbox/Checkboxes-Group",render:j,argTypes:I,args:O},c={tags:["!autodocs"],args:{}},d={tags:["autodocs","!dev"],args:{}},n={tags:["autodocs","!dev"],args:{checkboxes:a(3,!0)}},i={tags:["autodocs","!dev"],args:{size:"sm",checkboxes:a()}},u={tags:["autodocs","!dev"],args:{checkboxes:a(),disabled:!0}},l={tags:["autodocs","!dev"],args:{status:"error",checkboxes:a()}},p={tags:["autodocs","!dev"],args:{status:"valid",checkboxes:a()}};var g,h,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,S,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {}
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,f,G;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    checkboxes: getCheckboxesData(3, true)
  }
}`,...(G=(f=n.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var C,D,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    checkboxes: getCheckboxesData()
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var z,T,A;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    checkboxes: getCheckboxesData(),
    disabled: true
  }
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var E,P,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    checkboxes: getCheckboxesData()
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,F,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    checkboxes: getCheckboxesData()
  }
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const V=["CheckboxesGroupStory","DefaultGroupStory","HintGroupStory","SizeSmStory","DisabledStory","ErrorStory","SuccessStory"];export{c as CheckboxesGroupStory,d as DefaultGroupStory,u as DisabledStory,l as ErrorStory,n as HintGroupStory,i as SizeSmStory,p as SuccessStory,V as __namedExportsOrder,U as default};
