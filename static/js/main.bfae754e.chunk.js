(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(12),n(3)),m=n(4),s=n(6),c=n(5),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},u=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},d=[{id:1,name:"Yash Jadhav",username:"yashleo",email:"leo10@gmail.com"},{id:2,name:"Jay Kamble",username:"Jayaoo",email:"Jayanchal@gmail.com"},{id:3,name:"Chinmay Jangle",username:"Jannu",email:"Janmay@gmail.com"},{id:4,name:"Prajwal Patil",username:"Pajya",email:"SinglePatil@gmail.com"},{id:5,name:"Saurabh Magdum",username:"Souabb",email:"souabbdada@gmail.com"},{id:6,name:"Amey Chavan",username:"Noob",email:"AIDASpecialist@builder.com"},{id:7,name:"Tejas Kachare",username:"Tejya",email:"tejasdada@ranuMondal.com"},{id:8,name:"S Abhishek",username:"Sabhya",email:"sabhya@gmail.com"},{id:9,name:"Satyam Tate",username:"barrel",email:"shinigami@gmail.com"},{id:10,name:"Prathamesh Gosavi",username:"Goshya",email:"englishkida@gmail.com"},{id:11,name:"Aditya Patil",username:"Aadya",email:"harkesh@gmail.com"},{id:12,name:"Gaurav Mali",username:"Tirkya",email:"balcony@gmail.com"}],b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},g=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:a}))},f=(n(13),function(e){Object(s.a)(n,e);var a=Object(c.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:d,searchfield:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Friends"),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(u,{robots:a})))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.bfae754e.chunk.js.map