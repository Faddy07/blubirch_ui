<template>
  <div class="ma-10 mt-16">
    <v-row justify="space-between">
      <v-card width="1050">
        <v-card-text>
          <v-row class="ma-2">
            <v-card class="text-center ma-3" width="20" height="20">
              1
            </v-card>
            <v-card-title class="ml-2 pa-0">Order Details</v-card-title>
          </v-row>
          <v-divider></v-divider>

          <div v-if="$store.state.cartInfo.length">
            <v-card v-for="i in $store.state.cartInfo" :key="i.id">
              <v-card-text>
                <v-row align="center">
                  <v-img
                    :src="i.img"
                    alt="Mobile pic"
                    height="100"
                    width="100"
                    position="left"
                    max-width="100px"
                    contain
                  ></v-img>

                  <div>
                    <span>{{ i.condition }}</span>
                    <h3>{{ i.name }}</h3>
                    <h2 class="mt-2 mb-2">₹ {{ i.price }}</h2>
                    <h4 class="mrp" style="display:contents">₹ {{ i.mrp }}</h4>

                    <span class=" ml-5"> ₹{{ i.offer }} off</span>
                  </div>
                  <v-spacer></v-spacer>

                  <div>
                    <v-card-text>
                      <v-row align="center">
                        <v-btn fab x-small dark @click="removeItem(i)">
                          <v-icon dark>
                            mdi-minus
                          </v-icon>
                        </v-btn>
                        <h2 class="ma-2">{{ i.storeCount }}</h2>
                        <v-btn fab x-small dark @click="addItem(i)">
                          <v-icon dark>
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </v-row>
                    </v-card-text>
                  </div>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <v-card-title v-else>
            No Item Found in your cart
          </v-card-title>
        </v-card-text>

        <v-card-actions class="mr-5">
          <v-spacer></v-spacer>
          <v-btn color="primary">
            Continue
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <v-row class="ma-2">
            <v-card class="text-center ma-3" width="20" height="20">
              2
            </v-card>
            <v-card-title class="ml-2 pa-0">Address</v-card-title>
          </v-row>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text>
          <v-row class="ma-2">
            <v-card class="text-center ma-3" width="20" height="20">
              3
            </v-card>
            <v-card-title class="ml-2 pa-0">Payments</v-card-title>
          </v-row>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
      <div>
        <v-card width="400" max-height="500">
          <v-card-title class="grey--text">Order Details</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row width="400">
              <v-card-title class=" ml-2 pa-0 indigo--text"
                >Price ({{ $store.state.cartInfo.length }} Items)</v-card-title
              >
              <v-spacer></v-spacer>
              <v-card-title class="ml-2 pa-0 indigo--text">{{
                $store.getters["total"]
              }}</v-card-title>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-row width="300">
              <v-card-title class="ml-2 pa-0 indigo--text"
                >Delivery Charges</v-card-title
              >
              <v-spacer></v-spacer>
              <v-card-title class="ml-2 pa-0 green--text">Free</v-card-title>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-title primary-title>
            <v-row width="300">
              <v-card-title class="ml-2 pa-0  indigo--text"
                >Amount Payable</v-card-title
              >
              <v-spacer></v-spacer>
              <v-card-title class="ml-2 pa-0 indigo--text">{{
                $store.getters["total"]
              }}</v-card-title>
            </v-row>
          </v-card-title>
        </v-card>
        <v-row class="mt-3" style="max-width:400px" align="center">
          <v-icon size="50">mdi-shield-check</v-icon>
          <p style="max-width:300px">
            Safe and Secure Payments. Easy returns. 100% Authentic products
          </p>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    removeItem(i) {
      if (i.storeCount > 1) {
        i.storeCount--;
      } else {
        this.$alertify
          .confirm(
            "Are you Sure? want to Remove Item from Cart",
            () =>
              (this.$store.state.cartInfo = this.$store.state.cartInfo.filter(
                (item) => item.id !== i.id
              )),
            () => this.$alertify.error("cancel")
          )
          .then((res) => {
            console.log(res);
          });
      }
    },
    addItem(i) {
      if (i.storeCount < 10) {
        i.storeCount++;
      } else {
        this.$alertify.error("Cannot Add more Items");
      }
    },
  },
};
</script>
