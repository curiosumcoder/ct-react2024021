"use client";
import React, { useState } from "react";
import { getPlatform } from "../appActions";

function GetPlatformDemo() {
  const [platform, setPlatform] = useState<string | null>(null);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={async () => {
          const platform = await getPlatform();
          setPlatform(platform);
        }}
      >
        Get Platform
      </button>
      <br />
      {platform}
    </>
  );
}

export default GetPlatformDemo;
