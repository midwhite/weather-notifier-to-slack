import Constants from './Constants';

const postToSlack = (text: string) =>
  UrlFetchApp.fetch(Constants.SLACK_INCOMING_WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      text,
    }),
    muteHttpExceptions: true,
  });

export default postToSlack;
