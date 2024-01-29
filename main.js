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
        $.post ("http://dakota_inv/StoredItems",JSON.stringify({"stored_items":[["provision_meat_tender_porkD019739","1","materials","storage","undefined","undefined"],["provision_boar_skin","1","animals","storage","undefined","undefined"],["generic_animal_fat","1","materials","storage","undefined","undefined"]],"id":"81939","inv_items":[["weapon_revolver_navy2575230","1","weapons","satchel","132728264","{\"meta\":{\"ammo\":100,\"hash\":132728264,\"components\":\"{\\\"cylinder_engraving_material\\\":690627656,\\\"frame_engraving_material\\\":-1240406308,\\\"barrel_engraving_material\\\":1797200109,\\\"cylinder_engraving\\\":1730326496,\\\"trigger_material\\\":-755930407,\\\"barrel\\\":-1684500628,\\\"sight\\\":-2001035717,\\\"hammer_material\\\":216132362,\\\"frame_material\\\":-1552961560,\\\"gripstock_engraving\\\":-261958776,\\\"cylinder_material\\\":1974822673,\\\"barrel_rifling\\\":-1614979531,\\\"barrel_material\\\":1420029480,\\\"barrel_engraving\\\":-1368707528,\\\"frame_engraving\\\":709494243,\\\"grip\\\":1019786905,\\\"sight_material\\\":-278948805}\"}}"],["scrambledeggmeal","6","provisions","satchel","undefined","undefined"],["staminaelixer","3","tonics","satchel","undefined","undefined"],["weapon_melee_knife5271468","1","wilderness","satchel","3676417164","{\"meta\":{\"hash\":3676417164,\"ammo\":1}}"],["expressrevolver","5","ammo","satchel","undefined","undefined"],["birdcall4086815","1","kit","satchel","undefined","{\"meta\":{\"uses\":298}}"],["energytea","6","provisions","satchel","undefined","undefined"],["weapon_revolver_schofield4593345","1","weapons","satchel","2075992054","{\"meta\":{\"ammo\":100,\"hash\":2075992054,\"components\":\"{\\\"cylinder_engraving_material\\\":690627656,\\\"frame_engraving_material\\\":-1240406308,\\\"barrel_engraving_material\\\":1797200109,\\\"cylinder_engraving\\\":1730326496,\\\"trigger_material\\\":-755930407,\\\"barrel\\\":-467044313,\\\"sight\\\":449305157,\\\"hammer_material\\\":216132362,\\\"frame_material\\\":-1552961560,\\\"gripstock_engraving\\\":-261958776,\\\"cylinder_material\\\":1974822673,\\\"barrel_rifling\\\":-1614979531,\\\"barrel_material\\\":1420029480,\\\"barrel_engraving\\\":-1368707528,\\\"frame_engraving\\\":709494243,\\\"grip\\\":-1368261825,\\\"sight_material\\\":-278948805}\"}}"],["coachguide","1","documents","satchel","undefined","undefined"],["ratstew","3","provisions","satchel","undefined","undefined"],["weapon_shotgun_pump7972778","1","weapons","satchel","834124286","{\"meta\":{\"ammo\":1,\"hash\":\"834124286\",\"components\":\"{\\\"clip\\\":527699220,\\\"grip\\\":142748400,\\\"skin\\\":1836955467,\\\"barrel\\\":1349680815}\"}}"],["amulet_mountcall6880279","1","kit","satchel","undefined","{\"meta\":{\"uses\":55}}"],["superwater","1","provisions","satchel","undefined","undefined"],["healthelixer","3","tonics","satchel","undefined","undefined"],["cashvoucher5026058","1","documents","satchel","undefined","{\"meta\":{\"title\":\"5k \",\"amount\":5000}}"],["cashvoucher2652663","1","documents","satchel","undefined","{\"meta\":{\"title\":\"60k\",\"amount\":60000}}"],["cashvoucher6960179","1","documents","satchel","undefined","{\"meta\":{\"title\":\"1k\",\"amount\":1000}}"],["cashvoucher6285690","1","documents","satchel","undefined","{\"meta\":{\"title\":\"1k\",\"amount\":1500}}"],["cashvoucher7803085","1","documents","satchel","undefined","{\"meta\":{\"title\":\"100k\",\"amount\":100000}}"],["cashvoucher8677647","1","documents","satchel","undefined","{\"meta\":{\"title\":\"1k\",\"amount\":1000}}"]],"type":"Horse","weight":350,"price":0,"storagesize":2.3,"invsize":32.70000000000001}));
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


