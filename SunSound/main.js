var KichThuoc = document.getElementsByClassName("slider")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen_slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = (KichThuoc * Img.length)/3 ;
Max -= KichThuoc;
var Chuyen = 0;

function Next() {
  if (Chuyen < Max) Chuyen += KichThuoc;
  else Chuyen = 0;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

function Back() {
  if (Chuyen == 0) Chuyen = Max;
  else Chuyen -= KichThuoc;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

setInterval(function () {
  Next();
}, 3000);

function dieu_huongvechungtoi() {
  location.assign("vechungtoi.html");
}
function dieuhuonglogo() {
  location.assign("index.html");
}
function dieu_huongsanpham() {
  location.assign("sanpham.html");
}
function dieu_huongdonhang() {
  location.assign("donhang.html");
}
function dieu_huongtintuc() {
  location.assign("tintuc.html");
}
function dieu_huongquanhedt() {
  location.assign("quanhedoitac.html");
}
function dieu_huongphanhoi() {
  location.assign("phanhoi.html");
}
function dieu_huonglienhe() {
  location.assign("lienhe.html");
}
