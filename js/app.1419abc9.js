(function(t){function e(e){for(var r,i,a=e[0],s=e[1],u=e[2],l=0,b=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],r=!0,a=1;a<c.length;a++){var s=c[a];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=c[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var c=r[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=t,i.c=r,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(c,r,function(e){return t[e]}.bind(null,r));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-test/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=s;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("cd49")},"42dc":function(t,e,c){"use strict";c("b4ca")},"631c":function(t,e,c){},b4ca:function(t,e,c){},bcf3:function(t,e,c){"use strict";c("631c")},cd49:function(t,e,c){"use strict";c.r(e);var r=c("7a23");function n(t,e,c,n,o,i){const a=Object(r["m"])("c-main"),s=Object(r["m"])("c-layout");return Object(r["j"])(),Object(r["c"])(s,null,{default:Object(r["o"])(()=>[Object(r["g"])(a)]),_:1})}const o={class:"container"};function i(t,e,c,n,i,a){return Object(r["j"])(),Object(r["e"])("div",o,[Object(r["l"])(t.$slots,"default")])}var a=Object(r["h"])({name:"Layout",components:{},data(){return{}},computed:{},methods:{}}),s=c("6b0d"),u=c.n(s);const d=u()(a,[["render",i]]);var l=d;const b={key:0,class:"row"};function h(t,e,c,n,o,i){const a=Object(r["m"])("c-goods"),s=Object(r["m"])("c-cart");return Object(r["j"])(),Object(r["e"])(r["a"],null,[t.goods.length?(Object(r["j"])(),Object(r["e"])("div",b,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(t.goods,(e,c)=>{var n;return Object(r["j"])(),Object(r["e"])("div",{class:"col col-xl-6",key:e.id},[Object(r["g"])(a,{item:e,cart:t.cart,exchangeRate:t.exchangeRate,previousExchangeRate:t.previousExchangeRate,previousPrice:null===(n=t.previousGoods[c])||void 0===n?void 0:n.price,onAddToCart:t.addToCart},null,8,["item","cart","exchangeRate","previousExchangeRate","previousPrice","onAddToCart"])])}),128))])):Object(r["d"])("",!0),Object(r["g"])(s,{cart:t.cart,exchangeRate:t.exchangeRate,onRemoveFromCart:t.removeFromCart},null,8,["cart","exchangeRate","onRemoveFromCart"])],64)}var O=c("9ab4");const j={class:"goods"},p={open:""},f={class:"col-10"},v={class:"col-7"},m={class:"col-4"},g=["disabled","onClick"],y={class:"col-1"},x=Object(r["f"])("hr",null,null,-1),R={class:"col-2"},C={class:"price"};function P(t,e,c,n,o,i){return Object(r["j"])(),Object(r["e"])("div",j,[Object(r["f"])("details",p,[Object(r["f"])("summary",null,Object(r["n"])(t.item.group),1),Object(r["f"])("div",{class:Object(r["i"])(["row",{_green:t.hasChangedPrice,_red:!1===t.hasChangedPrice}])},[Object(r["f"])("div",f,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(t.item.goods,e=>(Object(r["j"])(),Object(r["e"])("div",{key:e.id,class:"row"},[Object(r["f"])("div",v,[Object(r["f"])("p",null,Object(r["n"])(e.title),1)]),Object(r["f"])("div",m,[e.qty?(Object(r["j"])(),Object(r["e"])("button",{key:0,class:"btn btn-success",type:"button",disabled:t.checkAvailability(e.id,e.qty),onClick:Object(r["p"])(c=>t.$emit("addToCart",{groupId:t.item.id,id:e.id}),["prevent"])},"В корзину",8,g)):Object(r["d"])("",!0)]),Object(r["f"])("div",y,Object(r["n"])(e.qty),1),x]))),128))]),Object(r["f"])("div",R,[Object(r["f"])("b",C,Object(r["n"])(t.price)+" ₽ ",1)])],2)])])}var T=Object(r["h"])({name:"Goods",components:{},emits:["addToCart"],props:{cart:{type:Object,required:!0},item:{type:Object,required:!0},exchangeRate:{type:Number,required:!0},previousExchangeRate:{type:Number,required:!1},previousPrice:{type:Number,required:!1}},data(){return{}},mounted(){this.item,this.exchangeRate},computed:{price(){return Math.floor(this.item.price*this.exchangeRate)},hasChangedPrice(){return this.previousPrice&&this.previousExchangeRate?this.price>Math.floor(this.previousPrice*this.previousExchangeRate):null}},methods:{checkAvailability(t,e){const c=this.cart.items.find(e=>e.id===t&&e.groupId===this.item.id);return!!(c&&c.qty>=e)}}});c("bcf3");const G=u()(T,[["render",P]]);var k=G;const _={key:0,class:"cart"},w=Object(r["f"])("h1",null,"Корзина",-1),I={class:"table"},q=Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[Object(r["f"])("th",{scope:"col"},"Название"),Object(r["f"])("th",{scope:"col"},"Кол-во"),Object(r["f"])("th",{scope:"col"}),Object(r["f"])("th",{scope:"col"})])],-1),E=["onClick"],D={class:"total"};function M(t,e,c,n,o,i){return t.cart.items.length?(Object(r["j"])(),Object(r["e"])("div",_,[w,Object(r["f"])("table",I,[q,Object(r["f"])("tbody",null,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(t.cart.items,e=>(Object(r["j"])(),Object(r["e"])("tr",{key:e.id},[Object(r["f"])("td",null,Object(r["n"])(e.title),1),Object(r["f"])("td",null,Object(r["n"])(e.qty),1),Object(r["f"])("td",null,Object(r["n"])(Math.floor(e.price*t.exchangeRate))+" ₽",1),Object(r["f"])("td",null,[Object(r["f"])("button",{class:"btn btn-danger",type:"button",onClick:Object(r["p"])(c=>t.$emit("removeFromCart",e.id),["prevent"])},"Удалить",8,E)])]))),128))])]),Object(r["f"])("p",D,[Object(r["f"])("b",null," Total: "+Object(r["n"])(Math.floor(t.total*t.exchangeRate))+" ₽ ",1)])])):Object(r["d"])("",!0)}var S=Object(r["h"])({name:"Cart",components:{},emits:["removeFromCart"],props:{cart:{type:Object,required:!0},exchangeRate:{type:Number,required:!0}},data(){return{}},computed:{total(){return this.cart.items.reduce((t,e)=>t+e.price*e.qty,0)}},methods:{}});const U=u()(S,[["render",M]]);var N=U;const F={GROUP_ID:"T",GROUP_TITLE:"G",GOODS:"B",GOOD_TITLE:"N",GOOD_QTY:"T",PRICE:"C"};function L(t){if(!t)return[];const{goods:e,names:c}=t,r=[];return e.forEach(t=>{const e=t[F.GROUP_ID],n=c[e];if(n){const c=Object.values(n[F.GOODS]).map((t,e)=>({qty:t[F.GOOD_QTY],title:t[F.GOOD_TITLE],id:e})),o=t[F.PRICE];r.push({group:n[F.GROUP_TITLE],goods:c,price:o,id:e})}}),r}function A(t,e){const c=t+Math.random()*(e+1-t);return Math.floor(c)}class ${constructor(){this._apiBase="./data"}getUrl(t){return Object(O["a"])(this,void 0,void 0,(function*(){const e=yield fetch(`${this._apiBase}/${t}`);if(!e.ok)throw new Error("Couldn't fetch "+t);return yield e.json()}))}getData(){return Object(O["a"])(this,void 0,void 0,(function*(){return yield this.getUrl("data.json")}))}getNames(){return Object(O["a"])(this,void 0,void 0,(function*(){return yield this.getUrl("names.json")}))}getGoods(){return Object(O["a"])(this,void 0,void 0,(function*(){const t=yield Promise.all([this.getData(),this.getNames()]);return t[0].Success?{goods:t[0].Value.Goods,names:t[1]}:null}))}}var B=new $;const J=15e3;var Q=Object(r["h"])({name:"Main",components:{CGoods:k,CCart:N},data(){return{previousGoods:[],previousExchangeRate:0,goods:[],cart:{items:[],total:0},exchangeRate:A(20,80),names:[],interval:null}},computed:{},mounted(){return Object(O["a"])(this,void 0,void 0,(function*(){yield this.getData(),this.interval=setInterval(this.updateData,J)}))},beforeUnmount(){clearInterval(this.interval),this.interval=null},methods:{addToCart(t){const{groupId:e,id:c}=t,r=this.goods.find(t=>t.id===e),n=null===r||void 0===r?void 0:r.goods.find(t=>t.id===c);if(!n||!r)return;const o=this.cart.items.findIndex(t=>t.id===c&&t.groupId===e);-1!==o?this.cart.items[o].qty++:this.cart.items.push({title:n.title,id:n.id,qty:1,price:r.price,groupId:r.id})},removeFromCart(t){this.cart.items=this.cart.items.filter(e=>e.id!==t)},getData(){return Object(O["a"])(this,void 0,void 0,(function*(){try{const t=yield B.getGoods();t&&(this.names=t.names,this.goods=L(t))}catch(t){console.warn(t.message)}}))},updateData(){return Object(O["a"])(this,void 0,void 0,(function*(){try{const t=yield B.getData();t&&(this.previousGoods=this.goods.slice(),this.goods=L({names:this.names,goods:t.Value.Goods}),this.cart.items=this.cart.items.map(t=>{const e=this.goods.find(e=>e.id===t.groupId),c=Object.assign({},t);return e&&(c.price=e.price),c})),this.previousExchangeRate=this.exchangeRate,this.exchangeRate=A(20,80)}catch(t){console.warn(t.message)}}))}}});const V=u()(Q,[["render",h]]);var Y=V,z=Object(r["h"])({name:"App",components:{CLayout:l,CMain:Y}});c("42dc");const H=u()(z,[["render",n]]);var K=H;Object(r["b"])(K).mount("#app")}});
//# sourceMappingURL=app.1419abc9.js.map