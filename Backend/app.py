from services import (EventService, EventListService, CountService, EventImageService, 
                    CommentService, ListCommentsByEventService, TicketService, TicketCreateService)
from config import app, api, docs, CORS

#*______________ Service Registration ______________
api.add_resource(EventService, '/api/event/<event_id>')
docs.register(EventService)
api.add_resource(EventListService, '/api/list/event')
docs.register(EventListService)
api.add_resource(CountService, '/api/count/<count_id>')
docs.register(CountService)
api.add_resource(EventImageService, '/api/image/<event_id>')
docs.register(EventImageService)
api.add_resource(CommentService, '/api/comment/<comment_id>')
docs.register(CommentService)
api.add_resource(ListCommentsByEventService, '/api/list/comment/<event_id>')
docs.register(ListCommentsByEventService)
api.add_resource(TicketCreateService, '/api/ticket/create/<event_id>/<ticket_id>')
docs.register(TicketCreateService)
api.add_resource(TicketService, '/api/ticket/<ticket_id>')
docs.register(TicketService)

#*______________ Application Creation ______________
if __name__ == '__main__':
    app.run(debug=True)

    
