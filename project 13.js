const light=document.querySelector(".light");

window.addEventListener('mousemove',(e)=>{
    light.style.setproperty('--x',e.clientX + 'px');
     light.style.setproperty('--x',e.clientY + 'px');
})