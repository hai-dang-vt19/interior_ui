<template>
  <div>
    <p class="fs-4">Sản phẩm thiết kế</p>

    <div class="d-flex align-items-center justify-content-between">
      <div class="fm-input-group my-4">
        <input type="text" class="form-control" placeholder="Search" :value="valueFilter" @input="updateFilter($event.target.value)">
        <button class="btn btn-primary mx-1" @click="filterItemProduct()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>
      <div>
        <b-button @click="showAddProduct()">Thêm thiết kế</b-button>
      </div>
    </div>
    <div v-if="!isShowAddProduct" class="card mb-3 p-2">
      <AddProduct :dataFields="'Chuyeenf array vaof day'"></AddProduct>
    </div>
    
    <div class="card">
      <b-table-simple hover small responsive class="fm-table rounded-3">
        <b-thead head-variant="dark" class="fm-thead">
          <b-tr>
            <b-th v-for="(fieldHeaderTable, index) in fieldHeaderTables" :key="index">
              <div class="d-flex justify-content-between">
                <span role="button">{{ fieldHeaderTable.title }}</span>
                <div class="group-sort" v-if="fieldHeaderTable.key != 'action'">
                  <svg @click="sortItemProduct(fieldHeaderTable.key, 'asc')" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-up-fill fm-svg" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                  </svg>
                  <svg @click="sortItemProduct(fieldHeaderTable.key, 'desc')" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill fm-svg" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                </div>
              </div>
            </b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="dataProduct in dataProducts" :key="dataProduct.id">
            <b-td>{{ dataProduct.product_id }}</b-td>
            <b-td>{{ dataProduct.product_name }}</b-td>
            <b-td>{{ dataProduct.type_name }}</b-td>
            <b-td>{{ dataProduct.quantity }}</b-td>
            <b-td>{{ dataProduct.price }}</b-td>
            <b-td>{{ dataProduct.discount }}</b-td>
            <b-td>{{ dataProduct.status }}</b-td>
            <b-td>
              <div class="d-flex justify-content-evenly">
                <b-button class="btn-table" @click="editItemProduct(dataProduct)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                  </svg>
                </b-button>
                <b-button class="btn-table" variant="danger" @click="deleteItemProduct(dataProduct)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </b-button>
              </div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddProduct from '@/components/admin/AddProduct.vue';

export default {
  components: {
    'AddProduct': AddProduct
  },

  data() {
    return {
      isShowAddProduct: false,
      fieldHeaderTables: [
        { key: 'product_id', title: 'Code' },
        { key: 'product_name', title: 'Tên thiết kế' },
        { key: 'type_name', title: 'Loại thiết kế' },
        { key: 'quantity', title: 'Số lượng' },
        { key: 'price', title: 'Giá tiền' },
        { key: 'discount', title: 'Chiết khấu' },
        { key: 'status', title: 'Trạng thái' },
        { key: 'action', title: 'Action' },
      ],
    }
  },

  computed: {
    ...mapGetters('product', [
      'dataProduct', 'valueFilter'
    ]),
    dataProducts() {
      return this.dataProduct; // Lấy dữ liệu từ getter
    },
  },

  methods: {
    showAddProduct() {
      this.isShowAddProduct = !this.isShowAddProduct;
    },

    ...mapActions("product", [
      "getDataProduct", 'editProduct', 'deleteProduct', 'sortProduct', 'getDataProduct'
    ]),

    editItemProduct(product) {
      this.editProduct(product);
    },

    deleteItemProduct(product) {
      this.deleteProduct(product);
    },

    sortItemProduct(column, sort) {
      this.sortProduct({'column': column, 'sort': sort});
    },

    updateFilter(value) {
      this.$store.commit('product/setFilterProduct', value); // Thay đổi giá trị filter thông qua Vuex mutation
    },

    filterItemProduct() {
      this.getDataProduct(this.valueFilter);
    }
  },

  mounted() {
    this.getDataProduct(); // Gọi action để load dữ liệu
  }
}
</script>

<style scoped>
.fm-table {
  height: calc(100vh - 30vh);
  margin: 0;
}

.fm-thead {
  position: sticky;
  top: 0;
}

.btn-table {
  margin: 0 0.1rem;
  padding: 1px 6px 2px 6px;
  width: fit-content;
}

.fm-input-group {
  display: flex;
  width: calc(100% - 60%);
}

.group-sort {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.fm-svg {
  width: 0.7rem;
  margin: -1px;
  padding: 0;
  color: rgba(151, 151, 151, 0.829);
  cursor: pointer;
}
.fm-svg:hover {
  color: #292929;
}
.fm-svg-active {
  color: #292929;
}
</style>
