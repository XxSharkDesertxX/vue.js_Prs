new Vue({
    el:"#app",

    data:{
        tasks:[
            {body:"practice" , complet:false},
            {body:"practice agien" , complet:false},
            {body:"dont sad and continue " , complet:true}
        ]
    },


    methods: {
        toggleCompleted:function (task) {
            return task.complet = !task.complet; 
        }
    },


});



// $vm0; name vue js for console log the time dont use of variable and send to this ....
