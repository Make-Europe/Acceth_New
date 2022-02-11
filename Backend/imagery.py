import matplotlib, uuid, os
from randimage import get_random_image


def insertRandomImage():
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4()) + '.png'
    path = os.getcwd() + '/static/' + name
    matplotlib.image.imsave(path, img)
    return name
