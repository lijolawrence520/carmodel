from django import forms

class CarPricePredictions(forms.Form):
    FuelType=forms.IntegerField()
    Aspiration=forms.IntegerField()
    DoorNumber=forms.FloatField()
    CarBody=forms.IntegerField()
    DriveWheel=forms.IntegerField()
    EngineLocation=forms.IntegerField()
    WheelBase=forms.FloatField()
    CarLength=forms.FloatField()
    CarWidth=forms.FloatField()
    CarHeight=forms.FloatField()
    CurbWeight=forms.FloatField()
    EngineType=forms.IntegerField()
    CylinderNumber=forms.FloatField()
    EngineSize=forms.FloatField()
    FuelSystem=forms.FloatField()
    BoreRatio=forms.FloatField()
    Stroke=forms.FloatField()
    CompressionRatio=forms.FloatField()
    HorsePower=forms.FloatField()
    PeakRpm=forms.FloatField()
    CityMpg=forms.FloatField()
    HighwayMpg=forms.FloatField()


