import{B as g}from"./basis-tmdZkPxa.js";/* empty css             */const m=["sm","md","lg"];class p extends g{constructor(s={id:"logo",classes:[],attributes:{},size:"md",title:"République<br>Française"}){super(s),this._size=s.size,this._title=s.title}get size(){return this._size}set size(s){m.includes(s)&&(this._size=s)}get title(){return this._title}set title(s){this._title=s}get classes(){const s=["fr-logo",...super.classes];return this._size!=="md"&&s.push(`fr-logo--${this._size}`),s}get html(){return`<p ${this.includeClasses()} ${this.includeAttributes()}>${this._title}</p>`}}const u="République<br>Française",z={title:"Example/Logo",tags:["autodocs"],render:({...r})=>new p(r).html,argTypes:{title:{control:"text"},size:{control:{type:"select"},options:["sm","md","lg"],default:"md"}}},e={args:{size:"lg",title:u}},t={args:{size:"sm",title:u}};var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    title: TITLE
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var a,n,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    title: TITLE
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const _=["Large","Small"];export{e as Large,t as Small,_ as __namedExportsOrder,z as default};
//# sourceMappingURL=Logo.stories-BXc831up.js.map
