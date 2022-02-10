import matplotlib, uuid, base64, os, requests
from randimage import get_random_image, show_array
from io import BytesIO
from config import db
from models import Event


def insertRandomImage(id, table):
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4())
    matplotlib.image.imsave("test/" + name + ".png", img)
    path = os.getcwd()+'/test/'+name+'.png'
    encoded = base64.b64encode(open(path, "rb").read())
    string = 'data:image/png;base64,{}'.format(encoded)
    dbEntry = db.session.query(table).get(id)
    dbEntry.image = string
    db.session.commit()

insertRandomImage(0, Event)

