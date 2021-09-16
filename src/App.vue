<template>
  <v-app>
    <v-system-bar fixed dark color="primary" height="40">
      <p>
        See our products before you buy! Visit Bmaxx offline store in Bengaluru.
        visit Store
      </p>
      <v-spacer></v-spacer>
      <p>How Bmaxx works</p>
      <p class="ml-2 mr-2">call Costomer Care: 1800-419-0431</p>
    </v-system-bar>

    <v-app-bar app color="white" class="pr-3 pl-3 mt-8" dark>
      <div>
        <v-img
          max-height="150"
          max-width="250"
          src="./assets/logo-1.svg"
          transition="scale-transition"
        ></v-img>
      </div>
      <v-divider class="mx-4" color="black" vertical></v-divider>

      <div class="d-flex align-center">
        <v-img
          alt="Bmax Logo"
          contain
          src="./assets/bmaxdemo.png"
          transition="scale-transition"
          width="180"
        />
      </div>
      <v-spacer></v-spacer>

      <v-card
        elevation="0"
        class="text-center "
        color="grey lighten-3"
        width="150"
      >
        <div>
          <span style="font-size:10px; color:red ">SALE ENDS IN</span>
          <p style="font-size:10px; color:red">{{ secondsToDhms }}</p>
        </div>
      </v-card>
      <v-btn color="primary" text>
        Refer & Earn
      </v-btn>
      <v-btn color="primary" text>
        My Account
      </v-btn>
      <v-badge
        v-if="$store.state.cartInfo.length"
        :content="$store.state.cartInfo.length"
      >
        <router-link to="/cart">
          <v-icon color="primary">mdi-cart-outline</v-icon>
        </router-link>
      </v-badge>
      <v-icon v-else color="primary">mdi-cart-outline</v-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      seconds: 267800,
      timer: null,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      var sec = this.seconds;
      this.timer = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },
  computed: {
    secondsToDhms() {
      var seconds = Number(this.seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor((seconds % (3600 * 24)) / 3600);
      var m = Math.floor((seconds % 3600) / 60);
      var s = Math.floor(seconds % 60);

      var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hrs ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " mns ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " sec") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    },
  },
};
</script>

<style>
.v-messages {
  display: none;
}
.mrp {
  text-decoration: line-through;
  color: grey;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: black;
}
</style>
