import base64
from bottle import route, run, request
from bottle import hook, post, response
from bottle import redirect
import collections
import os
import json
import MySQLdb as db
import sys
from PIL import Image
import base64
import cStringIO
import PIL.Image

@route('/buscar/events/<name_event>', method='GET')
def buscar_events( name_event="" ):
    # Open database connection
    c = db.connect('localhost', 'root', 'root', 'lahaces', charset="utf8", use_unicode=True)
    # prepare a cursor object using cursor() method
    cursor = c.cursor()
    #El queri busca el hashtag dentro de la descripcion del evento
    sql = 'select  event_id, name_event,user_host, date, place, description from events where description like "%#'+name_event+'%"';
    print sql
    cursor.execute(sql)
    events=cursor.fetchall();
    lista_events = []
    events_json=collections.OrderedDict()
    for event in events:
        e = collections.OrderedDict()
        e['id'] = str(event[0])
        e['name'] = event[1]
        e['host'] = str(event[2])
        e['date'] = str(event[3])
        e['place'] = str(event[4])
        e['description'] = event[5]
        lista_events.append(e)
    events_json['eventos']=lista_events
    j = json.dumps(events_json)
    #Importante agregar el comando de abajo si deseas el formato json
    response.content_type = 'application/json'#Funciono por la ptmr XD
    print j
    c.close()
    return j

@route('/event/nuevo', method='POST')
def nuevo():
    nombre = request.forms.get('nombre')
    fecha = request.forms.get('fecha')
    lugar = request.forms.get('lugar')
    descripcion = request.forms.get('descripcion')
    c = db.connect('localhost', 'root', 'root', 'lahaces', charset="utf8", use_unicode=True)
    # prepare a cursor object using cursor() method
    cursor = c.cursor()
    #sql= 'SELECT image FROM albums WHERE id_album="'+id+'";'
    sql= 'INSERT INTO events(name_event,user_host,date,place,description) VALUES("'+str(nombre)+'","1","'+str(fecha)+'","'+str(lugar)+'","'+str(descripcion)+'");'
    print sql
    cursor.execute(sql)
    c.commit()
    c.close()
    ###SE agregaron los datos
    return "dato agregado a base de datos"

@route('/event/<id>', method='GET')
def ver_event( id="" ):
    c = db.connect('localhost', 'root', 'root', 'lahaces', charset="utf8", use_unicode=True)
    cursor = c.cursor()
    sql="select  e.event_id, e.name_event, e.user_host, concat(u.first_name,' ',u.last_name) as 'host', \
        e.date, e.place, e.description \
        from events e, users u \
        where e.user_host=u.user_id and event_id='"+id+"'"
    print sql
    cursor.execute(sql)
    evento=cursor.fetchone();
    lista_events = []
    evento_json=collections.OrderedDict()
    evento_json['id'] = str(evento[0])
    evento_json['name'] = evento[1]
    evento_json['host_id'] = str(evento[2])
    evento_json['host'] = str(evento[3])
    evento_json['date'] = str(evento[4])
    evento_json['place'] = str(evento[5])
    evento_json['description'] = evento[6]
    j = json.dumps(evento_json)
    #Importante agregar el comando de abajo si deseas el formato json
    response.content_type = 'application/json'#Funciono por la ptmr XD
    print j
    c.close()
    return j

@hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST, PUT, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, ContentType, X-Requested-With, X-CSRF-Token'
@post('/cors')
def lvambience():
    response.headers['Content-Type'] = 'application/json'
    return "[1]"
#---------------------------------------------------------------------------------#
#utilizaremos la IP del servidor python(Computadora donde esta el servidor)
run(host='localhost', port=8080, debug=True)
