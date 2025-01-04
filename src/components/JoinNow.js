import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite Kiko San to your Discord server!{" "}
        </div>
        <button className="btn">
        <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1288827343581872259&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank">
          Invite now!
        </Link>

        </button>
      </section>
    </>
  );
};

export default JoinNow;
