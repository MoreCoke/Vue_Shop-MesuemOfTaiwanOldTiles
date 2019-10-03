<template>
  <div class="row">
    <div class="col-10 offset-1">
      <table class="font-weight-bold cart--header">
        <tr>
          <td colspan="4">
            <h3 class="font-weight-bold m-0 cart--header--title">收件人資訊</h3>
          </td>
        </tr>
      </table>
      <hr />
      <div class="cart--content">
        <form class="cart--contents">
          <div class="form-group row">
            <label for="inputName" class="col-sm-1 pl-0 pr-0 col-form-label">姓名：</label>
            <div class="col-sm-11 pl-3">
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="請輸入收件人姓名"
                v-model="customerInfo.name"
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputTel" class="col-sm-1 pl-0 pr-0 col-form-label">電話：</label>
            <div class="col-sm-11 pl-3">
              <input
                type="number"
                class="form-control"
                id="inputTel"
                placeholder="請輸入聯絡電話"
                v-model="customerInfo.tel"
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-1 pl-0 pr-0 col-form-label">Email：</label>
            <div class="col-sm-11 pl-3">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="請輸入聯絡Email"
                v-model="customerInfo.email"
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputAdd" class="col-sm-1 pl-0 pr-0 col-form-label">地址：</label>
            <div class="col-sm-11 pl-3">
              <input
                type="text"
                class="form-control"
                id="inputAdd"
                placeholder="請輸入收件地址"
                v-model="customerInfo.address"
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPs" class="col-sm-1 pl-0 pr-0 col-form-label">備註：</label>
            <div class="col-sm-11 pl-3">
              <textarea
                name
                id="inputPs"
                cols="30"
                rows="3"
                class="form-control"
                v-model="customerInfo.message"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-12">
      <hr class="cart--hr" />
    </div>
    <div class="col-10 offset-1">
      <table class="text-right font-weight-boldZ cart--footer">
        <tr>
          <td>小提醒：請確認收件資訊無誤再送出 ＾＾</td>
        </tr>
      </table>
    </div>
    <div class="col-12">
      <button class="btn btn-outline-light cart--next" @click="changePage(1)">回到購物車</button>
      <!-- <router-link to="/shop/order"> -->
        <button type="submit" class="btn btn-outline-light cart--next" @click="createOrder">送出訂單</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: {
    isStep: Number
  },
  data() {
    return {
      customerInfo: {}
    };
  },
  methods: {
    changePage() {
      this.$emit("change_page", 1);
    },
    closeModal() {
      this.$emit("close_modal");
    },
    createOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const vm = this;
      const customer = {
        user: {
          name: this.customerInfo.name,
          tel: this.customerInfo.tel,
          email: this.customerInfo.email,
          address: this.customerInfo.address
        },
        message: this.customerInfo.message
      };
        $('#cartModal').modal('hide');
      this.$http.post(api, { data: customer }).then(response => {
        vm.customerInfo = {};
        vm.closeModal();
        console.log('createorder',response)
        vm.$router.push(`/shop/order_id=${response.data.orderId}`);
      });
    }
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/carts.sass'

.cart--contents
  width: 90%
.cart--footer
  width: 100%
  margin: 20px 0 40px
.cart--next
  width: 12%
  position: relative
  margin-left: 30px
  left: 64%
  font-size: 1.2em
</style>
