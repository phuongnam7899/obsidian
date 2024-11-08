
# Ideate
## Đặt câu hỏi "How might we..."

## Crazy Eight

## Đánh giá một idea tốt


# Goal statement
- 1-2 câu xây dựng từ problem statement, mô tả giải pháp cụ thể lý tưởng cho problem
## Cấu trúc
> =={Sản phẩm}== sẽ cho phép người dùng =={thực hiện các hành động cụ thể}==. Điều này sẽ ảnh hưởng đến =={mô tả hành động sẽ ảnh hưởng đến ai}== bằng cách =={mô tả hành động sẽ ảnh hưởng tích cực đến họ thế nào}==. Chúng tôi dẽ đo lường hiệu quả bằng cách =={mô tả cách đo lường tác động}==

- Sản phẩm/tính năng là gì?
- Tính năng cho phép người dùng làm gì?
- Tính năng ảnh hưởng đến ai?
- Tại sao sản phẩm/tính năng giải quyết được vấn đề của người dùng?
- Vạch ra công thức hay thuật ngữ có thể đo lường ?
# User flow
- Luồng các hành động được thực hiện bởi người dùng trên ứng dụng
- Thể hiện từ điểm bắt đầu đến điểm cuối cùng mà đảm bảo  người dùng có thể hòa thành mục tiêu
- Vẽ trước khi xây dựng [[Wireframe]], cần trả lời 3 câu hỏi trước:
	- Người dùng sẽ thwucj hiện các hành động gì
	- Người dùng sẽ đi qua những màn hình nào sau khi thực hiện hành động
	- Người dùng cần đưa ra các quyết định gì?
- Các thành phần
![[Pasted image 20221110211442.png]]
# Information Architecture
- Là cấu trúc, bản đồ cho nội dung -> giúp user biết họ đang ở đâu, tìm thông tin ở đâu 
- Trả lời 2 câu hỏi chính:
	- Sản phẩm có những thông tin gì
	- Sắp xếp thông tin đó trong trang như thế nào
## Thành phần
- Organizational structure
- Navigation system
- Labeling system
- Search system
- Action system
## Các cách tổ chức
### Hierarchial structure
- Dạng cây, nội dung quan trọng đặt trên cùng -> giảm dần xuống dưới
![[Pasted image 20221110215915.png]]
### Sequence sructure
![[Pasted image 20221110220058.png]]
### Category structure
- Kết hợp dang cây với database
![[Pasted image 20221110220224.png]]
### Matrix structure
- Cho phép user tự chọn hướng đi của mình vì có nhiều đường đến nội dung
![[Pasted image 20221110221745.png]]
### Hub structure
- 1 trag nằm ở trung tâm, từ đó có thể đi đến các trang khác nhau
- Trang chính chỉ để navigate, không chưa thêm thông tin gì
 ![[Pasted image 20221110222215.png]]
 
## Nguyên tắc áp dụng khi dựng IA
### Object
- Coi nội dung như một vật thể, có thuộc tính, hành vi, vòng đời
- Nội dung khác nhau có thuộc tính, hành vi khác nhau
### Choice
- Tạo các trang cung cấp lựa chọn có nghĩa
- Giữ phạm vi lựa chọn hướng vào mục tiêu cụ thể
- Đưa ra nhiều lựa chọn sẽ khiến khó đưa ra quyết định
- Thông tin nên được xếp theo thứ tự ưu tiên, tránh danh sách dài
### Disclosure 
- Chỉ hiển thị đủ thông tin để user tìm kiếm
- Hướng dẫn user qua các thông tin đó để họ dễ nhớ dễ hiểu
- Xác địch xem user thực sự cần thấy thông tin gì trong mỗi trang để hiển thị
### Exemplar
- Mô tả nội dung thông qu ví dụ giúp user dễ hiểu được những gì họ nhận được
### Front door
- User có khả năng truy cập trang không qua trang chủ -> ở mỗi trang cần có điều hướng đến các trang liên quan
- Đặt ra các câu hỏi "Sau khi user... làm thế nào để... ?"
### Multiple classification
- Cung cấp nhiều cách khác nhau để xem nội dung/ thực hiện hành động nào đó trên trang
### Growth
- Nội dung hôm nay là phần nhỏ của ngày mai
- Cần tổ chức thông tin để nó có thể phát triển theo thời gian