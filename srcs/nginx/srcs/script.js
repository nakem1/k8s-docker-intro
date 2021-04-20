// Мировые константы

var pi = 3.141592;
var deg = pi/180;

// Конструктор player

function player(x,y,z,rx,ry) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.rx = rx;
	this.ry = ry;
}

// Массив прямоугольников

var map = [
		   [0,0,1000,0,180,0,2000,200,"#F0C0FF"],
		   [0,0,-1000,0,0,0,2000,200,"#F0C0FF"],
		   [1000,0,0,0,-90,0,2000,200,"#F0C0FF"],
		   [-1000,0,0,0,90,0,2000,200,"#F0C0FF"],
		   [0,100,0,90,0,0,2000,2000,"#666666"]
];

// Нажата ли клавиша и двигается ли мышь?

var PressBack = 0;
var PressForward = 0;
var PressLeft = 0;
var PressRight = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;

// Введен ли захват мыши?

var lock = false;

// На земле ли игрок?

var onGround = true;

// Привяжем новую переменную к container

var container = document.getElementById("container");

// Обработчик изменения состояния захвата курсора

document.addEventListener("pointerlockchange", (event)=>{
	lock = !lock;
});

// Обработчик захвата курсора мыши

container.onclick = function(){
	if (!lock) container.requestPointerLock();
};

// Обработчик нажатия клавиш

document.addEventListener("keydown", (event) =>{
	if (event.key == "a"){
		PressLeft = 1;
	}
	if (event.key == "w"){
		PressForward = 1;
	}
	if (event.key == "d"){
		PressRight = 1;
	}
	if (event.key == "s"){
		PressBack = 1;
	}
	if (event.keyCode == 32 && onGround){
		PressUp = 1;
	}
});

// Обработчик отжатия клавиш

document.addEventListener("keyup", (event) =>{
	if (event.key == "a"){
		PressLeft = 0;
	}
	if (event.key == "w"){
		PressForward = 0;
	}
	if (event.key == "d"){
		PressRight = 0;
	}
	if (event.key == "s"){
		PressBack = 0;
	}
	if (event.keyCode == 32){
		PressUp = 0;
	}
});

// Обработчик движения мыши

document.addEventListener("mousemove", (event)=>{
	MouseX = event.movementX;
	MouseY = event.movementY;
});

// Создаем новый объект

var pawn = new player(-900,0,-900,0,0);

// Привяжем новую переменную к world

var world = document.getElementById("world");

function update(){
	
	// Задаем локальные переменные смещения
	
	dx =   (PressRight - PressLeft)*Math.cos(pawn.ry*deg) - (PressForward - PressBack)*Math.sin(pawn.ry*deg);
	dz = - (PressForward - PressBack)*Math.cos(pawn.ry*deg) - (PressRight - PressLeft)*Math.sin(pawn.ry*deg);
	dy = - PressUp;
	drx = MouseY;
	dry = - MouseX;
	
	// Обнулим смещения мыши:
	
	MouseX = MouseY = 0;
	
	// Проверяем коллизию с прямоугольниками
	
	collision();
	
	// Прибавляем смещения к координатам
	
	pawn.x = pawn.x + dx;
	pawn.y = pawn.y + dy;
	pawn.z = pawn.z + dz;
	console.log(pawn.x + ":" + pawn.y + ":" + pawn.z);
	
	// Если курсор захвачен, разрешаем вращение
	
	if (lock){
		pawn.rx = pawn.rx + drx;
		pawn.ry = pawn.ry + dry;
	};

	// Изменяем координаты мира (для отображения)
	
	world.style.transform = 
	"translateZ(" + (600 - 0) + "px)" +
	"rotateX(" + (-pawn.rx) + "deg)" +
	"rotateY(" + (-pawn.ry) + "deg)" +
	"translate3d(" + (-pawn.x) + "px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
	
};

