import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailTitle">
        <h1>Save time ,Save Money</h1>
      </div>
      <div className="mailDesc">Sign up and get email</div>
      <div className="mailInputContainer">
        <input type="text" placeholder="your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default MailList;
