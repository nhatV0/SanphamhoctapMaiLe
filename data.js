/**
 * FILE CẤU HÌNH DỮ LIỆU PORTFOLIO
 * Nơi lưu trữ thông tin cá nhân và danh sách sản phẩm học tập.
 */

// 1. Thông tin cá nhân của Giáo viên
const teacherInfo = {
    fullName: "Lê Ngọc Mai",
    avatar: "AVT.jpg", // Link ảnh đại diện
    description: "Giáo viên Tiểu học với 2 năm kinh nghiệm. Đam mê sáng tạo đồ dùng dạy học thủ công và ứng dụng công nghệ trong bài giảng để khơi gợi cảm hứng cho học sinh.",
    email: "mthi1502@gmail.com",
    facebook: "https://facebook.com/yourprofile",
    phone: "0367.997.024"
};

// 2. Danh sách sản phẩm học tập (Tự động hiển thị lên Web)
// Các category được phân loại: 'thu-cong' hoặc 'giao-an'
const productList = [
    {
        title: "Phiếu Học tập tổng hợp",
        description: "Một vài thiết kế về phiếu học tập kết hợp TOÁN/ TIẾNG VIỆT với Thủ công/ Mĩ Thuật.",
        category: "thu-cong",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format", // Ảnh xem trước của sản phẩm
        pdfFile: "pdffile/PhieuBTTOAN.pdf" // Tên file PDF chính xác trong folder của bạn
    },
    {
        title: "Giáo án Lớp 4: Tính Chất của Nước",
        description: "Kế hoạch bài giảng chi tiết về tính chất của nước.",
        category: "giao-an",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format",
        pdfFile: "giaoan/TINHCHATCUANUOC.pdf"
    },
    {
        title: "Phiếu học tập - CLB Toán Học",
        description: "Giúp việc học toán trở nên thú vị hơn.",
        category: "thu-cong",
        thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format",
        pdfFile: "pdffile/PhieuCLBTOAN.pdff"
    },
    {
        title: "Sổ tay thí nghiệm",
        description: "Lưu trữ lại các thí nghiệm của em",
        category: "thu-cong",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format",
        pdfFile: "pdffile/Sothinghiem.pdf"
    }
    // Bạn có thể thêm sản phẩm mới theo mẫu trên bên dưới đây
];
