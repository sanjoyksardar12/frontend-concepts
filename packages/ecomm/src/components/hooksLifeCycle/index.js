import { useState, useEffect } from "react";

function useOnline(count) {
  const [isOnline, setIsOnline] = useState(!!count);
  useEffect(() => {
    function handleOnline() {
      console.log("handle online");
      setIsOnline(true);
    }
    function handleOffline() {
      console.log("handle offline");
      setIsOnline(false);
    }
    console.log("adding event listener........");
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      console.log("unmounted useOnline hook....");
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  
  useEffect(() => {
    console.log("Mounting useOnline hook....useEffect");
  });
  console.log("Mounting useOnline hook....");
  return isOnline;
}

function StatusBar({ count }) {
  const isOnline = useOnline(count);
  useEffect(() => {
    return () => console.log("unmounting StatusBar");
  }, []);

  console.log("Mounting StatusBar", isOnline);
  return (
    <h1>
      {isOnline ? "✅ Online" : "❌ Disconnected"}
      {count}
    </h1>
  );
}

function SaveButton({ count }) {
  const isOnline = useOnline(count);

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  useEffect(() => {
    return () => console.log("unmpounting Save Button");
  }, []);

  console.log("Mounting Save Button", isOnline);
  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
      {count}
    </button>
  );
}
export default function HooksLifeCycle() {
  const [count, setCount] = useState(1);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment :
      </button>{" "}
      {count}
      <StatusBar count={count} />
      <SaveButton count={count} />
    </>
  );
}

