(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{433:function(e,t,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("5a0e5697",content,!0,{sourceMap:!1})},435:function(e,t,r){"use strict";r(433)},436:function(e,t,r){var n=r(15)(!1);n.push([e.i,".page-title[data-v-3227a552]{width:100%;font-weight:700;text-align:right;text-transform:uppercase}.divider-1[data-v-3227a552],.divider-2[data-v-3227a552]{width:5px;height:5px;border-radius:50%}",""]),e.exports=n},438:function(e,t,r){"use strict";r.r(t);var n={props:{title:String}},l=(r(435),r(47)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-content mx-auto mb-12 scale-out"},[r("div",{staticClass:"page-title text-center text-h6 text-sm-h5"},[e._v(e._s(e.title))]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-row justify-center align-center"},[r("div",{staticClass:"divider divider-0"}),e._v(" "),r("div",{staticClass:"divider divider-1"}),e._v(" "),r("div",{staticClass:"flower"}),e._v(" "),r("div",{staticClass:"divider divider-2"}),e._v(" "),r("div",{staticClass:"divider divider-3"})])}],!1,null,"3227a552",null);t.default=component.exports},487:function(e,t,r){var content=r(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("31ca1dbe",content,!0,{sourceMap:!1})},523:function(e,t,r){"use strict";r(487)},524:function(e,t,r){var n=r(15)(!1);n.push([e.i,"[data-v-01c8b767] .v-btn{font-size:12px;padding-top:25px!important;padding-bottom:25px!important}",""]),e.exports=n},595:function(e,t,r){"use strict";r.r(t);r(24),r(63);var n={name:"About",data:function(){return{successHref:"".concat(window.location.href,"?submit=success"),showSuccess:!1,valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=100||"Name must be less than 100 characters"}],company:"",companyRules:[function(e){if(!e)return!0;e.length}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],message:"",messageRules:[function(e){return!!e||"Message is required"}]}},mounted:function(){this.$route.query.submit&&(this.showSuccess=!0,this.$router.replace({query:{}}))},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.resetValidation(),this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},sendFormDetails:function(){this.$refs.form.validate()&&this.$refs.form.$el.submit()}}},l=(r(523),r(47)),o=r(54),c=r.n(o),m=r(601),d=r(417),v=r(582),f=r(426),h=r(584),_=r(190),x=r(427),w=r(583),y=r(575),k=r(585),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"contact",attrs:{id:"contact"}},[r("v-layout",{staticClass:"content px-2 px-md-15"},[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("PageTitle",{attrs:{title:"Contact"}}),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"8"}},[r("div",{staticClass:"contact-form fade-in pr-md-10"},[r("h1",[e._v("Let’s Talk")]),e._v(" "),e.showSuccess?r("v-alert",{staticClass:"py-5 my-5",attrs:{dismissible:"",text:"",color:"success"}},[e._v("\n              Thanks for reaching out! I'll get back to you as soon as\n              possible.\n            ")]):e._e(),e._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":"",target:"_blank",action:"https://formsubmit.co/b97db6883c3ed44c33b99d9ae48ea6c5",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.sendFormDetails()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("input",{attrs:{type:"hidden",name:"_next"},domProps:{value:e.successHref}}),e._v(" "),r("v-text-field",{attrs:{label:"Name*",name:"Name",counter:100,rules:e.nameRules,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Company",name:"Company",rules:e.companyRules,counter:100},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),e._v(" "),r("v-text-field",{attrs:{label:"Email*",name:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-textarea",{attrs:{row:"1",height:"120",autocomplete:"message",label:"Message*",name:"Message",rules:e.messageRules},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),r("v-row",{staticClass:"my-4"},[r("v-col",{attrs:{"offset-sm":"6",cols:"6",sm:"3"}},[r("v-btn",{staticClass:"mr-3 text-uppercase",attrs:{color:"secondary",outlined:"",height:"40",block:""},on:{click:e.reset}},[e._v("\n                    Clear\n                  ")])],1),e._v(" "),r("v-col",{attrs:{cols:"6",sm:"3"}},[r("v-btn",{staticClass:"elevation-0 text-uppercase",attrs:{type:"submit",color:"secondary",height:"52",block:""},on:{click:e.validate}},[e._v("\n                    Send\n                  ")])],1)],1)],1)],1)]),e._v(" "),r("v-col",{staticClass:"slide-up",attrs:{cols:"12",sm:"4"}},[r("h1",[e._v("Ways To Contact Me")]),e._v(" "),r("div",{staticClass:"my-8"},[r("p",{staticClass:"slide-up"},[e._v("\n              Whether it be a suggestion/compliments about my portfolio or a\n              job offer, I would love to hear from you!\n            ")]),e._v(" "),r("p",{staticClass:"slide-up"},[e._v("\n              You may directly message me through\n\n              "),r("a",{staticClass:"orange--text link",attrs:{href:"https://www.linkedin.com/in/cristine-grace-ca%C3%B1edo-b40990b8/",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n                LinkedIn\n              ")]),e._v("\n              or message me via\n              "),r("a",{staticClass:"orange--text link",attrs:{href:"mailto:crstngracebusiness@gmail.com",rel:"noopener noreferrer"}},[e._v("email.")])])]),e._v(" "),r("div",{staticClass:"divider my-12"}),e._v(" "),r("v-btn",{staticClass:"wipe my-2 text-uppercase",attrs:{value:"left",href:"https://www.linkedin.com/in/cristine-grace-ca%C3%B1edo-b40990b8/",target:"_blank",rel:"noopener noreferrer",xlarge:"",dark:"",block:""}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-linkedin")]),e._v("LinkedIn\n          ")],1),e._v(" "),r("v-btn",{staticClass:"wipe my-2 text-uppercase",attrs:{value:"left",href:"mailto:crstngracebusiness@gmail.com",rel:"noopener noreferrer",dark:"",block:""}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-gmail")]),e._v(" GMail\n          ")],1),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"wipe my-2 text-uppercase",attrs:{value:"left",href:"https://www.instagram.com/crigmeuca/",target:"_blank",rel:"noopener noreferrer",dark:"",block:""}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-instagram")]),e._v("\n            Instagram\n          ")],1),e._v(" "),r("v-btn",{staticClass:"wipe my-2 text-uppercase",attrs:{href:"https://join.skype.com/invite/xftMPo1wmPq3",target:"_blank",value:"left",rel:"noopener noreferrer",dark:"",block:""}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-skype")]),e._v("Skype\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,"01c8b767",null);t.default=component.exports;c()(component,{PageTitle:r(438).default}),c()(component,{VAlert:m.a,VBtn:d.a,VCol:v.a,VContainer:f.a,VForm:h.a,VIcon:_.a,VLayout:x.a,VRow:w.a,VTextField:y.a,VTextarea:k.a})}}]);