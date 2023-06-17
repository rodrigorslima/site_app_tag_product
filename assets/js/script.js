const projectName = "Etiquetas Fácil"
const projectDescription = "Crie etiquetas para seus produtos de maneira simples e rápida."
const storeLink = "https://play.google.com/store/apps/details?id=com.rslima.tag_product"
function appName() {
    document.write(projectName)
};
function appDescription() {
    document.write(projectDescription)
};

function openStore() {
    document.write("<a href=\"" + storeLink + "\">" +
        "<img src=\"assets/images/playstore.png\"  />" +
        "<div><span>Baixe Agora</span><strong>Google Play</strong></div></a > ")
};
