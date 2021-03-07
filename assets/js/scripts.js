// Materialize Scripts initiation 

$(document).ready(function(){
    $(".sidenav").sidenav({edge: "right"}); //navbar initialization
    $('.slider').slider({height: 500}); //Slider initialization
    $('select').formSelect(); //select form initalization
});


//Email JS send code from their documentation

const btn = document.getElementById('button');

document.getElementById('paddyform')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_hmurxxg';
   const templateID = 'template_ywblt9l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        M.toast({html: 'Your message was sent successfuly!', classes: "green darken-1"});
        document.getElementById("paddyform").reset();
    }, (err) => {
        M.toast({html: `Sorry, we had trouble in sending your message. Error: ${err}`, classes: "red darken-1"});
        document.getElementById("paddyform").reset();
    });

});