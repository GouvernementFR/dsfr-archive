import{e as q}from"./renderer-3y4n_kVM.js";import"./_commonjsHelpers-BosuxZz1.js";const f=e=>q.render("logo",e),h={title:{control:"text",description:"Titre du logo (nom de l'entité)",type:{value:"string",required:!0}},size:{control:{type:"select"},description:"Taille du logo",options:["sm","md","lg"]}},c={title:"INTITULÉ <br>OFFICIEL",size:"md"},I=e=>({title:e.title||c.title,size:e.size||c.size}),C=e=>f({logo:I(e)}),O={id:"logo",title:"DSFR/Component/Logo",render:C,argTypes:h,args:c},r={tags:["!autodocs"],args:{}},s={tags:["autodocs","!dev"],args:{size:"sm"}},o={tags:["autodocs","!dev"],args:{size:"md"}},t={tags:["autodocs","!dev"],args:{size:"lg"}},a={tags:["autodocs","!dev"],args:{title:"République <br>Française"}},n={tags:["autodocs","!dev"],args:{title:"Secrétaire d’État <br>chargé(e) de <br>l’égalité entre les <br>femmes et les <br>hommes et de la <br>lutte contre les <br>discriminations"}};var i,d,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,S,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md'
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,y,v;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,L,E;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    title: 'République <br>Française'
  }
}`,...(E=(L=a.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var F,R,T;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    title: 'Secrétaire d’État <br>chargé(e) de <br>l’égalité entre les <br>femmes et les <br>hommes et de la <br>lutte contre les <br>discriminations'
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const j=["LogoStory","SizeSmStory","SizeMdStory","SizeLgStory","RepubliqueFrançaiseStory","LongStory"];export{r as LogoStory,n as LongStory,a as RepubliqueFrançaiseStory,t as SizeLgStory,o as SizeMdStory,s as SizeSmStory,j as __namedExportsOrder,O as default};
