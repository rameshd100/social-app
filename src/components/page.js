import React, { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    // Setting title value of about page
    document.title = `${props.title} | Social App`;

    //Tell the brower to scroll up very top of the page when you switch to this page
    window.scrollTo(0, 0);
  });

  return <div>{props.children}</div>;
};

export default Page;