function CreateNewWorld(){
	for (let i = 0; i < map.length; i++){
		
		// Создание прямоугольника и придание ему стилей
		
		let newElement = document.createElement("div");
		newElement.className = "square";
		newElement.id = "square" + i;
		newElement.style.width = map[i][6] + "px";
		newElement.style.height = map[i][7] + "px";
		newElement.style.background = map[i][8];
		newElement.style.transform = "translate3d(" +
		(600 - map[i][6]/2 + map[i][0]) + "px," +
		(400 - map[i][7]/2 + map[i][1]) + "px," +
		(map[i][2]) + "px)" +
		"rotateX(" + map[i][3] + "deg)" +
		"rotateY(" + map[i][4] + "deg)" +
		"rotateZ(" + map[i][5] + "deg)";
		
		// Вставка прямоугольника в world
		
		world.append(newElement);
	}
}

function collision(){
	for(let i = 0; i < map.length; i++){
		
		// рассчитываем координаты игрока в системе координат прямоугольника
		
		let x0 = (pawn.x - map[i][0]);
		let y0 = (pawn.y - map[i][1]);
		let z0 = (pawn.z - map[i][2]);
		
		if ((x0**2 + y0**2 + z0**2 + dx**2 + dy**2 + dz**2) < (map[i][6]**2 + map[i][7]**2)){
		
			let x1 = x0 + dx;
			let y1 = y0 + dy;
			let z1 = z0 + dz;
		
			let point0 = coorTransform(x0,y0,z0,map[i][3],map[i][4],map[i][5]);
			let point1 = coorTransform(x1,y1,z1,map[i][3],map[i][4],map[i][5]);
			let point2 = new Array();
		
			// Условие коллизии и действия при нем
		
			if (Math.abs(point1[0])<(map[i][6]+98)/2 && Math.abs(point1[1])<(map[i][7]+98)/2 && Math.abs(point1[2]) < 50){
				point1[2] = Math.sign(point0[2])*50;
				point2 = coorReTransform(point1[0],point1[1],point1[2],map[i][3],map[i][4],map[i][5]);
				dx = point2[0] - x0;
				dy = point2[1] - y0;
				dz = point2[2] - z0;
			}
			
		}
	};
}

function coorTransform(x0,y0,z0,rxc,ryc,rzc){
	let x1 =  x0;
	let y1 =  y0*Math.cos(rxc*deg) + z0*Math.sin(rxc*deg);
	let z1 = -y0*Math.sin(rxc*deg) + z0*Math.cos(rxc*deg);
	let x2 =  x1*Math.cos(ryc*deg) - z1*Math.sin(ryc*deg);
	let y2 =  y1;
	let z2 =  x1*Math.sin(ryc*deg) + z1*Math.cos(ryc*deg);
	let x3 =  x2*Math.cos(rzc*deg) + y2*Math.sin(rzc*deg);
 	let y3 = -x2*Math.sin(rzc*deg) + y2*Math.cos(rzc*deg);
	let z3 =  z2;
	return [x3,y3,z3];
}

function coorReTransform(x3,y3,z3,rxc,ryc,rzc){
	let x2 =  x3*Math.cos(rzc*deg) - y3*Math.sin(rzc*deg);
	let y2 =  x3*Math.sin(rzc*deg) + y3*Math.cos(rzc*deg);
	let z2 =  z3
	let x1 =  x2*Math.cos(ryc*deg) + z2*Math.sin(ryc*deg);
	let y1 =  y2;
	let z1 = -x2*Math.sin(ryc*deg) + z2*Math.cos(ryc*deg);
	let x0 =  x1;
	let y0 =  y1*Math.cos(rxc*deg) - z1*Math.sin(rxc*deg);
	let z0 =  y1*Math.sin(rxc*deg) + z1*Math.cos(rxc*deg);
	return [x0,y0,z0];
}

CreateNewWorld();
TimerGame = setInterval(update,10);
