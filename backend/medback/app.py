# app.py
from flask import Flask
from extensions import db, migrate
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    
    # ✅ Database config
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/sp'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # ✅ Enable CORS
    CORS(app)

    # ✅ Init DB and migrations
    db.init_app(app)
    migrate.init_app(app, db)

    # ✅ Register Blueprints
    from routes.data import data_bp
    app.register_blueprint(data_bp, url_prefix="/api")

    print("✅ App created successfully")  # This should print on server start

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)  # Disable reloader to show print()
