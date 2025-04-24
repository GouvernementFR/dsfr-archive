import{a as o}from"./checkbox-arg-types-siYXMNpP.js";import{f as r,a as p}from"./form-arg-types-BB7YawXK.js";import{u as P}from"./renderer-CJGDU4KV.js";import{r as _}from"./fieldset-CLVBe4IY.js";import"./_commonjsHelpers-BosuxZz1.js";const q={id:{...p.id,type:{value:"string",required:!0}},legend:{...p.legend,description:"Légende de l’ensemble des checkboxes"},hint:{...o.hint,description:"Texte additionnel sous la légende"},size:{...o.size,description:"Taille des checkboxes"},inline:{...p.inline},disabled:{...o.disabled,description:"Désactive l’ensemble des checkboxes"},status:{...o.status},errorMessage:{...o.errorMessage},validMessage:{...o.validMessage}},a=(e=3)=>{const l=[];for(let s=1;s<=e;s++)l.push({label:`Checkbox ${s}`,id:P("checkbox"),name:`checkbox${s}`,hint:"",disabled:!1});return l},F={legend:"Légende pour l’ensemble des éléments",hint:r.hint,size:"md",disabled:r.disabled,inline:r.inline,status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès",checkboxes:a(),id:r.id},L=e=>({id:e.id||P("checkbox-form"),legend:e.legend,disabled:e.disabled,hint:e.hint!==""?e.hint||r.hint:void 0,inline:e.inline,choice:!0,status:e.status||r.status,error:e.status==="error"?e.errorMessage||r.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||r.validMessage:void 0,elements:e.checkboxes.map((s,I)=>({type:"checkbox",inline:e.inline,data:{label:s.label,size:e.size,id:s.id,name:s.name,hint:s.hint,disabled:s.disabled}}))}),$=e=>_({fieldset:L(e)}),J={id:"checkboxes-group",title:"DSFR/Component/Checkbox/Checkboxes-Group",render:$,argTypes:q,args:F},t={tags:["!autodocs"],args:{}},c={tags:["autodocs","!dev"],args:{}},d={tags:["autodocs","!dev"],args:{size:"sm",checkboxes:a()}},n={tags:["autodocs","!dev"],args:{checkboxes:a(),disabled:!0}},i={tags:["autodocs","!dev"],args:{status:"error",checkboxes:a()}},u={tags:["autodocs","!dev"],args:{status:"valid",checkboxes:a()}};var b,m,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {}
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,v,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    checkboxes: getCheckboxesData()
  }
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,C,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    checkboxes: getCheckboxesData(),
    disabled: true
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var G,M,z;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    checkboxes: getCheckboxesData()
  }
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var T,A,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    checkboxes: getCheckboxesData()
  }
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const K=["CheckboxesGroupStory","DefaultGroupStory","SizeSmStory","DisabledStory","ErrorStory","SuccessStory"];export{t as CheckboxesGroupStory,c as DefaultGroupStory,n as DisabledStory,i as ErrorStory,d as SizeSmStory,u as SuccessStory,K as __namedExportsOrder,J as default};
