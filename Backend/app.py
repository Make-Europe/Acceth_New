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
                    CommentService, CommentListService, ListCommentsByEventService, TicketService, TicketCreateService)
from config import app, api, docs, CORS



#*______________ Service Registration ______________
#api.add_resource(UserService, '/api/user/<user_id>')
#docs.register(UserService)
#api.add_resource(UserListService, '/api/list/user')
#docs.register(UserListService)

api.add_resource(EventService, '/api/event/<event_id>')
docs.register(EventService)
api.add_resource(EventListService, '/api/list/event')
docs.register(EventListService)

#api.add_resource(HostService, '/api/host/<host_id>')
#docs.register(HostService)
#api.add_resource(HostListService, '/api/list/host')
#docs.register(HostListService)


#api.add_resource(Relation_UserHost_Service, '/api/relation/userhost/<userhost_id>')
#docs.register(Relation_UserHost_Service)

#api.add_resource(Relation_EventHost_Service, '/api/relation/eventhost/<eventhost_id>')
#docs.register(Relation_EventHost_Service)

#api.add_resource(Relation_EventTicket_Service, '/api/relation/eventticket/<eventticket_id>')
#docs.register(Relation_EventTicket_Service)

api.add_resource(CountService, '/api/count/<count_id>')
docs.register(CountService)

#api.add_resource(CountListService, '/api/list/count')
#docs.register(CountListService)

api.add_resource(EventImageService, '/api/image/<event_id>')
docs.register(EventImageService)

api.add_resource(CommentService, '/api/comment/<comment_id>')
docs.register(CommentService)
#api.add_resource(CommentListService, '/api/list/comment/')
#docs.register(CommentListService)
api.add_resource(ListCommentsByEventService, '/api/list/comment/<event_id>')
docs.register(ListCommentsByEventService)
api.add_resource(TicketCreateService, '/api/ticket/create/<event_id>/<ticket_id>')
docs.register(TicketCreateService)
api.add_resource(TicketService, '/api/ticket/<ticket_id>')
docs.register(TicketService)
#*______________ Application Creation ______________
if __name__ == '__main__':
    app.run(debug=True)

    
