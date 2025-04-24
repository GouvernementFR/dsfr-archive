import{e as be}from"./renderer-CJGDU4KV.js";import"./_commonjsHelpers-BosuxZz1.js";const he=e=>be.render("card",e),fe={src:{control:"text",description:"Source de l'image",type:{value:"string"},table:{category:"header"}},alt:{control:"text",description:"L'alternative de l'image",type:{value:"string"},table:{category:"header"}}},ye={id:{control:"text",description:"Attribut 'id' de la carte",type:{value:"string"},table:{category:"attributes"}},title:{control:"text",description:"Titre de la carte",type:{value:"string",required:!0},table:{category:"content"}},hasDescription:{control:"boolean",description:"Si true, ajoute une description à la carte",table:{category:"content"}},description:{if:{arg:"hasDescription",eq:!0},control:"text",description:"Description de la carte",type:{value:"string"},table:{category:"content"}},hasDetailStart:{control:{type:"boolean"},description:"Ajoute un texte de détail en haut de carte",table:{category:"details"}},detailStart:{if:{arg:"hasDetailStart",eq:!0},control:"text",description:"Texte de détail en haut de carte",type:{value:"string"},table:{category:"details"}},hasDetailStartIcon:{if:{arg:"hasDetailStart",eq:!0},control:"boolean",description:"Ajoute une icône dans le détail en haut de carte",table:{category:"details"}},detailStartIcon:{if:{arg:"hasDetailStartIcon",eq:!0},control:"text",description:"Icône du détail en haut de carte",type:{value:"string"},table:{category:"details"}},hasDetailEnd:{control:{type:"boolean"},description:"Ajoute un texte de détail en bas de la carte",table:{category:"details"}},detailEnd:{if:{arg:"hasDetailEnd",eq:!0},control:"text",description:"Texte de détail en bas de carte",type:{value:"string"},table:{category:"details"}},hasDetailEndIcon:{if:{arg:"hasDetailEnd",eq:!0},control:"boolean",description:"Ajoute une icône dans le détail en bas de la carte",table:{category:"details"}},detailEndIcon:{if:{arg:"hasDetailEndIcon",eq:!0},control:"text",description:"Icône du détail en bas de carte",type:{value:"string"},table:{category:"details"}},hasBadge:{if:{arg:"hasTag",eq:!1},control:"boolean",description:"Si true, ajoute des badges dans le contenu",table:{category:"details"}},hasTag:{if:{arg:"hasBadge",eq:!1},control:"boolean",description:"Si true, ajoute des tags dans le contenu",table:{category:"details"}},markup:{control:{type:"select"},description:"Niveau de titre de la carte (default: h3)",options:["h2","h3","h4","h5"],table:{category:"content"}},enlarge:{if:{arg:"actionMarkup",eq:"a"},control:"boolean",description:"Si true, agrandi la zone de clic à toute la carte",table:{category:"action"}},actionMarkup:{control:{type:"select"},description:"balise de l'actionneur du composant (a, button)",options:["a","button"],table:{category:"action"}},actionTitle:{control:"text",description:`Attribut title de l'actionneur. Si blank = true, il est obligatoire et doit reprendre le titre suivi de la mention "- nouvelle fenêtre"`,type:{value:"string"},table:{category:"attributes"}},href:{if:{arg:"actionMarkup",eq:"a"},control:"text",description:"URL de destination du lien",table:{category:"action"}},blank:{if:{arg:"actionMarkup",eq:"a"},control:"boolean",description:`Ajoute l'attribut target="_blank" pour ouvrir le lien dans une nouvelle fenêtre, nécessite l'ajout d'un attribut title "intitulé - nouvelle fenêtre"`,table:{category:"action"}},noLink:{if:{arg:"enlarge",eq:!1},control:"boolean",description:"Si true, absence d'actionneur",table:{category:"action"}},disabled:{control:"boolean",description:"Si true, retire le href du lien pour le désactiver ou ajoute l'attribut disabled sur le bouton",table:{category:"action"}},size:{control:{type:"select"},description:'Taille de la carte ("md" - default | "sm" | "lg").',options:["sm","md","lg"],table:{category:"size"}},horizontal:{control:"boolean",description:"Si true, passe la carte en mode horizontal",table:{category:"orientation"}},horizontalProportion:{if:{arg:"horizontal",eq:!0},control:{type:"select",labels:{default:"défaut",tier:"1 tier / 2 tiers",half:"moitié / moitié"}},description:"Proportion de l'image par rapport au contenu en horizontal (par défaut 40% / 60%)",options:["default","tier","half"],table:{category:"orientation"}},...fe,hasHeaderBadge:{control:"boolean",description:"Si true, ajoute un badge dans l'en-tête",table:{category:"header"}},imageRatio:{if:{arg:"download",eq:!1},control:{type:"select"},description:"Ratio forcé de l'image",options:["default","32x9","3x2","4x3","1x1","3x4","2x3"],table:{category:"header"}},hasButtons:{if:{arg:"enlarge",eq:!1},control:"boolean",description:"Si true, ajoute des boutons au pied de la carte",table:{category:"footer"}},hasLinks:{if:{arg:"enlarge",eq:!1},control:"boolean",description:"Si true, ajoute des liens au pied de la carte",table:{category:"footer"}},variations:{control:{type:"select"},description:"Variations ésthétiques de la carte",options:["none","grey","no-border","no-background","shadow"],table:{category:"variations"}},download:{control:"boolean",description:"Si true, passe la carte en mode téléchargement",table:{category:"download"}},lang:{if:{arg:"download",eq:!0},control:"text",description:"Ajoute l'attribut hreflang au lien, pour définir la langue du document lié (Ex: 'fr')",table:{category:"download"}},assess:{if:{arg:"download",eq:!0},control:"boolean",description:'Si true, évaluation automatique des détails du fichier à télécharger (poids, format, etc.). <br>Testez avec href = "img/placeholder.16x9.png"',table:{category:"download"}},assessBytes:{if:{arg:"assess",eq:!0},control:"boolean",description:"Si true, change l'unité de mesure de l'évaluation automatique du poids en Bytes",table:{category:"download"}}},a={title:"Intitulé de la carte",hasDescription:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et",hasDetailStart:!1,detailStart:"détail (optionnel)",hasDetailStartIcon:!1,detailStartIcon:"warning-fill",hasDetailEnd:!1,detailEnd:"détail (optionnel)",hasDetailEndIcon:!1,detailEndIcon:"warning-fill",markup:"h3",hasBadge:!1,hasTag:!1,enlarge:!0,actionMarkup:"a",href:"[URL - à modifier]",blank:!1,noLink:!1,disabled:!1,size:"md",horizontal:!1,src:"img/placeholder.16x9.png",alt:"[À MODIFIER - vide ou texte alternatif de l’image]",hasHeaderBadge:!1,imageRatio:"default",hasButtons:!1,hasLinks:!1,variations:"none",download:!1,lang:"",assess:!1,assessBytes:!1},Se=e=>{const t={id:e.id||void 0,download:e.download||a.download,size:e.size||a.size,horizontalProportion:e.horizontalProportion||a.horizontalProportion,content:{title:e.title||a.title,description:e.hasDescription?e.description:void 0,markup:e.markup||a.markup,details:[],actionMarkup:e.actionMarkup||a.actionMarkup,actionTitle:e.actionTitle,href:e.href||a.href,blank:e.blank||a.blank,noLink:e.noLink||a.noLink,disabled:e.disabled||a.disabled,lang:e.lang||a.lang,assess:e.assess||a.assess,badgesGroup:e.hasBadge&&{badges:[{label:"Libellé badge",accent:"purple-glycine"},{label:"Libellé badge",accent:"purple-glycine"}]},tagsGroup:e.hasTag&&{tags:[{label:"Libellé tag"},{label:"Libellé tag"}]}},header:{badgesGroup:e.hasHeaderBadge&&{badges:[{label:"Libellé badge",accent:"purple-glycine"}]}}};return e.actionMarkup==="a"?t.enlarge=e.enlarge:t.enlarge=!0,e.hasDetailStart&&(t.content.details.push({label:e.detailStart,position:"start"}),e.hasDetailStartIcon&&(t.content.details[0].icon=e.detailStartIcon)),e.hasDetailEnd&&(t.content.details.push({label:e.detailEnd,position:"end"}),e.hasDetailEndIcon&&(t.content.details[t.content.details.length-1].icon=e.detailEndIcon)),!e.enlarge&&(e.hasButtons||e.hasLinks)&&(t.footer={buttonsGroup:e.hasButtons&&{buttons:[{label:"Libellé",kind:2},{label:"Libellé",kind:1}],reverse:!0,inline:"lg"},linksGroup:e.hasLinks&&{inline:!0,links:[...Array(2)].map(()=>({label:"Libellé",inline:!0,href:"#",icon:"arrow-right-line",iconPlace:"right"}))}}),e.image!==null&&(t.header.img={src:e.src||a.src,alt:e.alt||a.alt}),!e.download&&e.imageRatio!=="default"&&(t.header.img.ratio=e.imageRatio),e.horizontal&&(t.horizontal={},t.horizontal.proportion=e.horizontalProportion),e.variations!=="none"&&(t.variations=[e.variations]),e.assessBytes===!0&&(t.content.assess="bytes"),t},me=e=>he({card:Se(e)}),r=e=>e.map(t=>me(t)).join(`

`),ke={id:"card",title:"DSFR/Component/Card",render:me,argTypes:ye,args:a},o={args:{}},n={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,size:"sm",description:"Description (optionnelle)"}])},i={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,description:"Description (optionnelle)"}])},s={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,horizontal:!0,hasTag:!0}])},l={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,horizontal:!0,horizontalProportion:"tier",hasBadge:!0}])},d={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,horizontal:!0,horizontalProportion:"half",hasBadge:!0}])},c={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,title:"Télécharger le document XX",download:!0,detailEnd:"Détail obligatoire (Extension - Poids - Langue)"}])},u={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,title:"Télécharger le document XX",actionMarkup:"button",download:!0,description:"Description (optionnelle)",detailEnd:"Détail obligatoire (Extension - Poids - Langue)"}])},p={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,title:"Télécharger le document XX",description:"Les détails du document (format, poids) sont injectés en js automatiquement",download:!0,href:"img/placeholder.16x9.pdf",assess:!0,detailEnd:"PDF"}])},g={tags:["autodocs","!dev"],render:()=>r([{enlarge:!0,title:"Télécharger le document XX",description:"Les détails du document (format, poids, langue) sont injectés en js automatiquement et le poids est en Bytes",download:!0,lang:"en",href:"img/placeholder.16x9.pdf",assess:"bytes",detailLabel:"PDF"}])},m={tags:["autodocs","!dev"],render:()=>r([{hasButtons:!0}])},b={tags:["autodocs","!dev"],render:()=>r([{hasLinks:!0}])},h={tags:["autodocs","!dev"],render:()=>r([{variations:"grey"}])},f={tags:["autodocs","!dev"],render:()=>r([{variations:"no-border"}])},y={tags:["autodocs","!dev"],parameters:{docs:{description:{story:"Fonctionne avec une classe utilitaire de background sur un parent pour propager la couleur sur le hover et le clic.<br> Exemple : `fr-background--alt-orange-terre-battue`"}}},render:()=>r([{variations:"no-background"}])},S={tags:["autodocs","!dev"],render:()=>r([{variations:"shadow"}])};var v,x,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,E,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    size: 'sm',
    description: 'Description (optionnelle)'
  }])
}`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var w,L,q;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    description: 'Description (optionnelle)'
  }])
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var B,T,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    horizontal: true,
    hasTag: true
  }])
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var A,P,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    horizontal: true,
    horizontalProportion: 'tier',
    hasBadge: true
  }])
}`,...(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var X,C,F;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    horizontal: true,
    horizontalProportion: 'half',
    hasBadge: true
  }])
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,H,R;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    title: 'Télécharger le document XX',
    download: true,
    detailEnd: 'Détail obligatoire (Extension - Poids - Langue)'
  }])
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var G,N,V;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    title: 'Télécharger le document XX',
    actionMarkup: 'button',
    download: true,
    description: 'Description (optionnelle)',
    detailEnd: 'Détail obligatoire (Extension - Poids - Langue)'
  }])
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,O,U;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    title: 'Télécharger le document XX',
    description: 'Les détails du document (format, poids) sont injectés en js automatiquement',
    download: true,
    href: 'img/placeholder.16x9.pdf',
    assess: true,
    detailEnd: 'PDF'
  }])
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    enlarge: true,
    title: 'Télécharger le document XX',
    description: 'Les détails du document (format, poids, langue) sont injectés en js automatiquement et le poids est en Bytes',
    download: true,
    lang: 'en',
    href: 'img/placeholder.16x9.pdf',
    assess: 'bytes',
    detailLabel: 'PDF'
  }])
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,Y,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    hasButtons: true
  }])
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    hasLinks: true
  }])
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    variations: 'grey'
  }])
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ie,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    variations: 'no-border'
  }])
}`,...(se=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,de,ce;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'Fonctionne avec une classe utilitaire de background sur un parent pour propager la couleur sur le hover et le clic.<br> Exemple : \`fr-background--alt-orange-terre-battue\`'
      }
    }
  },
  render: () => renders([{
    variations: 'no-background'
  }])
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,ge;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    variations: 'shadow'
  }])
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const De=["CardStory","SizeSmStory","VerticalStory","HorizontalStory","HorizontalTierStory","HorizontalHalfStory","DownloadStory","DownloadButtonStory","DownloadAssessFileStory","DownloadAssessFileEnglishStory","ActionButtonsStory","ActionLinksStory","GreyCardStory","NoBorderCardStory","NoBackgroundCardStory","ShadowedCardStory"];export{m as ActionButtonsStory,b as ActionLinksStory,o as CardStory,g as DownloadAssessFileEnglishStory,p as DownloadAssessFileStory,u as DownloadButtonStory,c as DownloadStory,h as GreyCardStory,d as HorizontalHalfStory,s as HorizontalStory,l as HorizontalTierStory,y as NoBackgroundCardStory,f as NoBorderCardStory,S as ShadowedCardStory,n as SizeSmStory,i as VerticalStory,De as __namedExportsOrder,ke as default};
