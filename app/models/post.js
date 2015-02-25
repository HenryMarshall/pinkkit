import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title:        attr('string'),
  selfText:     attr('string'),
  domain:       attr('string'),
  url:          attr('string'),
  thumbnail:    attr('string'),

  over_18:      attr('boolean'),
  archived:     attr('boolean'),
  stickied:     attr('boolean'),
  hidden:       attr('boolean'),
  created_utc:  attr('date'),

  score:        attr('number'),
  gilded:       attr('number'),
  num_comments: attr('number'),

  // These are for the specific user
  liked:        attr('boolean'),
  saved:        attr('boolean'),

  // These should ultimately be belongs_to relationships
  subreddit:    attr('string'),
  author:       attr('string'),

});