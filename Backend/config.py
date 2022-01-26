import os
from flask import Flask
from flask_restful import Api
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


#*______________ App Setup ______________
app = Flask(__name__, static_url_path='/static')


#*______________ DB Setup ______________
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///acceth.db'
app.config['SECRET_KEY'] = 'InputSecretKeyHere'
db = SQLAlchemy(app)

#*______________ Marshmallow Setup ______________
ma = Marshmallow(app)

#*______________ API & Swagger Setup ______________
api = Api(app)
app.config.update({
    'APISPEC_SPEC': APISpec(
        title='Acceth Backend',
        version='v0.0.1',
        plugins=[MarshmallowPlugin()],
        openapi_version='2.0.0'
    ),
    'APISPEC_SWAGGER_URL': '/swagger/',
    'APISPEC_SWAGGER_UI_URL': '/swagger-ui/'
})

#*______________ Docs Setup ______________
docs = FlaskApiSpec(app)