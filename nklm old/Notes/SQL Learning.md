# Giới thiệu về SQL
## SQL là gì?
- SQL = Structured Query Language
- Là một ==ngôn ngữ lập trình==
- Được tạo ra để ==quản lý và vận hành== các ==cơ sở dự liệu quan hệ==, bao gồm các hoạt động:
	- Truy xuất
	- Thay đổi
	- Thêm mới
	- Xóa
## Khái niệm cơ bản
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
	- Đại diện cho 1 thực thể/dòng/bản ghi trong table
	- Đại khái là sau khi điền giá trị vào các đặc điểm đã được nêu ra ở các column, ta được 1 thực thể cụ thể
	- Ví dụ: trong table "customers", ta có 1 khách hàng có tên là Nguyễn Văn A, 25 tuổi, ở Hà Nội, giới tính nam,...
![[db 2024-07-08 09.33.07.excalidraw]]
## Các câu lệnh quan trọng
### Với database
#### Tạo database mới
```
CREATE DATABASE example_db;
```
#### Xóa database
```
DROP DATABASE example_db;
```
#### Chọn database
- Sau lệnh này thì các lệnh ==phía sau nó== sẽ được áp dụng lên database example_db
```
USE example_db;
```

### Với table
#### Tạo table mới
```
CREATE TABLE employees ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(100), 
	position VARCHAR(100), 
	salary DECIMAL(10, 2) 
);
```