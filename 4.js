function Device(type,voltage){
    this.type= type;
    this.voltage=voltage;
}
function Computer(type, voltage, use){
    this.type=type;
    this.voltage=voltage;
    this.use=use;
    console.log(`Устройство - ${type}; Используется ${use}; И потребляет - ${voltage} `)
}
Computer.prototype = new Device();

function Lamp(type,voltage,use){
    this.type=type;
    this.voltage=voltage;
    this.use=use;
    console.log(`Устройство - ${type}; Используется ${use}; И потребляет - ${voltage} `)
}
Lamp.prototype = new Device();
let desktop_computer=new Computer("настольный Пк",220,"для учебы");
let lamp= new Lamp("настольная лампа",150,"для освещения стола")