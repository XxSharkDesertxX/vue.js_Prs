new Vue({
    el:"#app",

    data:{
        plans:[
            {name:"unlimeted" , price:500},
            {name:"profetenal" , price:400},
            {name:"heige" , price:300},
            {name:"modeum" , price:200},
            {name:"free" , price:0},
        ],
        activated:{},
    },

    methods: {
        setActive:function(plan){
            this.activated = plan;
        }
    },

    components:{
        plan:{
            template:"#plan-template",
            props:['plan','active'],
            methods:{ 
                activate:function () {
                    this.$emit("activate", this.plan);
                }
            },
            computed:{
                isactive:function () {
                    return (this.active == this.plan);
                },
                isUpgrade:function () {
                    return (this.active.price < this.plan.price);
                }
            }
        }
    }

});