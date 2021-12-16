<<<<<<< HEAD
=======
import os
>>>>>>> c3dcdd4a1664c46eb53bcc7f1e1993c8c882f21b
from flask import Flask
import routes

app = Flask(__name__)
app.secret_key = 'fNcgi1wF8ZIv4K1g25GW-Q'
<<<<<<< HEAD

=======
from flaskr import routes
# db.init_app(app)
>>>>>>> c3dcdd4a1664c46eb53bcc7f1e1993c8c882f21b
app.register_blueprint(routes.bp)
