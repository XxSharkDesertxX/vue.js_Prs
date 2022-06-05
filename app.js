new Vue({
    el:"#app",

   data:{
       points:100,
       Fname:"Ali",
       Lname:"Rahjo",
       FullNmae:"Ali Rahjo"
   },


   computed:{  // computed save file is cache
    skill:function () {
        if (this.points <= 100) {
            return "mobtadi";
        }else{
            return "pisrafte";
        }
    },

    FullNmae:function () {
        return this.Fname + " " + this.Lname;
    }
},

watch:{
    Fname:function (Fname) {
        this.FullNmae = Fname + " " + this.Lname;
    },
    Lname:function (Lname) {
        this.FullNmae= this.Fname + " "+ Lname;
    }
}




});