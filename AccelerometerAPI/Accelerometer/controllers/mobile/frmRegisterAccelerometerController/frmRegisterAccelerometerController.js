define({ 

 //Type your controller code here 
  resetShake:function(){
//     if(kony.os.deviceInfo().name != "iPhone")
//  {
 kony.accelerometer.unregisterAccelerationEvents(["shake"]);
 //delete shakeCount;
 this.view.lblShakeCOunt.text = "0";
 
 //}
  },
  shakeCount:0,
  regAccEvent:function()
  {

    this.shakeCount = 0;
    var events = { shake : this.onshake } ;
    kony.accelerometer.registerAccelerationEvents(events);
    this.view.lblRegSccs.text = "Registration is successful,Please shake the device to obtain the shake count.";

  },
  onshake:function()
  {

    this.shakeCount++;
    this.view.lblShakeCOunt.text = this.shakeCount.toString();

  }

 });