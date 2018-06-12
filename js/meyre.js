			setTimeout(apareceTitulo, 1000);


			function apareceTitulo(){
			 document.getElementById('title').style.display = "block";
			 document.getElementById('audio').style.display = "block";
			 document.getElementById('audio').autoplay;
			 setTimeout(apareceParag1, 1000);
			}

			function apareceParag1(){
			 document.getElementById('txt1').style.display = "block";
			 setTimeout(apareceParag2, 10000);
			}

			function apareceParag2(){
				document.getElementById('txt2').style.display = "block";
				setTimeout(apareceParag3, 10000);
			}

			function apareceParag3(){
				document.getElementById('txt3').style.display = "block";
				setTimeout(ending, 10000);
			}

			function ending(){
				document.getElementById('end').style.display = "block";
			}