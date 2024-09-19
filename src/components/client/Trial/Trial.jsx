import "./Trial.css";

export function Trial() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full container__ text-white gap-10 py-20 max-[500px]:py-10 max-w-[2000px]">
      <p className="text-center font-bold text-[200%] max-[500px]:text-[120%]">
        What are you waiting for? <br /> Subscribe Now.
      </p>

      <p className="max-[500px]:text-[90%]">Subscribe for $5.99/ Month. Cancel anytime.</p>

      <button className="subscribe-button">Start Free Trial</button>
    </div>
  );
}
