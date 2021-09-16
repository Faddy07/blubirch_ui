<template>
  <div class="ma-10 mt-16">
    <v-row justify="space-between">
      <v-card width="300">
        <v-card-text>
          <v-row width="300">
            <v-card-title class="ml-2 pa-0">Filters</v-card-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" text>
              Clear all
            </v-btn>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <h5>CATEGORIES</h5>
          <div v-for="c in checkboxes" :key="c.cLabel">
            <v-checkbox
              class="pa-0"
              dense
              v-model="c.checkbox"
              :label="c.cLabel"
            ></v-checkbox>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <h5>Price in INR</h5>

          <v-slider
            thumb-label
            v-model="sliderValue"
            step="10"
            max="90"
            min="10"
            :label="`${sliderValue} k `"
            ticks="always"
            tick-size="4"
          ></v-slider>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <h5>CONDITION</h5>
          <div v-for="c in cndCheckboxes" :key="c.cLabel">
            <v-checkbox
              class="pa-0 black-text"
              dense
              v-model="c.checkbox"
              :label="c.cLabel"
            ></v-checkbox>
          </div>
        </v-card-text>
      </v-card>

      <v-card width="1100" class="text-left">
        <v-tabs fixed-tabs>
          <v-tab>
            Sort by
          </v-tab>
          <v-tab>
            Newesr First
          </v-tab>
          <v-tab>
            Price-Low to High
          </v-tab>
          <v-tab>
            Price-High to Low
          </v-tab>
          <v-tab>
            Discount
          </v-tab>
        </v-tabs>

        <v-card-text>
          <v-row>
            <v-card
              class="mb-5"
              width="350"
              v-for="i in $store.state.info[page - 1]"
              :key="i.id"
            >
              <v-card-text>
                <v-img
                  position="center"
                  :src="i.img"
                  alt="Mobile pic"
                  aspect-ratio="1"
                  content-class="center"
                  contain
                  class="ml-15"
                ></v-img>
              </v-card-text>

              <v-card-title class="mt-0">{{ i.name }}</v-card-title>

              <v-card-text class="ma-0">
                <h1>₹{{ i.price }}</h1>

                <h4 class="mrp ">₹{{ i.mrp }}</h4>
              </v-card-text>

              <v-card-text>
                <v-row class="ma-2" justify="space-between">
                  <div>
                    <v-card-subtitle class="pa-0"
                      >You Save ₹{{ i.offer }}</v-card-subtitle
                    >
                  </div>
                  <div>
                    <v-card-subtitle class="pa-0">{{
                      i.condition
                    }}</v-card-subtitle>
                  </div>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="handleClick(i)"
                  outlined
                  elevation="3"
                  block
                  text
                >
                  ADD TO CART
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-card-text>
        <v-card-actions class="text-left ma-8">
          <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      page: 1,
      checkbox: true,
      sliderValue: 0,
      checkboxes: [
        {
          checkbox: false,
          cLabel: "Earphone or Headphone",
        },
        {
          checkbox: false,
          cLabel: "Speakers",
        },
        {
          checkbox: false,
          cLabel: "Boy's Clothing",
        },
        {
          checkbox: false,
          cLabel: "Digital Watch",
        },
        {
          checkbox: false,
          cLabel: "Television",
        },
        {
          checkbox: false,
          cLabel: "Microwave",
        },
        {
          checkbox: false,
          cLabel: "Refrigrator",
        },
        {
          checkbox: false,
          cLabel: "Camcorder",
        },
        {
          checkbox: false,
          cLabel: "Electric Shaver",
        },
        {
          checkbox: false,
          cLabel: "Network Products",
        },
      ],
      cndCheckboxes: [
        {
          checkbox: false,
          cLabel: "New",
        },
        {
          checkbox: false,
          cLabel: "Like New",
        },
        {
          checkbox: false,
          cLabel: "Open Box",
        },
      ],
    };
  },
  methods: {
    handleClick(i) {
      console.log(this.sliderValue);
      var isFind = false;
      this.$store.state.cartInfo.find((element) => {
        if (element.id == i.id) {
          isFind = true;

          this.$alertify.error("Item Already in Cart");
        }
      });
      if (!isFind) {
        this.$store.state.cartInfo.push(i);
        this.$alertify.success("Add to Cart Successfully");
      }
    },
  },
  components: {},
};
</script>
