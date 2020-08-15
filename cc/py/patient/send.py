from flask import Flask,request,url_for, redirect, send_file, send_from_directory, safe_join, abort
from flask_cors import CORS
import json
import os
import sys
import requests
import time
import pymongo
from pathlib import Path
from werkzeug.utils import secure_filename


myapp = Flask(__name__)
CORS(myapp)


@myapp.route("/")
def hello():
    return "Hello World!"



@myapp.route("/patient/<n>", methods=["GET"])
def sendvideo(n):
    print(n, "PRINT!")
    return send_from_directory("",filename=f"{n}.mp4", as_attachment=True)

@myapp.route("/audio",methods=['POST'])
def getaudio():
    
    f = request.files['body']
    f.save(secure_filename(f.filename))
    return 'file uploaded successfully'

if __name__ == '__main__':
    myapp.run(port=4001)