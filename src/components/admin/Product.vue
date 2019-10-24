<template>
  <div class="container">
    <loading :active.sync="status.isLoading" color="#71A2A7"></loading>
    <div class="mb-3">
      <h2 class="font-weight-bold admin--title">產品列表</h2>
      <button class="btn btn-primary admin--btn" @click="openModal(true)">建立新產品</button>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead class="table-borderless">
          <tr>
            <th width="80" class="text-center">是否啟用</th>
            <th width="150" class="pl-3">分類</th>
            <th>產品名稱</th>
            <th width="100" class="text-right">原價</th>
            <th width="100" class="text-right">售價</th>
            <th width="200" class="pl-5">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <!-- 是否啟用 -->
            <td class="text-center align-middle">
              <span v-if="item.is_enabled === 1" class="text-primary">啟用</span>
              <span v-else class="text-danger">未啟用</span>
            </td>
            <!-- 分類 -->
            <td class="pl-3 align-middle">{{item.category}}</td>
            <!-- 產品名稱 -->
            <td class="align-middle">{{item.title}}</td>
            <!-- 原價 -->
            <td class="text-right align-middle">{{item.origin_price | currency}}</td>
            <!-- 售價 -->
            <td class="text-right align-middle">{{item.price | currency}}</td>
            <!-- 編輯 -->
            <td class="pl-5">
              <button class="btn btn-outline-primary mr-2"
                      @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger" @click="openDelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal
      :temp-product="tempProduct"
      :is-new="status.isNew"
      @get_products="getProducts"
    ></Modal>
    <Pagination :pagination="pagination" @page_change="getProducts"></Pagination>
  </div>
</template>

<script>
import $ from 'jquery';
import Modal from './modal/Product_modal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      status: {
        isLoading: false,
        isNew: false,
      },
    };
  },
  components: {
    Modal,
    Pagination,
  },
  methods: {
    // 取得多筆產品列表
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
      vm.status.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.status.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        console.log(vm.products);
        console.log(vm.pagination);
      });
    },
    // 打開編輯視窗
    openModal(isNew, item) {
      this.tempProduct = {};
      if (isNew) {
        this.status.isNew = true;
      } else {
        // 避免因為傳參考同步修改到畫面上的資料
        this.tempProduct = Object.assign({}, item);
        this.status.isNew = false;
      }
      $('#productModal').modal('show');
    },
    // 打開刪除視窗
    openDelModal(item) {
      this.tempProduct = item;
      $('#delProductModal').modal('show');
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/_admin.sass'
</style>
