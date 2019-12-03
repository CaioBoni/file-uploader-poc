import { FileUploaderService } from './../services/file-uploader.service';
import { DTO } from './../model/DTO';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {
  @ViewChild('uploaderFiles', {static: false}) uploaderFiles;

  dto = {
    id: 0,
    files: []
  } as DTO;

  constructor(private service: FileUploaderService) {
  }

  ngOnInit() {}

  onSubmit() {
    this.dto.id = this.getRandomInt();
    const input = new FormData();
    input.append('id', this.dto.id.toString());
    input.append('nome', this.dto.nome);
    this.dto.files.forEach(file => {
      input.append('files', file);
    });
    // this.sendoMultiPartiObj(input);
    this.sendObj(input);
  }

  // METODO PARA ENVIAR OBJECTO COMPLETO
  sendoMultiPartiObj(input) {
    console.log('Enviando dto numero: ' + this.dto.id);
    this.service.sendMultiPartiObj(input).subscribe((retorno: Response) => {
      console.log(retorno);
    });
  }

  // METODO PARA ENVIAR REQUEST PARAMS
  sendObj(input) {
    console.log('Enviando dto numero: ' + this.dto.id);
    this.service.sendObj(input).subscribe((retorno: Response) => {
      console.log(retorno);
    });
  }

  upload() {
    this.dto.files = [];
    this.uploaderFiles.uploader.queue.forEach(item => {
      this.dto.files.push(item._file);
    });
    console.log('DTO', this.dto);
  }

  getRandomInt() {
    const numeros: number[] = [];
    while (numeros.length < 16) {
      const aleatorio = Math.floor(Math.random() * 100);
      if (numeros.indexOf(aleatorio) === -1) {
        numeros.push(aleatorio);
      }
    }
    return numeros[0];
  }
}
