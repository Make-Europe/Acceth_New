import matplotlib, uuid, base64, os
from randimage import get_random_image
from config import db


def insertRandomImage():
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4())
    path = os.getcwd() + '/static' + name + '.png'
    matplotlib.image.imsave(path, img)
    return name + '.png'

