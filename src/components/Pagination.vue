<template>
  <div>
    <nav aria-label="pages">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{'disabled': pagination.current_page === 1}">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="pageChange(pagination.current_page - 1)">Previous</a>
        </li>
        <li
          class="page-item"
          :class="{active: pagination.current_page === page}"
          aria-current="pages"
          v-for="page in pagination.total_pages"
          :key="page"
        >
          <a class="page-link" href="#" @click.prevent="pageChange(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{disabled: pagination.current_page === pagination.total_pages}">
            <a class="page-link" href="#" @click.prevent="pageChange(pagination.current_page + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pagination: Object
  },
  methods: {
    pageChange(page) {
      this.$emit("page_change", page);
    },
  },
};
</script>
