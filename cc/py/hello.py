from flask import Flask,request,url_for, redirect, render_template
from flask_cors import CORS
from pydub import AudioSegment
from silence import detect_silence
import json
import os
import sys
import requests
import time
import pymongo
from pathlib import Path\

myapp = Flask(__name__)
CORS(myapp)

data_folder = Path("../src")

file_to_open = data_folder/"TTSOutput.wav"
track = AudioSegment.from_wav("TTSOutput.wav")
detect_silence(track)
@myapp.route("/")
def hello():
    return "Hello Flask, on Azure App Service for Linux"


@myapp.route("/teapot", methods=["GET"])
def notes():
    arr = detect_silence(track)
    print(json.dumps(arr))
    return {'silence':arr,'dur':track.duration_seconds}

if __name__ == '__main__':
    myapp.run(port=4000)