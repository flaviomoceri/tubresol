import { DOMAIN } from "../controllers/middleware";

const Avatar = (props) => {
  const { user, size, fluid, small } = props;

  return (
    <div
      className={ fluid ? "avatar fluid" : size ? "avatar " + size : "avatar"}
    >
      <img
        src={
          user.profile.picture
            ? DOMAIN + user.profile.picture
            : "/fonts/icons/avatars/" + user.username[0].toUpperCase() + ".svg"
        }
        className={ fluid ? "avatarImg fluid" : (small ? "avatarImg small" : "avatarImg")}
        alt={user.username}
      />
    </div>
  );
};
export default Avatar;
