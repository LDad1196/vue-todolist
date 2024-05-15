const { createApp } = Vue

createApp({

    data() {
        return {
            ToDoList: [
                {titolo:"alzarsi", done: false},
                {titolo:"fare colazione", done: false},
                {titolo:"prendere il caffè", done: false},
                {titolo:"lavarsi i denti", done: false},
                {titolo:"entrare in call", done: false},
            ],
            newActivity:"",
        }
    },
    methods: {
       checkIfDone(index){
        if(this.ToDoList[index].done == true) {
            return "color-green";
        }

        else if (this.ToDoList[index].done == false) {
            return "color-red"
        }
       }
    },
    mounted() {
       
    }

}).mount('#app')