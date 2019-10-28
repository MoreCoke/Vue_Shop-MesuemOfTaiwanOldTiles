<template>
  <div class="container">
    <loading :active.sync="isLoading" color="#71A2A7"></loading>
    <div class="mb-3">
      <h2 class="font-weight-bold admin--title">訂單列表</h2>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead class="table-borderless">
          <tr>
            <th width="80" class="text-center">是否付款</th>
            <th class="pl-4">客戶資訊</th>
            <th class="pr-4">訂單資訊</th>
            <th width="80">購買日期</th>
            <th width="100" class="text-right">應付金額</th>
            <th width="180" class="pl-5">客戶留言</th>
            <th width="200" class="pl-5">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-show="!orders">
            <td colspan="5">
              <p class="text-danger">無法取得訂單資料</p>
            </td>
          </tr>
          <tr v-for="item in orders" :key="item.id">
            <!-- 是否付款 -->
            <td class="text-center align-middle">
              <span v-if="item.is_paid === true" class="text-primary">付款成功</span>
              <span v-else class="text-danger">尚未付款</span>
            </td>
            <!-- 客戶資訊 -->
            <td class="align-middle pl-4">
              <ul class="list-unstyled mb-0">
                <li class="font-weight-bold">{{item.user? item.user.name : '-'}}</li>
                <!-- tel filter -->
                <li>TEL： {{item.user? item.user.tel : '-'}}</li>
                <li>Email：
                  <a :href="`mailto:${item.user? item.user.email:''}`">
                    {{item.user? item.user.email : '-'}}
                  </a>
                </li>
                <li>ADD： {{item.user? item.user.address : '-'}}</li>
              </ul>
            </td>
            <!-- 訂單資訊 -->
            <td class="align-middle pr-4">
              <ul class="list-unstyled mb-0" v-for="(product, key) in item.products" :key="key">
                <li>{{product.product.title}} （{{product.qty}}項）</li>
              </ul>
            </td>
            <!-- 購買日期 -->
            <td class="align-middle">{{item.create_at | timestamp}}</td>
            <!-- 應付金額 -->
            <td class="text-right align-middle">{{item.total | currency}}</td>
            <!-- 客戶留言 -->
            <td class="align-middle pl-5">{{item.message}}</td>
            <!-- 編輯 -->
            <td class="align-middle pl-5">
              <button class="btn btn-outline-primary mr-2" @click="openModal(item)">修改</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal :temp-order="tempOrder" @get_orders="getOrders"></Modal>
    <Pagination v-show="pagination"
                :pagination="pagination"
                @page_change="getOrders"></Pagination>
  </div>
</template>

<script>
import $ from 'jquery';
import Modal from './modal/Order_modal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    Modal,
    Pagination,
  },
  methods: {
    // 取得多筆訂單列表
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
    // 打開編輯視窗
    openModal(item) {
      // 避免因為傳參考同步修改到畫面上的資料
      this.tempOrder = Object.assign({}, item);
      $('#orderModal').modal('show');
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped lang="sass">
.admin--title
  display: inline
  font-size: 2.5em
  letter-spacing: 1px

.admin--btn
  float: right

.table-responsive
  clear: both
</style>
