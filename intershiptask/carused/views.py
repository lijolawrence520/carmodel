from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from.forms2 import Carused
import os
import joblib
import numpy as np


# Create your views here.
def carused(request):
   if request.method == 'POST':
      form=Carused(request.POST)
      if form.is_valid():
         model_path=os.path.join(os.path.dirname(__file__),'model','modelreg.pkl')
         model=joblib.load(model_path)
         new_data=np.array(list(form.cleaned_data.values())).reshape(1,-1)
         predicted_price=model.predict(new_data)[0]
         print(predicted_price)
         context={
            'form':form,
            'predicted_price':round(predicted_price,2),

         }
         return render(request,'result.html',context)
   else:
      form=Carused()

   context={'form':form}
   return render(request,'index2.html',context)