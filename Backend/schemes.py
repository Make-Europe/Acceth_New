from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import db
from models import User
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

#*______________ Return Schemes ______________
class UserSchema(BaseScheme):
    class Meta(BaseScheme.Meta):
        model = User
    id = fields.Int(dump_only=True)
    name = fields.Str()
class UserInsertSchema(UserSchema):
    user_id = fields.Int(dump_only=True)
class UserResponseSchema(UserSchema):
    name = fields.Str()
