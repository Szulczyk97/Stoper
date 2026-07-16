window.addEventListener("load",()=>{
	const start = document.getElementById("start");
	const stop = document.getElementById("stop");
	const miedzyczas = document.getElementById("miedzyczas");
	let czas_sek = document.getElementById("sekundy");
	let czas_min = document.getElementById("minuty");
	let czas_god = document.getElementById("godziny");
	let w_decyzyjna = 0;
	let sek = 0;
	let min = 0;
	let god = 0;
	let zatrzymaj;

	start.addEventListener("click",poczatek=()=>{
		if(god == 24){
			stop.disabled = true;
			stop.style.cursor = "default";
			miedzyczas.disabled = true;
			miedzyczas.style.cursor = "default";
			clearTimeout(zatrzymaj);
			alert("Upłynął maksymalny czas, odśwież stronę!");
		}else{
			start.disabled = true;
			start.style.cursor = "default";
			stop.disabled = false;
			stop.style.cursor = "pointer";
			miedzyczas.disabled = false;
			miedzyczas.style.cursor = "pointer";
			sek++;
			
			if(sek<60){
				if(w_decyzyjna != 1){
					w_decyzyjna = 1;
					sek--;
				}
			}else if(sek == 60){
				sek = 0;
				min++;
				if(min == 60){
					sek = 0;
					min = 0;
					god++;
				}
			}
			zatrzymaj = setTimeout(poczatek,1000);
		}

		function dodanie_zera(czas,wybrany_czas){
			if(czas < 10){
				wybrany_czas.textContent = "0"+czas;
			}else{
				wybrany_czas.textContent = czas;
			}
		}

		dodanie_zera(sek,czas_sek);
		dodanie_zera(min,czas_min);
		dodanie_zera(god,czas_god);
	});

	stop.addEventListener("click",()=>{
		clearTimeout(zatrzymaj);
		stop.disabled = true;
		stop.style.cursor = "default";
		miedzyczas.disabled = true;
		miedzyczas.style.cursor = "default";
		alert("Aby ponownie skorzystać, odśwież stronę!");
	});

	miedzyczas.addEventListener("click",()=>{
		let nowy_zapis = document.createElement("li");
		nowy_zapis.setAttribute("class","pole_z_wynikami");
		nowy_zapis.textContent = document.getElementById("wyswietlacz").textContent;
		
		let zapis = document.querySelector("#lista");
		zapis.append(nowy_zapis);
		
		let linia = document.createElement("hr");
		zapis.append(linia);
	});
});