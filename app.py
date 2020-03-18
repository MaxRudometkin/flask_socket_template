#   !/usr/bin/env python

from flask import Flask, render_template
from flask_socketio import SocketIO
from datetime import datetime

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

# this event happens every 2 seconds.
# update prices and chart
@socketio.on('update data')
def handle_event(msg):
    result = str(datetime.now())
    print(1)
    socketio.emit('server message', result)


if __name__ == '__main__':
    socketio.run(app, debug=True)
