let twox=document.getElementsByClassName("twoxtwo");
let thrx=document.getElementsByClassName("thrxthr");
let fourx=document.getElementsByClassName("fourxfour");
let btnbGrds=document.getElementsByClassName("gridShow");
let two_two=document.getElementsByClassName("slot2"); 
let thr_thr=document.getElementsByClassName("slot3");
let four=document.getElementsByClassName("slot4");
let calcular=document.getElementById("btn");
let Result=document.getElementById("result");
let listWarn=[]
let warn=document.getElementById("warn");
let eraser=document.getElementById("erase")

console.log(localStorage.getItem(""))
//localStorage
	if(typeof(Storage)!=="undefined"){
		//Storage do Resultado
		if(localStorage.getItem("Result") !== null){
			Result.innerText=localStorage.Result
		}
		//Storage do 2x2
		if(localStorage.getItem("twolist") !== null){
			let twoNums = JSON.parse(localStorage.getItem("twolist"))
			for(let count=0; count<twoNums.length; count++){
			two_two[count].value=twoNums[count]
		}
		}
		//Storage do 3x3	
		if(localStorage.getItem("thrList") !== null){ 
			let thrNums = JSON.parse(localStorage.getItem("thrList"))
			for(let countThr=0; countThr<thrNums.length; countThr++){
			thr_thr[countThr].value=thrNums[countThr]
		}
		}
		//Storage do 4x4
		if(localStorage.getItem("fourList") !== null){
			let fourNums=JSON.parse(localStorage.getItem("fourList"))
			for(let countF=0; countF<fourNums.length; countF++){
			four[countF].value = fourNums[countF]
		}
	}}

//Função pra mostrar os grids de calculos
function Showgrid(event){
	if(event.target.id === btnbGrds[0].id){
		twox[0].style.display='grid'
		thrx[0].style.display='none'
		fourx[0].style.display='none'
	}
	else if(event.target.id === btnbGrds[1].id){
		twox[0].style.display='none'
		thrx[0].style.display='grid'
		fourx[0].style.display='none'
	}
	else if(event.target.id === btnbGrds[2].id){
		twox[0].style.display='none'
		thrx[0].style.display='none'
		fourx[0].style.display='grid'
	}
}

//Escutas das funções para mostrar os grids
btnbGrds[0].addEventListener("click", Showgrid)
btnbGrds[1].addEventListener("click", Showgrid)
btnbGrds[2].addEventListener("click", Showgrid)

