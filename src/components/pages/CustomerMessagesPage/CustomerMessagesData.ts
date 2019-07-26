export interface IEvent {
  date: string,
  type: string,
  location: string,
  id: string,
  description: string,
  impact: string,
  start: string,
  end?: string,
  sent: boolean,
  announced?: boolean,
}

export const events: IEvent[] = [
  {
    date: '13.4.2019',
    type: 'Ongoing',
    location: 'Amsterdam',
    id: 'ID: AMS-12-CDF',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, exercitationem, nesciunt! Amet culpa delectus deleniti doloribus eius fuga, impedit iure labore laboriosam laborum minima, nihil nostrum quam quo suscipit, voluptatum.',
    impact: 'All servers this location',
    start: '9.4.2019',
    end: '',
    sent: true,
    announced: true,
  },
];
