import os
from config import db
from termcolor import colored
from models import User, Event, Host, Relation_EventHost, Relation_EventTicket, Relation_UserHost

def RebuildDatabase():
    if os.path.exists('acceth.db'):
        print(colored('Removing existing DB', 'blue'))
        os.remove('acceth.db')
    db.create_all()
    db.session.commit()
    print(colored('New DB created.', 'green'))

if __name__ == '__main__':
    RebuildDatabase()