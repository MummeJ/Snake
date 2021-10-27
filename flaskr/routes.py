from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')
