import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";

const PostShare = props => {
  console.log("hello");

  const {
    post: {
      fields: { slug },
      frontmatter: { title },
      excerpt
    }
  } = props;

  const url = props.post.fields.url + props.post.fields.slug;

  const iconSize = 36;
  const filter = count => (count > 0 ? count : "");

  return (
    <React.Fragment>
      <div className="share">
        <span className="label">SHARE</span>
        <div className="links">
          <TwitterShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Twitter share"
            }}
          >
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title}`}
            additionalProps={{
              "aria-label": "Facebook share"
            }}
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            description={excerpt}
            additionalProps={{
              "aria-label": "LinkedIn share"
            }}
          >
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </LinkedinShareCount>
          </LinkedinShareButton>
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .share {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .links {
          display: flex;
          flex-direction: row;

          :global(.SocialMediaShareButton) {
            margin: 0 0.8em;
            cursor: pointer;
          }
        }

        .label {
          font-size: 1.2em;
          margin: 0 1em 1em;
        }

        @from-width tablet {
          .share {
            flex-direction: row;
          }
          .label {
          }
        }
      `}</style>
    </React.Fragment>
  );
};

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default PostShare;
