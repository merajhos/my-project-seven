import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { UserPlus } from "lucide-react";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-200 min-h-screen">

      {/* Banner */}
      <section className="max-w-6xl mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-3">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="btn btn-success mt-5">
          <UserPlus size={18} />
          Add Friend
        </button>
      </section>

     
      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="card bg-base-100 shadow">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">{friends.length}</h2>
            <p>Total Friends!!!</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">
              {friends.filter((f) => f.status === "overdue").length}
            </h2>
            <p>On Track</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">
              {friends.filter((f) => f.status === "on-track").length}
            </h2>
            <p>Need Attention</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">
              {friends.filter((f) => f.status === "almost due").length}
            </h2>
            <p>Interactions This Month</p>
          </div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-bold mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">

                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <h2 className="font-bold">
                  {friend.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {friend.days_since_contact} days ago
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge badge-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  {friend.status === "overdue" && (
                    <span className="badge badge-error">
                      Overdue
                    </span>
                  )}

                  {friend.status === "almost due" && (
                    <span className="badge badge-warning">
                      Almost Due
                    </span>
                  )}

                  {friend.status === "on-track" && (
                    <span className="badge badge-success">
                      On Track
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;