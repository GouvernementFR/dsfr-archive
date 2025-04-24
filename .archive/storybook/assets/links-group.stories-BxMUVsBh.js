import{a as h}from"./link-CIsjQqHx.js";import{l as e,a as t}from"./link-arg-types-ByTAq21D.js";import"./renderer-CJGDU4KV.js";import"./_commonjsHelpers-BosuxZz1.js";const I={size:{...t.size},id:{control:"text",description:"Attribut 'id' du groupe de liens",table:{category:"attributes"}},hasIcon:{...t.hasIcon,table:void 0},iconPlace:{if:{arg:"hasIcon",eq:!0},...t.iconPlace,table:void 0},inline:{control:"boolean",description:"Groupe de liens en ligne"}},M={size:e.size,hasIcon:e.hasIcon,iconPlace:e.iconPlace,inline:!1,id:"",links:[{label:e.label+" 1",disabled:!1,icon:!1},{label:e.label+" 2",disabled:!1,icon:!1},{label:e.label+" 3",disabled:!1,icon:!1}]},x=s=>{const n={size:s.size,id:s.id||void 0,inline:s.inline,links:s.links};return s.hasIcon&&(n.iconPlace=s.iconPlace),n},P=s=>h({linksGroup:x(s)}),c=s=>s.map(n=>P(n)).join(`

`),j={id:"links-group",title:"DSFR/Component/Link/Links-Group",render:P,argTypes:I,args:M},l={tags:["!autodocs"],args:{}},r={tags:["autodocs","!dev"],render:()=>c([{size:"sm",links:[{label:e.label+" 1"},{label:e.label+" 2"},{label:e.label+" 3"}]}])},a={tags:["autodocs","!dev"],render:()=>c([{size:"md",links:[{label:e.label+" 1"},{label:e.label+" 2"},{label:e.label+" 3"}]}])},o={tags:["autodocs","!dev"],render:()=>c([{size:"lg",links:[{label:e.label+" 1"},{label:e.label+" 2"},{label:e.label+" 3"}]}])},i={tags:["autodocs","!dev"],args:{inline:!0}};var d,b,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {}
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,g,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    size: 'sm',
    links: [{
      label: linkArgs.label + ' 1'
    }, {
      label: linkArgs.label + ' 2'
    }, {
      label: linkArgs.label + ' 3'
    }]
  }])
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var k,S,z;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    size: 'md',
    links: [{
      label: linkArgs.label + ' 1'
    }, {
      label: linkArgs.label + ' 2'
    }, {
      label: linkArgs.label + ' 3'
    }]
  }])
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var f,y,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  render: () => renders([{
    size: 'lg',
    links: [{
      label: linkArgs.label + ' 1'
    }, {
      label: linkArgs.label + ' 2'
    }, {
      label: linkArgs.label + ' 3'
    }]
  }])
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var G,v,L;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    inline: true
  }
}`,...(L=(v=i.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const q=["LinksGroupStory","SizeSMStory","SizeMDStory","SizeLGStory","HorizontalStory"];export{i as HorizontalStory,l as LinksGroupStory,o as SizeLGStory,a as SizeMDStory,r as SizeSMStory,q as __namedExportsOrder,j as default};
