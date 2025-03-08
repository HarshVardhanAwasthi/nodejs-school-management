const validator=require("validator");

const validatedata=(req)=>{
    let { name, address, latitude, longitude } = req.body;


    if(validator.isEmpty(name,{ignore_whitespace:true})){
        throw  new Error("Enter the School Name!!")
    }
    else{
        name = validator.trim(name);
        if (!/^[a-zA-Z\s']+$/.test(name)) {
            throw new Error("Not a valid School Name");
        }
    }

    if(validator.isEmpty(address,{ignore_whitespace:true})){
        throw  new Error("Enter the Address of  the School!!")
    }
    else{
        address = validator.trim(address);
    }

    if(!validator.isFloat(String(latitude),{min:(-90.0), max:90.0})){
        throw  new Error("Not a valid  Latitude");
    }

    if(!validator.isFloat(String(longitude),{min:(-180.0), max:180.0})){
        throw  new Error("Not a valid Longitude");
    }

    req.body.name = name;
    req.body.address = address;
}

module.exports=validatedata