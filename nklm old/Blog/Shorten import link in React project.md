**Ê hôm trước bảo nói về cách rút gọn link khi import mà mãi chưa nói vậy.-. Giờ tui thường xuyên phải import theo kiểu ==../../../../components/Button/Button.js==, khổ thực sự**

Oke, để giải quyết cái đống bùi nhùi kia thì có 2 cái cần nói, muốn nghe cái ngắn hay cái dài trước?

**Cái nào dễ làm trước đê**

Đầu tiên là cần xử lý cái đoạn ==Button/Button.js==, thay vì để tên file là ==Button.js== thì nên để là ==index.js==, à mà cái này tui có nói trong lần nói về folder structure rồi mà nhỉ, có gì xem lại cho rõ nhé

**... À ờ nhỉ, nhờ rùi, ok thế cái đống ==../../../../**== giờ àm sao, nó mới là cái dài nhất á

Để giải quyết cái đó thì cần config thêm webpack alias, nên ô cần cài craco bằng lệnh npm install @craco/craco trước nhé

**craco là gì thế?**

Nó là 1 package thôi, craco là viết tắt của Create React App Configuration Override, đọc tên là hiểu rồi đấy

**Hmm, là để override config huh? Ok, thế cài xong rồi làm gì nữa?**

Cài xong rồi thì tạo thêm 1 file ==craco.config.js== với nội dung thế này:

```js
const path = require('path');
module.exports = { 
	webpack: { 
		alias: { "@components": path.resolve(__dirname, 'src/components/') } 
	} 
};
```

Sau đó ô cần quay qua file packages.json update lại 3 scripts như thế này:

```json
{ 
	"scripts": {
		"start": "craco start",
		"build": "craco build",
		"test": "craco test", 
	}
}
```

**Thế là được luôn huh?**

Uhm, giờ khi cần import cái Button như ở ô bảo vừa nãy chỉ cần import như này

`import { Button } from "@components/Button"`

Hay muốn gọn hơn nữa thì trong folder components ô tạo thêm 1 file index.js, sau đó import tất cả các thằng con vào như thế này:

```js
import * from "./Button"
import * from "./Form" 
import * from "./Table"
```

Thì đến lúc import chỉ cần thế này là được:

```js
import { Button, Form, Table } from "@components"
```

**Uh huh, nhìn ổn hơn rồi đấy, như này nếu muốn rút gọn link import đến các phần khác như helper, hooks thì cũng tương tự nhỉ?**

Uhm, tui đang định nói thêm phần đó:v

**Okok, xincamon**


[[ReactJS]]