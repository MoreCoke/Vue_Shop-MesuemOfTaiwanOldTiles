<template>
  <div class="container mt-4">
    <loading :active.sync="isLoading"></loading>
    <div class="mb-4">
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
            <td class="text-center align-middle">
              <input type="checkbox" id="is_enable" v-model="item.is_enable" :true-value="1" :false-value="0"/>
              <label for="is_enable" class="pl-1 mb-0 align-middle">啟用</label>
            </td>
            <td class="pl-3 align-middle">{{item.category}}</td>
            <td class="align-middle">{{item.title}}</td>
            <td class="text-right align-middle">{{item.origin_price | currency}}</td>
            <td class="text-right align-middle">{{item.price | currency}}</td>
            <td class="pl-5">
              <button class="btn btn-outline-primary mr-2"
                      @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger" @click="openDelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal :temp-product="tempProduct" :is-new="isNew" @get_products="getProducts"></Modal>
  </div>
</template>

<script>
import $ from 'jquery';
import Modal from './modal/Product_modal.vue';

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
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMAPI
      }/admin/products?page=${1}`;
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
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    openDelModal(item) {
      this.tempProduct = {};
      this.tempProduct = item;
      $('#delProductModal').modal('show');
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
