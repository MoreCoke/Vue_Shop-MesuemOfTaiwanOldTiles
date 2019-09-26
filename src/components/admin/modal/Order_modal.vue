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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h4 class="modal-title pl-2" id="exampleModalLabel">
              <span class="align-middle">修改訂單</span>
            </h4>
            <p class="text-danger m-0 align-bottom">＊請小心修改</p>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body ml-2 mr-2">
            <div class="row">
              <div class="col-sm-5">
                <h5 class="font-weight-bold text-black">客戶資料</h5>
                <hr />
                <div class="form-group" v-if="tempOrder.user">
                  <label for="username">客戶名稱</label>
                  <input type="text"
                          class="form-control"
                          id="username"
                          placeholder="請輸入客戶名稱"
                          v-model="tempOrder.user.name"/>
                  <label for="tel" class="mt-3">電話</label>
                  <input type="tel"
                          class="form-control"
                          id="tel"
                          placeholder="請輸入客戶電話"
                          v-model="tempOrder.user.tel"/>
                  <label for="email" class="mt-3">Email</label>
                  <input type="email"
                          class="form-control"
                          id="email"
                          placeholder="請輸入客戶Email"
                          v-model="tempOrder.user.email"/>
                  <label for="add" class="mt-3">地址</label>
                  <input type="text"
                          class="form-control"
                          id="add"
                          placeholder="請輸入客戶地址"
                          v-model="tempOrder.user.address"/>
                  <label for="msg" class="mt-3">留言</label>
                  <textarea id="msg"
                            cols="30"
                            rows="10"
                            class="form-control"
                            placeholder="請輸入客戶備註"
                            v-model="tempOrder.message"></textarea>
                </div>
              </div>
              <div class="col-sm-7">
                <h5 class="font-weight-bold text-black">訂單資訊</h5>
                <hr />

                <div class="form-row">
                  <div class="form-group col-md-9">
                    <label for="title">產品名稱</label>
                    <input type="text"
                            class="form-control mb-1"
                            id="title"
                            v-for="item in tempOrder.products"
                            :key="item.id"
                            v-model="item.product.title">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="num">數量</label>
                    <input type="number"
                            class="form-control mb-1"
                            id="num"
                            v-for="item in tempOrder.products"
                            :key="item.id"
                            v-model="item.qty">
                  </div>
                </div>
                <div class="form-group">
                  <label>應付金額</label>
                  <input type="number" class="form-control" id="num" v-model="tempOrder.total">
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input"
                          type="checkbox"
                          id="is_enabled"
                          v-model="tempOrder.is_paid"/>
                    <label class="form-check-label" for="is_enabled">是否付款</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @dblclick="updatedOrder">
              <i class="fas fa-spinner fa-spin" v-if="status.loading"></i>
              雙擊確認修改
            </button>
          </div>
        </div>
      </div>
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
              <i class="fas fa-spinner fa-spin" v-if="status.loading"></i>
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    tempOrder: Object,
  },
  data() {
    return {
      isLoading: false,
      status: {
        loading: false,
      },
    };
  },
  methods: {
    updatedOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/admin/order/${this.tempOrder.id}`;
      const vm = this;
      vm.isLoading = true;
      vm.status.loading = true;
      this.$http.put(api, { data: vm.tempOrder }).then((response) => {
        console.log(response);
        $('#orderModal').modal('hide');
        vm.isLoading = false;
        vm.status.loading = false;
        vm.$emit('get_orders');
      });
    },
  },
};
</script>
