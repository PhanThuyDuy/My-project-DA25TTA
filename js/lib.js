const product = [
    {
        id: "1",
        ten: "Nước thần tinh chất dưỡng da SK-II Facial Treatment Essence",
        gia: "1.950.000đ",
        mota: "Nước thần tái tạo tế bào, dưỡng da căng mướt và chống lão hóa đỉnh cao.",
        lienket: "trangchitiet.html",
        img: "../assets/images/SK-II.jpg",
        alt: "Nước thần tinh chất dưỡng da SK-II Facial Treatment Essence"
    },
    {
        id: "2",
        ten: "Nước hoa Unisex Armaf Club De Nuit Untold",
        gia: "1.350.000đ",
        mota: "Hương thơm đẳng cấp, sang trọng đầy lôi cuốn phù hợp cho cả nam và nữ.",
        lienket: "trangchitiet.html",
        img: "../assets/images/UnisexArmaf.jpg",
        alt: "Nước hoa Unisex Armaf Club De Nuit Untold"
    },
    {
        id: "3",
        ten: "Kem nền Nars Natural Radiant Longwear Foundation",
        gia: "1.150.000đ",
        mota: "Kem nền che khuyết điểm cao, mỏng nhẹ và bền màu suốt 16 giờ.",
        lienket: "trangchitiet.html",
        img: "../assets/images/Nars.jpg",
        alt: "Kem nền Nars Natural Radiant Longwear Foundation"
    },
    {
        id: "4",
        ten: "Nước hoa nữ The Merchant of Venice Flamant Rose",
        gia: "3.500.000đ",
        mota: "Hương thơm quý phái, lãng mạn lấy cảm hứng từ loài chim hồng hạc.",
        lienket: "trangchitiet.html",
        img: "../assets/images/TheMerchantOfVenice.jpg",
        alt: "Nước hoa nữ The Merchant of Venice Flamant Rose"
    },
    {
        id: "5",
        ten: "Sữa rửa mặt dạng gel CeraVe Foaming Cleanser",
        gia: "395.000đ",
        mota: "Sữa rửa mặt tạo bọt dịu nhẹ cho da thường đến da dầu giúp sạch sâu không khô căng.",
        lienket: "trangchitiet.html",
        img: "../assets/images/srmcerave.jpg",
        alt: "Sữa rửa mặt dạng gel CeraVe Foaming Cleanser"
    },
    {
        id: "6",
        ten: "Kem chống nắng nâng tông Sunplay Skin Aqua Tone Up UV Essence",
        gia: "185.000đ",
        mota: "Chống nắng phổ rộng SPF50+ PA++++ bảo vệ da toàn diện và nâng tông tự nhiên.",
        lienket: "trangchitiet.html",
        img: "../assets/images/skinaqua.jpg",
        alt: "Kem chống nắng nâng tông Sunplay Skin Aqua Tone Up UV Essence"
    },
    {
        id: "7",
        ten: "Bảng kem che khuyết điểm Make Up For Ever Ultra HD Underpainting",
        gia: "950.000đ",
        mota: "Bảng màu triệt sắc và che khuyết điểm chuyên nghiệp cho lớp nền không tì vết.",
        lienket: "trangchitiet.html",
        img: "../assets/images/MakeUpForEver.jpg",
        alt: "Bảng kem che khuyết điểm Make Up For Ever Ultra HD Underpainting"
    },
    {
        id: "8",
        ten: "Nước hoa nữ Thierry Mugler Alien Refillable Talisman",
        gia: "2.850.000đ",
        mota: "Hương thơm huyền biến, ma mị độc bản với nốt hương hoa nhài và hổ phách.",
        lienket: "trangchitiet.html",
        img: "../assets/images/ThierryMugler.jpg",
        alt: "Nước hoa nữ Thierry Mugler Alien Refillable Talisman"
    },
    {
        id: "9",
        ten: "Nước tẩy trang L'Oreal Paris Micellar Water 3-in-1 Refreshing",
        gia: "175.000đ",
        mota: "L'Oreal Paris Micellar Water 3-in-1 Refreshing",
        lienket: "trangchitiet.html",
        img: "../assets/images/nuoctt.jpg",
        alt: "Nước tẩy trang L'Oreal Paris Micellar Water 3-in-1 Refreshing"
    },
    {
        id: "10",
        ten: "Sữa tắm sạch khuẩn Lifebuoy Vitamin+ Bảo Vệ Vượt Trội 10",
        gia: "185.000đ",
        mota: "Sữa tắm hỗ trợ đề kháng da tự nhiên, bảo vệ khỏi 99,9% vi khuẩn.",
        lienket: "trangchitiet.html",
        img: "../assets/images/suatam.jpg",
        alt: "Sữa tắm sạch khuẩn Lifebuoy Vitamin+ Bảo Vệ Vượt Trội 10"
    }
];

function createItem(obj) {
    const list = document.getElementById("list"); 
    if (!list) return; // Bảo vệ code không bị lỗi nếu trang không có thẻ #list

    const item = document.createElement("div");
    item.setAttribute("class", "product-item");

    const img = document.createElement("img");
    img.setAttribute("src", obj.img);
    img.setAttribute("alt", obj.alt);
    img.setAttribute("class", "product-image");

    const container_infor = document.createElement("div");
    container_infor.setAttribute("class", "product-info");

    const ten = document.createElement("h3");
    ten.innerHTML = obj.ten; 

    const gia = document.createElement("div");
    gia.setAttribute("class", "price");
    gia.innerHTML = obj.gia;

    const mota = document.createElement("p");
    mota.innerHTML = obj.mota; 
    
    const lienket = document.createElement("a");
    lienket.innerHTML = "Xem chi tiết";
    lienket.setAttribute("href", obj.lienket + "?id=" + obj.id); 

    container_infor.appendChild(ten);
    container_infor.appendChild(gia);
    container_infor.appendChild(mota);
    container_infor.appendChild(lienket);

    item.appendChild(img); 
    item.appendChild(container_infor); 

    list.appendChild(item); 
}

function loadAllProducts(objArray) {
    for(let i = 0; i < objArray.length; i++) {   
        createItem(objArray[i]); 
    }
}

