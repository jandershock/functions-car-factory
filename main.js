const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

//Add wheels
const addWheels = (obj) => {
    obj.wheels = 4;
}

//Add engine
const addEngine = (obj) => {
    obj.engine = '4.8L';
}

//Add steering wheel
const addSteeringWheel = (obj) => {
    obj.steeringWheel = 'Tilting';
}

//Add drive train
const addDriveTrain = (obj) => {
    obj.driveTrain = 'Two wheel drive';
}

let x = createChassis();
console.log(x);

addWheels(x);
console.log(x);

addEngine(x);
console.log(x);

addSteeringWheel(x);
console.log(x);

addDriveTrain(x);
console.log(x);