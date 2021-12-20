# Snake

## ==Description== ##
This is remake of the traditional centipede game. It is powered by Flask and all of the front-end is powered by JavaScript. Everytime the snake's head collides with the food, it's body grows by one. If the snake runs into any part of its body, or runs into a wall, the game ends. The board resets and is started again by pressing an arrow key.

### ==Files and directories== ###
   - `static` - Contains all static files.
      - `css` - Contains main.css
      - `img` - Contains background img.
      - `js` - Contains main.js
   - `templates` - Contains all html files for the app.
      - `base.html` - The base template that all other templates extend.
      - `index.html` - Main template or "homepage".
   - `__init__.py` - File that creates an instance of Flask app.
   - `api_request.py` - File containing all api requests.
   - `routes.py` - Contains all of the routes.
   - `Procfile` - Tells Heroku where the app is.
   - `requirements.txt` - Application requirements.

### ==Executing Program== ###
To run, set the following environment variables:
* Powershell
	* `$env:FLASK_APP = "__init__"`
	* `$env:FLASK_ENV = "development"`
	* `flask run`
* CMD
	* `set FLASK_APP=__init__`
	* `set FLASK_ENV=development`
	* `flask run`
* Bash
	* `export FLASK_APP=__init__`
	* `export FLASK_ENV=development`
	* `flask run`
  
  Link: https://thesnakeapp.herokuapp.com/
