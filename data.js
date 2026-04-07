/**
 * FILE CẤU HÌNH DỮ LIỆU PORTFOLIO
 * Nơi lưu trữ thông tin cá nhân và danh sách sản phẩm học tập.
 */

// 1. Thông tin cá nhân của Giáo viên
const teacherInfo = {
    fullName: "Lê Ngọc Mai",
    avatar: "AVT.jpg", // Link ảnh đại diện
    description: "Giáo viên Tiểu học với 2 năm kinh nghiệm. Đam mê sáng tạo đồ dùng dạy học thủ công và ứng dụng công nghệ trong bài giảng để khơi gợi cảm hứng cho học sinh.",
    email: "maiphuong.teacher@email.com",
    facebook: "https://facebook.com/yourprofile",
    phone: "0123.456.789"
};

// 2. Danh sách sản phẩm học tập (Tự động hiển thị lên Web)
// Các category được phân loại: 'thu-cong' hoặc 'giao-an'
const productList = [
    {
        title: "Mô hình Vòng tuần hoàn của Nước",
        description: "Sản phẩm thủ công giúp học sinh lớp 3 quan sát trực quan hiện tượng bốc hơi và ngưng tụ của nước qua các vật liệu tái chế.",
        category: "thu-cong",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format", // Ảnh xem trước của sản phẩm
        pdfFile: "vong-tuan-hoan-nuoc.pdf" // Tên file PDF chính xác trong folder của bạn
    },
    {
        title: "Giáo án STEM: Thiết kế Thuyền buồm",
        description: "Kế hoạch bài giảng chi tiết hướng dẫn học sinh vận dụng kiến thức về sức gió và vật liệu nổi để tạo ra thuyền buồm mini.",
        category: "giao-an",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format",
        pdfFile: "giao-an-stem-thuyen-buom.pdf"
    },
    {
        title: "Bộ thẻ chữ cái sáng tạo",
        description: "Hệ thống flashcard được vẽ tay giúp các bé lớp 1 ghi nhớ mặt chữ nhanh hơn thông qua các hình tượng con vật vui nhộn.",
        category: "thu-cong",
        thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format",
        pdfFile: "bo-the-chu-cai.pdf"
    },
    {
        title: "Bài giảng: Bảo vệ môi trường xanh",
        description: "Tài liệu PDF trình bày các giải pháp thực tiễn để học sinh có thể thực hành phân loại rác thải tại trường học và gia đình.",
        category: "giao-an",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format",
        pdfFile: "bai-giang-moi-truong.pdf"
    }
    // Bạn có thể thêm sản phẩm mới theo mẫu trên bên dưới đây
];
