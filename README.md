# Di sản Hồ Chí Minh - Website tĩnh

## 📋 Giới thiệu

Đây là một trang web tĩnh chuyên nghiệp được xây dựng để trình bày các nội dung chính về cuộc đời, sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh. Dự án được thực hiện cho môn học **Tư tưởng Hồ Chí Minh**.

## 🚀 Tính năng chính

### 🏠 Trang chủ (index.html)
- **Hero Section**: Banner chính với câu trích dẫn nổi tiếng
- **Trích dẫn mỗi ngày**: Hiển thị ngẫu nhiên một trong 5 câu nói của Bác Hồ
- **Cards giới thiệu**: 3 khối card dẫn đến các trang con
- **Responsive design**: Tự động thích ứng với mọi kích thước màn hình

### 👤 Trang tiểu sử (tieu-su.html)
- **Timeline tương tác**: Dòng thời gian cuộc đời Bác Hồ từ 1890-1969
- **Hiệu ứng fade-in**: Các mốc thời gian xuất hiện mượt mà khi cuộn trang
- **Thông tin bổ sung**: Cards hiển thị thông tin thú vị về Người

### 💡 Trang nội dung tư tưởng (noi-dung.html)
- **Accordion**: Hệ thống đóng/mở các chủ đề tư tưởng chính
- **5 tư tưởng cốt lõi**:
  - Độc lập dân tộc
  - Đại đoàn kết dân tộc
  - Đạo đức cách mạng
  - Xây dựng và phát triển đất nước
  - Hòa bình và hữu nghị quốc tế

### 📚 Trang tác phẩm (tac-pham.html)
- **Grid layout**: Hiển thị 9 tác phẩm tiêu biểu
- **Modal popup**: Click vào mỗi tác phẩm để xem thông tin chi tiết
- **Thống kê ấn tượng**: Số liệu về tác phẩm của Người

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc website semantic
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables
  - Responsive Media Queries
  - Animations & Transitions
- **Vanilla JavaScript**: 
  - DOM Manipulation
  - Event Handling
  - Intersection Observer API
  - Local Storage (nếu cần)
- **Google Fonts**: Oswald & Roboto
- **Font Awesome**: Biểu tượng vector

## 🎨 Thiết kế

### Bảng màu
- **Màu nền chính**: `#f8f9fa` (xám nhạt)
- **Màu nền phụ**: `#343a40` (xám đen)
- **Màu chữ chính**: `#212529` (đen)
- **Màu chữ phụ**: `#ffffff` (trắng)
- **Màu nhấn**: `#da251d` (đỏ cờ)

### Typography
- **Font tiêu đề**: 'Oswald', sans-serif
- **Font nội dung**: 'Roboto', sans-serif

## 📱 Responsive Design

Website được tối ưu cho 3 breakpoint chính:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

## 🚦 Cách sử dụng

### Cài đặt
```bash
# Clone hoặc tải dự án về
cd project-tu-tuong-hcm

# Mở file index.html bằng browser
# Hoặc sử dụng live server
```

### Cấu trúc thư mục
```
project-tu-tuong-hcm/
├── index.html              # Trang chủ
├── tieu-su.html            # Trang tiểu sử  
├── noi-dung.html           # Trang tư tưởng
├── tac-pham.html           # Trang tác phẩm
├── assets/
│   ├── css/
│   │   └── style.css       # CSS chính
│   ├── js/
│   │   └── main.js         # JavaScript chính
│   └── images/             # Thư mục ảnh
└── README.md               # File hướng dẫn
```

## ⭐ Tính năng nổi bật

### 🎯 JavaScript Interactivity
- **Menu hamburger**: Navigation cho mobile
- **Header scroll effect**: Header trong suốt khi cuộn
- **Back to top button**: Nút cuộn lên đầu trang
- **Timeline animations**: Hiệu ứng xuất hiện khi cuộn
- **Accordion system**: Đóng/mở nội dung
- **Modal windows**: Popup chi tiết tác phẩm
- **Random quotes**: Trích dẫn ngẫu nhiên mỗi lần tải trang

### 🎨 CSS Animations
- **Smooth transitions**: Chuyển đổi mượt mà
- **Hover effects**: Hiệu ứng hover cho các elements
- **Loading animations**: Hiệu ứng tải nội dung
- **Responsive transitions**: Thích ứng với mobile

### ♿ Accessibility
- **Semantic HTML**: Cấu trúc HTML có ý nghĩa
- **ARIA labels**: Nhãn cho screen readers
- **Keyboard navigation**: Điều hướng bằng bàn phím
- **Color contrast**: Tỷ lệ màu sắc phù hợp

## 🔧 Customization

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `style.css`:
```css
:root {
    --primary-bg: #f8f9fa;
    --secondary-bg: #343a40;
    --accent-color: #da251d;
    /* ... */
}
```

### Thêm nội dung
- **Quotes**: Chỉnh sửa mảng `DAILY_QUOTES` trong `main.js`
- **Timeline**: Thêm `.timeline-item` trong `tieu-su.html`
- **Accordion**: Thêm `.accordion-item` trong `noi-dung.html`
- **Works**: Thêm `.work-card` trong `tac-pham.html`

## 🐛 Xử lý lỗi

### Lỗi thường gặp
1. **Font không tải được**: Kiểm tra kết nối Internet
2. **JavaScript không hoạt động**: Kiểm tra console browser
3. **CSS không áp dụng**: Xóa cache browser
4. **Responsive không đúng**: Kiểm tra viewport meta tag

## 🖼️ Gallery ảnh chất lượng cao

Website sử dụng **14 ảnh chuyên nghiệp** (2.6MB total):

### 🏠 **Hero Section**
- **`bacho.jpg`** (343KB): Ảnh chính Chủ tịch Hồ Chí Minh

### 📸 **Timeline Gallery** (4 ảnh lịch sử)
- **`timeline1.jpg`** (43KB): Hoạt động cách mạng
- **`timeline2.jpg`** (108KB): Bác Hồ với nhân dân  
- **`timeline3.jpg`** (12KB): Những ngày làm việc
- **`timeline4.jpg`** (366KB): Bác Hồ và trẻ em

### 📚 **Works Gallery** (9 ảnh tác phẩm)
- **`duong-kach-menh.jpg`** (57KB) - Đường Kách Mệnh
- **`tuyen-ngon-doc-lap.jpg`** (38KB) - Tuyên Ngôn Độc Lập
- **`di-chuc.jpg`** (204KB) - Di Chúc
- **`nhat-ky-trong-tu.jpeg`** (22KB) - Nhật Ký Trong Tù
- **`tu-phe-binh.jpg`** (26KB) - Tự Phê Bình
- **`tu-duong-dao-duc.jpg`** (141KB) - Tu Dưỡng Đạo Đức
- **`thu-gui-dong-bao.jpg`** (957KB) - Thư Gửi Đồng Bào
- **`bao-chi-cach-mang.jpg`** (278KB) - Báo Chí Cách Mạng
- **`tho-ca.jpg`** (37KB) - Thơ Ca

**✨ Tất cả ảnh đều có hover effects, responsive design và object-fit tối ưu!**

## 📧 Thông tin dự án

Dự án được thực hiện cho môn học **Tư tưởng Hồ Chí Minh**
- **Sinh viên**: **DANH TUẤN ĐẠT**
- **Năm**: **2025**

## 📄 License

Dự án mang tính chất học tập, không sử dụng cho mục đích thương mại.

---

**🌟 Cảm ơn bạn đã sử dụng website Di sản Hồ Chí Minh! 🌟**
