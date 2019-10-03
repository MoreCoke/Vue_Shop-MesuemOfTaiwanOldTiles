<template>
  <div>
    <loading :active.sync="status.isLoading"></loading>
    <!-- edit Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ValidationObserver reset ref="observer" tag="form">
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
                  <!-- 改好看一點 -->
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
                    <!-- <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      ref="files"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>-->
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
                          <option :value="item" v-for="(item,key) in category" :key="key">{{item}}</option>
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
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
              <!-- <ValidationProvider rules="required" v-slot="{ changed }"> -->
              <button type="button" class="btn btn-primary" @click="updatedProduct">
                <i class="fas fa-spinner fa-spin" v-if="status.loading"></i>
                確認
              </button>
              <!-- </ValidationProvider> -->
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
    tempProduct: Object,
    isNew: Boolean
  },
  data() {
    return {
      category: {
        one: "台灣花磚",
        two: "花磚小鏡子",
        three: "花磚磁鐵",
        four: "花磚竹杯墊"
      },
      // category: ["台灣花磚", "花磚小鏡子", "花磚磁鐵", "花磚竹杯墊"],
      status: {
        fileUploading: false,
        isLodaing: false
      }
    };
  },
  methods: {
    async updatedProduct() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        // ABORT!!
        return;
      }
      // 🐿 ship it
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      const vm = this;
      vm.status.isLodaing = true;
      let httpMethod = "post";
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        // console.log(response);
        vm.status.isLodaing = false;
        $("#productModal").modal("hide");
        vm.$emit("get_products");

        this.tempProduct.title = "";
        this.tempProduct.category = "";
        this.tempProduct.price = "";

        requestAnimationFrame(() => {
          this.$refs.observer.reset();
        });
      });
    },
    delProduct() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`;
      const vm = this;
      vm.status.isLodaing = true;
      this.$http.delete(api).then(response => {
        // console.log(response);
        vm.status.isLodaing = false;
        $("#delProductModal").modal("hide");
        vm.$emit("get_products");
      });
    },
    uploadFile() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      const uploadFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      vm.status.fileUploading = true;
      this.$http
        .post(api, formData, {
          header: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          // console.log(response);
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
            vm.status.fileUploading = false;
            vm.tempProduct.image = vm.tempProduct.title;
          } else {
            vm.$bus.$emit("message:push", response.data.message, "danger");
            vm.status.fileUploading = false;
          }
        });
    }
  },
  created() {
    // this.category = ["請選擇"]
  }
};
</script>

<style scoped lang="sass">
.modal-dialog
  margin: 50px 20%
</style>
