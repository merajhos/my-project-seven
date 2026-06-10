
import {  useState } from "react";
import {  MessageSquare,  Phone, Video } from "lucide-react";

import Footer from "../../components/Footer/Footer";
import { useApp } from "../../context/AppContext";


const Timeline = () => {
  const { timeline } = useApp();
  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <Phone size={18} className="text-blue-500" />;
      case "Text":
        return <MessageSquare size={18} className="text-purple-500" />;
      case "Video":
        return <Video size={18} className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`btn ${
              filter === "all" ? "btn-success" : "btn-outline"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Call")}
            className={`btn ${
              filter === "Call" ? "btn-success" : "btn-outline"
            }`}
          >
            Call
          </button>

          <button
            onClick={() => setFilter("Text")}
            className={`btn ${
              filter === "Text" ? "btn-success" : "btn-outline"
            }`}
          >
            Text
          </button>

          <button
            onClick={() => setFilter("Video")}
            className={`btn ${
              filter === "Video" ? "btn-success" : "btn-outline"
            }`}
          >
            Video
          </button>
        </div>

        <div className="space-y-4">
          {filteredTimeline.length === 0 ? (
            <div className="card bg-base-100 shadow">
              <div className="card-body text-center">
                <p>No interactions found.</p>
              </div>
            </div>
          ) : (
            filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="card bg-base-100 shadow-md"
              >
                <div className="card-body">
                  <div className="flex items-center gap-3">
                    <div className="bg-base-200 p-3 rounded-full">
                      {getIcon(entry.type)}
                    </div>

                    <div>
                      <h2 className="font-semibold">
                        {entry.title}
                      </h2>

                      <p className="text-sm text-gray-500">
                        {entry.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Timeline;