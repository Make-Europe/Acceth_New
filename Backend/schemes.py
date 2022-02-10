from datetime import date
from lib2to3.pytree import Base
from types import CoroutineType
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import db
from models import User, Event, Host, Relation_EventHost, Relation_EventTicket, Relation_UserHost, Count
from marshmallow import Schema, fields

#*______________ Base Schema ______________
class BaseScheme(SQLAlchemyAutoSchema):
    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)
    class Meta:
        ordered = True
        sqla_session = db.session
        include_fk = True
        load_instance = True

#*______________ User Schemes ______________
class UserSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = User
    id = fields.Int()
    name = fields.Str()
class UserInsertSchema(UserSchema):
    user_id = fields.Int()
class UserResponseSchema(UserSchema):
    name = fields.Str()


#*______________ Event Schemes ______________
class EventSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Event
    id = fields.Int()

class EventInsertSchema(EventSchema):
    event_id = fields.Int()

class EventResponseSchema(EventSchema):
    name = fields.Str()


#*______________ Host Schemes ______________
class HostSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Host
    id = fields.Int()

class HostInsertSchema(EventSchema):
    host_id = fields.Int()

class HostResponseSchema(EventSchema):
    name = fields.Str()

#*______________ Event-Host Schemes ______________
class Relation_EventHost_Schema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Relation_EventHost
    id = fields.Int()

class Relation_EventHost_InsertSchema(Relation_EventHost_Schema):
    event_id = fields.Int()
    host_id = fields.Int()

class Relation_EventHost_ResponseSchema(Relation_EventHost_Schema):
    event_id = fields.Int()
    host_id = fields.Int()

#*______________ Event-Ticket Schemes ______________
class Relation_EventTicket_Schema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Relation_EventTicket
    id = fields.Int()

class Relation_EventTicket_InsertSchema(Relation_EventTicket_Schema):
    event_id = fields.Int()
    ticket_id = fields.Int()

class Relation_EventTicket_ResponseSchema(Relation_EventTicket_Schema):
    event_id = fields.Int()
    ticket_id = fields.Int()

#*______________ User-Host Schemes ______________
class Relation_UserHost_Schema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Relation_UserHost
    id = fields.Int()

class Relation_UserHost_InsertSchema(Relation_UserHost_Schema):
    user_id = fields.Int()
    host_id = fields.Int()

class Relation_UserHost_ResponseSchema(Relation_UserHost_Schema):
    user_id = fields.Int()
    host_id = fields.Int()

#*______________ Count Schemes ______________
class CountSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Count
    id = fields.Int()
    name = fields.Str()
class CountInsertSchema(UserSchema):
    count_id = fields.Int()
class CountResponseSchema(UserSchema):
    name = fields.Str()
    value = fields.Int()
