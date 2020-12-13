import { UserInfo } from './UserInfo';

export function Comment({ user, text, date }) {
    return(
    <>
        <UserInfo user={user}/>
        <div className="Comment-text">
          {text}
        </div>
        <div className="Comment-date">
          {date}
        </div>
    </>)
}