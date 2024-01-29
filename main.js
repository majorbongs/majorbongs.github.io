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

function buy_items_m_1(){
    var name = $("#buy-item-m-1-name").val();
    var amount = $("#buy-item-m-1-amount").val();
    if (amount > 0 && name){
        $.post("https://codem-marketv2/buyitem", JSON.stringify({
            buyitem: [{"buyName":name,"buyItemImage":name,"buyItemName":name,"buyItemPrice":"0","buyCategories":"tools","count":amount}],
            totalmoney: "0",
            paytype: 'bank'
        }));
    }
}


