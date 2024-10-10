
function sendMessage(){
    (function(){
        emailjs.init('n-KaAf7iph0G4Xjxu');
    })();

    var serviceId = "service_zp9r2hx";
    var templateId = "template_fmfs6sv";

    var params = {
        to_name: 'Aruana',
        from_name: document.querySelector("#name").value,
        senderemail: document.querySelector('#email').value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };
    emailjs.send(serviceId, templateId, params)
    .then(res => {
        alert('Thank you, ' + params['from_name'] + '! Your message has been sent.');
        console.log(JSON.stringify(params));
    })
}
const burger = document.querySelector('.test');
const menu = document.querySelector('#mobileNav');
const closeBtn = document.querySelector('.tabler-icon');



burger.addEventListener('click', ()=>{
    menu.classList.remove('closed-menu');
    menu.classList.add('open-menu');
})

closeBtn.addEventListener('click',()=>{
    menu.classList.remove('open-menu');
    menu.classList.add('closed-menu');
})

