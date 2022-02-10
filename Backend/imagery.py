import matplotlib, uuid, base64, os
from randimage import get_random_image
from config import db


def insertRandomImage(id, table):
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4())
    path = os.getcwd() + name + '.png'
    matplotlib.image.imsave(path, img)
    encoded = base64.b64encode(open(path, "rb").read())
    string = 'data:image/png;base64,{}'.format(encoded)
    dbEntry = db.session.query(table).get(id)
    dbEntry.image = string
    db.session.commit()
    #os.remove(path)

