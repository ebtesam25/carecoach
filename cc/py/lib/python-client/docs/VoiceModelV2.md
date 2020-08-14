# VoiceModelV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of this entity. | 
**name** | **str** | The name of the object. | 
**description** | **str** | The description of the object. | [optional] 
**text** | **str** | The text used to adapt this language model. | [optional] 
**base_model** | [**VoiceModelV2**](VoiceModelV2.md) | The base model used for adaptation. | [optional] 
**datasets** | [**list[VoiceDataset]**](VoiceDataset.md) | Datasets used for adaptation. | [optional] 
**locale** | **str** | The locale of the contained data. | 
**last_action_date_time** | **datetime** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\&quot;YYYY-MM-DDThh:mm:ssZ\&quot;, see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **str** | The status of the object. | [optional] 
**created_date_time** | **datetime** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\&quot;YYYY-MM-DDThh:mm:ssZ\&quot;, see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


