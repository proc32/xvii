var div = document.createElement("div");

div.innerHTML = `<div class="menu-container">
<div class="menu">
    <ul>
      <li class='menu-logo desktop'><a href="index.html"><img src="images/omer_nav.png" alt="Omer logo" /></a></li>
      <li class='mobile'><a href="index.html">HOME</a></li>
      <li><a href="jointherealworld.html">THE REAL WORLD</a></li>
      <li><a href="https://trwchampions.com" target='_blank'>CHAMPIONS</a></li>
      <li><a href="https://thewarroom.ag/" target="_blank">THE WAR ROOM</a></li>
      <li><a href='#'>WISDOM</a>
        <ul>
        <li><a href="the-tales-of-wudan.html">TALES OF WUDAN</a></li>
        <li><a href="fight.html">LESSONS FROM FIGHTING</a></li>
        <li><a href="https://cobratate.com/youngkings" target="_blank">YOUNG KINGS</a></li>
          <li><a href="41-tenets.html">41 TENETS</a></li>
          <li><a href="letter-from-jail.html">LETTER FROM JAIL</a></li>
          <li><a href="pledge.html">TATE PLEDGE</a></li>
        </ul>
      </li>
      <li><a href='#'>RESOURCES</a>
        <ul>
          <li><a href="contact.html">CONTACT ME</a></li>
          <li><a href="mission.html">TALK TO AN AGENT</a></li>
          <li><a href="https://jointherealworld.com/last-week" target='_blank'>LAST WEEK INSIDE THE REAL WORLD</a></li>
          <li><a href="newsletter.html">NEWSLETTER</a></li>
          <li><a href="https://beacons.ai/tateterrific" target='_blank'>SOCIAL MEDIA</a></li>
        </ul>
      </li>
      
      <li><a href="https://cobratatemembers.com/">MY ACCOUNT</a></li>
      <li class='right-btn shop-btn'><a href="shop.html">SHOP</a></li>
      <li class='right-btn shop-btn'><a href="https://topg.com/">TOP G</a></li>
    </ul>
</div>
</div>`;

document.currentScript.parentNode.insertBefore(
    div.firstElementChild,
    document.currentScript
);


document.addEventListener("DOMContentLoaded", () => {

    $('head').append('<link rel="stylesheet" href="css/menu-style.css" type="text/css"/>');
    $('head').append('  <link rel="stylesheet" href="css/ionicons.min.css" type="text/css">');

    $("#agent-btn").click(function(e) {
        Intercom('showNewMessage');
    });
});