let Btitle = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function(){
    if(window.navigator.onLine){
        OnLine();
    }
    else{
        OffLine();
    }
};
reload.onclick = function(){
    window.location.reload();
}
window.addEventListener('online', function(){
    OnLine();
    
});
window.addEventListener('offline', function(){
    OffLine();
});
function OnLine(){
    Btitle.innerHTML = 'OnLine Now';
    ul.classList.add('hidden');
    reload.classList.add('hidden');    
};
function OffLine(){
    Btitle.innerHTML = 'Offline Now';
    ul.classList.remove('hidden');
    reload.classList.remove('hidden');
}