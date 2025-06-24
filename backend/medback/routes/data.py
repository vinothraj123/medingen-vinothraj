from flask import Blueprint, jsonify
from models import Product

data_bp = Blueprint("data", __name__)

@data_bp.route("/products", methods=["GET"])
def get_products():
    print("🔁 GET /products called")

    products = Product.query.all()
    print(f"🔢 Found {len(products)} products")

    for p in products:
        print(f"📦 {p.name} | Brand: {p.brand} | ₹{p.price}")

    return jsonify([
        {
            "id": p.id,
            "name": p.name,
            "brand": p.brand,
            "price": p.price,
            "image_url": p.image_url
        } for p in products
    ])
