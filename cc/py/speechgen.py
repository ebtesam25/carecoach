import azure.cognitiveservices.speech as speechsdk
def getspeech():
    # Replace with your own subscription key and region identifier from here: https://aka.ms/speech/sdkregion
    speech_key, service_region = "ba2278389faf4892a478b05a855065f2", "eastus"
    speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=service_region)

    # Creates an audio configuration that points to an audio file.
    # Replace with your own audio filename.
    audio_filename = "TTSOutput.wav"
    audio_output = speechsdk.audio.AudioOutputConfig(filename=audio_filename)

    # Creates a synthesizer with the given settings
    speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_output)


    ssml_string = open("ssml.xml", "r").read()
    result = speech_synthesizer.speak_ssml_async(ssml_string).get()


    # Checks result.
    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        print("Speech synthesized to [{}] for text [{}]".format(audio_filename, ssml_string))
    elif result.reason == speechsdk.ResultReason.Canceled:
        cancellation_details = result.cancellation_details
        print("Speech synthesis canceled: {}".format(cancellation_details.reason))
        if cancellation_details.reason == speechsdk.CancellationReason.Error:
            if cancellation_details.error_details:
                print("Error details: {}".format(cancellation_details.error_details))
        print("Did you update the subscription info?")