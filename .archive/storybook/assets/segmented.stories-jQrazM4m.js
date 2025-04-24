import{u as W,e as j}from"./renderer-CJGDU4KV.js";import"./_commonjsHelpers-BosuxZz1.js";const C={size:{control:{type:"select"},description:"Taille du contrôle segmenté",options:["sm","md"]},legend:{control:"text",description:"Légende du contrôle segmenté",type:{value:"string"}},legendInline:{control:"boolean",description:"Si true, affiche la légende sur la même ligne que le contrôle segmenté",type:{value:"boolean"}},noLegend:{control:"boolean",description:"Si true, n'affiche pas la légende",type:{value:"boolean"}},hint:{control:"text",description:"Texte additionnel du contrôle segmenté",type:{value:"string"}},hasIcon:{control:"boolean",description:"Le contrôle segmenté a une icône"}},t=(e=3,s=!1)=>{const n=[],u=W("segmented");for(let o=1;o<=e;o++)n.push({checked:o===1,label:`libellé ${o}`,name:u,value:o,icon:"checkbox-circle-line",disabled:s&&o===3||!1,id:`${u}-${o}`});return n},m={size:"md",legend:"Légende",legendInline:!1,noLegend:!1,hint:void 0,hasIcon:!1,elements:t()},E=e=>{const s={size:e.size||m.size,legend:e.legend||m.legend,legendInline:e.legendInline||!1,noLegend:e.noLegend||!1,hint:e.hint!==""?e.hint||m.hint:void 0,elements:[...e.elements],id:e.id||void 0};for(let n=0;n<s.elements.length;n++)e.hasIcon?s.elements[n].icon=s.elements[n].icon||"checkbox-circle-line":s.elements[n].icon=void 0;return s},F=e=>j.render("segmented",e),O=e=>F({segmented:E(e)}),B={id:"segmented",title:"DSFR/Component/Segmented",render:O,argTypes:C,args:m},r={tags:["!autodocs"],args:{elements:t()}},a={tags:["autodocs","!dev"],args:{elements:t()}},d={tags:["autodocs","!dev"],args:{hasIcon:!0,elements:t()}},c={tags:["autodocs","!dev"],args:{size:"sm",elements:t()}},l={tags:["autodocs","!dev"],args:{legendInline:!0,elements:t()}},g={tags:["autodocs","!dev"],args:{noLegend:!0,elements:t()}},i={tags:["autodocs","!dev"],args:{elements:t(3,!0)}};var p,S,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    elements: getSegmentedData()
  }
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,h,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    elements: getSegmentedData()
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,D,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    hasIcon: true,
    elements: getSegmentedData()
  }
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var b,z,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    elements: getSegmentedData()
  }
}`,...(x=(z=c.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var T,k,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    legendInline: true,
    elements: getSegmentedData()
  }
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var $,q,A;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    noLegend: true,
    elements: getSegmentedData()
  }
}`,...(A=(q=g.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,N,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['autodocs', '!dev'],
  args: {
    elements: getSegmentedData(3, true)
  }
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const G=["SegmentedStory","DefaultStory","WithIconStory","SizeSmStory","LegendInlineStory","NoLegendStory","HasDisabledStory"];export{a as DefaultStory,i as HasDisabledStory,l as LegendInlineStory,g as NoLegendStory,r as SegmentedStory,c as SizeSmStory,d as WithIconStory,G as __namedExportsOrder,B as default};
