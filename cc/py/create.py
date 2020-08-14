import cv2
import numpy as np
import glob
import os
from pathlib import Path
from moviepy.editor import *
from pydub import AudioSegment
from silence import detect_silence, detect_nonsilent
import shutil
from speechgen import getspeech

data_folder = Path("video/")
getspeech()
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
print(arr,vocal)
j = 0
rdef = max(len(vocal),len(arr))
for i in range(rdef):
    """ if(i==0 and arr[i][0]!=0):
        gif = VideoFileClip("avatar.mp4").set_duration((vocal[0][1]-vocal[0][0])/1000)
        video = gif
        outfile = f"{j}.mp4"
        video.write_videofile(outfile, fps=25)
        j=j+1
    elif(i==0 and arr[i][0]==0):
        image = ImageClip("still.jpg").set_duration(((arr[i][1]-arr[i][0])/1000)*25)
        video = image
        outfile = f"{j}.mp4"
        j=j+1
        video.write_videofile(outfile, fps=25) """
    if(i<min(len(arr),len(vocal))):
        if(arr[i][0]>vocal[i][0]):
            gif = VideoFileClip("avatar.mp4").set_duration(float((vocal[i][1]-vocal[i][0])/1000))
            video = gif
            outfile = f"{j}.mp4"
            j=j+1
            video.write_videofile(outfile, fps=25)
            image = ImageClip("still.jpg").set_duration(float((arr[i][1]-arr[i][0])/1000))
            video = image
            outfile = f"{j}.mp4"
            j=j+1
            video.write_videofile(outfile, fps=25)
        elif(vocal[i][0]>arr[i][0]):
            image = ImageClip("still.jpg").set_duration(float((arr[i][1]-arr[i][0])/1000))
            video = image
            outfile = f"{j}.mp4"
            j=j+1
            video.write_videofile(outfile, fps=25)
            gif = VideoFileClip("avatar.mp4").set_duration(float((vocal[i][1]-vocal[i][0])/1000))
            video = gif
            outfile = f"{j}.mp4"
            j=j+1
            video.write_videofile(outfile, fps=25)
    """elif(i==100):
        if(len(arr)<len(vocal) or vocal[len(vocal)-1][1]>arr[len(arr)-1][1]):
            gif = VideoFileClip("avatar.mp4").set_duration((vocal[i][1]-vocal[i][0])/1000)
            video = gif
            outfile = f"{j}.mp4"
            j=j+1
            video.write_videofile(outfile, fps=25)
        elif(len(arr)>len(vocal) or vocal[len(vocal)-1][1]<arr[len(arr)-1][1]):
            image = ImageClip("still.jpg").set_duration((arr[i][1]-arr[i][0])/1000)
            video = image
            outfile = f"{j}.mp4"
            j=j+1
            video.write_videofile(outfile, fps=25)"""

for k in range(j):
    original = fr'{k}.mp4'
    target = fr'videos\{k}.mp4'
    shutil.move(original,target)

original = fr'TTSOutput.wav'
target = fr'videos\TTSOutput.wav'
shutil.copy(original,target)


from videos import generate



for k in range(j):
    original = fr'temp{k+1}.ts'
    os.remove(original)

for k in range(j):
    target = fr'videos\{k}.mp4'
    os.remove(target)





