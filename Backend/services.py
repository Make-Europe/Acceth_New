from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api
from schemes import HostResponseSchema, HostSchema, UserSchema, UserResponseSchema
from config import db
from models import User, Host, Event, Relation_UserHost, Relation_EventTicket, Relation_EventHost


#*______________ User ______________
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
    @doc(description='Get a List of all User', tags=['User List'])
    @marshal_with(UserResponseSchema(many=True))
    def get(self):
        users = db.session.query(User).all()
        return UserSchema(many=True).dump(users)


#*______________ Host ______________
class HostService(MethodResource, Resource):
    @doc(description='Get Host by Host_id', tags=['Host'])
    @marshal_with(HostResponseSchema)
    def get(self, host_id):
        host = db.session.query(Host).get(host_id)
        return HostSchema().dump(host)

    @doc(description='Add new User', tags=['Host'])
    @use_kwargs(UserSchema, location=('json'))
    @marshal_with(HostResponseSchema())
    def post(self, host, host_id):
        db.session.add(host)
        db.session.commit()
        return HostSchema().dump(host)
    
    @doc(description='Update User with PUT', tags=['Host'])
    @use_kwargs(UserSchema, location=('json'))
    @marshal_with(HostResponseSchema())
    def put(self, host, host_id):
        db.session.add(host)
        db.session.commit()
        return HostSchema().dump(host)

    @doc(description='Delete existing User', tags=['Host'])
    @marshal_with(HostResponseSchema())
    def delete(self, host_id):
        host = db.session.query(Host).get(host_id)
        db.session.delete(host)
        db.session.commit()
        return HostSchema().dump(host)
    
class HostListService(MethodResource, Resource):
    @doc(description='Get a List of all Hosts', tags=['Host List'])
    @marshal_with(HostResponseSchema(many=True))
    def get(self):
        hosts = db.session.query(Host).all()
        return UserSchema(many=True).dump(hosts)
