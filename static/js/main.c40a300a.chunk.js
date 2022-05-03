(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{26:function(t,e,a){t.exports=a(44)},31:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),o=(a(31),a(3)),l=a(4),u=a(6),s=a(5),d=a(10),m=a(1),p=a(24),h=a(13),v=a(11),f=a.n(v),g=a(14),E=a(18),b=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.handleChange,a=t.handleButton;return r.a.createElement("div",{className:"header-div"},r.a.createElement("h2",null,"Loja do Grupo 02"),r.a.createElement("div",{className:"search-cart-div"},r.a.createElement("input",{type:"text",className:"search-input",placeholder:"Digite o nome de uma categoria ou produto","data-testid":"query-input",onChange:e}),r.a.createElement("button",{type:"button",onClick:a,"data-testid":"query-button",className:"search-button"},"Pesquisar"),r.a.createElement(d.b,{to:"/cart","data-testid":"shopping-cart-button"},r.a.createElement(E.a,{className:"shopping-cart-icon"}))))}}]),a}(r.a.Component);function y(){return O.apply(this,arguments)}function O(){return(O=Object(g.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(f.a.mark((function t(e,a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(e,"&q=").concat(a));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=function(t){localStorage.setItem("in_cart",JSON.stringify(t))},k=function(){return JSON.parse(localStorage.getItem("in_cart"))},N=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).readStorage=function(){var e=k();e?t.setState({cart:e}):C([])},t.getFromApi=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:a=e.sent,t.setState({categories:a});case 4:case"end":return e.stop()}}),e)}))),t.handleChange=function(e){var a=e.target;t.setState({inputSearch:a.value})},t.handleCategory=function(e){var a=e.target;t.setState({inputSearch:"",category:a.value},t.handleButton)},t.handleButton=Object(g.a)(f.a.mark((function e(){var a,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.inputSearch,r=a.category,e.next=3,j(r,n);case 3:c=e.sent,i=c.results,t.setState({itemList:i});case 6:case"end":return e.stop()}}),e)}))),t.handleCart=function(e){var a=e.target,n=t.state.itemList.find((function(t){return t.id===a.id}));t.setState((function(t){return{cart:[].concat(Object(h.a)(t.cart),[n])}}),(function(){var e=t.state.cart;C(e)}))},t.state={inputSearch:"",category:"",itemList:[],categories:[],cart:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getFromApi(),this.readStorage()}},{key:"render",value:function(){var t=this,e=this.state,a=e.itemList,n=e.categories;return r.a.createElement("div",{className:"content-div"},r.a.createElement("div",{className:"categories"},r.a.createElement("h3",null,"Categorias:"),n.map((function(e){return r.a.createElement("label",{htmlFor:e.id,key:e.id},r.a.createElement("input",{type:"radio","data-testid":"category",name:"category",id:e.id,value:e.id,onChange:t.handleCategory}),e.name)}))),r.a.createElement("div",{className:"input-products-div"},r.a.createElement("div",{className:"input-div"},r.a.createElement(b,{handleChange:this.handleChange,value:this.inputSearch,handleButton:this.handleButton})),r.a.createElement("div",{className:"all-products-div"},0===a.length?r.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."):a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(d.b,{to:{pathname:"/product/".concat(e.id),state:{product:Object(p.a)({},e),name:e.title,img:e.thumbnail,price:e.price}},"data-testid":"product-detail-link"},r.a.createElement("div",{"data-testid":"product",className:"product-div",key:e.id},r.a.createElement("div",{className:"product-name"},r.a.createElement("h5",null,e.title)),r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:e.thumbnail,alt:e.title}),r.a.createElement("p",{className:"product-price"},"R$".concat(e.price))))),r.a.createElement("button",{"data-testid":"product-add-to-cart",type:"button",onClick:t.handleCart,id:e.id},"Adicionar ao carrinho"))}))),r.a.createElement("div",null)))}}]),a}(r.a.Component),w=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).addProductToState=function(){var e=t.props.price;t.setState({quantity:1,price:e,originalPrice:e})},t.addProduct=function(){var e=t.state.originalPrice;t.setState((function(t){return{quantity:t.quantity+1,isButtonDisabled:!1,price:e*(t.quantity+1)}}))},t.removeOneProduct=function(){var e=t.state,a=e.quantity,n=e.originalPrice;2===a&&t.setState({isButtonDisabled:!0}),t.setState((function(t){return{quantity:t.quantity-1,price:t.price-n}}))},t.removeWholeProduct=function(){console.log("removeu!")},t.state={isButtonDisabled:!0},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.addProductToState()}},{key:"render",value:function(){var t=this.props,e=t.id,a=t.title,n=t.thumbnail,c=this.state,i=c.isButtonDisabled,o=c.quantity,l=c.price;return r.a.createElement("div",{className:"product-cart-div"},r.a.createElement("div",{className:"name-img-div"},r.a.createElement("div",{className:"product-cart-name"},r.a.createElement("h6",{"data-testid":"shopping-cart-product-name"},a)),r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:n,alt:a})),r.a.createElement("div",null)),r.a.createElement("div",{className:"quantity-price-div"},r.a.createElement("div",{className:"quantity-price-div"},r.a.createElement("button",{type:"button",disabled:i,onClick:this.removeOneProduct,id:e,"data-testid":"product-decrease-quantity"},"-"),r.a.createElement("p",{className:"product-quantity","data-testid":"shopping-cart-product-quantity",id:e},"Quantidade: ".concat(o)),r.a.createElement("button",{type:"button",onClick:this.addProduct,id:e,"data-testid":"product-increase-quantity"},"+"),r.a.createElement("p",{className:"product-price"},"R$".concat(l)),r.a.createElement("button",{type:"button",onClick:this.removeWholeProduct},"Remover"))))}}]),a}(n.Component),q=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).itensCount=function(e){return t.state.cart.filter((function(t){return t.id===e})).length},t.readStorage=function(){var e=k();t.setState({cart:e})},t.removeProduct=function(){console.log("removeu!")},t.totalCart=function(){return t.state.cart.map((function(t){return Number(t.price)})).reduce((function(t,e){return t+e}),0)},t.state={cart:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.readStorage()}},{key:"componentDidUpdate",value:function(){this.totalCart()}},{key:"render",value:function(){var t=this.state.cart;return r.a.createElement("div",{className:"cart-div"},r.a.createElement("div",{className:"cart-header"},r.a.createElement("h2",null,"Carrinho de compras"),r.a.createElement(d.b,{to:"/"},"Voltar \xe0 Home")),r.a.createElement("div",{className:"cart-products-div"},0===t.length?r.a.createElement("h3",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"):t.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(w,Object.assign({},t,{totalPriceCallback:function(){}})))}))),r.a.createElement("div",null,r.a.createElement("h3",null,"Total da compra: R$".concat(this.totalCart()))))}}]),a}(n.Component),x=a(16),P=a(17),B=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.email,a=t.rating,n=t.opinion;return r.a.createElement("div",{id:"review-div"},r.a.createElement("div",{className:"review"},r.a.createElement("h2",null,e),"Nota:",r.a.createElement(P.RatingView,{ratingValue:a}),r.a.createElement("p",null,n)))}}]),a}(n.Component),D=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleOpinions=function(t){n.setState({reviews:t})},n.handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(x.a)({},a,r))},n.handleRating=function(t){n.setState({rating:t})},n.handleClick=function(){var t=n.state,e={email:t.email,rating:t.rating,opinion:t.opinion};n.setState((function(t){return{reviews:[].concat(Object(h.a)(t.reviews),[e])}}),(function(){var t=n.state.reviews;localStorage.setItem("opinions",JSON.stringify(t))}))},n.state={reviews:[],email:"",rating:0,opinion:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("opinions"));if(!t)return localStorage.setItem("opinions",JSON.stringify([]));this.handleOpinions(t)}},{key:"render",value:function(){var t=this.state,e=t.reviews,a=t.email,n=t.rating,c=t.opinion;return r.a.createElement("div",null,r.a.createElement("h4",null,"Avalie o produto:"),r.a.createElement("form",null,r.a.createElement("input",{type:"email",name:"email",value:a,placeholder:"Seu e-mail",onChange:this.handleChange}),r.a.createElement("div",null,"Nota:",r.a.createElement(P.Rating,{onClick:this.handleRating,ratingValue:n})),r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",name:"opinion",rows:"5",cols:"21",placeholder:"Digite sua opini\xe3o aqui (opcional)",value:c,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.handleClick},"Avaliar"))),e&&e.map((function(t,e){return r.a.createElement(B,Object.assign({key:e},t))})))}}]),a}(n.Component),M=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).readStorage=function(){var e=k();e?t.setState({cart:e}):C([])},t.handleCart=function(){var e=t.props.location.state.product;t.setState((function(t){return{cart:[].concat(Object(h.a)(t.cart),[e])}}),(function(){var e=t.state.cart;C(e)}))},t.state={cart:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.readStorage()}},{key:"render",value:function(){var t=this.props.location.state,e=t.name,a=t.img,n=t.price,c=t.product;return r.a.createElement("div",{className:"single-product-page"},r.a.createElement(d.b,{to:"/"},"Voltar \xe0 Home"),r.a.createElement(d.b,{"data-testid":"shopping-cart-button",to:"/cart"},r.a.createElement(E.a,{className:"shopping-cart-icon"})),r.a.createElement("div",{className:"single-product-detail"},r.a.createElement("h3",{"data-testid":"product-detail-name"},e),r.a.createElement("img",{src:a,alt:""}),r.a.createElement("h4",null,n)),r.a.createElement("button",{"data-testid":"product-detail-add-to-cart",type:"button",onClick:this.handleCart,id:c.id},"Adiconar ao carrinho"),r.a.createElement(D,null),r.a.createElement(B,null))}}]),a}(n.Component),R=(a(43),function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{exact:!0,path:"/",component:N}),r.a.createElement(m.a,{exact:!0,path:"/cart",component:q}),r.a.createElement(m.a,{exact:!0,path:"/product/:id",component:M})))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c40a300a.chunk.js.map