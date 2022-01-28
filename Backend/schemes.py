from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import db
from models import User, Event, Host, Relation_EventHost, Relation_EventTicket, Relation_UserHost
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
    id = fields.Int(dump_only=True)
    name = fields.Str()
class UserInsertSchema(UserSchema):
    user_id = fields.Int(dump_only=True)
class UserResponseSchema(UserSchema):
    name = fields.Str()


#*______________ Event Schemes ______________
class EventSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Event
    id = fields.Str()

class EventInsertSchema(EventSchema):
    event_id = fields.Int(dumb_only=True)

class EventResponseSchema(EventSchema):
    name = fields.Str()

#*______________ Host Schemes ______________
class HostSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Host
    id = fields.Str()

class HostInsertSchema(EventSchema):
    host_id = fields.Int(dumb_only=True)

class HostResponseSchema(EventSchema):
    name = fields.Str()

#*______________ Event-Ticket Schemes ______________


#*______________ Event-Host Schemes ______________

#*______________ User-Host Schemes ______________
