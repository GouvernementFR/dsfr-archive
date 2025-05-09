import{e as C,u as n}from"./renderer-CJGDU4KV.js";import"./_commonjsHelpers-BosuxZz1.js";const x=i=>C.render("navigation",i),E={id:{control:"text",description:"Attribut id de la navigation principale",type:{value:"string",required:!0}},ariaLabel:{control:"text",description:"Attribut aria-label de la navigation principale",type:{value:"string",required:!0}}},e=(i,t="link",p=!1)=>{const a={};switch(a.id=t==="link"?`navigation-item-${i}`:`navigation-${i}`,a.type=t,a.active=p,a.collapsable=t==="menu"||t==="mega-menu",a.collapseId=t==="menu"||t==="mega-menu"?`navigation-${i}`:void 0,t){case"link":a.label="Intitulé lien",a.href="#";break;case"menu":a.label="Intitulé menu";break;case"mega-menu":a.label="Intitulé mega menu",a.close="Fermer le menu",a.leader={title:"Titre éditorialisé",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.",link:{id:"link-leader-"+i,label:"Voir toute la rubrique",iconPlace:"right",icon:"arrow-right-line"}};break}return a},l={id:"header-navigation",ariaLabel:"Menu principal",items:[{...e("01","menu",!0),items:[e("01-1"),e("01-2","link",!0),e("01-3")]},e("02"),{...e("03","menu"),items:[e("03-1"),{...e("03-2","menu"),items:[e("03-2-1"),e("03-2-2"),e("03-2-3")]},e("03-3")]},{...e("04","mega-menu"),categories:[{label:"Catégorie 1",href:"#",items:[e("04-1-1","link"),e("04-1-2","link"),e("04-1-3","link")]},{label:"Catégorie 2",href:"#",items:[e("04-2-1","link"),e("04-2-2","link"),e("04-2-3","link")]},{label:"Catégorie 3",href:"#",items:[e("04-3-1","link"),e("04-3-2","link"),e("04-3-3","link")]},{label:"Catégorie 4",href:"#",items:[e("04-4-1","link"),e("04-4-2","link"),e("04-4-3","link")]}]}]},S=i=>({id:i.id||l.id,ariaLabel:i.ariaLabel||l.ariaLabel,items:i.items||l.items}),L=i=>x({navigation:S(i)}),N={id:"navigation",title:"DSFR/Component/Navigation",render:L,argTypes:E,args:l},r={tags:["!autodocs"],args:{}},g={tags:["autodocs","!dev"],args:{id:n("navigation"),items:[e(n("nav")),e(n("nav")),e(n("nav"),"link",!0),e(n("nav"))]}},s={tags:["autodocs","!dev"],args:{id:n("navigation"),items:[{...e(n("nav"),"menu",!0),items:[e(n("nav")),e(n("nav"),"link",!0),e(n("nav"))]},{...e(n("nav"),"menu"),items:[e(n("nav")),e(n("nav")),e(n("nav"))]},{...e(n("nav"),"menu"),items:[e(n("nav")),{...e(n("nav"),"menu"),items:[e(n("nav")),e(n("nav")),e(n("nav"))]},e(n("nav"))]}]}},u={tags:["autodocs","!dev"],args:{id:n("navigation"),items:[{...e(n("nav"),"mega-menu"),categories:[{label:"Catégorie 1",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 2",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 3",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 4",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]}]},{...e(n("nav"),"mega-menu",!0),categories:[{label:"Catégorie 1",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 2",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link",!0),e(n("nav"),"link")]},{label:"Catégorie 3",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 4",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]}]},{...e(n("nav"),"mega-menu"),categories:[{label:"Catégorie 1",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 2",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 3",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]},{label:"Catégorie 4",href:"#",items:[e(n("nav"),"link"),e(n("nav"),"link"),e(n("nav"),"link")]}]}]}};var m,o,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(v=(o=r.parameters)==null?void 0:o.docs)==null?void 0:v.source}}};var d,I,k;g.parameters={...g.parameters,docs:{...(d=g.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation'),
    items: [getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav'), 'link', true), getItemArgs(uniqueId('nav'))]
  }
}`,...(k=(I=g.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var c,q,A;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation'),
    items: [{
      ...getItemArgs(uniqueId('nav'), 'menu', true),
      items: [getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav'), 'link', true), getItemArgs(uniqueId('nav'))]
    }, {
      ...getItemArgs(uniqueId('nav'), 'menu'),
      items: [getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav'))]
    }, {
      ...getItemArgs(uniqueId('nav'), 'menu'),
      items: [getItemArgs(uniqueId('nav')), {
        ...getItemArgs(uniqueId('nav'), 'menu'),
        items: [getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav')), getItemArgs(uniqueId('nav'))]
      }, getItemArgs(uniqueId('nav'))]
    }]
  }
}`,...(A=(q=s.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var b,h,f;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation'),
    items: [{
      ...getItemArgs(uniqueId('nav'), 'mega-menu'),
      categories: [{
        label: 'Catégorie 1',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 2',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 3',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 4',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }]
    }, {
      ...getItemArgs(uniqueId('nav'), 'mega-menu', true),
      categories: [{
        label: 'Catégorie 1',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 2',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link', true), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 3',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 4',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }]
    }, {
      ...getItemArgs(uniqueId('nav'), 'mega-menu'),
      categories: [{
        label: 'Catégorie 1',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 2',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 3',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }, {
        label: 'Catégorie 4',
        href: '#',
        items: [getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link'), getItemArgs(uniqueId('nav'), 'link')]
      }]
    }]
  }
}`,...(f=(h=u.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const T=["NavigationStory","LinkStory","MenuStory","MegaMenuStory"];export{g as LinkStory,u as MegaMenuStory,s as MenuStory,r as NavigationStory,T as __namedExportsOrder,N as default};
