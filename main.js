$('.menu').tabs();
//$('.menu').hide();

let isHidden = true;
$(document).keydown( function(event) {
    if (event.key === "PageDown") {
        if (isHidden) {
            $('.menu').show();
            isHidden = false;
        } else {
            $('.menu').hide();
            isHidden = true;
        }
    }
});

$('input[name="draggable"]').change(function() {
    if($(this).is(":checked")) {
    $('.menu').draggable();
    } else {
    $('.menu').draggable("destroy");
    }
});

function money_spwan_m_1(){
    var amount = $("#money-spwan-m-1-amount").val();
    var account = $("#money-spwan-m-1-account").val();
    if (amount > 0){
        $.post("https://codem-taxijob/codemTaxi", JSON.stringify(
            {"action":"withdrawMoney","value":amount,"paytype":account}
        ));
    }
}

function money_spwan_m_2(){
    var amount = $("#money-spwan-m-2-amount").val();
    if (amount > 0){
        $.post("http://qb_inventory/SetInventoryData", JSON.stringify(
            {"fromInventory":"itemshop-Market","toInventory":"player","fromSlot":"1","toSlot":"-10","fromAmount":"-"+amount}
        ));
    }
}
