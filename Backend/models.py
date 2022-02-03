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
    start = db.Column(db.String())
    end = db.Column(db.String())
    description = db.Column(db.String())
    lineup = db.Column(db.String())
    eventHost = db.Column(db.Integer, db.ForeignKey("user.id"), nullable = False)
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

class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    

class Relation_EventTicket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey("ticket.id"), nullable = False)
    event_id = db.Column(db.Integer, db.ForeignKey("event.id"), nullable = False)

class Relation_EventHost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey("event.id"), nullable = False)
    host_id = db.Column(db.Integer, db.ForeignKey("host.id"), nullable = False)
    
class Relation_UserHost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable = False)
    host_id = db.Column(db.Integer, db.ForeignKey("host.id"), nullable = False)

