const allKeys = document.querySelectorAll('.hover-eff');

Array.from(allKeys, (e)=>{
    console.log(e.getAttribute('data-key'));
})