let constraints = {
  audio: true,
  video: true
};

let pc, // RTCPeerConnection
    hasAddTrack;

let localVideo = document.querySelector( '.localVideo' ),
    remoteVideo = document.querySelector( '.remoteVideo' ),
    button = document.querySelector( '.callButton' );

let iceServers = [
  {urls:'stun:stun.l.google.com:19302'},
  {urls:'stun:stun1.l.google.com:19302'},
  {urls:'stun:stun2.l.google.com:19302'},
  {urls:'stun:stun3.l.google.com:19302'},
  {urls:'stun:stun4.l.google.com:19302'},
  {
    urls: 'turn:numb.viagenie.ca',
    credential: 'muazkh',
    username: 'webrtc@live.com'
  },
  {
    urls: 'turn:192.158.29.39:3478?transport=udp',
    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
    username: '28224511:1379330808'
  },
  {
    urls: 'turn:192.158.29.39:3478?transport=tcp',
    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
    username: '28224511:1379330808'
  }
];

navigator.mediaDevices.getUserMedia( constraints )
  .then( ( stream ) => { 

    localVideo.srcObject = stream;

    pc = new RTCPeerConnection( { iceServers: iceServers } );
    hasAddTrack = !!pc.addTrack;

    if ( hasAddTrack ) {
      stream.getTracks().forEach( ( track, index, tracks ) => {
        pc.addTrack( track, stream );
      } );

      pc.ontrack = handleTrackEvent;
    
    } else {
      pc.addStream( stream );
      pc.onaddstream = handleAddStreamEvent;
    }

    pc.onicecandidate = handleICECandidateEvent;

    button.addEventListener( 'click', createOffer );
    button.style.display = 'inline-block';
  } )

  .catch( ( err ) => {
    console.error( err );
  } );

function createOffer() {
  pc.createOffer()

    .then( ( offer ) => {
      return pc.setLocalDescription( offer );
    } )

    .then( () => {
      sendMessage( {
        'type': 'offer',
        'sdp': pc.localDescription
      } );
    } )

    .catch( ( err ) => {
      console.error( err );
    } );
}

function createAnswer() {
  pc.createAnswer()

    .then( ( answer ) => {
      return pc.setLocalDescription( answer );
    } )

    .then( () => {
      sendMessage( {
        'type': 'answer',
        'sdp': pc.localDescription
      } );
    } )

    .catch( ( err ) => {
      console.error( err );
    } );
}

function handleICECandidateEvent( event ) {
  if ( event.candidate ) {
    sendMessage( {
      'type': 'candidate',
      'candidate': event.candidate
    } );
  }
}

function sendMessage( msg ) {
  socket.emit( 'message', msg );
}

function handleTrackEvent( event ) {
  console.log( event );
  remoteVideo.srcObject = event.streams[ 0 ];
}

function handleAddStreamEvent( event ) {
  remoteVideo.srcObject = event.stream;
}

let socket = io.connect( window.location.href );

socket.on( 'message', ( message ) => {
  switch ( message.type ) {
    case 'offer':
      pc.setRemoteDescription( new RTCSessionDescription( message.sdp ) )
        .then( () => {
          createAnswer();
        } )
      break;

    case 'answer':
      pc.setRemoteDescription( new RTCSessionDescription( message.sdp ) );
      break;

    case 'candidate':
      let candidate = new RTCIceCandidate( message.candidate );
      pc.addIceCandidate( candidate )
        .catch( ( err ) => {
          console.error( error );
        } );
      break;

    default:
      console.error( 'incorrect message type' );
      break;
  }
} );
