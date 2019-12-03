'use strict';
import { Injectable } from '@angular/core';
import { MzModalService } from 'ng2-materialize';

@Injectable()
export class Globals {
  role: string = 'test';
  modalOptions: Materialize.ModalOptions = {
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '35%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters available.
      //alert('Ready');
      //console.log(modal, trigger);
      //this.OnModalLaunch();
    },
    complete: () => { //alert('Closed'); } // Callback for Modal close
    }
  }
  
}
