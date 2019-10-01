define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_aebf3a2623f74da7bef7ca489019a3dc: function AS_Button_aebf3a2623f74da7bef7ca489019a3dc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
        ntf.navigate();
    },
    /** preShow defined for frmRegisterAccelerometer **/
    AS_Form_jdaa0d1fe67c48a69cecc3153084c2cb: function AS_Form_jdaa0d1fe67c48a69cecc3153084c2cb(eventobject) {
        var self = this;
        return self.regAccEvent.call(this);
    },
    /** onHide defined for frmRegisterAccelerometer **/
    AS_Form_df90fa5b01e84dc1bb6b678e66d3abd9: function AS_Form_df90fa5b01e84dc1bb6b678e66d3abd9(eventobject) {
        var self = this;
        return self.resetShake.call(this);
    }
});