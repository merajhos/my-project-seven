import { useEffect, useState } from "react";;
import { Archive, Clock, MessageSquare, Pencil, Phone, Trash2, Video } from "lucide-react";
import toast from "react-hot-toast";
import { useApp } from "../../context/AppContext";

import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";


const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  const { addEntry } = useApp();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find(
          (item) => item.id === parseInt(id)
        );
        setFriend(selectedFriend);
      });
  }, [id]);

  if (!friend) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  const handleCheckIn = (type) => {
    addEntry(type, friend.name);

    toast.success(`${type} logged successfully!`);
  };

  const statusColor = {
    overdue: "badge badge-error",
    "almost due": "badge badge-warning",
    "on-track": "badge badge-success",
  };

  return (
    <div className="bg-base-200 min-h-screen">

      <div className="max-w-6xl mx-auto py-10 px-4">

        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">

              <div className="flex flex-col items-center">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-24 h-24 rounded-full object-cover"
                />

                <h2 className="text-2xl font-bold mt-3">
                  {friend.name}
                </h2>

                <div className={statusColor[friend.status]}>
                  {friend.status}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-outline"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <div className="mt-5">
                <h3 className="font-semibold">Bio</h3>
                <p className="text-sm text-gray-500">
                  {friend.bio}
                </p>
              </div>

              {/* Email */}
              <div className="mt-4">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-500">
                  {friend.email}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-6">

                <button className="btn btn-warning btn-sm">
                  <Clock size={16} />
                  Snooze
                </button>

                <button className="btn btn-info btn-sm">
                  <Archive size={16} />
                  Archive
                </button>

                <button className="btn btn-error btn-sm">
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">

              <div className="card bg-base-100 shadow">
                <div className="card-body text-center">
                  <h2 className="text-2xl font-bold">
                    {friend.days_since_contact}
                  </h2>
                  <p className="text-xs">
                    Days Since Contact
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow">
                <div className="card-body text-center">
                  <h2 className="text-2xl font-bold">
                    {friend.goal}
                  </h2>
                  <p className="text-xs">
                    Goal
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow">
                <div className="card-body text-center">
                  <h2 className="text-sm font-bold">
                    {friend.next_due_date}
                  </h2>
                  <p className="text-xs">
                    Next Due Date
                  </p>
                </div>
              </div>

            </div>

            {/* Relationship Goal */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">

                <div className="flex justify-between items-center">
                  <h2 className="card-title">
                    Relationship Goal
                  </h2>

                  <button className="btn btn-ghost btn-sm">
                    <Pencil size={16} />
                    Edit
                  </button>
                </div>

                <p>
                  Contact every{" "}
                  <span className="font-bold">
                    {friend.goal} days
                  </span>
                </p>

              </div>
            </div>

            {/* Quick Check-In */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">

                <h2 className="card-title">
                  Quick Check-In
                </h2>

                <div className="grid grid-cols-3 gap-3">

                  <button
                    onClick={() => handleCheckIn("Call")}
                    className="btn btn-outline"
                  >
                    <Phone size={18} />
                    Call
                  </button>

                  <button
                    onClick={() => handleCheckIn("Text")}
                    className="btn btn-outline"
                  >
                    <MessageSquare size={18} />
                    Text
                  </button>

                  <button
                    onClick={() => handleCheckIn("Video")}
                    className="btn btn-outline"
                  >
                    <Video size={18} />
                    Video
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default FriendDetails;