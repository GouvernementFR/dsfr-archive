import{e as G}from"./renderer-CJGDU4KV.js";import"./_commonjsHelpers-BosuxZz1.js";const H=e=>G.render("alert.ejs",e),K={buttonCloseLabel:{if:{arg:"dismissible",eq:!0},control:"text",description:"Libellé du bouton de fermeture",type:{value:"string",required:!0},table:{category:"button close"}},buttonCloseOnClick:{if:{arg:"dismissible",eq:!0},control:"text",description:"Code JavaScript à exécuter lors du clic sur le bouton de fermeture",type:{value:"string"},table:{category:"button close"}}},Q={hasTitle:{control:"boolean",description:"L'alerte a un titre (obligatoire en taille md)"},title:{if:{arg:"hasTitle",eq:!0},control:"text",description:"Titre de l'alerte",type:{value:"string"}},text:{control:"text",description:"Description de l'alerte",type:{value:"string"}},type:{control:{type:"select",labels:{default:"Défaut",success:"Succès",error:"Erreur",info:"Information",warning:"Attention"}},description:"Type d'alerte<br>Valeurs :<br>- Défaut : Alerte sans couleur<br>- Succès : Alerte verte pour indiquer une action ou une tâche terminée avec succès.<br>- Erreur : Alerte rouge à utiliser quand il y a plusieurs erreurs dans un formulaire, ou des erreurs bloquantes à remonter pour l’utilisateur.<br>- Information : Alerte bleue à utiliser pour mettre en exergue des informations importantes.<br>- Attention : Alerte orange à utiliser à utiliser pour mettre en exergue des risques ou points d’attention importants.",options:["default","success","error","info","warning"]},size:{control:{type:"select"},description:"Taille de l'alerte",options:["sm","md"]},id:{control:"text",description:"Attribut 'id' de l'alerte",table:{category:"attributes"}},dismissible:{control:"boolean",description:"L'alerte est refermable"},icon:{if:{arg:"type",eq:"default"},control:"text",description:"Icône personnalisée sur l'alerte"},...K},t={hasTitle:!0,title:"Lorem ipsum dolor",text:"sit amet, consectetur adipiscing elit. Nullam id purus nec purus ultricies lacinia. Nullam nec purus nec purus ultricies lacinia.",type:"default",size:"md",id:"",icon:"",dismissible:!1,buttonCloseLabel:"Masquer le message",buttonCloseOnClick:"const alert = this.parentNode; alert.parentNode.removeChild(alert)"},U=e=>{const s={text:e.text||t.text,size:e.size||t.size,icon:e.icon||t.icon,dismissible:e.dismissible||t.dismissible,id:e.id||void 0};return e.hasTitle&&(s.title=e.title||t.title),e.type!=="default"&&(s.type=e.type),s.dismissible&&(s.button={label:e.buttonCloseLabel||t.buttonCloseLabel,attributes:{title:e.buttonCloseLabel||t.buttonCloseLabel,onClick:e.buttonCloseOnClick!==null?e.buttonCloseOnClick||t.buttonCloseOnClick:void 0}}),s},B=e=>H({alert:U(e)}),r=e=>e.map(s=>B(s)).join(`

`),Z={id:"alert",title:"DSFR/Component/Alert",render:B,argTypes:Q,args:t},o={tags:["!autodocs"],args:{}},i={tags:["autodocs","!dev"],render:()=>r([{type:"success",hasTitle:!0,title:"Titre du message de succès",text:"Texte du message"}])},n={tags:["autodocs","!dev"],render:()=>r([{type:"error",hasTitle:!0,title:"Titre du message d'erreur",text:"Texte du message"}])},a={tags:["autodocs","!dev"],render:()=>r([{type:"info",hasTitle:!0,title:"Titre du message d'information",text:"Texte du message"}])},l={tags:["autodocs","!dev"],render:()=>r([{type:"warning",hasTitle:!0,title:"Titre du message d'avertissement",text:"Texte du message"}])},u={tags:["autodocs","!dev"],render:()=>r([{size:"sm",type:"success",hasTitle:!1,text:"Succès : Description détaillée du message..."},{size:"sm",type:"error",hasTitle:!1,text:"Erreur : Description détaillée du message..."},{size:"sm",type:"info",hasTitle:!1,text:"Information : Description détaillée du message..."},{size:"sm",type:"warning",hasTitle:!1,text:"Attention : Description détaillée du message..."}])},d={tags:["autodocs","!dev"],render:()=>r([{hasTitle:!0,type:"success",title:"Succès : Lorem ipsum dolor sit amet"},{hasTitle:!0,type:"error",title:"Erreur : Lorem ipsum dolor sit amet"},{hasTitle:!0,type:"info",title:"Information : Lorem ipsum dolor sit amet"},{hasTitle:!0,type:"warning",title:"Attention : Lorem ipsum dolor sit amet"}])},c={tags:["autodocs","!dev"],render:()=>r([{type:"info",title:"Information : titre du message",hasTitle:!0,text:"Cliquer sur la croix pour fermer l'alerte",dismissible:!0}])},m={tags:["autodocs","!dev"],render:()=>r([{type:"info",title:"Information : titre du message",hasTitle:!0,text:"Cliquer sur la croix pour fermer l'alerte",dismissible:!0,buttonCloseOnClick:null}])},p={tags:["autodocs","!dev"],render:()=>r([{type:"default",hasTitle:!0,icon:"lock-fill"}])};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,x,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'success',
    hasTitle: true,
    title: 'Titre du message de succès',
    text: 'Texte du message'
  }])
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,h,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'error',
    hasTitle: true,
    title: 'Titre du message d\\'erreur',
    text: 'Texte du message'
  }])
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,E,A;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'info',
    hasTitle: true,
    title: 'Titre du message d\\'information',
    text: 'Texte du message'
  }])
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,z,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'warning',
    hasTitle: true,
    title: 'Titre du message d\\'avertissement',
    text: 'Texte du message'
  }])
}`,...(D=(z=l.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var I,q,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    size: 'sm',
    type: 'success',
    hasTitle: false,
    text: 'Succès : Description détaillée du message...'
  }, {
    size: 'sm',
    type: 'error',
    hasTitle: false,
    text: 'Erreur : Description détaillée du message...'
  }, {
    size: 'sm',
    type: 'info',
    hasTitle: false,
    text: 'Information : Description détaillée du message...'
  }, {
    size: 'sm',
    type: 'warning',
    hasTitle: false,
    text: 'Attention : Description détaillée du message...'
  }])
}`,...(k=(q=u.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var w,O,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    hasTitle: true,
    type: 'success',
    title: 'Succès : Lorem ipsum dolor sit amet'
  }, {
    hasTitle: true,
    type: 'error',
    title: 'Erreur : Lorem ipsum dolor sit amet'
  }, {
    hasTitle: true,
    type: 'info',
    title: 'Information : Lorem ipsum dolor sit amet'
  }, {
    hasTitle: true,
    type: 'warning',
    title: 'Attention : Lorem ipsum dolor sit amet'
  }])
}`,...(N=(O=d.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var j,J,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'info',
    title: 'Information : titre du message',
    hasTitle: true,
    text: 'Cliquer sur la croix pour fermer l\\'alerte',
    dismissible: true
  }])
}`,...(M=(J=c.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var _,R,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'info',
    title: 'Information : titre du message',
    hasTitle: true,
    text: 'Cliquer sur la croix pour fermer l\\'alerte',
    dismissible: true,
    buttonCloseOnClick: null
  }])
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var F,P,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    type: 'default',
    hasTitle: true,
    icon: 'lock-fill'
  }])
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const $=["AlertStory","SuccessStory","ErrorStory","InformationStory","WarningStory","SizeSmStory","SizeMdStory","DismissibleStory","DismissibleNoJsStory","IconCustomStory"];export{o as AlertStory,m as DismissibleNoJsStory,c as DismissibleStory,n as ErrorStory,p as IconCustomStory,a as InformationStory,d as SizeMdStory,u as SizeSmStory,i as SuccessStory,l as WarningStory,$ as __namedExportsOrder,Z as default};
