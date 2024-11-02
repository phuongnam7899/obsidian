-   Go to folder contain mycollection.bson
-   Dump:
    -   1 collection: mongorestore --db mydbname --collection mycollection ./mycollection.bson (add —drop to clear old collection first)
    -   cả folder: mongorestore --db mydbname --collection mycollection .
    -   Cả db: mongorestore --db mydbname [url_to_db_folder]

[[Mongo DB]]