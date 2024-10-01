<template>
  <div>
    <p class="fs-4">Kho hàng</p>

    <div class="fm-input-group my-4">
      <input type="text" class="form-control" placeholder="Search">
      <button class="btn btn-primary mx-1">Search</button>
    </div>
    
    <div>
      <!-- <b-table-simple hover small responsive outlined bordered class="fm-table">
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
              </div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple> -->
    </div>
    
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

// export default {
//   data() {
//     return {
//       fieldHeaderTables: [
//         { key: 'id', title: 'User ID' },
//         { key: 'name', title: 'Tên nhân viên' },
//         { key: 'email', title: 'Email' },
//         { key: 'phone', title: 'Số điện thoại' },
//         { key: 'status', title: 'Trạng thái' },
//         { key: 'role_id', title: 'Role' },
//         { key: 'created_at', title: 'Ngày tạo' },
//         { key: 'action', title: 'Action' },
//       ],
//     }
//   },

//   computed: {
//     ...mapGetters('user', [
//       'dataUser'
//     ]),
//     dataUsers() {
//       return this.dataUser; // Lấy dữ liệu từ getter
//     },
//   },

//   methods: {
//     ...mapActions("user", [
//       "getDataUser"
//     ]),
//   },

//   mounted() {
//     this.getDataUser(); // Gọi action để load dữ liệu
//   }
// }
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
