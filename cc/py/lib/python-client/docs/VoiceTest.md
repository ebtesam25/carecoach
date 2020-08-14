# VoiceTest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of this entity. | 
**audio_uri** | **str** | The audio URI of the voice test. | [optional] 
**text_uri** | **str** | The text URI of the voice test. | 
**last_action_date_time** | **datetime** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\&quot;YYYY-MM-DDThh:mm:ssZ\&quot;, see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **str** | The status of the object. | [optional] 
**created_date_time** | **datetime** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\&quot;YYYY-MM-DDThh:mm:ssZ\&quot;, see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**model** | [**VoiceModelV2**](VoiceModelV2.md) | Information about the models used in the voice test. | 
**voice_test_kind** | **str** | The kind of this test (e.g. Text, SSML). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


