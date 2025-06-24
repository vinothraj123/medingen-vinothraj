from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if data["username"] == "admin" and data["password"] == "admin":
        token = create_access_token(identity=data["username"])
        return jsonify(token=token), 200
    return jsonify(msg="Invalid"), 401
