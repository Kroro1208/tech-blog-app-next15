"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
      {count}
    </div>
  );
};

export default Counter;
