from django import forms
from django.forms import TextInput, EmailInput


class Carused(forms.Form):

    # Year=forms.IntegerField()
    # Present_Price=forms.FloatField()
    # Kms_Driven=forms.FloatField()
    # FUEL_CHOICES = [
    #     ('Petrol', 'Petrol'),
    #     ('Diesel', 'Diesel'),
    #     ('CNG', 'CNG'),
    # ]
    # Fuel_Type = forms.ChoiceField(choices=FUEL_CHOICES)
    #
    # SELLER_CHOICES = [
    #     ('Dealer', 'Dealer'),
    #     ('Individual', 'Individual'),
    # ]
    # Seller_Type = forms.ChoiceField(choices=SELLER_CHOICES)
    #
    # TRANSMISSION_CHOICES = [
    #     ('Manual', 'Manual'),
    #     ('Automatic', 'Automatic'),
    # ]
    # Transmission = forms.ChoiceField(choices=TRANSMISSION_CHOICES)
    #
    # OWNER_CHOICES = [
    #     ('First', 'First'),
    #     ('Second', 'Second'),
    #     ('Third or More', 'Third or More'),
    # ]
    # Owner = forms.ChoiceField(choices=OWNER_CHOICES)
    # Fuel_Type=forms.FloatField()
    # Seller_Type=forms.FloatField()
    # Transmission=forms.FloatField()
    # Owner=forms.FloatField()
    Year = forms.IntegerField(
        widget=forms.NumberInput(attrs={'class': 'form-control custom-class'})
    )
    Present_Price = forms.FloatField(
        widget=forms.NumberInput(attrs={'class': 'form-control'})
    )
    Kms_Driven = forms.FloatField(
        widget=forms.NumberInput(attrs={'class': 'form-control'})
    )

    FUEL_CHOICES = [('', ''),
        (2, 'Petrol'),
        (1, 'Diesel'),
        (0, 'CNG'),
    ]
    Fuel_Type = forms.ChoiceField(
        choices=FUEL_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=True
    )

    SELLER_CHOICES = [('', ''),
        (0, 'Dealer'),
        (1, 'Individual'),
    ]
    Seller_Type = forms.ChoiceField(
        choices=SELLER_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=True
    )

    TRANSMISSION_CHOICES = [('', ''),
        (1, 'Manual'),
        (0, 'Automatic'),
    ]
    Transmission = forms.ChoiceField(
        choices=TRANSMISSION_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=True
    )

    OWNER_CHOICES = [('', ''),
        (0, 'First'),
        (1, 'Second'),
        (3, 'Third or More'),
    ]
    Owner = forms.ChoiceField(
        choices=OWNER_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=True
    )


