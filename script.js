Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#helloVue",
        data: {
            titolone: "I'm gonna be the Pirate King",
            rufy:"img/rufy.jpg",
            personaggio: "Monkey D. Rufy"

        }
    });
});

