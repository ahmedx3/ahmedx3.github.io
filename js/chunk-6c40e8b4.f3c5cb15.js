(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c40e8b4"],{"13b3":function(t,e,i){},"1bfb":function(t,e,i){},"2af1":function(t,e,i){var n=i("23e7"),s=i("f748");n({target:"Math",stat:!0},{sign:s})},"608c":function(t,e,i){},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},c9e5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{staticClass:"pa-0"},[i("v-card",{staticClass:"pa-4"},[i("v-card-title",[t._v("Portfolio")]),i("v-tabs",{attrs:{"background-color":"transparent",color:"basil"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return i("v-tab",{key:e},[t._v(" "+t._s(e)+" ")])})),1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.works,(function(e){return i("v-tab-item",{key:e},[i("v-container",{attrs:{fluid:""}},[i("v-row",t._l(e,(function(e){return i("v-col",{key:e,attrs:{cols:"12",md:"6"}},[i("v-card",{attrs:{href:e.link,target:"_blank"}},[i("v-img",{attrs:{src:e.image,height:"200px"}}),i("v-card-title",[t._v(" "+t._s(e.title)+" ")]),i("v-card-subtitle",[t._v(" "+t._s(e.description))])],1)],1)})),1)],1)],1)})),1)],1)],1)],1)],1)},s=[],r={data:function(){return{tab:null,items:["Games","Websites"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",works:{games:[{title:"Presentation Rehearsal VR",description:"VR experience that help the player to overcome the fear of public speaking",image:"https://i.ibb.co/cXjtwvv/presentation-VR.png",link:"https://www.youtube.com/watch?v=c4PzLJEB3jY"},{title:"Hanitizer",description:"A room scale virtual realty experience made for African Hackathon 2020",image:"https://i.ibb.co/9wXCL7k/Hanitizer-00c24645.png",link:"https://www.youtube.com/watch?v=4obeP6v67yw&feature=emb_title"},{title:"RoboRush",description:"A game made with WebGL for computer graphics project applying concepts studied",image:"https://i.ibb.co/yhGBRKg/Robo-Rush-Poster-47157abd.jpg",link:"https://www.youtube.com/watch?v=8-ZhiLAAlRI"},{title:"Stuck",description:"Stuck is an OpenVR game in which a player can rewind time and traverse in space",image:"https://i.ibb.co/LQhM8sY/Stuck-285cebf3.jpg",link:"https://www.youtube.com/watch?v=g723FSlWfNc&feature=emb_title"},{title:"What Home Maze To You",description:"A game made in the global game jam ​​2019 where the player wonder in a maze.",image:"https://i.ibb.co/P5fMpRY/What-Home-e51682c0.png",link:"https://www.youtube.com/watch?v=BShojfIE68M"}],websites:[{title:"Whiteboard",description:"Whiteboard is a learning management system made with vue.js, mongodb and node.js",image:"https://user-images.githubusercontent.com/45081989/147889719-cd810a42-fb4e-4b2a-963e-1a4ab2066e29.png",link:"https://github.com/ahmedx3/whiteboard-frontend"},{title:"Reallancing",description:"Reallancing is a web portal that bridges the gap between clients and freelancers",image:"https://user-images.githubusercontent.com/45081989/122282129-5a25df80-ceeb-11eb-8fa0-2e538b39e4d7.png",link:"https://github.com/ahmedx3/Reallancing-Frontend"},{title:"Spotify-Elghalaba",description:"A Spotify Replica Made Using Vue.js, Node.js and MongoDB",image:"https://i.ibb.co/71TgrFr/1591914628801.jpg",link:"https://github.com/ahmedx3/Spotify-El8alaba-FrontEnd"}]}}}},o=r,a=i("2877"),l=i("6544"),c=i.n(l),h=i("b0af"),u=i("99d9"),d=i("62ad"),f=i("a523"),v=i("adda"),p=i("0fd9"),m=i("5530"),g=(i("ac1f"),i("5319"),i("4e82c")),b=i("1c87"),w=i("7560"),x=i("80d2"),y=i("58df"),$=Object(y["a"])(b["a"],Object(g["a"])("tabsBar"),w["a"]),O=$.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({"v-tab":!0},b["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click:function(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle:function(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;return s.attrs=Object(m["a"])(Object(m["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),s.on=Object(m["a"])(Object(m["a"])({},s.on),{},{keydown:function(t){t.keyCode===x["n"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots.default)}}),k=i("9d65"),S=(i("d3b7"),i("159b"),function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))});function C(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function T(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),S(e)}function I(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function B(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return C(t,e)},touchend:function(t){return T(t,e)},touchmove:function(t){return I(t,e)}}}function j(t,e,i){var n=e.value,s=n.parent?t.parentElement:t,r=n.options||{passive:!0};if(s){var o=B(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=o,Object(x["o"])(o).forEach((function(t){s.addEventListener(t,o[t],r)}))}}function _(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var s=n._touchHandlers[i.context._uid];Object(x["o"])(s).forEach((function(t){n.removeEventListener(t,s[t])})),delete n._touchHandlers[i.context._uid]}}var A={inserted:j,unbind:_},R=A,E=Object(y["a"])(k["a"],Object(g["a"])("windowGroup","v-window-item","v-window")),M=E.extend().extend().extend({name:"v-window-item",directives:{Touch:R},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(x["e"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(x["e"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),V=M.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=M.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),P=(i("a9e3"),i("b0c0"),i("1bfb"),i("b85c")),W=(i("2af1"),i("caad"),i("99af"),i("fb6a"),i("608c"),i("9d26")),N=i("0789"),z=i("604c"),H=i("d9bd"),X=i("2b0e"),Y=X["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,s=t.mobileBreakpoint;if(s===this.mobileBreakpoint)return e;var r=parseInt(this.mobileBreakpoint,10),o=!isNaN(r);return o?i<r:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(H["d"])("mobile-break-point","mobile-breakpoint",this)}}),L=i("dc22");function D(t){var e=.501,i=Math.abs(t);return Math.sign(t)*(i/((1/e-2)*(1-i)+1))}function G(t,e,i,n){var s=t.clientWidth,r=i?e.content-t.offsetLeft-s:t.offsetLeft;i&&(n=-n);var o=e.wrapper+n,a=s+r,l=.4*s;return r<=n?n=Math.max(r-l,0):o<=a&&(n=Math.min(n-(o-a-l),e.content-e.wrapper)),i?-n:n}function q(t,e,i){var n=t.offsetLeft,s=t.clientWidth;if(i){var r=e.content-n-s/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var o=n+s/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))}var F=Object(y["a"])(z["a"],Y).extend({name:"base-slide-group",directives:{Resize:L["a"],Touch:R},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(m["a"])(Object(m["a"])({},z["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?D(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+D(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,i=Object(P["a"])(Object(x["d"])(t));try{for(i.s();!(e=i.n()).done;){var n,s=e.value,r=Object(P["a"])(this.items);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(o.$el===s)return void(this.scrollOffset=G(o.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(a){r.e(a)}finally{r.f()}}}catch(a){i.e(a)}finally{i.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(i)];return this.showArrows||n?this.$createElement(W["a"],{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(N["b"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,i,n){var s=i?-1:1,r=s*n+("prev"===t?-1:1)*e.wrapper;return s*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,i=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(i),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,i=t.wrapper,n=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=q(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=G(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,i=e.content,n=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),U=(F.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),X["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})),J=Object(y["a"])(F,U,w["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({},F.options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=F.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,n=this.items,s=t.path,r=e.path,o=!1,a=!1,l=Object(P["a"])(n);try{for(l.s();!(i=l.n()).done;){var c=i.value;if(c.to===r?a=!0:c.to===s&&(o=!0),o&&a)break}}catch(h){l.e(h)}finally{l.f()}!o&&a&&(this.internalValue=void 0)}}},render:function(t){var e=F.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),K=(i("7db0"),i("c740"),i("13b3"),i("afdd")),Q=z["a"].extend({name:"v-window",directives:{Touch:R},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(m["a"])(Object(m["a"])({},z["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,r,o=this,a={click:function(t){t.stopPropagation(),o.changedByDelimiters=!0,i()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},c=null!=(n=null==(s=(r=this.$scopedSlots)[t])?void 0:s.call(r,{on:a,attrs:l}))?n:[this.$createElement(K["a"],{props:{icon:!0},attrs:l,on:a},[this.$createElement(W["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},c)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),Z=Q.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({},Q.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||z["a"].options.methods.getValue.call(this,t,e)}}}),tt=i("a9ad"),et=Object(y["a"])(tt["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),it=i("a452"),nt=Object(y["a"])(tt["a"],it["a"],w["a"]),st=nt.extend().extend({name:"v-tabs",directives:{Resize:L["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(m["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(x["e"])(this.slider.height),left:this.isReversed?void 0:Object(x["e"])(this.slider.left),right:this.isReversed?Object(x["e"])(this.slider.right):void 0,top:this.vertical?Object(x["e"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(x["e"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,n={style:{height:Object(x["e"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,n),this.setBackgroundColor(this.backgroundColor,n),this.$createElement(J,n,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(Z,{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(et,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],n=[],s=this.$slots.default||[],r=s.length,o=0;o<r;o++){var a=s[o];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":e=a;break;case"v-tabs-items":t=a;break;case"v-tab-item":i.push(a);break;default:n.push(a)}else n.push(a)}return{tab:n,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,n),this.genItems(s,r)])}}),rt=Object(a["a"])(o,n,s,!1,null,null,null);e["default"]=rt.exports;c()(rt,{VCard:h["a"],VCardSubtitle:u["a"],VCardTitle:u["c"],VCol:d["a"],VContainer:f["a"],VImg:v["a"],VRow:p["a"],VTab:O,VTabItem:V,VTabs:st,VTabsItems:Z})}}]);
//# sourceMappingURL=chunk-6c40e8b4.f3c5cb15.js.map