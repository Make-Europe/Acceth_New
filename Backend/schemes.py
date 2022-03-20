from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import db
from models import User, Event, Host, Relation_EventHost, Relation_EventTicket, Relation_UserHost, Count, Comment, ProfileComment, Ticket, Like
from marshmallow import fields

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
    public_address = fields.Str()
class UserInsertSchema(UserSchema):
    user_id = fields.Str()
    public_address = fields.Str()

class UserResponseSchema(UserSchema):
    name = fields.Str()
    public_address = fields.Str()

#*______________ Comment Schemes ______________
class Commentschema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Comment
    content = fields.Str()
    date = fields.Str()
    username = fields.Str()
class CommentInsertSchema(Commentschema):
    event_id = fields.Int()
class CommentResponseSchema(Commentschema):
    content = fields.Str()
    date = fields.Str()
    username = fields.Str()

#*______________ Comment Schemes ______________
class ProfileCommentSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = ProfileComment
    content = fields.Str()
    date = fields.Str()
    username = fields.Str()
class ProfileCommentInsertSchema(ProfileCommentSchema):
    event_id = fields.Int()
class ProfileCommentResponseSchema(ProfileCommentSchema):
    content = fields.Str()
    date = fields.Str()
    username = fields.Str()



#*______________ Event Schemes ______________
class EventSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Event
    #id = fields.Int()

class EventInsertSchema(EventSchema):
    event_id = fields.Int()
    id = fields.Int()

class EventResponseSchema(EventSchema):
    name = fields.Str()


#*______________ Ticket Schemes ______________
class TicketSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Ticket
    id = fields.Int()
    image = fields.Str()
    #ticket_id = fields.Int()
    #event_id = fields.Int()

class TicketInsertSchema(TicketSchema):
    image = fields.Str()
    id = fields.Int()
    #ticket_id = fields.Int()
    #event_id = fields.Int()


class TicketResponseSchema(TicketSchema):
    image = fields.Str()
    id = fields.Int()
    #ticket_id = fields.Int()
    #event_id = fields.Int()

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
class CountInsertSchema(CountSchema):
    count_id = fields.Int()
class CountResponseSchema(CountSchema):
    name = fields.Str()
    value = fields.Int()


class LikeSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = Like
    id = fields.Int()
class LikeInsertSchema(LikeSchema):
    reciever = fields.Str()
    sender = fields.Str()
class LikeResponseSchema(LikeSchema):
    sender = fields.Str()
