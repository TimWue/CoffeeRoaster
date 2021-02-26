import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeasurementService } from 'src/app/services/measurement.service';
import { RepositoryService } from 'src/app/services/repository.service';
import { TemperatureService } from 'src/app/services/temperature.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  ratingBool : boolean [] = [false,false, false, false, false];
  reviewForm = this.formBuilder.group({
    fname: '',
    fbean: '',
    fcomment: ''
  });
  constructor(private measurementService : MeasurementService, 
    private formBuilder: FormBuilder,
    private repoService : RepositoryService,
    private tempService : TemperatureService) { }

  ngOnInit(): void {
  }

  setRating (index : number){
    this.measurementService.setRating(index+1);
    this.rating2bool(index+1);
  }

  saveMeasurement(){
    console.log(this.reviewForm.value);
    let values : {fname : string, fbean : string, fcomment : string} = this.reviewForm.value;
    this.repoService.postRoast(
      values.fname,
      values.fbean,
      values.fcomment, 
      this.ratingBool.filter(Boolean).length,
      new Date(),
      this.tempService.measures);

    this.measurementService.setName(values.fname);
    this.measurementService.setBean(values.fbean);
    this.measurementService.setComments(values.fcomment);
    this.measurementService.addMeasurement();
    this.reviewForm.reset();
    this.clearRating();
  }

  rating2bool(rating : number){
    this.clearRating();
    for (let i =0; i<rating; i++){
        this.ratingBool[i] = true;
    } 
  }

  clearRating(){
    this.ratingBool= [false,false, false, false, false];
  }

}
