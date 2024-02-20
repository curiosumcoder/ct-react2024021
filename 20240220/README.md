* npm create vite@latest demo9 -- --template react-ts
* npm i bootstrap bootstrap-icons axios react-router-dom

* import 'bootstrap/dist/css/bootstrap.min.css'
* import 'bootstrap-icons/font/bootstrap-icons.min.css'

* .env
	* VITE_API_URL=http://localhost:3000/products
* vite build -> .env.production
* vite build --mode staging -> .env.staging

* npm i json-server@0.17.4 -g
* json-server .\data.json
* npx json-server@0.17.4 .\data.json
