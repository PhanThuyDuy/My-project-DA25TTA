const product = [
     {    
          id: "1",
          ten: "Dầu gội đầu",
          gia: "150k/1chai",
          mota: "dùng để gọi đầu sạch gàu, mượt tóc",
          lienket: "trangchitiet.html",
          img: "../assets/images/dg.jpg",
          alt: "Dầu gọi"
     },
     {
          id: "2", // Đã thêm dấu phẩy ở đây
          ten: "Sữa tắm dưỡng da",
          gia: "180k/1chai",
          mota: "Giúp làn da mềm mịn, hương thơm quyến rũ",
          lienket: "trangchitiet.html",
          img: "../assets/images/suatam.jpg",
          alt: "Sữa tắm"
    },
    {
          id: "3", // Đã thêm dấu phẩy ở đây
          ten: "Nước hoa cao cấp",
          gia: "1200k/1chai",
          mota: "Hương thơm quyến rũ nồng nàng ",
          lienket: "trangchitiet.html",
          img: "../assets/images/nuochoa.jpg",
          alt: "Nước hoa"
     },
     {
          id: "4", // Đã thêm dấu phẩy ở đây
          ten: "Sữa rửa mặt",
          gia: "69k/1chai",
          mota: "Sạch sâu da mặt của bạn mền mịn hơn  ",
          lienket: "trangchitiet.html",
          img: "../assets/images/suarm.jpg",
          alt: "sữa rửa mặt"
     },
     {
          id: "5", // Đã thêm dấu phẩy ở đây
          ten: "Nước tẩy trang",
          gia: "200k/1chai",
          mota: "Tẩy sạch bụi bẩn trên da mặt ",
          lienket: "trangchitiet.html",
          img: "../assets/images/nuoctt.jpg",
          alt: "sữa rửa mắt"
     },
     {
          id: "6",
          ten: "Nước rửa tay",
          gia: "39k/1chai",
          mota: "Sạch vi khuẩn bám trên tay bạn ",
          lienket: "trangchitiet.html",
          img: "../assets/images/nuocrt.jpg",
          alt: "sữa rửa mắt"
     }
];

function createItem(obj) {
    const list = document.getElementById("list"); 
    if (!list) return; // Bảo vệ code không bị lỗi nếu trang không có thẻ #list

    const item = document.createElement("div");
    item.setAttribute("class","col-12 col-sm-6 col-lg-4");
    item.innerHTML = "";
    item.classList.add("product-card");

    const container_image = document.createElement("div"); 
    container_image.setAttribute("class", "image text-center mb-3");

    const img = document.createElement("img");
    img.setAttribute("src", obj.img);
    img.setAttribute("alt", obj.alt);
    img.setAttribute("style","width:100%;height:220px;object-fit:contain;");
    img.setAttribute("class", "rounded");

    container_image.appendChild(img);

    const container_infor = document.createElement("div");
    container_infor.setAttribute("class", "info text-center");

    const ten = document.createElement("p");
    ten.setAttribute("class", "fw-bold text-success mb-1");
    ten.innerHTML = obj.ten; 

    const gia = document.createElement("p");
    gia.setAttribute("class", "text-danger fw-bold mb-1");
    gia.innerHTML = obj.gia;

    const mota = document.createElement("p");
    mota.setAttribute("class", "text-muted small mb-2");
    mota.innerHTML = obj.mota; 
    
    const lienket = document.createElement("a");
    lienket.innerHTML = "Xem chi tiết";
    lienket.setAttribute("href", obj.lienket + "?id=" + obj.id); 
    lienket.setAttribute("class", "btn btn-primary text-white"); 

     const mua = document.createElement("a");
     mua.innerHTML = "Mua ngay";
     mua.href="#";
     mua.className="btn btn-success ms-2";

    container_infor.appendChild(ten);
    container_infor.appendChild(gia);
    container_infor.appendChild(mota);
    container_infor.appendChild(lienket);
    container_infor.appendChild(mua);

    item.appendChild(container_image); 
    item.appendChild(container_infor); 

    list.appendChild(item); 
}

function loadAllProducts(objArray) {
    for(let i = 0; i < objArray.length; i++) {   
        createItem(objArray[i]); 
    }
}

