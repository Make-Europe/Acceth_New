from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api
from schemes import UserSchema, UserResponseSchema
from config import db
from models import User


#*______________ Services ______________
class UserService(MethodResource, Resource):
    @doc(description='Get User by User_id', tags=['User'])
    @marshal_with(UserResponseSchema)
    def get(self, user_id):
        user = db.session.query(User).get(user_id)
        return UserSchema().dump(user)

    @doc(description='Add new User', tags=['User'])
    @use_kwargs(UserSchema, location=('json'))
    @marshal_with(UserResponseSchema())
    def post(self, user, user_id):
        db.session.add(user)
        db.session.commit()
        return UserSchema().dump(user)
    
    @doc(description='Update User with PUT', tags=['User'])
    @use_kwargs(UserSchema, location=('json'))
    @marshal_with(UserResponseSchema())
    def put(self, user, user_id):
        db.session.add(user)
        db.session.commit()
        return UserSchema().dump(user)

    @doc(description='Delete existing User', tags=['User'])
    @marshal_with(UserResponseSchema())
    def delete(self, user_id):
        user = db.session.query(User).get(user_id)
        db.session.delete(user)
        db.session.commit()
        return UserSchema().dump(user)

class UserListService(MethodResource, Resource):
    #method_decoratos = [authenticate]
    #@scope("todos:read")
    @doc(description='Get a List of all User', tags=['User List'])
    @marshal_with(UserResponseSchema(many=True))
    def get(self):
        users = db.session.query(User).all()
        return UserSchema(many=True).dump(users)
