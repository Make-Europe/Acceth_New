from services import (EventService, EventListService, CountService, EventImageService, 
                    CommentService, ListCommentsByEventService, TicketService, TicketCreateService, 
                    UserService, UserListService, ProfileCommentService, ProfileCommentListService, 
                    ProfileListCommentsByUserService, LikeListService, LikeListService_Reciever, 
                    LikeListService_Sender, LikeService)

from config import app, api, docs, CORS

#*______________ Service Registration ______________
api.add_resource(UserService, '/api/user/<user_id>')
docs.register(UserService)
api.add_resource(UserListService, '/api/user/')
docs.register(UserListService)
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
api.add_resource(ProfileCommentService, '/api/profilecomment/<comment_id>')
docs.register(ProfileCommentService)
api.add_resource(ProfileCommentListService, '/api/list/profilecomment/')
docs.register(ProfileCommentListService)
api.add_resource(ProfileListCommentsByUserService, '/api/list/profilecomment/<user_id>')
docs.register(ProfileCommentListService)
api.add_resource(TicketCreateService, '/api/ticket/create/<event_id>/<ticket_id>')
docs.register(TicketCreateService)
api.add_resource(TicketService, '/api/ticket/<ticket_id>')
docs.register(TicketService)

api.add_resource(LikeService, '/api/like/<like_id>')
docs.register(LikeService)
api.add_resource(LikeListService, '/api/list/like')
api.add_resource(LikeListService_Sender, '/api/list/likebysender/<sender_address>')
docs.register(LikeListService_Sender)
api.add_resource(LikeListService_Reciever, '/api/list/likebyreciever/<reciever_address>')
docs.register(LikeListService_Reciever)
#*______________ Application Creation ______________
if __name__ == '__main__':
    app.run()

    
