class ludo{
	constructor(){
		// set up
		this . dicea = document.querySelector('#dicea');
		this.diceb = document.querySelector('#diceb');
		this.img1 = document.querySelector('#img1');
		this.img2 = document.querySelector('#img2');
		this.result1 = document.querySelector('#result1');
		this.result2 = document.querySelector('#result2');
		this.array = [];
		

	}
	rolldice(e){
		let random = Math.random()* 6 +1;
		let number = Math.floor(random);
		console.log(number);
		let self = this;
		if (number === 1) {
			self.img2.src = 'images/dice1.png';
			self.result2.innerHTML ='1';
			self.array.pop()
			self.array.push(1);
			console.log(self.array);
		}
		else if (number===2) {
			self.img2.src = 'images/dice2.png';
			self.result2.innerHTML ='2';
			self.array.pop()
			self.array.push(2);
			console.log(self.array);
		}
		else if (number===3) {
			self.img2.src = 'images/dice3.png';
			self.result2.innerHTML ='3';
			self.array.pop()
			self.array.push(3);
			console.log(self.array);
		}
		else if (number===4) {
			self.img2.src = 'images/dice4.png';
			self.result2.innerHTML ='4';
			self.array.pop()
			self.array.push(4);
			console.log(self.array);
		}
		else if (number===5) {
			self.img2.src = 'images/dice5.png';
			self.result2.innerHTML ='5';
			self.array.pop()
			self.array.push(5);
			console.log(self.array);
		}
		else if (number===6) {
			self.img2.src = 'images/dice6.png';
			self.result2.innerHTML ='6';
			self.array.pop()
			self.array.push(6);
			console.log(self.array);
		}
		
		
		
	}
	rolldice2(e){
		let random = Math.random()* 6 + 1;
		let number = Math.floor(random);
		console.log(number);
		let self = this;
		if (number === 1) {
			self.img1.src = 'images/dice1.png';
			self.result1.innerHTML ='1';
		}
		else if (number===2) {
			self.img1.src = 'images/dice2.png';
			self.result1.innerHTML ='2';
		}
		else if (number===3) {
			self.img1.src = 'images/dice3.png';
			self.result1.innerHTML ='3';
		}
		else if (number===4) {
			self.img1.src = 'images/dice4.png';
			self.result1.innerHTML ='4';
		}
		else if (number===5) {
			self.img1.src = 'images/dice5.png';
			self.result1.innerHTML ='5';
		}
		else if (number===6) {
			self.img1.src = 'images/dice6.png';
			self.result1.innerHTML ='6';
		}
		
	}
	tellWiner(){

	}
	changeplayer(){

	}
	moverSeed(e){
		let seed1 = document.querySelector('.yellow-seed1');
		 let y = this.array[0];
		 let count = "";
		console.log('click seen');
		console.log(y);
		 seed1.style.bottom = y * 29.5 +'px';
		  
		 console.log(count+ 'hellloword');
		e.target.appendChild(seed1);
		seed1.style.width= '80%';
		seed1.style.height = '80%';
		let currPosition=[];
		currPosition.push(parseInt(seed1.style.bottom));
		console.log(currPosition);
		
	}
}

let ludoGame = new ludo;
// EventListeners
yellowColoum = document.querySelector('.hi');
greenColoum = document.querySelector('.hi1');

redColoum = document.querySelector('.hi2');

blueColoum = document.querySelector('.hi3');
redaColoum = document.querySelector('.hi4');

redbColoum = document.querySelector('.hi5');



diceb.addEventListener('click', function (e) {
	ludoGame.rolldice();
	
})
dicea.addEventListener('click', function (e) {
	ludoGame.rolldice2();
})
yellowColoum.addEventListener('click',function(e) {
		 ludoGame.moverSeed(e);

	
})
redaColoum.addEventListener('click',function(e) {
		 ludoGame.moverSeed(e);

	
});
redbColoum.addEventListener('click',function(e) {
		 ludoGame.moverSeed(e);

	
});
redColoum.addEventListener('click',function(e) {
		 ludoGame.moverSeed(e);

	
});
greenColoum.addEventListener('click',function(e) {
		 ludoGame.moverSeed(e);

	
});
blueColoum.addEventListener('click',function(e) {
		 ludoGame.moverSeed(e);

	
});












