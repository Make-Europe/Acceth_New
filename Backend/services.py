import werkzeug
from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api, reqparse
from schemes import (EventResponseSchema, EventSchema, HostResponseSchema, HostSchema, UserSchema, 
                    UserResponseSchema, Relation_UserHost_Schema, Relation_UserHost_ResponseSchema, Relation_EventHost_Schema, Relation_EventHost_ResponseSchema,
                    Relation_EventTicket_Schema, Relation_EventTicket_ResponseSchema)
from config import db
from models import User, Host, Event, Relation_UserHost, Relation_EventTicket, Relation_EventHost


#*______________ User ______________
class UserService(MethodResource, Resource):
    @doc(description='Get User by User_id', tags=['User'])
    @marshal_with(UserResponseSchema)
    def get(self, user_id):
        quser = db.session.query(User).get(user_id)
        return UserSchema().dump(quser)

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
    @use_kwargs(UserSchema, location=('json'))
    @marshal_with(UserResponseSchema())
    def delete(self, user, user_id):
        user = db.session.query(User).get(user_id)
        db.session.delete(user)
        db.session.commit()
        return UserSchema().dump(user)

class UserListService(MethodResource, Resource):
    @doc(description='Get a List of all User', tags=['List'])
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
    @use_kwargs(HostSchema, location=('json'))
    @marshal_with(HostResponseSchema())
    def post(self, host, host_id):
        db.session.add(host)
        db.session.commit()
        return HostSchema().dump(host)
    
    @doc(description='Update User with PUT', tags=['Host'])
    @use_kwargs(HostSchema, location=('json'))
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
    @doc(description='Get a List of all Hosts', tags=['List'])
    @marshal_with(HostResponseSchema(many=True))
    def get(self):
        hosts = db.session.query(Host).all()
        return HostSchema(many=True).dump(hosts)


#*______________ Event ______________
class EventService(MethodResource, Resource):
    @doc(description='Get Event by Event_id', tags=['Event'])
    @marshal_with(EventResponseSchema)
    def get(self, event_id):
        event = db.session.query(Event).get(event_id)
        return EventSchema().dump(event)

    @doc(description='Add new User', tags=['Event'])
    @use_kwargs(EventSchema, location=('json'))
    @marshal_with(EventResponseSchema())
    def post(self, event, event_id):
        db.session.add(event)
        db.session.commit()
        return EventSchema().dump(event)
    
    @doc(description='Update User with PUT', tags=['Event'])
    @use_kwargs(EventSchema, location=('json'))
    @marshal_with(EventResponseSchema())
    def put(self, event, event_id):
        db.session.add(event)
        db.session.commit()
        return EventSchema().dump(event)

    @doc(description='Delete existing User', tags=['Event'])
    @marshal_with(EventResponseSchema())
    def delete(self, event_id):
        event = db.session.query(Event).get(event_id)
        db.session.delete(event)
        db.session.commit()
        return EventSchema().dump(event)
    
class EventListService(MethodResource, Resource):
    @doc(description='Get a List of all Hosts', tags=['List'])
    @marshal_with(EventResponseSchema(many=True))
    def get(self):
        events = db.session.query(Event).all()
        return EventSchema(many=True).dump(events)


#*______________ Relation User-Host Service ______________
class Relation_UserHost_Service(MethodResource, Resource):
    @doc(description='Get User-Host Relation by id', tags=['User-Host'])
    @marshal_with(Relation_UserHost_ResponseSchema())
    def get(self, userhost_id):
        relation = db.session.query(Relation_UserHost).get(userhost_id)
        return Relation_UserHost_Schema().dump(relation)

    @doc(description='Add new User', tags=['User-Host'])
    @use_kwargs(Relation_UserHost_Schema, location=('json'))
    @marshal_with(Relation_UserHost_ResponseSchema())
    def post(self, userhost, userhost_id):
        db.session.add(userhost)
        db.session.commit()
        return Relation_UserHost_Schema().dump(userhost)
    
    @doc(description='Update User with PUT', tags=['User-Host'])
    @use_kwargs(Relation_UserHost_Schema, location=('json'))
    @marshal_with(Relation_UserHost_ResponseSchema())
    def put(self, userhost, userhost_id):
        db.session.add(userhost)
        db.session.commit()
        return Relation_UserHost_Schema().dump(userhost)

    @doc(description='Delete existing User', tags=['User-Host'])
    @marshal_with(Relation_UserHost_ResponseSchema())
    def delete(self, userhost_id):
        relation = db.session.query(Relation_UserHost).get(userhost_id)
        db.session.delete(relation)
        db.session.commit()
        return Relation_UserHost_Schema().dump(relation)