//Escuta para calcular os determinantes
calcular.addEventListener("click", () =>{
	Result.innerText=""
	warn.innerText=""
	//Cálculo 2x2
	if(twox[0].style.display === "grid"){

		for(let twof=0; twof<two_two.length; twof=twof+1){
			if(two_two[twof].value == ""){
			listWarn.push(two_two[twof].placeholder)
			}
		}
		if(listWarn.length > 0){
			warn.innerText=`Prenncha os seguintes espaços em branco ${listWarn} `
			listWarn=[]
			return ""	
		}

	const AD = parseFloat(two_two[0].value)*parseFloat(two_two[3].value) 	
	const BC = parseFloat(two_two[1].value)*parseFloat(two_two[2].value)
	Result.innerText=(AD-BC)
	localStorage.setItem("Result", Result.innerText)

	//Cria o item no localStorage caso n exista e transforma o arquivo em formato JSON para que o array assuma a função de Array e nãode string.
		
	if(localStorage.getItem("twolist") === null || localStorage.getItem("twolist") !== '[]'){
		localStorage.setItem("twolist", '[]') 
	}
	let twolistP = JSON.parse(localStorage.getItem("twolist"))
	//Bota todos os elementos da NodeList dentro do Array e converte denovo para o formato string de para o localStorage
	for(let o =0; o<two_two.length; o++){
		twolistP.push(two_two[o].value)	
		console.log(twolistP)
		}	
	localStorage.setItem("twolist", JSON.stringify(twolistP))
	}

	//Cálculo 3x3
	else if (thrx[0].style.display === "grid"){
	for(let thrf=0; thrf<thr_thr.length; thrf++){
			if(thr_thr[thrf].value == ""){
			listWarn.push(thr_thr[thrf].placeholder)
			}
		}
		if(listWarn.length > 0){
			warn.innerText=`Prenncha os seguintes espaços em branco ${listWarn} `
			listWarn=[]
		return ""
		}
	const count1 = parseFloat(thr_thr[0].value)*parseFloat(thr_thr[4].value)*parseFloat(thr_thr[8].value)
	const count2 = parseFloat(thr_thr[1].value)*parseFloat(thr_thr[5].value)*parseFloat(thr_thr[6].value)
	const count3 = parseFloat(thr_thr[2].value)*parseFloat(thr_thr[3].value)*parseFloat(thr_thr[7].value)
	const count4 = parseFloat(thr_thr[6].value)*parseFloat(thr_thr[4].value)*parseFloat(thr_thr[2].value)
	const count5 = parseFloat(thr_thr[7].value)*parseFloat(thr_thr[5].value)*parseFloat(thr_thr[0].value)
	const count6 = parseFloat(thr_thr[8].value)*parseFloat(thr_thr[3].value)*parseFloat(thr_thr[1].value)
	Result.innerText=(count1+count2+count3)-(count4+count5+count6)
	localStorage.setItem("Result", Result.innerText)

		if(localStorage.getItem("thrList") === null || localStorage.getItem("thrList") !=='[]'){
		 localStorage.setItem("thrList", '[]')
		}	

		let thrList = JSON.parse(localStorage.getItem("thrList"))
			for(let x=0; x<thr_thr.length; x++ ){
				thrList.push(thr_thr[x].value)
		}
			localStorage.setItem("thrList",JSON.stringify(thrList) )

	}
	//Cálculo 4x4
	else if (fourx[0].style.display === "grid"){
	for(let fourf=0; fourf<four.length; fourf++){
		if(four[fourf].value == ""){
			listWarn.push(four[fourf].placeholder)
			}
		}
		if(listWarn.length > 0){
			warn.innerText=`Prenncha os seguintes espaços em branco ${listWarn} `
			listWarn=[]
		return ""
		}
	const Fcount1 = parseFloat(four[5].value)*parseFloat(four[10].value)*parseFloat(four[15].value)
	const Fcount2 = parseFloat(four[6].value)*parseFloat(four[11].value)*parseFloat(four[13].value)
	const Fcount3 = parseFloat(four[7].value)*parseFloat(four[9].value)*parseFloat(four[14].value)
	const Fcount4 = parseFloat(four[13].value)*parseFloat(four[10].value)*parseFloat(four[7].value)
	const Fcount5 = parseFloat(four[14].value)*parseFloat(four[11].value)*parseFloat(four[5].value)
	const Fcount6 = parseFloat(four[15].value)*parseFloat(four[9].value)*parseFloat(four[6].value)
	const Deta =(Fcount1+Fcount2+Fcount3)-(Fcount4+Fcount5+Fcount6)

	const Fcount7 = parseFloat(four[4].value)*parseFloat(four[10].value)*parseFloat(four[15].value)
	const Fcount8 = parseFloat(four[6].value)*parseFloat(four[11].value)*parseFloat(four[12].value)
	const Fcount9 = parseFloat(four[7].value)*parseFloat(four[8].value)*parseFloat(four[14].value)
	const Fcount10 = parseFloat(four[12].value)*parseFloat(four[10].value)*parseFloat(four[7].value)
	const Fcount11 = parseFloat(four[14].value)*parseFloat(four[11].value)*parseFloat(four[4].value)
	const Fcount12 = parseFloat(four[15].value)*parseFloat(four[8].value)*parseFloat(four[6].value)
	const Detb = (Fcount7+Fcount8+Fcount9)-(Fcount10+Fcount11+Fcount12)

	const Fcount13 = parseFloat(four[4].value)*parseFloat(four[9].value)*parseFloat(four[15].value)
	const Fcount14 = parseFloat(four[5].value)*parseFloat(four[11].value)*parseFloat(four[12].value)
	const Fcount15 = parseFloat(four[7].value)*parseFloat(four[8].value)*parseFloat(four[13].value)
	const Fcount16 = parseFloat(four[12].value)*parseFloat(four[9].value)*parseFloat(four[7].value)
	const Fcount17 = parseFloat(four[13].value)*parseFloat(four[11].value)*parseFloat(four[4].value)
	const Fcount18 = parseFloat(four[15].value)*parseFloat(four[8].value)*parseFloat(four[5].value)
	const Detc = (Fcount13+Fcount14+Fcount15)-(Fcount16+Fcount17+Fcount18)

	const Fcount19 = parseFloat(four[4].value)*parseFloat(four[9].value)*parseFloat(four[14].value)
	const Fcount20 = parseFloat(four[5].value)*parseFloat(four[10].value)*parseFloat(four[12].value)
	const Fcount21 = parseFloat(four[6].value)*parseFloat(four[8].value)*parseFloat(four[13].value)
	const Fcount22 = parseFloat(four[12].value)*parseFloat(four[9].value)*parseFloat(four[6].value)
	const Fcount23 = parseFloat(four[13].value)*parseFloat(four[10].value)*parseFloat(four[4].value)
	const Fcount24 = parseFloat(four[14].value)*parseFloat(four[8].value)*parseFloat(four[5].value)
	const Detd = (Fcount19+Fcount20+Fcount21)-(Fcount22+Fcount23+Fcount24)
	const Det = (four[0].value*1)*Deta + (four[1].value*1)*Detb +  (four[2].value*1)*Detc + (four[3].value*1)*Detd
	Result.innerText=Det
	localStorage.setItem("Result", Result.innerText)

		if(localStorage.getItem("fourList") === null || localStorage.getItem("fourList") !== '[]'){
			localStorage.setItem("fourList", '[]')
		}	
		let fourArray =JSON.parse(localStorage.getItem("fourList")) 
		for(let f = 0; f<four.length; f++){
			fourArray.push(four[f].value)
		}
		localStorage.setItem("fourList", JSON.stringify(fourArray))
	}
 }
)

eraser.addEventListener("click", () =>{
	if(twox[0].style.display === "grid"){
			for(let twoi = 0;twoi<two_two.length;twoi++){
			two_two[twoi].value="";
		}
	}
	else if(thrx[0].style.display === "grid"){
			for(let thri = 0;thri<thr_thr.length;thri++){
			thr_thr[thri].value=""
		}	
	}
	else if(fourx[0].style.display === "grid"){
			for(let fouri = 0;fouri<four.length;fouri++){
			four[fouri].value=""
		}	
	}
	Result.innerText=""

})


