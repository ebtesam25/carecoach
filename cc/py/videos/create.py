import cv2
import numpy as np
import glob
import os
from pathlib import Path
from moviepy.editor import *
from pydub import AudioSegment
import shutil

def concatenate():
	stringa = "ffmpeg -i \"concat:"
	elenco_video = glob.glob("*.mp4")
	elenco_file_temp = []
	for f in elenco_video:
		file = "temp" + str(elenco_video.index(f) + 1) + ".ts"
		os.system("ffmpeg -i " + f + " -c copy -bsf:v h264_mp4toannexb -f mpegts " + file)
		elenco_file_temp.append(file)
	print(elenco_file_temp)
	for f in elenco_file_temp:
		stringa += f
		if elenco_file_temp.index(f) != len(elenco_file_temp)-1:
			stringa += "|"
		else:
			stringa += "\" -c copy  -bsf:a aac_adtstoasc output.mp4"
	print(stringa)
	os.system(stringa)

concatenate()
audio = AudioFileClip("TTSOutput.wav")
image = VideoFileClip("output.mp4").set_duration(audio.duration)

video = image.set_audio(audio)
outfile = f"jessica.mp4" 

video.write_videofile(outfile, fps=25)