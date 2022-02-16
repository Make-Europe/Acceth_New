from os import name
from flask import Flask
from flask_restful import Api
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from services import (Relation_EventHost_Service, Relation_EventTicket_Service, UserService, UserListService, HostService, 
                    EventService, HostListService, EventListService, Relation_UserHost_Service, CountService, CountListService, EventImageService, 
                    CommentService, CommentListService, ListCommentsByEventService, TicketService)

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
api.add_resource(UserListService, '/list/user')
docs.register(UserListService)

api.add_resource(EventService, '/event/<event_id>')
docs.register(EventService)
api.add_resource(EventListService, '/list/event')
docs.register(EventListService)

api.add_resource(HostService, '/host/<host_id>')
docs.register(HostService)
api.add_resource(HostListService, '/list/host')
docs.register(HostListService)


api.add_resource(Relation_UserHost_Service, '/relation/userhost/<userhost_id>')
docs.register(Relation_UserHost_Service)

api.add_resource(Relation_EventHost_Service, '/relation/eventhost/<eventhost_id>')
docs.register(Relation_EventHost_Service)

api.add_resource(Relation_EventTicket_Service, '/relation/eventticket/<eventticket_id>')
docs.register(Relation_EventTicket_Service)

api.add_resource(CountService, '/count/<count_id>')
docs.register(CountService)

api.add_resource(CountListService, '/list/count')
docs.register(CountListService)

api.add_resource(EventImageService, '/image/<event_id>')
docs.register(EventImageService)

api.add_resource(CommentService, '/comment/<comment_id>')
docs.register(CommentService)
api.add_resource(CommentListService, '/list/comment/')
docs.register(CommentListService)
api.add_resource(ListCommentsByEventService, '/list/comment/<event_id>')
docs.register(ListCommentsByEventService)
api.add_resource(TicketService, '/ticket/<event_id>/<ticket_id>')
docs.register(TicketService)
#*______________ Application Creation ______________
if __name__ == '__main__':
    app.run(debug=True)

    