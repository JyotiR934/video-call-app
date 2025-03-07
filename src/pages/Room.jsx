import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
  const { roomId } = useParams();
  const mymeeting = async (element) => {
    const appID = 1405630067;
    const serverSecret = "d479e330a4fd41929b4c9a62a52ac28b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId, 
      Date.now().toString(),
      "Jyotiranjan"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      
      zp.joinRoom({
             container: element,
           
             scenario: {
              mode: ZegoUIKitPrebuilt.VideoConference,
             },
        });

  }
  return (
    <div className='room'>
      <div ref={mymeeting}/>
    </div>
  )
}

export default Room