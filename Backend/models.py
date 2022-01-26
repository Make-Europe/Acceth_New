from config import db

#*______________ DB Models ______________
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))

    def __repr__(self):
        return '<Post %s>' % self.name