<template>
    <div>
        <div class="row">
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Tên thiết kế</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Số lượng</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Giá tiền</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Hình ảnh</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Loại sản phẩm (nhiều)</label>
                <select class="form-select">
                    <option value="1">1</option>
                </select>
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Chất liệu (nhiều)</label>
                <select class="form-select">
                    <option value="1">1</option>
                </select>
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="exampleInputEmail1">Màu sắc (nhiều)</label>
                <multiselect 
                    v-model="value" 
                    tag-placeholder="Add this as new tag" 
                    placeholder="Search or add a tag" 

                    label="name" 
                    :options="options" 
                    :multiple="true"
                    :close-on-select="false"  
                    :taggable="true"
                    :searchable="true"
                    track-by="id"
                >
                </multiselect>

                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success">Lưu thông tin</button>
        </div>
    </div>
</template>

<script>
import { Multiselect } from "vue-multiselect";

export default {
    name: 'AddProduct',
    props: ['dataFields'],
    components: {
        Multiselect
    },
    data() {
        return {
            value: [
                { name: 'Vue.js', id: '1' }
            ],
            options: [
                { name: 'Vue.js', id: '1' },
                { name: 'Adonis', id: '2' },
                { name: 'Rails', id: '3' },
                { name: 'Sinatra', id: '4' },
                { name: 'Laravel', id: '5' },
                { name: 'Phoenix', id: '6' }
            ]
        }
    }
}
</script>
