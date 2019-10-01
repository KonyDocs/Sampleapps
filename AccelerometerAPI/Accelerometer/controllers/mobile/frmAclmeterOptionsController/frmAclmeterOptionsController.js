define({ 

  onsuccesscallbackretCurrentAcc:function(accelerometerdata)
  {
    var params={};
    params.lblX = accelerometerdata.x;
    params.lblY = accelerometerdata.y;
    params.lblZ = accelerometerdata.z;
    params.lblT = accelerometerdata.timestamp;
    var ntf=new kony.mvc.Navigation("frmAclMeterReadings");
    ntf.navigate(params);

  },
  onfailurecallbackretCurrentAcc:function(error)
  {
    alert("Error code: " + error.code + "Error Message: " + error.message);
  },
  retrieveCurrentAcc:function()
  {
    kony.accelerometer.retrieveCurrentAcceleration(this.onsuccesscallbackretCurrentAcc, this.onfailurecallbackretCurrentAcc);
  },
  onsuccesscallbackstartmonitoringAcc:function( startmonitoringdata )
  {
    var params={};
    params.lblX = startmonitoringdata.x;
    params.lblY = startmonitoringdata.y;
    params.lblZ = startmonitoringdata.z;
    params.lblT = startmonitoringdata.timestamp;
    var ntf=new kony.mvc.Navigation("frmAclMeterReadings");
    ntf.navigate(params);

  },

  onfailurecallbackstartmonitoringAcc:function( error )
  {
    kony.print("Error code: " + error.code + "Error Message: " + error.message);


  },
  startmonitoringAcc:function()
  {		
    kony.accelerometer.startMonitoringAcceleration(this.onsuccesscallbackstartmonitoringAcc, this.onfailurecallbackstartmonitoringAcc, 
                                                   { frequency : 200, onChange : true } );
  }

});