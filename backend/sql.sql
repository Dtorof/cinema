
http://localhost:7500/api/v1/pqr-type
-- PQR Type

{
    "name": "public"
}


http://localhost:7500/api/v1/pqr-category
-- PQR Category
{
    "name" : "Sobrecargo factura",
    "type_pqr_id" : 1
}

http://localhost:7500/api/v1/user
-- User
{
    "name" : "Shaggy",
    "userName" : "Shag982",
    "document" : "3496826",
    "password" : "942y269y8bv"
}


http://localhost:7500/api/v1/customer
-- Client

{
"names" : "Jhon" ,
"surnames" : "Doe",
"email": "jhondoe@correo.com",
"document" : "2363213258",
"dateOfBirth" : "1998-10-24",
"address" : "214 street Pontifician Av.",
"phone" : "3195861268"
}

http://localhost:7500/api/v1/register-pqr
-- PQR Register

{
    "client_id" : "1",
    "user_id" : "1",
    "pqr_category_id" : "1",
    "description" : "Some description"
}

http://localhost:7500/api/v1/response-pqr
-- PQR Response
{
    "register_pqr_id": "d482d41e-16f2-497c-a70d-deea10d5b7a1",
    "user_id" : 1,
    "desc_solution": "Figure out"
}


http://localhost:7500/api/v1/complete
-- PQR Complete

{
  "status" : "Finalizado"  
}

http://localhost:7500/api/v1/response-pqr
-- PQR Traceability

