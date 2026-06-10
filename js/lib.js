const product = [
   
   { ten: "Dầu gội đầu",
    gia :"150k/1chai",
    mota:"dùng để gọi đầu sạch gàu, mượt tóc",
    lienket:"page7.html",
    img: "../assets/images/dg.jpg",
    alt: "Dầu gọi"
   },
   {
        ten: "Sữa tắm dưỡng da",
        gia: "180k/1chai",
        mota: "Giúp làn da mềm mịn, hương thơm quyến rũ",
        lienket: "page7.html",
        img: "../assets/images/suatam.jpg",
        alt: "Sữa tắm"
   },
   {
        ten: "Nước hoa cao cấp",
        gia: "1200k/1chai",
        mota: "Hương thơm quyến rũ nồng nàng ",
        lienket: "page7.html",
        img: "../assets/images/nuochoa.jpg",
        alt: "Nước hoa"
   }
];


function createItem(obj)
{
             //Xác định khung chứa danh sách sản phẩm
            const list = document.getElementById("list"); 
        
            //Tạo khung chứa một sản phẩm <div class = "item"></div>
            const item = document.createElement("div");
            // border: tạo viền, bg-white: nền trắng, p-3: khoảng cách bên trong, rounded: bo góc nhẹ
            item.setAttribute("class", "item border bg-white p-3 rounded");

            //Tạo 2 khung chứa - ảnh và thông tin
            //2.1 Khung chứa ảnh
            const container_image = document.createElement("div"); 
            // text-center: căn giữa hình ảnh
            container_image.setAttribute("class", "image text-center mb-3");

            //Tạo con khung chứa ảnh - hình ảnh của sản phẩm
            const img = document.createElement("img");
            img.setAttribute("src",obj.img);
            img.setAttribute("alt", obj.alt);
            img.setAttribute("style", "width:100%; max-width:150px;");
            // rounded: bo góc cho bức ảnh
            img.setAttribute("class", "rounded");

            //Thêm ảnh cho khung chứa ảnh
            container_image.appendChild(img);


            //Tạo khung chứa thông tin
            const container_infor = document.createElement("div");
            // text-center: căn giữa toàn bộ chữ trong khung thông tin
            container_infor.setAttribute("class", "info text-center");

            //tạo p đầu tiên - tên sản phẩm
            const ten = document.createElement("p");
            // fw-bold: chữ in đậm, text-success: chữ màu xanh lá
            ten.setAttribute("class", "fw-bold text-success mb-1");
            ten.innerHTML = obj.ten; 

            const gia = document.createElement("p");
            // text-danger: chữ màu đỏ cho giá tiền
            gia.setAttribute("class", "text-danger fw-bold mb-1");
            gia.innerHTML = obj.gia;

            const mota = document.createElement("p");
            // text-muted: chữ màu xám nhạt cho phần mô tả
            mota.setAttribute("class", "text-muted small mb-2");
            mota.innerHTML = obj.mota; 
            
            const lienket = document.createElement("a");
            lienket.innerHTML = "Xem chi tiết";
            lienket.setAttribute("href", obj.lienket);

         
            lienket.setAttribute("class", "btn btn-primary text-white "); // btn: nút, btn-primary: màu xanh dương, text-white: chữ màu trắng, w-100: rộng 100% của khung chứa

       

            container_infor.appendChild(ten);
            container_infor.appendChild(gia);
            container_infor.appendChild(mota);
            container_infor.appendChild(lienket);
            
            //Them 2 khung chứa ảnh và thông tin vào khung chứa item
            item.appendChild(container_image); 
            item.appendChild(container_infor); 

            //Đưa khung chứa item và khung chứa list product
            list.appendChild(item); 


};

function loadAllProducts(objArray)
{
        let i;
        for(i=0;i<objArray.length;i++)
        {   
            createItem(objArray[i]); 
        }

};