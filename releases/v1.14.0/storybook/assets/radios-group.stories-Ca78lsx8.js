import{a as o,p as ye}from"./radio-arg-types-Cd9JILZn.js";import{f as t,a as D}from"./form-arg-types-BB7YawXK.js";import{u as b}from"./renderer-3y4n_kVM.js";import{r as Re}from"./fieldset-59UmsJWr.js";import"./_commonjsHelpers-BosuxZz1.js";const ve={status:{control:{type:"select",labels:{default:"Défaut",valid:"Succès",error:"Erreur"}},description:"Statut du message",options:["default","valid","error"],type:{value:"string"},table:{category:"message"}},errorMessage:{if:{arg:"status",eq:"error"},control:"text",description:"Texte du message d'erreur",type:{value:"string"},table:{category:"message"}},validMessage:{if:{arg:"status",eq:"valid"},control:"text",description:"Texte du message de succès",type:{value:"string"},table:{category:"message"}}},Ge={id:{...D.id,type:{value:"string",required:!0}},legend:{...D.legend,description:"Légende de l’ensemble des radios"},hint:{...o.hint,description:"Texte additionnel sous la légende"},size:{if:{arg:"rich",eq:!1},...o.size,description:"Taille des radios"},rich:{...o.rich},hasPictogram:{...ye.hasPictogram},inline:{...D.inline},disabled:{...o.disabled,description:"Désactive l’ensemble des radios"},...ve},r=(e=3,a=!1)=>{const s=[],T=b("radios-group-name");for(let f=1;f<=e;f++)s.push({label:`Radio ${f}`,id:b("radio"),name:T,hint:a?"Texte additionnel":"",disabled:!1,rich:!1,pictogramName:"city-hall",pictogramAccent:"défaut"});return s},Se={legend:"Légende pour l’ensemble des éléments",hint:t.hint,size:"md",disabled:t.disabled,rich:!1,hasPictogram:!0,inline:t.inline,status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès",elements:r(),id:t.id},fe=e=>{const a={id:e.id||b("radios-form"),legend:e.legend,disabled:e.disabled,hint:e.hint,rich:e.rich||Se.rich,inline:e.inline,choice:!0,status:e.status||t.status,error:e.status==="error"?e.errorMessage||t.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||t.validMessage:void 0,elements:e.elements.map(s=>({type:"radio",inline:e.inline,data:{label:s.label,size:e.size,id:s.id,name:s.name,hint:s.hint,disabled:s.disabled,rich:e.rich}}))};for(let s=0;s<a.elements.length;s++)a.rich&&e.hasPictogram?a.elements[s].data.pictogram={name:e.elements[s].pictogramName||"city-hall",accent:e.elements[s].pictogramAccent||"défaut"}:a.elements[s].pictogram=void 0;return a},De=e=>Re({fieldset:fe(e)}),Me={id:"radios-group",title:"DSFR/Component/Radio/Radios-Group",render:De,argTypes:Ge,args:Se},n={tags:["!autodocs"],args:{}},i={tags:["autodocs","!dev"],args:{elements:r()}},d={tags:["autodocs","!dev"],args:{hint:"Texte de description additionnel",elements:r()}},c={tags:["autodocs","!dev"],args:{disabled:!0,elements:r()}},u={tags:["autodocs","!dev"],args:{status:"valid",elements:r()}},l={tags:["autodocs","!dev"],args:{status:"error",elements:r()}},m={tags:["autodocs","!dev"],args:{size:"md",elements:r()}},p={tags:["autodocs","!dev"],args:{size:"sm",elements:r()}},g={tags:["autodocs","!dev"],args:{inline:!0,elements:r()}},h={tags:["autodocs","!dev"],args:{rich:!0,elements:r()}},S={tags:["autodocs","!dev"],args:{rich:!0,hint:"Texte de description additionnel",elements:r()}},y={tags:["autodocs","!dev"],args:{rich:!0,inline:!0,elements:r()}},R={tags:["autodocs","!dev"],args:{rich:!0,inline:!0,hint:"Texte de description additionnel",elements:r()}},v={tags:["autodocs","!dev"],args:{rich:!0,hasPictogram:!1,elements:r()}},G={tags:["autodocs","!dev"],args:{rich:!0,hasPictogram:!1,inline:!0,elements:r()}};var x,z,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var M,P,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    elements: getRadiosGroupData()
  }
}`,...(A=(P=i.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var N,H,q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    hint: 'Texte de description additionnel',
    elements: getRadiosGroupData()
  }
}`,...(q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var E,_,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true,
    elements: getRadiosGroupData()
  }
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,V,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    elements: getRadiosGroupData()
  }
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var O,$,j;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    elements: getRadiosGroupData()
  }
}`,...(j=($=l.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var k,w,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md',
    elements: getRadiosGroupData()
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    elements: getRadiosGroupData()
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    elements: getRadiosGroupData()
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,re,ae;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hint: 'Texte de description additionnel',
    elements: getRadiosGroupData()
  }
}`,...(ae=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,de,ce;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    inline: true,
    hint: 'Texte de description additionnel',
    elements: getRadiosGroupData()
  }
}`,...(ce=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,le,me;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    elements: getRadiosGroupData()
  }
}`,...(me=(le=v.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ge,he;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    inline: true,
    elements: getRadiosGroupData()
  }
}`,...(he=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Pe=["RadiosGroupStory","DefaultGroupStory","HintStory","DisabledStory","StatusValidStory","StatusErrorStory","SizeMDGroupStory","SizeSMGroupStory","InlineGroupStory","RadiosRichGroupStory","RadiosRichHintGroupStory","RadiosRichInlineGroupStory","RadiosRichInlineHintGroupStory","RadiosRichNoImageGroupStory","RadiosRichNoImageInlineGroupStory"];export{i as DefaultGroupStory,c as DisabledStory,d as HintStory,g as InlineGroupStory,n as RadiosGroupStory,h as RadiosRichGroupStory,S as RadiosRichHintGroupStory,y as RadiosRichInlineGroupStory,R as RadiosRichInlineHintGroupStory,v as RadiosRichNoImageGroupStory,G as RadiosRichNoImageInlineGroupStory,m as SizeMDGroupStory,p as SizeSMGroupStory,l as StatusErrorStory,u as StatusValidStory,Pe as __namedExportsOrder,Me as default};
