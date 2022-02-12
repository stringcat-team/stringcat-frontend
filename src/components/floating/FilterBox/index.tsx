import React, { ChangeEventHandler, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import {
  MainBox,
  FilterBar,
  BoldTypo,
  ArrowBox,
  SearchBox,
  SearchBar,
  ResultBox,
  ResultTypo,
  PickBox,
  PickTag,
  RemoveBox,
} from "./style";

import { temp } from "./data";

const FilterBox = () => {
  // 검색창 노출
  const [filterState, setFilterState] = useState(true);
  const [resultList, setResultList] = useState([...temp]);

  const searchBoxOpen = () => {
    setResultList([...temp]);
    setFilterState((prev) => !prev);
  };

  // 검색 기능

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const tx = event.target.value;

    const newResultList = temp.map((obj) => {
      const tempObj = { ...obj };
      if (tempObj.name.indexOf(tx) > -1) {
        tempObj.name = tempObj.name.replace(tx, `<b style='color:black'>${tx}</b>`);
      }
      return tempObj;
    });

    setResultList(newResultList);
  };

  // 결과 선택 기능
  const [pinkList, setPinktList] = useState<string[]>([]);
  const pinkHandler = (tx: string) => () => {
    searchBoxOpen();
    const set = new Set([...pinkList, tx]);
    setPinktList([...Array.from(set)]);
  };

  return (
    <Box sx={{ mt: 5, ml: 5 }}>
      <MainBox onClick={searchBoxOpen}>
        <FilterBar>
          <BoldTypo variant="body1">필터링할 언어 추가하기</BoldTypo>
          <ArrowBox filterState={filterState} />
        </FilterBar>
      </MainBox>
      {!filterState ? (
        <SearchBox>
          <SearchBar onChange={searchHandler} />
          <SearchIcon sx={{ color: "#F5BF41", fontSize: "29px", position: "absolute" }} />
          <ResultBox>
            {resultList?.map((obj) => {
              return (
                <ResultTypo onClick={pinkHandler(obj.origName)} key={obj.idx}>
                  {obj.name}
                </ResultTypo>
              );
            })}
          </ResultBox>
        </SearchBox>
      ) : (
        <PickBox>
          {pinkList?.map((tx) => {
            return (
              <Box key={tx} display="flex" alignItems="center" mr={1}>
                <PickTag>{tx}</PickTag>
                <RemoveBox>✖︎</RemoveBox>
              </Box>
            );
          })}
        </PickBox>
      )}
      {/* @@@ */}
      <div style={{ height: "500px" }} />
    </Box>
  );
};

export default FilterBox;
