(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[5],{111:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAC/ElEQVQoz23RX2gTdwAH8O/v97veXWI9m7ukTVI6m+r8A52esgepFYLKYHsRIfoguj2Kr/VJhm/2XRCUwdgYKj5UUGFs4MPWNSEWKS50daZrTfOn9mJMmjbJJZfr3f320uke/Lx++b58vwQAUnGdUlEcI5QmwfGL27XOjU9n2tiWiut+JslTIPiKe94Jz7bT49MZj6TiOmWyPOaPDiZHzp5Ds7CC0tNfH241GpfHpzPrqbiu9ijKd0NffJnYuTuG3KMptNfenHAtK005oDBJSsZOnkLj9iTY/CwGx44nZFW7lYrruqxqtwbHjifY/CwatycRO3kKTJKSAFeEluM6ju0sdMrGqBCKwCuvQhJ6MDA6eqG6vHwhuHcvpOISHGMVQiiCTtmAaTsLluM57H6x4myY7bk9W+0j2ujhaI9jg1fLkHoEaJ8dAlvLwzNKEIIDcGMH8OrZs7mbL15dvv53vsAA8MVW561gd/+KcvdgYHjPkEgAXqvAK60AZhNM7Uc3NIjF+YX0vfnFiQer7+YAuGx7UO/Pjdbbz31CfUAWz6uxEfD1GghlIJRBGNkPYyWP50u5icls8XcAWwDA/ndHaCTcfyUYDuuy1QaxLVDKQBkDBQGR/dAIb18M96V/zJdb78upuK7Kvb03I8OfXAowAM0N0B0KWDAEAgpiNuHzyRAURbfMdvTrqDr9Q77cIam47hdl+aehfZ8mdgkEMFuAJKPBCer1TQQCu6AQDnQtYEcvNh2O0j9LD23L+oYCEAEk1EAfqN0F9flhegTZXGHmSebl1WyuMGN6BNTnB7W7UAN9AJAAuMgisuht2E47CPe0Fg7DtGwsLOfSj5cK397IFn/u425Wg7dfDQSG5J0KVpZf449i+Vqm3pxhyeqm27S3spLr1mWzdbpYeTd3d7EwcSdnPAfQmV1vGsxxXobhHt6s1qK/FdauTRWM7++XKk3y39rjmhLsl8RjLueVJ0btBQAHHwhnItpRRkh/pWvPpmqNKj5CAEDxcXQ7f+9fbOhUVNy/u3YAAAAASUVORK5CYII="},114:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(7),c=n(0),u=n.n(c),i=n(19),l=n(52),o=n(111),m=n.n(o),s=n(11),A=n(10);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(c.useContext)(s.a),t=Object(c.useContext)(i.a),n=Object(r.a)(t,2),a=n[0],o=n[1],f=Object(c.useContext)(A.a).translate;function b(e){e.preventDefault();var t=e.target.name;o(a.filter((function(e){return e.title!==t})))}function d(e){var t=e.target.name;o((function(e){return e.map((function(e){return e.title===t?p({},e,{count:e.count+1}):e}))}))}function E(e){var t=e.target.name;o((function(e){return e.map((function(e){return e.count>1&&e.title===t?p({},e,{count:e.count-1}):e}))}))}return u.a.createElement("div",{className:"shopping-cart"},0===a.length?u.a.createElement("p",{className:"ph1"},u.a.createElement("h1",null,f("basket"))):u.a.createElement("div",{className:"divShopping"},u.a.createElement("h3",{id:"title"},f("ShoppingCart")),u.a.createElement("div",null," ",a.map((function(e){return u.a.createElement("div",{key:e.title},u.a.createElement("div",{className:"cart-img-cont"},u.a.createElement("img",{className:"img",src:e.src,alt:e.title})),u.a.createElement("div",{className:"priceAndName"},u.a.createElement("h3",{className:"name"},e.title),u.a.createElement("p",{className:"price"},e.price," ",f("AMD")," ")),u.a.createElement("div",{className:"buttons"},u.a.createElement("button",{id:"button-",name:e.title,onClick:E},"-"),u.a.createElement("button",{id:"buttonCount",disabled:!0},e.count),u.a.createElement("button",{id:"button-",name:e.title,onClick:d},"+"),u.a.createElement("img",{src:m.a,className:"remove",onClick:b,name:e.title,alt:"remove"})),u.a.createElement("hr",null))}))),u.a.createElement(l.a,null),u.a.createElement("button",{className:"checkout",onClick:function(){if(e){if("admin@gmail.com"===e.email)return null;a.length>0?(alert("Thank you for your purchase, your order has been sent to: ".concat(e.address)),o([])):alert("Your cart is empty")}else alert(f("error"))}},f("checkout"))))}}}]);
//# sourceMappingURL=5.a884f596.chunk.js.map