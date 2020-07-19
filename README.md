# conal.tech
Source code for http://conal.tech

## Project Layout: 

- ### src/App.tsx
  Entrypoint into react application, contains page routing logic and header + footer which don't change.
  
- ### src/pages/...
  Contains folders for each type of page used by the application. These are used in the App.tsx Router switches.
  
- ### src/components/...
   Contains reusable React components separated into their own folders.
   
- ### src/data/...
   Contains both static site data as well as functions for retrieving data from the API.
   
## Other resources: 

- ### [api.conal.tech](https://github.com/ConalCosgrove/api.conal.tech)
   Source code for the API which this project consumes. 
   
