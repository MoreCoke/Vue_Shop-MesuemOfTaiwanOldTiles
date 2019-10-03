<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="mb-3">
      <h2 class="font-weight-bold admin--title">優惠券管理</h2>
      <button class="btn btn-primary admin--btn" @click="openModal(true)">建立新優惠券</button>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead class="table-borderless">
          <tr>
            <th width="80" class="text-center">是否啟用</th>
            <th class="pl-3">優惠券名稱</th>
            <th width="130">折扣碼</th>
            <th width="100">折扣</th>
            <th width="100" class="text-center">到期日</th>
            <th width="200" class="pl-5">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td class="text-center align-middle">
              <label class="pl-1 mb-0 align-middle">
                <input type="checkbox" v-model="item.is_enabled" :true-value="1" :false-value="0">
                啟用
              </label>
            </td>
            <td class="pl-3 align-middle">{{item.title}}</td>
            <td class="align-middle">{{item.code}}</td>
            <td class="align-middle">{{item.percent}}</td>
            <td class="text-center align-middle">{{item.due_date | timestamp}}</td>
            <td class="pl-5 align-middle">
              <button
              class="btn btn-outline-primary mr-2"
              @click="openModal(false, item)">
                編輯
              </button>
              <button class="btn btn-outline-danger" @click="openDelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal :temp-coupon="tempCoupon" :is-new="isNew" ref="child" @get_coupons="getCoupons"></Modal>
    <Pagination :pagination="pagination" @page_change="getCoupons"></Pagination>
  </div>
</template>

<script>
import $ from 'jquery';
import Modal from './modal/Offer_modal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isLoading: false,
      isNew: false,
    };
  },
  components: {
    Modal,
    Pagination,
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        // console.log(response);
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    // 又晚半拍⋯⋯
    openModal(isNew, item) {
      this.tempCoupon = {};
      this.date = '';
      if (isNew) {
        this.isNew = true;
        $('#offerModal').modal('show');
      } else {
        this.tempCoupon = item;
        this.$refs.child.test2();
        this.isNew = false;
        $('#offerModal').modal('show');
      }
    },
    openDelModal(item) {
      this.tempCoupon = {};
      this.tempCoupon = item;
      $('#delOfferModal').modal('show');
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/admin.sass'
</style>
