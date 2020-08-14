from flask import Flask,request,url_for, redirect, send_file, send_from_directory, safe_join, abort
from flask_cors import CORS
import json
import os
import sys
import requests
import time
import pymongo
from pathlib import Path



myapp = Flask(__name__)
CORS(myapp)


@myapp.route("/")
def hello():
    return "Hello World!"



@myapp.route("/patient/<n>")
def sendvideo(n):
    
    print(n, "PRINT!")
    filename=f"{n}.mp4"
    return send_from_directory("",filename=filename, as_attachment=True)

if __name__ == '__main__':
    myapp.run(port=4001, debug=True)