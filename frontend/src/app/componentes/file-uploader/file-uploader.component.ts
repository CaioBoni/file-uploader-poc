import { URL } from './../../services/file-uploader.service';
import { FileUploader } from 'ng2-file-upload';
import { Component, OnInit } from '@angular/core';

/**
 * @author Caio Goulart Boni
 */
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({});
  }

  remover(fileToRemove) {
    this.uploader.queue.splice(this.uploader.queue.indexOf(fileToRemove), 1);
  }
}
