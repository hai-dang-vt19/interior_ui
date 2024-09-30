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
                <select class="form-select">
                    <option value="1">1</option>
                </select>
                <small id="emailHelp" class="form-text text-muted">{{dataFields}}</small>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success">Lưu thông tin</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddProduct',
    props: ['dataFields']
}
</script>
