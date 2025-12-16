import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/payment/premium/verify`, {
        withCredentials: true,
      });
      setIsUserPremium(res.data.isPremium);
    } catch (err) {
      console.error("Premium verify error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const handleBuyClick = async (type) => {
    try {
      const order = await axios.post(
        `${BASE_URL}/payment/create`,
        { membershipType: type },
        { withCredentials: true }
      );

      const { amount, keyId, currency, notes, orderId } = order.data;

      const options = {
        key: keyId,
        amount,
        currency,
        name: "Dev Tinder",
        description: "Connect to other developers",
        order_id: orderId,
        prefill: {
          name: `${notes.firstName} ${notes.lastName}`,
          email: notes.emailId,
          contact: "9999999999",
        },
        theme: { color: "#F37254" },
        handler: verifyPremiumUser,
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err.response?.data || err.message);
    }
  };

  return isUserPremium ? (
    <h1 className="text-center my-10 font-bold text-xl">
      You are already a premium user ⭐
    </h1>
  ) : (
    <div className="m-10 flex w-full gap-4">
      {/* Silver */}
      <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
        <h1 className="font-bold text-3xl">Silver Membership</h1>
        <ul>
          <li>- Chat with other people</li>
          <li>- 100 connection requests per day</li>
          <li>- Blue Tick</li>
          <li>- 3 months</li>
        </ul>
        <button
          onClick={() => handleBuyClick("silver")}
          className="btn btn-secondary"
        >
          Buy Silver
        </button>
      </div>

      {/* Gold */}
      <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
        <h1 className="font-bold text-3xl">Gold Membership</h1>
        <ul>
          <li>- Chat with other people</li>
          <li>- Infinite connection requests</li>
          <li>- Blue Tick</li>
          <li>- 6 months</li>
        </ul>
        <button
          onClick={() => handleBuyClick("gold")}
          className="btn btn-primary"
        >
          Buy Gold
        </button>
      </div>
    </div>
  );
};


