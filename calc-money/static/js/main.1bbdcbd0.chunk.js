(window["webpackJsonpfield-calc"]=window["webpackJsonpfield-calc"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),s=(a(16),a(8)),i=a(5),u=a(6),o=a(9),d=a(7),m=a(10),f=a(1),p=a.n(f),v=a(2);var b=function(e){var t=e.type,a=e.deleteField,c=e.id,r=e.modal,s=e.setModal,i=e.saveField,u=e.date,o=e.startValue,d=Object(n.useState)(o),m=Object(v.a)(d,2),f=m[0],p=m[1],b=Object(n.useState)(!!o),E=Object(v.a)(b,2),h=E[0],g=E[1];return l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-content"},l.a.createElement("label",{className:"field-label"},l.a.createElement("div",{className:"date"},u),l.a.createElement("input",{className:"input-field",type:"text",onBlur:function(){i(c,f,t),g(!0)},value:f,onChange:function(e){var t=e.target;g(!1),p(function(e){return e.replace(/[^\d\.]/g,"")}(t.value))},placeholder:"minus"===t?"\u041c\u0438\u043d\u0443\u0441":"\u041f\u043b\u044e\u0441"}),l.a.createElement("span",{className:"minus"===t?"success":"warring"},"minus"===t?"-":"+")),l.a.createElement("button",{className:h?"button-menu":"button-menu menu-no-save",onClick:function(){return s(c)}},"\u041c\u0435\u043d\u044e")),r===c&&l.a.createElement("div",{className:"field-modal"},l.a.createElement("button",{onClick:function(){""!==f&&(i(c,f,t),g(!0))}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),l.a.createElement("button",{onClick:function(){return a(c)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l.a.createElement("button",{onClick:function(){return s(null)}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))},E=JSON.parse(localStorage.getItem("cart")),h={fields:[{id:p()(),type:"plus",value:"",date:(new Date).toLocaleString()}],total:0,modal:null,lastValue:0,type:null,users:["\u041d\u0430\u0437\u0430\u0440","\u0412\u0438\u0442\u0430\u043b\u0438\u043a","\u041c\u0430\u043c\u0430"],openUser:!1,debtor:null},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state=E||h,a.addField=function(e){var t=e.target.getAttribute("data-field"),n={id:p()(),type:t,value:"",date:(new Date).toLocaleString()};a.setState({fields:[].concat(Object(s.a)(a.state.fields),[n])})},a.deleteField=function(e){a.setState({fields:a.state.fields.filter(function(t){return t.id!==e})},a.calc)},a.calc=function(){a.setState(function(e){var t=e.fields.length;return{total:e.fields.filter(function(e){return""!==e.value}).reduce(function(e,t){return"plus"===t.type?e+Number(t.value):"minus"===t.type?e-Number(t.value):void 0},0).toFixed(2),lastValue:0===t?0:e.lastValue,debtor:0===t?null:e.debtor}},function(){a.saveLocalStorage()})},a.fieldChange=function(){},a.saveLocalStorage=function(){localStorage.setItem("cart",JSON.stringify(a.state))},a.setModal=function(e){return a.setState({modal:e})},a.saveField=function(e,t,n){a.setState(function(a){return{fields:a.fields.map(function(a){return a.id===e&&(a.value=t,a.date=(new Date).toLocaleString()),a}),lastValue:t,type:"minus"===n?"-":"+"}},function(){a.setModal(null),a.calc()})},a.showUsers=function(){a.setState({openUser:!0})},a.setUser=function(e){return function(){a.setState({debtor:e,openUser:!1},a.saveLocalStorage)}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.fields,n=t.lastValue,c=t.type,r=t.debtor;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"total"},l.a.createElement("p",null,"\u0412\u0441\u0435\u0433\u043e: ",l.a.createElement("br",null)," ",this.state.total," \u0433\u0440\u043d"),l.a.createElement("p",{onClick:this.showUsers},"\u0414\u043e\u043b\u0436\u0435\u043d: ",l.a.createElement("br",null)," ",r),l.a.createElement("p",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0441\u0443\u043c\u043c\u0430: ",l.a.createElement("br",null)," ",c," ",n," \u0433\u0440\u043d")),this.state.openUser&&l.a.createElement("div",{className:"user-modal"},l.a.createElement("ul",null,this.state.users.map(function(t){return l.a.createElement("li",{key:t,onClick:e.setUser(t)},t)}))))),l.a.createElement("main",null,l.a.createElement("div",{className:"container"},a.length>0?a.map(function(t){return l.a.createElement(b,{key:t.id,id:t.id,type:t.type,startValue:t.value,date:t.date,saveField:e.saveField,modal:e.state.modal,deleteField:e.deleteField,setModal:e.setModal})}):null,l.a.createElement("div",{className:"actions"},l.a.createElement("button",{className:"button-minus","data-field":"minus",onClick:this.addField},"-"),l.a.createElement("button",{className:"button-plus","data-field":"plus",onClick:this.addField},"+")))))}}]),t}(n.Component);r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1bbdcbd0.chunk.js.map