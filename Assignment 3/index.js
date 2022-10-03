Vue.createApp({
    data() {
        return {

            Word: null,
            number: 0,
            message: "",
            errmsg: "Type a word and amount of times you want it to be shown",
        }
    },
    methods: {
        duplicator(Word, number) {
           this.message = Word.repeat(number)

        }
    }
}).mount("#app")