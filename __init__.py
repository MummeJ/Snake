
import os
from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from . import routes

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'fNcgi1wF8ZIv4K1g25GW-Q'
# db = SQLAlchemy(app)
app.register_blueprint(routes.bp)
