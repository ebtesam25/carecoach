import cv2
import numpy as np
import glob
import os
from pathlib import Path
from moviepy.editor import *
from pydub import AudioSegment
from silence import detect_silence, detect_nonsilent
import shutil

data_folder = Path("video/")

track = AudioSegment.from_wav("TTSOutput.wav")
 

 
img_array = []
for filename in glob.glob('assets/*.jpg'):
    img = cv2.imread(filename)
    height, width, layers = img.shape
    size = (width,height)
    img_array.append(img)
 
 
out = cv2.VideoWriter('still.mp4',cv2.VideoWriter_fourcc(*'MP4V'), 1, size)
 
for i in range(len(img_array)):
    out.write(img_array[i])
out.release()



arr = detect_silence(track)
vocal = detect_nonsilent(track)
j = 0
for i in range(len(arr)):
    if(arr[i][0]!=0):
        gif = VideoFileClip("avatar.mp4").set_duration((arr[i][0]-0)/1000)
        video = gif
        outfile = f"{j}.mp4"
        video.write_videofile(outfile, fps=25)
        j=j+1
    image = ImageClip("still.jpg").set_duration((arr[i][1]-arr[i][0])/1000)
    video = image
    outfile = f"{j}.mp4"
    j=j+1
    video.write_videofile(outfile, fps=1)
    if(i+1<len(arr)):
        gif = VideoFileClip("avatar.mp4").set_duration((arr[i+1][0]-arr[i][1])/1000)
        video = gif
        outfile = f"{j}.mp4"
        j=j+1
        video.write_videofile(outfile, fps=25)
    elif(arr[len(arr)-1][1]<vocal[len(vocal)-1][1]):
        gif = VideoFileClip("avatar.mp4").set_duration((arr[i+1][0]-arr[i][1])/1000)
        video = gif
        outfile = f"{j}.mp4"
        j=j+1
        video.write_videofile(outfile, fps=25)
    elif(vocal[len(vocal)-1][1]<arr[len(arr)-1][1]):
        image = ImageClip("still.jpg").set_duration((arr[i][1]-arr[i][0])/1000)
        video = image
        outfile = f"{j}.mp4"
        j=j+1
        video.write_videofile(outfile, fps=1)

for k in range(j):
    original = fr'{k}.mp4'
    target = fr'videos\{k}.mp4'
    shutil.move(original,target)





