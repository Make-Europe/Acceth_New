from config import db
import datetime

#*______________ DB Models ______________

class User(db.Model):
    __tablename__ = "User" 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    image = db.Column(db.String())
    description = db.Column(db.String())
    #TODO: Events
    #TODO: Favoriten

    def __repr__(self):
        return '<Post %s>' % self.name

class Event(db.Model):
    __tablename__ = "Event" 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    start = db.Column(db.String())
    end = db.Column(db.String())
    description = db.Column(db.String())
    lineup = db.Column(db.String())
    capacity = db.Column(db.Integer)
    image = db.Column(db.String())
    imagePath = db.Column(db.String())
    city = db.Column(db.String(50))
    street = db.Column(db.String(50))
    zipCode = db.Column(db.String(50))
    price = db.Column(db.String(50))
    hostName = db.Column(db.String(50))
    locationName = db.Column(db.String(50))
    date = db.Column(db.String(50))

class Comment(db.Model):
    __tablename__ = "Comment" 
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey("Event.id"), nullable = False)
    content = db.Column(db.String())
    date = db.Column(db.String())
    username = db.Column(db.String())

class Host(db.Model):
    __tablename__ = "Host" 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    image = db.Column(db.String(50))
    description = db.Column(db.String())
    #TODO: Events
    #TODO: Likes

class Ticket(db.Model):
    __tablename__ = "Ticket" 
    id = db.Column(db.Integer, primary_key=True)
    ticket_id = db.Column(db.Integer)
    event_id = db.Column(db.Integer)
    image = db.Column(db.String())
    imagePath = db.Column(db.String())
    

class Relation_EventTicket(db.Model):
    __tablename__ = "Relation_EventTicket" 
    id = db.Column(db.Integer, primary_key=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey("Ticket.id"), nullable = False)
    event_id = db.Column(db.Integer, db.ForeignKey("Event.id"), nullable = False)

class Relation_EventHost(db.Model):
    __tablename__ = "Relation_EventHost" 
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey("Event.id"), nullable = False)
    host_id = db.Column(db.Integer, db.ForeignKey("Host.id"), nullable = False)
    
class Relation_UserHost(db.Model):
    __tablename__ = "Relation_UserHost" 
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    host_id = db.Column(db.Integer, db.ForeignKey("Host.id"), nullable = False)



class Count(db.Model):
    __tablename__ = "Count" 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    value = db.Column(db.Integer)
    def __repr__(self):
        return '<Name: %s>' % self.name

