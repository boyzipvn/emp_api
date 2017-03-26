class API < Grape::API
  prefix 'api'
  version 'v1', using: :path
  mount Employee::Data
end
#curl -X DELETE http://localhost:3000/api/v1/employee_data/1.json
# curl http://localhost:3000/api/v1/employee_data.json -d "name=jay; address=delhi; age=25"
#curl http://localhost:3000/api/v1/employee_data.json
