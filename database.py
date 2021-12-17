from app import db

class Leaders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12), nullable=False )
    score = db.Column(db.Integer, nullable=False )

    def __repr__(self):
        return '<Item {}>'.format(self.id)