#*______________ Relation Event-Host Service ______________
class Relation_EventHost_Service(MethodResource, Resource):
    @doc(description='Get Event-Host Relation by id', tags=['Event-Host'])
    @marshal_with(Relation_EventHost_ResponseSchema())
    def get(self, event_host_id):
        relation = db.session.query(Relation_EventHost).get(event_host_id)
        return Relation_EventHost_Schema().dump(relation)

    @doc(description='Add new User', tags=['Event-Host'])
    @use_kwargs(Relation_EventHost_Schema, location=('json'))
    @marshal_with(Relation_EventHost_ResponseSchema())
    def post(self, event_host, event_host_id):
        db.session.add(event_host)
        db.session.commit()
        return Relation_EventHost_Schema().dump(event_host)
    
    @doc(description='Update User with PUT', tags=['Event-Host'])
    @use_kwargs(Relation_EventHost_Schema, location=('json'))
    @marshal_with(Relation_EventHost_ResponseSchema())
    def put(self, event_host, event_host_id):
        db.session.add(event_host)
        db.session.commit()
        return Relation_EventHost_Schema().dump(event_host)

    @doc(description='Delete existing User', tags=['Event-Host'])
    @marshal_with(Relation_EventHost_ResponseSchema())
    def delete(self, event_host_id):
        relation = db.session.query(Relation_EventHost).get(event_host_id)
        db.session.delete(relation)
        db.session.commit()
        return Relation_EventHost_Schema().dump(relation)

#*______________ Relation Event-Ticket Service ______________
class Relation_EventTicket_Service(MethodResource, Resource):
    @doc(description='Get Event-Ticket Relation by id', tags=['Event-Ticket'])
    @marshal_with(Relation_EventTicket_ResponseSchema())
    def get(self, event_ticket_id):
        relation = db.session.query(Relation_EventTicket).get(event_ticket_id)
        return Relation_EventTicket_Schema().dump(relation)

    @doc(description='Add new relation', tags=['Event-Ticket'])
    @use_kwargs(Relation_EventTicket_Schema, location=('json'))
    @marshal_with(Relation_EventTicket_ResponseSchema())
    def post(self, event_ticket, event_ticket_id):
        db.session.add(event_ticket)
        db.session.commit()
        return Relation_EventTicket_Schema().dump(event_ticket)
    
    @doc(description='Update Relation with PUT', tags=['Event-Ticket'])
    @use_kwargs(Relation_EventTicket_Schema, location=('json'))
    @marshal_with(Relation_EventTicket_ResponseSchema())
    def put(self, event_ticket, event_ticket_id):
        db.session.add(event_ticket)
        db.session.commit()
        return Relation_EventTicket_Schema().dump(event_ticket)

    @doc(description='Delete existing User', tags=['Event-Ticket'])
    @marshal_with(Relation_EventTicket_ResponseSchema())
    def delete(self, event_ticket_id):
        relation = db.session.query(Relation_EventTicket).get(event_ticket_id)
        db.session.delete(relation)
        db.session.commit()
        return Relation_EventTicket_Schema().dump(relation)


class UploadImageService(MethodResource, Resource):
   @doc(description='Upload Image', tags=['Image'])
   def post(self):
     parse = reqparse.RequestParser()
     parse.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
     args = parse.parse_args()
     image_file = args['file']
     image_file.save("your_file_name.jpg")