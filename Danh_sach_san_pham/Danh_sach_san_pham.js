

list_product = JSON.parse(localStorage.getItem("json_list_product"));

var list_product_to_html = document.querySelector(".table_container");


// list_product_to_html.innerHTML = '<table><tr><th>ID</th><th>Tên Sản Phẩm</th><th>URL Hình Ảnh</th> <th>Mô Tả</th> </tr> <div id="list_product_to_html"> </div> </table>';
//var test = document.querySelector("#list_product_to_html");


// ----------------------- Duyệt mảng ----------------------------
var test = ""
var loop = (JSON.parse(localStorage.getItem("json_list_product")));
for (var i = 0; i < loop.length; i++) {
   
    test += '<div class="list_item click_item_'+i+'">'
    test += '<div class="item">'
    test += '<div class="item_image">'
    test += '<img src=" ' + (loop[i].hinh_anh_san_pham) + ' " alt="">'
    test += '</div>'
    test += '<h4 class="item_title">'
    test += (loop[i].ten_san_pham)
    test += '</h4>'
    test += '<div class="item_describe">'
    test += (loop[i].mo_ta_san_pham) 
    test += '</div>'
    test += '<h4 class="item_price">'
    test += '£' + (loop[i].gia_san_pham) + ''
    test += '</h4>'
    test += '<div class="view_details">'
    test += 'View details >'
    test += '</div>'
    test += '</div>'
    test += '</div>'

}

document.querySelector(".list_item_container").innerHTML = test;





document.querySelector('.click_item_0').addEventListener('click', e =>{
    window.location = "http://127.0.0.1:5500/slide/blue.html";
})

document.querySelector('.click_item_1').addEventListener('click', e =>{
    window.location = "http://127.0.0.1:5500/slide/j12_calibre.html";
})

document.querySelector('.click_item_2').addEventListener('click', e =>{
    window.location = "http://127.0.0.1:5500/slide/monsieur.html";
})
