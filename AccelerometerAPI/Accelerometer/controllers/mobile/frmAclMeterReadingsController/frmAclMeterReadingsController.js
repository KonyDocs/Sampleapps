define({ 

 //Type your controller code here 
  onNavigate:function(params){
    
    this.view.lblX.text=params.lblX;
    this.view.lblY.text=params.lblY;
    this.view.lblZ.text=params.lblZ;
    this.view.lblTimeStmp.text=params.lblT;
    
  }

 });