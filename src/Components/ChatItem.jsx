import {Link} from 'react-router-dom';
export default function ChatItem({item}) {

    return (
        <div className="chat-container">
            <Link to={"/" + item.Uid.stringValue} className={"open-chat-button"}>
                <div className="status">
                    <div className="avatar">
                        <img src={item.Picture.stringValue} alt="user-avatar" />
                    </div>
                    <div className="online-badge"></div>
                </div>
                <div className="info">
                    <div className="chat-title">{item.UserName.stringValue}</div>
                    <div className="last-message"></div>
                </div>
            </Link>
        </div>
    );
}