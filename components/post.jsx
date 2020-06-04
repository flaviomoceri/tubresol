import Link from "next/link";
import ColorHash from "color-hash";
import { Popover, Tooltip } from "antd";
import Avatar from "./avatar";

const hash = new ColorHash();

const Post = (props) => {
  const { post, className } = props;

  return (
    <div className="posts__body">
      <div key={post.id} className={className}>
        <div className="posts__section-left">
          <div className="posts__topic">
            <div className="posts__content">
              <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`}>
                <a href={`/posts/${post.slug}`}><h3 className={"clickable"}>{post.title}</h3></a>
              </Link>

              <div className="posts__tags tags">
                {post.tags.map((tag) => {
                  const name = tag.tag;

                  return (
                    <a
                      key={name}
                      style={{
                        backgroundColor: hash.hex(name),
                      }}
                    >
                      {name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="posts__category">
            <a
              className="category"
              onClick={() => props.changeCategory(post.category)}
            >
              <i className="bg-368f8b" />
              {post.category.title}

              <span className={"mobile"}><p className={"gray ml20"}>{post.views} visualizzazioni</p> </span>
            </a>
          </div>
        </div>

        <div className="posts__section-right">
          <div className="posts__users">
            {post.related_profiles.map((related_profile) => (
              <Tooltip
                key={related_profile.id}
                title={
                  <Link
                    href={"/builders/[username]"}
                    as={`/builders/${related_profile.username}`}
                  >
                    <span className={"clickable"}>
                      Clicca per visualizzare il profilo di{" "}
                      {related_profile.first_name} {related_profile.last_name}{" "}
                      <span className={"red"}>
                        ({related_profile.username})
                      </span>{" "}
                    </span>
                  </Link>
                }
                placement={"bottom"}
              >
                {" "}
                <Link
                  href={"/builders/[username]"}
                  as={`/builders/${related_profile.username}`}
                >
                  <a
                    className={"clickable"}
                    href={"/builders/" + related_profile.username}
                  >
                    <Avatar user={related_profile} />
                  </a>
                </Link>
              </Tooltip>
            ))}
          </div>

          <div className="posts__replies">{post.comments} </div>

          <div className="posts__views">{post.views} </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
