class Device 
{
    constructor(_deviceCoordinates ) 
    {
      this.deviceCoordinates = _deviceCoordinates;
    }
    
    findBestLinkStation(linkStationData) 
    { 
      let linkStationReach = 0;
      let linkStationPower = 0;
      let deviceDistance = -1;
      let bestPowerPosition = 0;

      for (let i = 0; i < deviceCoordinates.length; i++) 
      {
        let deviceCoordinatesX = deviceCoordinates[i][0];
        let deviceCoordinatesY = deviceCoordinates[i][1];
        let linkStationPowerMax = 0; 
        for (let i = 0; i < linkStationData.length; i++) 
        {
          let linkStationX = linkStationData[i][0];
          let linkStationY = linkStationData[i][1];
          linkStationReach = linkStationData[i][2];
    
          deviceDistance = this.getDistance(deviceCoordinatesX, deviceCoordinatesY, linkStationX, linkStationY);
    
          if (deviceDistance <= linkStationReach) 
          {       
              linkStationPower = Math.pow((linkStationReach - deviceDistance),2);
    
              if(linkStationPowerMax < linkStationPower)
              {
                  bestPowerPosition = i;
                  linkStationPowerMax = linkStationPower;
              }
          }     
        }
    
        if (linkStationPowerMax === 0)
        {
            console.log("No link station within reach for point " +  deviceCoordinatesX +","+ deviceCoordinatesY);
        }
        else
        {
            console.log("Best link station for point " +  deviceCoordinatesX +","+ deviceCoordinatesY + " is " + linkStationData[bestPowerPosition][0]+ ","+linkStationData[bestPowerPosition][1] + " with power " + linkStationPowerMax);
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
  
  
  const device = new Device(deviceCoordinates);
  device.findBestLinkStation(linkStationData);