from django.shortcuts import render
from.forms import CarPricePredictions
import os
import joblib
import numpy as np


# Create your views here.
def carprice(request):
   if request.method == 'POST':
      form=CarPricePredictions(request.POST)
      if form.is_valid():
         a=[2,6,7,8,9,10,13,15,16,17,18,19,20,21]
         mean=[0,1,3.1219512195121952,3,4,5,98.64,174.04926829268288,65.90780487804878,53.72487804878049,2555.5658536585365,
                11,12,122.74146341463414,14,3.329756097560975,3.2720975609756096,9.536682926829268,102.3609756097561,
                5111.463414634146,24.882926829268293,30.521951219512196]
         # mean= [0,1,3.1219512195121952,3,4,5,98.75658536585367, 174.04926829268288, 65.90780487804878, 53.72487804878049,
         #  2555.5658536585365,11,12,126.90731707317073,14, 3.329756097560975, 3.255414634146341, 10.142536585365855,
         #  104.1170731707317, 5125.121951219512, 25.21951219512195, 30.75121951219512, 13276.710570731706]

         std=[0,1,0.9949658076502479,3,4,5,5.818905968192532,12.337288526555186,2.1452038526871817,2.4435219699049044,
                520.6802035016389,11,12,32.25779261081621,14,0.2708437054262292,0.2829561911700698,2.8974704522256665,
                35.6863575710744,453.93465548365793,5.9742873247557675,6.503826633602847]
         # std=[0,1,0.9949658076502479, 3,4,5,6.021775685025572, 12.337288526555186, 2.1452038526871817, 2.4435219699049044,
         #      520.6802035016389,11,12, 41.642693438179826,14, 0.2708437054262292, 0.3135970137608045, 3.972040321863297,
         #      39.544166809361165, 476.98564305694646, 6.54214165300162, 6.88644313094182, 7988.85233174315]
         model_path=os.path.join(os.path.dirname(__file__),'model','modelfile.pkl')
         model=joblib.load(model_path)
         new_data=np.array(list(form.cleaned_data.values())).reshape(1,-1)
         for i in a:
            new_data[0][i]=(new_data[0][i]-mean[i])/std[i]
            print(new_data[0][i])
         predicted_price=model.predict(new_data)[0]
         predicted_val=predicted_price*7145.613010341013+12804.564229268291
         context={
            'form':form,
            'predicted_price': round(predicted_price, 2),
            'predicted_val':round(predicted_val,2),
         }
         return render(request,'index2.html',context)
   else:
      form=CarPricePredictions()

   context={'form':form}
   return render(request,'index2.html',context)