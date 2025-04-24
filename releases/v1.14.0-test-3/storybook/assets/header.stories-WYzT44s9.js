import{e as X,u as n}from"./renderer-CJGDU4KV.js";import"./_commonjsHelpers-BosuxZz1.js";const Y=e=>X.render("header",e),Z={brandLogoTitle:{control:"text",description:"Intitulé du logo",type:{value:"string",required:!0},table:{category:"brand"}},brandService:{control:"text",description:"Titre du service",type:{value:"string"},table:{category:"brand"}},hasBrandTagline:{control:"boolean",description:"Ajoute une baseline",type:{value:"boolean"},table:{category:"brand"}},brandTagline:{if:{arg:"hasBrandTagline",eq:!0},control:"text",description:"Baseline - précisions sur l‘organisation",type:{value:"string"},table:{category:"brand"}},brandLinkId:{control:"text",description:"Attribut id du lien du bloc marque",type:{value:"string"},table:{category:"brand"}},brandLinkTitle:{control:"text",description:"Attribut title du lien du bloc marque",type:{value:"string"},table:{category:"brand"}},brandLinkHref:{control:"text",description:"Lien du bloc marque",type:{value:"string"},table:{category:"brand"}},hasBrandOperator:{control:"boolean",description:"Ajoute un logo opérateur dans le bloc marque",type:{value:"boolean"},table:{category:"brand"}},brandOperatorAlt:{if:{arg:"hasBrandOperator",eq:!0},control:"text",description:"Texte alternatif du logo opérateur",type:{value:"string"},table:{category:"brand"}},brandOperatorSrc:{if:{arg:"hasBrandOperator",eq:!0},control:"text",description:"Chemin de l‘image du logo opérateur",type:{value:"string"},table:{category:"brand"}},brandOperatorStyle:{if:{arg:"hasBrandOperator",eq:!0},control:"text",description:"Attribut style du logo opérateur (permet de définir la taille)",type:{value:"string"},table:{category:"brand"}}},ee={menuId:{control:"text",description:"Attribut id du bouton de menu",type:{value:"string",required:!0},table:{category:"tools"}},menuModalId:{control:"text",description:"Attribut id de la fenêtre modale du menu",type:{value:"string",required:!0},table:{category:"tools"}},hasToolLinks:{control:"boolean",description:"Ajoute des liens d‘accès rapide",type:{value:"boolean"},table:{category:"tools"}},toolLinks:{if:{arg:"hasToolLinks",eq:!0},control:{type:"object"},description:"Liens d‘accès rapide",type:{value:"array"},table:{category:"tools"}},duplicateToolLinks:{control:"boolean",description:"Duplique les liens d‘accès rapide dans la modale mobile (pour les SPA)",type:{value:"boolean"},table:{category:"tools"}},hasTranslate:{control:"boolean",description:"Ajoute un menu de traduction",type:{value:"boolean"},table:{category:"tools"}},translateId:{if:{arg:"hasTranslate",eq:!0},control:"text",description:"Attribut id du menu de traduction",type:{value:"string"},table:{category:"tools"}},translateCollapseId:{if:{arg:"hasTranslate",eq:!0},control:"text",description:"Attribut id du collapse du menu de traduction",type:{value:"string",required:!0},table:{category:"tools"}},translateButtonTitle:{if:{arg:"hasTranslate",eq:!0},control:"text",description:"Titre du bouton du menu de traduction",type:{value:"string"},table:{category:"tools"}},translateButtonKind:{if:{arg:"hasTranslate",eq:!0},control:{type:"select",labels:{3:"tertiaire",4:"tertiaire sans contour"}},description:"Type du bouton du menu de traduction",options:[3,4],table:{category:"tools"}},translateLanguages:{if:{arg:"hasTranslate",eq:!0},control:{type:"object"},description:"Langues du menu de traduction",type:{value:"array"},table:{category:"tools"}},hasSearch:{control:"boolean",description:"Ajoute un champ de recherche",type:{value:"boolean"},table:{category:"tools"}},searchId:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Attribut id du champ de recherche",type:{value:"string"},table:{category:"tools"}},searchModalId:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Attribut id de la fenêtre modale de recherche",type:{value:"string"},table:{category:"tools"}},searchBtnId:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Attribut id du bouton de recherche",type:{value:"string"},table:{category:"tools"}},searchInputId:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Attribut id du champ de recherche",type:{value:"string"},table:{category:"tools"}},searchLabel:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Libellé du champ de recherche",type:{value:"string"},table:{category:"tools"}},searchPlaceholder:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Placeholder du champ de recherche",type:{value:"string"},table:{category:"tools"}},searchTitle:{if:{arg:"hasSearch",eq:!0},control:"text",description:"Titre du champ de recherche",type:{value:"string"},table:{category:"tools"}}},ae={hasNavigation:{control:"boolean",description:"Ajoute une navigation principale",type:{value:"boolean"},table:{category:"navigation"}},navigationId:{if:{arg:"hasNavigation",eq:!0},control:"text",description:"Attribut id de la navigation principale",type:{value:"string",required:!0},table:{category:"navigation"}},navigationAriaLabel:{if:{arg:"hasNavigation",eq:!0},control:"text",description:"Attribut aria-label de la navigation principale",type:{value:"string",required:!0},table:{category:"navigation"}},navigationItems:{if:{arg:"hasNavigation",eq:!0},control:{type:"object"},description:"Éléments de la navigation principale",type:{value:"array",required:!0},table:{category:"navigation"}}},te={id:{control:"text",description:"Attribut id du header",type:{value:"string"},table:{category:"Attributes"}},...ee,...Z,...ae},r=(e,a="link",U=!1)=>{const o={};switch(o.id=a==="link"?`navigation-item-${e}`:`navigation-${e}`,o.type=a,o.active=U,o.collapsable=a==="menu"||a==="mega-menu",o.collapseId=a==="menu"||a==="mega-menu"?`navigation-${e}`:void 0,a){case"link":o.label=`Titre du lien ${e}`,o.href="#";break;case"menu":o.label=`Menu ${e}`;break;case"mega-menu":o.label=`Mega menu ${e}`,o.close="Fermer le menu",o.leader={title:"Titre éditorialisé",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.",link:{id:"link-leader-"+e,label:"Voir toute la rubrique",iconPlace:"right",icon:"arrow-right-line"}};break}return o},t={id:"header",brandService:"Nom du site / service",hasBrandTagline:!0,brandTagline:"baseline - précisions sur l‘organisation",brandLogoTitle:"Intitulé <br>officiel",brandLinkId:"brand-link",brandLinkHref:"/",brandLinkTitle:"Retour à l'accueil du site - [À MODIFIER - texte alternatif de l'image : nom de l'opérateur ou du site serviciel] - République Française",hasBrandOperator:!1,brandOperatorAlt:"nom de l'opérateur ou du site serviciel",brandOperatorSrc:"img/placeholder.9x16.png",brandOperatorStyle:"width: 3.5rem",menuId:"header-menu-btn",menuModalId:"header-menu",hasNavigation:!0,navigationId:"header-navigation",navigationAriaLabel:"Menu principal",navigationItems:[{...r(1,"menu",!0),items:[r("1-1"),r("1-2","link",!0),r("1-3")]},r(2),{...r(3,"menu"),items:[r("3-1"),{...r("3-2","menu"),items:[r("3-2-1"),r("3-2-2"),r("3-2-3")]},r("3-3")]},{...r(4,"mega-menu"),categories:[{label:"Catégorie 1",href:"#",items:[r("4-1-1","link"),r("4-1-2","link"),r("4-1-3","link")]},{label:"Catégorie 2",href:"#",items:[r("4-2-1","link"),r("4-2-2","link"),r("4-2-3","link")]},{label:"Catégorie 3",href:"#",items:[r("4-3-1","link"),r("4-3-2","link"),r("4-3-3","link")]},{label:"Catégorie 4",href:"#",items:[r("4-4-1","link"),r("4-4-2","link"),r("4-4-3","link")]}]}],duplicateToolLinks:!1,hasToolLinks:!1,toolLinks:{buttons:[{classes:["fr-btn--team"],url:"#",label:"Contact",markup:"a"},{classes:["fr-btn--briefcase"],url:"#",label:"Espace recruteur",markup:"a"}]},hasSearch:!1,searchId:"header-search",searchModalId:"header-search-modal",searchBtnId:"header-search-btn",searchLabel:"Rechercher",searchPlaceholder:"Rechercher",searchInputId:"header-search-input",searchTitle:"Rechercher",hasTranslate:!1,translateId:"header-translate",translateCollapseId:"translate-collapse",translateButtonTitle:"Sélectionner une langue",translateButtonKind:"tertiary",translateLanguages:[{name:"Français",locale:"fr",href:"/fr/",active:!0},{name:"English",href:"/en/",locale:"en"},{name:"Español",href:"/es/",locale:"es"},{name:"Deutsch",href:"/de/",locale:"de"}]},re=e=>{const a={id:e.id||t.id,body:{brand:{logo:{title:e.brandLogoTitle||t.BrandLogoTitle},link:{id:e.brandLinkId||t.brandLinkId,title:e.brandLinkTitle||t.brandLinkTitle,href:e.brandLinkHref||t.brandLinkHref,position:e.hasBrandOperator?"operator":e.brandService===""&&e.brandTagline===""?"logo":"service"}}}};return(e.hasNavigation||e.hasToolLinks||e.hasSearch||e.hasTranslate)&&(a.body.brand.navbar={},a.menu={id:e.menuId||t.menuId,modalId:e.menuModalId||t.menuModalId,tools:{duplicateLinks:e.duplicateToolLinks||t.duplicateToolLinks}},e.hasNavigation&&(a.menu.navigation={id:e.navigationId||t.navigationId,ariaLabel:e.navigationAriaLabel||t.navigationAriaLabel,items:e.navigationItems})),e.brandService!==""&&(a.body.brand.service=a.body.brand.service||{},a.body.brand.service.title=e.brandService||t.brandService),e.hasBrandTagline&&e.brandTagline!==""&&(a.body.brand.service=a.body.brand.service||{},a.body.brand.service.tagline=e.brandTagline||t.brandTagline),e.hasBrandOperator&&(a.body.brand.operator={alt:e.brandOperatorAlt||t.brandOperatorAlt,src:e.brandOperatorSrc||t.brandOperatorSrc,style:e.brandOperatorStyle||t.brandOperatorStyle}),e.hasToolLinks&&(a.body.tools=a.body.tools||{},a.body.tools.links=e.toolLinks||t.toolLinks),e.hasSearch&&(a.body.tools=a.body.tools||{},a.body.tools.search={id:e.searchId||t.searchId,modalId:e.searchModalId||t.searchModalId,input:{id:e.searchInputId||t.searchInputId,label:e.searchLabel||t.searchLabel,placeholder:e.searchPlaceholder||t.searchPlaceholder},button:{id:e.searchBtnId||t.searchBtnId,label:e.searchLabel||t.searchLabel,title:e.searchTitle||t.searchTitle}}),e.hasTranslate&&(a.body.tools=a.body.tools||{},a.body.tools.links=a.body.tools.links||{},a.body.tools.translate={id:e.translateId||t.translateId,collapseId:e.translateCollapseId||t.translateCollapseId,button:{title:e.translateButtonTitle||t.translateButtonTitle,kind:e.translateButtonKind||t.translateButtonKind},languages:e.translateLanguage||t.translateLanguages}),a},ne=e=>Y({header:re(e)}),ie={id:"header",title:"DSFR/Component/Header",render:ne,argTypes:te,args:t},s={tags:["!autodocs"],args:{}},i={tags:["autodocs","!dev"],args:{}},l={tags:["autodocs","!dev"],args:{id:n("header"),brandService:"",brandTagline:"",menuModalId:n("menu-modal"),navigationItems:[r(1),r(2),r(3)]}},d={tags:["autodocs","!dev"],args:{id:n("header"),hasNavigation:!1}},c={tags:["autodocs","!dev"],args:{id:n("header"),hasToolLinks:!0,menuId:n("menu"),menuModalId:n("menu-modal"),hasNavigation:!1,toolLinks:{buttons:[{classes:["fr-btn--team"],url:"#",label:"Contact",markup:"a"},{classes:["fr-btn--briefcase"],url:"#",label:"Espace recruteur",markup:"a"},{classes:["fr-btn--account"],url:"#",label:"Espace particulier",markup:"a"}]}}},u={tags:["autodocs","!dev"],args:{id:n("header"),hasSearch:!0,searchId:n("search"),searchModalId:n("search-modal"),searchBtnId:n("search-btn"),searchInputId:n("search-input"),hasNavigation:!1}},p={tags:["autodocs","!dev"],args:{id:n("header"),hasToolLinks:!0,menuId:n("menu"),menuModalId:n("menu-modal"),hasSearch:!0,searchId:n("search"),searchModalId:n("search-modal"),searchBtnId:n("search-btn"),searchInputId:n("search-input"),hasNavigation:!1,toolLinks:{buttons:[{classes:["fr-btn--team"],url:"#",label:"Contact",markup:"a"},{classes:["fr-btn--briefcase"],url:"#",label:"Espace recruteur",markup:"a"},{classes:["fr-btn--account"],url:"#",label:"Espace particulier",markup:"a"}]}}},h={tags:["autodocs","!dev"],args:{id:n("header"),hasTranslate:!0,translateId:n("translate"),translateCollapseId:n("translate-collapse"),translateButtonKind:3,hasNavigation:!1}},b={tags:["autodocs","!dev"],args:{id:n("header"),hasToolLinks:!0,menuId:n("menu"),menuModalId:n("menu-modal"),hasTranslate:!0,translateId:n("translate"),translateCollapseId:n("translate-collapse"),translateButtonKind:3,hasNavigation:!1}},g={tags:["autodocs","!dev"],args:{id:n("header"),hasBrandOperator:!0,hasNavigation:!1}},m={tags:["autodocs","!dev"],args:{id:n("header"),hasBrandOperator:!0,brandOperatorSrc:"img/placeholder.16x9.png",brandOperatorStyle:"max-width: 9.0625rem;",hasNavigation:!1}};var I,v,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,k,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {}
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var S,L,q;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    brandService: '',
    brandTagline: '',
    menuModalId: uniqueId('menu-modal'),
    navigationItems: [getItemArgs(1), getItemArgs(2), getItemArgs(3)]
  }
}`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var A,B,x;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasNavigation: false
  }
}`,...(x=(B=d.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var O,N,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    hasNavigation: false,
    toolLinks: {
      buttons: [{
        classes: ['fr-btn--team'],
        url: '#',
        label: 'Contact',
        markup: 'a'
      }, {
        classes: ['fr-btn--briefcase'],
        url: '#',
        label: 'Espace recruteur',
        markup: 'a'
      }, {
        classes: ['fr-btn--account'],
        url: '#',
        label: 'Espace particulier',
        markup: 'a'
      }]
    }
  }
}`,...(M=(N=c.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var C,H,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasSearch: true,
    searchId: uniqueId('search'),
    searchModalId: uniqueId('search-modal'),
    searchBtnId: uniqueId('search-btn'),
    searchInputId: uniqueId('search-input'),
    hasNavigation: false
  }
}`,...(E=(H=u.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var j,K,P;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    hasSearch: true,
    searchId: uniqueId('search'),
    searchModalId: uniqueId('search-modal'),
    searchBtnId: uniqueId('search-btn'),
    searchInputId: uniqueId('search-input'),
    hasNavigation: false,
    toolLinks: {
      buttons: [{
        classes: ['fr-btn--team'],
        url: '#',
        label: 'Contact',
        markup: 'a'
      }, {
        classes: ['fr-btn--briefcase'],
        url: '#',
        label: 'Espace recruteur',
        markup: 'a'
      }, {
        classes: ['fr-btn--account'],
        url: '#',
        label: 'Espace particulier',
        markup: 'a'
      }]
    }
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var R,$,w;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasTranslate: true,
    translateId: uniqueId('translate'),
    translateCollapseId: uniqueId('translate-collapse'),
    translateButtonKind: 3,
    hasNavigation: false
  }
}`,...(w=($=h.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var F,D,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    hasTranslate: true,
    translateId: uniqueId('translate'),
    translateCollapseId: uniqueId('translate-collapse'),
    translateButtonKind: 3,
    hasNavigation: false
  }
}`,...(V=(D=b.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var _,z,W;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasBrandOperator: true,
    hasNavigation: false
  }
}`,...(W=(z=g.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var G,J,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasBrandOperator: true,
    brandOperatorSrc: 'img/placeholder.16x9.png',
    brandOperatorStyle: 'max-width: 9.0625rem;',
    hasNavigation: false
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const le=["HeaderStory","HeaderWithNavigationStory","HeaderMinimalStory","ServiceStory","ToolLinksStory","SearchStory","ToolLinksSearchStory","TranslateStory","ToolLinksTranslateStory","VerticalOperatorStory","HorizontalOperatorStory"];export{l as HeaderMinimalStory,s as HeaderStory,i as HeaderWithNavigationStory,m as HorizontalOperatorStory,u as SearchStory,d as ServiceStory,p as ToolLinksSearchStory,c as ToolLinksStory,b as ToolLinksTranslateStory,h as TranslateStory,g as VerticalOperatorStory,le as __namedExportsOrder,ie as default};
