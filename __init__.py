
import os
from flask import Flask
import routes

app = Flask(__name__)
app.secret_key = 'fNcgi1wF8ZIv4K1g25GW-Q'

# db.init_app(app)
app.register_blueprint(routes.bp)
