<template>
  <div>
    <header class="row header">
      <div class="col-12 col-sm-10">
        <h1 class="title" data-40="font-size: 3.5em" data-100="font-size: 2.5em">台灣花磚博物館</h1>
      </div>
      <div class="col-12 col-sm-2 text-info icon">
        <i class="fas fa-search"></i>
        <router-link to="/login">
          <i class="fas fa-edit"></i>
        </router-link>
        <i class="fas fa-heart"></i>
        <a href="#" class="fas fa-shopping-cart" @click.prevent="openModal"></a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$emit('open_cart_modal');
    },
  },
  mounted() {
    // skrollr init
    const s = skrollr.init();
  },
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'
@import '@/assets/text.sass'

.header
  transition: .5s

.title
  font-size: 3.5em
  font-weight: 700
  letter-spacing: 5px
  @media all and (max-width: 768px)
    font-size: 3em

.icon
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 1.75em
</style>
