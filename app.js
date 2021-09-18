const allKeys = document.querySelectorAll('.hover-eff');

Array.from(allKeys, (e)=>{
    e.addEventListener('click', ()=>{
        const key = e.getAttribute('data-key');
        const getInstr = document.querySelector(`audio[data-key="${key}"]`);
        getInstr.currentTime =0;
        getInstr.play();
    })
})

window.addEventListener('keydown', (e)=>{
    const key = e.keyCode;
    const getInstr = document.querySelector(`audio[data-key="${key}"]`);

    if(!getInstr){
        return;
    }
    getInstr.currentTime = 0;
    getInstr.play();
})