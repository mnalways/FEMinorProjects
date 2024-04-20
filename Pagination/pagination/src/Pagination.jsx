import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrrentPage }) => {
  const showPreviousBtn = () => {
    if (currentPage == 1) return null;
    return <div onClick={() => setCurrrentPage(currentPage - 1)}>prev</div>;
  };
  const showNextBtn = () => {
    if (currentPage == totalPages) return null;
    return <div onClick={() => setCurrrentPage(currentPage + 1)}>next</div>;
  };
  const getAllPages = () => {
    const domTree = [];
    for (let i = 1; i <= totalPages; i++) {
      domTree.push(i);
    }
    return domTree.map((i) => (
      <div onClick={() => setCurrrentPage(i)} key={i}>
        {i}
      </div>
    ));
  };
  return (
    <div>
      {showPreviousBtn()}
      <div>{getAllPages()}</div>
      {showNextBtn()}
    </div>
  );
};

export default Pagination;
