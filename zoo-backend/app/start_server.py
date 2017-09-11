#!/usr/bin/env python
import werkzeug
from flask import Flask,request,abort,jsonify
from flask_restful import Resource,Api

app = Flask(__name__)
api = Api(app)

class Animals(Resource):
    def get(self):
        return {
        	"species":"monkey",
        	"age":"1337"
        }

api.add_resource(Animals,"/animals/")

def main():
    app.run(host='0.0.0.0',port=6666,debug=True)

if __name__ == '__main__':
    main()
