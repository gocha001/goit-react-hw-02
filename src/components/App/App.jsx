import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("saved-clicks"));
    if (savedClicks !== null) {
      return savedClicks;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const options = Object.keys(clicks);

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  function updateFeedback(feedbackType) {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  }

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  function handleReset() {
    setClicks({ ...clicks, good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <Description />

      <Options
        options={options}
        handleClick={updateFeedback}
        total={totalFeedback}
        handleReset={handleReset}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
