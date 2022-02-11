from importlib.resources import path
import matplotlib, uuid, os
from numpy import insert
from randimage import get_random_image
from datauri import DataURI
from config import db


def insertRandomImage(table, id):
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4()) + '.png'
    path = os.getcwd() + '/static/' + name
    matplotlib.image.imsave(path, img)
    img_uri = DataURI.from_file(path)
    dbObject = db.session.query(table).get(id)
    dbObject.image = img_uri
    db.session.commit()
    os.remove(path)       
