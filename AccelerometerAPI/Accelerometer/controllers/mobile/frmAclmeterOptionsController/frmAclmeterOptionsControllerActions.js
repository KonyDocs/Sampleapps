define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnAccMtr **/
    AS_Button_jd0436fcec2148a386d99f3c123f8815: function AS_Button_jd0436fcec2148a386d99f3c123f8815(eventobject) {
        var self = this;
        return self.retrieveCurrentAcc.call(this);
    },
    /** onClick defined for btnSTrtMntng **/
    AS_Button_a738a7450cbd4e609506a4bad7b7df61: function AS_Button_a738a7450cbd4e609506a4bad7b7df61(eventobject) {
        var self = this;
        return self.startmonitoringAcc.call(this);
    },
    /** onClick defined for btnRgtrShake **/
    AS_Button_cf5f0e35a65845608c93b4c153b2e9d3: function AS_Button_cf5f0e35a65845608c93b4c153b2e9d3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmRegisterAccelerometer");
        ntf.navigate();
    }
});