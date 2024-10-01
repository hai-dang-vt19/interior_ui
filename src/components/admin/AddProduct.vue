<template>
    <div>
        <div class="row">
            <div class="form-group col-md-4 my-1">
                <label for="ip1">Tên thiết kế</label>
                <input type="text" class="form-control" id="ip1" v-model="product_name">
                <small id="emailHelp" class="form-text text-muted">{{product_name}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="ip2">Số lượng</label>
                <input type="number" class="form-control" id="ip2" v-model="stock_quantity">
                <small id="emailHelp" class="form-text text-muted">{{stock_quantity}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="ip3">Giá tiền</label>
                <input type="number" class="form-control" id="ip3" v-model="price">
                <small id="emailHelp" class="form-text text-muted">{{price}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="ip4">Hình ảnh</label>
                <input type="text" class="form-control" id="ip4" v-model="image">
                <small id="emailHelp" class="form-text text-muted">{{image}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="sl1">Loại sản phẩm (nhiều)</label>
                <multiselect 
                    id="sl1"
                    v-model="typeProducts" 
                    tag-placeholder="Add this as new tag" 
                    placeholder="Search or add a tag" 

                    label="name" 
                    :options="dataFields['dtslTypeProduct']" 
                    :multiple="true"
                    :close-on-select="false"  
                    :taggable="true"
                    :searchable="true"
                    track-by="id"
                >
                </multiselect>

                <small id="emailHelp" class="form-text text-muted">{{typeProducts}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="sl2">Chất liệu (nhiều)</label>
                <multiselect 
                    id="sl2"
                    v-model="materials" 
                    tag-placeholder="Add this as new tag" 
                    placeholder="Search or add a tag" 

                    label="name" 
                    :options="dataFields['dtslMaterial']" 
                    :multiple="true"
                    :close-on-select="false"  
                    :taggable="true"
                    :searchable="true"
                    track-by="id"
                >
                </multiselect>
                
                <small id="emailHelp" class="form-text text-muted">{{materials}}</small>
            </div>
            <div class="form-group col-md-4 my-1">
                <label for="sl3">Màu sắc (nhiều)</label>
                <multiselect 
                    id="sl3"
                    v-model="colors" 
                    tag-placeholder="Add this as new tag" 
                    placeholder="Search or add a tag" 

                    label="name" 
                    :options="dataFields['dtslColor']" 
                    :multiple="true"
                    :close-on-select="false"  
                    :taggable="true"
                    :searchable="true"
                    track-by="id"
                >
                </multiselect>

                <small id="emailHelp" class="form-text text-muted">{{colors}}</small>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success" @click="submitProduct()">Lưu thông tin</button>
        </div>
    </div>
</template>

<script>
import { Multiselect } from "vue-multiselect";
import { mapActions } from "vuex";

export default {
    name: 'AddProduct',
    props: {
        dataFields: Array
    },
    components: {
        Multiselect
    },
    data() {
        return {
            product_name: null,
            stock_quantity: 0,
            price: 0,
            image: null,
            discount_id: null,
            typeProducts: [],
            materials: [],
            colors: [],
        }
    },
    
    methods: {
        ...mapActions("product", [
            "createProduct"
        ]),

        submitProduct() {
            const params = {
                product_name: this.product_name,
                stock_quantity: this.stock_quantity,
                price: this.price,
                image: this.image,
                discount_id: this.discount_id,
                typeProducts: this.typeProducts,
                materials: this.materials,
                colors: this.colors
            };
            this.createProduct(params);
        },
    }
}
</script>
