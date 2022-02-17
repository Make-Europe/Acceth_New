from importlib.resources import path
import matplotlib, uuid, os
from matplotlib.axis import Tick
from numpy import insert
from randimage import get_random_image
from datauri import DataURI
from config import db
from models import Event, Ticket
from PIL import Image, ImageFont, ImageDraw

def insertRandomImage(table, id):
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4()) + '.png'
    path = os.getcwd() + '/static/' + name
    matplotlib.image.imsave(path, img)
    img_uri = DataURI.from_file(path)
    dbObject = db.session.query(table).get(id)
    dbObject.image = img_uri
    dbObject.imagePath = path
    db.session.commit()
    

def convertToUri(path):
    uri = DataURI.from_file(path)
    return uri

def createTicket(event_id, ticket_id):
    w, h = 220, 190
    shape = [(0, 0), (w - 5, h - 180)]
  
    event = db.session.query(Event).get(event_id)
    print(event.imagePath)
    img = Image.open(event.imagePath)
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    draw.rectangle(shape, fill ="#fff", outline ="white")
    draw.text((0.5, 0)," TCKT {}I{}".format(event_id, ticket_id),(0,0,0),font=font)
    imgPath = os.getcwd() + '/static/tickets/{}I{}.png'.format(event_id, ticket_id)
    img.save('static/tickets/{}I{}.png'.format(event_id,ticket_id))
    imgUri = convertToUri(imgPath)
     
    newTicket = Ticket(ticket_id = ticket_id, image = imgUri, imagePath = imgPath, event_id = event_id )
    db.session.add(newTicket)
    db.session.commit()
    return newTicket
