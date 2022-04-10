
// -------------------- Thêm Sản Phầm ------------------------------
var list_product = localStorage.getItem("json_list_product");

if (list_product == null) {
    json_list_product = [];
    json_list_product = JSON.stringify(json_list_product);
    localStorage.setItem("json_list_product", json_list_product);
}


document.querySelector("#btn_them_san_pham").addEventListener("click", btn_them_san_pham);

function btn_them_san_pham() {
    const ten_san_pham = document.querySelector("#ten_san_pham").value;
    const gia_san_pham = document.querySelector("#gia_san_pham").value;
    const hinh_anh_san_pham = document.querySelector("#hinh_anh_san_pham").value;
    const mo_ta_san_pham = document.querySelector("#mo_ta_san_pham").value;
    const id_san_pham = document.querySelector("#id_san_pham").value;
    var product = {
        ten_san_pham: ten_san_pham,
        gia_san_pham: gia_san_pham,
        hinh_anh_san_pham: hinh_anh_san_pham,
        mo_ta_san_pham: mo_ta_san_pham,
        id_san_pham: id_san_pham
    };



    list_product = JSON.parse(localStorage.getItem("json_list_product"));
    list_product.push(product)
    // console.log(list_product)
    json_list_product = JSON.stringify(list_product);
    localStorage.setItem("json_list_product", json_list_product);
    console.log("Danh sách sản phẩm sau khi thêm: ")
    console.log(JSON.parse(localStorage.getItem("json_list_product")));

    // ----------------------- Duyệt mảng ----------------------------
    var test = ""
    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    for (var i = 0; i < loop.length; i++) {

        test += '<div class="table_item">'
        test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
        test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
        test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
        test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
        test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
        test += '</div>'

    }

    document.querySelector(".table_item_container").innerHTML = test;
}
// -------------------- UPDATE Sản Phẩm ------------------------------

document.querySelector("#btn_update_thong_tin_san_pham").addEventListener("click", btn_update_thong_tin_san_pham)
function btn_update_thong_tin_san_pham() {

    const ten_san_pham = document.querySelector("#ten_san_pham").value;
    const hinh_anh_san_pham = document.querySelector("#hinh_anh_san_pham").value;
    const mo_ta_san_pham = document.querySelector("#mo_ta_san_pham").value;
    const id_san_pham = document.querySelector("#id_san_pham").value;
    var product = {
        ten_san_pham: ten_san_pham,
        hinh_anh_san_pham: hinh_anh_san_pham,
        mo_ta_san_pham: mo_ta_san_pham,
        id_san_pham: id_san_pham
    };

    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    for (var i = 0; i < loop.length; i++) {
        if (loop[i].id_san_pham == id_san_pham) {
            list_product = JSON.parse(localStorage.getItem("json_list_product"));
            list_product[i] = (product)
            // console.log(list_product)
            json_list_product = JSON.stringify(list_product);
            localStorage.setItem("json_list_product", json_list_product);


        }

    }
    console.log("Danh sách sản phẩm sau khi update san pham co id = " + (id_san_pham))
    console.log(JSON.parse(localStorage.getItem("json_list_product")));
    // ----------------------- Duyệt mảng ----------------------------
    var test = ""
    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    for (var i = 0; i < loop.length; i++) {

        test += '<div class="table_item">'
        test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
        test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
        test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
        test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
        test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
        test += '</div>'

    }

    document.querySelector(".table_item_container").innerHTML = test;

}
// -------------------- Lấy thông tin Sản Phẩm ------------------------------




function oninput_check_name_id() {

    var oninput_check_name_id = document.querySelector("#check_name_id").value;

    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    var test = ""
    if (oninput_check_name_id == "") {
        for (var i = 0; i < loop.length; i++) {

            test += '<div class="table_item">'
            test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
            test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
            test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
            test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
            test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
            test += '</div>'

        }
    }
    for (var i = 0; i < loop.length; i++) {
        if (loop[i].id_san_pham == oninput_check_name_id || loop[i].ten_san_pham == oninput_check_name_id) {
            console.log("Thông tin sản phẩm tại id = " + (oninput_check_name_id))
            console.log(loop[i])
            test += '<div class="table_item">'
            test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
            test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
            test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
            test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
            test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
            test += '</div>'
        }
    }
    // ----------------------- Duyệt mảng ----------------------------

    // var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    // for (var i = 0; i < loop.length; i++) {
    // test += '<div class="table_item">'
    // test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
    // test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
    // test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
    // test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
    // test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
    // test += '</div>'

    // }

    document.querySelector(".table_item_container").innerHTML = test;
}






// -------------------- Xóa Sản Phẩm ------------------------------

// var loop = (JSON.parse(localStorage.getItem("json_list_product")));
// var id_check = document.querySelector("#id_san_pham_select").value;
//     for (var i = 0; i < loop.length; i++) {
//         if (loop[i].id_san_pham == id_check) {
//             // document.getElementById('username_err').innerHTML = "This username has been taken. Please try another."
//             // check_username_same = false;
//             alert("ok")
//             break;
//         }
//     }

document.querySelector("#btn_xoa_san_pham").addEventListener("click", btn_xoa_san_pham)
function btn_xoa_san_pham() {
    var id_check = document.querySelector("#id_san_pham_select").value;

    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    for (var i = 0; i < loop.length; i++) {
        if (loop[i].id_san_pham == id_check) {

            list_product = JSON.parse(localStorage.getItem("json_list_product"));
            list_product.splice(i, 1);
            // console.log(list_product)
            json_list_product = JSON.stringify(list_product);
            localStorage.setItem("json_list_product", json_list_product);
            break;
        }
    }

    console.log("Danh sách sản phẩm sau khi xoá san pham co id = " + (id_check))
    console.log(JSON.parse(localStorage.getItem("json_list_product")));

    // ----------------------- Duyệt mảng ----------------------------
    var test = ""
    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    for (var i = 0; i < loop.length; i++) {

        test += '<div class="table_item">'
        test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
        test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
        test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
        test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
        test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
        test += '</div>'

    }

    document.querySelector(".table_item_container").innerHTML = test;
}








// -------------------- Sấp Xếp Sản Phẩm ------------------------------

function sap_xep_theo_gia() {

    var loop = (JSON.parse(localStorage.getItem("json_list_product")));
    for (var i = 0; i < loop.length; i++) {
        for (var j = i+1; j < loop.length; j++) {
            if (Number(loop[i].gia_san_pham) > Number(loop[j].gia_san_pham)) {
                var temp = loop[i];
                loop[i] = loop[j];
                loop[j] = temp;
            }
        }
    }
    var test = ""
    for (var i = 0; i < loop.length; i++) {
        test += '<div class="table_item">'
        test += '<div class="id">' + (loop[i].id_san_pham) + ' </div >'
        test += '<div class="product_name">' + (loop[i].ten_san_pham) + '</div>'
        test += '<div class="product_price">' + (loop[i].gia_san_pham) + '</div>'
        test += '<div class="product_url">' + (loop[i].hinh_anh_san_pham) + '</div>'
        test += '<div class="product_describe">' + (loop[i].mo_ta_san_pham) + '</div>'
        test += '</div>'
    }

    document.querySelector(".table_item_container").innerHTML = test;
}


