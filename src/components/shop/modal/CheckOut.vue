<template>
  <ValidationObserver ref="observer">
    <div class="row wrap __m0">
      <div class="col-md-10 offset-md-1">
        <table class="font-weight-bold cart--header">
          <tr>
            <td>
              <h3 class="font-weight-bold m-0 cart--header--title">收件人資訊</h3>
            </td>
            <td width="410"></td>
          </tr>
        </table>
        <hr />
        <div class="cart--content">
          <form class="cart--contents">
            <div class="form-group row">
              <label for="username"
                      class="col-sm-1 col-md-2 pl-md-0 pr-md-0 col-form-label">姓名：</label>
              <div class="col-sm-11 col-md-10 pl-md-3">
                <ValidationProvider
                  name="姓名"
                  rules="required|min:2"
                  vid="username"
                  :persist="true"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="請輸入收件人姓名"
                    v-model="customerInfo.name"
                  />
                  <span v-if="errors[0]">＊{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group row">
              <label for="usertel"
                      class="col-sm-1 col-md-2 pl-md-0 pr-md-0 col-form-label">電話：</label>
              <div class="col-sm-11 col-md-10 pl-md-3">
                <ValidationProvider
                  name="電話"
                  rules="required|numeric|min:8|max:10"
                  vid="usertel"
                  :persist="true"
                  v-slot="{ errors }"
                >
                  <input
                    type="tel"
                    class="form-control"
                    id="usertel"
                    maxlength="10"
                    placeholder="請輸入聯絡電話"
                    v-model="customerInfo.tel"
                  />
                  <span v-if="errors[0]">＊{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group row">
              <label for="useremail"
                      class="col-sm-1 col-md-2 pl-md-0 pr-md-0 col-form-label">Email：</label>
              <div class="col-sm-11 col-md-10 pl-md-3">
                <ValidationProvider
                  name="Email"
                  rules="required|email"
                  vid="useremail"
                  :persist="true"
                  v-slot="{ errors }"
                >
                  <input
                    type="email"
                    class="form-control"
                    id="useremail"
                    placeholder="請輸入聯絡Email"
                    v-model="customerInfo.email"
                  />
                  <span v-if="errors[0]">＊{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group row">
              <label for="useradd"
                      class="col-sm-1 col-md-2 pl-md-0 pr-md-0 col-form-label">地址：</label>
              <div class="col-sm-11 col-md-10 pl-md-3">
                <ValidationProvider
                  name="地址"
                  rules="required"
                  vid="useradd"
                  :persist="true"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    id="useradd"
                    placeholder="請輸入收件地址"
                    v-model="customerInfo.address"
                  />
                  <span v-if="errors[0]">＊{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPs"
                      class="col-sm-1 col-md-2 pl-md-0 pr-md-0 col-form-label">備註：</label>
              <div class="col-sm-11 col-md-10 pl-md-3">
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
      <div class="col-md-10 offset-md-1">
        <table class="font-weight-bold cart--footer">
          <tr>
            <td>小提醒：請確認收件資訊無誤再送出 ＾＾</td>
          </tr>
        </table>
      </div>
      <div class="col-11 col-md-4 offset-md-3 col-lg-3 col-xl-2 offset-xl-7">
        <button class="btn btn-outline-light cart--next" @click="changePage(false)">回到購物車</button>
      </div>
      <div class="col-11 col-md-4 col-lg-3 col-xl-2">
        <button type="submit"
                class="btn btn-outline-light cart--next"
                @click="createOrder">送出訂單</button>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zhtw from 'vee-validate/dist/locale/zh_TW.json';

// loop over all rules
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhtw.messages[rule], // add its message
  });
});

export default {
  data() {
    return {
      customerInfo: {},
    };
  },
  methods: {
    // 創建訂單
    async createOrder() {
      // validate before submit
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }

      // Api path
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      // Api data
      const customer = {
        user: {
          name: this.customerInfo.name,
          tel: this.customerInfo.tel,
          email: this.customerInfo.email,
          address: this.customerInfo.address,
        },
        message: this.customerInfo.message,
      };

      // Ajax method
      this.$http.post(api, { data: customer }).then((response) => {
        vm.customerInfo = {};

        // Modal close
        vm.closeModal();

        // Router change
        vm.$router.push(`/shop/order_id=${response.data.orderId}`);

        // reset ValidateObserver (vee-validate)
        vm.customerInfo.name = '';
        vm.customerInfo.tel = '';
        vm.customerInfo.email = '';
        vm.customerInfo.address = '';
        requestAnimationFrame(() => {
          vm.$refs.observer.reset();
        });
      });
    },
    // 控制結帳頁面
    changePage() {
      this.$emit('change_page', false);
    },
    // 關閉頁面
    closeModal() {
      this.$emit('close_modal');
    },
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/_carts.sass'

.cart--contents
  width: 90%
  padding: 1% 0
  @media all and (max-width: 567.98px)
    width: 100%

.cart--footer
  width: 100%
  margin: 20px 0 40px
  text-align: right
  @media all and (max-width: 567.98px)
    text-align: center

.cart--next
  margin-bottom: 20px
  @media all and (max-width: 567.98px)
    font-size: 1rem
</style>
