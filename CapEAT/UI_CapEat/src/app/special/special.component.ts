import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from '../calendarutils/colors';

@Component({
  
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent {

  view: string = 'month';
  stuff: Array<Array<CalendarEvent>> = new Array<Array<CalendarEvent>>();
  
  thing: Object = new Object();

  viewDate: Date = new Date();

  events: CalendarEvent[] = [{
    title: 'Draggable event',
    color: colors.yellow,
    start: new Date(),
    draggable: true,
    meta: {
      user: 'Andy'
    }
  }, {
    title: 'A non draggable event',
    color: colors.blue,
    start: new Date(),
    draggable: true,
    meta: {
      user: 'Bob'
    }
  }];
  
  ngOnInit(){
    console.log('test');
    this.stuff[0] = this.events.filter(function(event: CalendarEvent){
      return event.meta.user == 'Andy';
    });
    
    this.thing['Andy'] = this.events.filter(function(event: CalendarEvent){
      return event.meta.user == 'Andy';
    });
    
    console.log(JSON.stringify(this.thing['Andy']));
    
    
  }
  

  refresh: Subject<any> = new Subject();

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
  
  filterEvents(events: CalendarEvent[]){
    debugger;
    this.stuff[0] = new Array<CalendarEvent>();
    let thing = this.stuff[0];
    events.forEach(function(event: CalendarEvent){
      thing.push(event);
    })
    debugger;
    return this.stuff[0];
  }

}

