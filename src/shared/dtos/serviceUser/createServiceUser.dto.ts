export class CreateServiceUserDTO {
  public price: number
  public chargeType: string;
  public postalCode: string;
  public street: string;
  public number: number;
  public complement?: string;
  public neighborhood: string;
  public state: string;
  public city: string;
  public userId: string;
  public serviceId: string;  
}