var x = [0,0,0,0,0,0,0,0,0];
var jogada = Math.floor(Math.random() * 1);
var i;

var jogada_usuario_1, jogada_usuario_2;
var pontos_atual_x = 0, pontos_atual_o = 0;


	function start(){
		var jogada = Math.floor(Math.random() * 1);
		for(i=1; i<=9; i++){
			document.getElementById('casa' + i). src= "imagens/branco.jpg";
		}
		for(i= 0; i< 9; i++){
			x[i] = 0;
		}
	}


	function casa_1(){
		
		if(jogada == 0){

		if(x[0] == 0){
			document.getElementById('casa1').src = "imagens/x.jpg";
			x[0] = 1;
			jogada = 1;
		}
	}

		if(jogada == 1){

			if(x[0] == 0){
				document.getElementById('casa1').src = "imagens/o.jpg";
				x[0] = 2;
				jogada = 0;
			}
		}

		check();
		
	}

	function casa_2(){

		if(jogada == 0){
			if(x[1] == 0){
				document.getElementById('casa2').src = "imagens/x.jpg";
				x[1] = 1;
				jogada = 1;
			}else{
				alert("Esta casa ja foi escolhida...Tente outra");
			}
		}

		if(jogada == 1){
			if(x[1] == 0){
				document.getElementById('casa2').src = "imagens/o.jpg";
				x[1] = 2;
				jogada = 0;
			}
		}	

		check();
	}

	function casa_3(){
		
		if(jogada == 0){
			if(x[2] == 0){
				document.getElementById('casa3').src = "imagens/x.jpg";
				x[2] = 1;
				jogada = 1;
			}else{
				alert("Esta casa ja foi escolhida...Tente outra");
			}
		}
		
			if(jogada == 1){
				if(x[2] == 0){
					document.getElementById('casa3').src = "imagens/o.jpg";
					x[2] = 2;
					jogada = 0;
				}
			}

		}

	function casa_4(){
		if(jogada == 0){
			if(x[3] == 0){
				document.getElementById('casa4').src = "imagens/x.jpg";
				x[3] = 1;
				jogada = 1;
			}
		}

		if(jogada == 1){
			if(x[3] == 0){
				document.getElementById('casa4').src = "imagens/o.jpg";
				x[3] = 2;
				jogada = 0;
			}
		}

		check();

	}

	function casa_5(){
		if(jogada == 0){
		
			if(x[4] == 0){
				document.getElementById('casa5').src = "imagens/x.jpg";
				x[4] = 1;
				jogada = 1;
			}
		}

		if(jogada == 1){

			if(x[4] == 0){
				document.getElementById('casa5').src = "imagens/o.jpg";
				x[4] = 2;
				jogada = 0;
			}
		}

		check();

	}

	function casa_6(){
		if(jogada == 0){
			if(x[5] == 0){
				document.getElementById('casa6').src = "imagens/x.jpg";
				x[5] = 1;
				jogada = 1;
			}
		}

		if(jogada == 1){
			if(x[5] == 0){
				document.getElementById('casa6').src = "imagens/o.jpg";
				x[5] = 2;
				jogada = 0;
			}
		}

		check();
	}

	function casa_7(){
		if(jogada == 0){
			if(x[6] == 0){
				document.getElementById('casa7').src = "imagens/x.jpg";
				x[6] = 1;
				jogada = 1;
			}
		}


		if(jogada == 1){
			if(x[6] == 0){
				document.getElementById('casa7').src = "imagens/o.jpg";
				x[6] = 2;
				jogada = 0;
			}
		}

		check();

	}

	function casa_8(){
		if(jogada == 0){
			if(x[7] == 0){
				document.getElementById('casa8').src = "imagens/x.jpg";
				x[7] = 1;
				jogada = 1;
			}
		}



		if(jogada == 1){
			if(x[7] == 0){
				document.getElementById('casa8').src = "imagens/o.jpg";
				x[7] = 2;
				jogada = 0;
			}
		}

		check();

	}

	function casa_9(){
		if(jogada == 0){
			if(x[8] == 0){
				document.getElementById('casa9').src = "imagens/x.jpg";
				x[8] = 1;
				jogada = 1;
			}
		}



		if(jogada == 1){
			if(x[8] == 0){
				document.getElementById('casa9').src = "imagens/o.jpg";
				x[8] = 2;
				jogada = 0;
			}
		}
		check();
	}

		 function check() {
			 if(x[0] == 1 && x[1] == 1 && x[2] == 1 ||
				x[3] == 1 && x[4] == 1 && x[5] == 1 ||
				x[6] == 1 && x[7] == 1 && x[8] == 1 ||
				x[0] == 1 && x[3] == 1 && x[6] == 1 ||
				x[1] == 1 && x[4] == 1 && x[7] == 1 ||
				x[2] == 1 && x[5] == 1 && x[8] == 1 ||
				x[0] == 1 && x[4] == 1 && x[8] == 1 ||
				x[2] == 1 && x[4] == 1 && x[6] == 1){
		 
				 pontos_atual_x = pontos_atual_x + 1;
				 alert("X ganhou");

				 start();
			 }  else if(x[0] == 2 && x[1] == 2 && x[2] == 2 ||
						x[3] == 2 && x[4] == 2 && x[5] == 2 ||
						x[6] == 2 && x[7] == 2 && x[8] == 2 ||
						x[0] == 2 && x[3] == 2 && x[6] == 2 ||
						x[1] == 2 && x[4] == 2 && x[7] == 2 ||
						x[2] == 2 && x[5] == 2 && x[8] == 2 ||
						x[0] == 2 && x[4] == 2 && x[8] == 2 ||
						x[2] == 2 && x[4] == 2 && x[6] == 2){
				 
						 pontos_atual_o = pontos_atual_o + 1;
						 alert("O ganhou");
						 start();
					 }
	document.getElementById('pontos_x').innerHTML= pontos_atual_x;
	document.getElementById('pontos_o').innerHTML= pontos_atual_o;
		}

