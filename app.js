new Vue({
    el: "#app",
    data: {
        mes: "",
        cont:0
    },
    methods: {
        handel: function () {
            alert("Hello ");
            this.cont += 1;
        },
    },
});