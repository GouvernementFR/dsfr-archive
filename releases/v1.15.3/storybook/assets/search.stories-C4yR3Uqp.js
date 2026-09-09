import{e as L}from"./renderer-DTk0-cVf.js";import"./_commonjsHelpers-BosuxZz1.js";const T=e=>L.render("search",e),I={buttonLabel:{control:"text",description:"Libellé du bouton",type:{value:"string",required:!0},table:{category:"button"}},buttonTitle:{control:"text",description:"Titre du bouton",type:{value:"string",required:!0},table:{category:"button"}}},M={inputId:{control:"text",description:"Attribut 'id' de l'input",type:{value:"string",required:!0},table:{category:"input"}},inputLabel:{control:"text",description:"Libellé de l'input",type:{value:"string",required:!0},table:{category:"input"}},inputPlaceholder:{control:"text",description:"Placeholder de l'input",type:{value:"string"},table:{category:"input"}}},z={status:{control:{type:"select",labels:{default:"Défaut",valid:"Succès",error:"Erreur"}},description:"Statut du message",options:["default","valid","error"],type:{value:"string"},table:{category:"message"}},errorMessage:{if:{arg:"status",eq:"error"},control:"text",description:"Texte du message d'erreur",type:{value:"string"},table:{category:"message"}},validMessage:{if:{arg:"status",eq:"valid"},control:"text",description:"Texte du message de succès",type:{value:"string"},table:{category:"message"}}},R={size:{control:{type:"select"},description:"Taille de la barre de recherche (défaut: md)",options:["md","lg"]},labelled:{control:"boolean",description:"Indique si le libellé est visible ou non (défaut: false)",type:{value:"boolean"}},...M,...I,...z},r={size:"md",labelled:!1,inputId:"search-input",inputLabel:"Rechercher",inputPlaceholder:"Rechercher",buttonTitle:"Rechercher",buttonLabel:"Rechercher",status:"default",errorMessage:"Texte d’erreur",validMessage:"Texte de succès"},q=e=>({id:e.id||void 0,size:e.size||r.size,labelled:e.labelled||r.labelled,input:{id:e.inputId||r.inputId,label:e.inputLabel||r.inputLabel,placeholder:e.inputPlaceholder||r.inputPlaceholder,error:e.status==="error"?e.errorMessage||r.errorMessage:void 0,valid:e.status==="valid"?e.validMessage||r.validMessage:void 0},button:{label:e.buttonLabel||r.buttonLabel,title:e.buttonTitle||r.buttonTitle,type:"submit"}}),A=e=>T({search:q(e)}),_={id:"search",title:"DSFR/Component/Search",render:A,argTypes:R,args:r},t={tags:["!autodocs"],args:{}},s={tags:["autodocs","!dev"],args:{id:"search-md",inputId:"search-input-md"}},a={tags:["autodocs","!dev"],args:{size:"lg",id:"search-lg",inputId:"search-input-lg"}},o={tags:["autodocs","!dev"],args:{labelled:!0,id:"search-labelled",inputId:"search-input-labelled",inputLabel:"Rechercher un xxx"}},n={tags:["autodocs","!dev"],args:{id:"search-error",inputId:"search-input-error",status:"error",errorMessage:"Message d'erreur"}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,u,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: 'search-md',
    inputId: 'search-input-md'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg',
    id: 'search-lg',
    inputId: 'search-input-lg'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var m,y,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    labelled: true,
    id: 'search-labelled',
    inputId: 'search-input-labelled',
    inputLabel: 'Rechercher un xxx'
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,x,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: 'search-error',
    inputId: 'search-input-error',
    status: 'error',
    errorMessage: 'Message d\\'erreur'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const j=["SearchStory","DefaultStory","SizeLgStory","LabelledStory","ErrorStory"];export{s as DefaultStory,n as ErrorStory,o as LabelledStory,t as SearchStory,a as SizeLgStory,j as __namedExportsOrder,_ as default};
