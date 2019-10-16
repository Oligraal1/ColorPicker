new Vue({
    el: '#app',

    data: {
        color: "",
        lastcolor: [],
        success: false,
    },
    methods: {
        colorender() {
            return this.color;
        },
        addcolor() {
            this.lastcolor.push(this.color);
            this.color = "";
            this.success = true;
            console.log(success);
        }
    }
});