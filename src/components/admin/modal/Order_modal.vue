<template>
  <div>
    <!-- edit Modal -->
    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ValidationObserver ref="observer">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h4 class="modal-title pl-2" id="exampleModalLabel">
                <span class="align-middle">修改客戶訂單資料</span>
              </h4>
              <p class="text-danger m-0 align-bottom">＊請小心修改</p>
              <button
                type="button"
                class="close text-light"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body ml-2 mr-2" v-if="tempOrder.user">
              <div class="row">
                <div class="col">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="username">客戶名稱</label>
                      <ValidationProvider
                        name="標題"
                        rules="required|min:1"
                        vid="username"
                        :persist="true"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="請輸入客戶名稱"
                          v-model="tempOrder.user.name"
                        />
                        <span class="text-danger" v-if="errors[0]">
                          {{errors[0]}}
                          <br />
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="tel">電話</label>
                      <ValidationProvider
                        name="電話"
                        rules="required|numeric|min:8|max:10"
                        vid="tel"
                        :persist="true"
                        v-slot="{ errors }"
                      >
                        <input
                          type="tel"
                          class="form-control"
                          id="tel"
                          maxlength="10"
                          placeholder="請輸入客戶電話"
                          v-model="tempOrder.user.tel"
                        />
                        <span class="text-danger" v-if="errors[0]">
                          {{errors[0]}}
                          <br />
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group col-md-2">
                      <div class="form-check pt-4 pl-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="is_enabled"
                          v-model="tempOrder.is_paid"
                        />
                        <label class="form-check-label" for="is_enabled">是否付款</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <ValidationProvider
                      name="Email"
                      rules="required|email"
                      vid="email"
                      :persist="true"
                      v-slot="{ errors }"
                    >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="請輸入客戶Email"
                        v-model="tempOrder.user.email"
                      />
                      <span class="text-danger" v-if="errors[0]">
                        {{errors[0]}}
                        <br />
                      </span>
                    </ValidationProvider>
                    <label for="add" class="mt-3">地址</label>
                    <ValidationProvider
                      name="地址"
                      rules="required"
                      vid="add"
                      :persist="true"
                      v-slot="{ errors }"
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="add"
                        placeholder="請輸入客戶地址"
                        v-model="tempOrder.user.address"
                      />
                      <span class="text-danger" v-if="errors[0]">
                        {{errors[0]}}
                        <br />
                      </span>
                    </ValidationProvider>
                    <label for="msg" class="mt-3">留言</label>
                    <textarea
                      id="msg"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="請輸入客戶備註"
                      v-model="tempOrder.message"
                    ></textarea>
                  </div>
                </div>
                <!-- <div class="col-sm-7">
                  <h5 class="font-weight-bold text-black">訂單資訊</h5>
                  <hr />

                  <div class="form-row">
                    <div class="form-group col-md-9">
                      <label for="title">產品名稱</label>
                      <input
                        type="text"
                        class="form-control mb-1"
                        id="title"
                        v-for="item in tempOrder.products"
                        :key="item.id"
                        v-model="item.product.title"
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="num">數量</label>
                      <input
                        type="number"
                        class="form-control mb-1"
                        id="num"
                        v-for="item in tempOrder.products"
                        :key="item.id"
                        v-model="item.qty"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>應付金額</label>
                    <input type="number" class="form-control" id="num" v-model="tempOrder.total" />
                  </div>
                  
                </div>-->
              </div>
            </div>
            <div class="modal-body ml-2 mr-2" v-else>
              <p class="mt-3">此用戶未填寫購買資訊。</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @dblclick="updatedOrder">
                <i class="fas fa-spinner fa-spin" v-if="status.isLoading"></i>
                雙擊確認修改
              </button>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </div>
    <!-- del Modal -->
    <div
      class="modal fade"
      id="delOrderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger">
              <i class="fas fa-spinner fa-spin" v-if="status.isLoading"></i>
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import zhtw from "vee-validate/dist/locale/zh_TW";

// loop over all rules
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhtw.messages[rule] // add its message
  });
}

export default {
  props: {
    tempOrder: Object
  },
  data() {
    return {
      status: {
        isLoading: false
      }
    };
  },
  methods: {
    async updatedOrder() {
      // validate before submit
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }

      // Api path
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;

      // add Loading animation
      vm.status.isLoading = true;

      // Ajax (vue axios)
      this.$http.put(api, { data: vm.tempOrder }).then(response => {
        // console.log(response);

        // remove Loading animation
        vm.status.isLoading = false;

        // Modal close
        $("#orderModal").modal("hide");

        // update Orders list
        vm.$emit("get_orders");

        // reset ValidateObserver (vee-validate)
        vm.tempOrder.user.name = "";
        vm.tempOrder.user.tel = "";
        vm.tempOrder.user.email = "";
        vm.tempOrder.user.address = "";
        requestAnimationFrame(() => {
          vm.$refs.observer.reset();
        });
      });
    }
  }
};
</script>

<style scoped lang="sass">
.modal-dialog
  margin: 50px 25%
</style>
