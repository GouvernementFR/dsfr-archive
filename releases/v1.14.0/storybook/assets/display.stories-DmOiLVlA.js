import{r as i}from"./modal-DP1Acdqp.js";import{r as k}from"./button-BTsFrzNs.js";import{r as P,b as S}from"./header-arg-types-D4oYhwQy.js";import{f as v,r as L,b as F}from"./footer-arg-types-Cq4zIfr7.js";import{r as T}from"./fieldset-59UmsJWr.js";import"./renderer-3y4n_kVM.js";import"./_commonjsHelpers-BosuxZz1.js";const o=(e,t,b,D)=>({type:"radio",inline:!1,data:{id:`fr-radios-theme-${e}`,label:t,value:e,size:"md",name:"fr-radios-theme",rich:!0,hint:D,pictogram:{name:b}}}),x=e=>({id:"display-fieldset",legend:"Choisissez un thème pour personnaliser l’apparence du site.",inline:!1,choice:!0,elements:[o("light","Thème clair","sun"),o("dark","Thème sombre","moon"),o("system","Système","system","Utilise les paramètres système")]}),A=()=>`<div id="fr-display" class="fr-display">${T({fieldset:x()})}</div>`,H={id:{control:"text",description:"Attribut id de la modale du paramètre d'affichage",type:{value:"string",required:!0}}},h={id:"display"},n=e=>({id:e.id||h.id,title:"Paramètres d’affichage",size:"sm",body:A()}),z=e=>k({button:{id:"display-button",label:"Paramètres d'affichage",classes:["fr-btn--display"],attributes:{"aria-controls":e.id,"data-fr-opened":!1}}})+i({modal:n(e)}),E=e=>P({header:S(e)})+i({modal:n({id:"header-display"})}),G=e=>L({footer:F(e)})+i({modal:n({id:"footer-display"})}),R={id:"display",title:"DSFR/Component/Display",render:z,argTypes:H,args:h},r={tags:["autodocs"],args:{}},a={tags:["autodocs","!dev"],render:()=>E({id:"header",hasToolLinks:!0,toolLinks:{buttons:[{label:"Paramètres d'affichage",classes:["fr-icon-theme-fill","fr-btn--icon-left"],attributes:{"aria-controls":"header-display","data-fr-opened":!1}}]},hasNavigation:!1})},s={tags:["autodocs","!dev"],render:()=>G({id:"footer",bottomLinks:[...v.bottomLinks,{markup:"button",label:"Paramètres d'affichage",classes:["fr-icon-theme-fill","fr-btn--icon-left"],attributes:{"aria-controls":"footer-display","data-fr-opened":!1}}]})};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['autodocs'],
  args: {}
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,f,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renderHeaderDisplay({
    id: 'header',
    hasToolLinks: true,
    toolLinks: {
      buttons: [{
        label: 'Paramètres d\\'affichage',
        classes: ['fr-icon-theme-fill', 'fr-btn--icon-left'],
        attributes: {
          'aria-controls': 'header-display',
          'data-fr-opened': false
        }
      }]
    },
    hasNavigation: false
  })
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renderFooterDisplay({
    id: 'footer',
    bottomLinks: [...footerArgs.bottomLinks, {
      markup: 'button',
      label: 'Paramètres d\\'affichage',
      classes: ['fr-icon-theme-fill', 'fr-btn--icon-left'],
      attributes: {
        'aria-controls': 'footer-display',
        'data-fr-opened': false
      }
    }]
  })
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const U=["DisplayStory","HeaderDisplayStory","FooterDisplayStory"];export{r as DisplayStory,s as FooterDisplayStory,a as HeaderDisplayStory,U as __namedExportsOrder,R as default};
