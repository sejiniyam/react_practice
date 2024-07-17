import React from "react";

const Item = ({ item }) => {
  const {
    itemId,
    curriculumName,
    schoolLevelName,
    areaName,
    itemRegisterType,
    htmlZipUrl,
  } = item;

  return (
    <div>
      <h3>단건정보</h3>
      <div>{itemId}</div>
      <div>{curriculumName}</div>
      <div>{schoolLevelName}</div>
      <div>{areaName}</div>
      <div>{itemRegisterType}</div>
      <div>{htmlZipUrl}</div>
    </div>
  );
};

export default Item;