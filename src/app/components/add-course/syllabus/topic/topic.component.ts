import { ApiService } from 'src/app/services/api.service';
import { MasterdataService } from 'src/app/services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/course';
import { encode, decode } from 'html-entities';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topics: any[] = [];
  addTopicButton = false;

  preview: any[] = [{
    //sectionid: this.masterData.sectionid,
    sectionid: 'eERTTnRJOGU2RVNOdTdUL2lyQVBpUT09',
    topicid: '123',
    excerpt: 'dafadf',
    title: 'dsfadd',
    content: 'fdadfad',
    videourl: 'dafdfad',
    ispreview: false,
    duration: 0,
  },
  {
  sectionid: 'eERTTnRJOGU2RVNOdTdUL2lyQVBpUT09',
  topicid: '345',
  excerpt: 'dfadfadf',
  title: 'fdafad',
  content: 'dfadfad',
  videourl: 'fdafdasfsa',
  ispreview: false,
  duration: 0,
},{
sectionid: 'eERTTnRJOGU2RVNOdTdUL2lyQVBpUT09',
topicid: '234',
excerpt: 'dfadfd',
title: 'dfadfadf',
content: 'fdasfad',
videourl: 'fdafad',
ispreview: false,
duration: 0,
},];

  topicData!: Topic;
  topicAdded = false;

  viewVideoInput = false;
  viewTopicMaterialInput = false;

  constructor(private api: ApiService, public masterData: MasterdataService) {}
  ngOnInit(): void {
    this.topicData = {
      sectionid: this.masterData.sectionid,
      //sectionid: 'eERTTnRJOGU2RVNOdTdUL2lyQVBpUT09',
      topicid: '0',
      excerpt: '',
      title: '',
      content: '',
      videourl: '',
      ispreview: false,
      duration: 0,
    };
    this.masterData.sectiontitle = 'Test';
    this.topics.push(this.topicData);
  }

  addTopicInput() {
    this.topicAdded = false;
    //this.topics.push(this.topicData);
    console.log(this.topics);
  }

  displayVideo() {
    this.viewVideoInput = true;
    this.viewTopicMaterialInput = false;
  }

  displayTopicMaterial() {
    this.viewTopicMaterialInput = true;
    this.viewVideoInput = false;
  }

  saveTopic() {
    this.addTopicButton = false;
    this.topicData.content = encode(this.topicData.content);
    const promise = new Promise((res, rej) => {
      res('success');
    })
      .then(() => {
        this.api.addTopic(this.topicData).subscribe((res) => {
          console.log(res);
          this.topicAdded = true;
          this.preview.push(res);
        });
      })
      .then(() => {
        this.topicData = {
          sectionid: this.masterData.sectionid,
          //sectionid: 'eERTTnRJOGU2RVNOdTdUL2lyQVBpUT09',
          topicid: '0',
          excerpt: '',
          title: '',
          content: '',
          videourl: '',
          ispreview: false,
          duration: 0,
        };
      });

    this.addTopicButton = true;
  }

  decode(val: any) {
    return decode(val);
  }
}
