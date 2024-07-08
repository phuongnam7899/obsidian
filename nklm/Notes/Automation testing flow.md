---
- tags: [[]]
- created date: 2022-06-21
- source: 
---

# Automation testing flow

- Download chrome web driver

- enter `export_loca_envirenment_variables.sh` and change value of `LOCAL_BROWSER`

- Get username and accesskey in BrowserStack (User => Summary) to put in `browserstack.sh`

- sh a folder -> exec all testing in flder
- sh a file -> execute a test

- run test file  in multiple browser: comment/uncomment which browser to 

## Run test in browser stack
- ./browserstack.sh
- go to browser stack -> see result

## Handle result
- `/robotOutput`: fidn the report
- send folder of result to Liana to check

- update the [Automation test scenarios sheet]([https://docs.google.com/spreadsheets/d/1ShgxUCDA_9gkSHVlWBEab7gp6sAhSzSvE6_KqhMya2A/edit#gid=0](https://docs.google.com/spreadsheets/d/1ShgxUCDA_9gkSHVlWBEab7gp6sAhSzSvE6_KqhMya2A/edit#gid=0 "https://docs.google.com/spreadsheets/d/1ShgxUCDA_9gkSHVlWBEab7gp6sAhSzSvE6_KqhMya2A/edit#gid=0"))

- Branch: `r2-develop-robot`

## Reinit db
    

---
- tags: [[SeleniumLibrary]] [[AppiumLibrary]] [[Ufinity Team]] 
---