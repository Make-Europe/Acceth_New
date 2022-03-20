import matplotlib, uuid, os, json, termcolor
from randimage import get_random_image
from datauri import DataURI
from config import db
from models import Event, Ticket
from PIL import Image, ImageFont, ImageDraw
from ipfs import addToIpfs

class JsonObject:
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

class TicketClass:
    image = 'image'
    ticket_id = 'ticket_id'
    event_id = 'event_id'

def insertRandomImage(table, id):
    img_size = (128,128)
    img = get_random_image(img_size)
    name = str(uuid.uuid4()) + '.png'
    path = os.getcwd() + '/static/' + name
    print('saving Image')
    matplotlib.image.imsave(path, img)
    print('Creating Path')
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
    img = Image.open(event.imagePath)
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    draw.rectangle(shape, fill ="#fff", outline ="white")
    draw.text((0.5, 0)," TCKT {}I{}".format(event_id, ticket_id),(0,0,0),font=font)
    imgPath = os.getcwd() + '/static/tickets/{}I{}.png'.format(event_id, ticket_id)
    img.save('static/tickets/{}I{}.png'.format(event_id,ticket_id))
    imgUri = convertToUri(imgPath)
    
    imgHash = addToIpfs(imgPath)

    metadata = TicketClass()
    metadata.image = imgHash
    metadata.ticket_id = ticket_id
    metadata.event_id = event_id
    metaPath = os.getcwd() + '/static/tickets/{}I{}.json'.format(event_id, ticket_id)

    with open(metaPath, 'w', encoding='utf-8') as f:
        json.dump(metadata.__dict__, f, ensure_ascii=False, indent=4)
    
    metaHash = addToIpfs(metaPath)    

    newTicket = Ticket(ticket_id = ticket_id, event_id = event_id, image = imgHash, 
                        imageURI = imgUri, imagePath = imgPath, metaData = metaHash, 
                        metaData_Path = metaPath)

    db.session.add(newTicket)
    db.session.commit()
    print(termcolor.colored("New Ticket Created", "red"))
    print("Ticket IPFS Hash: ", termcolor.colored(metaHash, 'blue'))
    return newTicket

