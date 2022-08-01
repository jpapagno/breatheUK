import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
const Twitter = () => {
  return (
    <div className="twitter">
      <div class="embed-container">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tweetbreatheuk"
          options={{ height: 800 }}
        />
      </div>
      <div>
        <TwitterFollowButton screenName={"tweetbreatheuk"} />
      </div>
    </div>
  );
};

export default Twitter;
