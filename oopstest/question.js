class car{
    constructor(make,model,year){
        this.makes=make;
        this.models=model;
        this.years=year;
   }
getDetails(){
    console.log(`make${this.makes} models${this.models} years${this.years} `)
}
}
const cars =new car ('Toyota','corolla','2022')
cars.getDetails();