$(document).ready(function(){

    $('#byAmpsVolts').attr('style', 'display:none');

    $('*#product').on('input', function(){
        $('#feedb').text('');
    })

    $('#calByAmpsVolts').on('click', function(){
        if($('#calByAmpsVolts').val() == "Calculate Using Watts"){
            $('#form').removeAttr('style');
            $('#byAmpsVolts').attr('style', 'display:none');
            $('#calByAmpsVolts').val('Calulate By Apms and Volts');
        }else{
            $('#byAmpsVolts').removeAttr('style');
            $('#form').attr('style', 'display:none');
            $('#calByAmpsVolts').val('Calculate Using Watts');
        }
    })


    $('#sub').on('click', function(){
        if($('#product').val()==""){
            $('#feedb').text('Please Fill The Input Fields Required');
        }
        return false;
    })
    
    $('#ampsub').on('click', function(){
        let amp = $('#ampsproduct').val();
        let vol = $('#voltsproduct').val();
        let watts = amp * vol;
        
        $('#feedb').text('Total Watts Used Is ' + watts + ' Watts');
        return false;
    })
    
    
    
})