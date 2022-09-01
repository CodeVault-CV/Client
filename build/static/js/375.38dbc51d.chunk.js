"use strict";(self.webpackChunkalgong=self.webpackChunkalgong||[]).push([[375],{47360:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(71742),u=n(98545),i=n(28054),a=n(93713),s=n(64387),c=n(68096),o=n(58406),h=n(6664),l=n(41450),d=n(80184);function p(e){var t=e.value,n=e.isMine,r=e.codeParser,u=e.language,i=e.handleChange,a=e.handleSelectChange;return(0,d.jsxs)("div",{children:[(0,d.jsx)(c.Z,{sx:{m:1,minWidth:70},size:"small",children:(0,d.jsxs)(o.Z,{value:u,onChange:a,sx:{height:40},children:[(0,d.jsx)(s.Z,{value:"cpp",children:"C++"}),(0,d.jsx)(s.Z,{value:"java",children:"Java"}),(0,d.jsx)(s.Z,{value:"javascript",children:"JavaScript"}),(0,d.jsx)(s.Z,{value:"kotlin",children:"Kotlin"}),(0,d.jsx)(s.Z,{value:"python",children:"Python"}),(0,d.jsx)(s.Z,{value:"swift",children:"Swift"}),(0,d.jsx)(s.Z,{value:"typeScript",children:"TypeScript"})]})}),(0,d.jsx)(h.ZP,{value:t,onChange:i,theme:"dark",extensions:[l.il.define(r)],readOnly:!n,onFocus:function(e){return!n&&e.target.blur()}})]})}var v=function(e){switch(e){case"cpp":default:return r.N;case"java":return r.Cb;case"javascript":return u.eJ;case"kotlin":return r.j7;case"python":return i.Vs;case"swift":return a.v;case"typescript":return u.NN}};function f(e){var t=e.value,n=e.isMine,r=e.language,u=e.handleChange,i=e.handleSelect;return(0,d.jsx)(p,{value:t,isMine:n,handleChange:u,codeParser:v(r),language:r,handleSelectChange:function(e){i(e.target.value)}})}},11375:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(16871),u=n(41956),i=n(29439),a=n(72791),s=n(47408),c=n(21598);var o=n(54225),h=n(50148),l=n(53767),d=n(64554),p=n(72466),v=n(90388),f=n(20890),w=n(99285),Z=n(47360),x=n(87968),g=n(80184);function y(e){var t=e.code,n=e.review,r=e.view,u=e.language,i=e.isMine,a=e.handleLanguage,s=e.handleCode,c=e.handleReview,o=e.handleView,h=e.handleSubmit;return(0,g.jsxs)(l.Z,{spacing:2,children:[(0,g.jsx)(d.Z,{sx:{display:"flex",flexDirection:"row-reverse"},children:(0,g.jsxs)(p.Z,{value:r,exclusive:!0,onChange:o,size:"small",children:[(0,g.jsx)(v.Z,{value:"code",children:(0,g.jsx)(f.Z,{px:1,fontWeight:800,children:"\ucf54\ub4dc"})}),(0,g.jsx)(v.Z,{value:"review",children:(0,g.jsx)(f.Z,{px:1,fontWeight:800,children:"\ub9ac\ubdf0"})})]})}),"code"===r?(0,g.jsx)(Z.Z,{value:t,isMine:i,language:u,handleChange:s,handleSelect:a}):(0,g.jsx)(w.ZP,{height:520,value:n,fullscreen:!1,onChange:c}),(0,g.jsx)(d.Z,{children:(0,g.jsx)(x.Z,{onClick:h,children:"\uc81c\ucd9c\ud558\uae30"})})]})}function k(e){var t=function(e){var t=(0,s.useQueryClient)(),n=(0,r.s0)(),u=(0,s.useMutation)((function(t){var n=t.code,r=t.review,u=t.language;return c.Z.createSolution(e,n,r,u)}),{onSuccess:function(e){t.setQueryData(["solution",e.id],e),n("./../../solution/".concat(e.id),{replace:!0})}});return{isLoading:u.isLoading,createSolution:u.mutate}}(e.problemId),n=t.isLoading,u=t.createSolution,l=(0,o.Z)("code"),d=l.view,p=l.changeView,v=(0,a.useState)(""),f=(0,i.Z)(v,2),w=f[0],Z=f[1],x=(0,a.useState)(""),k=(0,i.Z)(x,2),m=k[0],j=k[1],R=(0,a.useState)("cpp"),S=(0,i.Z)(R,2),b=S[0],C=S[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{code:w,isMine:!0,review:m,view:d,language:b,handleCode:function(e){Z(e)},handleReview:function(e){j(e)},handleView:p,handleLanguage:function(e){C(e)},handleSubmit:function(e){u({language:b,code:w,review:m})}}),n&&(0,g.jsx)(h.Z,{})]})}function m(e){var t=e.problemId;return(0,g.jsx)(u.Z,{children:(0,g.jsx)(k,{problemId:t})})}function j(){var e=(0,r.UO)().problemId;return void 0===e?(0,g.jsx)(r.Fg,{to:"/notfound",replace:!0}):(0,g.jsx)(m,{problemId:+e})}},7416:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(15671),u=n(43144),i=function(){function e(t){(0,r.Z)(this,e),this._id=void 0,this._code=void 0,this._readMe=void 0,this._date=void 0,this._userId=void 0,this._userName=void 0,this._language=void 0,this._reviews=void 0,this._id=t.id,this._code=t.code,this._readMe=t.readMe,this._date=t.date,this._userId=t.userId,this._userName=t.userName,this._language=t.language,this._reviews=[]}return(0,u.Z)(e,[{key:"pushReviews",value:function(e){return this._reviews=this._reviews.concat(e),this}},{key:"id",get:function(){return this._id}},{key:"code",get:function(){return this._code}},{key:"readMe",get:function(){return this._readMe}},{key:"date",get:function(){return this._date}},{key:"userId",get:function(){return this._userId}},{key:"userName",get:function(){return this._userName}},{key:"language",get:function(){return this._language}},{key:"reviews",get:function(){return this._reviews}}]),e}()},21598:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(74165),u=n(15861),i=n(15671),a=n(43144),s=n(7416),c=function(){function e(t,n){(0,i.Z)(this,e),this.solutionRepo=t,this.reviewRepo=n}return(0,a.Z)(e,[{key:"createSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,i){var a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.solutionRepo.createSolution(t,n,u,i);case 2:return a=e.sent,c=new s.Z(a),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,u){return e.apply(this,arguments)}}()},{key:"getSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){var n,u,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.solutionRepo.getSolution(t);case 2:return n=e.sent,u=new s.Z(n),e.next=6,this.reviewRepo.getReviews(u.id);case 6:return i=e.sent,u.pushReviews(i),e.abrupt("return",u);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,i){var a,c,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.solutionRepo.updateSolution(t,n,u,i);case 2:return a=e.sent,c=new s.Z(a),e.next=6,this.reviewRepo.getReviews(c.id);case 6:return o=e.sent,c.pushReviews(o),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r,u){return e.apply(this,arguments)}}()},{key:"deleteSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.solutionRepo.deleteSolution(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reviewRepo.createReview(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reviewRepo.updateReview(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reviewRepo.deleteReview(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),o=function(){function e(t){(0,i.Z)(this,e),this.useCase=t}return(0,a.Z)(e,[{key:"createSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.createSolution(t,n,u,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,r,u){return e.apply(this,arguments)}}()},{key:"getSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.getSolution(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.updateSolution(t,n,u,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,r,u){return e.apply(this,arguments)}}()},{key:"deleteSolution",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.deleteSolution(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.createReview(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.updateReview(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.useCase.deleteReview(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),h=(0,a.Z)((function e(t){(0,i.Z)(this,e),this.id=void 0,this.userId=void 0,this.userName=void 0,this.content=void 0,this.createdTime=void 0,this.updatedTime=void 0,this.id=t.id,this.userId=t.userId,this.userName=t.userName,this.content=t.content,this.createdTime=t.createdTime,this.updatedTime=t.updatedTime})),l=n(84608),d=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,[{key:"getReviews",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/review/".concat(t)).then((function(e){return e.data.map((function(e){return new h(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.post("/review",{solutionId:t,content:n}).then((function(e){var t=e.data;return new h(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.put("/review/".concat(t),{content:n}).then((function(e){var t=e.data;return new h(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteReview",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.deleteRequest("/review/".concat(t)).then((function(e){return 200===e.status}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),p=new o(new c(new(n(34559).Z),new d))},54225:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(29439),u=n(72791);function i(e){var t=(0,u.useState)(e),n=(0,r.Z)(t,2),i=n[0],a=n[1];return{view:i,changeView:function(e,t){null!==t&&a(t)}}}}}]);
//# sourceMappingURL=375.38dbc51d.chunk.js.map