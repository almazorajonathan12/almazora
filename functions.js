	$(document).ready(function(){

		// crust
		var crust = "Thin";
		$("input[type='radio']").on('change',function(){
			crust = $("input[name='crust']:checked").val();
		})
		// end crust

		// toppings and prices array
		var add_ons = [];
		var toppings = {'Sausage': 5.50, 'Pepperoni': 6.50, "Mushroom": 2.50, "Cheese": 3.50, "Pineapple": 2.50, "Olives": 1.50, "Onions": 1.50}


		//crust function
		function selected_crust(crust) {
			// crust prices array
			var data = {'Thin': 13.50, 'Classic': 17.50, "Deep Dish": 20.50}

			$('#crust_name').html(crust);
			$('#crust_price').html(data[crust]);
			return data[crust];
		}

		// toppings functions
		function selected_toppings() {
			var html = "";
			var total = 0;
			for(var x = 0; x < add_ons.length; x++ ){
				html += '<p class="w3-text-grey"> '+ add_ons[x] +' (toppings) <span class="w3-right w3-tag w3-dark-grey w3-round">'+ toppings[add_ons[x]] +'</span> </p>';
				total += toppings[add_ons[x]];
			}

			$('#show_add_ons').html(html);
			return total;
		}

		function total_amount(crust, toppings) {
			$('#total_amount').html(crust+=toppings);
		}


		$('#customer_order').click(function(){
			// alert(crust);
			var full_name = $('#full_name').val();
			var address = $('#address').val();
			var mobile_number = $('#mobile_number').val();

			// customer information details
			if(full_name != ""){$('#customer_full_name').html(full_name);}else{$('#customer_full_name').html("Please write your name. . .");}
			if(address != ""){$('#customer_address').html(address);}else{$('#customer_address').html("Please write your address. . .");}
			if(mobile_number != ""){$('#customer_mobile_number').html(mobile_number);}else{$('#customer_mobile_number').html("Please write your mobile number. . .");}
			// end customer information details

			// date 
			var date = new Date().toLocaleDateString()
			// end date

            $.each($("input[name='toppings']:checked"), function(){
                add_ons.push($(this).val());
            });
            // alert("My favourite sports are: " + add_ons.join(", "));	

            // crust function
            // for showing selected crust and price
            var x = selected_crust(crust);
            var y = selected_toppings();
            total_amount(x, y);


            // alert(add_ons.length)

		})

	})