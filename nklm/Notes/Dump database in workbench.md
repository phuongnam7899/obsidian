---
- tags: [[]]
- created date: 2022-06-23
- source: 
---

# Dump database in workbench

- Download database folder
- Go to MySQL Workbench
	- Select   Server > Data import
	- Select folder that downloaded
	- Click import
- Go to Postman:
	- Send POST request: localhost:8010/system/non-national-registrations/indexing (No body)
	- Index subjects:
		-  http://localhost:8010/system/index-subject   
		- http://localhost:8010/system/create-subject-index

---
- tags: [[MySQL Workbench]]
---