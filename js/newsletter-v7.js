var div = document.createElement("div");

div.innerHTML = `<form class="newsletter-form" method="post" action="https://c5b80487.sibforms.com/serve/MUIEAFCvmMnBsHzbjZrGrwZWWc-DRQaYshJU8n0VYxB8rRknt_lRWkPbKoxJqR3ZgypOQ0tUn0dK2lwOMWgv26ZkEdDr7_o4W5uXztd9RB6DAp4Y1kxskXkTza02ilG1eC6dLVHDUsEEEfyxVJ3ng_px8xjAqC2VQSQJ1uZBJ5sn0Z-K92SDMjoJn8m44hGMNhgUHDIn2ZcuikwJ" class="listmonk-form nl-form" style="text-align: center;">
    <div style="width:100%;">
        <input type="hidden" name="nonce" />
        <input class='form-input form-input-large' type="email" name="EMAIL" required placeholder="Your email address" /></p>

        <input type="submit" value="Subscribe" class='button-large bg-primary-3 w-button' style="margin-top: 16px; width: 300px;" />
    </div>
</form>`;

document.currentScript.parentNode.insertBefore(
    div.firstElementChild,
    document.currentScript
);
