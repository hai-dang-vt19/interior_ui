<template>
  <div>
    <p class="fs-4">Sản phẩm thiết kế</p>

    <div class="fm-input-group my-4">
      <input type="text" class="form-control" placeholder="Search">
      <button class="btn btn-primary mx-1">Search</button>
    </div>
    
    <div>
      <b-table-simple hover small responsive outlined bordered class="fm-table">
        <b-thead head-variant="dark" class="fm-thead">
          <b-tr>
            <b-th v-for="(fieldHeaderTable, index) in fieldHeaderTables" :key="index">
              <span role="button">{{ fieldHeaderTable.title }}</span>
            </b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="dataUser in dataUsers.data" :key="dataUser.id">
            <b-td>{{ dataUser.id }}</b-td>
            <b-td>{{ dataUser.name }}</b-td>
            <b-td>{{ dataUser.email }}</b-td>
            <b-td>{{ dataUser.phone }}</b-td>
            <b-td>{{ dataUser.status }}</b-td>
            <b-td>{{ dataUser.role_id }}</b-td>
            <b-td>{{ dataUser.created_at }}</b-td>
            <b-td>
              <div class="d-flex justify-content-evenly">
                <!-- <b-button class="btn-table" @click="editItemProduct(dataUser)">
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
                </b-button> -->
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

export default {
  data() {
    return {
      fieldHeaderTables: [
        { key: 'id', title: 'User ID' },
        { key: 'name', title: 'Tên nhân viên' },
        { key: 'email', title: 'Email' },
        { key: 'phone', title: 'Số điện thoại' },
        { key: 'status', title: 'Trạng thái' },
        { key: 'role_id', title: 'Role' },
        { key: 'created_at', title: 'Ngày tạo' },
        { key: 'action', title: 'Action' },
      ],
    }
  },

  computed: {
    ...mapGetters('user', [
      'dataUser'
    ]),
    dataUsers() {
      return this.dataUser; // Lấy dữ liệu từ getter
    },
  },

  methods: {
    ...mapActions("user", [
      "getDataUser"
    ]),
  },

  mounted() {
    this.getDataUser(); // Gọi action để load dữ liệu
  }
}
</script>

<style scoped>
.fm-table {
  height: calc(100vh - 30vh);
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
</style>
