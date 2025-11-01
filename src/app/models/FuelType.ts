export class FuelTypeModel{
  fuelTypeId: number;
  FuelName: string;
  CreatedBy: string;
  CreatedOn:Date;
  ModifiedBy: string;
  ModifiedOn :Date;

  constructor (){
this.fuelTypeId = 0,
this.FuelName = '',
this.CreatedBy ='',
this.CreatedOn = new Date(),
this.ModifiedBy = '',
this.ModifiedOn= new Date()

  }
}
