class Device 
{
    linkStationReach = 0;
    linkStationPower = 0;
    deviceDistance = -1;
    bestPowerPosition = 0;
    
    constructor(_linkStationData, _deviceCoordinates ) 
    {
      this.linkStationData = _linkStationData;
      this.deviceCoordinates = _deviceCoordinates;
    }
  
  
    findBestLinkStation() 
    { 
      for (let i = 0; i < deviceCoordinates.length; i++) 
      {
        let deviceCoordinatesX = deviceCoordinates[i][0];
        let deviceCoordinatesY = deviceCoordinates[i][1];
        let linkStationPowerMax = 0; 
        for (let i = 0; i < linkStationData.length; i++) 
        {
          let linkStationX = linkStationData[i][0];
          let linkStationY = linkStationData[i][1];
          this.linkStationReach = linkStationData[i][2];
    
          this.deviceDistance = this.getDistance(deviceCoordinatesX, deviceCoordinatesY, linkStationX, linkStationY);
    
          if (this.deviceDistance <= this.linkStationReach) 
          {       
              this.linkStationPower = Math.pow((this.linkStationReach - this.deviceDistance),2);
    
              if(linkStationPowerMax < this.linkStationPower)
              {
                  this.bestPowerPosition = i;
                  linkStationPowerMax = this.linkStationPower;
              }
          }     
        }
    
        if (linkStationPowerMax === 0)
        {
            console.log("No link station within reach for point " +  deviceCoordinatesX +","+ deviceCoordinatesY);
        }
        else
        {
            console.log("Best link station for point " +  deviceCoordinatesX +","+ deviceCoordinatesY + " is " + linkStationData[this.bestPowerPosition][0]+ ","+linkStationData[this.bestPowerPosition][1] + " with power " + linkStationPowerMax);
        }  
      }
    }
    
    getDistance(deviceX, deviceY, linkStationX, linkStationY)
    {
      let y = linkStationX - deviceX;
      let x = linkStationY - deviceY;   
      return Math.sqrt(x * x + y * y);
    }
}
  
  
  
  let linkStationData = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
  ];
  
  let deviceCoordinates = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]
  ];
  
  
  const device = new Device(linkStationData, deviceCoordinates);
  device.findBestLinkStation();