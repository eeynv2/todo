from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/todo', methods=['GET'])
@cross_origin()
def get_data():
    data = {"todo": [""]}
    return jsonify(data)

@app.route('/example', methods=['GET'])
@cross_origin()
def get_example():
    data = {"example": "Hello World!"}
    return jsonify(data)

@app.route('/api', methods=['POST'])
@cross_origin()
def post_data():
    data = request.get_json()
    return jsonify(data), 201

if __name__ == '__main__':
    app.run(debug=True)