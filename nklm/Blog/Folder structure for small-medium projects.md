## Cấu trúc thư mục cho các dự án ReactJS nhỏ và vừa nhỏ

**Ê tui đang học React trên mạng, mà thấy các tutorial có mấy cái structure code khác nhau lắm, nên theo cái nào thì tốt đc nhỉ? 🤔**

Uhm, bố React bố cho flexible lắm, thích để kiểu nào cũng được hết á, không khắt khe như bố Angular

**Trả lời đúng câu hỏi đi má 😑**

Cái đó còn tùi xem ông đang code trong dự án nào nữa, to hay vừa và nhỏ, tùy vào nhu cầu dự án khác nhau mà structure có thể khác nhau một chút

**Hmm... 🤔 tui đang muốn làm 1 cái website cũng không lớn lắm, hiện tại có 1 vài tính năng thui**  
**Cơ mà tui cũng dự đỉnh kiểu sau này thêm các tính năng mới nữa, sợ lúc đó không biết thêm vào đâu, hay bug xong nhìn code tùm lum 😵‍💫 khỏi fix á**

Oki chờ chút... Xem thử structure trong [repo này](https://github.com/phuongnam7899/personal-website) xem, fork thẳng về để dùng cho lần sau cũng được

**🤨... Nhìn qua thì tui cũng tự hình dung được vài phần, mà vẫn có mấy cái cần hỏi lại, đầu tiên là ngay ngoài có 2 file tui chưa thấy bao giờ là ==craco.config== và ==path.json==, nó để làm gì thế**

2 file trên dùng để rút gọn link import, chưa liên quan gì lắm đến structure lắm đâu, tui sẽ nói hôm khác nhé

**Ò, thế trong ==/src== chắc folder components để lưu mấy cái components mình sẽ dùng đi dùng lại nhỉ? 🧐**

Đúng rồi, chỗ này có 1 lưu ý là mỗi component nên được gói gọn trong 1 component duy nhất, ví dụ khi muốn tạo 1 component "Text" đơn giản thì folder sẽ như thế này:

- **Text** 
	- index.js 
	- styles.scss 

**Tại sao lại để tên file kia là ==index.js== mà không phải ==Text.js==?**

Bình thường nếu để là Text.js thì nếu muốn import component đó vào chỗ khác, ví dụ như vào file cùng bậc với folder Text thì sẽ có dạng là:

``import {`{ Text }`} from "./Text/Text"``

Nếu để index.js thì hệ thống sẽ tự động lấy file index.js của folder chỉ cần:

``import {`{ Text }`} from "./Text"``

**Okie, với cả nhìn =="Text/Text"== cũng hơi kỳ 😁. Rồi, vậy là xong cái ==/components==, thế còn những cái khác thì sao?**

==/helpers== là chỗ để ném mấy cái hàm được sử dụng nhiều trong app của mình vào, cố gắng mỗi hàm 1 file, những hàm cùng nhóm thì có thể cho vào folder riêng:

- **helpers**
	- **objects**
		- calculateSomething.js
		- calculateSomethingElse.js

==/pages== thì chỉ dùng để lưu các page có trong app (thường mỗi page sẽ có 1 route riêng):

- **pages**
	- **HomePage**
		- index.js
		- styles.scss
	- **Products Page**
		- index.js
		- styles.scss

Nếu ô có các custom hook thì có thể cho vào== /hooks==:

- **hooks**
	- aHooks.js
	- anotherHooks.js

==/styles== thì dùng để chứa những cái style chung (các biến, class,...):

- **styles**
	- animation.scss 
	- common.scss 
	- mixin.scss 
	- variables.scss 

Nếu app của ông có kết nối với server backend nào đó (thường là có), để hết các request đến các api vào ==/apis==:

**apis**

authApis.js

productsApis.js

userApis.js

**Okie, chưa quen lắm nhưng tạm thời cứ thế đã, để thử áp dụng vào project sắp tới xem ổn không, xincamon 😘**