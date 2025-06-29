import{a as L}from"./button-BTsFrzNs.js";import{b as u,a as b}from"./button-arg-types-BoTU2Z02.js";import"./renderer-3y4n_kVM.js";import"./_commonjsHelpers-BosuxZz1.js";const _={size:{...b.size,description:"Taille des boutons"},hasIcon:{...b.hasIcon,description:"Les boutons ont une icône",table:void 0},iconPlace:{if:{arg:"hasIcon",eq:!0},...b.iconPlace,table:void 0},groupMarkup:{control:{type:"select"},description:"Type de balise HTML pour la liste du groupe de boutons",options:["ul","div"]},inline:{control:{type:"select",labels:{false:"Vertical",true:"En ligne",sm:"En ligne à partir du breakpoint sm",md:"En ligne à partir du breakpoint md",lg:"En ligne à partir du breakpoint lg"}},description:"Disposition des boutons<br>Valeurs:<br>- Vertical : les boutons sont disposés les uns en dessous des autres<br>- en ligne : les boutons sont disposés les uns à côté des autres<br>- En ligne à partir du breakpoint sm : les boutons sont disposés les uns à côté des autres à partir du breakpoint sm<br>- En ligne à partir du breakpoint md : les boutons sont disposés les uns à côté des autres à partir du breakpoint md<br>- En ligne à partir du breakpoint lg : les boutons sont disposés les uns à côté des autres à partir du breakpoint lg",options:[!1,!0,"sm","md","lg"]},equisized:{control:"boolean",description:"Les boutons ont la même largeur. Fixe la largeur des boutons à celle du plus grand bouton du groupe."},align:{control:{type:"select"},description:"Alignement horizontal des boutons dans le groupe",options:["left","center","right"]},reverse:{if:{arg:"align",eq:"right"},description:"Inverse l'ordre des boutons en ligne lorsqu'ils sont spécifiquement alignés à droite",control:"boolean"}},V={size:u.size,hasIcon:u.hasIcon,iconPlace:u.iconPlace,groupMarkup:"ul",inline:!1,equisized:!1,align:"",reverse:!1,buttons:[{label:"libellé du bouton 1",kind:1,icon:"checkbox-circle-line",disabled:!1,id:"",title:""},{label:"libellé du bouton 2",kind:2,icon:"checkbox-circle-line",disabled:!1,id:"",title:""},{label:"libellé du bouton 3",kind:2,icon:"checkbox-circle-line",disabled:!1,id:"",title:""}]},D=e=>{const n={size:e.size,id:e.id||void 0,title:e.title||void 0,buttons:e.buttons,groupMarkup:e.groupMarkup||V.groupMarkup,inline:e.inline,align:e.align,equisized:e.equisized,reverse:e.reverse};if(e.hasIcon){n.iconPlace=e.iconPlace;for(let l=0;l<n.buttons.length;l++)n.buttons[l].icon=n.buttons[l].icon||"checkbox-circle-line"}else for(let l=0;l<n.buttons.length;l++)n.buttons[l].icon=void 0;return n},H=e=>L({buttonsGroup:D(e)}),F=e=>e.map(n=>H(n)).join(`

`),w={id:"buttons-group",title:"DSFR/Component/Button/Buttons-Group",render:H,argTypes:_,args:V},i={tags:["!autodocs"],args:{}},t={tags:["autodocs","!dev"],args:{buttons:[{label:"libellé du bouton 1",kind:1,disabled:!1,id:"",title:""},{label:"libellé du bouton 2",kind:2,disabled:!1,id:"",title:""}]}},s={tags:["autodocs","!dev"],args:{inline:!0,buttons:[{label:"libellé du bouton 1",kind:1,disabled:!1,id:"",title:""},{label:"libellé du bouton 2",kind:2,disabled:!1,id:"",title:""}]}},o={tags:["autodocs","!dev"],render:()=>F([{size:"sm",inline:!0,buttons:[{label:"libellé du bouton sm 1",kind:1,disabled:!1,id:"",title:""},{label:"libellé du bouton sm 2",kind:2,disabled:!1,id:"",title:""},{label:"libellé du bouton sm 3",kind:2,disabled:!1,id:"",title:""}]},{size:"md",inline:!0,buttons:[{label:"libellé du bouton md 1",kind:1,disabled:!1,id:"",title:""},{label:"libellé du bouton md 2",kind:2,disabled:!1,id:"",title:""},{label:"libellé du bouton md 3",kind:2,disabled:!1,id:"",title:""}]},{size:"lg",inline:!0,buttons:[{label:"libellé du bouton lg 1",kind:1,disabled:!1,id:"",title:""},{label:"libellé du bouton lg 2",kind:2,disabled:!1,id:"",title:""},{label:"libellé du bouton lg 3",kind:2,disabled:!1,id:"",title:""}]}])},d={tags:["autodocs","!dev"],args:{inline:!0,buttons:[{label:"libellé du bouton 1",kind:1,disabled:!1,id:"",title:""},{label:"libellé du bouton 2",kind:2,disabled:!1,id:"",title:""},{label:"libellé du bouton 3",kind:2,disabled:!1,id:"",title:""}]}},a={tags:["autodocs","!dev"],args:{inline:!0,buttons:[{label:"libellé du bouton 1",kind:2,disabled:!1,id:"",title:""},{label:"libellé du bouton 2",kind:2,disabled:!1,id:"",title:""},{label:"libellé du bouton 3",kind:2,disabled:!1,id:"",title:""}]}},r={tags:["autodocs","!dev"],args:{inline:!0,buttons:[{label:"libellé du bouton 1",kind:4,disabled:!1,id:"",title:""},{label:"libellé du bouton 2",kind:4,disabled:!1,id:"",title:""},{label:"libellé du bouton 3",kind:3,disabled:!1,id:"",title:""}]}};var c,p,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,f,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    buttons: [{
      label: 'libellé du bouton 1',
      kind: 1,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var E,x,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [{
      label: 'libellé du bouton 1',
      kind: 1,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,z,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    size: 'sm',
    inline: true,
    buttons: [{
      label: 'libellé du bouton sm 1',
      kind: 1,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton sm 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton sm 3',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }, {
    size: 'md',
    inline: true,
    buttons: [{
      label: 'libellé du bouton md 1',
      kind: 1,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton md 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton md 3',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }, {
    size: 'lg',
    inline: true,
    buttons: [{
      label: 'libellé du bouton lg 1',
      kind: 1,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton lg 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton lg 3',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }])
}`,...(v=(z=o.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var h,G,P;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [{
      label: 'libellé du bouton 1',
      kind: 1,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 3',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }
}`,...(P=(G=d.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var q,T,I;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [{
      label: 'libellé du bouton 1',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 2',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 3',
      kind: 2,
      disabled: false,
      id: '',
      title: ''
    }]
  }
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var M,A,B;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [{
      label: 'libellé du bouton 1',
      kind: 4,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 2',
      kind: 4,
      disabled: false,
      id: '',
      title: ''
    }, {
      label: 'libellé du bouton 3',
      kind: 3,
      disabled: false,
      id: '',
      title: ''
    }]
  }
}`,...(B=(A=r.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const J=["ButtonsGroupStory","VerticalStory","HorizontalStory","SizesStory","PrimaryStory","SecondaryStory","TertiaryStory"];export{i as ButtonsGroupStory,s as HorizontalStory,d as PrimaryStory,a as SecondaryStory,o as SizesStory,r as TertiaryStory,t as VerticalStory,J as __namedExportsOrder,w as default};
