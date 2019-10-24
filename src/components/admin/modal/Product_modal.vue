<template>
  <div>
    <!-- edit Modal -->
    <div
      class="modal fade"
      id="productModal"
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
                <span class="align-middle">{{ isNew? '新增產品' : '編輯產品' }}</span>
              </h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body ml-2 mr-2">
              <div class="row">
                <div class="col-sm-4">
                  <h5 class="font-weight-bold text-black">圖片編輯</h5>
                  <hr />
                  <div class="form-group">
                    <label for="image">請輸入圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      id="image"
                      placeholder="請輸入圖片連結"
                      v-model="tempProduct.imageUrl"
                    />
                  </div>
                  <div class="form-group custom-file">
                    <label for="customFile">
                      或 上傳圖片
                      <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                    </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      ref="files"
                      @change="uploadFile"
                    />
                  </div>
                  <img img class="img-fluid" alt :src="tempProduct.imageUrl" />
                </div>
                <div class="col-sm-8">
                  <h5 class="font-weight-bold text-black">產品內容</h5>
                  <hr />
                  <div class="form-group">
                    <label for="title">標題</label>
                    <ValidationProvider
                      name="標題"
                      rules="required|min:1"
                      vid="title"
                      :persist="true"
                      v-slot="{ errors }"
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="請輸入標題"
                        v-model="tempProduct.title"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <ValidationProvider
                        name="分類"
                        rules="required|oneOf:台灣花磚,花磚小鏡子,花磚磁鐵,花磚竹杯墊"
                        vid="category"
                        :persist="true"
                        v-slot="{ errors }"
                      >
                        <select
                          name="category"
                          id="category"
                          class="custom-select"
                          v-model="tempProduct.category"
                        >
                          <!-- 預設選項無法渲染出 -->
                          <option value disabled selected>--請選擇--</option>
                          <option :value="item"
                                  v-for="(item,key) in category"
                                  :key="key">{{item}}</option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">單位</label>
                      <input
                        type="unit"
                        class="form-control"
                        id="unit"
                        placeholder="請輸入單位"
                        v-model="tempProduct.unit"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <input
                        type="number"
                        class="form-control"
                        id="origin_price"
                        placeholder="請輸入原價"
                        v-model="tempProduct.origin_price"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <ValidationProvider
                        name="售價"
                        rules="required|numeric|min_value:1"
                        vid="price"
                        :persist="true"
                        v-slot="{ errors }"
                      >
                        <input
                          type="number"
                          class="form-control"
                          id="price"
                          placeholder="請輸入售價"
                          v-model="tempProduct.price"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="description"
                      placeholder="請輸入產品描述"
                      v-model="tempProduct.description"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="content"
                      placeholder="請輸入產品說明內容"
                      v-model="tempProduct.content"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="is_enabled"
                        v-model="tempProduct.is_enabled"
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
              <button type="button"
                      class="btn btn-outline-secondary"
                      data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="updatedProduct">
                <i class="fas fa-spinner fa-spin" v-if="status.isLoading"></i>
                確認
              </button>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </div>
    <!-- del Modal -->
    <div
      class="modal fade"
      id="delProductModal"
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
            <button type="button" class="btn btn-danger" @click="delProduct(tempProduct.id)">
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
import $ from 'jquery';

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
  props: {
    tempProduct: Object,
    isNew: Boolean,
  },
  data() {
    return {
      category: {
        I: '台灣花磚',
        II: '花磚小鏡子',
        III: '花磚磁鐵',
        IV: '花磚竹杯墊',
      },
      status: {
        fileUploading: false,
        isLoading: false,
      },
    };
  },
  methods: {
    async updatedProduct() {
      // validate before submit
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }

      // Api path
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;

      // add Loading animation
      vm.status.isLoading = true;

      // Ajax method
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }

      // Ajax (vue axios)
      this.$http[httpMethod](api, { data: vm.tempProduct }).then(() => {
        // remove Loading animation
        vm.status.isLoading = false;

        // Modal close
        $('#productModal').modal('hide');

        // update Products list
        vm.$emit('get_products');

        // reset ValidateObserver (vee-validate)
        vm.tempProduct.title = '';
        vm.tempProduct.category = '';
        vm.tempProduct.price = '';
        requestAnimationFrame(() => {
          vm.$refs.observer.reset();
        });
      });
    },
    delProduct() {
      // Api path
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;

      // add Loading animation
      vm.status.isLoading = true;

      // Ajax (vue axios)
      this.$http.delete(api).then(() => {
        // remove Loading animation
        vm.status.isLoading = false;

        // Modal close
        $('#delProductModal').modal('hide');

        // update Products list
        vm.$emit('get_products');
      });
    },
    uploadFile() {
      // Api path
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;

      const uploadFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      vm.status.fileUploading = true;
      this.$http
        .post(api, formData, {
          header: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;
            vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
            vm.status.fileUploading = false;
            vm.tempProduct.image = vm.tempProduct.title;
          } else {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
            vm.status.fileUploading = false;
          }
        });
    },
  },
};
</script>

<style scoped lang="sass">
.modal-dialog
  margin: 50px 20%
</style>
