import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Các trường hợp lừa đảo phổ biến cần biết</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Nhận quà từ bạn nước ngoài làm quen trên mạng"
              label="Xem chi tiết"
              path="/newsDetails"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Tự xưng là cơ quan chức năng gọi điện thông báo điều tra"
              label="Xem chi tiết"
              path="/newsDetails"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-3.jpg"
              text="Hack Facebook nhắn tin mượn tiền"
              label="Xem chi tiết"
              path="/newsDetails"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Thông báo trúng thưởng tiền, tài sản giá trị"
              label="Xem chi tiết"
              path="/newsDetails"
            />
            <CardItem
              src="/images/img-8.jpg"
              text="Gửi link giả đánh cắp thông tin"
              label="Xem chi tiết"
              path="/newsDetails"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Kêu gọi đầu tư tiền ảo"
              label="Xem chi tiết"
              path="/newsDetails"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Lợi dụng lòng tốt kêu gọi từ thiện"
              label="Xem chi tiết"
              path="/newsDetails"
            />
          </ul>
        </div>
      </div>
      <h1>Cần làm gì khi bị lừa đảo?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-4.jpg"
              text="Đường dây nóng 113"
              label="Gọi 113"
            />
            <CardItem
              src="/images/img-5.jpg"
              text="Web hỗ trợ gửi báo cáo các trường hợp lừa đảo"
              label="Gửi báo cáo"
            />
            <CardItem
              src="/images/img-6.jpg"
              text="Nói chuyện với chuyên gia hỗ trợ các giải pháp hợp lý"
              label="Gọi hỗ trợ"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
