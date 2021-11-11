# Mongo-Admin-Panel


ROUTE | METHOD | PARAMS/Docs
---------|----------|---------
 admin/{model_name} | POST | Body should be in exact schema as when an individual is grasped from GET method except with "_id" and "__v".
 admin/{model_name} | GET | OPTIONAL: /:id , where id is "_id" of an instance.
 admin/{model_name}/:id | POST | "id" is "_id" of an instance that needs to be updated. The JSON object needs to be exactly same as the schema of an instance, with values changed.
 admin/{model_name}/ | DELETE | Body needs to contain a list JSON OBJECT "list" which contains list of "id_"s which needs to be deleted  