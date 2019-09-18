<template>
  <div class="container mt-4">
    <div class="mb-4">
      <h2 class="font-weight-bold admin--title">優惠券管理</h2>
      <button class="btn btn-primary admin--btn">建立新優惠券</button>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead class="table-borderless">
          <tr>
            <th width="80" class="text-center">是否啟用</th>
            <th class="pl-3">優惠券名稱</th>
            <th width="100">折扣</th>
            <th width="100" class="text-center">到期日</th>
            <th width="180" class="pl-5">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td class="text-center align-middle">
              <input type="checkbox" id="is_enable">
              <label for="is_enable" class="pl-1 mb-0 align-middle">啟用</label>
            </td>
            <td class="pl-3">{{item.title}}</td>
            <td>{{item.percent}}</td>
            <td class="text-center">{{item.due_date | timestamp}}</td>
            <td class="pl-5">
              <button class="btn btn-outline-primary mr-2">編輯</button>
              <button class="btn btn-outline-danger">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coupons: [],
      pagination: {},
    };
  },
  methods: {
    getCoupons(page = 1) {
      const api =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/admin/coupons?page=${page}`;
      const vm = this;
      this.$http.get(api).then((response) => {
        console.log(response);
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
  },
  created() {
    this.getCoupons();
  },
}
</script>
