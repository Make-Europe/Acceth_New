import os
from flask import Flask
from flask_restful import Api
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPTokenAuth


auth = HTTPTokenAuth(scheme='Bearer')
#*______________ App Setup ______________
app = Flask(__name__, static_url_path='/static')


#*______________ DB Setup ______________
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///acceth.db'
app.config['SECRET_KEY'] = 'InputSecretKeyHere'
db = SQLAlchemy(app)

#*______________ Marshmallow Setup ______________
ma = Marshmallow(app)







spec = APISpec(
        title='Helfer System API',
        version='0.1.3',
        plugins=[MarshmallowPlugin()],
        #openapi_version="3.0.3",
        openapi_version="2.0.0",
    )
api_key_scheme = {"type": "apiKey", "in": "header", "name": "X-CSRF-TOKEN"}
spec.components.security_scheme("ApiKeyAuth", api_key_scheme)
app.config.update({
    'APISPEC_SPEC': spec,
    'APISPEC_SWAGGER_URL': '/api/swagger/',  # URI to access API Doc JSON
    'APISPEC_SWAGGER_UI_URL': '/api/swagger-ui/', # URI to access UI of API Doc
    #'APISPEC_SWAGGER_UI_URL': None,  # disabled
    #'APISPEC_SWAGGER_PARAMS': {
    #    "operationsSorter": "alpha",  # sorts endpoints alphabetically within a tag
    #    "tagsSorter": "alpha", # sorts tags alphabetically
    #}
})


#*______________ API & Swagger Setup ______________
api = Api(app)

#*______________ Docs Setup ______________
docs = FlaskApiSpec(app)