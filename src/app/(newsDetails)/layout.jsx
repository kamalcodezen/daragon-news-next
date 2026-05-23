import BreakingNews from "@/components/shared/BreakingNews";
import React from "react";

const NewsDetailsPageLayout = ({ children }) => {
  return (
    <div className="space-y-10">
      <BreakingNews />
      {children}
    </div>
  );
};

export default NewsDetailsPageLayout;
