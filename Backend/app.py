from os import name
from flask import Flask, request
from flask_restful import Api
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from services import UserService, UserListService

#*______________ App Setup ______________
app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#*______________ DB Setup ______________
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///acceth.db'
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



#*______________ Service Registration ______________
api.add_resource(UserService, '/user/<user_id>')
docs.register(UserService)
api.add_resource(UserListService, '/user')
docs.register(UserListService)

#*______________ Application Creation ______________
if __name__ == '__main__':
    app.run(debug=True)