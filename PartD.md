## Section D: Open-Ended & Practical

---

## D1. Personal Project / Portfolio

### Project Overview
Dự án mà em tự hào nhất là một **website tìm kiếm việc làm (full-stack)**, giúp kết nối nhà tuyển dụng và người tìm việc một cách nhanh chóng và thuận tiện.

### Technologies Used

- **Frontend:**
  - Next.js + Tailwind CSS (User interface)
  - React.js + Tailwind CSS (Admin/Employer dashboard)

- **Backend:**
  - Spring Boot (Java) để xây dựng RESTful APIs cho CRUD và xác thực người dùng

- **Database:**
  - MySQL để lưu trữ dữ liệu

- **AI Integration:**
  - Sử dụng Python để kết nối với Gemini AI, xây dựng chatbot hỗ trợ người dùng trong quá trình sử dụng

- **DevOps & Security:**
  - Docker để đóng gói ứng dụng
  - CI/CD để tự động hóa deploy

---

### Challenges & Solutions

#### 1. Token hết hạn khi gọi nhiều API

**Challenge:**
Khi người dùng đang sử dụng hệ thống và gọi nhiều API cùng lúc (5–6 request), nếu access token hết hạn thì hệ thống gọi refresh token nhiều lần, dẫn đến lỗi và user bị logout.

**Solution:**
Em sử dụng **Axios interceptor** kết hợp:
- `isRefreshing flag`
- `request queue`

Cách này đảm bảo:
- Chỉ gọi refresh token **1 lần duy nhất**
- Các request khác sẽ chờ token mới rồi tự động retry

➡️ Kết quả: Người dùng không bị logout đột ngột khi token hết hạn.

---

#### 2. Tìm kiếm và lọc job bị chậm

**Challenge:**
Khi người dùng lọc job theo nhiều tiêu chí (ví dụ: frontend + Đà Nẵng + >15 triệu + full-time), API trả về chậm, ảnh hưởng trải nghiệm.

**Solution:**
- Xác định các column thường xuyên được query
- Tạo **database index** cho các column này
- Kết hợp index cho các trường hay dùng chung

➡️ Kết quả: Tốc độ truy vấn cải thiện rõ rệt.

---

#### 3. Vấn đề trong làm việc nhóm

**Challenge:**
Trong quá trình làm việc nhóm, việc phân chia task chưa rõ ràng khiến một số chức năng bị thiếu hoặc làm chồng chéo, ảnh hưởng tiến độ.

**Solution:**
- Họp lại team để phân chia task rõ ràng hơn
- Xác định mối liên kết giữa các chức năng
- Đảm bảo hoàn thành logic trước khi push code lên Git

➡️ Kết quả: Team làm việc hiệu quả và đồng bộ hơn.

---

## D2. UI/UX Thinking

### (1) Issue

Một vấn đề phổ biến ở các ứng dụng thương mại điện tử là **trải nghiệm người dùng chưa tốt trên mobile**.

Ví dụ:
- Giao diện chưa tối ưu cho điện thoại
- Nút bấm nhỏ, khó thao tác
- Quy trình đặt hàng nhiều bước
- Tìm kiếm sản phẩm chưa tiện

➡️ Điều này dễ khiến người dùng cảm thấy khó chịu và rời khỏi ứng dụng.

---

### (2) Solution

Từ góc độ frontend, em sẽ cải thiện bằng cách:

- Thiết kế theo hướng **mobile-first**
- Tăng kích thước nút và khoảng cách để dễ thao tác
- Cải thiện thanh tìm kiếm:
  - Gợi ý sản phẩm
  - Hiển thị kết quả rõ ràng hơn
- Rút gọn quy trình đặt hàng:
  - Gom các bước
  - Hỗ trợ thanh toán nhanh

➡️ Giúp trải nghiệm mượt hơn và giảm tỷ lệ thoát.

---

## D3. Learning & Motivation

Em muốn tham gia chương trình K-Fresh Trainee vì mong muốn được làm việc trong môi trường thực tế, từ đó nâng cao kỹ năng và học hỏi thêm từ các anh/chị có kinh nghiệm.

Kỹ năng frontend em muốn cải thiện nhất là:
- Xây dựng UI có cấu trúc rõ ràng
- Dễ maintain và mở rộng

Hiện tại, khi làm các project lớn, em vẫn còn gặp khó khăn trong việc tổ chức component và quản lý state.

---

### Development Plan

Trong quá trình tham gia chương trình, em sẽ:

- Chủ động học hỏi và lắng nghe từ mentor
- Thực hành qua các project thực tế
- Tự tìm hiểu thêm tài liệu và áp dụng vào project cá nhân

➡️ Mục tiêu của em là trở nên tự tin hơn khi làm việc trong team và xây dựng được các sản phẩm frontend hoàn chỉnh hơn.