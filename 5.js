class Device{
    constructor (type,voltage){
        this.type= type;
        this.voltage=voltage;
    }
}

class Computer extends Device{
    constructor (type, voltage, use){
        super(type);
        this.voltage=voltage;
        this.use=use;
        console.log(`Устройство - ${type}; Используется ${use}; И потребляет - ${voltage} `)
    }
}
Computer.prototype = new Device();

class Lamp extends Device{
    constructor (type,voltage,use){
        super(type);
        this.voltage=voltage;
        this.use=use;
        console.log(`Устройство - ${type}; Используется ${use}; И потребляет - ${voltage} `)
    }
}
Lamp.prototype = new Device();
let desktop_computer=new Computer("настольный Пк",220,"для учебы");
let lamp= new Lamp("настольная лампа",150,"для освещения стола");