/*
// Add these to HTML before <script src='js/purchasePopup.js'></script>
</body>
  <script src='/js/purchasePopup.js'></script>


*/



$('head').append('<script src="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>');
$('head').append("<style>.alertify-notifier .ajs-message.ajs-visible {   padding: 0 !important;} .alertify-notifier .ajs-message{   background-color: transparent !important;   border:none !important;} .purchase-popup{   position: relative;   z-index: 999;   max-width: 80vw;   width: 500px;   padding: 10px 50px 10px 15px;   background-color: #fff;   border-radius: 0 15px 15px 0;   color: #000;   display: flex;   flex-direction: column;   flex-wrap: nowrap;   justify-content: center;   align-items: center;   -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);   -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);   box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);   align-content: center;} .purchase-popup svg{   position: absolute;   content: '';   top: 10px;   right: 10px;   width: 20px;   height: 20px;   cursor: pointer;} .purchase-popup img{   position: absolute;   content: '';   top: calc(50% - 35px);   right: -35px;   width: 70px;   height: 70px;} .purchase-popup p{   font-size: 16px;   line-height: 130%;   margin:0;   color:#000;   text-align:start;} .purchase-popup strong{color:#000 !important;}</style>");

const source = new EventSource('https://secure.jointherealworld.com/api/purchases');
source.addEventListener('purchase', purchaseEvent => {
  const data = JSON.parse(purchaseEvent.data);
  if(data.name && data.countryName) addPurchasePopup(data.name, data.countryName);
})


function addPurchasePopup(name, country){
  var div = document.createElement("div");

  div.innerHTML = `<div class='purchase-popup'>
  <img src="images/Mask-group-1_1Mask-group-1.webp" loading="lazy" alt="The Real World">
    <p><strong>${abbreviateName(name)}</strong> ${country && country.trim().length > 0 ? 'from <strong>' + country.trim() + '</strong>' : ''} has purchased The Real World and is escaping The Matrix.</p>
    </div>`;

  var screenW = document.documentElement.clientWidth;
  var position = screenW < 767 ? 'top-left' : 'bottom-left';

  alertify.set('notifier','position', position);
  alertify.message(div);
}

function abbreviateName(name){
  
  if(!name || name.trim().length <= 0) return 'Anon';

  var nameSplit = name.trim().split(' ');
  if(nameSplit.length > 1 && nameSplit[nameSplit.length - 1].length > 0){
    name = nameSplit[0] + ' ' + nameSplit[nameSplit.length - 1].charAt(0).toUpperCase() + '.';
  }

  return name.trim();
}