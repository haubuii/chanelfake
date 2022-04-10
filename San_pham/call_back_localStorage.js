

list_product = JSON.parse(localStorage.getItem("json_list_product"));

var list_product_to_html = document.querySelector(".table_container");


// list_product_to_html.innerHTML = '<table><tr><th>ID</th><th>Tên Sản Phẩm</th><th>URL Hình Ảnh</th> <th>Mô Tả</th> </tr> <div id="list_product_to_html"> </div> </table>';
//var test = document.querySelector("#list_product_to_html");


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
//console.log(test.innerHTML)






