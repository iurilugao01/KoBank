(()=>{"use strict";const e=()=>{const e=document.querySelector("#money"),t=parseFloat(e.innerText)<0;e.style.color=t?"red":"white"};let t=[];null!=localStorage.getItem("money")&&(document.querySelector("#money").innerText=localStorage.getItem("money"));const o=o=>{t=JSON.parse(localStorage.getItem("transactions"))||[],event.preventDefault();const n=document.querySelector("#money"),r=document.querySelector("#value");let l;"pay"===o&&(l=parseFloat(n.innerText)-parseFloat(r.value),t.push("pagou "+r.value)),"receive"===o&&(l=parseFloat(n.innerText)+parseFloat(r.value),t.push("recebeu "+r.value)),isNaN(l)||(n.innerText=l,r.value=null,localStorage.setItem("money",n.innerText),localStorage.setItem("transactions",JSON.stringify(t))),console.log(t),e()};document.querySelector("#pay").addEventListener("click",(()=>o("pay"))),document.querySelector("#receive").addEventListener("click",(()=>o("receive"))),e()})();