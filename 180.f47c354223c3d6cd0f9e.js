"use strict";(self.webpackChunksputnik_quiz=self.webpackChunksputnik_quiz||[]).push([[180],{9818:(e,t,n)=>{n.d(t,{Z:()=>r});const r={"auth-modal__switch-text":"tMDuuigm","auth-modal__switch-button":"oxVN2kiy"};var o=n(4783)(e.id,{locals:!0});e.hot.dispose(o)},2614:(e,t,n)=>{n.d(t,{Z:()=>r});const r={"main-page":"RKCPTXCg"};var o=n(4783)(e.id,{locals:!0});e.hot.dispose(o)},856:(e,t,n)=>{n.d(t,{Z:()=>r});const r={"welcome-card":"TDPt4BmA","welcome-card__title":"dMyECnfl","welcome-card__text":"J1dYgmii","welcome-card__button":"EqLRbBTN"};var o=n(4783)(e.id,{locals:!0});e.hot.dispose(o)},9180:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(5893),o=n(9175),a=n(1230),i=n(5240),l=n(5019),s=n(2207),c=n(1577),u=n(1595),d=n(4184),m=n.n(d),f=n(9818),h=function(e){var t=e.title,n=e.onOk,o=e.onCancel,a=e.okText,i=e.isOpened,l=e.children,d=e.switchFormText,h=e.onSwitchForm;return(0,r.jsx)(s.Z,{open:i,centered:!0,title:t,onOk:n,onCancel:o,footer:[(0,r.jsx)(c.ZP,{type:"primary",onClick:n,children:a},"submit"),(0,r.jsxs)(u.Z.Paragraph,{className:m()(f.Z["auth-modal__switch-text"]),children:["или"," ",(0,r.jsx)(c.ZP,{type:"link",onClick:h,className:m()(f.Z["auth-modal__switch-button"]),children:d})]},"switch")],children:l})},p=function(e){var t=e.onLogin,n=e.onCancel,o=e.isModalOpened,a=e.switchFormText,s=e.onSwitchForm,c=i.Z.useForm()[0];return(0,r.jsx)(h,{onOk:function(){c.validateFields().then((function(e){c.resetFields(),t(e)})).catch((function(e){c.scrollToField(null==e?void 0:e.errorFields[0])}))},onCancel:n,okText:"Войти",title:"Вход",isOpened:o,switchFormText:a,onSwitchForm:s,children:(0,r.jsxs)(i.Z,{form:c,name:"login-form",labelCol:{span:4},wrapperCol:{span:20},children:[(0,r.jsx)(i.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Введите ваш Email!"},{type:"email",message:"Email неккоректен!"}],children:(0,r.jsx)(l.Z,{type:"email"})}),(0,r.jsx)(i.Z.Item,{label:"Пароль",name:"password",rules:[{required:!0,message:"Введите пароль!"}],children:(0,r.jsx)(l.Z,{type:"password"})})]})})},v=function(e){var t=e.onRegistration,n=e.onCancel,o=e.isModalOpened,a=e.switchFormText,s=e.onSwitchForm,c=i.Z.useForm()[0];return(0,r.jsx)(h,{onOk:function(){c.validateFields().then((function(e){c.resetFields(),t(e)})).catch((function(e){c.scrollToField(null==e?void 0:e.errorFields[0])}))},onCancel:n,okText:"Зарегистрироваться",title:"Регистрация",isOpened:o,switchFormText:a,onSwitchForm:s,children:(0,r.jsxs)(i.Z,{form:c,name:"login-form",labelCol:{span:4},wrapperCol:{span:20},children:[(0,r.jsx)(i.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Введите ваш Email!"},{type:"email",message:"Email неккоректен!"}],children:(0,r.jsx)(l.Z,{type:"email"})}),(0,r.jsx)(i.Z.Item,{label:"Пароль",name:"password",rules:[{required:!0,message:"Придумайте пароль!"}],children:(0,r.jsx)(l.Z,{type:"password"})})]})})},w=n(7294),g=n(2614),x=n(1866),b=n(856),y=function(e){var t=e.onClick;return(0,r.jsxs)(x.Z,{className:m()(b.Z["welcome-card"]),children:[(0,r.jsx)(u.Z.Title,{className:m()(b.Z["welcome-card__title"]),children:"Sputnik Quiz"}),(0,r.jsx)(u.Z.Paragraph,{className:m()(b.Z["welcome-card__text"]),children:"Для начала работы необходимо авторизоваться в системе"}),(0,r.jsx)(c.ZP,{type:"primary",shape:"round",onClick:t,className:m()(b.Z["welcome-card__button"]),children:"Войти"})]})},k=n(2861);const Z=JSON.parse('{"Jm":"AIzaSyA_yO1RXIZLA8so1XKri4Vg5cNL9dvx0Ks"}');var S=n(2044),T=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},j=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},I=k.Z.create({baseURL:"https://identitytoolkit.googleapis.com/v1/",params:{key:Z.Jm}});const _=function(e){var t=e.email,n=e.password;return T(void 0,void 0,void 0,(function(){return j(this,(function(e){switch(e.label){case 0:return[4,I.post("accounts:signUp",{email:t,password:n,returnSecureToken:!0})];case 1:return[2,e.sent().data]}}))}))},F=function(e){var t=e.email,n=e.password;return T(void 0,void 0,void 0,(function(){return j(this,(function(e){switch(e.label){case 0:return[4,I.post("accounts:signInWithPassword",{email:t,password:n,returnSecureToken:!0})];case 1:return[2,e.sent().data]}}))}))};var C=n(9250),E=n(6326),O=function(){return E.Z.useNotification()},P=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};const q=function(){var e=(0,w.useState)(!0),t=e[0],n=e[1],i=(0,w.useState)(!1),l=i[0],s=i[1],c=(0,C.s0)(),u=S.ZP.getUserEmail();(0,w.useEffect)((function(){u&&c("quiz")}),[]);var d=O(),f=d[0],h=d[1],x=function(e){f.open({message:"Ошибка",description:e})},b=function(){s(!1)};return(0,r.jsxs)(o.Z,{children:[h,(0,r.jsxs)(o.Z.Content,{children:[t?(0,r.jsx)(p,{onLogin:function(e){return P(void 0,void 0,void 0,(function(){var t,n,r,o,a;return N(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,F(e)];case 1:return t=i.sent(),S.ZP.setTokens(t),s(!1),c("quiz"),[3,3];case 2:return n=i.sent(),"EMAIL_NOT_FOUND"===(null===(a=null===(o=null===(r=null==n?void 0:n.response)||void 0===r?void 0:r.data)||void 0===o?void 0:o.error)||void 0===a?void 0:a.message)?x("Пользователь с таким email и паролем не найден!"):x("Ошибка входа!"),[3,3];case 3:return[2]}}))}))},onCancel:b,isModalOpened:l,switchFormText:"Зарегистрироваться",onSwitchForm:function(){return n(!1)}}):(0,r.jsx)(v,{onRegistration:function(e){return P(void 0,void 0,void 0,(function(){var t,n,r,o,a;return N(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,_(e)];case 1:return t=i.sent(),S.ZP.setTokens(t),s(!1),c("quiz"),[3,3];case 2:switch(n=i.sent(),null===(a=null===(o=null===(r=null==n?void 0:n.response)||void 0===r?void 0:r.data)||void 0===o?void 0:o.error)||void 0===a?void 0:a.message){case"EMAIL_EXISTS":x("Пользователь с таким email уже зарегистрирован!");break;case"WEAK_PASSWORD : Password should be at least 6 characters":x("Пароль должен быть не менее 6 символов!");break;default:x("Ошибка регистрации!")}return[3,3];case 3:return[2]}}))}))},onCancel:b,isModalOpened:l,switchFormText:"Войти",onSwitchForm:function(){return n(!0)}}),(0,r.jsx)(a.Z,{align:"middle",justify:"center",className:m()(g.Z["main-page"]),children:(0,r.jsx)(y,{onClick:function(){s(!0)}})})]})]})}},2044:(e,t,n)=>{n.d(t,{ZP:()=>s});var r="jwt-token",o="jwt-refresh-token",a="jwt-expires",i="user-local-id",l="user-email";const s={setTokens:function(e){var t=e.refreshToken,n=e.idToken,s=e.localId,c=e.email,u=(new Date).getTime()+36e5;localStorage.setItem(i,s),localStorage.setItem(r,n),localStorage.setItem(o,t),localStorage.setItem(a,u.toString()),localStorage.setItem(l,c)},getAccessToken:function(){return localStorage.getItem(r)},getRefreshToken:function(){return localStorage.getItem(o)},getTokenExpiresDate:function(){return localStorage.getItem(a)},getUserId:function(){return localStorage.getItem(i)},removeAuthData:function(){localStorage.removeItem(i),localStorage.removeItem(r),localStorage.removeItem(o),localStorage.removeItem(a),localStorage.removeItem(l)},getUserEmail:function(){return localStorage.getItem(l)}}}}]);