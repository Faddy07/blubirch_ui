import Vue from "vue"
import VueAlertify from "vue-alertify"
 
Vue.use(VueAlertify)
 
var vm = new Vue({
  el: "#main",
  methods:{
  	success:function(val){
    	this.$alertify.success(val)
    },
    alert:function(){
    	this.$alertify.alert("This is alert", () =>
        this.$alertify.warning("alert is closed"))
    },
    confirm:function(){
    	this.$alertify.confirm("This is comfirm", ()=>
        	this.$alertify.success("ok")
        ,() =>this.$alertify.error("cancel")
        )
    },
    prompt:function(){
    	this.$alertify.prompt("This is prompt", "default value", (evt, value)=>
        	this.$alertify.success("ok: " + value)
        , () => this.$alertify.error("cancel")
        )
    },
  },
//   mounted: function(){
//   	setTimeout(()=>{
//     	this.$alertify.success("Hell Alertify")
//     }, 500)
//   }
})

export default vm;