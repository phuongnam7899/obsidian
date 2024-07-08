# Giới thiệu về SQL
## SQL là gì?
- SQL = Structured Query Language
- Là một ==ngôn ngữ lập trình==
- Được tạo ra để ==quản lý và vận hành== các ==cơ sở dự liệu quan hệ==, bao gồm các hoạt động:
	- Truy xuất
	- Thay đổi
	- Thêm mới
	- Xóa
## Basic concepts
- **Database**: 
	- Nơi lưu trữ các dự liệu ==có liên quan== tới nhau
	- Database sẽ bao gồm các table
	- Ví dụ: Database "retail_system" chứa tất cả ác dữ liệu về việc bán hàng của 1 tổ chức nào đó
- **Table**: 
	- Mỗi table đại diện cho 1 ==nhóm các thực thể cùng loại==
	- Ví dụ table "customers" chứa tất cả thông tin về các khách hàng, table "orders" chứa tất cả các đơn hàng,...
	- Table gồm các column và row
- **Column**:
	- Mỗi column là ==tên của 1 đặc điểm==, một ==loại thông tin== nào đó của loại thực thể mà table đó đại diện
	- Các column sẽ giúp dựng nên 1 ==khung== cho thực thể
	- Ví dụ: trong table "customers" sẽ có các cột là các đặc điểm của khách hàng, góp phần định nghĩa nên 1 khách hàng: tên, tuổi, địa chỉ, số CCCD, giới tính,...
- **Row**:
	- 
![[db 2024-07-08 09.33.07.excalidraw]]