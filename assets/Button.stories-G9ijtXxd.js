import{a as i,j as b}from"./jsx-runtime-spUR36Au.js";import{B as d}from"./index-RgxAcC_-.js";import{c as j}from"./createLucideIcon-gE5wKR5d.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-rKN9iO4X.js";import"./extends-dGVwEr9R.js";import"./index-polp_dyw.js";import"./index-0TwQKh-t.js";/**
 * @license lucide-react v0.319.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=j("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.319.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=j("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),H={title:"Components/Button",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","ghost","link","outline","secondary"],description:"Sets the Button variant"},size:{control:"select",options:["default","sm","lg","icon"],description:"Sets the Button size"},asChild:{control:"boolean",description:"Renders the Button as a child element"}}},r={args:{children:"Button"}},a={args:{...r.args,variant:"outline"}},t={args:{...r.args,variant:"ghost"}},n={args:{...r.args,variant:"secondary"}},o={args:{asChild:!0,variant:"link"},render:e=>i(d,{...e,children:i("a",{href:"https://withpulp.com",target:"_blank",rel:"noopener noreferrer",children:"Button"})})},s={args:{variant:"outline"},render:e=>b(d,{...e,children:[i(O,{className:"mr-2 h-4 w-4 animate-spin"}),"Button With Loading"]})},c={args:{variant:"secondary"},render:e=>b(d,{...e,children:[i(z,{className:"mr-2 h-4 w-4"}),"Button With Icon"]})};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,g,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outline'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var B,f,v;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'ghost'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,k,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'secondary'
  }
}`,...(L=(k=n.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var S,x,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    asChild: true,
    variant: 'link'
  },
  render: (args: ButtonProps) => <Button {...args}>
      <a href="https://withpulp.com" target="_blank" rel="noopener noreferrer">
        Button
      </a>
    </Button>
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var W,w,C;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: (args: ButtonProps) => <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button With Loading
    </Button>
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,N,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: (args: ButtonProps) => <Button {...args}>
      <Image className="mr-2 h-4 w-4" />
      Button With Icon
    </Button>
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const J=["Default","Outline","Ghost","Secondary","LinkAsChild","WithLoading","WithIcon"];export{r as Default,t as Ghost,o as LinkAsChild,a as Outline,n as Secondary,c as WithIcon,s as WithLoading,J as __namedExportsOrder,H as default};
