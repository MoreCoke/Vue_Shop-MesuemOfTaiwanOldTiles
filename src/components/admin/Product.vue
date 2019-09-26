<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
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
            <th width="180" class="pl-5">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <!-- 外面也可以修改啟用狀態 -->
            <!-- 是否啟用 -->
            <td class="text-center align-middle">
              <label
                class="pl-1 mb-0 align-middle"
                :class="item.is_enabled === 1? 'text-primary':''"
              >
                <input type="checkbox" v-model="item.is_enabled" :true-value="1" :false-value="0" />
                {{item.is_enabled? '啟用':'未啟用'}}
              </label>
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
      :is-new="isNew"
      @get_products="getProducts"
      @updated-product="updatedProduct"
      ref="child"
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
      isLoading: false,
      isNew: false,
    };
  },
  components: {
    Modal,
    Pagination,
  },
  methods: {
    updatedProduct(item) {
      console.log(this);
      // 一直都是發送更動前的資料
      this.tempProduct = Object.assign({}, item);
      this.tempProduct.is_enabled = item.is_enabled;
      console.log(this.tempProduct);
      this.$refs.child.updatedProduct();
    },
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/admin/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      console.log(item);
      this.tempProduct = {};
      if (isNew) {
        this.isNew = true;
      } else {
        // 避免因為傳參考同步修改到畫面上的資料
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
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
