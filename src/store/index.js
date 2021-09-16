import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: [
      [
        {
          id: 1,
          img:
            "https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UL480_QL65_.jpg",
          name: "Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)",
          price: "9,499",
          mrp: "10,999 ",
          condition: "New",
          storeCount: 1,
          offer: "1,500 (14%)",
        },
        {
          id: 2,
          img:
            "https://m.media-amazon.com/images/I/817clKAKcqL._AC_UL480_QL65_.jpg",
          name: "Redmi 10 Prime Phantom Black 6GB RAM 128GB ROM ",
          price: "14,499",
          mrp: "18,999 ",
          condition: "New",
          storeCount: 1,
          offer: "4,500 (16%)",
        },
        {
          id: 3,
          img:
            "https://m.media-amazon.com/images/I/716nHhG9SWL._AC_UL480_QL65_.jpg",
          name: "Redmi 9 (Carbon Black, 4GB RAM, 64GB Storage)",
          price: "9,499",
          mrp: "10,999.00 ",
          condition: "New",
          storeCount: 1,
          offer: "1,500.00 (14%)",
        },
        {
          id: 4,

          img:
            "https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UL480_QL65_.jpg",
          name: "OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)",
          price: "29,999.00",
          mrp: "10,999.00 ",
          condition: "New",
          storeCount: 1,
          offer: "1,500.00 (14%)",
        },
        {
          id: 5,
          img:
            "https://m.media-amazon.com/images/I/71ByNT34bfL._AC_UL480_QL65_.jpg",
          name: "boAt Airdopes 121v2 Truly Wireless Bluetooth (Active Black)",
          price: "1,299.00 ",
          mrp: "2,990.00 ",
          condition: "New",
          storeCount: 1,
          offer: "1,691.00 (57%)",
        },
        {
          id: 6,

          img:
            "https://m.media-amazon.com/images/I/61DKcGr12OL._AC_UL480_QL65_.jpg",
          name: "boAt Airdopes 121v2 Truly Wireless Bluetooth (Active Black)",
          price: "1,999.00",
          mrp: "2,190.00",
          condition: "New",
          storeCount: 1,
          offer: "191.00 (9%)",
        },
      ],
      [
        {
          id: 7,

          img:
            "https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UL480_QL65_.jpg",
          name: "boAt Airdopes 121v2 Truly Wireless Bluetooth (Active Black)",
          price: "11,499.00 ",
          mrp: "13,999.00",
          condition: "New",
          storeCount: 1,
          offer: "2,500.00 (18%)",
        },
        {
          id: 8,
          img: "https://m.media-amazon.com/images/I/71AwWtT5AUL._SL1500_.jpg",
          name: "realme narzo 30 (Racing Blue, 6GB RAM, 128GB Storage)",
          price: "15,499.00",
          mrp: "16,999.00",
          condition: "New",
          storeCount: 1,
          offer: "1,500.00 (9%)",
        },
        {
          id: 8,

          img:
            "https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UL480_QL65_.jpg",
          name: "boAt Airdopes 121v2 Truly Wireless Bluetooth (Active Black)",
          price: "11,499.00 ",
          mrp: "13,999.00",
          condition: "New",
          storeCount: 1,
          offer: "2,500.00 (18%)",
        },
        {
          id: 9,
          img: "https://m.media-amazon.com/images/I/71AwWtT5AUL._SL1500_.jpg",
          name: "realme narzo 30 (Racing Blue, 6GB RAM, 128GB Storage)",
          price: "15,499.00",
          mrp: "16,999.00",
          condition: "New",
          storeCount: 1,
          offer: "1,500.00 (9%)",
        },
      ],
    ],
    cartInfo:[
      {
        id: 8,
        img: "https://m.media-amazon.com/images/I/71AwWtT5AUL._SL1500_.jpg",
        name: "realme narzo 30 (Racing Blue, 6GB RAM, 128GB Storage)",
        price: "15,499.00",
        mrp: "16,999.00",
        condition: "New",
        storeCount: 1,
        offer: "1,500.00 (9%)",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    total(state){

      let total = [];
    
      Object.entries(state.cartInfo).forEach(([key, val]) => {
        console.log(val)
          if(val.storeCount < 1){
            total.push(parseFloat(val.price.replace(/,/g, ''))) 
          }else{
            
            var d =  parseFloat(val.price.replace(/,/g, '')); 
            total.push(parseFloat(d * val.storeCount));
          }
      });
      var tot = total.reduce(function(total, num){ return total + num }, 0);
      
      
       tot =  Number(parseFloat(tot).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2
    }
      );
      // return total.reduce(function(total, num){ return total + num }, 0);
      return tot;
    
    } 
  },
  modules: {
  },
})
