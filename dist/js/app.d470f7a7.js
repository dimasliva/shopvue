(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],d=0,b=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(b.length)b.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],r=!0,a=1;a<c.length;a++){var u=c[a];0!==n[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=c[0]))}return t}var r={},n={app:0},o=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0e9e1961"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var c=r[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.e=function(t){var e=[],c=n[t];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,r){c=n[t]=[e,r]}));e.push(c[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var s=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(d);var c=n[t];if(0!==c){if(c){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,c[1](s)}n[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(c,r,function(e){return t[e]}.bind(null,r));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=s;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"0faf":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23"),n={id:"nav",class:"app"},o=Object(r["i"])("Home"),a=Object(r["i"])(" | "),i=Object(r["i"])("About");function u(t,e,c,u,s,d){var l=Object(r["A"])("router-link"),b=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",n,[Object(r["j"])(l,{to:"/"},{default:Object(r["F"])((function(){return[o]})),_:1}),a,Object(r["j"])(l,{to:"/about"},{default:Object(r["F"])((function(){return[i]})),_:1})]),Object(r["j"])(b)],64)}var s={name:"App"},d=c("6b0d"),l=c.n(d);const b=l()(s,[["render",u]]);var f=b,p=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),O={class:"home"};function j(t,e,c,n,o,a){var i=Object(r["A"])("Cart"),u=Object(r["A"])("Products");return Object(r["t"])(),Object(r["f"])("div",O,[Object(r["j"])(i),Object(r["j"])(u)])}var m=Object(r["g"])("h1",null,"Shopping Cart",-1),g={class:"shopping-cart"},y=Object(r["h"])('<div class="column-labels"><label class="product-image">Image</label><label class="product-details">Product</label><label class="product-price">Price</label><label class="product-quantity">Quantity</label><label class="product-removal">Add/Remove</label><label class="product-line-price">Total</label></div>',1),v={class:"product-image"},h=["src"],P={class:"product-details"},C={class:"product-title"},k={class:"product-description"},w={class:"product-price"},q={class:"product-quantity"},I={key:0,class:"product-description"},A={key:1,class:"product-description"},Q={class:"product-removal"},x=["onClick"],T=["onClick"],_=Object(r["i"])(),S=["onClick"],H=["onClick"],J={class:"product-line-price",style:{float:"right"}},M={class:"totals",style:{float:"right"}},L={class:"totals-item"},E=Object(r["g"])("label",null,"Subtotal",-1),F={class:"totals-value",id:"cart-subtotal"},R=["disabled"];function Y(t,e,c,n,o,a){var i=Object(r["A"])("AlertConfirm");return Object(r["t"])(),Object(r["f"])(r["a"],null,[m,Object(r["g"])("div",g,[y,o.alert?(Object(r["t"])(),Object(r["d"])(i,{key:0})):Object(r["e"])("",!0),(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.products,(function(e){return Object(r["t"])(),Object(r["f"])("div",{class:"product",style:Object(r["p"])(e.qty>0?{border:"1px solid green"}:{"border:":"none"}),key:e.id},[Object(r["g"])("div",v,[Object(r["g"])("img",{src:e.img},null,8,h)]),Object(r["g"])("div",P,[Object(r["g"])("div",C,Object(r["C"])(e.title),1),Object(r["g"])("p",k,Object(r["C"])(e.desc),1)]),Object(r["g"])("div",w,Object(r["C"])(e.price),1),Object(r["g"])("div",q,[e.qty>0?(Object(r["t"])(),Object(r["f"])("p",I,Object(r["C"])(e.qty),1)):(Object(r["t"])(),Object(r["f"])("p",A)),Object(r["g"])("div",Q,[Object(r["g"])("button",{class:"add-product",onClick:function(c){return t.addQtyProduct(e.id)}}," Add ",8,x),Object(r["g"])("button",{onClick:function(c){return t.reduceItemProduct(e.id)},class:"remove-product"}," Reduce ",8,T),_,Object(r["g"])("button",{class:"add-product",onClick:function(c){return t.addToCart(e)}}," Add to Cart ",8,S),Object(r["g"])("button",{onClick:function(c){return t.removeItemProduct(e.id)},class:"remove-product"}," Remove ",8,H)]),Object(r["g"])("div",J,Object(r["C"])(e.total),1)])],4)})),128)),Object(r["g"])("div",M,[Object(r["g"])("div",L,[E,Object(r["g"])("div",F,Object(r["C"])(a.totalPrice),1)])]),Object(r["g"])("button",{class:"checkout",onClick:e[0]||(e[0]=function(){return a.showAlert&&a.showAlert.apply(a,arguments)}),disabled:a.totalPrice<=0,style:Object(r["p"])(a.totalPrice>0?{}:{"background-color":"gray",cursor:"not-allowed"})},"Зказать",12,R)])],64)}var $=c("5530"),z=c("cd21"),D=c("5502"),N={key:0,class:"modal"},V={key:0,class:"message"},B={key:1,class:"message"},G={key:2,class:"message"},K={class:"options"};function U(t,e,c,n,o,a){return o.alert?(Object(r["t"])(),Object(r["f"])("div",N,[0==o.isProcessing?(Object(r["t"])(),Object(r["f"])("p",V,"Make an order worth $ "+Object(r["C"])(a.totalPrice),1)):Object(r["e"])("",!0),1==o.isProcessing?(Object(r["t"])(),Object(r["f"])("p",B,"Loading...")):Object(r["e"])("",!0),2==o.isProcessing?(Object(r["t"])(),Object(r["f"])("p",G,"Success")):Object(r["e"])("",!0),Object(r["g"])("div",K,[0==o.isProcessing?(Object(r["t"])(),Object(r["f"])("button",{key:0,onClick:e[0]||(e[0]=function(){return a.placeOrder&&a.placeOrder.apply(a,arguments)}),class:"btn"},"Yes")):Object(r["e"])("",!0),2==o.isProcessing?(Object(r["t"])(),Object(r["f"])("button",{key:1,onClick:e[1]||(e[1]=function(t){return o.alert=!o.alert}),class:"btn"},"Ok")):Object(r["e"])("",!0),o.isProcessing?Object(r["e"])("",!0):(Object(r["t"])(),Object(r["f"])("button",{key:2,onClick:e[2]||(e[2]=function(t){return o.alert=!o.alert}),class:"btn"},"No"))])])):Object(r["e"])("",!0)}var W={name:"AlertConfirm",data:function(){return{isProcessing:0,orderPlaced:!1,success:!1,alert:!0}},computed:Object($["a"])(Object($["a"])({},Object(D["c"])(["products"])),{},{totalPrice:function(){return this.products.reduce((function(t,e){return t+e.qty*e.price}),0)}}),methods:Object($["a"])(Object($["a"])({},Object(D["b"])(["emptyProducts"])),{},{placeOrder:function(){var t=this;this.isProcessing=!0,setTimeout((function(){t.orderPlaced=!0,t.isProcessing=2,t.emptyProducts()}),1e3),this.isProcessing=1}})};c("d6f2");const X=l()(W,[["render",U],["__scopeId","data-v-b19d5580"]]);var Z=X,tt={name:"Products",components:{AlertConfirm:Z},props:{},data:function(){return{products:z,alert:!1,isProcessing:!1,orderPlaced:!1}},computed:Object($["a"])(Object($["a"])({},Object(D["c"])(["products"])),{},{totalPrice:function(){return this.products.reduce((function(t,e){return t+e.qty*e.price}),0)}}),methods:Object($["a"])(Object($["a"])({},Object(D["b"])(["getProducts","addToCart","addQtyProduct","removeItemProduct","reduceItemProduct","emptyProducts"])),{},{showAlert:function(){return this.alert=!this.alert}}),mounted:function(){this.getProducts()}};c("85ae");const et=l()(tt,[["render",Y]]);var ct=et,rt=function(t){return Object(r["w"])("data-v-810f1530"),t=t(),Object(r["u"])(),t},nt={class:"container"},ot={class:"shopping-cart"},at={class:"shopping-cart-header"},it=rt((function(){return Object(r["g"])("i",{class:"fa fa-shopping-cart cart-icon"},null,-1)})),ut={class:"badge"},st={class:"shopping-cart-total"},dt=rt((function(){return Object(r["g"])("span",{class:"lighter-text"},"Total:",-1)})),lt={class:"main-color-text"},bt={class:"shopping-cart-items"},ft=["src"],pt={class:"item-name"},Ot={class:"item-price"},jt={class:"item-quantity"},mt=rt((function(){return Object(r["g"])("br",null,null,-1)})),gt=["onClick"],yt=["onClick"],vt=["onClick"],ht=["disabled"],Pt={key:1},Ct=rt((function(){return Object(r["g"])("a",{href:"#",class:"button"}," Loading... ",-1)})),kt=[Ct];function wt(t,e,c,n,o,a){return Object(r["t"])(),Object(r["f"])("div",nt,[Object(r["g"])("div",ot,[Object(r["g"])("div",at,[it,Object(r["g"])("span",ut,Object(r["C"])(a.totalQty),1),Object(r["g"])("div",st,[dt,Object(r["g"])("span",lt,"$"+Object(r["C"])(a.totalPrice),1)])]),Object(r["g"])("ul",bt,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(t.cart,(function(e){return Object(r["t"])(),Object(r["f"])("li",{class:"clearfix",style:{"list-style":"none"},key:e.id},[Object(r["g"])("img",{style:{width:"80px"},src:e.img,alt:"item1"},null,8,ft),Object(r["g"])("span",pt,Object(r["C"])(e.title),1),Object(r["g"])("span",Ot,"$"+Object(r["C"])(e.price),1),Object(r["g"])("span",jt,"Quantity: "+Object(r["C"])(e.qty),1),mt,Object(r["g"])("button",{onClick:function(c){return t.addQty(e.id)}},"+",8,gt),Object(r["g"])("button",{onClick:function(c){return t.reduceQty(e.id)}},"-",8,yt),Object(r["g"])("button",{onClick:function(c){return t.removeItem(e.id)}},"x",8,vt)])})),128))]),o.isProcessing?(Object(r["t"])(),Object(r["f"])("div",Pt,kt)):(Object(r["t"])(),Object(r["f"])("a",{key:0,href:"#",disabled:!o.isProcessing,onClick:e[0]||(e[0]=function(){return a.placeOrder&&a.placeOrder.apply(a,arguments)}),class:"button",style:Object(r["p"])(a.totalQty>0?{}:{"background-color":"gray",cursor:"not-allowed"})}," Зказать ",12,ht))])])}var qt={name:"Cart",data:function(){return{isProcessing:!1,orderPlaced:!1}},computed:Object($["a"])(Object($["a"])({},Object(D["c"])(["cart"])),{},{totalPrice:function(){return this.cart.reduce((function(t,e){return t+e.qty*e.price}),0)},totalQty:function(){return this.cart.reduce((function(t,e){return t+e.qty}),0)}}),methods:Object($["a"])(Object($["a"])({},Object(D["b"])(["addQty","reduceQty","removeItem","totalPrice","emptyCart"])),{},{placeOrder:function(){var t=this;return this.isProcessing=!0,setTimeout((function(){t.orderPlaced=!0,t.isProcessing=!1,t.emptyCart()}),1e3),this.alert=!this.alert}})};c("c97d");const It=l()(qt,[["render",wt],["__scopeId","data-v-810f1530"]]);var At=It,Qt={name:"Home",components:{Cart:At,Products:ct}};const xt=l()(Qt,[["render",j]]);var Tt=xt,_t=[{path:"/",name:"Home",component:Tt},{path:"/about",name:"About",component:function(){return c.e("about").then(c.bind(null,"f820"))}}],St=Object(p["a"])({history:Object(p["b"])("/"),routes:_t}),Ht=St,Jt=(c("7db0"),c("d81d"),c("a434"),c("4de4"),Object(r["c"])(f));Jt.use(D["a"]);var Mt=new D["a"].Store({state:function(){return{products:[],cart:[]}},getters:{products:function(t){return t.products},cart:function(t){return t.cart}},actions:{getProducts:function(t){var e=t.commit;e("getProductData")},addToCart:function(t,e){var c=t.commit;c("addItemToCart",e)},addQty:function(t,e){var c=t.commit;c("addQty",e)},addQtyProduct:function(t,e){var c=t.commit;c("addQtyProduct",e)},reduceQty:function(t,e){var c=t.commit;c("reduceQty",e)},removeItem:function(t,e){var c=t.commit;c("removeItem",e)},removeItemProduct:function(t,e){var c=t.commit;c("removeItemProduct",e)},reduceItemProduct:function(t,e){var c=t.commit;c("reduceItemProduct",e)},totalPrice:function(t){var e=t.commit;e("totalPrice")},emptyCart:function(t){var e=t.commit;e("emptyCart")},emptyProducts:function(t){var e=t.commit;e("emptyProducts")}},mutations:{getProductData:function(t){t.products=z},addItemToCart:function(t,e){var c=t.cart.find((function(t){return t.id===e.id}));c?c.qty++:t.cart.push(Object($["a"])(Object($["a"])({},e),{},{qty:1}))},addQtyProduct:function(t,e){var c=t.products.find((function(t){return t.id===e}));c.qty++,c.total=c.total+c.price},removeItemProduct:function(t,e){var c=t.products.map((function(t){return t.id})).indexOf(e);t.products.splice(c,1)},reduceItemProduct:function(t,e){var c=t.products.find((function(t){return t.id===e}));if(c.qty>0)c.qty--;else{var r=t.products.map((function(t){return t.id})).indexOf(e);t.products.splice(r,1)}},emptyProducts:function(t){t.products.splice(0)},addQty:function(t,e){var c=t.cart.find((function(t){return t.id===e}));c.qty++},reduceQty:function(t,e){var c=t.cart.find((function(t){return t.id===e}));c.qty>1?c.qty--:t.cart=t.cart.filter((function(t){return t.id!==e}))},removeItem:function(t,e){t.cart=t.cart.filter((function(t){return t.id!==e}))},emptyCart:function(t){t.cart=[]}},modules:{}});Object(r["c"])(f).use(Mt).use(Ht).mount("#app")},"810f":function(t,e,c){},"85ae":function(t,e,c){"use strict";c("810f")},c97d:function(t,e,c){"use strict";c("0faf")},cd21:function(t){t.exports=JSON.parse('[{"id":0,"title":"Hamster Alex","desc":"The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I\'m a fan.","price":10,"total":10,"qty":0,"img":"https://i.pinimg.com/474x/24/04/f8/2404f8f103eb4e309c6da1fd09a99ab0.jpg"},{"id":1,"title":"Hamster Floumaster","desc":"The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I\'m a fan.","price":20,"total":20,"qty":0,"img":"https://i1.sndcdn.com/avatars-yTxmq1hbdcJOVuwb-AqmJ6g-t500x500.jpg"}]')},d618:function(t,e,c){},d6f2:function(t,e,c){"use strict";c("d618")}});
//# sourceMappingURL=app.d470f7a7.js.map