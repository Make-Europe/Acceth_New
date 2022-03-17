import os
from config import db
from termcolor import colored
import models

def RebuildDatabase():
    if os.path.exists('Backend/acceth.db'):
        print(colored('Removing existing DB', 'blue'))
        os.remove('Backend/acceth.db')
    db.create_all()
    db.session.commit()
    print(colored('New DB created.', 'green'))

if __name__ == '__main__':
    RebuildDatabase()