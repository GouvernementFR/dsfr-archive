import{t as u,a as c,c as P}from"./tag-arg-types-nStKaiGR.js";import{u as _}from"./renderer-Sx4EFnaK.js";import"./_commonjsHelpers-BosuxZz1.js";const q={size:{...c.size,description:"Taille des tags dans le groupe"},type:{...c.type,description:"Type des tags dans le groupe",table:void 0},groupMarkup:{control:{type:"select"},description:"Type de balise HTML pour la liste du groupe de tags",options:["div","ul"]},hasIcon:{if:{arg:"type",neq:"dismissible"},control:"boolean",description:"Si true, ajoute une icone dans le titre des onglets"}},t=(e=3)=>{const a=[];for(let s=1;s<=e;s++)a.push({label:`${u.label} ${s}`,markup:"span",accent:"défaut",size:"md",href:"[URL - à modifier]",icon:"arrow-right-line",pressed:!1,blank:!1,title:void 0,disabled:!1,id:_("tag-group")});return a},r={size:u.size,type:u.type,groupMarkup:"ul",hasIcon:!1,tags:t()},w=e=>{const a={size:e.size||r.size,type:e.type||r.type,groupMarkup:e.groupMarkup||r.groupMarkup,tags:e.tags||r.tags};for(const s of a.tags)s.type=e.type,e.type==="default"&&(s.markup="span");for(let s=0;s<a.tags.length;s++)e.hasIcon?a.tags[s].icon=a.tags[s].icon||"arrow-right-line":a.tags[s].icon=void 0;return a},L=e=>P({tagsGroup:w(e)}),E={id:"tags-group",title:"DSFR/Component/Tag/Tags-Group",render:L,argTypes:q,args:r},o={tags:["!autodocs"],args:{type:"default"}},n={tags:["autodocs","!dev"],args:{size:"md",type:"default",tags:t()}},p={tags:["autodocs","!dev"],args:{size:"sm",type:"default",tags:t()}},g={tags:["autodocs","!dev"],args:{type:"clickable",tags:t()}},i={tags:["autodocs","!dev"],args:{type:"pressable",tags:t().map((e,a)=>(a===1&&(e.pressed=!0),e))}},d={tags:["autodocs","!dev"],args:{type:"dismissible",tags:t()}};var l,m,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    type: 'default'
  }
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,S,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md',
    type: 'default',
    tags: getTagsData()
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,z,G;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    type: 'default',
    tags: getTagsData()
  }
}`,...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var k,v,D;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    type: 'clickable',
    tags: getTagsData()
  }
}`,...(D=(v=g.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var h,M,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    type: 'pressable',
    tags: getTagsData().map((tag, index) => {
      if (index === 1) {
        tag.pressed = true;
      }
      return tag;
    })
  }
}`,...(x=(M=i.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var A,I,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    type: 'dismissible',
    tags: getTagsData()
  }
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const F=["TagsGroupStory","SizeMdStory","SizeSmStory","TagsGroupClickableStory","TagsGroupPressableStory","TagsGroupDismissibleStory"];export{n as SizeMdStory,p as SizeSmStory,g as TagsGroupClickableStory,d as TagsGroupDismissibleStory,i as TagsGroupPressableStory,o as TagsGroupStory,F as __namedExportsOrder,E as default};
