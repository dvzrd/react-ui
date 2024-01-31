import{a,j as s}from"./jsx-runtime-spUR36Au.js";import{r as t}from"./index-4g5l5LRQ.js";import{_ as l}from"./extends-dGVwEr9R.js";import{a as ge,b as _e,c as ee,$ as v,d as D}from"./index-kWkIiMJG.js";import{a as xe}from"./index-rKN9iO4X.js";import{a as ye}from"./index-CfqwQvcg.js";import{$ as Ie,a as re,b as Se,c as ve,d as Ce,e as Ne,f as we,g as Re,h as Ee,i as Pe,j as Te,k as ke,l as Fe,m as Oe,n as Ae,o as Ve,p as De,q as qe,r as Ge,C as Ke,s as Le,t as Be}from"./index-W73qpPqd.js";import{$ as ae}from"./index-TbyQP7nN.js";import{c as I}from"./index-0TwQKh-t.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./createLucideIcon-gE5wKR5d.js";import"./index-l0kDRAV_.js";const L="Menubar",[q,Ue,ze]=ge(L),[ne,Rr]=ye(L,[ze,re]),M=Ie(),te=re(),[je,B]=ne(L),We=t.forwardRef((e,n)=>{const{__scopeMenubar:r,value:o,onValueChange:c,defaultValue:g,loop:m=!0,dir:b,...u}=e,_=_e(b),i=te(r),[x="",f]=ee({prop:o,onChange:c,defaultProp:g}),[y,p]=t.useState(null);return t.createElement(je,{scope:r,value:x,onMenuOpen:t.useCallback($=>{f($),p($)},[f]),onMenuClose:t.useCallback(()=>f(""),[f]),onMenuToggle:t.useCallback($=>{f(U=>U?"":$),p($)},[f]),dir:_,loop:m},t.createElement(q.Provider,{scope:r},t.createElement(q.Slot,{scope:r},t.createElement(Se,l({asChild:!0},i,{orientation:"horizontal",loop:m,dir:_,currentTabStopId:y,onCurrentTabStopIdChange:p}),t.createElement(ae.div,l({role:"menubar"},u,{ref:n}))))))}),oe="MenubarMenu",[Ze,ce]=ne(oe),He=e=>{const{__scopeMenubar:n,value:r,...o}=e,c=D(),g=r||c||"LEGACY_REACT_AUTO_VALUE",m=B(oe,n),b=M(n),u=t.useRef(null),_=t.useRef(!1),i=m.value===g;return t.useEffect(()=>{i||(_.current=!1)},[i]),t.createElement(Ze,{scope:n,value:g,triggerId:D(),triggerRef:u,contentId:D(),wasKeyboardTriggerOpenRef:_},t.createElement(Ve,l({},b,{open:i,onOpenChange:x=>{x||m.onMenuClose()},modal:!1,dir:m.dir},o)))},W="MenubarTrigger",Ye=t.forwardRef((e,n)=>{const{__scopeMenubar:r,disabled:o=!1,...c}=e,g=te(r),m=M(r),b=B(W,r),u=ce(W,r),_=t.useRef(null),i=xe(n,_,u.triggerRef),[x,f]=t.useState(!1),y=b.value===u.value;return t.createElement(q.ItemSlot,{scope:r,value:u.value,disabled:o},t.createElement(ve,l({asChild:!0},g,{focusable:!o,tabStopId:u.value}),t.createElement(Ce,l({asChild:!0},m),t.createElement(ae.button,l({type:"button",role:"menuitem",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":y,"aria-controls":y?u.contentId:void 0,"data-highlighted":x?"":void 0,"data-state":y?"open":"closed","data-disabled":o?"":void 0,disabled:o},c,{ref:i,onPointerDown:v(e.onPointerDown,p=>{!o&&p.button===0&&p.ctrlKey===!1&&(b.onMenuOpen(u.value),y||p.preventDefault())}),onPointerEnter:v(e.onPointerEnter,()=>{if(!!b.value&&!y){var $;b.onMenuOpen(u.value),($=_.current)===null||$===void 0||$.focus()}}),onKeyDown:v(e.onKeyDown,p=>{o||(["Enter"," "].includes(p.key)&&b.onMenuToggle(u.value),p.key==="ArrowDown"&&b.onMenuOpen(u.value),["Enter"," ","ArrowDown"].includes(p.key)&&(u.wasKeyboardTriggerOpenRef.current=!0,p.preventDefault()))}),onFocus:v(e.onFocus,()=>f(!0)),onBlur:v(e.onBlur,()=>f(!1))})))))}),Je=e=>{const{__scopeMenubar:n,...r}=e,o=M(n);return t.createElement(Ne,l({},o,r))},Z="MenubarContent",Qe=t.forwardRef((e,n)=>{const{__scopeMenubar:r,align:o="start",...c}=e,g=M(r),m=B(Z,r),b=ce(Z,r),u=Ue(r),_=t.useRef(!1);return t.createElement(we,l({id:b.contentId,"aria-labelledby":b.triggerId,"data-radix-menubar-content":""},g,c,{ref:n,align:o,onCloseAutoFocus:v(e.onCloseAutoFocus,i=>{if(!!!m.value&&!_.current){var f;(f=b.triggerRef.current)===null||f===void 0||f.focus()}_.current=!1,i.preventDefault()}),onFocusOutside:v(e.onFocusOutside,i=>{const x=i.target;u().some(y=>{var p;return(p=y.ref.current)===null||p===void 0?void 0:p.contains(x)})&&i.preventDefault()}),onInteractOutside:v(e.onInteractOutside,()=>{_.current=!0}),onEntryFocus:i=>{b.wasKeyboardTriggerOpenRef.current||i.preventDefault()},onKeyDown:v(e.onKeyDown,i=>{if(["ArrowRight","ArrowLeft"].includes(i.key)){const x=i.target,f=x.hasAttribute("data-radix-menubar-subtrigger"),y=x.closest("[data-radix-menubar-content]")!==i.currentTarget,$=(m.dir==="rtl"?"ArrowRight":"ArrowLeft")===i.key;if(!$&&f||y&&$)return;let w=u().filter(V=>!V.disabled).map(V=>V.value);$&&w.reverse();const z=w.indexOf(b.value);w=m.loop?ir(w,z+1):w.slice(z+1);const[j]=w;j&&m.onMenuOpen(j)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Xe=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(De,l({},c,o,{ref:n}))}),er=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Re,l({},c,o,{ref:n}))}),rr=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Ee,l({},c,o,{ref:n}))}),ar=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Pe,l({},c,o,{ref:n}))}),nr=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(qe,l({},c,o,{ref:n}))}),tr=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Te,l({},c,o,{ref:n}))}),or=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(ke,l({},c,o,{ref:n}))}),cr=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Fe,l({},c,o,{ref:n}))}),dr=e=>{const{__scopeMenubar:n,children:r,open:o,onOpenChange:c,defaultOpen:g}=e,m=M(n),[b=!1,u]=ee({prop:o,defaultProp:g,onChange:c});return t.createElement(Ge,l({},m,{open:b,onOpenChange:u}),r)},sr=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Oe,l({"data-radix-menubar-subtrigger":""},c,o,{ref:n}))}),ur=t.forwardRef((e,n)=>{const{__scopeMenubar:r,...o}=e,c=M(r);return t.createElement(Ae,l({},c,{"data-radix-menubar-content":""},o,{ref:n,style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))});function ir(e,n){return e.map((r,o)=>e[(n+o)%e.length])}const de=We,lr=He,se=Ye,ue=Je,ie=Qe,br=Xe,le=er,be=rr,pe=ar,pr=nr,fe=tr,me=or,Me=cr,fr=dr,$e=sr,he=ur,F=lr,H=br,Y=ue,A=fr,G=pr,E=t.forwardRef(({className:e,...n},r)=>a(de,{ref:r,className:I("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",e),...n}));E.displayName=de.displayName;const C=t.forwardRef(({className:e,...n},r)=>a(se,{ref:r,className:I("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",e),...n}));C.displayName=se.displayName;const P=t.forwardRef(({className:e,inset:n,children:r,...o},c)=>s($e,{ref:c,className:I("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",n&&"pl-8",e),...o,children:[r,a(Ke,{className:"ml-auto h-4 w-4"})]}));P.displayName=$e.displayName;const T=t.forwardRef(({className:e,...n},r)=>a(he,{ref:r,className:I("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));T.displayName=he.displayName;const N=t.forwardRef(({className:e,align:n="start",alignOffset:r=-4,sideOffset:o=8,...c},g)=>a(ue,{children:a(ie,{ref:g,align:n,alignOffset:r,sideOffset:o,className:I("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...c})}));N.displayName=ie.displayName;const d=t.forwardRef(({className:e,inset:n,...r},o)=>a(be,{ref:o,className:I("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",e),...r}));d.displayName=be.displayName;const k=t.forwardRef(({className:e,children:n,checked:r,...o},c)=>s(pe,{ref:c,className:I("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:r,...o,children:[a("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a(me,{children:a(Le,{className:"h-4 w-4"})})}),n]}));k.displayName=pe.displayName;const R=t.forwardRef(({className:e,children:n,...r},o)=>s(fe,{ref:o,className:I("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[a("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a(me,{children:a(Be,{className:"h-2 w-2 fill-current"})})}),n]}));R.displayName=fe.displayName;const K=t.forwardRef(({className:e,inset:n,...r},o)=>a(le,{ref:o,className:I("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",e),...r}));K.displayName=le.displayName;const h=t.forwardRef(({className:e,...n},r)=>a(Me,{ref:r,className:I("-mx-1 my-1 h-px bg-muted",e),...n}));h.displayName=Me.displayName;const S=({className:e,...n})=>a("span",{className:I("ml-auto text-xs tracking-widest text-muted-foreground",e),...n});S.displayname="MenubarShortcut";try{E.displayName="Menubar",E.__docgenInfo={description:"",displayName:"Menubar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="MenubarTrigger",C.__docgenInfo={description:"",displayName:"MenubarTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="MenubarContent",N.__docgenInfo={description:"",displayName:"MenubarContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="MenubarItem",d.__docgenInfo={description:"",displayName:"MenubarItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="MenubarSeparator",h.__docgenInfo={description:"",displayName:"MenubarSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{K.displayName="MenubarLabel",K.__docgenInfo={description:"",displayName:"MenubarLabel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{k.displayName="MenubarCheckboxItem",k.__docgenInfo={description:"",displayName:"MenubarCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{G.displayName="MenubarRadioGroup",G.__docgenInfo={description:"",displayName:"MenubarRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{R.displayName="MenubarRadioItem",R.__docgenInfo={description:"",displayName:"MenubarRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Y.displayName="MenubarPortal",Y.__docgenInfo={description:"",displayName:"MenubarPortal",props:{}}}catch{}try{T.displayName="MenubarSubContent",T.__docgenInfo={description:"",displayName:"MenubarSubContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="MenubarSubTrigger",P.__docgenInfo={description:"",displayName:"MenubarSubTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{H.displayName="MenubarGroup",H.__docgenInfo={description:"",displayName:"MenubarGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{A.displayName="MenubarSub",A.__docgenInfo={description:"",displayName:"MenubarSub",props:{}}}catch{}try{S.displayName="MenubarShortcut",S.__docgenInfo={description:"",displayName:"MenubarShortcut",props:{}}}catch{}const Er={title:"Components/Menubar",component:E,tags:["autodocs"]},O={args:{},render:e=>s(E,{...e,children:[s(F,{children:[a(C,{children:"File"}),s(N,{children:[s(d,{children:["New Tab ",a(S,{children:"⌘T"})]}),s(d,{children:["New Window ",a(S,{children:"⌘N"})]}),a(d,{disabled:!0,children:"New Incognito Window"}),a(h,{}),s(A,{children:[a(P,{children:"Share"}),s(T,{children:[a(d,{children:"Email link"}),a(d,{children:"Messages"}),a(d,{children:"Notes"})]})]}),a(h,{}),s(d,{children:["Print... ",a(S,{children:"⌘P"})]})]})]}),s(F,{children:[a(C,{children:"Edit"}),s(N,{children:[s(d,{children:["Undo ",a(S,{children:"⌘Z"})]}),s(d,{children:["Redo ",a(S,{children:"⇧⌘Z"})]}),a(h,{}),s(A,{children:[a(P,{children:"Find"}),s(T,{children:[a(d,{children:"Search the web"}),a(h,{}),a(d,{children:"Find..."}),a(d,{children:"Find Next"}),a(d,{children:"Find Previous"})]})]}),a(h,{}),a(d,{children:"Cut"}),a(d,{children:"Copy"}),a(d,{children:"Paste"})]})]}),s(F,{children:[a(C,{children:"View"}),s(N,{children:[a(k,{children:"Always Show Bookmarks Bar"}),a(k,{checked:!0,children:"Always Show Full URLs"}),a(h,{}),s(d,{inset:!0,children:["Reload ",a(S,{children:"⌘R"})]}),s(d,{disabled:!0,inset:!0,children:["Force Reload ",a(S,{children:"⇧⌘R"})]}),a(h,{}),a(d,{inset:!0,children:"Toggle Fullscreen"}),a(h,{}),a(d,{inset:!0,children:"Hide Sidebar"})]})]}),s(F,{children:[a(C,{children:"Profiles"}),s(N,{children:[s(G,{value:"benoit",children:[a(R,{value:"andy",children:"Andy"}),a(R,{value:"benoit",children:"Benoit"}),a(R,{value:"Luis",children:"Luis"})]}),a(h,{}),a(d,{inset:!0,children:"Edit..."}),a(h,{}),a(d,{inset:!0,children:"Add Profile..."})]})]})]})};var J,Q,X;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {},
  render: (args: MenubarProps) => <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
}`,...(X=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Pr=["Default"];export{O as Default,Pr as __namedExportsOrder,Er as default};
