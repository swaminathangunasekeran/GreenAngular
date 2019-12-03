

export class Config{

  static MAIN_HEADING:string = "Thudup";
  //static ICON:string = "rowing";
  static ICON:string = "rowing";
  static IDENTITY_POOL_ID:string = "ap-south-1:53d0b6ed-3cbf-400f-ba2d-226f2ae94564";
  static modalOptions: any = {
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '35%', // Starting top style attribute
    endingTop: '0%', // Ending top style attribute
    zindex:99999,
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters available.
      //alert('Ready');
      //console.log(modal, trigger);
      //this.OnModalLaunch();
    },
    complete: () => { //alert('Closed'); } // Callback for Modal close
}
  }
  static fbconf = {

          appId: '195882417686025',
          cookie: true,  // enable cookies to allow the server to access
          // the session
          xfbml: true,  // parse social plugins on this page
          version: 'v2.8' // use graph api version 2.5

        }

   static devFB = {
     appId      : '374695139677202',
     xfbml      : true,
     version    : 'v3.1',
     cookie: true
   }
}
