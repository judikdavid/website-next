import { splitEvents } from './split-events';
import { expect } from 'chai';
import * as MockDate from 'mockdate';

let testevents = [];

describe('SplitEvents', () => {
  beforeEach(() => {
    MockDate.set('Thu Jun 23 2016 14:10:56 GMT+0100 (BST)');

    const currentDate = new Date();

    const laterToday = new Date();
    laterToday.setHours(currentDate.getHours() + 1);

    const earlierToday = new Date();
    earlierToday.setHours(currentDate.getHours() - 1);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - 5);

    testevents = [
      {
        id: 'past-event-1',
        startDateTime: {
          iso: previousDate,
        },
        endDateTime: {
          iso: previousDate,
        },
      },
      {
        id: 'past-event-2',
        startDateTime: {
          iso: previousDate,
        },
        endDateTime: {
          iso: previousDate,
        },
      },
      {
        id: 'today-event-1',
        startDateTime: {
          iso: currentDate,
        },
        endDateTime: {
          iso: currentDate,
        },
      },
      {
        id: 'today-event-2',
        startDateTime: {
          iso: currentDate,
        },
        endDateTime: {
          iso: currentDate,
        },
      },
      {
        id: 'later-today-event',
        startDateTime: {
          iso: laterToday,
        },
        endDateTime: {
          iso: laterToday,
        },
      },
      {
        id: 'earlier-today-event',
        startDateTime: {
          iso: earlierToday,
        },
        endDateTime: {
          iso: earlierToday,
        },
      },
      {
        id: 'future-event-1',
        startDateTime: {
          iso: futureDate,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
      {
        id: 'future-event-2',
        startDateTime: {
          iso: futureDate,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
    ];
  });

  afterEach(() => {
    MockDate.reset();
  });

  it('returns future events', () => {
    const timeline = 'future';
    const returnedEvents = splitEvents(testevents, timeline);
    expect(returnedEvents.length).to.equal(2);
    expect(returnedEvents[0].id).to.equal('future-event-1');
    expect(returnedEvents[1].id).to.equal('future-event-2');
  });

  it('returns past events', () => {
    const timeline = 'past';
    const returnedEvents = splitEvents(testevents, timeline);
    expect(returnedEvents.length).to.equal(2);
    expect(returnedEvents[0].id).to.equal('past-event-1');
    expect(returnedEvents[1].id).to.equal('past-event-2');
  });

  it('returns todays events', () => {
    const timeline = 'today';
    const returnedEvents = splitEvents(testevents, timeline);
    expect(returnedEvents.length).to.equal(4);
    expect(returnedEvents[0].id).to.equal('today-event-1');
    expect(returnedEvents[1].id).to.equal('today-event-2');
    expect(returnedEvents[2].id).to.equal('later-today-event');
    expect(returnedEvents[3].id).to.equal('earlier-today-event');
  });

  it('returns events in reverse order when specified', () => {
    const timeline = 'future';
    const returnedEvents = splitEvents(testevents, timeline, { reverse: true });
    expect(returnedEvents.length).to.equal(2);
    expect(returnedEvents[0].id).to.equal('future-event-2');
    expect(returnedEvents[1].id).to.equal('future-event-1');
  });
});
