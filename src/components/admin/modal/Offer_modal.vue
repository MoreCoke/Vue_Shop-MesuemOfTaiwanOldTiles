<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- edit Modal -->
    <div
      class="modal fade"
      id="offerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h4 class="modal-title pl-2" id="exampleModalLabel">
              <span class="align-middle">{{isNew? "建立新優惠券":"編輯優惠券"}}</span>
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body ml-2 mr-2">
            <div class="row">
              <div class="col">
                <div class="form-row">
                  <div class="form-group col-md-9">
                    <label for="title">優惠券名稱</label>
                    <input
                      type="text"
                      class="form-control mb-1"
                      id="title"
                      v-model="tempCoupon.title"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="num">折扣（0-100 折）</label>
                    <input
                      type="number"
                      class="form-control mb-1"
                      id="num"
                      v-model="tempCoupon.percent"
                      min="0"
                      max="100"
                      step="5"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-7">
                    <label>折扣碼（僅限8位英數字）</label>
                    <input
                      type="text"
                      class="form-control"
                      id="num"
                      v-model="tempCoupon.code"
                      maxlength="8"
                    />
                  </div>
                  <div class="form-group col-md-5">
                    <label>到期日</label>
                    <input type="date" class="form-control" id="num" v-model="date" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempCoupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updatedCoupons">
              <i class="fas fa-spinner fa-spin" v-if="status.loading"></i>
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- del Modal -->
    <div
      class="modal fade"
      id="delOfferModal"
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
            <button type="button" class="btn btn-danger" @click="delCoupon">
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
    tempCoupon: Object,
    isNew: Boolean,
  },
  data() {
    return {
      isLoading: false,
      status: {
        loading: false,
      },
      date: '',
    };
  },
  methods: {
    test2(){
      if(!this.isNew){
              let timestamp = new Date(this.tempCoupon.due_date * 1000);
        let dd = new Date(timestamp).getDate();
        if (dd < 10) {
          dd = `0${dd}`;
        }
        let MM = new Date(timestamp).getMonth() + 1;
        if (MM < 10) {
          MM = `0${MM}`;
        }
        let yyyy = new Date(timestamp).getFullYear();
        let time = `${yyyy}-${MM}-${dd}`;
        this.date = time;
        console.log(this.date)
      }
    },
    updatedCoupons() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/admin/coupon`;
      const vm = this;
      const date = Math.floor(new Date(vm.date) / 1000);
      vm.tempCoupon.due_date = date;
      vm.isLoading = true;
      vm.status.loading = true;
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        console.log(response);
        vm.date = '';
        vm.isLoading = false;
        vm.status.loading = false;
        $('#offerModal').modal('hide');
        vm.$emit('get_coupons');
      });
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/admin/coupon/${this.tempCoupon.id}`;
      const vm = this;
      vm.status.loading = true;
      this.$http.delete(api).then((response) => {
        console.log(response.data);
        vm.status.loading = false;
        $('#delOfferModal').modal('hide');
        vm.$emit('get_coupons');
      });
    },
  },
};
</script>
