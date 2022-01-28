from config import db


#*______________ DB Models ______________

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    image = db.Column(db.String())
    description = db.Column(db.String())
    #TODO: Events
    #TODO: Favoriten

    def __repr__(self):
        return '<Post %s>' % self.name

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)
    description = db.Column(db.String())
    lineup = db.Column(db.String())
    eventHost = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    capacity = db.Column(db.Integer)
    image = db.Column(db.String(50))
    city = db.Column(db.String(50))
    street = db.Column(db.String(50))
    houseNumber = db.Column(db.String(50))
    zipCode = db.Column(db.String(50))
    price = db.Column(db.String(50))

class Host(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    image = db.Column(db.String(50))
    description = db.Column(db.String())
    #TODO: Events
    #TODO: Likes    

class Relation_EventTicket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey("Ticket.id"), nullable = False)
    event_id = db.Column(db.Integer, db.ForeignKey("Event.id"), nullable = False)

class Relation_EventHost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey("Event.id"), nullable = False)
    host_id = db.Column(db.Integer, db.ForeignKey("Host.id"), nullable = False)
    
class Relation_UserHost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    host_id = db.Column(db.Integer, db.ForeignKey("Host.id"), nullable = False)

